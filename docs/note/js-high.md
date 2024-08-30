---
outline: [1, 3]
---

# JS 进阶

::: tip 提示
学习 JavaScript ES6 新增的属性和方法,以及高级函数和正则表达式。
:::

## 一、声明和表达式

### 1、let 和 const

`let` 和 `const` 是在 JavaScript ES6（ECMAScript 2015）中引入的用于声明变量的关键字。它们相对于之前的 `var` 关键字，提供了更好的块级作用域控制和常量声明。以下是它们的具体含义和使用方法：

**`let`**

- **块级作用域（Block Scope）**：使用 `let` 声明的变量只在其所在的块（用 `{}` 包裹的代码块）内部有效。这意味着它不会泄露到块外部，避免了变量冲突和意外的变量重定义。
- **重新赋值**：使用 `let` 声明的变量可以被重新赋值。

```javascript
let x = 10;
if (true) {
  let x = 20; // 这是一个新的变量，仅在此块内有效
  console.log(x); // 输出 20
}
console.log(x); // 输出 10
```

**`const`**

- **块级作用域（Block Scope）**：`const` 和 `let` 一样，也是块级作用域。
- **常量声明**：使用 `const` 声明的变量必须在声明时赋值，且之后不能再被重新赋值。如果尝试重新赋值，会抛出错误。
- **引用类型的可变性**：虽然 `const` 声明的变量不能重新赋值，但如果它是一个引用类型（如对象或数组），则可以修改其内部属性。

```javascript
const y = 30;
y = 40; // 这里会抛出 TypeError: Assignment to constant variable

const obj = { name: "Alice" };
obj.name = "Bob"; // 允许，因为我们修改的是对象的属性，而不是对象的引用
console.log(obj.name); // 输出 "Bob"
```

**总结**

- 使用 `let` 时，变量可以在块级作用域内重新赋值。
- 使用 `const` 时，变量不能重新赋值，适用于常量或不希望重新赋值的变量。
- `let` 和 `const` 都提供了更好的作用域控制，避免了传统 `var` 带来的变量提升和作用域问题。

### 2、解构赋值

解构赋值（Destructuring Assignment）是 JavaScript ES6 中引入的一种语法，可以从数组或对象中快速提取值，并将其赋值给多个变量。通过解构赋值，可以方便地从复杂的数据结构中提取所需的数据，简化代码，提高可读性。

#### 数组解构赋值

通过解构赋值，可以从数组中提取值并将其赋给变量。

```javascript
// 传统的赋值方式
let arr = [1, 2, 3];
let a = arr[0];
let b = arr[1];
let c = arr[2];

// 使用解构赋值
let [x, y, z] = [1, 2, 3];
console.log(x); // 输出 1
console.log(y); // 输出 2
console.log(z); // 输出 3
```

**解构赋值中的默认值**
如果解构的值未定义，可以为变量指定默认值。

```javascript
let [m, n = 10] = [5];
console.log(m); // 输出 5
console.log(n); // 输出 10（因为数组中没有第二个值，所以使用默认值）
```

**交换变量值**
解构赋值也可以用于交换变量的值，而无需借助临时变量。

```javascript
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 输出 2
console.log(b); // 输出 1
```

#### 对象解构赋值

对象解构赋值允许你从对象中提取属性值，并将它们赋给变量。

```javascript
// 传统的赋值方式
let person = { name: "Alice", age: 25 };
let name = person.name;
let age = person.age;

// 使用解构赋值
let { name, age } = { name: "Alice", age: 25 };
console.log(name); // 输出 "Alice"
console.log(age); // 输出 25
```

**对象解构赋值中的默认值**
如果对象中没有某个属性，可以为变量指定默认值。

```javascript
let { name, age, gender = "female" } = { name: "Alice", age: 25 };
console.log(gender); // 输出 "female"
```

**重命名变量**
解构赋值时可以为变量重命名。

```javascript
let { name: firstName, age: years } = { name: "Alice", age: 25 };
console.log(firstName); // 输出 "Alice"
console.log(years); // 输出 25
```

#### 嵌套解构

对于嵌套的数据结构，可以进行嵌套解构。

```javascript
let person = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

let {
  name,
  address: { city, zip },
} = person;

console.log(city); // 输出 "Wonderland"
console.log(zip); // 输出 "12345"
```

#### 函数参数中的解构赋值

解构赋值也可以用于函数参数，特别适合处理有多个参数的函数。

```javascript
function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

printPerson({ name: "Alice", age: 25 }); // 输出 "Name: Alice, Age: 25"
```

**总结**

解构赋值使得从数组和对象中提取值变得更简单直接。无论是处理函数参数、提取数据，还是交换变量值，解构赋值都极大地提升了代码的简洁性和可读性。

### 3、Symbol

`Symbol` 是 ES6 引入的一种新的原始数据类型，它的主要作用是创建独一无二的标识符。与其他原始数据类型（如 `Number`、`String`、`Boolean`）不同，`Symbol` 值是唯一的，且每次创建的 `Symbol` 都是不同的。

**`Symbol` 的特点**

