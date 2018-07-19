# studying project about webfronted in berlin

## about webpack

### webpack is consist of 4 part
- entry
- output
- loader
- plugin

### entry
Everything is module in webpack.
It uses to everything that is kind of javascript and stylesheet and image and so on to load module.
Its start point is "entry".
Webpack binds one file after loading module that needs through the entry.

#### example 
```
module.exports = {
  entry: {
    main: './src/main.js',
  }
}
```

### output

It binds every module that is dependent each other to one thing from starting javascript file that is set at "entry".
It write location that dispose result that is bundle in output.
(엔트리에 설정한 자바스크립트 파일을 시작으로 의존되어 있는 모든 모듈을 하나로 묶을 것이다. 번들된 결과물을 처리할 위치는 output에 기록한다.)

#### example
```
module.exports = {
  output: {
    filename: 'bundle.js',
    path: './dist'
  }
}
```

#### How to use this output module?
```
<body>
  <script src="./dist/bundle.js"></script>
</body>
```

### loader

Loader's role is that it's changed from un-javascript file to file that Webpack can understand. because Webpack can read javascript file only.

Loader can set object that consists of "test" and "use".
- test : choose file what to loading
- use : set loader what to apply

(웹팩은 모든 파일을 모듈로 관리한다고 했다. 자바스크립트 파일 뿐만 아니라 이미지, 폰트, 스타일시트도 전부 모듈로 관리한다. 그러나 웹팩은 자바스크립트 밖에 모른다. 비 자바스크립트 파일을 웹팩이 이해하게끔 변경해야하는데 로더가 그런 역할을 한다.

로더는 test와 use키로 구성된 객체로 설정할 수 있다.
test에 로딩할 파일을 지정하고
use에 적용할 로더를 설정한다)

#### example
```
module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: 'node_modules',
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  }
}
```

*로더를 사용하기 위해서는 노드 패키지로 제공하는 로더를 npm으로 추가해야한다.*
* To use loader have to add loader that supported node package
```
npm i --save-dev babel-loader babel-core babel-preset-env
```

### plugin


## reference 
- http://blog.jeonghwan.net/js/2017/05/15/webpack.html
- https://dev.to/aurelkurtula/setting-up-a-minimal-node-environment-with-webpack-and-babel--1j04
