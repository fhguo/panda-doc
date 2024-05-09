---
outline: deep
---
# JS进阶

## 一、ES6基础

> ES6（ECMAScript 2015）引入了许多新的语法和功能，以改进和扩展JavaScript语言。
### 1、let与const

`let` 和 `const` 是用于声明变量的关键字，它们有一些不同之处，主要在于变量的可重新赋值性和作用域。下面是它们的使用示例：

**1. 使用 `let` 声明变量：**

```javascript
let name = "John";
name = "Doe"; // 可以重新赋值
console.log(name); // 输出 "Doe"
```

在这个示例中，我们首先使用 `let` 声明了一个名为 `name` 的变量，然后在稍后的代码中重新赋值了它。

**2. 使用 `const` 声明常量：**

```javascript
const pi = 3.14159;
console.log(pi);
```

在这个示例中，我们使用 `const` 声明了一个常量 `pi`，一旦赋值，就不能再重新赋值。常量的值在整个作用域内保持不变。

**3. 块级作用域：**

`let` 和 `const` 声明的变量具有块级作用域，这意味着它们只在声明它们的代码块（通常是由 `{}` 包裹的部分）内可见。例如：

```javascript
if (true) {
  let blockVar = "I am inside a block";
  const blockConst = "I am also inside a block";
}

console.log(blockVar); // 报错，blockVar 在这里不可见
console.log(blockConst); // 报错，blockConst 在这里不可见
```

在这个示例中，`blockVar` 和 `blockConst` 只在 `if` 语句块内可见，在外部访问会导致错误。

总之，`let` 用于声明可重新赋值的变量，而 `const` 用于声明常量，它们都具有块级作用域，应根据需求选择使用。如果你需要在后续的代码中更改变量的值，可以使用 `let`，如果变量的值不应该被改变，可以使用 `const`。

### 2、模板字符串的使用

ES6 模板字符串是一种特殊的字符串，允许你插入表达式和变量值，并跨多行构建字符串，提供了更方便和可读性更好的字符串拼接方式。模板字符串使用反引号 \` \` 包裹字符串内容，并在`${}`内插入表达式或变量。下面是使用 ES6 模板字符串的示例：

**基本使用示例：**

```javascript
const name = "Alice";
const age = 30;

// 使用模板字符串构建字符串
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);
// 输出: Hello, my name is Alice and I am 30 years old.
```

在这个示例中，我们使用模板字符串创建了一个包含变量 `${name}` 和 `${age}` 的字符串。这两个变量会在字符串中被替换为它们的值。

**多行字符串示例：**

```javascript
const multiLineString = `
  This is a
  multi-line
  string.
`;

console.log(multiLineString);
// 输出:
// This is a
// multi-line
// string.
```

模板字符串允许你创建多行字符串，而不需要使用 `\n` 来手动插入换行符。

**嵌套模板字符串示例：**

```javascript
const city = "New York";
const weather = "sunny";

const message = `
  Welcome to ${city}!
  The weather is ${weather === 'sunny' ? 'nice' : 'unknown'} today.
`;

console.log(message);
// 输出:
// Welcome to New York!
// The weather is nice today.
```

在这个示例中，我们嵌套了一个模板字符串 `${weather === 'sunny' ? 'nice' : 'unknown'}` 在主模板字符串中，根据 `weather` 变量的值动态选择显示 "nice" 或 "unknown"。

ES6 模板字符串使得字符串构建更加方便和可读，特别是当你需要包含变量、表达式或者多行文本时。这在前端开发中用于构建动态文本和HTML模板非常有用。

### 3、新增的字符串方法

ES6（ECMAScript 2015）引入了一些常用的字符串方法，这些方法可以更轻松地处理字符串操作。以下是一些常用的 ES6 字符串方法及示例：

1. **`String.prototype.includes(searchString[, position])`**：
   - 用于检查一个字符串是否包含指定的子字符串。
   - 示例：

   ```javascript
   const str = 'Hello, world!';
   console.log(str.includes('world')); // true
   ```

2. **`String.prototype.startsWith(searchString[, position])`**：
   - 用于检查一个字符串是否以指定的字符串开头。
   - 示例：

   ```javascript
   const str = 'Hello, world!';
   console.log(str.startsWith('Hello')); // true
   ```

3. **`String.prototype.endsWith(searchString[, length])`**：
   - 用于检查一个字符串是否以指定的字符串结尾。
   - 示例：

   ```javascript
   const str = 'Hello, world!';
   console.log(str.endsWith('world!')); // true
   ```

4. **`String.prototype.repeat(count)`**：
   - 用于重复一个字符串指定次数，并返回一个新的字符串。
   - 示例：

   ```javascript
   const str = 'abc';
   console.log(str.repeat(3)); // 'abcabcabc'
   ```

5. **`String.prototype.trimStart()` 和 `String.prototype.trimEnd()`**：
   - `trimStart` 用于移除字符串开头的空格字符，`trimEnd` 用于移除字符串末尾的空格字符。
   - 示例：

   ```javascript
   const str = '   Hello, world!   ';
   console.log(str.trimStart()); // 'Hello, world!   '
   ```

6. **`String.prototype.trim()`**：
   - 用于移除字符串开头和末尾的空格字符。
   - 示例：

   ```javascript
   const str = '   Hello, world!   ';
   console.log(str.trim()); // 'Hello, world!'
   ```

7. **`String.prototype.padStart(targetLength, [padString])`** 和 **`String.prototype.padEnd(targetLength, [padString])`**：
   - `padStart` 用于在字符串前面填充字符，`padEnd` 用于在字符串后面填充字符，以达到指定长度。
   - 示例：

   ```javascript
   const str = '5';
   console.log(str.padStart(2, '0')); // '05'
   ```


这些 ES6 字符串方法能够提高字符串处理的便捷性和可读性，让你更轻松地执行字符串操作。根据你的需求，选择合适的方法来处理字符串数据。

### 4、新增的数组方法

ES6（ECMAScript 2015）引入了一些新的数组方法，以便更轻松地处理数组操作。以下是一些常用的 ES6 数组方法及其示例：

1. **`Array.from(arrayLike[, mapFn[, thisArg]])`**：
   - 用于将类似数组或可迭代对象转换为真正的数组。
   - 示例：

   ```javascript
   const arrayLike = { 0: 'a', 1: 'b', length: 2 };
   const arr = Array.from(arrayLike);
   console.log(arr); // ['a', 'b']
   ```

2. **`Array.of(...items)`**：
   - 用于创建一个包含指定项目的新数组。
   - 示例：

   ```javascript
   const arr = Array.of(1, 2, 3);
   console.log(arr); // [1, 2, 3]
   ```

3. **`Array.prototype.find(callback[, thisArg])`**：
   - 用于查找满足条件的第一个数组元素，返回第一个符合条件的元素。
   - 示例：

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const even = numbers.find((number) => number % 2 === 0);
   console.log(even); // 2
   ```

