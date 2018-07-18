# studying project in berlin

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

```
module.exports = {
  entry: {
    main: './src/main.js',
  }
}
```

### output

