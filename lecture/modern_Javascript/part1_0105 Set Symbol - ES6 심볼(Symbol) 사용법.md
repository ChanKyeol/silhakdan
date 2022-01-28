# ES6 심볼(Symbol) 사용법

## 심볼의 특징

### new 연산자를 사용하지 않는 심볼

Symbol() 함수를 사용하여 `new` 키워드 없이 생성가능하다.

```js
let symbol = Symbol();
```

### 심볼의 파라미터

괄호안은 비어두고 생성해도 되고, 문자열을 넣어서 생성해도 된다.

보통 이때의 문자열은 단순 디버깅이나 값에 대한 설명을 하기 위한 용도일 뿐 고유한 값을 가지는데 있어서 어떤 영향을 끼치거나 하지는 않는다.

따라서, description 인자는 심볼의 고유값을 구분하지 못한다.

이유는 심볼은 매번 심볼함수 호출 시 새로운 심볼 값을 생성해내기 때문이다.

```js
let symbol2 = Symbol("personName"); //이미 이 함수들은 각각 고유한 값을 만들었기 때문에 다른값이 나온다.
let symbol3 = Symbol("personName");

alert(symbol2 === symbol3); //false
alert(symbol2 == symbol3); //false
```

## 심볼의 출력 형태

심볼 값은 문자열 형태로 변환할 수 없기 때문에 출력은 `console.log`로 콘솔에 출력해야한다.

```js
let symbol5 = Symbol("age");
alert(symbol5); // 오류
console.log(symbol5); // Symbol(age)
```

## 심볼형을 활용한 은닉화

심볼형은 for..in 구문으로 반복시 출력되지 않는다.

심볼을 사용하지 않고 배열 객체에 속성을 추가하면 for..in 반복문으로 출력시 해당 속성도 같이 출력이 된다.

```js
let ar6 = [1, 2, 3, 4, 5];
ar6.someProperty = 10;

for (let i in ar6) {
    console.log(i); // 0,1,2,3,4, someProperty
}
```

심볼형을 활용하면 은닉성을 보장할 수 있다. 다음과 같이

```js
let ar6_ = [1, 2, 3, 4, 5];
let someProperty = Symbol("someProperty");

ar6_[someProperty] = 10; // 심볼형은 은닉성을 보장한다.

for (let i in ar6_) {
    console.log(i); // 0,1,2,3,4 (someProperty) 속성은 보이지 않고 인덱스만 출력이 된다.
}

console.log(ar6_[someProperty]); // 10
```

## 정리

-   배열 객체에 어떤 속성을 넣고자 한다면 심볼을 사용할 수 있다.
-   반복문에서 속성이 나타나지 않게 하고자 한다면 심볼을 사용할 수 있다.
-   속성을 은닉화 하고자 한다면 심볼을 사용할 수 있다.
