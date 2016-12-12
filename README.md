# ZYbasic
  一个兼容zepto和jquery，移动端和桌面端都可以使用的简单轻量的常用功能脚本库
  可适用于一般常用的广告单页，活动单页，功能单一页面，优点，不需要引用过大的前端框架就能实现基本的提示，弹窗，计算，存储，浏览器判断等功能
## 功能 
* 页面提示与窗体 
* HashTable
* 时间日期操作
* 浏览器判断
* url操作与cookie
* 按钮点击与选择判断

## 页面提示与窗体
### 确认与取消框
```javascript
zyalert.showconfirm('提示的标题', '确认按钮文本', '取消按钮文本', function () {
                //点击确认了
            }, function () {
                //点击取消了
});
```
### 等待提示框
```javascript
zyalert.showloading(' 稍等');
```
### 成功提示框
```javascript
zyalert.showok(' 成功');
```
### 失败提示框
```javascript
zyalert.showero(' 失败');
```
### 普通提示框 2.5 秒后关闭
```javascript
zyalert.showtext('你好啊！');
```
### 普通提示框 5 秒后关闭
```javascript
zyalert.showtextlong('你好啊！');
```
### 关闭提示框
```javascript
zyalert.closealert();
```
### 提示后自动跳转到指定页面
```javascript
zyalert.alertAndBack('设置成功了！马上为您跳转','www.github.com');
```
### 带选择项目的弹窗
    列表对象必须包含 text 属性，其他属性可以自定义多个，在回调后可按自定义使用
```javascript
var list = new Array();
var m1 = {
  id: 1,//自定义属性
  type: 2,//自定义属性
  text : 'JEPP'//必须属性text
}
list.push(m1);
var m2 = {
  id: 2,
  type: 2,//自定义属性
  text: '大众'
}
list.push(m2);
zywindow.title = "选择您的车型";
zywindow.content(list);
zywindow.show();
```
#### 点击后的回调
```javascript
zywindow.clickback = function (o) {
    //回调代码
    var id = o.id;
    var type = o.type;
    var text = o.text;
 }
```

## HashTable
```javascript
var hashdatas = new $.zyhash()
```
### 添加
```javascript
hashdatas.add('key',object);
```
### 获取
```javascript
var object = hashdatas.get('key');
```
### 删除
```javascript
hashdatas.remove('key');
```
### 判断 key 存在
```javascript
hashdatas.containsKey('key');
```
### 判断 value 存在
```javascript
hashdatas.containsValue(object);
```
### 清除
```javascript
hashdatas.clear();
```
### 大小
```javascript
hashdatas.size();
```
### 是否空
```javascript
hashdatas.isEmpty();
```
## 时间日期操作
### 根据时间戳生成的时间对象
```javascript
zydate.yyysjc(14000000);
```
### 2个时间差（天）
```javascript
zydate.sjday(date1,date2);
```
### javascript版的DateAdd
#### 添加年
```javascript
zydate.DateAdd('y',1,date);
```
#### 添加月
```javascript
zydate.DateAdd('mt',1,date);
```
#### 添加季度
```javascript
zydate.DateAdd('q',1,date);
```
 #### 添加周
```javascript
zydate.DateAdd('w',1,date);
```
#### 添加天
```javascript
zydate.DateAdd('d',1,date);
```
#### 添加小时
```javascript
zydate.DateAdd('h',1,date);
```
#### 添加分
```javascript
zydate.DateAdd('m',1,date);
```
#### 添加秒
```javascript
zydate.DateAdd('s',1,date);
```
#### 兼容IE的NewDate
```javascript
zydate.NewDatefunction('2014-12-12 00:00:00');
```
#### 兼容中文的NewDate
```javascript
zydate.NewDateCH('2014年12月12日 00点00分00秒');
```
## 浏览器判断
### 是否是微信
```javascript
zysys.isweixin();
```
### 是否是安卓
```javascript
zysys.isandroid();
```
### 是否是苹果
```javascript
zysys.isios();
```
