---
outline: deep
---

# JS 基础

## 一、JS 基础语法

### 1、JavaScript 是什么

JavaScript（简称 JS）是一种高层次的、解释性的编程语言。它广泛应用于 Web 开发，特别是前端开发，用于实现网页的动态行为和交互功能。以下是对 JavaScript 的一些基本介绍：

1. **动态语言**：JavaScript 是一种动态语言，这意味着你可以在运行时定义变量类型，而不需要在编译时确定。

2. **客户端脚本**：JavaScript 通常在浏览器中运行，用于控制网页的行为。例如，表单验证、用户界面更新、与服务器的交互等。

3. **嵌入式**：JavaScript 通常嵌入在 HTML 文档中，通过`<script>`标签加载并执行。

4. **跨平台**：由于 JavaScript 运行在浏览器中，它几乎可以在任何平台上使用，包括 Windows、Mac、Linux、iOS、Android 等。

5. **事件驱动**：JavaScript 通常是事件驱动的，即它响应用户的操作（如点击按钮、提交表单、移动鼠标等）来执行相应的代码。

6. **面向对象**：JavaScript 支持面向对象编程，允许创建和操作对象和类。

**JavaScript 示例**

以下是一个简单的 JavaScript 示例，显示一个弹出对话框：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript 示例</title>
  </head>
  <body>
    <h1>欢迎来到我的网站</h1>
    <button onclick="showMessage()">点击我</button>

    <script>
      function showMessage() {
        alert("你好，世界！");
      }
    </script>
  </body>
</html>
```

当用户点击按钮时，`showMessage`函数被调用，并显示一个包含“你好，世界！”消息的弹出对话框。

### 2、JS 变量

在 JavaScript 中，变量是用于存储数据的容器。变量可以存储各种类型的数据，例如数字、字符串、布尔值、对象等。下面介绍如何声明和赋值变量。

#### 声明变量

JavaScript 中有三种方式可以声明变量：`var`、`let`和`const`。

1. **var**：

   - 使用`var`声明的变量在整个函数范围内（或全局范围内，如果在函数外声明）可用。
   - 可以重新声明和重新赋值。

   ```javascript
   var name = "Alice";
   var age = 25;
   ```

2. **let**：

   - 使用`let`声明的变量在块级作用域内（例如在一个代码块内 `{}`）可用。
   - 可以重新赋值，但不能在同一块级作用域内重新声明。

   ```javascript
   let city = "New York";
   let temperature = 30;
   ```

3. **const**：

   - 使用`const`声明的变量在块级作用域内可用。
   - 必须在声明时赋值，并且不能重新赋值（即常量）。

   ```javascript
   const pi = 3.14159;
   const gravity = 9.8;
   ```

#### 变量赋值

变量赋值是将一个值存储到变量中的过程。可以在声明变量时赋值，也可以在声明之后赋值。

**在声明时赋值**

```javascript
let message = "Hello, World!";
const year = 2024;
```

**在声明之后赋值**

```javascript
let score;
score = 100;

var greeting;
greeting = "Good morning!";

const maxSpeed = 120; // const 声明时必须赋值
```

**变量类型**

JavaScript 中的变量是动态类型的，这意味着你可以将不同类型的值赋给同一个变量。例如：

```javascript
let data;
data = 42; // 赋值为数字
data = "hello"; // 赋值为字符串
data = true; // 赋值为布尔值
```

### 2、JS 数据类型

JavaScript 有八种主要的数据类型，这些数据类型分为两类：原始类型（Primitive Types）和引用类型（Reference Types）。以下是对每种数据类型的详细介绍：

#### 原始类型（Primitive Types）

1. **Number**:

   - 用于表示整数和浮点数。
   - 例如：`42`, `3.14`, `-7`.

   ```javascript
   let age = 25;
   let temperature = 36.6;
   ```

2. **String**:

   - 用于表示文本数据。
   - 字符串可以使用单引号、双引号或反引号括起来。
   - 例如：`'hello'`, `"world"`, `` `template string` ``.

   ```javascript
   let greeting = "Hello, World!";
   let name = "Alice";
   let message = `Welcome, ${name}!`;
   ```

3. **Boolean**:

   - 用于表示逻辑值：`true`或`false`.

   ```javascript
   let isActive = true;
   let isCompleted = false;
   ```

4. **Undefined**:

   - 一个变量声明但未初始化时，它的值是`undefined`.

   ```javascript
   let uninitializedVar;
   console.log(uninitializedVar); // 输出: undefined
   ```

5. **Null**:

   - 表示一个空值，表示一个变量没有任何值。
   - 与`undefined`不同，`null`是一个赋值值。

   ```javascript
   let emptyValue = null;
   ```

6. **Symbol**:

   - 用于创建唯一且不可变的值，通常用于对象的键。
   - 使用`Symbol()`函数创建。

   ```javascript
   let uniqueId = Symbol("id");
   ```

7. **BigInt**:

   - 用于表示任意精度的整数。
   - 使用后缀`n`表示大整数或使用`BigInt`函数创建。

   ```javascript
   let largeNumber = 9007199254740991n;
   let anotherLargeNumber = BigInt(9007199254740991);
   ```

#### 引用类型（Reference Types）

1. **Object**:

   - 用于存储键值对集合和更复杂的实体。
   - 对象可以通过大括号 `{}` 创建。

   ```javascript
   let person = {
     name: "Alice",
     age: 25,
     isStudent: true,
   };
   ```

2. **Array**:

   - 数组是对象的特殊类型，用于存储有序集合的值。
   - 数组可以通过方括号 `[]` 创建。

   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   let names = ["Alice", "Bob", "Charlie"];
   ```

