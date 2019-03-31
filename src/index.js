import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.css'

import ReactSwipe from 'react-swipe'
import './static/css/reset.min.css'
import './static/css/index.css'


/*
* 准备数据  jsx 中要使用绝对地址
* */
let img_data = []

for (let i = 1; i <= 3; i++) {
    img_data.push({
        id: i,
        title: '',
        pic: require(`./static/images/${i}.jpg`)
    })

}

/*ReactDOM.render(<main>
    {/!*interval:切换时间  step:图片索引  speed: 速度 *!/}
    <Banner data={img_data} interval={3000} step={1} speed={300} />
</main>, document.querySelector('#root'))*/

ReactDOM.render(<main>
    <ReactSwipe className={'container'} swipeOptions={{
        auto: 2000
    }}>
        {/*<div><img src="" alt=""/></div>*/}
        {
            img_data.map((item, index) => {
                let {pic, title} = item;
                return <div key={index}>
                    <img src={pic} alt={title}/>
                </div>
            })
        }
    </ReactSwipe>
</main>, document.querySelector('#root'))
