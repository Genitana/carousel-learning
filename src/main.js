function create(Class, prop, ...children){

  let element; 

  if (typeof Class ==="string"){
    element = document.createElement(Class);
  }else {
    element = new Class;
  }

  for(let p in prop){
    element.setAttribute(p, prop[p]);
    // element[p] = prop[p]; // 有坑
  }

  for(let ele of children) {
      if(typeof ele === 'string') {
        ele = document.createTextNode(ele);
      }

      if(ele.appendTo){
        ele.appendTo(element);
      }else {
        element.appendChild(ele);
      }
  }

  return element;
}




class Carousel {
  constructor(data) {
    this._root = document.createElement('div');
    this._root.classList.add("carousel");
    this.children = [];
  } 

  set data(data) {
    this._root.innerHTML = '';

    for (let record of data) {
      let element = document.createElement('img');
      element.src = record.img;
      this._root.appendChild(element);
      this.children.push(element);
    }

    let current = 0;
    setInterval(() => {
      let next = (current+1) % this.children.length;

      for(let ele of this.children) {
        ele.style.zIndex = '0'; //先都隐藏
      }

      let currentElement = this.children[current];
      let nextElement = this.children[next];

      currentElement.style.zIndex = '1'; //把要轮播的两张显示
      nextElement.style.zIndex = '1';

      currentElement.style.transition = 'none'; // 把渐变动画关闭
      nextElement.style.transition = 'none';

      //把要轮播的先放到指定位置
      currentElement.style.transform = `translate3d(${- 100 * current}%, 0, 0)`;
      nextElement.style.transform = `translate3d(${100 - 100 * next}%, 0, 0)`


      setTimeout(() => {
        currentElement.style.transition = '';// 把渐变动画打开
        nextElement.style.transition = '';

        //轮播图左移
        currentElement.style.transform = `translate3d(${-100 - 100 * current}%, 0, 0)`;
        nextElement.style.transform = `translate3d(${ -100 * next}%, 0, 0)`;
        
        current = next;
      }, 16);

    }, 2000);
  }

  setAttribute(name,value) {
    this[name] = value;
  }

  appendTo(parent){
    parent.appendChild(this._root);
  }
}


let d = [
  {
      img: "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
      url: "https://time.geekbang.org",
      title: "蓝猫"
  },
  {
      img: "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
      url: "https://time.geekbang.org",
      title: "橘猫"
  },
  {
      img: "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
      url: "https://time.geekbang.org",
      title: "橘猫加白"
  },
  {
      img: "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
      url: "https://time.geekbang.org",
      title: "猫"
  }
]


let a = <div a='a' b='b'>
  <Carousel data={d}></Carousel>
  <span>a</span>
  <span>b</span>
  <span>c</span>
</div>

document.body.appendChild(a);