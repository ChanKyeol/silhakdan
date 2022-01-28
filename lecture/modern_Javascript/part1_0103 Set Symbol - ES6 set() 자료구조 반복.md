# Set() 자료구조 - 반복

```javascript
let arr = ["a", "b", "c", "d", "e"];
```

## 전통적인 for 반복문

```javascript
for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}

console.log("____________________");
```

## forEach() 메서드를 사용한 반복

```javascript
ar.forEach(function(x) {
  console.log(x)
}

ar.forEach( val => console.log(val);
```

## for..in 과 for..of 를 활용한 반복

```javascript
let testSet3 = new Set( [”tiger”, “lion”, “dog”, “cat”] );
testSet3.add("hippo")
console.log(testSet3); // {”tiger”, “lion”, “dog”, “cat”, "hippo"}

console.log(testSet3[0]); // undefined, Set 요소는 일반 배열처럼 index 로 접근 불가

for(let i in testSet3) {
  console.log(i); // undefined, Set 는 index 를 갖지 않음
}

for(let i of testSet3) {
  console.log(i); // {”tiger”, “lion”, “dog”, “cat”, "hippo"}, Set 의 각 요소가 순차적으로 표현
}

let arr = [...testSet3];
console.log(arr(0)); // "tiger"
console.log(arr(1)); // "lion"
```

## Set자료구조의 다양한 메서드

### keys() 메서드

Iterator(반복자) 객체를 반환, Iterator.next() 메소드를 활용하여 다음 값에 접근

```js
const key_itr = testSet3.keys();

console.log(key_itr.next().value); // "tiger"
console.log(key_itr.next().value); // "lion"
console.log(key_itr.next().value); // "dog"
console.log(key_itr.next().value); // "cat"
```

### values() 메서드

Iterator(반복자) 객체를 반환, Iterator.next() 메소드를 활용하여 다음 값에 접근

```js
const val_itr = testSet3.values();

console.log(val_itr.next().value); // “tiger”
console.log(val_itr.next().value); // “lion”
console.log(val_itr.next().value); // “dog”
console.log(val_itr.next().value); // “cat”
```

## for..of 반복문으로 출력하기

배열이 아니기 때문에 for..in 문으로는 Set 요소 접근 불가

```js
for (let i of testSet3) {
    console.log(i); // tiger, lion, dog, cat 를 순차적으로 출력
}
```

## entries() 메서드

entries() 메서드는 Set 요소 각각의 요소에 대해서 배열로 반환을 해준다.

Set 는 value 가 곧 key 이기 때문에 다음과 같이 key, value 가 같게 반환된다.

삽입 순으로 Set 요소 각각에 대해서 [value, value] 배열 형식으로 새로운 객체를 반환.

```js
let testSet5 = new Set();
testSet5.add("홍길동");
testSet5.add("이순신");
testSet5.add("강감찬");

const entries = testSet5.entries();

for (let i of entries) {
    console.log(i); // [ ["홍길동", "홍길동], ["강감찬", "강감찬"], ["이순신", "이순신"] ]
}
```
