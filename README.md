# cursor-pointer-loader
一个通过html标签属性快速添加指针移入效果的webpack加载器，代替繁琐的增加css，特别是一些没有其他样式的场景（A loader that quickly adds cursor pointer effects via html tag attributes）

```ruby

<div __cursorPointer>this is example , __cursorPointer attributes</div>

// will be transform to 
<div style='cursor:pointer'></div>

// if you have TS , you need increase statement (this is a react example):

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    __cursorPointer?: boolean
  }
}

```

afterwards you can happy coding