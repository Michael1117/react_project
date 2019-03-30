import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './component/Banner'
import './static/css/reset.min.css'
//import A5 from './static/images/5.jpg'

// 在React 的jsx中需要使用图片等资源的时候 资源的地址不能使用相对地址 ()
let img_data = [];

for (let i = 1; i <= 5; i++) {
    img_data.push({
        id: i,
        title: '',
        pic: require(`./static/images/${i}.jpg`)
    })

}

ReactDOM.render(<div>
    {/*data:轮播图需要绑定的数据 interval：间隔时间(3000) step:默认索引(前后各克隆一张) speed:速度(200ms)*/}
    <Banner data={img_data} interval={3000} step={2} speed={300}/>
    <div style={{margin: '20px auto'}}>

    </div>
    <Banner data={img_data.slice(2)} interval={5000} step={3}/>
</div>, document.querySelector('#root'))