3. **Function**:

   - 函数是可调用的对象，用于封装代码块。

   ```javascript
   function greet(name) {
     return `Hello, ${name}!`;
   }
   ```

### 3、获取变量数据类型

在 JavaScript 中，可以使用`typeof`运算符来获取变量的数据类型。`typeof`运算符返回一个字符串，表示操作数的数据类型。以下是一些示例，展示了如何使用`typeof`运算符来获取不同变量的数据类型：

**示例代码**

```javascript
// 数字类型
let number = 42;
console.log(typeof number); // 输出: "number"

// 字符串类型
let text = "Hello, World!";
console.log(typeof text); // 输出: "string"

// 布尔类型
let isTrue = true;
console.log(typeof isTrue); // 输出: "boolean"

// 未定义类型
let notDefined;
console.log(typeof notDefined); // 输出: "undefined"

// 对象类型（包括数组和null）
let person = { name: "Alice", age: 30 };
console.log(typeof person); // 输出: "object"

let numbers = [1, 2, 3];
console.log(typeof numbers); // 输出: "object"

let emptyValue = null;
console.log(typeof emptyValue); // 输出: "object"

// 函数类型
function greet() {
  return "Hello";
}
console.log(typeof greet); // 输出: "function"

// Symbol 类型
let symbol = Symbol("symbol");
console.log(typeof symbol); // 输出: "symbol"

// BigInt 类型（用于表示大整数）
let bigNumber = 9007199254740991n;
console.log(typeof bigNumber); // 输出: "bigint"
```

**注意事项**

1. **对象类型**：所有非原始类型（例如数组、对象、`null`）都会返回`"object"`。特别要注意的是，`typeof null` 也会返回 `"object"`，这是 JavaScript 中的一个历史遗留问题。

   ```javascript
   let obj = { key: "value" };
   console.log(typeof obj); // 输出: "object"

   let arr = [1, 2, 3];
   console.log(typeof arr); // 输出: "object"

   let emptyValue = null;
   console.log(typeof emptyValue); // 输出: "object"
   ```

2. **函数类型**：函数会返回`"function"`类型。

   ```javascript
   function myFunction() {}
   console.log(typeof myFunction); // 输出: "function"
   ```

**使用 `instanceof` 检查具体对象类型**

虽然`typeof`可以检查基本类型，但对于检查具体对象类型（例如数组），可以使用`instanceof`运算符：

```javascript
let numbers = [1, 2, 3];
console.log(numbers instanceof Array); // 输出: true
console.log(numbers instanceof Object); // 输出: true

let person = { name: "Alice", age: 30 };
console.log(person instanceof Object); // 输出: true
```

### 4、数据类型转化

JavaScript 中的数据类型之间可以通过多种方式进行转换，包括显式转换和隐式转换。以下是一些常用的类型转换方法：

#### 显式转换

显式转换是通过使用特定的函数或方法来转换数据类型。以下是一些常见的显式转换方法：

1. **转换为字符串**

   - 使用 `String()` 函数。
   - 使用 `.toString()` 方法。

   ```javascript
   let num = 123;
   let bool = true;

   let str1 = String(num); // "123"
   let str2 = bool.toString(); // "true"
   ```

