---
outline: deep
---
# JS基础

## 一、JS基础语法
### 1、JavaScript的概念
JavaScript（通常简称为JS）是一种高级、解释性的编程语言，主要用于Web开发中，用来增加网页的互动性和动态性。以下是对 JavaScript 的简要介绍：

1. **用途**：JavaScript最初是为了在网页上添加交互功能而创建的，它可以让网页变得更加动态、响应用户的操作。随着时间的推移，JavaScript已经扩展到了服务器端开发（Node.js）以及移动应用程序开发等领域，变得更加通用。

2. **特点**：
   - **解释性语言**：JavaScript是一种解释性语言，不需要编译成机器码，而是由浏览器的JavaScript引擎解释执行。
   - **动态类型**：JavaScript是一种动态类型语言，变量的数据类型在运行时自动确定，不需要显式声明。
   - **事件驱动**：JavaScript常用于处理用户交互、响应事件和操作DOM元素，使得网页能够实时地与用户互动。
   - **跨平台**：JavaScript可以在不同的浏览器和操作系统上运行，因为每个现代浏览器都内置了JavaScript解释器。

3. **语法**：JavaScript的语法受到C语言和Java的影响，但也有自己独特的特性。它包括变量、数据类型、运算符、条件语句、循环、函数、对象、数组等基本构造。

4. **文档对象模型（DOM）**：JavaScript可以与HTML文档进行交互，通过DOM来访问和操作网页的内容和结构。这使得开发者能够动态地更新页面内容，实现互动性。

5. **浏览器对象模型（BOM）**：除了DOM，JavaScript还可以与浏览器进行交互，例如控制浏览器窗口、处理用户输入和弹出对话框等。

6. **库和框架**：JavaScript生态系统丰富，拥有许多库和框架，如React、Angular、Vue.js等，用于简化和加速Web应用程序开发。

总之，JavaScript是一种强大而多用途的编程语言，它在Web开发中扮演了关键角色，使得网页能够呈现出丰富的互动体验。它的易学性和广泛的应用使其成为了许多开发者的首选工具之一。

### 2、JS数据类型

​	JavaScript 有以下几种主要的数据类型：

1. **基本数据类型（Primitive Data Types）**：
   - **字符串（String）**：表示文本数据，用单引号或双引号括起来。
   - **数字（Number）**：表示数值，包括整数和浮点数。
   - **布尔值（Boolean）**：表示逻辑值，只有两个值，true 和 false。
   - **undefined**：表示未定义的值，通常是声明了变量但未赋值时的默认值。
   - **null**：表示空值或无值。
   - **Symbol**：ES6 引入的一种唯一的、不可变的数据类型，通常用于创建对象的属性名。

2. **引用数据类型（Reference Data Types）**：
   - **对象（Object）**：可以包含多个属性和方法的数据类型，如普通对象、数组、函数等。
   - **数组（Array）**：一种特殊的对象，用于存储有序的数据集合。
   - **函数（Function）**：也是一种特殊的对象，可以执行代码块。
   - **日期（Date）**：用于处理日期和时间的对象。
   - **正则表达式（RegExp）**：用于处理文本的模式匹配的对象。
   - **Map 和 Set**：ES6 引入的集合类型，用于存储键值对或唯一值。

3. **特殊数据类型**：
   - **NaN**：表示不是一个数字（Not-a-Number），通常作为数字计算中的错误结果。
   - **Infinity 和 -Infinity**：表示正无穷大和负无穷大，通常用于表示溢出或除零错误。
   
这些数据类型在JavaScript中用于存储和操作不同类型的数据。需要注意的是，JavaScript 是一种弱类型语言，允许在变量中存储不同类型的数据，并且可以进行自动类型转换。这就需要开发人员小心处理数据类型，以避免不必要的错误。

### 3、获取变量数据类型

​	要获取某个变量的数据类型（数据格式），您可以使用`typeof`运算符。这个运算符会返回一个字符串，表示变量的数据类型。以下是示例代码：

```javascript
var myVar = 42; // 声明一个整数变量

var dataType = typeof myVar; // 使用 typeof 获取数据类型

console.log(dataType); // 输出结果为 "number"，表示变量 myVar 的数据类型是数字
```

在这个示例中，我们首先声明了一个变量 `myVar` 并赋值为整数 42。然后，我们使用 `typeof` 运算符来获取 `myVar` 的数据类型，并将结果存储在 `dataType` 变量中。最后，我们使用 `console.log` 将 `dataType` 输出到控制台，它会显示 "number"，表示 `myVar` 的数据类型是数字。

同样，您可以使用 `typeof` 运算符来获取任何变量的数据类型。这对于在编写代码时了解变量的数据类型非常有用，以确保您在处理数据时采取正确的操作。
### 4、数据类型转化

JavaScript 提供了多种方法来执行不同数据类型之间的转换。以下是一些常见的数据类型转换方法：

1. **显式类型转换**：
   - **字符串转换**：
     - 使用 `String()` 函数将其他数据类型转换为字符串。
     - 使用 `.toString()` 方法将数字、对象等转换为字符串。
   - **数字转换**：
     - 使用 `Number()` 函数将其他数据类型转换为数字。
     - 使用 `parseInt()` 或 `parseFloat()` 函数将字符串转换为数字。
   - **布尔值转换**：
     - 使用 `Boolean()` 函数将其他数据类型转换为布尔值。

示例：

```javascript
var num = 42;
var str = String(num); // 将数字转换为字符串
var bool = Boolean(0); // 将数字 0 转换为布尔值 false
```

