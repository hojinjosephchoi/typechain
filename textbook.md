# Typechain

Learning Typescript by making a Blockchain with it.

# 1 Introduction and What are we building
- typescript: javascript의 superset
- typescript를 컴파일하면 javascript로 변함
- 큰 프로젝트, 팀으로 일한다거나 버그를 최소화하고 싶을 때 javascript의 덜 엄격한 부분이 단점으로 작용한다.

- project 시작
~~~
$ yarn init
~~~

# 2 Setting Typescript Up
- typescript 설치
~~~
$ yarn add typescript
~~~

- tsconfig.json: Typescript에게 어떻게 javascript로 변환하는지 알려주면서 옵션을 줄 수 있다.
- tsconfig.json 초기옵션
~~~
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
~~~

- tsc (typscript compiler)를 사용한 index.ts -> index.js, index.js.map 생성
~~~
$ tsc
또는
$ ./node_modules/.bin/tsc
~~~

- yarn start 시 ts 컴파일 + js 실행되도록 package.json 수정
~~~
"scripts": {
  "start": "node index.js",
  "prestart": "tsc"
}
~~~


# 3 First steps with Typescript


# 4 Types in Typescript
- typescript파일이 수정될 때마다 컴파일 할 수 있도록 함
~~~
$ yarn add tsc-watch --dev
~~~


# 5 Interfaces on Typescript
- interface -> model 정의할 때 유용
