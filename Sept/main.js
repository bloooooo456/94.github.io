let img1=document.querySelector('img');
//图片切换代码；
img1.onclick=function () {
    let src1=img1.getAttribute('src');
    if (src1==='qcx/4.jpg'){
        img1.setAttribute('src','qcx/5.jpg');
    }else {
        img1.setAttribute('src','qcx/4.jpg');//要设置的属性名和要设属性值
    }
};
//个性化信息
function setHeading(name) {
    let myheading=document.querySelector('h2');
    myheading.textContent="欢迎来到我的岛屿，"+name+"!";
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;