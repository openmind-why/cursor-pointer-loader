# cursor-pointer-loader

一个通过html标签属性快速添加指针移入效果的webpack加载器，代替繁琐的增加css，特别是一些没有其他样式的场景（A loader that quickly adds cursor pointer effects via html tag attributes）

## 安装 (Installation)

```bash
npm install cursor-pointer-loader
```

**重要**: 此包需要以下peer dependencies，请确保你的项目中已安装：

```bash
npm install @babel/core @babel/parser @babel/traverse @babel/generator
```

## 使用示例 (Usage Examples)

### 基本用法

```jsx
<div __cursorPointer>this is example , __cursorPointer attributes</div>

// 转换后:
<div style={{cursor: "pointer"}}>this is example , __cursorPointer attributes</div>
```

### 与现有样式合并

```jsx
<button style={{backgroundColor: 'blue'}} __cursorPointer>Click me</button>

// 转换后:
<button style={{backgroundColor: 'blue', cursor: "pointer"}}>Click me</button>
```

### TypeScript 支持

如果你使用 TypeScript，需要添加类型声明（React 示例）：

```typescript
declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    __cursorPointer?: boolean
  }
}
```

## Webpack 配置

在你的 webpack.config.js 中添加：

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['cursor-pointer-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
```

## 版本变更 (Changelog)

### v1.0.2
- ✨ 代码打包优化，减少包体积
- ✨ 支持 CommonJS 和 ES 模块双格式输出
- ✨ 将 Babel 依赖改为 peerDependencies，避免版本冲突
- ✨ 添加代码压缩和优化

afterwards you can happy coding! 🎉