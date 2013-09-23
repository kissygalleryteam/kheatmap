## 综述

KHeatMap是一个基于KISSY及Canvas的热图绘制库。

* 版本：1.0
* 作者：oldj
* demo：[http://gallery.kissyui.com/kheatmap/1.0/demo/index.html](http://gallery.kissyui.com/kheatmap/1.0/demo/index.html)

## 初始化组件

    S.use('gallery/kheatmap/1.0/index', function (S, KHeatMap) {
         var kheatmap = new KHeatMap(canvas_node, width, height);
    });

## API说明

* addData(data)

    添加数据。其中 data 是一个数组，形如：

    [[x1, y1, n1], [x2, y2, n2], [x3, y3, n3], ... ]

    含义为每个坐标以及它对应的权重，比如：

    [[12, 587, 1], [425, 220, 2], [449, 28, 6], ...]

    其中第三位 n 也可以省略，如果省略，则默认为 1，比如：

    [[144, 59, 1], [209, 94, 1], [83, 391, 1], ...]

    等价于：

    [[144, 59], [209, 94], [83, 391], ...]


* render()

    绘制热图。

* clear()

    清空画布。