1. **唯一性**：每个 `Symbol` 都是独一无二的，即使两个 `Symbol` 的描述相同，它们也是不相等的。
2. **不可变性**：`Symbol` 值是不可变的，一旦创建，`Symbol` 的值不能被改变。
3. **不能与其他类型混用**：`Symbol` 不能自动转换为字符串或数字类型，但可以显式转换。

**创建 `Symbol`**
可以使用 `Symbol()` 函数创建一个新的 `Symbol`，并可以为其提供一个可选的描述（描述仅用于调试或日志记录目的）。

```javascript
let sym1 = Symbol();
let sym2 = Symbol("description");

console.log(sym1); // 输出 Symbol()
console.log(sym2); // 输出 Symbol(description)
```

**唯一性示例**
即使两个 `Symbol` 的描述相同，它们也不会相等。

```javascript
let symA = Symbol("foo");
let symB = Symbol("foo");

console.log(symA === symB); // 输出 false
```

**使用 `Symbol` 作为对象属性键**
`Symbol` 最常见的用途之一是作为对象的属性键。使用 `Symbol` 作为键可以避免属性名称冲突，因为每个 `Symbol` 都是唯一的。

```javascript
let mySymbol = Symbol("mySymbol");

let obj = {
  [mySymbol]: "value",
};

console.log(obj[mySymbol]); // 输出 "value"
```

**`Symbol` 的一些内置用途**
JavaScript 提供了一些内置的 `Symbol`，这些内置 `Symbol` 用于语言内部行为的调整。常见的内置 `Symbol` 包括：

- `Symbol.iterator`：定义对象的默认迭代器。例如，数组的 `Symbol.iterator` 返回一个迭代器对象，可以用于 `for...of` 循环。
- `Symbol.toStringTag`：用于修改对象的 `toString` 方法返回的字符串。

```javascript
// Symbol.iterator 示例
let arr = [1, 2, 3];
let iterator = arr[Symbol.iterator]();

console.log(iterator.next().value); // 输出 1
console.log(iterator.next().value); // 输出 2
console.log(iterator.next().value); // 输出 3

// Symbol.toStringTag 示例
let myObject = {
  [Symbol.toStringTag]: "MyCustomObject",
};

console.log(Object.prototype.toString.call(myObject)); // 输出 "[object MyCustomObject]"
```

**总结**

`Symbol` 是一种独特且不可变的原始数据类型，主要用于创建唯一的标识符。它在避免属性名冲突、修改对象的默认行为以及与全局注册表交互时特别有用。`Symbol` 提供了更安全、更灵活的方式来定义对象属性，并能在 JavaScript 中实现许多高级功能。

## 二、内置对象

### 1、Map 和 Set

在 JavaScript 中，`Map` 和 `Set` 是两种用于存储数据的对象类型，它们各自有不同的用途和特性。

#### `Map` 对象

`Map` 是一个键值对的集合，类似于普通对象（`Object`），但它的键可以是任意类型，包括对象、函数、甚至是 `NaN`。

**特点：**

1. **键值对的存储顺序**：`Map` 会按照插入的顺序保存键值对。
2. **键的类型**：在 `Map` 中，键可以是任何类型，不限于字符串或符号。
3. **键的唯一性**：`Map` 的键是唯一的，重复插入相同的键会覆盖之前的值。
4. **性能**：对于频繁增删键值对的操作，`Map` 通常比普通对象更高效。

**常用方法：**

- `set(key, value)`：向 `Map` 添加键值对。
- `get(key)`：根据键获取对应的值。
- `has(key)`：判断 `Map` 中是否包含某个键。
- `delete(key)`：删除指定键的键值对。
- `clear()`：清空 `Map`。
- `size`：返回 `Map` 中键值对的数量。

**示例：**

```javascript
const map = new Map();
map.set("name", "Alice");
map.set(42, "age");
map.set({ key: "object" }, "value");

console.log(map.get("name")); // 输出: Alice
console.log(map.has(42)); // 输出: true
console.log(map.size); // 输出: 3

map.delete(42);
console.log(map.size); // 输出: 2
```

#### `Set` 对象

`Set` 是一个值的集合，所有值都是唯一的（即没有重复的值）。与数组类似，但不允许有相同的元素。

**特点：**

1. **值的唯一性**：`Set` 中的每个值都是唯一的，插入重复的值会被忽略。
2. **存储顺序**：`Set` 会按照插入顺序存储元素。
3. **性能**：`Set` 的查找和删除操作比数组更快。

**常用方法：**

- `add(value)`：向 `Set` 添加一个值。
- `has(value)`：判断 `Set` 中是否包含某个值。
- `delete(value)`：从 `Set` 中删除指定的值。
- `clear()`：清空 `Set`。
- `size`：返回 `Set` 中元素的数量。

**示例：**

```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // 尝试添加重复的值

console.log(set.has(1)); // 输出: true
console.log(set.size); // 输出: 2

set.delete(2);
console.log(set.size); // 输出: 1
```

**总结**

- `Map` 是用于存储键值对的对象，其中键可以是任意类型。
- `Set` 是用于存储唯一值的集合，类似于数组但不允许重复的值。

这两种对象在现代 JavaScript 开发中非常实用，特别是在需要处理复杂数据结构时。

### 2、字符串扩展