2. **转换为数字**

   - 使用 `Number()` 函数。
   - 使用 `parseInt()` 和 `parseFloat()` 函数。

   ```javascript
   let str = "123";
   let bool = true;

   let num1 = Number(str); // 123
   let num2 = Number(bool); // 1

   let strFloat = "123.45";
   let num3 = parseInt(str); // 123
   let num4 = parseFloat(strFloat); // 123.45
   ```

3. **转换为布尔值**

   - 使用 `Boolean()` 函数。

   ```javascript
   let num = 0;
   let str = "";

   let bool1 = Boolean(num); // false
   let bool2 = Boolean(str); // false

   let num2 = 123;
   let str2 = "hello";

   let bool3 = Boolean(num2); // true
   let bool4 = Boolean(str2); // true
   ```

#### 隐式转换

隐式转换是由 JavaScript 引擎在需要时自动进行的类型转换。以下是一些常见的隐式转换场景：

1. **字符串与其他类型的隐式转换**

   - 使用 `+` 操作符进行字符串拼接时，其他类型会被转换为字符串。

   ```javascript
   let num = 123;
   let str = "hello";

   let result = str + num; // "hello123"
   ```

2. **数字与布尔值的隐式转换**

   - 在需要布尔值的上下文中，数字会被转换为布尔值。例如在条件语句中。

   ```javascript
   let num = 0;

   if (num) {
     console.log("This won't run because 0 is falsy");
   }

   let num2 = 123;

   if (num2) {
     console.log("This will run because 123 is truthy");
   }
   ```

3. **算术操作中的隐式转换**

   - 在算术操作中，非数字类型会被转换为数字类型。

   ```javascript
   let str = "123";
   let result = str * 2; // 246
   ```

**转换示例**

```javascript
// 显式转换
let num = 42;
let str = String(num); // "42"
let bool = Boolean(num); // true

let str2 = "3.14";
let num2 = Number(str2); // 3.14
let num3 = parseInt(str2); // 3
let num4 = parseFloat(str2); // 3.14

// 隐式转换
let result1 = "Hello, " + 123; // "Hello, 123"
let result2 = 2 * "3"; // 6
let result3 = "4" - 1; // 3

let isTrue = !!1; // true
let isFalse = !!0; // false

if ("hello") {
  console.log("This will run because non-empty strings are truthy");
}

if (0) {
  console.log("This won't run because 0 is falsy");
}
```

#### 注意事项

- **NaN（非数字）**: 如果试图将非数字字符串转换为数字，结果会是 `NaN`，表示“不是数字”。

  ```javascript
  let invalidNum = Number("abc"); // NaN
  console.log(invalidNum); // NaN
  ```

- **`parseInt` 和 `parseFloat`**: `parseInt` 会解析整数，`parseFloat` 会解析浮点数。

  ```javascript
  let num5 = parseInt("10px"); // 10
  let num6 = parseFloat("3.14em"); // 3.14
  ```

### 5、运算符的分类

JavaScript 提供了多种运算符，用于执行各种操作。以下是常用的 JavaScript 运算符及其用途：

#### 算术运算符

这些运算符用于执行基本的数学运算。

1. **加法 (`+`)**

   - 将两个操作数相加。

   ```javascript
   let sum = 5 + 3; // 8
   ```

2. **减法 (`-`)**

   - 从第一个操作数中减去第二个操作数。

   ```javascript
   let difference = 5 - 3; // 2
   ```

3. **乘法 (`*`)**

   - 将两个操作数相乘。

   ```javascript
   let product = 5 * 3; // 15
   ```

4. **除法 (`/`)**

   - 将第一个操作数除以第二个操作数。

   ```javascript
   let quotient = 6 / 3; // 2
   ```

5. **取余 (`%`)**

   - 返回第一个操作数除以第二个操作数的余数。

   ```javascript
   let remainder = 7 % 3; // 1
   ```

6. **递增 (`++`)**

   - 将操作数增加 1。

   ```javascript
   let a = 5;
   a++; // a 变为 6
   ```

7. **递减 (`--`)**

   - 将操作数减少 1。

   ```javascript
   let b = 5;
   b--; // b 变为 4
   ```

#### 赋值运算符

这些运算符用于给变量赋值。

1. **赋值 (`=`)**

   - 将右侧操作数的值赋给左侧操作数。

   ```javascript
   let x = 10;
   ```

2. **加赋值 (`+=`)**

   - 将右侧操作数的值加到左侧操作数并赋值给左侧操作数。

   ```javascript
   let y = 5;
   y += 3; // y 变为 8
   ```

