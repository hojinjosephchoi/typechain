# Typechain

Learning Typescript by making a Blockchain with it.

# 1 Introduction and What are we building

- typescript: javascript 의 superset
- typescript 를 컴파일하면 javascript 로 변함
- 큰 프로젝트, 팀으로 일한다거나 버그를 최소화하고 싶을 때 javascript 의 덜 엄격한 부분이 단점으로 작용한다.

- project 시작

```
$ yarn init
```

# 2 Setting Typescript Up

- typescript 설치

```
$ yarn add typescript
```

- tsconfig.json: Typescript 에게 어떻게 javascript 로 변환하는지 알려주면서 옵션을 줄 수 있다.
- tsconfig.json 초기옵션

```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2015",
    "sourceMap": true
  },
  "include": [
    "index.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

- tsc (typscript compiler)를 사용한 index.ts -> index.js, index.js.map 생성

```
$ tsc
또는
$ ./node_modules/.bin/tsc
```

- yarn start 시 ts 컴파일 + js 실행되도록 package.json 수정

```
"scripts": {
  "start": "node index.js",
  "prestart": "tsc"
}
```

# 3 First steps with Typescript

# 4 Types in Typescript

- typescript 파일이 수정될 때마다 컴파일 할 수 있도록 함

```
$ yarn add tsc-watch --dev
```

# 5 Interfaces on Typescript

- interface -> model 정의할 때 유용

# 6 Classes on Typescript part One

- interface 는 js 로 컴파일하지 않는다.
- class 는 js 로 컴파일 한다.

# 7 & 8 & 9 Blockchain Creating a Block

- block 의 속성, 타입
- function 의 리턴타입 등등을 확인할 수 있다.

- crypto-js 설치 (hash 생성)

```
$ yarn add crypto-js
```

- typescript 에서 import 하는 과정은 약간 다르다...
- 기본적인 import 방법

```
import * as CryptoJS from 'crypto-js';
```

# 10 && 11 Validating Block Structure

- vscode prettier + ESLint 연동

```
$ yarn add --dev prettier-eslint
```

- [https://velopert.com/3671](https://velopert.com/3671)

# 12 Conclusions

- 예측 가능한 함수 리턴 타입
- 예측 가능한 함수 인자 타입
- class 내 static 메소드
- list/array 내 같은 type(class)가 아닌 object 를 push 하지 않게 막을 수 있다.
- React, Redux, GraphQL, express, nodejs 로 일할 때 좋음