4. **`Array.prototype.findIndex(callback[, thisArg])`**：
   - 用于查找满足条件的第一个数组元素的索引，返回第一个符合条件的元素的索引。
   - 示例：

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const evenIndex = numbers.findIndex((number) => number % 2 === 0);
   console.log(evenIndex); // 1
   ```

5. **`Array.prototype.includes(element[, fromIndex])`**：
   - 用于检查数组是否包含指定元素。
   - 示例：

   ```javascript
   const fruits = ['apple', 'banana', 'cherry'];
   console.log(fruits.includes('banana')); // true
   ```

6. **`Array.prototype.fill(value[, start[, end]])`**：
   - 用于用指定的值填充数组的元素。
   - 示例：

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   numbers.fill(0, 1, 3);
   console.log(numbers); // [1, 0, 0, 4, 5]
   ```

7. **`Array.prototype.flat([depth])`** 和 **`Array.prototype.flatMap(callback)`**：
   - `flat` 用于将嵌套数组展平，`flatMap` 用于同时映射和展平数组。
   - 示例：

   ```javascript
   const nestedArray = [1, [2, [3, 4]]];
   const flatArray = nestedArray.flat(2);
   console.log(flatArray); // [1, 2, 3, 4]

   const numbers = [1, 2, 3];
   const doubledArray = numbers.flatMap((number) => [number * 2]);
   console.log(doubledArray); // [2, 4, 6]
   ```

这些 ES6 数组方法提供了更多的灵活性和可读性，可以使数组操作更加方便。根据你的需求，选择合适的方法来处理数组数据。

### 5、对象新特性和方法

ES6（ECMAScript 2015）引入了一些新的特性和语法来增强JavaScript对象的功能。以下是ES6中一些对象方面的重要变化和新特性：

1. **对象属性的简化语法**：
   ES6允许你在对象字面量中使用变量名作为属性名，如果属性名和变量名相同，可以简化写法。

   ```javascript
   const name = 'Alice';
   const age = 30;

   const person = { name, age };
   // 等同于 const person = { name: name, age: age };
   ```

2. **计算属性名**：
   可以在对象字面量中使用方括号，将表达式作为属性名。

   ```javascript
   const prop = 'name';
   const person = {
     [prop]: 'Alice',
   };
   ```

3. **对象方法的简化语法**：
   在ES6中，可以在对象字面量中使用简化的函数声明语法。

   ```javascript
   const person = {
     sayHello() {
       console.log('Hello');
     },
   };
   ```

4. **`Object.assign()` 方法**：
   `Object.assign()` 方法用于将一个或多个源对象的属性复制到目标对象中。这使得合并对象变得更加容易。

   ```javascript
   const target = { a: 1 };
   const source = { b: 2 };

   Object.assign(target, source);
   console.log(target); // { a: 1, b: 2 }
   ```

5. **新的方法和静态方法**：
   ES6引入了一些新的对象方法，如`Object.keys()`、`Object.values()`、`Object.entries()`以及`Object.setPrototypeOf()`等，它们提供了更多对象操作的选项。

   ```javascript
   const person = { name: 'Alice', age: 30 };

   const keys = Object.keys(person); // ['name', 'age']
   const values = Object.values(person); // ['Alice', 30]
   const entries = Object.entries(person); // [['name', 'Alice'], ['age', 30]]
   ```