3. **减赋值 (`-=`)**

   - 将右侧操作数的值从左侧操作数中减去并赋值给左侧操作数。

   ```javascript
   let z = 5;
   z -= 3; // z 变为 2
   ```

4. **乘赋值 (`*=`)**

   - 将右侧操作数的值乘以左侧操作数并赋值给左侧操作数。

   ```javascript
   let w = 5;
   w *= 3; // w 变为 15
   ```

5. **除赋值 (`/=`)**

   - 将左侧操作数除以右侧操作数并赋值给左侧操作数。

   ```javascript
   let v = 9;
   v /= 3; // v 变为 3
   ```

6. **取余赋值 (`%=`)**

   - 将左侧操作数取余右侧操作数并赋值给左侧操作数。

   ```javascript
   let u = 10;
   u %= 3; // u 变为 1
   ```

#### 比较运算符

这些运算符用于比较两个操作数。

1. **等于 (`==`)**

   - 如果两个操作数相等，返回`true`。

   ```javascript
   let isEqual = 5 == "5"; // true
   ```

2. **全等于 (`===`)**

   - 如果两个操作数值和类型都相等，返回`true`。

   ```javascript
   let isStrictEqual = 5 === "5"; // false
   ```

3. **不等于 (`!=`)**

   - 如果两个操作数不相等，返回`true`。

   ```javascript
   let isNotEqual = 5 != "5"; // false
   ```

4. **不全等于 (`!==`)**

   - 如果两个操作数的值或类型不相等，返回`true`。

   ```javascript
   let isStrictNotEqual = 5 !== "5"; // true
   ```

5. **大于 (`>`)**

   - 如果左侧操作数大于右侧操作数，返回`true`。

   ```javascript
   let isGreater = 5 > 3; // true
   ```

6. **小于 (`<`)**

   - 如果左侧操作数小于右侧操作数，返回`true`。

   ```javascript
   let isLess = 5 < 3; // false
   ```

7. **大于或等于 (`>=`)**

   - 如果左侧操作数大于或等于右侧操作数，返回`true`。

   ```javascript
   let isGreaterOrEqual = 5 >= 5; // true
   ```

8. **小于或等于 (`<=`)**

   - 如果左侧操作数小于或等于右侧操作数，返回`true`。

   ```javascript
   let isLessOrEqual = 5 <= 5; // true
   ```

#### 逻辑运算符

这些运算符用于逻辑运算。

1. **逻辑与 (`&&`)**

   - 如果两个操作数都为`true`，返回`true`。

   ```javascript
   let andResult = true && false; // false
   ```

2. **逻辑或 (`||`)**

   - 如果任一个操作数为`true`，返回`true`。

   ```javascript
   let orResult = true || false; // true
   ```

3. **逻辑非 (`!`)**

   - 取反操作数的布尔值。

   ```javascript
   let notResult = !true; // false
   ```

#### 位运算符

这些运算符用于按位操作。

1. **按位与 (`&`)**

   - 对两个操作数的每一位执行与操作。

   ```javascript
   let bitwiseAnd = 5 & 1; // 1
   ```

2. **按位或 (`|`)**

   - 对两个操作数的每一位执行或操作。

   ```javascript
   let bitwiseOr = 5 | 1; // 5
   ```

3. **按位异或 (`^`)**

   - 对两个操作数的每一位执行异或操作。

   ```javascript
   let bitwiseXor = 5 ^ 1; // 4
   ```

4. **按位非 (`~`)**

   - 对操作数的每一位执行取反操作。

   ```javascript
   let bitwiseNot = ~5; // -6
   ```

5. **左移 (`<<`)**

   - 将第一个操作数的位向左移动指定的位数。

   ```javascript
   let leftShift = 5 << 1; // 10
   ```

6. **右移 (`>>`)**

   - 将第一个操作数的位向右移动指定的位数（带符号）。

   ```javascript
   let rightShift = 5 >> 1; // 2
   ```

7. **无符号右移 (`>>>`)**

   - 将第一个操作数的位向右移动指定的位数（无符号）。

   ```javascript
   let unsignedRightShift = 5 >>> 1; // 2
   ```

#### 其他运算符

1. **三元运算符 (`? :`)**

   - 根据条件表达式的结果返回不同的值。

   ```javascript
   let age = 20;
   let canVote = age >= 18 ? "Yes" : "No"; // "Yes"
   ```

2. **逗号运算符 (`,`)**

   - 在一个表达式中计算多个表达式，并返回最后一个表达式的值。

   ```javascript
   let result = (1 + 2, 3 + 4); // 7
   ```