在 ES6（ECMAScript 2015）中，字符串得到了多项增强，新增了多个方法以及模板字符串（Template Literals）语法，使字符串操作更加便捷和灵活。

#### 新增的字符串方法

1. **`includes()`**：

   - 用于判断一个字符串是否包含另一个子字符串，返回布尔值。
   - **语法**：`str.includes(searchString, position)`
   - **参数**：
     - `searchString`：要搜索的子字符串。
     - `position`（可选）：从字符串的哪个位置开始搜索，默认值为 `0`。

   **示例**：

   ```javascript
   const str = "Hello, world!";
   console.log(str.includes("world")); // 输出: true
   console.log(str.includes("World")); // 输出: false
   ```

2. **`startsWith()`**：

   - 用于判断字符串是否以指定的子字符串开头，返回布尔值。
   - **语法**：`str.startsWith(searchString, position)`
   - **参数**：
     - `searchString`：要搜索的子字符串。
     - `position`（可选）：从字符串的哪个位置开始检查，默认值为 `0`。

   **示例**：

   ```javascript
   const str = "Hello, world!";
   console.log(str.startsWith("Hello")); // 输出: true
   console.log(str.startsWith("world", 7)); // 输出: true
   ```

3. **`endsWith()`**：

   - 用于判断字符串是否以指定的子字符串结尾，返回布尔值。
   - **语法**：`str.endsWith(searchString, length)`
   - **参数**：
     - `searchString`：要搜索的子字符串。
     - `length`（可选）：在此长度内检查字符串的结尾部分，默认为整个字符串。

   **示例**：

   ```javascript
   const str = "Hello, world!";
   console.log(str.endsWith("world!")); // 输出: true
   console.log(str.endsWith("Hello", 5)); // 输出: true
   ```

4. **`repeat()`**：

   - 返回一个新字符串，表示将原字符串重复指定次数。
   - **语法**：`str.repeat(count)`
   - **参数**：
     - `count`：指定要重复的次数。

   **示例**：

   ```javascript
   const str = "Hello!";
   console.log(str.repeat(3)); // 输出: "Hello!Hello!Hello!"
   ```

5. **`padStart()`**：

   - 用于在当前字符串的开头填充指定的字符，直到达到指定的长度。
   - **语法**：`str.padStart(targetLength, padString)`
   - **参数**：
     - `targetLength`：填充后的目标长度。
     - `padString`（可选）：用于填充的字符串，默认为 `" "`（空格）。

   **示例**：

   ```javascript
   const str = "5";
   console.log(str.padStart(3, "0")); // 输出: "005"
   ```

6. **`padEnd()`**：

   - 用于在当前字符串的末尾填充指定的字符，直到达到指定的长度。
   - **语法**：`str.padEnd(targetLength, padString)`
   - **参数**：
     - `targetLength`：填充后的目标长度。
     - `padString`（可选）：用于填充的字符串，默认为 `" "`（空格）。

   **示例**：

   ```javascript
   const str = "5";
   console.log(str.padEnd(3, "0")); // 输出: "500"
   ```

7. **`trimStart()` 和 `trimEnd()`**：

   - `trimStart()` 用于去除字符串开头的空白字符（ES2019 新增）。
   - `trimEnd()` 用于去除字符串末尾的空白字符（ES2019 新增）。

   **示例**：

   ```javascript
   const str = "  Hello, world!  ";
   console.log(str.trimStart()); // 输出: "Hello, world!  "
   console.log(str.trimEnd()); // 输出: "  Hello, world!"
   ```

#### 模板字符串（Template Literals）