2. **隐式类型转换**：
   - JavaScript 在某些情况下会自动执行类型转换，这称为隐式类型转换。例如，在使用 `+` 运算符连接字符串和其他数据类型时，会将其他类型隐式转换为字符串。

示例：

```javascript
var num = 42;
var str = "The answer is: " + num; // 隐式将数字转换为字符串
```

3. **数组和对象的转换**：
   - 对于数组和对象，您可以使用 `JSON.stringify()` 方法将它们转换为 JSON 字符串，并使用 `JSON.parse()` 方法将 JSON 字符串转换回数组或对象。

示例：

```javascript
var myArray = [1, 2, 3];
var jsonString = JSON.stringify(myArray); // 将数组转换为 JSON 字符串

var parsedArray = JSON.parse(jsonString); // 将 JSON 字符串转换为数组
```

请注意，在进行类型转换时要小心，确保转换是安全的，以避免潜在的错误。隐式类型转换可能会导致不同于预期的结果，因此最好使用显式类型转换来明确地控制数据类型的转换过程。

### 5、运算符的分类

JavaScript 中有许多常用的运算符，它们用于执行各种操作，包括数学运算、逻辑运算、赋值、比较等。以下是 JavaScript 中常用的一些运算符：

1. **算术运算符**：
   - `+`：加法
   - `-`：减法
   - `*`：乘法
   - `/`：除法
   - `%`：取模（取余数）

2. **赋值运算符**：
   - `=`：赋值
   - `+=`：加法赋值
   - `-=`：减法赋值
   - `*=`：乘法赋值
   - `/=`：除法赋值
   - `%=`：取模赋值
   - `++`：自增
   - `--`：自减

3. **比较运算符**：
   - `==`：等于（值相等）
   - `===`：严格等于（值和类型都相等）
   - `!=`：不等于（值不等）
   - `!==`：严格不等于（值或类型不等）
   - `>`：大于
   - `<`：小于
   - `>=`：大于等于
   - `<=`：小于等于

4. **逻辑运算符**：
   - `&&`：逻辑与（AND）
   - `||`：逻辑或（OR）
   - `!`：逻辑非（NOT）

5. **条件（三元）运算符**：
   - `? :`：也称为三元运算符，用于简化条件语句，例如 `condition ? expr1 : expr2`。

6. **位运算符**：

> 位运算符是一组用于直接操作二进制位的运算符，通常在需要执行底层二进制位操作的情况下使用。
   - `&`：按位与
   - `|`：按位或
   - `^`：按位异或
   - `~`：按位取反
   - `<<`：左移位
   - `>>`：右移位
   - `>>>`：无符号右移位

7. **字符串连接运算符**：
   - `+`：用于连接字符串。

8. **typeof 运算符**：
   - `typeof`：用于获取操作数的数据类型。

9. **instanceof 运算符**：
   - `instanceof`：用于测试对象是否属于某个类或构造函数的实例。

这些运算符在 JavaScript 中非常常用，用于执行各种计算和操作。根据您的需求，您可以使用不同的运算符来完成不同的任务。

### 6、if 判断语句的使用

`if` 语句是 JavaScript 中的条件语句之一，用于根据一个条件的真假来执行不同的代码块。`if` 语句的基本语法如下：

```javascript
if (条件) {
  // 如果条件为真，执行这里的代码
} else if (另一个条件) {
  // 如果第一个条件为假，但第二个条件为真，执行这里的代码
} else {
  // 如果以上条件都为假，执行这里的代码
}
```

- `条件`：一个可以被计算为布尔值（`true` 或 `false`）的表达式。如果条件为真，将执行与该条件相关联的代码块。
- `else if`（可选）：用于添加额外的条件测试。如果前面的 `if` 条件为假，将继续测试 `else if` 中的条件，如果有条件为真，则执行相应的代码块。
- `else`（可选）：用于捕获没有前面条件为真的情况。如果所有前面的条件都为假，将执行 `else` 代码块中的代码。

以下是一些 `if` 语句的示例用法：

1. 简单的条件判断：
```javascript
var age = 25;

if (age >= 18) {
  console.log("成年人");
} else {
  console.log("未成年人");
}
```

2. 多个条件判断：
```javascript
var score = 85;

if (score >= 90) {
  console.log("优秀");
} else if (score >= 70) {
  console.log("良好");
} else if (score >= 50) {
  console.log("及格");
} else {
  console.log("不及格");
}
```

3. 嵌套的 `if` 语句：
```javascript
var isWeekend = false;
var isSunny = true;

if (isWeekend) {
  if (isSunny) {
    console.log("去沙滩");
  } else {
    console.log("看电影");
  }
} else {
  console.log("工作日，不休息");
}
```

4. 使用 `if` 判断数组是否为空：
```javascript
var myArray = [1, 2, 3];

if (myArray.length === 0) {
  console.log("数组为空");
} else {
  console.log("数组不为空");
}
```

`if` 语句是在编写 JavaScript 代码中常见的控制结构之一，它允许您根据不同的条件来执行不同的操作。根据具体的需求，您可以使用单独的 `if` 语句或组合多个条件和 `else if` 分支来实现不同的逻辑。
### 7、switch 语句的使用

`switch` 语句是 JavaScript 中的一种条件语句，用于根据表达式的值执行不同的代码块。它通常用于替代多个相互排斥的 `if-else if-else` 语句，以提高代码的可读性和效率。以下是 `switch` 语句的用法和示例：

基本语法结构：
```javascript
switch (表达式) {
  case 值1:
    // 当表达式等于值1时执行这里的代码
    break;
  case 值2:
    // 当表达式等于值2时执行这里的代码
    break;
  // 可以有更多的 case 分支
  default:
    // 如果没有匹配的 case，则执行这里的代码
}
```

