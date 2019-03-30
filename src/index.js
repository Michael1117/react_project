import React from 'react';
import ReactDOM from 'react-dom';

/*let name = "Michael",
    data = [{id: 1, title: 'xxx'}, {id: 2, title: 'yyyy'}]*/


let createElement = (type, props, ...childs) => {
    props = props || {};
    // = ref && key
    let ref = null,
        key = null;
    //'ref' in props ? (ref = props['ref'], props['ref'] = undefined) : null
    if ('ref' in props) {
        ref = props['ref'];
        props['ref'] = undefined
    }
    //'key' in props ? (key = props['key'], props['key'] = undefined) : null

    if ('key' in props) {
        ref = props['key'];
        props['key'] = undefined
    }
    return {
        type,
        props: {
            ...props,
            children: childs.length <= 1 ? (childs[0] || '') : childs
        },
        ref,
        key,
        /*$$typeof: Symbol(react.element),
        _owner: null,
        _store: {
            validated: false
        },
        _self: null,
        _source: null*/
    }
}

/*ReactDOM.render(<section
    id={'box'}
    className={'box'}
    style={{color: 'red'}}

    onClick={ev => {
        console.log(ev);
    }}>
    <h2 className={'title'} >Hello World</h2>
    <p className={'content'}>最强大的xxxx</p>
</section>, document.querySelector('#root'))*/


let objJSX = createElement("section", {
    id: 'box',
    className: 'box',
    style: {
        color: 'red'
    },
    onClick: function onClick(ev) {
        console.log(ev);
    }
}, createElement("h2", {
    className: 'title'
}, "Hello World"), createElement("p", {
    className: 'content'
}, "\u6700\u5F3A\u5927\u7684xxxx"));

console.log(objJSX);


// render
let render = function (objJSX, container, callBack) {
    console.log(objJSX);
    let {type, props} = objJSX,
        {children} = props,
        newElement = document.createElement(type);

    for (let attr in props) {

        if (!props.hasOwnProperty(attr)) break;
        let valueJSX = props[attr]
        if (typeof valueJSX === 'undefined') valueJSX = ''


        // 事件属性
        let regEvent = /^on/
        if (regEvent.test(attr)) {
            newElement.addEventListener(attr.toLowerCase().substr(2), valueJSX.bind(undefined), false)
            continue
        }

        // 特殊属性处理
        switch (attr.toUpperCase()) {
            case 'CLASSNAME':
                newElement.setAttribute('class', valueJSX);
                break;
            case 'STYLE':
                for (let styATTR in valueJSX) {
                    if (valueJSX.hasOwnProperty(styATTR)) {
                        newElement.style[styATTR] = valueJSX[styATTR]
                    }
                }
                break;
            case 'CHILDREN':
                if (!(valueJSX instanceof Array)) {
                    valueJSX = [valueJSX]
                }
                valueJSX.forEach((item, index) => {
                    if(typeof item === 'string') {
                        newElement.appendChild(document.createTextNode(item))
                        return
                    }

                    render(item, newElement)
                })
                break;
            default:
                newElement.setAttribute(attr, valueJSX)
        }
        //

        //newElement.setAttribute(attr, valueJSX)
    }

    container.appendChild(newElement)

    callBack && callBack()
}

render(objJSX, document.querySelector('#root'))
