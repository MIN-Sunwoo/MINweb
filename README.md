# 1-1
식별자, 변수명 variable a

# 1-2
변수 a에 데이터 할당

# 1-3
기본형 데이터는 불변값이다

# 1-4
참조형 데이터

# 1-5
프로퍼티 재할당

# 1-6
중첩된 참조형 데이터의 프로퍼티 할당

# 1-7
변수 복사

# 1-8
10을 15로 바꾸는게 아닌 15를 따로만듬. 10은 불변

# 1-9
기존의 cd는 변하지 않고 새로운 cd가 둘 다 존재한다

# 1-10
복사가 아닌 참조이다.

# 1-11
return으로 새로운 객체를 생성

# 1-12
얕은 복사

# 1-13
CopyObject를 이용한 객체 복사

# 1-14
user2의 urls를 바꾸면 user의 urls도 바뀌는 문제점

# 1-15
깊은 복사

# 1-16
깊은 복사 범용 함수

# 1-17
JSON을 활용한 깊은 복사. 함수는 카피되지 않는다.

# 1-19
undefined

# 1-20
undefined와 배열

# 1-21
foreach, map, filter, reduce

# 1-22
undefined와 null 비교

# 2-1
콜스택 개념

# 2-2
1/1/2 출력

# 2-5
첫 var b는 function b에 의해 사라진다.

# 2-7
2-5와 다른 표현으로 같은 코드

# 2-8
c는 실행되지만, d가 정의가 안돼있어서 에러가 나온다

# 2-9
sum은 실행되지만 안좋은 함수 표현, multiply는 실행이 안되지만 좋은 함수 표현

# 2-11
함수 선언의 위험성, 함수 표현식이 더 안전하다.

# 2-12
함수 표현식이 더 안전하다.

# 2-13
스코프 체인

# 3-2
전역공간에서 this와 global은 같다

# 3-3
global.a, this.a는 undefined

# 3-4
a, global.a, this.a는 다르다

# 3-5
global만 선언하는건 안된다.

# 3-6
모든 function은 this를 가지고 있다

# 3-7
메서드로서 호출- 점 표기법, 대괄호 표기법

# 3-8
메서드 내부에서의 this 다른표기법법

# 3-9
내부함수에서의 this. 모든 함수는 this가 있다.

# 3-10
괄호안에 호출한 object가 없으면 global

# 3-11
내부 this가 없으면 scope chain을 찾아서 첫 번째로 있는 this를 찾는다

# 3-12
함수의 arg를 함수로 호출하면 콜백함수다

# 3-13
cat 앞에 new가 있으므로 생성자로 동작한다

# 3-14
call 메서드

# 3-15
call 메서드

# 3-16
this는 a:4

# 3-17
push로 d 추가, slice로 object에서 array로 변경

# 3-18
call/apply 메서드의 활용

# 3-19
call/apply 메서드의 활용

# 3-20
call/apply 메서드의 활용

# 3-21
person, student, employee의 this는 따로 있다

# 3-22
최대, 최솟값을 직접 구하는 코드

# 3-23
Math.max/min을 사용하여 편하게 구현

# 4-1
setInterval은 webAPI

# 4-2
clearInterval은 webAPI

# 4-3
map은 Array.prototype의 함수 중 하나. map의 this는 global

# 4-4
index, currentvalue의 순서가 중요하다. 이름은 중요하지 않음

# 4-5
A||B는 A가 있으면 A수행, A가 없으면 B 수행

# 4-6
foreach는 Array.prototype의 함수

# 4-7
메서드를 콜백 함수로 전달한 경우

# 4-8
1초 후 obj1이 출력된다

# 4-10
1초 후 obj1, 1.5초 후 obj2, 2초 후 obj3 출력

# 4-11
1초 후 obj1, 1.5초 후 obj2 출력력

# 서버,클라이언트
서버와 클라이언트 작동 순서

# 비동기처리callback
비동기 처리 callback

# 비동기처리callback2
비동기 처리 callback2

# 콜백함수를통한비동기처리
콜백 함수를 통한 비동기 처리

# 콜백함수를통한 비동기 처리의 문제점
콜백을 중첩해서 호출하면 가독성이 떨어짐

# promise의개념
then function 사용을 위해 promise instance를 찾아야함.

# promise 생성 방법
function의 task가 오래걸린다고 가정. 결과를 resolve에 담는다. 에러를 reject에 담는다.

# promise 사용 방법
promise 사용 방법

# async/await 키워드를 통한 비동기 코딩
await는 async함수 안에서만 작동한다

# 자바스크립트 동작 원리 - Async, Await
자바스크립트 동작원리 Async, Await

# 제너레이터1
generator가 반복자로 사용된다.

# 제너레이터2
for of는 done:true일 때 마지막 value를 무시한다.

# 제너레이터3
...으로 반복 가능한 제너레이터 객체를 배열 요소로 바꾼다.

# 제너레이터4
yield*으로 generator 함수를 수행시키는 것처럼 사용 가능.

# 제너레이터5
yield를 이용한 정보 교환

# 5-1
외부 함수의 변수를 참조하는 내부 함수1

# 5-2
외부 함수의 변수를 참조하는 내부 함수2

# 5-3
외부 함수의 변수를 참조하는 내부 함수3

# 5-4
return 없이도 클로저가 발생하는 다양한 경우

# 5-5
클로저의 메모리 관리

# 5-6
콜백 함수와 클로저

# 5-7
콜백 함수와 클로저2

# 5-9
콜백 함수와 클로저4

# 5-10
간단한 자동차 객체

# 5-11
클로저로 변수를 보호한 자동차 객체1

# 5-13
bind 메서드를 활용한 부분 적용 함수

# 5-17
커링함수1

# 5-18
커링함수2

# 6-1
Person.prototype

# 6-2
prototype과 __proto__

# 6-5
다양한 constructor 접근 방법

# 6-6
메서드 오버라이드

# 6-8
메서드 오버라이드와 프로토타입 체이닝

# 6-9
Object.prototype에 추가한 메서드에의 접근

# 6-10
Grade 생성자 함수와 인스턴스

# 7-1
스태틱 메서드, 프로토타입 메서드

# 7-3
클래스

# 7-5
Rectangle Square 클래스

# 7-7
클래스 7-7

# 7-8
클래스 7-8

# 7-9
클래스 7-9

# 7-10
클래스 7-10

# 7-11
클래스 상속 및 추상화 방법1

# 7-12
클래스 상속 및 추상화 방법2

# 7-13
클래스 상속 및 추상화 방법3