6. **Symbol 数据类型**：
   ES6引入了 Symbol 数据类型，可以用于创建唯一的属性名。它通常用于创建私有属性或防止属性被覆盖。

   ```javascript
   const uniqueKey = Symbol('unique');
   const obj = {
     [uniqueKey]: 'This is a unique value',
   };
   ```

这些变化和新特性使得JavaScript对象更加强大、灵活和易于使用，提供了更多处理对象的选项和工具。这些功能对于开发现代JavaScript应用程序非常有用。

### 6、Set和Map用法（了解）

ES6 中引入了 Set 和 Map 数据结构，它们分别用于存储一组唯一的值和键值对。以下是它们的用法示例：

#### Set（集合）

Set 用于存储一组唯一的值，不允许重复。它提供了一些方法来添加、删除、检查成员以及执行集合运算。

**创建 Set：**

```javascript
const mySet = new Set();
```

**添加元素：**

```javascript
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 重复添加，无效

console.log(mySet); // Set { 1, 2, 3 }
```

**删除元素：**

```javascript
mySet.delete(2);
console.log(mySet); // Set { 1, 3 }
```

**检查成员：**

```javascript
console.log(mySet.has(1)); // true
console.log(mySet.has(2)); // false
```

**遍历 Set：**

```javascript
mySet.forEach((value) => {
  console.log(value);
});

// 1
// 3
```

#### Map（映射）

Map 用于存储键值对，其中键是唯一的。它提供了一些方法来添加、删除、获取值以及遍历键值对。

**创建 Map：**

```javascript
const myMap = new Map();
```

**添加键值对：**

```javascript
myMap.set('name', 'Alice');
myMap.set('age', 30);

// 使用链式语法
myMap.set('country', 'USA').set('city', 'New York');
```

**获取值：**

```javascript
console.log(myMap.get('name')); // 'Alice'
```

**删除键值对：**

```javascript
myMap.delete('age');
```

**检查键是否存在：**

```javascript
console.log(myMap.has('country')); // true
console.log(myMap.has('gender'));  // false
```

**遍历 Map：**

```javascript
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// name: Alice
// country: USA
// city: New York
```

Map 还支持使用迭代器进行遍历，如 `for...of` 循环。

这些数据结构为 JavaScript 中的数据管理提供了更多的选项，可以更方便地处理不同类型的数据和用例。
### 7、变量的解构赋值

ES6 中的变量解构赋值是一种便捷的语法，允许你从数组或对象中提取值，并将它们分配给变量。这使得在不使用冗长代码的情况下，可以轻松访问和分配复杂数据结构中的值。变量解构赋值的基本语法如下：

#### 数组解构赋值

```javascript
const [variable1, variable2, ...rest] = array;
```

- `variable1`、`variable2` 是要提取的数组元素，它们将分别赋值给 `variable1` 和 `variable2`。
- `...rest` 是一个用于收集余下的元素的数组，可以将数组中的剩余元素赋值给它。

**示例：**

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

#### 对象解构赋值

```javascript
const { property1, property2, ...rest } = object;
```

- `property1`、`property2` 是要提取的对象属性，它们将分别赋值给 `property1` 和 `property2`。
- `...rest` 是一个用于收集余下属性的对象，可以将对象中的剩余属性赋值给它。

**示例：**

```javascript
const person = {
  name: 'Alice',
  age: 30,
  country: 'USA',
};

const { name, age, ...info } = person;

console.log(name); // 'Alice'
console.log(age); // 30
console.log(info); // { country: 'USA' }
```

**默认值：**

你还可以为解构赋值的变量提供默认值，以防提取的值不存在或为 `undefined`。这样可以确保你的代码不会因为缺少属性或元素而崩溃。

**数组默认值示例：**

```javascript
const numbers = [1, 2];
const [first, second, third = 3] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3（默认值生效）
```

**对象默认值示例：**

```javascript
const person = {
  name: 'Alice',
  age: 30,
};

const { name, age, country = 'USA' } = person;

console.log(name); // 'Alice'
console.log(age); // 30
console.log(country); // 'USA'（默认值生效）
```

变量解构赋值非常有用，特别是在处理复杂的数据结构时，可以提高代码的可读性和可维护性。这使得你可以轻松地访问和操作对象和数组中的值。


## 二、ES6进阶

### 1、扩展运算符

ES6 中的扩展运算符（Spread Operator）是一个三个点（`...`）符号，用于将可迭代对象（如数组、字符串、对象等）的元素展开为单独的元素，或将多个对象合并成一个新对象。它可以用于函数参数、数组、对象等多种情况。

**1. 在函数参数中使用扩展运算符**

在函数参数中使用扩展运算符，可以将数组或类似数组的对象的元素展开为独立的参数。

**示例：**

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result); // 6
```

**2. 在数组中使用扩展运算符**

在数组中使用扩展运算符，可以将一个数组的元素复制到另一个数组中，或者将多个数组合并成一个新数组。

**示例：**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4, 5, 6]

```
**3. 在对象字面量中使用扩展运算符**