- `表达式`：要进行比较的值或表达式，通常是一个变量或函数调用，其结果会被与各个 `case` 分支的值进行比较。
- `case 值X`：每个 `case` 后面跟着一个特定的值或表达式，表示要与 `表达式` 进行比较的条件。
- `break`：在每个 `case` 块的末尾通常使用 `break` 关键字，用于跳出 `switch` 语句，以防止继续执行后续的 `case` 块。如果省略 `break`，则会继续执行下一个 `case` 块，直到遇到 `break` 或 `switch` 结束。
- `default`：可选的 `default` 分支在没有匹配任何 `case` 时执行。


### 8、for循环语句的使用

`for` 循环是 JavaScript 中最常用的循环结构之一，用于重复执行一段代码，通常基于一个计数器或迭代变量。`for` 循环的基本语法如下：

```javascript
for (初始化; 条件; 递增或递减) {
  // 循环体：要执行的代码
}
```

- `初始化`：通常是一个赋值语句，用于初始化计数器或迭代变量。它只在循环开始时执行一次。
- `条件`：一个表达式，每次循环迭代都会被计算。只要条件为 `true`，循环将继续执行。当条件为 `false` 时，循环终止。
- `递增或递减`：用于更新计数器或迭代变量的操作。通常是自增 (`i++`) 或自减 (`i--`)，也可以是其他任何操作。

以下是 `for` 循环的一些示例用法：

1. 从 1 到 5 输出数字：
```javascript
for (var i = 1; i <= 5; i++) {
  console.log(i);
}
```

2. 逆序输出数字：
```javascript
for (var i = 5; i >= 1; i--) {
  console.log(i);
}
```

3. 遍历数组元素：
```javascript
var arr = [10, 20, 30, 40, 50];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

4. 使用 `break` 和 `continue` 控制循环：
```javascript
for (var i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // 当 i 等于 5 时退出循环
  }
  if (i === 3) {
    continue; // 当 i 等于 3 时跳过当前循环迭代，继续下一次迭代
  }
  console.log(i);
}
```

`for` 循环是一种非常强大和灵活的迭代结构，可用于处理各种迭代任务，包括遍历数组、执行特定次数的操作以及其他需要重复执行的任务。它提供了精确的控制，允许您在循环内部执行不同的逻辑。

## 二、函数及this
### 1、函数的用法

函数是 JavaScript 中的一个基本概念，它是一段可重复使用的代码块，用于执行特定任务或操作。函数通常用于封装一组操作，将其命名并在需要时多次调用。JavaScript 中的函数具有以下特点：

1. **函数声明**：函数可以通过 `function` 关键字声明，后面跟有函数的名称、参数列表和函数体。例如：

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

2. **函数参数**：函数可以接受零个或多个参数，这些参数允许您将值传递给函数以供内部使用。参数是函数的输入。

3. **函数体**：函数体是包含在函数内部的代码块，它定义了函数的操作。

4. **函数调用**：要执行函数，您需要调用它，通常通过函数名称后跟圆括号来实现。例如：`greet("John");`

5. **返回值**：函数可以返回一个值，这个值可以用于在函数外部进行操作。如果函数没有明确的返回语句，它将返回 `undefined`。

以下是一个示例，演示如何声明、调用和使用函数：

```javascript
// 函数声明
function greet(name) {
  return "Hello, " + name + "!";
}

// 调用函数并存储返回值
var greeting = greet("John");