模板字符串是 ES6 中引入的新语法，用于更简洁和灵活地创建字符串。模板字符串使用反引号（`` ` ``）来定义，并支持以下特性：

1. **多行字符串**：

   - 可以直接在字符串中创建多行文本，而不需要使用转义字符 `\n`。

   **示例**：

   ```javascript
   const str = `Hello,
   world!`;
   console.log(str);
   // 输出:
   // Hello,
   // world!
   ```

2. **插值表达式**：

   - 可以在模板字符串中嵌入变量或表达式，使用 `${}` 语法。

   **示例**：

   ```javascript
   const name = "Alice";
   const age = 25;
   const message = `My name is ${name}, and I am ${age} years old.`;
   console.log(message);
   // 输出: My name is Alice, and I am 25 years old.
   ```

3. **嵌入表达式**：

   - 可以在模板字符串中嵌入任意 JavaScript 表达式，并自动进行求值。

   **示例**：

   ```javascript
   const a = 10;
   const b = 20;
   const result = `The sum of a and b is ${a + b}.`;
   console.log(result); // 输出: The sum of a and b is 30.
   ```

4. **标签模板字符串（Tagged Templates）**：

   - 通过标签函数对模板字符串进行处理，可以实现自定义的字符串格式化或其他功能。

   **示例**：

   ```javascript
   function tag(strings, ...values) {
     console.log(strings); // 输出: ["Hello, ", ", welcome to ", "!"]
     console.log(values); // 输出: ["Alice", "JavaScript"]
     return `Processed String`;
   }

   const name = "Alice";
   const language = "JavaScript";
   const result = tag`Hello, ${name}, welcome to ${language}!`;
   console.log(result); // 输出: Processed String
   ```

**总结**

- **新增字符串方法**（如 `includes`, `startsWith`, `endsWith` 等）简化了常见的字符串操作。
- **模板字符串**（Template Literals）提供了更方便的多行文本、插值表达式，以及通过标签函数实现的高级功能。

这些特性大大提升了 JavaScript 处理字符串的能力和灵活性。

### 3、对象扩展

ES6（ECMAScript 2015）对 JavaScript 对象引入了许多新特性和增强功能，以下是一些主要的新增功能：

#### 字面量语法

- **属性简写**：当对象属性的名称与赋值给它的变量同名时，可以省略属性名。
  ```javascript
  const name = "John";
  const person = { name }; // 相当于 { name: name }
  ```
- **方法简写**：可以用简写的形式定义对象的方法。
  ```javascript
  const person = {
    sayHello() {
      console.log("Hello!");
    },
  };
  ```

#### 计算属性名

- ES6 允许在对象字面量中使用表达式来计算属性名。
  ```javascript
  const propName = "age";
  const person = {
    [propName]: 25, // 相当于 { age: 25 }
  };
  ```

#### 新增方法

.**对象的 `Object.assign()` 方法**

- 用于将一个或多个源对象的可枚举属性复制到目标对象中。
  ```javascript
  const target = {};
  const source = { a: 1, b: 2 };
  Object.assign(target, source); // target 变成 { a: 1, b: 2 }
  ```

**对象的 `Object.is()` 方法**

- 用于比较两个值是否严格相等，类似于 `===`，但在处理 `NaN` 和 `+0/-0` 时有所不同。
  ```javascript
  Object.is(NaN, NaN); // true
  Object.is(+0, -0); // false
  ```

**对象的 `Object.setPrototypeOf()` 和 `Object.getPrototypeOf()` 方法**

- `Object.setPrototypeOf(obj, prototype)`：用于设置对象的原型。
- `Object.getPrototypeOf(obj)`：用于获取对象的原型。

**`Object.keys()`、`Object.values()` 和 `Object.entries()` 方法**

- `Object.keys(obj)`：返回对象自身可枚举属性名组成的数组。
- `Object.values(obj)`：返回对象自身可枚举属性值组成的数组。
- `Object.entries(obj)`：返回对象自身可枚举属性的键值对数组。

#### 扩展运算符

对象的扩展运算符（**spread operator**）是 ES2018（ES9）中引入的一项特性，它通过三个点（`...`）表示，可以用于在对象字面量中展开对象的可枚举属性。扩展运算符主要有以下几个用法：

**合并对象**

- 扩展运算符可以用来将多个对象的属性合并到一个新的对象中。
  ```javascript
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const mergedObj = { ...obj1, ...obj2 };
  console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
  ```

**克隆对象**

- 扩展运算符可以用来创建对象的浅拷贝（浅克隆）。
  ```javascript
  const original = { a: 1, b: 2 };
  const copy = { ...original };
  console.log(copy); // { a: 1, b: 2 }
  console.log(copy === original); // false，指向不同的对象
  ```

**添加或覆盖属性**

- 当扩展运算符用于对象字面量中时，后面的属性可以覆盖前面对象中的同名属性。
  ```javascript
  const obj = { a: 1, b: 2 };
  const updatedObj = { ...obj, b: 3, c: 4 };
  console.log(updatedObj); // { a: 1, b: 3, c: 4 }
  ```

**与剩余参数（Rest Parameter）的配合使用**

- 扩展运算符还可以与剩余参数一起使用，来获取一个对象中除去某些特定属性后的剩余属性。
  ```javascript
  const { a, ...rest } = { a: 1, b: 2, c: 3 };
  console.log(rest); // { b: 2, c: 3 }
  ```

**注意事项**

- **浅拷贝**：对象扩展运算符创建的对象是浅拷贝，也就是说，如果对象的属性是引用类型（如数组、对象），那么拷贝的对象和原对象中的引用类型属性仍然指向相同的内存地址。
- **顺序**：当合并对象时，如果多个对象包含相同的属性名，后面的对象的属性值会覆盖前面的。

这些新增功能大大增强了 JavaScript 对象的灵活性和可用性。

### 4、数组扩展

ES6（ECMAScript 2015）对数组进行了许多增强，新增了一些非常有用的特性和方法，极大地方便了数组的操作。以下是主要的新增特性和方法：

#### 扩展运算符

- 扩展运算符（`...`）可以用来展开数组，常用于复制数组、合并数组以及传递参数。
  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
  const arrCopy = [...arr1]; // [1, 2, 3]，浅拷贝
  ```

#### 新增方法

**`Array.from()`**

- 将类数组对象或可迭代对象转换为数组。常用于将`NodeList`、`arguments`等转为真正的数组。
  ```javascript
  const arrayLike = { 0: "a", 1: "b", length: 2 };
  const arr = Array.from(arrayLike); // ['a', 'b']
  ```

**`Array.of()`**

- 创建一个由一系列参数组成的新数组，和`Array`构造函数的区别在于处理单个数值参数。
  ```javascript
  const arr = Array.of(1, 2, 3); // [1, 2, 3]
  const arr2 = Array(3); // [empty × 3]，Array()构造函数创建指定长度的空数组
  ```

