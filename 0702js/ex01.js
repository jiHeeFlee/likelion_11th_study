//document : 웹문서. 브라우저에서 로드된 웹문서를 나타냄
document.write('<p>javascript는 어려울까나</p>');

/*
변수 : 데이터를 담아 놓기 위해 이름표를 붙여놓은 공간
*/

// var num;
//변수 선언. but 값은 할당 안됨.undefine?

// num = 5;
//변수 초기화

// var num2=10;
//변수 선언과 초기화.

// num=20;
//한번 할당된 데이터 변경 가능

var num3=30;
num3=3;

console.log(num3);
//console.log는 js파일이 한번 읽힐때마다 한번씩 찍힘.

//사용할 수 없는 변수명

//1.숫자가 먼저 오는 경우 -> error / 숫자가 뒤에가는건 ok
//var 1num=>X

//2.공백,맞침표 등 특수문자 맨앞으로 안됨.
//var !num->X

//예약어 : 예약된 키워드/프로그래밍 언어 자체적으로 사용할 단어 혹은 키워드 => 변수X

//변수명(식별자)
// 1. camel case
//var sendEmailDate

//2. snake case : 전체가 소문자 단어 사이는 언더바로 연결
//var send_email_date

//주석(comments)
// 1. single line
// 이 한줄에만 적용이 됨//

// 2. multi line
/*
이렇게
적어도
모든 줄이
다 주석처리가 됨
*/

//자료형 : 데이터의 자료형이 초기화될때 자동적으로 정해짐. 따로 지정하지 않음.
/*
1. 기본형 (원시형, 단순형) : 총 6개
- 숫자 데이터 number : 
- 문자열 string : 
- boolean
- undefined
- null
- symbol

2. 참조형, 객체(object)
*/

// 자바스크립트의 num -> int와 float 구분이 없음.
var price = 10000;
console.log(price);

//string
var myName='테킷';
console.log(myName);

var yourName="멋사";
console.log(yourName);
//주의할 점 : 시작과 끝의 따음표가 같아야함.
/* 따옴표를 문자열 안에서 사용하고 싶으면
사용하고 싶은 따옴표와 다른 따음표로 문자열 감싸줘야함
*/

var ex01='"안녕"이라고 내게 말하지마'
console.log(ex01);

// 역슬래시 사용
var ex02="\'안녕\'이라고 말할건데"
console.log(ex02);

//boolean : True.False 값 -> boolean value는 대소문자 구분함. 소문자가 값을 나타냄
var isTrue = true;
console.log(isTrue);

// var isTrue2=True;
// console.log(isTrue2);
//error

var isFalse=false;
console.log(isFalse);

// var isFalse2=False;
// console.log(isFalse2);
//error

//undefined : 정의되지 않았다. 변수 선언은 했지만 아무 값도 할당되지 않았다.
var a;
console.log(a);

//자바스크립트의 객체
var student = {
    grade:1,
    school:"likelion"
}

console.log(student);

//data type func
//typeof(변수명);

console.log(typeof(student));
//객체타입이라고 출력해줌

/*
객체 object
- 속성의 모음으로 이루어진 데이터
- 속성에는 어떤 데이터 타입이라도 할당 가능
- 속성의 구분 -> , 콤마로
- 속성의 정의 -> 속성명(key):속성값(value)
*/

//객체의 값 호출. . 점 활용
var gradeInfo=student.grade;
console.log(gradeInfo);

//key가 궁금할땐
//객체의 key를 호출하는 방법
var key=Object.keys(student)[0];
console.log(key);

//data 추가 = 속성 추가
student.class = 3

console.log(student);

//객체에서 속성을 불러오는 방법
console.log(student['class']);
console.log(student.class);

//비어있는 객체=깡통 객체 선언 2가지 방법
var teacher=new Object();
var teacher={

};
//객체 iterial

//symbole : 그 자체가 고유하다는 특징이 있음
var name1='김멋사';
var name2='김멋사';

//비교
console.log(name1==name2);
//true

var name3=Symbol('이테킷');
var name4=Symbol('이테킷');
console.log(name3==name4);
//false
//서로 다른 값으로 인식함.

var myclass={
    [Symbol('이테킷')]:1,
    [Symbol('이테킷')]:2
}

//연산자
/*
연산자
 : 한개의 표현식에 대해 산술, 대입, 논리,타입 등을 평가하여
값을 생성하는 작업

1. 산술 연산자
- 사칙연산
*/

var a = 10;
var b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); // 나머지값

console.log(a);
console.log(b);

var c = 7;
console.log(++c);
// 7이 아니라 8
// 변수 앞에 ++ : 변수 값에 +1 한 다음에 console.log가 실행.
//변수 재할당 다음에 출력

c = 7;
console.log(c++);
//변수출력 후 재할당+1됨.

//++뿐만 아니라 --도 같음.

//2. 대입 연산자 = 할당 연산자
var d = 2; // 등호가 대입 연산자.
d = 10;
console.log(d);

