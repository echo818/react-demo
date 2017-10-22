# react-demo
"react": "^16.0.0"

"react-dom": "^16.0.0"

"react-router-dom": "^4.2.2"

## serve 静态服务器 启动本地接口数据 

### [node的serve静态服务器模拟数据跨域问题解决](http://blog.csdn.net/echo008/article/details/78307841)

1. 全局安装serve

npm install -g serve

2. 启动api接口数据(默认5000端口)

serve api

## create-react-app 支持less编译

### [create-react-app 脚手架不支持less解决方案](http://blog.csdn.net/echo008/article/details/78311831)

## 打包文件中的hash值改为数字时间格式

### [create-react-app 脚手架打包hash值改为时间字符串格式](http://blog.csdn.net/echo008/article/details/78312408)

## 二级目录部署

1. build文件夹下的新建app目录,将build下打包的文件都放入app文件夹中

2. serve 启动静态资源(8080端口)

serve build --port=8080

3. 访问生产环境资源

http://localhost:8080/app/

## 工程架构

## 组件按需加载

## 路由集中管理

## 组件包装器

## 组件注入封装的插件

## 父子组件通讯