**`find()` 和 `findIndex()`**

- `find()`：返回数组中第一个满足提供的测试函数的元素。
  ```javascript
  const arr = [5, 12, 8, 130, 44];
  const found = arr.find((element) => element > 10);
  console.log(found); // 12
  ```
- `findIndex()`：返回数组中第一个满足提供的测试函数的元素的索引，如果没有找到则返回 `-1`。
  ```javascript
  const index = arr.findIndex((element) => element > 10);
  console.log(index); // 1
  ```

**`includes()`**

- 判断数组是否包含某个指定的元素，返回 `true` 或 `false`。
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr.includes(2)); // true
  console.log(arr.includes(4)); // false
  ```

**`fill()`**

- 用一个固定值填充数组中的元素，从起始索引到终止索引（不包括终止索引）。
  ```javascript
  const arr = [1, 2, 3, 4];
  arr.fill(0, 2, 4); // [1, 2, 0, 0]
  ```

**`entries()`、`keys()` 和 `values()`**

- 这些方法返回一个新的数组迭代器对象，可以用来遍历数组中的键值对、键或值。

  ```javascript
  const arr = ["a", "b", "c"];

  for (let [index, value] of arr.entries()) {
    console.log(index, value); // 0 'a', 1 'b', 2 'c'
  }

  for (let key of arr.keys()) {
    console.log(key); // 0, 1, 2
  }

  for (let value of arr.values()) {
    console.log(value); // 'a', 'b', 'c'
  }
  ```

这些新增的特性和方法为数组操作提供了更多的便捷和灵活性，使代码更加简洁和可读。

### 5、Promise对象

`Promise` 是 JavaScript 中用于处理异步操作的对象，它代表了一个在未来可能完成或失败的操作及其结果。`Promise` 提供了一种更简洁和可读的方式来处理异步代码，避免了传统回调函数（callback）带来的“回调地狱”问题。

#### Promise 的状态

一个 `Promise` 对象可以处于以下三种状态之一：

1. **Pending（待定）**：初始状态，操作尚未完成，既没有成功也没有失败。

2. **Fulfilled（已完成）**：操作成功完成，`Promise` 得到了一个值。

3. **Rejected（已拒绝）**：操作失败，`Promise` 拒绝了，并有一个原因。

一旦 `Promise` 从 `Pending` 状态变为 `Fulfilled` 或 `Rejected`，它的状态就不能再改变。

#### 创建一个 Promise

你可以通过 `new Promise` 构造函数来创建一个 `Promise` 对象。它接受一个函数作为参数，该函数有两个参数：`resolve` 和 `reject`。`resolve` 用于将 `Promise` 状态变为 `Fulfilled` 并返回结果，`reject` 用于将状态变为 `Rejected` 并返回错误原因。

示例：

```javascript
let promise = new Promise((resolve, reject) => {
  // 执行异步操作
  let success = true; // 假设这是异步操作的结果
  if (success) {
    resolve("操作成功");
  } else {
    reject("操作失败");
  }
});
```

#### 使用 `then` 和 `catch` 处理 Promise

- **`then()`**：用于在 `Promise` 成功时执行的回调函数，它接受两个可选参数，第一个是 `Fulfilled` 时的回调，第二个是 `Rejected` 时的回调。
- **`catch()`**：用于处理 `Promise` 被拒绝时的情况，相当于 `then()` 的第二个参数，但更常用于处理错误。

示例：

```javascript
promise
  .then((result) => {
    console.log(result); // 操作成功
  })
  .catch((error) => {
    console.error(error); // 操作失败
  });
```

#### Promise 链

`then()` 方法会返回一个新的 `Promise`，这允许你可以将多个 `then()` 链接在一起，形成一个“Promise 链”。每个 `then()` 中返回的值会传递给下一个 `then()`。如果在某个 `then()` 中抛出错误，错误会被后续的 `catch()` 捕获。

示例：

```javascript
let promise = new Promise((resolve, reject) => {
  resolve(10);
});

promise
  .then((result) => {
    console.log(result); // 10
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 20
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 40
  })
  .catch((error) => {
    console.error(error);
  });
