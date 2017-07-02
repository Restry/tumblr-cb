# webpack 热加载失效，主要有两个解决办法
- 到入口添加 webpack-hot-middleware/client
- 到.babelrc 添加环境配置 
``` json 

  ,
  "plugins": ["transform-runtime", "transform-react-jsx"],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
  ```