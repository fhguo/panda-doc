---
outline: deep
---

# Typescript基础


## 简介

TypeScript 是一种由微软开发的开源编程语言，它是 JavaScript 的超集。TypeScript 扩展了 JavaScript，并添加了静态类型检查和其他一些面向对象的特性。它允许开发者在编写代码时定义变量的类型，这样在编译时就能检测到潜在的错误，提供更好的代码质量和可维护性。

TypeScript 的主要特性包括：

1. **静态类型检查：** TypeScript 引入了静态类型系统，允许在编译时发现潜在的类型错误。这有助于提高代码的可读性、可维护性和稳定性。

2. **面向对象编程支持：** TypeScript 支持类、接口、继承和其他面向对象编程的特性，使开发者能够更好地组织和抽象代码。

3. **模块系统：** TypeScript 使用与 ECMAScript 2015+相似的模块系统，有助于将代码分解为模块，提高代码的可重用性。

4. **编译：** TypeScript 代码需要经过编译成 JavaScript 才能在浏览器中运行。TypeScript 编译器将 TypeScript 代码转换为相应版本的 JavaScript，从而保留了与 JavaScript 兼容的特性。

5. **工具支持：** TypeScript 可以与各种编辑器和集成开发环境（IDE）集成，提供智能代码补全、静态错误检测和重构等功能。

TypeScript 为大型项目和团队提供了更好的代码管理和维护能力，同时仍然兼容现有的 JavaScript 代码。因此，开发者可以逐步采用 TypeScript，从而更好地组织和维护他们的项目。

## 类型（Types）

TypeScript 提供了多种静态类型，用于声明变量、函数参数、函数返回值等。以下是一些常见的静态类型及其示例：

1. **基本类型（Primitive Types）:**
   - `number`：表示数字类型。

    ```typescript
    let count: number = 42;
    ```

   - `string`：表示字符串类型。

    ```typescript
    let message: string = 'Hello, TypeScript!';
    ```

   - `boolean`：表示布尔类型。

    ```typescript
    let isDone: boolean = false;
    ```

   - `null` 和 `undefined`：表示空值或未定义值。

    ```typescript
    let n: null = null;
    let u: undefined = undefined;
    ```

   - `void`：表示没有返回值的函数。

    ```typescript
    function logMessage(): void {
      console.log('This function has no return value.');
    }
    ```

2. **复杂类型（Complex Types）:**
   - `array`：表示数组类型。

    ```typescript
    let numbers: number[] = [1, 2, 3, 4];
    ```

   - `tuple`：表示元组类型，即固定长度和特定顺序的数组。

    ```typescript
    let person: [string, number] = ['John Doe', 30];
    ```

   - `object`：表示对象类型。

    ```typescript
    let user: { name: string; age: number } = { name: 'Alice', age: 25 };
    ```

3. **函数相关类型（Function Types）:**
   - `Function`：表示任意函数类型。

    ```typescript
    let add: Function = (x: number, y: number): number => x + y;
    ```

   - 函数参数和返回值的类型注解。

    ```typescript
    function multiply(x: number, y: number): number {
      return x * y;
    }
    ```

4. **接口类型（Interface）:**
   - 用于定义对象的形状。

    ```typescript
    interface Person {
      name: string;
      age: number;
    }

    let student: Person = { name: 'Bob', age: 22 };
    ```

5. **联合类型（Union Types）:**
   - 表示一个值可以是多个类型之一。

    ```typescript
    let result: string | number = 'Success';
    result = 42;
    ```

6. **交叉类型（Intersection Types）:**
   - 表示一个值同时具有多个类型。

    ```typescript
    interface Printable {
      print(): void;
    }

    interface Loggable {
      log(): void;
    }

    type LoggableAndPrintable = Printable & Loggable;
    ```

7. **枚举类型（Enum）:**
   - 表示命名的常量集合。

    ```typescript
    enum Direction {
      Up,
      Down,
      Left,
      Right,
    }

    let userDirection: Direction = Direction.Up;
    ```

这些是 TypeScript 中常见的静态类型。通过使用这些类型，你可以在开发过程中更早地发现潜在的错误，提高代码的可读性和可维护性。
## 接口（Interfaces）

