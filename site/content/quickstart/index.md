# 快速上手

### 介绍

通过本章节你可以了解到 Taroify 的安装方法和基本使用姿势。

### 安装
npm
```bash
npm i @taroify/core
```
yarn
```bash
yarn add @taroify/core
```
pnpm
```bash
pnpm add @taroify/core
```

## 引入组件

### 方式一. 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```
加载Sass源文件，通过Taro转成CSS
```js
// babel.config.js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "@taroify/core",
        libraryDirectory: "",
        style: true,
      },
      "@taroify/core",
    ],
    [
      "import",
      {
        libraryName: "@taroify/icons",
        libraryDirectory: "",
        camel2DashComponentName: false,
        style: () => "@taroify/icons/style",
        customName: (name) => name === "Icon" ? "@taroify/icons/van/VanIcon" : `@taroify/icons/${name}`,
      },
      "@taroify/icons",
    ],
  ],
};
```
若不想加载Sass源文件或者其他情况，也可以加载编译后的CSS文件
```js
// babel.config.js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "@taroify/core",
        libraryDirectory: "",
        style: (name) => `${name}/index.css`,
      },
      "@taroify/core",
    ],
    [
      "import",
      {
        libraryName: "@taroify/icons",
        libraryDirectory: "",
        camel2DashComponentName: false,
        style: () => "@taroify/icons/index.css",
        customName: (name) => name === "Icon" ? "@taroify/icons/van/VanIcon" : `@taroify/icons/${name}`,
      },
      "@taroify/icons",
    ],
  ],
};
```

接着你可以在代码中直接引入 Taroify 组件：

```tsx
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from "@taroify/core"
```

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件。

```tsx
import "@taroify/core/button/style"
import { Button } from "@taroify/core"
// css
import "@taroify/core/button/index.css"
import { Button } from "@taroify/core"
```

###

在使用上面两种CSS方式引入时，若要使用[Style 内置样式](/components/style), 需要单独引入(版本 > 0.8.1 才产出次文件，之前未产出，低版本无法通过CSS方式引入)

```tsx
import "@taroify/core/styles/index.css"
```

### 方式三. 导入所有组件样式

Taroify 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。

```tsx
// app.ts
import "@taroify/icons/index.scss"
import "@taroify/core/index.scss"
// css
import "@taroify/icons/index.css"
import "@taroify/core/index.css"
```

> Tips: 配置按需引入后，将不允许直接导入所有组件。

## 适配

### Rem 布局适配

Taroify 默认采用 `rem` 单位，需要对 `@taroify` 里的样式单位进行转换适配。

```js
// config/index.js
const config = {
  h5: {
    esnextModules: ["@taroify"],
  }
}
```

### designWidth
Taroify designWidth为750，如果你的designWidth为375，显示效果为两倍大，可以通过修改sass变量`$hd`适配（或者你想修改显示大小）
```tsx
// config/index.js
module.exports = {
  // ...
  sass: {
    data: "$hd: 1;"
  }
}
```
