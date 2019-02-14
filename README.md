# deepCopy

## 概述

>这是一个进行深拷贝的js插件

## Usage(使用)

发布成功后就可以使用了。使用有两种形式，一种是 `npm` 安装，一种是 `<script>` 引用。

### npm 安装：

``` shell
npm install --save deep-copy.js
```

``` JavaScript
import deepCopy from 'deep-copy.js'
let a = [1, 2, 3]
let b = deepCopy(a)
b[0] = 4
console.log(a, b); // [1, 2, 3] [4, 2, 3]
// 或者
const deepCopy = require('deep-copy.js')
let a = [1, 2, 3]
let b = deepCopy(a)
b[0] = 4
console.log(a, b); // [1, 2, 3] [4, 2, 3]
```

### `<script>`使用

``` HTML
<script src="//unpkg.com/deep-copy.js@1.0.2/lib/index.js"></script>
<script>
  console.log(window.deepCopy);
  let a = [1, 2, 3]
  let b = deepCopy(a)
  b[0] = 4
  console.log(a, b); // [1, 2, 3] [4, 2, 3]
</script>
```

## 支持深拷贝的数据类型

Number, String, Boolean, Array, Object, Node, Date

## run(运行)

``` bash
# git clone ...
git clone https://github.com/nongshuqiner/deep-copy.js.git

# enter
cd deep-copy.js

# install dependencies
npm install

# open examples HTML
npm run examples

# 运行此命令将所有代码从 src 目录编译到 lib
npm run build

# 测试
npm run test
```

## Donation(打赏)

![payment-code.png](https://upload-images.jianshu.io/upload_images/4645892-20338f9a0a443ff2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Contact me(联系我)

Just Contact Me At:
- Email: ym1185509297@163.com
- 简书: [言墨儿](https://www.jianshu.com/u/319464da1cc1)

## License

[MIT](http://opensource.org/licenses/MIT) Copyright (c) 2018 - forever Naufal Rabbani