console.log(d+=3);
// d=d+3
// 다른 사칙연산 다 적용 가능
// 중요한 점은 연산된 후의 결과를 덮어쓴다는 점. 그래서 덮어써진 값이 console에 print

//3. 비교 연산자
console.log(2 ==2);
//값이 같다 == 
// !=

console.log(2=='2');
//true : 자바 스크립트 엔진이 데이터 타입을 자동으로 변환해서 비교하는 것
//-> 암묵적 형변환
//!=

console.log(2==='2');
//false:type비교하는것. num!=str
//!==

//부등호 비교 연산자

console.log(4>2);
console.log(4<2);
console.log(4>=2);
console.log(4<=2);

//4. 논리 연산자
// 논리합(or) : 피연산자 중에 하나라도 참이면 참을 반환
console.log(true || true);
console.log(true || false || false);
console.log(false || false || false);
console.log('2>3 || 5 == 5 : ',2>3 || 5 == 5);
//비교 연산자 먼저 파악 후 논리 연산자로 넘어감.

// 논리곱(and) : 피연산자 모두가 참이여야 참
console.log(true && true);
console.log(true && false && false);
console.log(false && false && false);
console.log('2>3 && 5 == 5 : ',2>3 && 5 == 5);

// 부정(not) : 피연산자의 boolean 값을 부정.반대
console.log('!true : ',!true);
console.log('!false : ',!false);
console.log('!(5>4) : ',!(5>4))

//5. typeof 연산자
console.log(typeof 1);
console.log(typeof '1');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log('typeof null : ',typeof null);
//null은 비교연산자로 사용하기.typeof 사용하여 쓰지말기

// 문자열 선언
var greeting='hello';
var greeting2="hello!";
var myname='김테킷';
var farewell='Bye!'

var sentence=greeting+myname;
//공백 없이 바로 붙어서 표현됨
console.log(sentence);

var sentence=greeting+' '+myname;
console.log(sentence);
var sentence=greeting+'\n'+myname;
console.log(sentence);

console.log(farewell+2);

// 이스케이프 시퀀스
var sentence=greeting+'\n'+myname;
console.log('"\m" : ',sentence);

var sentence=greeting+'\t'+myname;
console.log('"\t" : ',sentence);

var sentence=greeting+'\"'+myname;
console.log("'\"' : "  ,sentence);

var sentence=greeting+'\\'+myname;
console.log('"\\" : ',sentence);

// 템플릿 리터럴
var a=`문자열과 똑같이 작성`
console.log(a);

var b=`안녕
여러분!`
console.log(b);
//개행한 그대로 console창 뜸
//멀티라인 텍스트 작업 가능
//이스케이프 시퀀스 필요 X

var price=1000;
var b='이 물건은 '+ price+'원 입니다.'

console.log(b)

var c=`이 물거언은 ${price}원입니다.`
console.log(c);
//변수 뿐만 아니라 연산과정도 가능
var d=`이 물거어언은 ${200+450}원입니다.`
console.log(d);

// 문자열 함수
var abc = 'I am iron man';

// 1. indexOf
//문자열의 특정 값이 시작되는 위치
console.log(abc.indexOf("man"));

// 2. slice
//문자열의 일부를 잘라낼 때
console.log(abc.slice(0,3));
console.log(abc.slice(0,4));

// 3,toUpperCase(),toLowerCase()
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// 4. startsWith().endsWith()
// 대소문자 구분함. 
var efg = 'This is my car.';
console.log(efg.startsWith('Th'));
console.log(efg.endsWith('car.'));

// 5. includes()
console.log(efg.includes('is'));


/*
배열Array
- 복수의 데이터를 순서대로 담고 있는 자료구조
- 배열의 순서는 0부터 시작
- 배열은 일종의 객체
- key -> index / value -> elem
*/

var mbti=['INFP','ENFJ','INTJ'];
console.log('mbti[0] : ',mbti[0]);
console.log('mbti.length : ',mbti.length);

mbti[3]='ESFP';
console.log('mbti.length : ',mbti.length);

//요소 값 덮어쓰기
// mbti[2]='ISTJ';
// console.log(mbti[2]);

// 1. push()
// 사용자가 전달한 데이터를 배열의 마지막에 넣기
console.log(mbti.push('ESFP','ISTJ'));

//스프래드 문법
var newMbti=[...mbti,'ESFP','ISTJ']
console.log('newMbti : ',newMbti)
console.log('mbti : ',mbti)

// 2. pop()
console.log(mbti.pop());
console.log(mbti)

// 3. unshift()
// 앞쪽 기준으로 달라짐
console.log('u shift : ',mbti.unshift('ESFP','ISTJ'));

//스프래드 문법
var newMbti=['ESFP','ISTJ',...mbti]
// console.log('newMbti : ',newMbti)
// console.log('mbti : ',mbti)

// 4. shift()
console.log(mbti.shift());
console.log(mbti);