在 TypeScript 中，使用 `interface` 关键字来定义接口。接口用于定义对象的形状，即对象应该包含哪些属性以及属性的类型。下面是一个简单的例子：

```typescript
// 定义一个简单的接口
interface Person {
  name: string;
  age: number;
}

// 使用接口作为函数参数的类型
function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

// 使用接口定义对象
let myFriend: Person = { name: 'Alice', age: 25 };

// 调用函数
console.log(greet(myFriend));
```

在这个例子中，`Person` 接口定义了一个对象应该有 `name` 和 `age` 两个属性，并指定了它们的类型。函数 `greet` 接受一个 `Person` 类型的参数，并返回一个字符串。

你还可以在接口中使用可选属性、只读属性、函数类型等特性。以下是一些例子：

1. **可选属性（Optional Properties）：**
   ```typescript
   interface Car {
     brand: string;
     model: string;
     year?: number; // 可选属性
   }

   let myCar: Car = { brand: 'Toyota', model: 'Camry' };
   ```

2. **只读属性（Readonly Properties）：**
   ```typescript
   interface Point {
     readonly x: number;
     readonly y: number;
   }

   let p: Point = { x: 10, y: 20 };
   // p.x = 5; // 编译错误，只读属性无法被修改
   ```

3. **函数类型（Function Types）：**
   ```typescript
   interface MathOperation {
     (x: number, y: number): number;
   }

   let add: MathOperation = function (a, b) {
     return a + b;
   };
   ```

这些是 TypeScript 中定义接口的基本用法。接口在面向对象编程中起到了定义契约的作用，帮助你更好地组织和抽象代码。
## 类（Classes）

在 TypeScript 中，使用 `class` 关键字来定义类。类是面向对象编程的基本构建块，允许你创建具有属性和方法的对象。以下是一个简单的 TypeScript 类的示例：

```typescript
// 定义一个类
class Animal {
  // 属性
  name: string;

  // 构造函数，用于创建类的实例
  constructor(name: string) {
    this.name = name;
  }

  // 方法
  makeSound(): void {
    console.log('Some generic sound.');
  }
}

// 创建类的实例
const dog = new Animal('Dog');

// 访问属性和调用方法
console.log(dog.name);      // 输出: Dog
dog.makeSound();            // 输出: Some generic sound.
```

上述示例中，`Animal` 类有一个属性 `name` 和一个方法 `makeSound`。构造函数 `constructor` 在创建类的实例时被调用，用于初始化对象的属性。类的实例可以通过点运算符访问属性和调用方法。

你还可以使用访问修饰符（`public`、`private`、`protected`）来控制类的成员的可访问性。例如：

```typescript
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    console.log('Some generic sound.');
  }
}

const dog = new Animal('Dog');
// console.log(dog.name);  // 编译错误，name 是私有属性，无法在类外部访问
dog.makeSound();          // 可以正常调用 makeSound 方法
```

这里，`name` 属性被声明为私有，外部无法直接访问，但类的内部可以访问。`makeSound` 方法被声明为公共的，可以在类的外部调用。

除了属性和方法，类还支持继承、抽象类、接口实现等特性，使得 TypeScript 中的类更加强大和灵活。
## 泛型（Generics）

在 TypeScript 中，泛型（Generics）是一种编写可重用、灵活的代码的机制，它允许在定义函数、类或接口时延迟指定类型。通过使用泛型，你可以编写与具体类型无关的代码，提高代码的通用性和可维护性。

### 泛型函数

下面是一个简单的泛型函数的例子：

```typescript
// 使用泛型定义一个函数
function identity<T>(arg: T): T {
  return arg;
}

// 调用函数时指定具体的类型
let result = identity<string>('Hello, TypeScript!');
console.log(result); // 输出: Hello, TypeScript!

// TypeScript 会自动推断类型
let result2 = identity(42);
console.log(result2); // 输出: 42
```

在这个例子中，`identity` 函数使用了泛型类型 `T`，它可以接受任意类型的参数，并返回相同的类型。

### 泛型类

泛型也可以用于类的定义：

```typescript
// 使用泛型定义一个类
class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// 创建实例时指定具体的类型
let container = new Container<number>(42);
console.log(container.getValue()); // 输出: 42

// TypeScript 会自动推断类型
let container2 = new Container('Hello, TypeScript!');
console.log(container2.getValue()); // 输出: Hello, TypeScript!
```

