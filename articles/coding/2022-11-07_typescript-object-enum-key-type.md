# 在 Typescript 定义使用 enum.value 以及 enum.key 作为 key 的 Map Functions Object 类型

这应该是一个很常用的需求，感觉应该是有，但是没有找到现成的数据类型

临时记录下现在的解决方案，总之现在是可以跑了

```Typescript
enum Actions {
  start,
  end
}

type EnumKeyMapFunctions = {
    [key in Actions]?: Function 
}

type EnumKeyMapFunctions = {
    [key in keyof typeof Actions]?: Function
}
```