3. **typeof 运算符**

   - 返回操作数的数据类型。

   ```javascript
   let dataType = typeof 123; // "number"
   ```

4. **instanceof 运算符**

   - 检查对象是否为特定构造函数的实例。

   ```javascript
   let arr = [];
   let isArray = arr instanceof Array; // true
   ```

5. **delete 运算符**

   - 删除对象的属性。

   ```javascript
   let obj = { name: "Alice", age: 25 };
   delete obj.age; // obj 现在是 { name: 'Alice' }
   ```

6. **void 运算符**

   - 计算表达式并返回 `undefined`。

   ```javascript
   let result = void 0; // undefined
   ```

### 6、分支与循环

在 JavaScript 中，分支语句用于控制程序的执行流程，而循环语句用于重复执行代码块。以下是常见的分支语句和循环语句：

#### 分支语句

1. **`if` 语句**

   基本的条件判断语句，根据条件执行不同的代码块。

   ```javascript
   let score = 85;

   if (score >= 60) {
     console.log("Passed");
   }
   ```

2. **`if...else` 语句**

   扩展的条件判断，如果条件为`false`时执行另一个代码块。

   ```javascript
   let score = 55;

   if (score >= 60) {
     console.log("Passed");
   } else {
     console.log("Failed");
   }
   ```

3. **`if...else if...else` 语句**

   用于处理多个条件。

   ```javascript
   let score = 75;

   if (score >= 90) {
     console.log("Excellent");
   } else if (score >= 60) {
     console.log("Passed");
   } else {
     console.log("Failed");
   }
   ```

4. **`switch` 语句**

   用于根据一个表达式的值选择多个代码块中的一个进行执行。

   ```javascript
   let day = 2;

   switch (day) {
     case 1:
       console.log("Monday");
       break;
     case 2:
       console.log("Tuesday");
       break;
     case 3:
       console.log("Wednesday");
       break;
     default:
       console.log("Invalid day");
       break;
   }
   ```

#### 循环语句