### 泛型接口

你还可以使用泛型定义接口，使接口可以适用于不同的数据类型：

```typescript
// 使用泛型定义接口
interface Pair<T, U> {
  first: T;
  second: U;
}

// 使用时指定具体的类型
let pair1: Pair<number, string> = { first: 1, second: 'two' };
let pair2: Pair<string, boolean> = { first: 'hello', second: true };
```

### 泛型约束

有时你可能想要对泛型进行一些约束，确保泛型参数具有某些属性或行为。这可以通过泛型约束来实现：

```typescript
// 泛型约束，确保 T 具有 length 属性
function logLength<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}

logLength('Hello');      // 输出: 5
logLength([1, 2, 3]);     // 输出: 3
// logLength(42);         // 编译错误，因为 number 类型没有 length 属性
```

在这个例子中，`logLength` 函数接受一个泛型参数 `T`，并使用约束 `extends { length: number }` 确保 `T` 具有 `length` 属性。

泛型是 TypeScript 中强大而灵活的特性，能够提高代码的复用性和可读性。通过合理使用泛型，你可以编写更通用、健壮的代码。

## 枚举（Enums）

在 TypeScript 中，枚举（Enum）是一种用于命名一组命名常数的数据类型。它允许为一组数值赋予易读的名称，提高代码的可读性和可维护性。以下是 TypeScript 中枚举的基本概念和使用方式：

### 枚举基本概念

1. **数字枚举：**
   - 默认情况下，枚举成员的值是从0开始自增的数字。你也可以手动指定成员的值。

    ```typescript
    enum Direction {
      Up,    // 0
      Down,  // 1
      Left,  // 2
      Right, // 3
    }
    ```

   - 使用枚举：

    ```typescript
    let userDirection: Direction = Direction.Up;
    ```

2. **手动赋值：**
   - 可以手动为枚举成员赋值。

    ```typescript
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4,
    }
    ```

   - 使用枚举：

    ```typescript
    let myColor: Color = Color.Green;
    ```

3. **字符串枚举：**
   - 枚举不仅支持数字值，还支持字符串值。

    ```typescript
    enum Direction {
      Up = 'UP',
      Down = 'DOWN',
      Left = 'LEFT',
      Right = 'RIGHT',
    }
    ```

   - 使用枚举：

    ```typescript
    let userDirection: Direction = Direction.Up;
    ```

4. **异构枚举：**
   - 枚举成员可以是数字或字符串混合。

    ```typescript
    enum Result {
      Success = 1,
      Failure = 'FAILURE',
    }
    ```

   - 使用枚举：

    ```typescript
    let status: Result = Result.Success;
    ```

### 枚举用法

1. **枚举值到枚举名的映射：**
   - 通过枚举值获取对应的枚举名。

    ```typescript
    enum Direction {
      Up,
      Down,
      Left,
      Right,
    }

    let dirName: string = Direction[Direction.Up]; // 'Up'
    ```

2. **迭代枚举：**
   - 使用 `for...in` 遍历枚举成员。

    ```typescript
    enum Weekday {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
    }

    for (let day in Weekday) {
      console.log(day); // 输出: 0, 1, 2, 3, 4
    }
    ```

   - 若要获取枚举值，需要使用映射方式或使用过滤条件。

    ```typescript
    for (let day in Weekday) {
      if (isNaN(Number(day))) {
        console.log(day); // 输出: Monday, Tuesday, Wednesday, Thursday, Friday
      }
    }
    ```

3. **常量枚举：**
   - 常量枚举是在编译阶段被删除的枚举，提高了生成的 JavaScript 代码的效率。

    ```typescript
    const enum Direction {
      Up,
      Down,
      Left,
      Right,
    }
    ```

   - 使用常量枚举时，枚举值会被内联到生成的 JavaScript 代码中，而不会创建真正的对象。

    ```typescript
    let dir: number = Direction.Up; // 编译后为 let dir = 0;
    ```

这些是 TypeScript 中枚举的基本概念和用法。枚举提供了一种清晰、有表达力的方式来定义一组常量，并可以提高代码的可读性。