// slice() : 배열 복사
console.log(mbti.slice(0,2));
// 전체 복사 : slice()안에 아무런 인자를 안 넣으면 됨
console.log(mbti.slice());
//끝에서 부터 : -1. 음수붙으면됨.
console.log(mbti.slice(-1));

// join()
console.log('mbti.join() : ',mbti.join());
//문자열로 합쳐짐. , 기준으로
console.log('mbti.join("-") : ',mbti.join("-"));
// 원하는 연결을 괄호 안에 넣으면 그걸로 연결됨

// sort()
console.log(mbti.sort());
//알파벳 오름차순 정렬

// reverse() : sort()역순
console.log(mbti.sort().reverse());

/*
제어문 control flow
1. 조건문
2. 반복문
*/

// 1. if ... else
if ( a>2 ){
    console.log('a>2');
}else{
    console.log('a<=2');
}

// 2. if...else if...else
if (a>2){
    console.log('a>2');
}else if (a==2){
    console.log('a=2');
}else if (a==0){
    console.log('a=0');
}else if (a<2){
    console.log('a<2')
}else{
    console.log('a<2');
}

// if 문 사용시 주의할 점
// 각 조건의 true에 해당하는 조건이 있으면 거기서 출력됨. 뒤의 조건들은 출력x

// 3. switch 문

var mbti = 'INFP';
var val;

switch(mbti){
    case 'INFP':
        val='INFP'; // if에서는 조건 만족하면 끝.but switch는 끝까지 실행.
        break;
    case "ENFP":
        val='ENFP';
        break;
    case 'ISFP':
        val='ISFP';
        break;
    //mbti의 값이 위의 경우일 경우
    default:
        val = '유효한 겂이 아닙니다.' // 그래서 default까지실행되는것.
}

//break문을 사용해야함.

console.log(val);

// 반복문 loop
// 조건을 만족했을 때에만 반복.

// 1. for문 : 횟수 예측 가능

// i값 증가 경우
for(var i = 0; i<10; i++){
    console.log(i)
}

//i값 감소 경우
for (var i=10; i>0; i--){
    console.log(i)
}
// 몇 번 loop를 도는지가 중요

//중첩 반복문 
for (var i = 0; i<10; i++){
    for (var j = 0; j<10; j++){
        console.log(`${i} - ${j}`)
    }
}


// 2. while 문 : 특정 조건에 따라서 반복문 제어
var flag=10;
while(flag>0){
    console.log(flag);
    flag--;
}
//무한루프에 안빠지게 조심해줘야함

// 3. do...while
console.log('do...while')
var flag=10;

do{
    console.log(flag);
    flag--;
}while(flag>10)
// 조건과 상관 없이 무조건 한번 돌려야 한다 -> do 
// do문의 코드 돌린다음 wihle로 넘어가서 while의 조건이 true인 경우에만 실행

/*
예외 처리 error처리
*/

try{
    //에러 발생할 가능성이 있는 코드
    myfunc();
    throw new Error("에러");

}catch(error){
    //에러 발생 시 실행되는 코드
    console.log('error 발생');
    console.log(error);
}finally{
    //에러 발생 여부와 상관 없이 무조건 실행
    console.log('무조건 실행');
}


// 함수선언문 functions
// 어떤 작업의 묶음. 코드를 반복해서 작성해야하는 비효율을 줄임.

function multiply(a,b){
    return a*b;
}

console.log(multiply(10,5));

var result=multiply(435,24);
console.log(result);

//함수 표현식
var multiply=function clac(a,b){
    return a*b;
};

console.log(multiply(2,3))
// console.log(calc(3,4));

// 변수 키워드 - var / let / const

var a = 10;
while(true){
    var a = 1000;
    break; // 무한루프 안빠지게 조심!
}
console.log(a);

//javascript는 var로 선언된 변수는 while문 안에서도 전역으로 사용 가능함
//그래서 while문 밖에서 선언된 var a 변수가 변경된것.

//호이스팅
console.log(word);
word='nibal';
console.log(word);
var word;
//undefinded 출력

//var을 보완하기 위해 -> let 등장
let word2;

console.log(word2);

word2='hoho'

console.log(word2);


let e = 10;

while (true){
    let e = 1000;
    break;
}

console.log(e);

// const : 상수(항상 변하지 않는 값)라는 뜻의 약자

const f= 2 ;
console.log(f);

// f = 3;

const Pi = 3.14;


// const로 선언된 변수에 할당된 객체
const student2={
    grade:1,
    class:3
};

student2.grade = 2;
//객체 안의 속성은 변경 가능. but 객체는 변경 안됨

console.log(student2);

// student={
//     num:234,
//     grade:4
// };
// console.log(student);

// 화살표 함수

let plus = (a,b)=>{
    return a+b
};

console.log(plus(2,3));

let plus2=(a,b)=>a+b;
console.log(plus2);

let print=word=>{
    console.log(word);
}

print("Hello!");

// 함수는 입력값이 없을 수도 있음

let myfunc=()=>{
    return 1;
}

console.log(myfunc);