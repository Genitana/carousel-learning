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

let root = document.createElement("div");
root.className = 'carousel';
let children = [];
d.forEach(item => {
  let child = document.createElement("img");
  child.src = item.img;
  children.push(child);

  root.appendChild(child);
})

// root.appendChild(children[0]);

document.body.appendChild(root);



let current = 0;

setInterval(  () => {
  
  let next = (current +1) % children.length;

  children.forEach(item => {
    item.zIndex = 0;
  }) 

  let currentElement = children[current];
  let nextElement = children[next];

  currentElement.zIndex = 1;
  nextElement.zIndex = 1;

  currentElement.style.transition = 'none';
  nextElement.style.transition = 'none';

  currentElement.style.transform = `translateX(${-  current * 100}%) `;
  nextElement.style.transform = `translateX(${100- next * 100}%)`

  setTimeout(() => {
    currentElement.style.transition = ''; // 打开渐变效果
    nextElement.style.transition = '';

    // 向左移动
    currentElement.style.transform = `translateX(${-100 - current * 100}%)`;
    nextElement.style.transform = `translateX(${- next * 100}%)`;

    current = next;
  }, 16) 

}, 2000);



class Carousel {



}