1. **`for` 循环**

   用于执行一个代码块多次，通常用于已知次数的循环。

   ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i); // 输出 0 到 4
   }
   ```

2. **`while` 循环**

   用于在条件为 `true` 时重复执行一个代码块，适用于循环次数不确定的情况。

   ```javascript
   let count = 0;

   while (count < 5) {
     console.log(count); // 输出 0 到 4
     count++;
   }
   ```

3. **`do...while` 循环**

   与 `while` 循环类似，但至少会执行一次代码块，然后在每次迭代后检查条件。

   ```javascript
   let count = 0;

   do {
     console.log(count); // 输出 0 到 4
     count++;
   } while (count < 5);
   ```

4. **`for...in` 循环**

   用于遍历对象的可枚举属性。

   ```javascript
   let person = { name: "Alice", age: 25 };

   for (let key in person) {
     console.log(key + ": " + person[key]);
   }
   ```

5. **`for...of` 循环**

   用于遍历可迭代对象（如数组、字符串、Set 和 Map）的值。

   ```javascript
   let array = [10, 20, 30];

   for (let value of array) {
     console.log(value); // 输出 10, 20, 30
   }
   ```

这些分支和循环语句是 JavaScript 中控制程序执行流程和重复执行代码的基础。

## 二、数组和对象

### 1、数组的使用

在 JavaScript 中，数组是用于存储多个值的对象。数组可以包含不同类型的数据，包括数字、字符串、对象等。它们是有序的集合，索引从 `0` 开始。以下是关于数组的基本知识和常用操作：

#### 创建数组

1. **使用数组字面量**:

   ```javascript
   let fruits = ["apple", "banana", "orange"];
   ```

2. **使用 `Array` 构造函数**:

   ```javascript
   let numbers = new Array(10, 20, 30);
   let emptyArray = new Array(5); // 创建一个长度为5的空数组
   ```

**访问数组元素**

- 通过索引访问数组中的元素，索引从 `0` 开始。

  ```javascript
  let colors = ["red", "green", "blue"];
  console.log(colors[0]); // 输出: 'red'
  console.log(colors[2]); // 输出: 'blue'
  ```

**修改数组元素**

- 使用索引赋值来修改数组中的元素。

  ```javascript
  let colors = ["red", "green", "blue"];
  colors[1] = "yellow";
  console.log(colors); // 输出: ['red', 'yellow', 'blue']
  ```

**数组长度**

- 使用 `length` 属性获取或设置数组的长度。

  ```javascript
  let numbers = [1, 2, 3];
  console.log(numbers.length); // 输出: 3

  numbers.length = 5;
  console.log(numbers); // 输出: [1, 2, 3, <2 empty items>]
  ```

#### 数组方法

1. **`push()`**: 向数组的末尾添加一个或多个元素。

   ```javascript
   let fruits = ["apple", "banana"];
   fruits.push("orange");
   console.log(fruits); // 输出: ['apple', 'banana', 'orange']
   ```

2. **`pop()`**: 从数组的末尾删除一个元素，并返回该元素。

   ```javascript
   let fruits = ["apple", "banana", "orange"];
   let lastFruit = fruits.pop();
   console.log(lastFruit); // 输出: 'orange'
   console.log(fruits); // 输出: ['apple', 'banana']
   ```

3. **`shift()`**: 从数组的开头删除一个元素，并返回该元素。

   ```javascript
   let fruits = ["apple", "banana", "orange"];
   let firstFruit = fruits.shift();
   console.log(firstFruit); // 输出: 'apple'
   console.log(fruits); // 输出: ['banana', 'orange']
   ```

4. **`unshift()`**: 向数组的开头添加一个或多个元素。

   ```javascript
   let fruits = ["banana", "orange"];
   fruits.unshift("apple");
   console.log(fruits); // 输出: ['apple', 'banana', 'orange']
   ```

5. **`splice()`**: 添加或删除数组中的元素。

   ```javascript
   let fruits = ["apple", "banana", "orange"];
   fruits.splice(1, 1, "pear", "grape"); // 从索引1开始，删除1个元素，并添加'pear'和'grape'
   console.log(fruits); // 输出: ['apple', 'pear', 'grape', 'orange']
   ```

6. **`slice()`**: 返回数组的一个浅拷贝。

   ```javascript
   let fruits = ["apple", "banana", "orange"];
   let citrus = fruits.slice(1, 3); // 从索引1到索引3（不包括3）
   console.log(citrus); // 输出: ['banana', 'orange']
   ```

7. **`forEach()`**: 遍历数组中的每个元素，并对每个元素执行一个函数。

   ```javascript
   let numbers = [1, 2, 3];
   numbers.forEach((num) => {
     console.log(num); // 输出: 1 2 3
   });
   ```

8. **`map()`**: 创建一个新数组，数组中的每个元素是原始数组元素调用提供的函数后的结果。

   ```javascript
   let numbers = [1, 2, 3];
   let doubled = numbers.map((num) => num * 2);
   console.log(doubled); // 输出: [2, 4, 6]
   ```

9. **`filter()`**: 创建一个新数组，其中包含所有通过测试的元素。

   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   let evenNumbers = numbers.filter((num) => num % 2 === 0);
   console.log(evenNumbers); // 输出: [2, 4]
   ```

10. **`reduce()`**: 从左到右应用一个函数，将数组减少为单一的值。

    ```javascript
    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum); // 输出: 10
    ```

11. **`find()`**: 返回数组中第一个满足提供测试函数的元素。

    ```javascript
    let numbers = [4, 9, 16];
    let firstSquare = numbers.find((num) => num > 10);
    console.log(firstSquare); // 输出: 16
    ```

12. **`sort()`**: 对数组中的元素进行排序。

    ```javascript
    let numbers = [3, 1, 4, 1, 5];
    numbers.sort((a, b) => a - b); // 从小到大排序
    console.log(numbers); // 输出: [1, 1, 3, 4, 5]
    ```

13. **`reverse()`**: 反转数组中元素的顺序。

    ```javascript
    let numbers = [1, 2, 3];
    numbers.reverse();
    console.log(numbers); // 输出: [3, 2, 1]
    ```

这些是 JavaScript 数组的基本知识和操作方法。数组是处理一组数据的强大工具，掌握这些基本操作能帮助你更高效地进行开发。

### 2、对象的使用

在 JavaScript 中，对象是一个用于存储键值对的复杂数据类型。它们是 JavaScript 中最常用的数据结构之一，用于表示实体和其属性。对象可以包含各种类型的值，包括数字、字符串、数组、函数等。

#### 创建对象

1. **使用对象字面量**

   这是最常见的创建对象的方法。对象字面量是一对大括号 `{}`，其中包含一个或多个键值对。

   ```javascript
   let person = {
     name: "Alice",
     age: 30,
     isStudent: false,
   };
   ```

2. **使用 `new Object()` 构造函数**

   这种方法较少使用，但它也可以用来创建对象。

   ```javascript
   let person = new Object();
   person.name = "Bob";
   person.age = 25;
   person.isStudent = true;
   ```

