## 程序员自我修炼之道
俗话说的好，时间是检验真理的唯一标准。对于我们这群程序猿来说，只有不断的敲代码才可能不断地成长。所以在平时的时候，找一些自己感兴趣的好项目来锻炼是一件不错的事情，这样我们在学习过程中也发现不少程序世界的乐趣！

### reddit 小项目初衷
reddit 是国外一个比较火的社交网络，就像国内的微博，但也有些不同。这个小项目主要是为了扩展自己的技术范围，想多了解和尝试一些有意思的新技术。

### 小项目计划
1、 利用 pyhton 爬虫框架爬去相关网站的数据(web app)

2、 用ionic + angular + cordova 写一个跨平台应用

3、 写一个微信小程序

4 、 用 electron 写一个跨平台的桌面应用

### 小项目之二 ionic 移动app
#### 框架介绍
[ionic](http://ionicframework.com/docs/intro/installation/) 是一个可以用前端技术(html、css、javascript )来构建跨平台移动app的前端框架，它是构建在angular基础之上，提供了丰富的组件，便于快速的开发移动应用，也就是说它其实是一个基于angular的组件库，那我们就有个疑问了，那它不就没有访问原生的设备功能的能力吗？yes，you are right. 这可是cordava 的用武之地啊。Cordova提供了一组设备相关的API，通过这组API，移动应用能够以JavaScript访问原生的设备功能，如摄像头、麦克风等。有了这三把利剑，我们就可以笑傲移动江湖了。

#### 开发套路
新技术尝鲜套路：阅读官方文档 ------> 跟着文档创建项目实践，再不懂的就是百度、谷歌咯！
官方入门文档[传送门](http://ionicframework.com/getting-started/)
1、 Install Ionic
``` bash
npm install -g cordova ionic
```
2 、Start an App
``` bash
ionic start myApp tabs
```
3、 Run your App
```bash
cd myApp
ionic serve
```
4  、Deploy your App
需要：
* Java JDK
* Android Studio (非必须开发工具)
* Android SDK

(1) 编译、打包
```bash
ionic cordova run android --prod --release
# or
ionic cordova build android --prod --release
```

(2)签名
只有拥有签名的app才能安装到手机中、才能发布到各大应用商店(比如google play等等)
```bash
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks android-release-unsigned.apk my-alias
```
(3)
优化：Android SDK 提供的优化工具zipalign ，路径/path/to/Android/sdk/build-tools/VERSION/zipalign
```bash
zipalign -v 4 android-release-unsigned.apk HelloWorld.apk
```