在对象字面量中使用扩展运算符，可以创建一个新对象，该对象继承了其他对象的属性，并可以覆盖或添加新属性。

**示例：**

```javascript
const person = {
  name: 'Alice',
  age: 30,
};

const additionalInfo = {
  country: 'USA',
  hobbies: ['reading', 'swimming'],
};

const extendedPerson = { ...person, ...additionalInfo };

console.log(extendedPerson);
// { name: 'Alice', age: 30, country: 'USA', hobbies: ['reading', 'swimming'] }

```
**4. 克隆数组和对象**

扩展运算符还常用于克隆数组和对象，因为它创建了新的数组或对象，而不是对原始数组或对象的引用。

**克隆数组示例：**

```javascript
const originalArray = [1, 2, 3];
const cloneArray = [...originalArray];

console.log(cloneArray); // [1, 2, 3]
console.log(originalArray === cloneArray); // false
```

**克隆对象示例：**

```javascript
const originalObject = { name: 'Alice', age: 30 };
const cloneObject = { ...originalObject };

console.log(cloneObject); // { name: 'Alice', age: 30 }
console.log(originalObject === cloneObject); // false
```

扩展运算符提供了一种方便的方式来处理数组和对象，使得在操作和传递数据时更加灵活和清晰。

### 2、箭头函数

ES6 中的箭头函数（Arrow Functions）是一种新的函数定义语法，它提供了一种更简洁的方式来创建函数。箭头函数通常用于定义匿名函数或简短的函数表达式，它具有以下特点：

1. 使用箭头 `=>` 来定义函数。
2. 可以省略 `function` 关键字。
3. 当只有一个参数时，可以省略括号 `()`。
4. 当函数体只有一条语句时，可以省略花括号 `{}` 和 `return` 关键字。

下面是箭头函数的基本语法：

```javascript
(parameter1, parameter2, ..., parameterN) => {
  // 函数体
  return expression; // 可选
}
```

**示例：**

**1. 基本的箭头函数：**

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 5
```

**2. 参数只有一个时，可以省略括号：**

```javascript
const square = x => x * x;

console.log(square(4)); // 16
```

**3. 函数体只有一条语句时，可以省略花括号和 `return`：**

```javascript
const greet = name => `Hello, ${name}!`;

console.log(greet('Alice')); // Hello, Alice!
```

**4. 在数组的 `map` 方法中使用箭头函数：**

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x * x);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

**5. 箭头函数作为回调函数：**

```javascript
const names = ['Alice', 'Bob', 'Charlie'];

const nameLengths = names.map(name => name.length);

console.log(nameLengths); // [5, 3, 7]
```

请注意，箭头函数有一些限制，例如不能用作构造函数（不能使用 `new` 关键字实例化）、没有 `arguments` 对象等。因此，它适用于许多简单的函数，但对于某些特殊用例，仍然需要使用传统的函数定义语法。箭头函数通常更适合用于函数表达式和回调函数，以提高代码的可读性和简洁性。

### 3、class类

在ES6中，`class` 是一种新的语法糖，用于定义对象的构造函数和原型方法，以一种更面向对象的方式创建对象。`class` 语法提供了一种更清晰、结构化的方式来创建和继承对象，它的作用包括：

1. **定义对象的模板**：`class` 允许你定义对象的属性和方法，作为对象的模板。这使得你可以一次性定义多个对象，而无需重复编写相同的属性和方法。

2. **创建对象**：通过使用 `new` 关键字来实例化类，你可以创建类的对象，这些对象继承了类的属性和方法。

3. **继承和扩展**：`class` 支持继承，可以轻松创建基于其他类的子类。这使得在应用程序中建立对象之间的继承关系变得更加容易。

下面是一个简单的 `class` 示例：

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 30);
person1.sayHello(); // Hello, my name is Alice and I'm 30 years old.
```

在上面的示例中：

- `class Person` 定义了一个名为 `Person` 的类。
- `constructor` 方法用于初始化对象的属性。
- `sayHello` 方法是类的原型方法，可以在类的实例上调用。

你还可以创建子类并扩展父类的功能，这使得类在应用程序中的组织和维护变得更加方便。以下是一个继承的示例：

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // 调用父类的构造函数
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

const student1 = new Student('Bob', 18, 12);
student1.sayHello(); // Hello, my name is Bob and I'm 18 years old.
student1.study(); // Bob is studying in grade 12.
```

`class` 语法使得 JavaScript 中的面向对象编程更加清晰和可维护，它提供了一种更现代的方式来定义和组织代码。不仅如此，它也有助于实现更多的设计模式和对象模型。

### 4、ES6模块化

ES6 引入了一种模块系统，用于在 JavaScript 中导入和导出模块，以实现模块化的代码组织和复用。这个模块系统使得开发人员能够将代码分割为多个独立的模块，每个模块可以导出自己的功能，并从其他模块中导入功能。这有助于提高代码的可维护性和可扩展性。

下面是关于 ES6 模块导入和导出的详细信息：

**导出（Export）功能：**

在一个模块中，你可以使用 `export` 关键字来导出变量、函数、类或对象。例如：

```javascript
// 导出一个变量
export const myVariable = 42;

