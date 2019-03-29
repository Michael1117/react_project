/*
let styleObj = {
    color: 'red'
}
*/

function createElement(type, props, children) {
    props = props || {}
    let obj = {
        type: null,
        props: {
            children: ''
        },
        ref: null,
        key: null
    }

    //obj = {...obj, type, props}
    //obj.type = type;
    obj = {...obj, type, props: {...props, children}};

    // => 把ref和key提取出处(并且删除)
    //('key' in obj.props) ? (obj.key = obj.props.key , obj.props.key = undefined) : null;
    //('ref' in obj.props) ? (obj.ref = obj.props.ref , obj.props.ref = undefined) : null;
    if('key' in obj.props) {
        obj.key = obj.props.key;
        obj.props.key = undefined
    }else {
        obj.key = null;
    }

    if('ref' in obj.props) {
        obj.ref = obj.props.ref;
        obj.props.ref = undefined
    }else {
        obj.ref = null;
    }
    return obj;
}

/*
console.log(createElement(
    'h1',
    {id: 'titleBox', className: 'title', style: styleObj, ref: 'AA', key: '12'},
    '\u73E0\u5CF0\u57F9\u8BAD'
));*/


let objJSX = createElement(
    'h1',
    {id: 'titleBox', className: 'title', style: {color: 'red'}, ref: 'AA', key: '12'},
    '\u73E0\u5CF0\u57F9\u8BAD'
);

/*
* RENDER: 把创建的对象生成对应的DOM 元素 最后插入到页面中
* */

function render(obj, container, callBack) {
    let {type, props} = obj || {};
    let newElement = document.createElement(type)

    for (let attr in props) {
        if (!props.hasOwnProperty(attr)) break;  // => 不是私有的 直接结束遍历
        if (!props[attr]) continue;  // => 如果当前属性没有值，直接不处理即可

        let value = props[attr];
        // => className的处理
        if (attr === 'className') {
            newElement.setAttribute('class', value)
            continue;
        }

        // => style的处理
        if (attr === 'style') {
            if(value === '') continue
            for (let styKey in value) {
                if (value.hasOwnProperty(styKey)) {
                    newElement['style'][styKey] = value[styKey];
                }

            }
            continue;
        }

        // => children的处理
        if(attr === 'children'){
            if(typeof value === 'string') {
                let text = document.createTextNode(value);

                newElement.appendChild(text)
            }

            continue
        }
        newElement.setAttribute(attr, value);  // 基于setAttribute可以让设置的属性表现在html的结构上
    }

    container.appendChild(newElement);

    callBack && callBack();

}
let root = document.querySelector('#root');
render(objJSX, root, () => {
    console.log('ok');
})