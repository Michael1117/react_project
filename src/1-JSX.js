/*
* create-element: 创建JSX对象
*   参数：至少两个 type/props, children这个部分可能没有 可能有多个
* */

function createElement(type, props, ...childrens) {
    let ref, key;
    if ('ref' in props) {
        obj.key = obj.props.key;
        obj.props.key = undefined
    }
    if ('key' in props) {
        obj.key = obj.props.key;
        obj.props.key = undefined
    }

    return {
        type,
        props: {
            ...props,
            children: childrens.length <= 1 ? (childrens[0] || '') : childrens
        },
        ref,
        key
    }
}

createElement('div', null)  //

function render(objJSX, container, callBack) {

}

export {
    createElement,
    render
}