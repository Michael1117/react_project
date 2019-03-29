import React from 'react';
import ReactDOM from 'react-dom';


class Dialog extends React.Component{
    constructor(){
        super()

        /*
        * this.props: 属性集合
        * this.refs: REF集合 (非受控组件)
        * this.context: 上下文
        * */
    }

    render() {
        return (
            <div>
                <h3>系统提示</h3>
                <Dialog/>
                <div></div>
            </div>
        );
    }
}

ReactDOM.render(<div></div>, document.querySelector('#root'))