// 输出返回值
console.log(greeting); // 输出 "Hello, John!"
```

在这个示例中，我们首先声明了一个函数 `greet`，它接受一个参数 `name` 并返回一个拼接了问候语的字符串。然后，我们通过调用 `greet("John")` 函数来执行它，并将返回值存储在变量 `greeting` 中。最后，我们使用 `console.log` 输出了返回的问候语。

函数的用途非常广泛，它们允许您组织和重用代码，使代码更易维护和理解。您可以创建各种类型的函数来执行各种任务，从简单的数学计算到复杂的数据处理和交互操作。函数是 JavaScript 编程的核心概念之一，掌握它们对于编写有效的 JavaScript 代码至关重要。

### 2、函数作用域

函数的作用域是指在函数内部定义的变量（包括函数参数）的可见性和访问范围。JavaScript 中有两种主要的作用域：全局作用域和局部作用域。

1. **全局作用域**：全局作用域中的变量在整个 JavaScript 程序中都可见和访问。这些变量通常在全局范围内声明，例如在脚本的顶层或外部函数中。全局变量可以在程序的任何地方使用。

   示例：
   ```javascript
   var globalVar = 10; // 全局作用域中声明的变量

   function exampleFunction() {
     console.log(globalVar); // 在函数内部可以访问全局变量
   }
   ```

2. **局部作用域**：局部作用域中的变量只在函数内部可见和访问，它们通常在函数内部声明。这些变量称为局部变量，它们的作用域限定在函数内部。

   示例：
   ```javascript
   function exampleFunction() {
     var localVar = 20; // 局部作用域中声明的变量
     console.log(localVar); // 在函数内部可以访问局部变量
   }
   ```

3. **块级作用域**（ES6引入）：使用 `let` 或 `const` 声明的变量也可以拥有块级作用域，它们只在包含它们的块（例如，`if` 语句、`for` 循环、函数等）内部可见。块级作用域中声明的变量在块结束后不可访问。

   示例：
   ```javascript
   if (true) {
     let blockVar = 30; // 块级作用域中声明的变量
     console.log(blockVar); // 在块内部可以访问块级变量
   }
   // console.log(blockVar); // 这里无法访问 blockVar，因为它超出了块的作用域
   ```

作用域的概念是关于变量的可见性和访问权限的。在 JavaScript 中，变量查找从最内层的作用域开始，然后逐渐向外查找，直到找到匹配的变量或到达全局作用域。这被称为词法作用域或静态作用域。函数内部可以访问自身作用域中的变量以及包含它的外部作用域中的变量，但不会影响外部作用域中的变量。理解作用域有助于避免变量冲突和编写更具可维护性的代码。

### 3、this的指向

JavaScript 中的 `this` 关键字是一个特殊的关键字，它表示当前执行上下文中的对象。`this` 的值是动态的，它的指向取决于代码执行的上下文和方式。以下是关于 `this` 的指向的总结：

1. **全局上下文中的 `this`**：
   - 在全局上下文（不在任何函数内部或块级作用域内）中，`this` 指向全局对象。在浏览器环境中，全局对象通常是 `window` 对象。
   - 在 Node.js 等环境中，全局上下文中的 `this` 可能是不同的全局对象。

   示例（浏览器环境下）：
   ```javascript
   console.log(this); // 指向全局对象 window
   ```

2. **函数中的 `this`**：
   - 在函数内部，`this` 的值取决于函数被调用的方式。
   - 如果函数是作为普通函数调用的，`this` 通常指向全局对象。

   示例：
   ```javascript
   function myFunction() {
     console.log(this); // 指向全局对象 window
   }
   myFunction();
   ```

   - 如果函数是作为对象的方法调用的，`this` 指向调用该方法的对象。

   示例：
   ```javascript
   var obj = {
     name: "John",
     sayHello: function() {
       console.log(this.name); // 指向包含它的对象 obj
     }
   };
   obj.sayHello();
   ```

   - 如果函数是作为构造函数使用的，`this` 指向新创建的对象。

   示例：
   ```javascript
   function Person(name) {
     this.name = name;
   }
   var person = new Person("Alice");
   console.log(person.name); // 指向新创建的对象 person
   ```

   - 如果使用箭头函数声明函数，`this` 指向包含该箭头函数的上下文，通常是定义时的上下文。

   示例：
   ```javascript
   var obj = {
     name: "John",
     sayHello: () => {
       console.log(this.name); // 指向定义时的上下文 obj
     }
   };
   obj.sayHello();
   ```

3. **事件处理函数中的 `this`**：
   - 在事件处理函数中（例如点击事件、鼠标事件等），`this` 通常指向触发事件的元素。

   示例（HTML 中的点击事件处理函数）：
   ```html
   <button id="myButton">Click me</button>
   <script>
     document.getElementById("myButton").addEventListener("click", function() {
       console.log(this); // 指向触发点击事件的按钮元素
     });
   </script>
   ```

4. **`call()` 和 `apply()` 中的 `this`**：
   - `call()` 和 `apply()` 是函数的方法，可以用于显式设置函数的执行上下文，即 `this` 的值。
   - 通过 `call()` 和 `apply()`，您可以指定任何对象作为 `this`，并调用函数。

   示例（使用 `call()` 设置 `this`）：
   ```javascript
   var person1 = { name: "John" };
   var person2 = { name: "Alice" };

   function sayHello() {
     console.log("Hello, " + this.name);
   }

   sayHello.call(person1); // 指定 person1 作为 this，输出 "Hello, John"
   sayHello.call(person2); // 指定 person2 作为 this，输出 "Hello, Alice"
   ```

总之，`this` 的指向是 JavaScript 中的一个重要概念，它根据执行上下文和调用方式而变化。理解 `this` 的指向有助于正确地访问和操作对象属性，以及实现更灵活的代码逻辑。不同情况下，`this` 的值可能会有所不同，因此在编写 JavaScript 代码时要小心处理。

## 三、DOM和BOM

### 1、获取元素的方式

在 JavaScript 中，您可以使用不同的方法来获取HTML标签（元素）以便进一步操作或修改它们。以下是一些常见的方法：

1. **通过ID获取元素**：

   使用 `getElementById` 方法可以通过元素的ID属性获取单个元素。请确保HTML中的元素有一个唯一的ID。

   ```javascript
   var element = document.getElementById("myElementId");
   ```

2. **通过标签名获取元素**：

   使用 `getElementsByTagName` 方法可以通过元素的标签名获取所有匹配的元素，并返回一个HTML集合（NodeList）。

   ```javascript
   var elements = document.getElementsByTagName("p"); // 获取所有 <p> 元素
   ```

3. **通过类名获取元素**：

   使用 `getElementsByClassName` 方法可以通过元素的类名获取所有匹配的元素，并返回一个HTML集合（NodeList）。

   ```javascript
   // 获取所有具有 "myClass" 类的元素
   var elements = document.getElementsByClassName("myClass"); 
   ```

4. **通过选择器获取元素**：

   使用 `querySelector` 和 `querySelectorAll` 方法可以通过CSS选择器获取元素。

   - `querySelector` 返回匹配的第一个元素。
   ```javascript
   // 获取第一个具有 "myClass" 类的元素
   var element = document.querySelector(".myClass"); 
   ```

   - `querySelectorAll` 返回匹配的所有元素。
   ```javascript
   // 获取所有 <p> 元素中具有 "myClass" 类的元素
   var elements = document.querySelectorAll("p.myClass"); 
   ```

5. **通过属性选择器获取元素**：

   使用 `querySelector` 方法并结合属性选择器可以获取具有特定属性值的元素。

   ```javascript
   // 获取具有 data-custom 属性为 'value' 的元素
   var element = document.querySelector("[data-custom='value']"); 
   ```

6. **其他方法**：

   还有其他一些方法，如 `getElementByName`（通过 `name` 属性获取表单元素）、`querySelector` 的父级方法等，具体取决于您的需求。

注意：

- 通过标签名、类名和选择器获取的元素会返回一个HTML集合（NodeList），您可以通过索引来访问它们。例如，`elements[0]` 获取第一个匹配的元素。
- 通过ID获取的元素是一个单独的元素，而不是集合。
- 如果您使用的是现代JavaScript库或框架（例如jQuery、React、Angular等），它们通常提供了更简单的DOM操作方法。

### 2、操作元素的属性

要操作元素的属性，您可以使用 JavaScript 提供的属性操作方法。以下是一些常见的操作元素属性的方式：

1. **获取元素属性的值**：

   使用元素对象的属性来获取元素的属性值。例如，要获取一个元素的 `src` 属性：

   ```javascript
   var imageElement = document.getElementById("myImage");
   var srcValue = imageElement.src;
   ```

2. **设置元素属性的值**：

   使用元素对象的属性来设置元素的属性值。例如，要设置一个元素的 `src` 属性：

   ```javascript
   var imageElement = document.getElementById("myImage");
   imageElement.src = "new-image.jpg";
   ```

3. **使用 `getAttribute` 和 `setAttribute` 方法**：

   可以使用 `getAttribute` 方法获取元素的属性值，并使用 `setAttribute` 方法设置元素的属性值。

   ```javascript
   var linkElement = document.getElementById("myLink");
   
   // 获取 href 属性的值
   var hrefValue = linkElement.getAttribute("href");
   
   // 设置 href 属性的值
   linkElement.setAttribute("href", "new-link-url");
   ```

4. **删除元素的属性**：

   使用 `removeAttribute` 方法可以删除元素的属性。

   ```javascript
   var element = document.getElementById("myElement");
   element.removeAttribute("data-custom");
   ```

5. **操作元素的类名**：

   使用 `className` 属性可以获取或设置元素的类名。如果要操作多个类名，推荐使用 `classList` 对象。

   ```javascript
   var element = document.getElementById("myElement");
   
   // 获取元素的类名
   var classNames = element.className;
   
   // 设置元素的类名
   element.className = "new-class";
   
   // 使用 classList 操作类名
   // 将名为 "new-class" 的类添加到名为 element 的HTML元素的类列表中
   element.classList.add("new-class");
   element.classList.remove("old-class");
   // 如果元素原本没有 "active" 类，则添加它；如果元素已经有了 "active" 类，则移除它
   element.classList.toggle("active");
   ```

6. **样式属性**：

   您还可以通过 `style` 属性来访问和设置元素的内联样式属性。例如，要更改元素的背景颜色：

   ```javascript
   var element = document.getElementById("myElement");
   element.style.backgroundColor = "blue";
   ```

这些方法允许您对元素的各种属性进行读取和修改。确保在操作元素属性之前先获取元素对象，例如通过 `getElementById`、`querySelector` 或其他选择器方法获取元素对象。请注意，不同类型的元素可能具有不同的属性，因此要根据需要选择正确的属性进行操作。

### 3、window对象的方法

`window` 对象提供了许多常用的方法，用于处理浏览器窗口、文档、DOM 元素、定时器和其他浏览器相关的操作。以下是一些常见的 `window` 对象方法：

1. **窗口和页面操作**：
   - `alert(message)`：在浏览器中显示一个警告框，带有指定的消息。
   - `confirm(message)`：显示一个确认对话框，带有指定的消息，并返回用户的选择（true 或 false）。
   - `prompt(message, defaultText)`：显示一个提示输入对话框，带有指定的消息和默认文本，用户可以输入文本并返回输入的值。
   - `open(url, target, features)`：打开一个新的浏览器窗口或标签页，通常用于跳转到新的网页。
   - `close()`：关闭当前浏览器窗口或标签页。

2. **文档和 DOM 操作**：
   - `document`：`window` 对象的属性之一，用于访问当前文档的 DOM。
   - `document.getElementById(id)`：根据元素的 ID 获取元素。
   - `document.querySelector(selector)`：根据 CSS 选择器获取第一个匹配的元素。
   - `document.querySelectorAll(selector)`：根据 CSS 选择器获取所有匹配的元素。
   - 其他 DOM 操作方法，如 `createElement`、`appendChild`、`removeChild`、`setAttribute`、`getAttribute` 等。

3. **定时器和延时执行**：
   - `setTimeout(function, delay)`：在指定的延迟时间后执行函数一次。
   - `setInterval(function, interval)`：以指定的间隔重复执行函数。
   - `clearTimeout(timeoutId)`：取消由 `setTimeout` 创建的定时器。
   - `clearInterval(intervalId)`：取消由 `setInterval` 创建的定时器。

4. **浏览器导航和历史记录**：
   - `history`：`window` 对象的属性之一，用于访问浏览器的历史记录，如 `back()`、`forward()`、`go()` 等。
   - `window.location`：提供有关当前页面 URL 的信息和方法，如 `href`、`assign()`、`replace()` 等。

5. **屏幕和视口信息**：
   - `screen`：`window` 对象的属性之一，提供有关用户屏幕的信息，如分辨率、色深等。
   - `window.innerWidth` 和 `window.innerHeight`：获取浏览器窗口的内部宽度和高度。
   - `window.outerWidth` 和 `window.outerHeight`：获取浏览器窗口的外部宽度和高度。
   - `window.scrollX` 和 `window.scrollY`：获取文档在窗口内的水平和垂直滚动位置。

6. **浏览器控制台输出**：
   - `console`：`window` 对象的属性之一，用于在浏览器控制台中输出日志，如 `console.log()`、`console.error()`、`console.warn()` 等。

7. **对话框和提示**：
   - `alert()`、`confirm()` 和 `prompt()` 已在窗口操作部分提到。

8. **其他**：
   - `localStorage` 和 `sessionStorage`：提供了用于在浏览器中存储数据的本地存储和会话存储方法。
   - `setImmediate(callback)`：在当前事件循环的下一次迭代中执行回调函数（部分浏览器支持）。

这些方法用于处理与浏览器窗口、文档、DOM 元素、定时器和控制台日志等相关的常见任务。要详细了解这些方法和其他 `window` 对象的功能，请查阅相关文档。

### 4、获取元素的宽高

要获取元素的宽度和高度，您可以使用 JavaScript 来访问元素的属性或方法。以下是不同方法：

1. **使用 `offsetWidth` 和 `offsetHeight` 属性**：
   - `offsetWidth` 属性返回元素的宽度，包括元素的内容、内边距和边框宽度。
   - `offsetHeight` 属性返回元素的高度，包括元素的内容、内边距和边框高度。

   ```javascript
   var element = document.getElementById("myElement");
   var width = element.offsetWidth;
   var height = element.offsetHeight;
   ```

2. **使用 `clientWidth` 和 `clientHeight` 属性**：
   - `clientWidth` 属性返回元素的宽度，包括元素的内容和内边距，但不包括边框。
   - `clientHeight` 属性返回元素的高度，包括元素的内容和内边距，但不包括边框。

   ```javascript
   var element = document.getElementById("myElement");
   var width = element.clientWidth;
   var height = element.clientHeight;
   ```

3. **使用 `getBoundingClientRect()` 方法**：
   - `getBoundingClientRect()` 方法返回一个包含元素的位置和大小信息的 DOMRect 对象。您可以从该对象中提取宽度和高度信息。

   ```javascript
   var element = document.getElementById("myElement");
   var rect = element.getBoundingClientRect();
   var width = rect.width;
   var height = rect.height;
   ```

请注意，这些属性和方法返回的值通常以像素为单位，但可能受到浏览器缩放和样式表设置的影响。确保在文档加载完成后或使用合适的延时来获取元素的尺寸，以确保正确的计算。

### 5、浏览器事件

浏览器对象模型（BOM）中有一些常用的事件，它们允许您在浏览器窗口中注册监听器，以便在发生特定事件时执行相应的操作。以下是一些常用的 BOM 事件：

1. **`load` 事件**：
   - `load` 事件在整个文档和所有资源（如图像、样式表）都已完全加载后触发。通常用于确保页面完全加载后再执行某些操作。

   ```javascript
   window.addEventListener("load", function() {
       // 页面已加载完成，可以执行操作
   });
   ```

2. **`unload` 事件**：
   - `unload` 事件在用户离开页面时触发，通常用于执行清理工作，如保存表单数据或关闭打开的资源。

   ```javascript
   window.addEventListener("unload", function() {
       // 用户离开页面前执行清理操作
   });
   ```

3. **`resize` 事件**：
   - `resize` 事件在浏览器窗口大小发生变化时触发，通常用于响应窗口大小的改变。

   ```javascript
   window.addEventListener("resize", function() {
       // 窗口大小已更改，可以执行响应操作
   });
   ```

4. **`scroll` 事件**：
   - `scroll` 事件在页面滚动时触发，通常用于处理滚动操作。

   ```javascript
   window.addEventListener("scroll", function() {
       // 页面正在滚动，可以执行滚动操作
   });
   ```

5. **`focus` 和 `blur` 事件**：
   - `focus` 事件在元素获得焦点时触发，通常用于表单元素或可编辑元素。
   - `blur` 事件在元素失去焦点时触发，通常用于验证用户输入或执行其他失焦操作。

   ```javascript
   var inputElement = document.getElementById("myInput");
   inputElement.addEventListener("focus", function() {
       // 元素获得焦点时执行操作
   });
   
   inputElement.addEventListener("blur", function() {
       // 元素失去焦点时执行操作
   });
   ```

6. **`beforeunload` 事件**：
   - `beforeunload` 事件在用户准备离开页面时触发，通常用于提示用户保存未保存的数据。

   ```javascript
   window.addEventListener("beforeunload", function(event) {
       // 在用户离开页面前执行提示操作
       event.returnValue = "您有未保存的更改，确定离开吗？";
   });
   ```

这些事件可以用于监测和响应各种浏览器窗口和页面的交互操作，从加载和卸载页面到窗口大小更改和滚动等。在 JavaScript 中，您可以使用 `addEventListener` 方法来注册这些事件的监听器，以执行相应的操作。

### 6、定时器的使用

定时器是 JavaScript 中用于延迟执行代码的工具，它允许您在一定的时间间隔之后执行特定的函数或代码块。JavaScript 提供了两种类型的定时器：`setTimeout` 和 `setInterval`。

1. **setTimeout**：

   `setTimeout` 函数用于在指定的毫秒数之后执行一次函数或代码块。它接受两个参数：要执行的函数或代码块，以及延迟的毫秒数。

   示例：
   ```javascript
   function sayHello() {
     console.log("Hello, world!");
   }

   // 在 2000 毫秒（2秒）后执行 sayHello 函数
   setTimeout(sayHello, 2000);
   ```

   另一种使用 `setTimeout` 的方式是使用匿名函数：

   ```javascript
   // 使用匿名函数，在 1000 毫秒后执行
   setTimeout(function() {
     console.log("This is a delayed message.");
   }, 1000);
   ```

2. **setInterval**：

   `setInterval` 函数用于在指定的时间间隔内重复执行函数或代码块。它接受两个参数：要执行的函数或代码块，以及重复执行的时间间隔（以毫秒为单位）。

   示例：
   ```javascript
   function printTime() {
     console.log(new Date().toLocaleTimeString());
   }

   // 每隔 1000 毫秒（1秒）执行一次 printTime 函数
   var intervalId = setInterval(printTime, 1000);
   ```

   `setInterval` 返回一个唯一的标识符，您可以使用它来清除定时器：

   ```javascript
   // 清除之前创建的定时器
   clearInterval(intervalId);
   ```

3. **清除定时器**：

   使用 `clearTimeout` 清除由 `setTimeout` 创建的定时器，或使用 `clearInterval` 清除由 `setInterval` 创建的定时器。传递定时器的标识符作为参数即可清除相应的定时器。

   示例：
   ```javascript
   var timeoutId = setTimeout(function() {
     console.log("This will not be logged.");
   }, 2000);

   // 在 1000 毫秒（1秒）内清除定时器，上面的函数不会执行
   clearTimeout(timeoutId);
   ```

   ```javascript
   var intervalId = setInterval(function() {
     console.log("This will keep logging until cleared.");
   }, 1000);

   // 在 5000 毫秒（5秒）内清除定时器，上面的函数停止执行
   setTimeout(function() {
     clearInterval(intervalId);
   }, 5000);
   ```

定时器非常有用，可以用于创建延迟执行的任务、轮询服务器或更新界面元素等。但要注意，滥用定时器可能会导致性能问题，因此请谨慎使用，并确保在不需要时清除定时器，以避免内存泄漏和不必要的资源消耗。

## 四、数组和字符串

### 1、数组基本方法

JavaScript 中数组有许多常用的方法，这些方法用于操作和处理数组的元素。以下是一些常见的数组方法，以及每个方法的示例：

1. **`push()` 方法**：向数组末尾添加一个或多个元素，并返回新的数组长度。

   ```javascript
   var fruits = ['apple', 'banana'];
   var newLength = fruits.push('orange', 'cherry');
   console.log(fruits); // ['apple', 'banana', 'orange', 'cherry']
   console.log(newLength); // 4
   ```

2. **`pop()` 方法**：移除数组最后一个元素，并返回移除的元素。

   ```javascript
   var fruits = ['apple', 'banana', 'orange'];
   var removedFruit = fruits.pop();
   console.log(fruits); // ['apple', 'banana']
   console.log(removedFruit); // 'orange'
   ```

3. **`unshift()` 方法**：向数组开头添加一个或多个元素，并返回新的数组长度。

   ```javascript
   var fruits = ['apple', 'banana'];
   var newLength = fruits.unshift('orange', 'cherry');
   console.log(fruits); // ['orange', 'cherry', 'apple', 'banana']
   console.log(newLength); // 4
   ```

4. **`shift()` 方法**：移除数组的第一个元素，并返回移除的元素。

   ```javascript
   var fruits = ['orange', 'cherry', 'apple', 'banana'];
   var removedFruit = fruits.shift();
   console.log(fruits); // ['cherry', 'apple', 'banana']
   console.log(removedFruit); // 'orange'
   ```

5. **`concat()` 方法**：合并两个或多个数组，返回一个新的数组，不会改变原始数组。

   ```javascript
   var fruits1 = ['apple', 'banana'];
   var fruits2 = ['orange', 'cherry'];
   var combinedFruits = fruits1.concat(fruits2);
   console.log(combinedFruits); // ['apple', 'banana', 'orange', 'cherry']
   ```

6. **`join()` 方法**：将数组的所有元素组成一个字符串，并使用指定的分隔符分隔元素。

   ```javascript
   var fruits = ['apple', 'banana', 'cherry'];
   var fruitString = fruits.join(', ');
   console.log(fruitString); // 'apple, banana, cherry'
   ```

7. **`slice()` 方法**：从数组中提取指定范围的元素，并返回一个新的数组，不会改变原始数组。

   ```javascript
   var fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi'];
   var slicedFruits = fruits.slice(1, 4);
   console.log(slicedFruits); // ['banana', 'cherry', 'orange']
   ```

8. **`splice()` 方法**：用于删除、替换或添加数组的元素。

   ```javascript
   var fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi'];
   fruits.splice(2, 1); // 删除从索引 2 开始的 1 个元素
   console.log(fruits); // ['apple', 'banana', 'orange', 'kiwi']

   fruits.splice(1, 2, 'grape', 'melon'); // 替换从索引 1 开始的 2 个元素
   console.log(fruits); // ['apple', 'grape', 'melon', 'orange', 'kiwi']

   fruits.splice(2, 0, 'pear', 'peach'); // 在索引 2 处添加新元素
   console.log(fruits); // ['apple', 'grape', 'pear', 'peach', 'melon', 'orange', 'kiwi']
   ```

9. **`indexOf()` 方法**：返回数组中第一个匹配元素的索引，如果未找到匹配元素则返回 -1。

   ```javascript
   var fruits = ['apple', 'banana', 'cherry', 'orange'];
   var index = fruits.indexOf('cherry');
   console.log(index); // 2
   ```

10. **`lastIndexOf()` 方法**：返回数组中最后一个匹配元素的索引，如果未找到匹配元素则返回 -1。

    ```javascript
    var fruits = ['apple', 'banana', 'cherry', 'orange', 'cherry'];
    var lastIndex = fruits.lastIndexOf('cherry');
    console.log(lastIndex); // 4
    ```

这些是一些常用的数组方法，它们允许您对数组进行添加、删除、合并、提取等操作。根据您的需求，选择适当的方法来处理数组。
### 2、数组遍历方法

JavaScript 数组有多种方法用于遍历数组中的元素。以下是一些常用的数组遍历方法：

1. **`forEach()` 方法**：对数组的每个元素执行提供的函数，没有返回值。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   numbers.forEach(function(number) {
       console.log(number);
   });
   ```

