# 3. set() 자료구조 - 반복

```javascript
let ar = ["a", "b", "c", "d", "e"];
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

## Set자료구조의 다양한 메서드 —> keys(), values()

```javascript
let testSet3 = new Set( [”tiger”, “lion”, “dog”, “cat”] );
testSet3.add("hippo");

console.log(testSet3); // {”tiger”, “lion”, “dog”, “cat”, "hippo"} set객체

console.log(tesrSet3); // 기대값: tiger --> ubdefined

for ( let i in testSet3) { // --> undefined
		console.log(i);
}

for ( let i of testSet3) { // -->  {”tiger”, “lion”, “dog”, “cat”, "hippo"}
		console.log(i);
}

let arr = [...testSet3];
console.log(arr(0)); // "tiger"
console.log(arr(1)); // "lion"
```

1. keys() 메서드 —> Iterator(반복자) 객체를 반환 —> next() 메서드

```javascript
const key_itr = testSet3.keys();

console.log(key_itr.next().value); // "tiger"
console.log(key_itr.next().value); // "lion"
console.log(key_itr.next().value); // "dog"
console.log(key_itr.next().value); // "cat"
```

2. values() 메서드 —> Iterator(반복자) 객체를 반환 —> next() 메서드

```javascript
const val_itr = testSet3.values();

console.log(val_itr.next().value); // “tiger”
console.log(val_itr.next().value); // “lion”
console.log(val_itr.next().value); // “dog”
console.log(val_itr.next().value); // “cat”
```

## for .. of 반복문으로 출력 (배열이 아니기 때문에 in으로는 출력 불가)

```javascript
for (let i of testSet3) {
    console.log(i);
} // tiger \n lion \n dog \n cat
```

## extries() 메서드

```javascript
let testSet5 = new Set();
testSet5.add('홍길동');
testSet5.add('이순신');
testSet5.add('강감찬');

const entries = testSet5.entries();

for(let i of entires) {
		console.log(i);
} // ["홍길동", "홍길동] , ["강감찬", "강감찬"], ["이순신", "이순신"]

entries() 메서드는 Set 요소 각각의 요소에 대해서 배열로 반환을 해준다.
```

### 삽입 순으로 Set 요소 각각에 대해서 [value, value] 배열 형식으로 새로운 객체를 반환.
