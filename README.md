# ERP后端研发

### 技术说明

##### 在express中使用es6

```$xslt
$ npm install --save-dev babel-cli

$ npm install --save-dev babel-preset-es2015 babel-preset-stage-2
```

把Babel选项保存到.Babelrc中

`$ touch .babelrc`

添加如下的配置

```$xslt
{
  "presets": ["es2015", "stage-2"], 
  "plugins": []
}
```
修改package.json脚本。

```$xslt
"scripts": {
+    "dev": "babel-node ./bin/www",
}
```


##### 使用`nodemon`监听文件修改

```$xslt
$ npm install --save-dev nodemon
```

修改package.json脚本。

```$xslt
"scripts": {
+    "dev": "nodemon ./bin/www --exec babel-node",
}
```
