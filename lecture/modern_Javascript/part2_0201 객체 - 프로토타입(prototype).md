# 객체 - 프로토타입(prototype)

## 프로토타입이란 무엇인가?

사전적의미로 `prototype`는 '원형'이라는 의미를 가진다. 자바스크립트에서도 사전적 의미와 같은 개념으로 사용된다.
자바스크립트는 프로토타입 기반의 언어이다. 이를 기반으로 확장과 재사용성을 높이고 있다.

쉽게 말해서 객체의 프로토타입(원형)을 가지고 새로운 객체를 생성해가는 프로그래밍 방식이다.
생성된 객체는 자기자신의 프로토타입을 갖는다. 그렇기 때문에 자기자신이 만들어지게된 원형을 안다.

## Prototype VS Class

지금은 자바스크립트도 Class를 문법적으로 지원하기 시작했지만 원래 자바스크립트는 프로토타입 기반의 언어이다.

기존 자바스크립트에는 Class라는게 없었다.
그래서 객체의 원형인 프로토타입을 이용하여 객체의 확장과 재사용, 상속 등을 구현해나갔다.

`Prototype` 객체는 `new` 연산자에 의해서 생성된 객체와 마찬가지로 공유 프로퍼티, 메서드 등을 제공하기 위해서 사용된다.

프로토타입 예시

```js
const fruit = { name: 'apple' }
console.log(fruit.name) // apple
```

속성 추가

```js
fruit.expiration = '20241231'
console.log(fruit.expiration)// 20241231
```
### Object.prototype.hasOwnProperty()
프로토타입의 대표적인 함수로 추가한 속성이 있는지 없는지 확인하는 `hasOwnProperty()` 함수가 있다.

```js
// eslint-disable-next-line no-prototype-builtins
console.log(fruit.hasOwnProperty('expiration')) // true
// eslint-disable-next-line no-prototype-builtins
console.log(fruit.hasOwnProperty('country')) // false
// fruit 객체는 위 메서드를 가지고 있지 않지만 ‘.’ 찍고 사용이 가능함
```

### 📌hasOwnProperty() 메서드는 어떻게 사용되나?

```js
console.log(fruit) // {name: "apple", expiration: "20241231"} __proto__

const aaa = {}
console.log(aaa) // __proto__
```

빈 객체라 하더라도 자기자신이 만들어지게 된 부모의 객체가 무엇인지 알 수 있게된다.

### 프로토타입 메소드 재정의(overriding)
hasOwnProperty()를 fruit() 객체에서 정의해버리면 다음과 같은 현상이 나타난다.

```js
const fruit2 = {
  name: 'apple',
  expiration: '20241231',
  hasOwnProperty: function () {
    console.log('안녕~')
  }
}

// eslint-disable-next-line no-prototype-builtins
fruit2.hasOwnProperty() // 안녕~
```
