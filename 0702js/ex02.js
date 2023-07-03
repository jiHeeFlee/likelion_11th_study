var el = document.getElementById('brand-title');

console.log(el);

console.log(el.innerHTML);
console.log(el.innerText);

el.innerText = "안녕하세요 :)"

var el2=document.getElementsByClassName('sub-title');
console.log(el);

// 이벤트
// 1. form 이벤트 : 사용자가 제출/초기화
// 2. 마우스 이벤트 : 클릭,더블클릭,마우스 이동
// 3. 키보드 이벤트 : keydown 이벤트, keypress, keyup 
// on + 이벤트 타입

var el = document.getElementById('brand-title')

var myfunc=function (){
    alert('addEventListener');
};

el.addEventListener("click",myfunc);