// 导出一个函数
export function myFunction() {
  // 函数实现
}

// 导出一个类
export class MyClass {
  // 类定义
}

// 导出一个对象
export const myObject = {
  // 对象属性和方法
};
```

**导入（Import）功能：**

在另一个模块中，你可以使用 `import` 关键字来导入其他模块中导出的功能。例如：

```javascript
// 导入一个变量
import { myVariable } from './mymodule';

// 导入一个函数
import { myFunction } from './mymodule';

// 导入一个类
import { MyClass } from './mymodule';

// 导入一个对象
import { myObject } from './mymodule';
```

你也可以使用通配符 `*` 导入所有导出的功能：

```javascript
// 导入所有导出的功能
import * as myModule from './mymodule';

// 访问导入的变量
console.log(myModule.myVariable);

// 调用导入的函数
myModule.myFunction();

// 创建导入的类的实例
const instance = new myModule.MyClass();

// 访问导入的对象的属性和方法
console.log(myModule.myObject.property);
```

**默认导出（Default Export）：**

除了命名导出，ES6 还支持默认导出，使导入导出更简洁。一个模块只能有一个默认导出，通常是一个变量、函数或类。默认导出可以使用 `export default` 语法进行定义和导入：

```javascript
// 在模块中定义默认导出
const myDefaultExport = 42;
export default myDefaultExport;

// 在另一个模块中导入默认导出
import myDefaultExport from './mydefaultmodule';
```

使用默认导出时，可以给导入的默认导出赋予任何名称，不必使用花括号 `{}`。

ES6 模块导入和导出是一种强大的工具，有助于组织和管理代码，并促进了代码的复用和分离。这种模块化的方式在现代 JavaScript 开发中非常常见，也是推荐的做法。
## 三、事件高级

### 1、事件对象

事件对象（Event Object）是在JavaScript中用于处理和操控事件的特殊对象。当事件发生时，浏览器会创建一个事件对象，其中包含了有关事件的信息，如事件类型、目标元素、鼠标位置、键盘按键等。开发者可以通过访问事件对象的属性和方法来获取事件的详细信息并执行相应的操作。

事件对象通常作为参数传递给事件处理函数。在事件处理函数内部，你可以使用事件对象来获取有关事件的各种信息，以便根据需要执行相应的操作。

以下是一些常见的事件对象属性和方法以及事件如何使用的示例：

**常见的事件对象属性和方法**

1. **`type`：** 事件的类型，如 "click"、"keydown"、"mousemove" 等。

2. **`target`：** 触发事件的元素，通常是事件发生的元素。

3. **`currentTarget`：** 事件处理函数当前所绑定的元素，通常是事件监听器所绑定的元素。

4. **`preventDefault()`：** 阻止事件的默认行为，如阻止链接跳转或表单提交。

5. **`stopPropagation()`：** 阻止事件冒泡，停止事件传播到父元素。

**事件如何使用：**

```html
<!DOCTYPE html>
<html>
<head>
  <title>事件示例</title>
</head>
<body>

<button id="myButton">点击我</button>

<script>
// 获取按钮元素
const button = document.getElementById('myButton');

// 添加点击事件监听器
button.addEventListener('click', function(event) {
  // 阻止默认行为
  event.preventDefault();

  // 输出事件类型
  console.log(`事件类型: ${event.type}`);

  // 输出触发事件的元素
  console.log(`目标元素: ${event.target.tagName}`);

  // 输出事件处理函数当前所绑定的元素
  console.log(`当前元素: ${event.currentTarget.tagName}`);

  // 停止事件冒泡
  event.stopPropagation();
});

// 添加鼠标移动事件监听器
document.addEventListener('mousemove', function(event) {
  // 获取鼠标坐标
  const x = event.clientX;
  const y = event.clientY;

  // 输出鼠标坐标
  console.log(`鼠标坐标：X:${x}, Y:${y}`);
});
</script>