```

#### `Promise` 的常用方法

- **`Promise.all()`**：接受一个 `Promise` 对象的数组，当所有 `Promise` 都 `Fulfilled` 时返回一个新的 `Promise`，其结果是所有 `Promise` 结果的数组；如果有任何一个 `Promise` 被拒绝，则返回的 `Promise` 也会被拒绝。

- **`Promise.race()`**：接受一个 `Promise` 对象的数组，一旦其中任何一个 `Promise` `Fulfilled` 或 `Rejected`，返回的 `Promise` 就会立即以那个结果完成。

- **`Promise.resolve()`**：返回一个立即 `Fulfilled` 的 `Promise`，其值为传入的参数。

- **`Promise.reject()`**：返回一个立即 `Rejected` 的 `Promise`，其原因为传入的参数。

#### 使用 `async/await` 简化 Promise

`async/await` 是基于 `Promise` 的语法糖，它使得异步代码看起来像同步代码，从而更易于编写和理解。

示例：

```javascript
async function asyncFunction() {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncFunction();
```

#### 总结

`Promise` 提供了一个简洁而强大的工具来管理异步操作。通过 `then()` 和 `catch()`，你可以处理成功和失败的情况，并通过 `Promise` 链构建复杂的异步逻辑。`async/await` 进一步简化了 `Promise` 的使用，使异步代码更加直观。

## 三、函数高级

### 1、回调函数

回调函数（Callback Function）是指将一个函数作为参数传递给另一个函数，并在该函数执行过程中或执行完成后调用的函数。在 JavaScript 中，回调函数非常常见，尤其是在处理异步操作时。回调函数的概念是 JavaScript 编程中的基础之一。

#### 基本概念

- **函数作为参数**：回调函数是一个被作为参数传递给另一个函数的函数。它会在外部函数中某个时刻被调用。
- **异步操作中的回调**：回调函数通常用于异步操作，如事件处理、定时器、网络请求等。

例如，以下是一个简单的回调函数的例子：

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// 输出：
// Hello Alice
// Goodbye!
```

#### 应用场景

**1. 异步操作**

- JavaScript 中的许多操作是异步的，比如读取文件、发送 HTTP 请求、处理用户事件等。回调函数可以确保在异步操作完成后执行某些任务。

```javascript
setTimeout(() => {
  console.log("This message is delayed by 2 seconds.");
}, 2000);
```

**2. 事件处理**

- 在浏览器环境中，事件处理器通常以回调函数的形式绑定到 HTML 元素上，当事件触发时，回调函数会被执行。

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});
```

**3. 数组方法**

- JavaScript 中的一些数组方法，如`forEach`、`map`、`filter`、`reduce`等，都需要回调函数来处理数组的每个元素。

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

**4. 自定义异步流程**

- 回调函数可以用于自定义异步流程控制。例如，逐步执行一系列异步操作，每个操作完成后调用下一个操作。

```javascript
function firstTask(callback) {
  setTimeout(() => {
    console.log("First task completed.");
    callback(); // callback 在这里实际上是 secondTask
  }, 1000);
}

function secondTask() {
  console.log("Second task completed.");
}