2. **`map()` 方法**：创建一个新数组，其中包含对原始数组的每个元素应用提供的函数的结果。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var doubled = numbers.map(function(number) {
       return number * 2;
   });
   console.log(doubled); // [2, 4, 6, 8, 10]
   ```

3. **`filter()` 方法**：创建一个新数组，其中包含满足条件的原始数组的元素。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var evenNumbers = numbers.filter(function(number) {
       return number % 2 === 0;
   });
   console.log(evenNumbers); // [2, 4]
   ```

4. **`reduce()` 方法**：对数组的元素累加应用一个函数，返回一个累加的结果。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var sum = numbers.reduce(function(accumulator, currentNumber) {
       return accumulator + currentNumber;
   }, 0); // 初始值为 0
   console.log(sum); // 15
   ```

5. **`some()` 方法**：检查数组中是否至少有一个元素满足指定条件，如果有则返回 `true`，否则返回 `false`。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var hasEven = numbers.some(function(number) {
       return number % 2 === 0;
   });
   console.log(hasEven); // true
   ```

6. **`every()` 方法**：检查数组中是否所有元素都满足指定条件，如果是则返回 `true`，否则返回 `false`。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var allEven = numbers.every(function(number) {
       return number % 2 === 0;
   });
   console.log(allEven); // false
   ```

7. **`find()` 方法**：返回数组中第一个满足指定条件的元素，如果没有找到则返回 `undefined`。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var firstEven = numbers.find(function(number) {
       return number % 2 === 0;
   });
   console.log(firstEven); // 2
   ```

