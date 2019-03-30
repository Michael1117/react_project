import React from 'react';
import ReactDOM from 'react-dom';

/*let name = "Michael",
    data = [{id: 1, title: 'xxx'}, {id: 2, title: 'yyyy'}]*/


ReactDOM.render(<section
    id={'box'}
    className={'box'}
    style={{color: 'red'}}

    onClick={ev => {
        console.log(ev);
    }}>
    <h2 className={'title'} >Hello World</h2>
    <p className={'content'}>最强大的xxxx</p>
</section>, document.querySelector('#root'))
