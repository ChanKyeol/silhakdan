# set() 자료구조 - 생성시 추가와 Spread(펼침) 연산자 출력

## 생성시 값을 추가하는 방법

```javascript
let ar = new Set().add("X").add("Y");
console.log(ar); //X, Y
```

### 추가, add()

```javascript
ar.add("A");
ar.add("B");
ar.add("C");

console.log(ar); // X, Y, A, B, C
console.log(ar.size); // 5
```

## Spread 연산자를 사용해 출력하는 방법

펼침 연산자는 이터러블 객체(Iterable Object)의 요소를 하나씩 분리하여 전개한다.

```javascript
let testArr = ["k", "o", "r", "e", "a"];

console.log(...testArr); // k, o, r, e, a
console.log([...testArr]); // ["k", "o", "r", "e", "a"]

console.log([..."hello"]); // ["h", "e", "l", "l", "o"]

console.log(...ar);
console.log([...ar]);
```