8. **`findIndex()` 方法**：返回数组中第一个满足指定条件的元素的索引，如果没有找到则返回 `-1`。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var firstEvenIndex = numbers.findIndex(function(number) {
       return number % 2 === 0;
   });
   console.log(firstEvenIndex); // 1 (元素 2 的索引)
   ```

这些数组遍历方法允许您以不同的方式操作和处理数组的元素，根据需要选择适当的方法。

### 3、字符串方法

JavaScript 字符串具有许多内置方法，用于处理和操作字符串。以下是一些常用的字符串方法：

1. **`length` 属性**：返回字符串的长度。

   ```javascript
   var str = "Hello, World!";
   console.log(str.length); // 13
   ```

2. **`charAt()` 方法**：返回指定索引位置的字符。

   ```javascript
   var str = "Hello, World!";
   console.log(str.charAt(0)); // 'H'
   ```

3. **`charCodeAt()` 方法**：返回指定索引位置字符的 Unicode 编码。

   ```javascript
   var str = "Hello, World!";
   console.log(str.charCodeAt(0)); // 72 (字符 'H' 的 Unicode 编码)
   ```

4. **`substring()` 方法**：返回字符串的子字符串，指定起始索引和结束索引。

   ```javascript
   var str = "Hello, World!";
   console.log(str.substring(0, 5)); // 'Hello'
   ```

5. **`slice()` 方法**：返回字符串的子字符串，指定起始索引和可选的结束索引。

   ```javascript
   var str = "Hello, World!";
   console.log(str.slice(0, 5)); // 'Hello'
   ```

6. **`indexOf()` 方法**：返回字符串中第一次出现指定子字符串的索引，如果未找到则返回 -1。

   ```javascript
   var str = "Hello, World!";
   console.log(str.indexOf("World")); // 7
   ```

7. **`lastIndexOf()` 方法**：返回字符串中最后一次出现指定子字符串的索引，如果未找到则返回 -1。

   ```javascript
   var str = "Hello, World!";
   console.log(str.lastIndexOf("o")); // 8
   ```

8. **`replace()` 方法**：替换字符串中的指定子字符串为新的字符串。

   ```javascript
   var str = "Hello, World!";
   var newStr = str.replace("World", "Universe");
   console.log(newStr); // 'Hello, Universe!'
   ```

9. **`toLowerCase()` 和 `toUpperCase()` 方法**：将字符串转换为小写或大写。

   ```javascript
   var str = "Hello, World!";
   console.log(str.toLowerCase()); // 'hello, world!'
   console.log(str.toUpperCase()); // 'HELLO, WORLD!'
   ```

10. **`trim()` 方法**：去除字符串两端的空白字符。

    ```javascript
    var str = "   Hello, World!   ";
    var trimmedStr = str.trim();
    console.log(trimmedStr); // 'Hello, World!'
    ```

11. **`split()` 方法**：将字符串分割为数组，使用指定的分隔符。

    ```javascript
    var str = "apple,banana,cherry";
    var fruits = str.split(",");
    console.log(fruits); // ['apple', 'banana', 'cherry']
    ```

12. **`concat()` 方法**：将多个字符串拼接成一个新字符串。

    ```javascript
    var str1 = "Hello,";
    var str2 = "World!";
    var greeting = str1.concat(" ", str2);
    console.log(greeting); // 'Hello, World!'
    ```

这些是一些常用的字符串方法，它们允许您对字符串进行各种操作，如查找、替换、拆分、转换大小写等。根据您的需求选择适当的方法。