import React from 'react';
import ReactDOM from 'react-dom';



/*ReactDOM.render(<div>
    <h2>Hello World</h2>
</div>, document.querySelector('#root'))*/


let name = "Michael",
    data = [{id: 1, title: 'xxx'}, {id: 2, title: 'yyyy'}]

/*
ReactDOM.render(<div>
    <h2>Hello World</h2>
    <h3>{name}</h3>
    {
        data.map((item, index) => {
            return <li>
                {item.id} - {item.title}
            </li>
        })
    }
</div>, document.querySelector('#root'))*/

ReactDOM.render(<ul></ul>, document.querySelector('#root'))