3. **使用 `Object.create()`**

   创建一个新的对象，使用指定的原型对象和可选的属性。

   ```javascript
   let proto = {
     greet: function () {
       console.log("Hello");
     },
   };
   let person = Object.create(proto);
   person.name = "Charlie";
   person.age = 35;
   ```

**访问和修改对象属性**

1. **点符号 (`.`)**

   访问和修改对象属性的最常见方法。

   ```javascript
   let person = {
     name: "Alice",
     age: 30,
   };

   console.log(person.name); // 输出: 'Alice'
   person.age = 31;
   console.log(person.age); // 输出: 31
   ```

2. **方括号符号 (`[]`)**

   允许使用变量和字符串作为属性名。

   ```javascript
   let person = {
     name: "Alice",
     age: 30,
   };

   console.log(person["name"]); // 输出: 'Alice'
   let prop = "age";
   console.log(person[prop]); // 输出: 30

   person["age"] = 31;
   console.log(person["age"]); // 输出: 31
   ```

**添加和删除属性**

1. **添加属性**

   可以直接通过点符号或方括号符号添加新属性。

   ```javascript
   let person = { name: "Alice" };
   person.age = 30;
   person["isStudent"] = false;

   console.log(person); // 输出: { name: 'Alice', age: 30, isStudent: false }
   ```

2. **删除属性**

   使用 `delete` 运算符删除对象的属性。

   ```javascript
   let person = { name: "Alice", age: 30 };
   delete person.age;
   console.log(person); // 输出: { name: 'Alice' }
   ```

#### 对象方法

对象可以包含方法，即函数作为对象的属性。

```javascript
let person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // 输出: 'Hello, my name is Alice'
```

#### 对象的 `this` 关键字

在对象的方法中，`this` 关键字指向对象本身。

```javascript
let person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
  updateAge: function (newAge) {
    this.age = newAge;
  },
};

person.updateAge(31);
console.log(person.age); // 输出: 31
```

**对象的 `keys()`, `values()`, 和 `entries()` 方法**

1. **`Object.keys()`**: 返回对象的所有键（属性名）。

   ```javascript
   let person = { name: "Alice", age: 30 };
   let keys = Object.keys(person);
   console.log(keys); // 输出: ['name', 'age']
   ```

2. **`Object.values()`**: 返回对象的所有值。

   ```javascript
   let person = { name: "Alice", age: 30 };
   let values = Object.values(person);
   console.log(values); // 输出: ['Alice', 30]
   ```

3. **`Object.entries()`**: 返回对象的所有键值对。

   ```javascript
   let person = { name: "Alice", age: 30 };
   let entries = Object.entries(person);
   console.log(entries); // 输出: [['name', 'Alice'], ['age', 30]]
   ```

这些是 JavaScript 中对象的基本操作和用法。对象是非常强大的数据结构，可以用来建模复杂的数据和行为。

## 二、函数及 this

### 1、函数的用法

在 JavaScript 中，函数是用于执行特定任务或计算的代码块。函数可以接收输入（参数），执行操作，并返回结果。函数是 JavaScript 中最基本和重要的构建块之一。

#### 创建函数

1. **函数声明（Function Declaration）**

   使用 `function` 关键字创建一个函数。函数声明有一个名称，后跟参数列表和函数体。

   ```javascript
   function greet(name) {
     return "Hello, " + name;
   }
   ```

2. **函数表达式（Function Expression）**

   函数表达式将函数定义赋值给一个变量。可以是具名或匿名函数。

   ```javascript
   let greet = function (name) {
     return "Hello, " + name;
   };
   ```

3. **箭头函数（Arrow Function）**

   箭头函数是简洁的函数表达式，使用 `=>` 语法。箭头函数不会绑定 `this`，适用于简短的函数。

   ```javascript
   let greet = (name) => "Hello, " + name;
   ```

4. **立即调用的函数表达式（IIFE）**

   立即调用的函数表达式在定义时立即执行，通常用于创建局部作用域。

   ```javascript
   (function () {
     console.log("This function runs immediately");
   })();
   ```

**调用函数**