firstTask(secondTask);
```

**注意事项**

- **回调地狱（Callback Hell）**：如果有多个异步操作依赖前一个操作的结果，就会出现嵌套多层的回调函数，代码会变得难以维护。可以通过使用`Promise`或`async/await`来解决这个问题。
- **错误处理**：在使用回调函数时，要特别注意处理错误，确保程序能在异常情况下正确运行。

**替代方案**

- **Promise**：Promise 是一种处理异步操作的更清晰的方式，可以避免回调地狱。
- **async/await**：这是基于 Promise 的语法糖，使得异步代码看起来更像同步代码，进一步提高了可读性。

回调函数在 JavaScript 中扮演着非常重要的角色，尤其是在处理异步操作时。随着现代 JavaScript 的发展，Promise 和`async/await`提供了更加简洁和易读的替代方案，但回调函数依然是理解异步编程的基础。

### 2、箭头函数

箭头函数（Arrow Function）是 ES6 引入的一种简洁的函数定义方式，它与传统函数表达式相比，有几个显著的不同之处，尤其是在语法和`this`绑定上。以下是箭头函数的主要特点和用法：

**语法简洁**

- 箭头函数使用`=>`符号定义。语法上更加简洁，特别适用于定义简单的函数。

  ```javascript
  // 传统函数表达式
  const add = function (a, b) {
    return a + b;
  };

  // 箭头函数
  const add = (a, b) => a + b;
  ```

- 当函数体只有一个表达式时，可以省略大括号 `{}` 和 `return` 关键字，表达式的值会被自动返回。

  ```javascript
  const square = (x) => x * x;
  ```

- 如果没有参数或有多个参数，需要使用圆括号 `()`：
  ```javascript
  const sayHello = () => console.log("Hello");
  const multiply = (a, b, c) => a * b * c;
  ```

**`this` 绑定**

- 箭头函数不会创建自己的`this`，它会捕获函数定义时的上下文中的`this`值，也就是**词法作用域**中的`this`。这与传统函数不同，传统函数的`this`取决于它的调用方式。

  ```javascript
  function Person() {
    this.age = 0;

    setInterval(() => {
      this.age++; // `this` 在此处引用的是Person实例
    }, 1000);
  }

  const p = new Person();
  ```

- 在上面的例子中，`this.age`能够正确引用`Person`对象的`age`属性，因为箭头函数的`this`绑定到创建时的上下文（`Person`实例）。

**没有 `arguments` 对象**

- 箭头函数没有自己的`arguments`对象。如果你需要访问`arguments`，可以通过箭头函数外部的函数来访问，或者使用 Rest 参数。

  ```javascript
  const func = () => {
    console.log(arguments); // 报错，`arguments`未定义
  };

  function normalFunc() {
    const arrowFunc = () => console.log(arguments);
    arrowFunc(); // 可以访问 `normalFunc` 的 `arguments`
  }
  ```

**不能用作构造函数**

- 箭头函数不能被用作构造函数，如果尝试使用`new`关键字调用箭头函数会抛出错误。
  ```javascript
  const Foo = () => {};
  const foo = new Foo(); // TypeError: Foo is not a constructor
  ```

**没有 `prototype` 属性**

- 由于箭头函数不能作为构造函数，因此它也没有`prototype`属性。
  ```javascript
  const func = () => {};
  console.log(func.prototype); // undefined
  ```

**适用场景**

- **短小的匿名函数**：箭头函数非常适合编写短小的匿名函数，特别是在回调中。
- **保持上下文的`this`**：在需要保持当前上下文的`this`引用的情况下（如定时器、事件处理器等），箭头函数是一个很好的选择。

**注意事项**

- 由于箭头函数的`this`绑定是静态的，因此在某些场景下（如对象方法定义中）需要谨慎使用。

总体来说，箭头函数让代码更加简洁易读，同时避免了`this`绑定问题带来的困扰。不过，它也有一些限制，使用时需根据具体场景选择合适的函数定义方式。

### 3、闭包函数

**闭包**（Closure）是JavaScript中的一个核心概念，它指的是一个函数可以记住并访问它的词法作用域，即使这个函数在其词法作用域之外执行。换句话说，闭包使得一个函数能够“捕获”并“记住”它被创建时的上下文。

**闭包的定义**
   - **词法作用域**：在JavaScript中，函数的作用域是在函数定义时确定的，而不是在函数调用时确定的。这种作用域规则被称为词法作用域。
   - **闭包的概念**：当一个函数能够访问它外部函数的变量时，这个函数就形成了一个闭包。闭包允许函数在外部函数作用域内保存状态。

**闭包的示例**

  下面是一个简单的闭包例子：
   ```javascript
   function outerFunction() {
     const outerVariable = 'I am outside!';

     function innerFunction() {
       console.log(outerVariable);
     }

     return innerFunction;
   }

   const myFunction = outerFunction();
   myFunction(); // 输出: 'I am outside!'
   ```
   在这个例子中，`innerFunction` 是一个闭包。即使 `outerFunction` 已经执行完毕并从调用栈中移除，但 `innerFunction` 仍然能够访问 `outerVariable` 变量。这是因为 `innerFunction` 保持了对 `outerFunction` 作用域的引用。

**闭包的实际应用**

   **1. 数据隐藏与封装**
   - 闭包常用于创建私有变量或方法，从而实现数据隐藏和封装。
     ```javascript
     function createCounter() {
       let count = 0;

       return {
         increment: function() {
           count++;
           return count;
         },
         decrement: function() {
           count--;
           return count;
         },
         getCount: function() {
           return count;
         }
       };
     }

     const counter = createCounter();
     console.log(counter.increment()); // 1
     console.log(counter.increment()); // 2
     console.log(counter.decrement()); // 1
     console.log(counter.getCount()); // 1
     ```
     在这个例子中，`count` 变量是私有的，外部无法直接访问它，只能通过暴露的方法来操作它。

   **2. 模拟私有方法**
   - JavaScript没有私有方法的概念，但可以使用闭包来模拟私有方法。
     ```javascript
     function Person(name) {
       const secret = 'I am a secret!';

       this.sayName = function() {
         console.log('My name is ' + name);
       };

       this.revealSecret = function() {
         console.log(secret);
       };
     }

     const person = new Person('Alice');
     person.sayName(); // 输出: 'My name is Alice'
     person.revealSecret(); // 输出: 'I am a secret!'
     ```

   **3. 回调函数与异步操作**
   - 闭包也常用于回调函数中，特别是在异步操作中，确保回调函数能够访问执行时的上下文变量。
     ```javascript
     function delayedGreeting(name) {
       setTimeout(function() {
         console.log('Hello, ' + name);
       }, 1000);
     }

     delayedGreeting('Alice'); // 1秒后输出: 'Hello, Alice'
     ```
     在这个例子中，`setTimeout` 回调函数形成了闭包，能够访问外部函数 `delayedGreeting` 的 `name` 变量。

**闭包的常见问题**

   **1. 闭包与循环**
   - 在循环中使用闭包时，如果不注意，会导致所有闭包共享同一个外部变量。
     ```javascript
     for (var i = 1; i <= 5; i++) {
       setTimeout(function() {
         console.log(i); // 输出5次 6
       }, i * 1000);
     }
     ```
     这是因为`var`声明的`i`是全局的，在闭包中所有`i`共享同一个值。在ES6中，可以使用`let`来解决这个问题，因为`let`是块级作用域。
     ```javascript
     for (let i = 1; i <= 5; i++) {
       setTimeout(function() {
         console.log(i); // 分别输出1到5
       }, i * 1000);
     }
     ```

   **2. 内存泄漏**
   - 如果闭包持有对外部变量的引用，可能会导致内存泄漏，因为这些变量不会被垃圾回收。

**总结**
   - **闭包**是JavaScript中一个强大而常见的工具，它允许函数捕获和使用外部作用域的变量。这使得函数可以保持状态、隐藏数据，并在异步操作中保持对变量的访问。

   - 尽管闭包非常有用，但在使用时要注意不要滥用，以避免可能的性能问题和内存泄漏。

### 3、递归函数

递归函数是指在函数的定义中调用其自身的一种编程技术。递归函数通常用于解决可以分解为相似子问题的问题。递归函数通常包含两个部分：

1. **基准情形（Base Case）**：这是递归终止的条件。当满足这个条件时，函数不再递归调用自身，而是返回一个明确的结果。
  
2. **递归情形（Recursive Case）**：这是函数调用自身的部分。通过不断地调用自身，递归函数逐渐将问题规模缩小，最终达到基准情形。

**举个例子**

计算一个数的阶乘是递归函数的经典例子。

阶乘的数学定义如下：
- `0! = 1`（基准情形）
- `n! = n * (n - 1)!`，其中 `n > 0`（递归情形）

根据这个定义，阶乘的递归实现可以写成如下的JavaScript代码：

```javascript
function factorial(n) {
    // 基准情形
    if (n === 0) {
        return 1;
    }
    // 递归情形
    return n * factorial(n - 1);
}
```

**递归的工作原理**

假设我们调用 `factorial(5)`，递归调用的顺序如下：

```
factorial(5)
-> 5 * factorial(4)
-> 5 * (4 * factorial(3))
-> 5 * (4 * (3 * factorial(2)))
-> 5 * (4 * (3 * (2 * factorial(1))))
-> 5 * (4 * (3 * (2 * (1 * factorial(0)))))
-> 5 * (4 * (3 * (2 * (1 * 1))))
-> 5 * (4 * (3 * (2 * 1)))
-> 5 * (4 * (3 * 2))
-> 5 * (4 * 6)
-> 5 * 24
-> 120
```

最终，`factorial(5)` 返回 `120`。

递归函数在处理具有分治性质的问题时非常有用，比如树结构的遍历、数学归纳法的问题、以及很多算法问题。重要的是确保每次递归调用都会朝着基准情形前进，否则递归会进入无限循环，导致栈溢出错误。

### 4、防抖节流函数

防抖（Debounce）和节流（Throttle）是两种用于优化高频率事件触发的技术。在前端开发中，这些技术常用于处理诸如滚动、调整窗口大小、输入框键入等事件，以减少函数调用的频率，从而提高性能。

#### 防抖（Debounce）

**防抖**是指在事件被触发后，**等待一段时间再执行函数**，如果在这段时间内事件又被触发了，则重新开始计时。防抖的目的是让某个高频率的操作只在一段时间内最后一次执行。

**例子**

假设你正在监听一个输入框的输入事件，你想在用户停止输入后的500毫秒执行搜索请求，而不是每次输入时都发出请求。你可以使用防抖技术来实现这一点。

**JavaScript实现防抖：**

```javascript
function debounce(func, delay) {
    // 定义一个变量 timeoutId 用来存储 setTimeout 的返回值
    let timeoutId;

    // 返回一个新的函数，这个函数将被防抖
    return function (...args) {
        // 如果 timeoutId 存在，说明上一次的延迟还未完成
        // 清除上一次的延迟，防止 func 被调用
        clearTimeout(timeoutId);

        // 设置一个新的延迟，当 delay 时间过去后，执行 func 函数
        timeoutId = setTimeout(() => {
            // 使用 apply 方法将 func 函数的 this 绑定到当前上下文，并传入参数 args
            func.apply(this, args);
        }, delay);
    };
}
```

**使用方法：**

```javascript
const handleInput = debounce(() => {
    console.log('Search query sent!');
}, 500);

