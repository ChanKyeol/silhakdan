# Set과 Symbol

## Set과 Map

map과 set은 Es6에서 새롭게 도입한 자료구조

-   **Map**은 key와 value를 한 쌍으로 묶는다는 점에서 객체(object)와 비슷함
-   **Set**은 중복을 허용하지 않는다는 특징을 빼면 배열과 유사

## Set

-   set 는 수학의 집합과 비슷한 개념

## 특징

-   Array는 같은 값을 가질 수 있지만, Set는 같은 값을 중복해서 가질 수 없다.

-   중복제거에 유용

```javascript
// Set 기본 예제

let array = [1, 2, 3, 4, 5, 5];
console.log(array); //1,2,3,4,5,5
console.log(array[4]); //5
console.log(array[5]); //5
```

## set 사용법

### 생성

```javascript
let ar3 = new Set(); // 비어있는 set(집합)을 생성
console.log(ar3); // object set 객체를 반환
```

### 추가, add()

```javascript
ar3.add("A");
ar3.add("B");
ar3.add("C");
ar3.add("C");
ar3.add("A");
ar3.add("A"); // 중복되는 값을 허용하지 않음
console.log(ar3); // A, B, C
console.log(ar3[0]); // undefined, 배열의 사용법과는 다름
```

### 사이즈, size

```javascript
console.log("ar3 사이즈는 = ", ar3.size); // 3
```

### 삭제, delete()

```javascript
ar3.delete("C");
console.log(ar3); // A, B
```

### 한번에 모두 삭제, clear()

```javascript
ar3.clear();
console.log(ar3); // ''
```