调用函数时，传入参数（如果有），并获取返回值。

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(3, 5);
console.log(sum); // 输出: 8
```

#### 函数参数

1. **参数默认值**

   可以为函数参数指定默认值。

   ```javascript
   function greet(name = "Guest") {
     return "Hello, " + name;
   }

   console.log(greet()); // 输出: 'Hello, Guest'
   ```

2. **`arguments` 对象**

   `arguments` 对象是一个类数组对象，包含传递给函数的所有参数。注意，`arguments` 对象在箭头函数中不可用。

   ```javascript
   function sum() {
     let total = 0;
     for (let i = 0; i < arguments.length; i++) {
       total += arguments[i];
     }
     return total;
   }

   console.log(sum(1, 2, 3, 4)); // 输出: 10
   ```

3. **剩余参数（Rest Parameters）**

   使用 `...` 语法来收集所有传递给函数的剩余参数，生成一个数组。

   ```javascript
   function sum(...numbers) {
     return numbers.reduce((total, num) => total + num, 0);
   }

   console.log(sum(1, 2, 3, 4)); // 输出: 10
   ```

#### 函数返回值

函数可以返回任何类型的值，包括原始类型、对象、数组等。如果没有明确的 `return` 语句，函数默认返回 `undefined`。

```javascript
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result); // 输出: 20
```

#### 函数的 `this` 关键字

`this` 关键字指向调用函数的上下文对象。在普通函数中，`this` 是函数的调用对象；在箭头函数中，`this` 继承自外部作用域。

```javascript
let person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // 输出: 'Hello, Alice'
```

这些是 JavaScript 中函数的基本概念和用法。函数是构建可重用代码和模块化程序的基础，掌握它们将有助于你编写更清晰和可维护的代码。

### 2、this 的用法

在 JavaScript 中，`this` 关键字是一个非常重要的概念，它指向当前执行上下文中的对象。具体来说，`this` 的值在函数执行时决定，取决于函数的调用方式。理解 `this` 的工作原理对于编写有效的 JavaScript 代码非常关键。

#### `this` 的不同上下文

1. **全局上下文**

   在全局上下文中，`this` 指向全局对象。在浏览器中，全局对象是 `window`。

   ```javascript
   console.log(this); // 在浏览器中输出: Window
   ```

2. **对象方法**

   当函数作为对象的方法被调用时，`this` 指向调用该方法的对象。

   ```javascript
   let person = {
     name: "Alice",
     greet: function () {
       console.log("Hello, " + this.name);
     },
   };

   person.greet(); // 输出: 'Hello, Alice'
   ```

3. **构造函数**

   当函数作为构造函数调用时（使用 `new` 关键字），`this` 指向新创建的实例对象。

   ```javascript
   function Person(name) {
     this.name = name;
   }

   let alice = new Person("Alice");
   console.log(alice.name); // 输出: 'Alice'
   ```

4. **箭头函数**

   箭头函数不会创建自己的 `this` 上下文，而是从外部作用域继承 `this`。因此，箭头函数中的 `this` 是定义它的上下文的 `this`。

   ```javascript
   let person = {
     name: "Alice",
     greet: function () {
       setTimeout(() => {
         console.log("Hello, " + this.name);
       }, 1000);
     },
   };

   person.greet(); // 输出: 'Hello, Alice'
   ```

5. **事件处理程序**

   在事件处理程序中，`this` 通常指向触发事件的元素。

   ```javascript
   document.getElementById("myButton").addEventListener("click", function () {
     console.log(this); // 输出: <button id="myButton">...</button>
   });
   ```

6. **`call` 和 `apply` 方法**

   可以使用 `call` 或 `apply` 方法来显式指定 `this` 的值。这两个方法都可以改变函数中的 `this`。

   ```javascript
   function greet() {
     console.log("Hello, " + this.name);
   }

   let person = { name: "Alice" };
   greet.call(person); // 输出: 'Hello, Alice'
   greet.apply(person); // 输出: 'Hello, Alice'
   ```

7. **`bind` 方法**

   `bind` 方法创建一个新的函数，该函数在调用时 `this` 被固定为指定的对象。

   ```javascript
   function greet() {
     console.log("Hello, " + this.name);
   }

   let person = { name: "Alice" };
   let boundGreet = greet.bind(person);
   boundGreet(); // 输出: 'Hello, Alice'
   ```

#### 总结

- **全局上下文**: `this` 指向全局对象（浏览器中是 `window`）。
- **对象方法**: `this` 指向调用方法的对象。
- **构造函数**: `this` 指向新创建的实例对象。
- **箭头函数**: `this` 从外部作用域继承。
- **事件处理程序**: `this` 指向触发事件的元素。
- **`call` 和 `apply`**: 显式指定 `this` 的值。
- **`bind`**: 创建一个新函数，将 `this` 绑定到指定对象。

理解 `this` 的行为是掌握 JavaScript 函数和对象操作的关键。