// 当用户在输入框中输入时，handleInput 函数将被触发
// 由于防抖，只有在用户停止输入 500 毫秒后，handleInput 才会实际执行
document.getElementById('search').addEventListener('input', handleInput);
```

在这个例子中，`handleInput` 只会在用户停止输入500毫秒后才会被执行。

#### 节流（Throttle）

**节流**是指在事件被连续触发时，**每隔一定时间执行一次函数**，而不是每次触发事件时都执行。节流的目的是限制函数的执行频率，以减少性能开销。

**例子**

假设你正在监听页面的滚动事件，你希望每100毫秒检查一次用户是否滚动到了页面底部，而不是每次滚动时都执行检查。

**JavaScript实现节流：**

```javascript
function throttle(func, interval) {
    // 记录上一次执行函数的时间
    let lastTime = 0;

    // 返回一个新的函数，这个函数将被节流
    return function (...args) {
        // 获取当前的时间戳
        const now = Date.now();

        // 如果当前时间距离上一次执行 func 的时间超过了指定的间隔
        if (now - lastTime >= interval) {
            // 更新上一次执行函数的时间
            lastTime = now;

            // 使用 apply 方法将 func 函数的 this 绑定到当前上下文，并传入参数 args
            func.apply(this, args);
        }
    };
}
```

**使用方法：**

```javascript
const handleScroll = throttle(() => {
    console.log('Scroll event detected!');
}, 100);

// 当用户滚动页面时，handleScroll 函数将被触发
// 由于节流，handleScroll 最多每隔 100 毫秒执行一次
window.addEventListener('scroll', handleScroll);
```

在这个例子中，`handleScroll` 只会每隔100毫秒最多执行一次，即使滚动事件在这段时间内被频繁触发。

**总结**

- **防抖（Debounce）**：事件触发后等待一段时间，如果在等待期间事件再次触发，则重新计时。适用于需要在高频事件停止后执行的场景。
- **节流（Throttle）**：限制事件处理函数的执行频率，即每隔固定时间执行一次函数。适用于需要限制高频事件的处理次数的场景。
