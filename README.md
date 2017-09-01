# SeamlessRolling
JavaScript 无缝滚动插件


### jQuery 调用方法：

```
$('#img1').seamlessRolling({speed: 1});
```

#### options

- speed: 移动速度



### 不使用 JQuery 的情况

插件本身对 jQuery 依赖并不严重，因为我项目中是使用 jQuery 的，所以将之封装为 jQuery 插件。

仅仅依赖于

```
width();
html();
scrollLeft()
```

三个函数， 如若不使用jq ，将代码提取出来作为一个函数使用即可。

替换三个方法参考 [你或许不需要使用 jQuery](http://blog.zhukejin.com/archives/157)


### 优点
优先使用 `requestAnimationFrame`，屏幕刷新运动，效率更高