</body>
</html>
```

在上面的示例中，我们创建了一个按钮元素，并添加了点击事件和鼠标移动事件的监听器。在事件处理函数中，我们使用事件对象来访问事件的各种属性和方法，例如事件类型、目标元素、鼠标坐标等。还使用了 `preventDefault()` 阻止了按钮的默认点击行为，以及 `stopPropagation()` 阻止了鼠标移动事件的冒泡。通过使用事件对象，我们可以更精确地控制事件的行为和影响。

### 2、键盘事件及鼠标事件

常用的键盘事件和鼠标滚轮事件如下：

**常用的键盘事件：**

1. **keydown**：按下键盘上的任意键时触发，通常与键盘按键的物理按下一起使用。

2. **keyup**：释放键盘上的按键时触发，通常与键盘按键的物理释放一起使用。

3. **keypress**：按下字符键时触发，通常与字符键（字母、数字、符号键）相关的事件。

**常用的鼠标事件：**

1. **click**：鼠标单击（左键）元素时触发。

2. **dblclick**：鼠标双击（左键）元素时触发。

3. **mousedown**：鼠标按下（左键）元素时触发。

4. **mouseup**：鼠标释放（左键）元素时触发。

5. **mousemove**：鼠标在元素上移动时触发，通常伴随着鼠标指针的移动而触发。

6. **mouseenter**：鼠标进入元素时触发，不会冒泡。

7. **mouseleave**：鼠标离开元素时触发，不会冒泡。

8. **mouseover**：鼠标移入元素或其子元素时触发，会冒泡。

9. **mouseout**：鼠标移出元素或其子元素时触发，会冒泡。

10. **contextmenu**：在元素上右键单击时触发上下文菜单事件。

**鼠标滚轮事件：**

1. **wheel**：鼠标滚轮滚动时触发。这个事件可以提供滚轮的方向和滚动量，通常用于实现滚动功能。

这些事件可以用来监听用户的输入和交互，以便根据用户的操作执行相应的操作或改变页面的行为。在开发 Web 应用程序时，键盘事件和鼠标事件都是非常常见和有用的事件类型。

## 四、函数高级

### 1、函数的分类

函数可以根据其用途和行为分类为不同类型。以下是一些常见的函数分类和示例：

1. **内置函数（Built-in Functions）**：这些函数是 JavaScript 语言提供的默认函数，无需额外定义。例如：

   ```javascript
   // 字符串函数
   const str = 'Hello, World!';
   console.log(str.length); // 内置属性获取字符串长度
   console.log(str.toUpperCase()); // 内置方法将字符串转为大写
   
   // 数组函数
   const numbers = [1, 2, 3, 4, 5];
   console.log(numbers.length); // 内置属性获取数组长度
   console.log(numbers.join(', ')); // 内置方法将数组元素连接成字符串
   ```

2. **用户自定义函数（User-Defined Functions）**：这些函数是开发者根据需要自己定义的函数。示例：

   ```javascript
   // 定义一个简单的函数
   function add(a, b) {
     return a + b;
   }
   
   // 调用函数
   const result = add(3, 4);
   console.log(result); // 7
   ```

3. **匿名函数（Anonymous Functions）**：这是没有函数名的函数，通常作为参数传递给其他函数或被赋值给变量。示例：

   ```javascript
   // 匿名函数赋值给变量
   const greet = function(name) {
     console.log(`Hello, ${name}!`);
   };
   
   // 调用匿名函数
   greet('Alice'); // Hello, Alice!
   ```

4. **箭头函数（Arrow Functions）**：ES6 引入的简化的函数定义语法，通常用于编写短小的函数。示例：

   ```javascript
   // 箭头函数
   const square = x => x * x;
   
   // 调用箭头函数
   const result = square(4);
   console.log(result); // 16
   ```

5. **回调函数（Callback Functions）**：这些函数通常作为参数传递给其他函数，用于在某些事件发生时执行特定操作。示例：

   ```javascript
   // 回调函数作为参数
   function processNumbers(numbers, callback) {
     const processed = numbers.map(callback);
     return processed;
   }
   
   // 定义回调函数
   function double(x) {
     return x * 2;
   }
   
   const numbers = [1, 2, 3, 4, 5];
   
   // 使用回调函数处理数组
   const doubledNumbers = processNumbers(numbers, double);
   console.log(doubledNumbers); // [2, 4, 6, 8, 10]
   ```

6. **构造函数（Constructor Functions）**：用于创建对象实例的函数，通常以大写字母开头。示例：

   ```javascript
   // 构造函数
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }
   
   // 创建对象实例
   const person1 = new Person('Alice', 30);
   const person2 = new Person('Bob', 25);
   
   console.log(person1.name); // 'Alice'
   console.log(person2.age); // 25
   ```

这些是一些常见的函数分类和示例。JavaScript 中的函数是非常灵活的，可以用于执行各种不同的任务，从简单的数学运算到复杂的对象构建和异步操作。

### 2、闭包函数

闭包函数（Closure）是一个函数，它可以访问其包含函数（外部函数）作用域中的变量，即使外部函数已经执行完毕。在 JavaScript 中，每当你创建一个函数，它都会保留对其父函数（外部函数）作用域的引用，这样就创建了一个闭包。

闭包函数通常用于以下情况：

1. 保留变量的状态：通过闭包，变量的值可以在外部函数执行完毕后继续存在，不会被垃圾回收。

2. 封装私有数据：通过闭包，可以创建私有变量和方法，这些私有变量和方法对外部代码不可见。

3. 创建工厂函数：通过闭包，可以创建类似于工厂函数的机制，用于生成对象实例。

下面是一些示例，演示了如何创建和使用闭包函数：

**1. 保留变量的状态：**

```javascript
function counter() {
  let count = 0;

  return function() {
    return ++count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
```

在上面的示例中，`counter` 函数返回一个内部函数，该内部函数使用了 `count` 变量，即使 `counter` 函数已经执行完毕，但内部函数依然可以访问并修改 `count` 变量的状态。

**2. 封装私有数据：**

```javascript
function createPerson(name) {
  const privateData = { name };

  return {
    getName: function() {
      return privateData.name;
    },
    setName: function(newName) {
      privateData.name = newName;
    },
  };
}

const person = createPerson('Alice');

console.log(person.getName()); // 'Alice'
person.setName('Bob');
console.log(person.getName()); // 'Bob'
```

在这个示例中，`createPerson` 函数返回一个包含私有数据的对象，并且提供了访问和修改私有数据的方法，从外部无法直接访问 `privateData` 对象。

**3. 创建工厂函数：**

```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      return ++count;
    },
    reset: function() {
      count = 0;
    },
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter2.increment()); // 1
counter1.reset();
console.log(counter1.increment()); // 1
```

在这个示例中，`createCounter` 函数返回一个对象，该对象包含一个计数器和操作计数器的方法。每次调用 `createCounter` 都会创建一个新的计数器实例，它们之间互不干扰。

闭包是 JavaScript 中强大且常用的特性，可以用于许多情况下，例如创建私有变量、封装代码、保存状态等。但要小心不要滥用闭包，因为它们可以导致内存泄漏问题。在正确使用时，闭包可以增强代码的可维护性和封装性。

### 3、递归函数

递归函数是一种在函数内部调用自身的函数。它通常用于解决可以分解成相似子问题的问题，每次调用时问题规模都会减小，直到达到基本情况（停止条件）。递归函数在解决树形结构、分治算法等问题时非常有用，但要谨慎使用，因为如果不正确地编写递归函数，可能会导致栈溢出等问题。

递归函数通常具有以下结构：

1. **基本情况（Base Case）**：递归函数必须定义一个或多个基本情况，这些情况在满足某个条件时会终止递归，通常返回一个确定的值。

2. **递归调用（Recursive Call）**：递归函数在解决问题时会调用自身，但传入的参数通常与原始问题相比规模更小。

下面是一个简单的示例，演示如何编写和使用递归函数来计算阶乘：

```javascript
function factorial(n) {
  // 基本情况：当 n 为 0 或 1 时，阶乘为 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // 递归调用：计算 n 的阶乘
    return n * factorial(n - 1);
  }
}

