import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './component/Dialog.js'

let root = document.querySelector('#root')
ReactDOM.render(<div>
   {/*JSX调取组件*/}
   <Dialog con='哈哈哈' style={{color: 'red'}}/>
   <Dialog con="嘿嘿嘿" lx={2}>
       <span>1</span>
       <span>2</span>
   </Dialog>
</div>, root)




