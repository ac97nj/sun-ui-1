
# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {GButton, Tabs, Switch, GDialog} from "Sun-ui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <GButton>按钮</GButton>
  </div>
</template>
<script>
import {GButton, Tabs, Switch, GDialog} from "Sun-ui"
export default {
  components: {GButton}
}
</script>
```