// 计算 5 的阶乘
const result = factorial(5);
console.log(result); // 输出 120
```

在上面的示例中，`factorial` 函数通过递归调用自身来计算给定数字 `n` 的阶乘。当 `n` 达到基本情况时（即 `n` 等于 0 或 1），递归终止并返回 1，否则继续递归调用来计算阶乘。

递归函数在解决问题时可以使代码更简洁和易于理解，但要小心避免无限递归或递归深度太深而导致的性能问题。确保在递归函数中定义正确的基本情况，以确保递归能够终止。此外，对于某些问题，迭代（循环）可能是更有效的解决方法，因此在选择使用递归时要谨慎。

### 4、防抖节流函数

防抖（Debouncing）和节流（Throttling）是两种用于控制 JavaScript 中事件触发频率的技术，常用于提高性能和避免不必要的函数调用。它们可以防止短时间内多次触发事件，例如，滚动事件、窗口大小调整事件、输入框输入事件等。

#### 防抖（Debouncing）：

防抖是一种技术，用于确保在一连串触发事件后只执行一次函数。它将事件的多次触发合并为一次，通常在事件停止触发一段时间后执行相关操作。

**如何使用防抖：**

```javascript
function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // 将函数 func 应用（或调用）到特定的上下文（this 关键字指向的对象）
      // 和参数数组（arguments 对象中的参数）上。
      func.apply(this, arguments);
    }, delay);
  };
}

// 使用防抖函数
const debouncedFunction = debounce(() => {
  console.log('Debounced function executed');
}, 1000);

// 在事件处理函数中使用防抖函数
window.addEventListener('scroll', debouncedFunction);
```

在上述示例中，`debounce` 函数接受一个要执行的函数和一个延迟时间（以毫秒为单位），并返回一个新的函数，该函数会在最后一次触发事件后等待指定的延迟时间后执行。这有助于减少函数的频繁调用。

#### 节流（Throttling）：

节流是一种技术，用于确保函数在一段时间内只执行一次，而不管事件触发频率如何。它在规定的时间间隔内执行函数，无论事件触发了多少次。

**如何使用节流：**

```javascript
function throttle(func, delay) {
  let throttling = false;
  return function() {
    if (!throttling) {
      throttling = true;
      func.apply(this, arguments);
      setTimeout(() => {
        throttling = false;
      }, delay);
    }
  };
}

// 使用节流函数
const throttledFunction = throttle(() => {
  console.log('Throttled function executed');
}, 1000);

// 在事件处理函数中使用节流函数
window.addEventListener('scroll', throttledFunction);
```

在上述示例中，`throttle` 函数接受一个要执行的函数和一个延迟时间（以毫秒为单位），并返回一个新的函数，该函数会在规定的延迟时间内执行一次。无论事件触发多次，函数都会在规定时间间隔后执行。

防抖和节流函数都有各自的用途，具体取决于你的需求。防抖适用于需要等待一段时间后执行的操作，而节流适用于需要以固定速率执行的操作。根据实际情况选择合适的技术可以提高性能并改善用户体验。

## 五、正则表达式

### 1、正则表达式
JavaScript中的正则表达式是一种强大的文本匹配和处理工具，它由字符和特殊字符组成，用于定义字符串匹配规则。正则表达式常用于字符串的搜索、替换、验证等操作。

以下是一些JavaScript中常用的正则表达式匹配规则示例：

1. **匹配单个字符：**

   - `.`：匹配任何字符，除了换行符。
   - `[abc]`：匹配单个字符，可以是字符 `a`、`b` 或 `c` 中的任何一个。
   - `[^abc]`：匹配单个字符，不能是字符 `a`、`b` 或 `c` 中的任何一个。

2. **匹配字符集合：**

   - `\d`：匹配一个数字字符，等同于 `[0-9]`。
   - `\D`：匹配一个非数字字符，等同于 `[^0-9]`。
   - `\w`：匹配一个单词字符，包括字母、数字和下划线，等同于 `[a-zA-Z0-9_]`。
   - `\W`：匹配一个非单词字符，等同于 `[^a-zA-Z0-9_]`。
   - `\s`：匹配一个空白字符，包括空格、制表符和换行符。
   - `\S`：匹配一个非空白字符。

3. **匹配重复次数：**

   - `*`：匹配前一个字符的零次或多次出现。
   - `+`：匹配前一个字符的一次或多次出现。
   - `?`：匹配前一个字符的零次或一次出现。
   - `{n}`：匹配前一个字符恰好出现 n 次。
   - `{n,}`：匹配前一个字符至少出现 n 次。
   - `{n,m}`：匹配前一个字符出现 n 到 m 次。

4. **锚点和边界：**

   - `^`：匹配字符串的开头。
   - `$`：匹配字符串的结尾。
   - `\b`：匹配单词边界。
   - `\B`：匹配非单词边界。

5. **分组和捕获：**

   - `(pattern)`：捕获匹配的内容，可以使用捕获组后续引用。
   - `(?:pattern)`：分组但不捕获，不会创建捕获组。
   - `(?=pattern)`：正向预查，匹配之前的位置，但不消耗字符。
   - `(?!pattern)`：负向预查，匹配之前的位置，但不消耗字符。

6. **转义字符：**

   - `\`：用于转义特殊字符，例如 `\.` 匹配点字符。

这些是一些基本的正则表达式匹配规则。正则表达式还可以包含更复杂的模式和规则，以满足各种不同的匹配需求。在JavaScript中，您可以使用正则表达式字面量或`RegExp`构造函数来创建正则表达式对象，并使用正则表达式的方法来执行匹配、替换和其他操作。例如：

```javascript
// 使用正则表达式字面量创建
let pattern = /\d+/;

// 使用RegExp构造函数创建
let pattern = new RegExp("\\d+");

// 使用test()方法进行匹配测试
console.log(pattern.test("123")); // true
console.log(pattern.test("abc")); // false
```

要深入学习正则表达式，请查阅JavaScript的正则表达式文档和教程，以了解更多的高级用法和技巧。

### 2、常用的正则表达式

以下是一些常用的正则表达式示例，它们用于匹配常见的文本模式和数据格式：

1. **匹配电子邮件地址：**

   ```regex
   ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
   ```

   这个正则表达式匹配标准的电子邮件地址格式，如`example@email.com`。

2. **匹配URL：**

   ```regex
   ^(https?|ftp)://[^\s/$.?#].[^\s]*$
   ```

   这个正则表达式用于匹配常见的URL格式，包括HTTP、HTTPS和FTP协议。

3. **匹配日期（YYYY-MM-DD）：**

   ```regex
   ^\d{4}-\d{2}-\d{2}$
   ```

   这个正则表达式匹配标准的日期格式，例如`2023-09-19`。

4. **匹配手机号码：**

   ```regex
   ^1\d{10}$
   ```

   这个正则表达式用于匹配中国大陆地区的手机号码。

5. **匹配IP地址：**

   ```regex
   ^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$
   ```

   这个正则表达式匹配IPv4地址，例如`192.168.1.1`。

6. **匹配身份证号码（中国大陆）：**

   ```regex
   ^(^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])([0-2][1-9]|10|20|30|31)\d{3}(\d|X|x)$)$
   ```

   这个正则表达式用于匹配中国大陆地区的身份证号码。

7. **匹配用户名：**

   ```regex
   ^[a-zA-Z0-9_-]{3,16}$
   ```

   这个正则表达式用于匹配用户名，通常允许字母、数字、下划线和短横线，长度为3到16个字符。

8. **匹配强密码：**

   ```regex
   ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
   ```

   这个正则表达式用于匹配强密码，要求包含大小写字母、数字和特殊字符，至少8个字符。


这些是一些常见的正则表达式示例，用于匹配不同的文本模式和数据格式。根据您的需求，您可以根据这些示例来创建和定制自己的正则表达式，以满足特定的匹配和验证要求。记住，在使用正则表达式时，要仔细测试和验证匹配规则，确保其符合预期。
