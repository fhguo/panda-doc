---
outline: deep
---
# Nodejs&Git

## 一、node.js

### 1、nodejs简介

Node.js 是一个开源的、跨平台的 JavaScript 运行环境。它让开发者可以使用 JavaScript 来编写服务器端代码，而不仅仅是在浏览器中运行 JavaScript。

以下是 Node.js 的一些关键点：

1. **JavaScript 运行环境**：Node.js 使用 Chrome V8 引擎来解析和执行 JavaScript 代码。因此，JavaScript 不仅可以用于编写客户端脚本，还可以用于编写服务器端应用。

2. **非阻塞 I/O**：Node.js 使用事件驱动、非阻塞的 I/O 模型，这使得它非常适合处理高并发的应用程序，如 Web 服务器。非阻塞 I/O 意味着程序可以处理多个请求，而不需要等待前一个请求完成。

3. **NPM（Node Package Manager）**：Node.js 提供了一个包管理器，叫做 npm，它包含了成千上万的开源包，开发者可以轻松安装并使用这些包来构建应用。

4. **单线程**：虽然 Node.js 是单线程的，但它使用了事件循环来管理多个并发连接，因此它能够高效地处理大量的 I/O 操作。

5. **广泛的用途**：除了构建 Web 服务器，Node.js 还可以用于构建工具（如构建脚本、打包工具）、桌面应用程序（通过 Electron 框架）等。

简单来说，Node.js 是一个强大的工具，它扩展了 JavaScript 的应用范围，让开发者能够使用一种语言同时编写前端和后端代码。

### 2、常用的模块

Node.js 的 `fs`、`path` 和 `http` 模块是最常用的核心模块之一。它们分别用于文件系统操作、路径操作和创建 HTTP 服务器。下面是对每个模块的详细讲解：

#### fs 模块（File System）

`fs` 模块提供了与文件系统交互的 API，允许你读取、写入、删除、重命名文件或目录等。它支持同步和异步操作。

**常用方法：**

- **`fs.readFile`**：读取文件内容。常用于读取文本文件或配置文件。
  ```javascript
  const fs = require('fs');

  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data); // 输出文件内容
  });
  ```

- **`fs.writeFile`**：将数据写入文件。如果文件不存在，会创建新文件；如果文件存在，会覆盖旧文件内容。
  ```javascript
  fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully!');
  });
  ```

- **`fs.appendFile`**：在文件末尾追加内容，而不是覆盖。
  ```javascript
  fs.appendFile('example.txt', '\nAppended text', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Text appended successfully!');
  });
  ```

- **`fs.readdir`**：读取目录内容，返回一个包含文件和子目录名称的数组。
  ```javascript
  fs.readdir('.', (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(files); // 输出当前目录下的所有文件和子目录
  });
  ```

- **`fs.stat`**：获取文件或目录的详细信息（如大小、修改时间等）。
  ```javascript
  fs.stat('example.txt', (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stats); // 输出文件的详细信息
  });
  ```

#### path 模块

`path` 模块提供了用于处理和转换文件路径的实用工具，可以在操作路径时保持跨平台兼容性（Windows、Linux、macOS 等）。

**常用方法：**

- **`path.join`**：将多个路径片段组合成一个完整路径，自动处理路径分隔符。
  ```javascript
  const path = require('path');

  const fullPath = path.join(__dirname, 'folder', 'file.txt');
  console.log(fullPath); // 输出完整路径
  ```

- **`path.resolve`**：将路径片段解析为绝对路径，通常用于构建文件系统中的绝对路径。
  ```javascript
  const absolutePath = path.resolve('folder', 'file.txt');
  console.log(absolutePath); // 输出绝对路径
  ```

- **`path.basename`**：返回路径的最后一部分，即文件名。
  ```javascript
  const fileName = path.basename('/folder/file.txt');
  console.log(fileName); // 输出 'file.txt'
  ```

- **`path.dirname`**：返回路径中的目录部分。
  ```javascript
  const dirName = path.dirname('/folder/file.txt');
  console.log(dirName); // 输出 '/folder'
  ```

- **`path.extname`**：返回文件的扩展名。
  ```javascript
  const ext = path.extname('file.txt');
  console.log(ext); // 输出 '.txt'
  ```

#### http 模块

`http` 模块用于创建 HTTP 服务器和客户端。它是构建基于 HTTP 协议的 Web 应用程序的核心模块。

**创建 HTTP 服务器：**

- **`http.createServer`**：创建一个 HTTP 服务器，用于处理传入的请求并发送响应。
  ```javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.statusCode = 200; // 设置响应状态码
    res.setHeader('Content-Type', 'text/plain'); // 设置响应头
    res.end('Hello, World!\n'); // 发送响应内容
  });

  server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
  });
  ```

**处理 HTTP 请求和响应：**

- **请求对象（`req`）**：包含请求的详细信息，如请求方法、URL、头部、请求体等。
  ```javascript
  const server = http.createServer((req, res) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);

    res.end('Request received');
  });
  ```

- **响应对象（`res`）**：用于向客户端发送响应，包括状态码、头部和响应体。
  ```javascript
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello, JSON!' }));
  });
  ```

**总结**

- **`fs` 模块**：主要用于文件和目录操作，提供同步和异步 API。
- **`path` 模块**：用于路径的处理与解析，确保路径操作的跨平台兼容性。
- **`http` 模块**：用于创建 HTTP 服务器和处理 HTTP 请求/响应，是构建 Web 应用的基础模块。

这些模块是 Node.js 的核心部分，在日常开发中非常重要。


**3、创建web服务**

要创建一个基本的Web服务器，您可以使用Node.js的内置`http`模块。下面是一个简单的示例，演示如何使用Node.js创建一个基本的Web服务器：

```javascript
const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // 发送响应内容
  res.end('Hello, World!\n');
});

// 指定服务器监听的端口和主机
const port = 3000;
const host = '127.0.0.1';

// 开始监听指定的端口和主机
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});
```

在上面的示例中，我们首先引入了`http`模块，然后使用`http.createServer`方法创建一个HTTP服务器。在服务器的回调函数中，我们设置了响应头（这里是`text/plain`文本类型），然后使用`res.end`发送响应内容（这里是"Hello, World!\n"）。

接下来，我们指定服务器监听的端口（这里是3000）和主机（这里是'127.0.0.1'，表示本地主机）。最后，我们使用`server.listen`方法开始监听指定的端口和主机，并在服务器启动时打印一条消息。

要运行这个服务器，将上述代码保存到一个文件（例如`server.js`），然后在命令行中运行以下命令：

```bash
node server.js
```

现在，您的基本Web服务器将在指定的端口（这里是3000）上运行。您可以在浏览器中访问`http://127.0.0.1:3000/`或`http://localhost:3000/`来查看服务器的响应。

这只是一个最基本的示例，通常，您会使用更多的功能和框架（如Express.js）来构建更复杂的Web应用程序，但这个示例可以帮助您了解如何使用Node.js创建一个简单的Web服务器。

### 4、模块化

在 Node.js 中，**模块化** 是指将代码组织成独立的、可重用的单元（称为模块），每个模块封装了特定的功能或逻辑。模块化编程可以提高代码的可维护性、可读性和复用性。Node.js 提供了一个简单而强大的模块系统，基于 CommonJS 规范。

#### 核心概念

1. **模块（Module）**
   - 模块就是一个包含代码的文件。在 Node.js 中，每个 `.js` 文件都可以看作是一个独立的模块。
   - 模块中的代码默认是封闭的，只有通过特定的接口（如 `exports` 和 `module.exports`）才能暴露给其他模块使用。

2. **模块的加载与使用**
   - 使用 `require()` 函数来加载模块。`require()` 函数会返回模块导出的内容。
   - 可以加载 Node.js 内置模块、第三方模块（通过 npm 安装的包）以及自定义模块。

#### 模块的创建与导出

1. **导出（Exporting）**
   - 通过 `exports` 或 `module.exports` 来导出模块中的变量、函数或对象，使它们可以在其他模块中使用。

   **使用 `exports`：**
   ```javascript
   // math.js
   exports.add = function (a, b) {
     return a + b;
   };

   exports.subtract = function (a, b) {
     return a - b;
   };
   ```

   **使用 `module.exports`：**
   ```javascript
   // math.js
   function add(a, b) {
     return a + b;
   }

   function subtract(a, b) {
     return a - b;
   }

   module.exports = {
     add,
     subtract,
   };
   ```

   `exports` 是 `module.exports` 的别名，两者都可以用来导出内容。不过当你想要导出一个对象、类或单个函数时，推荐使用 `module.exports`。

2. **加载（Requiring）**
   - 使用 `require()` 函数加载其他模块，并使用其导出的内容。
   - `require()` 会搜索以下位置：
     1. 内置模块（如 `fs`, `path` 等）
     2. 在 `node_modules` 目录中查找第三方模块
     3. 相对路径或绝对路径指定的自定义模块

   **示例：**
   ```javascript
   // app.js
   const math = require('./math');

   console.log(math.add(2, 3)); // 输出 5
   console.log(math.subtract(5, 2)); // 输出 3
   ```

#### 模块的加载机制

1. **缓存机制**：当一个模块第一次被加载时，Node.js 会缓存这个模块。后续对该模块的 `require()` 调用会直接从缓存中获取，而不是重新加载。缓存机制可以提高性能，避免重复加载相同的模块。

2. **模块的查找**：如果 `require()` 传入的是一个路径，Node.js 会按顺序查找以下文件：
   - 完整路径，如 `./math.js`。
   - 文件夹路径，如 `./math`，Node.js 会查找该文件夹下的 `index.js` 或使用 `package.json` 中指定的入口文件。
   - 没有扩展名时，Node.js 会依次尝试 `.js`, `.json`, `.node` 扩展名。

#### 常见模块类型

1. **内置模块**：Node.js 自带的模块，如 `fs`, `http`, `path` 等。
2. **第三方模块**：通过 npm 安装的模块，如 `express`, `lodash` 等。
3. **自定义模块**：开发者自己编写的模块。

**示例**

**创建一个简单的模块：**
```javascript
// greet.js
function sayHello(name) {
  return `Hello, ${name}!`;
}

module.exports = sayHello;
```

**加载和使用该模块：**
```javascript
// app.js
const greet = require('./greet');

console.log(greet('World')); // 输出 'Hello, World!'
```

**总结**

模块化是 Node.js 应用程序的核心特性之一，它允许开发者将代码分割成独立的模块，每个模块封装特定的功能。通过使用 `require()` 和 `exports` / `module.exports`，开发者可以轻松加载和共享模块中的代码，从而提高代码的组织性和可维护性。

### 5、npm和包

在 Node.js 生态系统中，**npm** 和 **包**（Package）是两个非常重要的概念，它们大大简化了代码的管理、共享和复用。

#### 什么是 npm？

**npm** 是 Node.js 的包管理器，全称是 **Node Package Manager**。它是一个命令行工具，也是一个托管 JavaScript 包的在线仓库。npm 是 Node.js 生态系统的重要组成部分，允许开发者轻松管理项目中的依赖项，并共享自己的代码。

**npm 的核心功能**
1. **安装包**：开发者可以使用 `npm install` 命令来安装和管理项目中的依赖项。依赖项会被下载到 `node_modules` 目录中。
2. **管理依赖项**：`package.json` 文件列出了项目的所有依赖项和其他元数据。通过 npm，可以轻松地添加、删除或更新依赖项。
3. **发布包**：开发者可以将自己的代码打包成 npm 包，并发布到 npm 注册表，使其他开发者可以安装和使用它。
4. **运行脚本**：npm 允许开发者定义脚本（如构建、测试、启动）并通过 `npm run` 命令来执行。

#### 什么是包（Package）？

**包**（Package）是一个包含了 JavaScript 代码、资源文件以及相关元数据的压缩文件。包通常用于分发特定功能的代码库，开发者可以通过 npm 安装和使用这些包。

**包的组成**
1. **JavaScript 代码**：包中通常包含一个或多个 JavaScript 文件，提供特定的功能或库。
2. **package.json**：每个包的根目录下都有一个 `package.json` 文件，它描述了包的基本信息，如包名、版本号、描述、作者、依赖项等。`package.json` 是 npm 管理包的重要文件。
3. **其他资源文件**：包可能还包含文档（如 README.md）、配置文件、样式文件等。

**package.json 文件示例：**

```json
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "description": "A simple example package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

**npm 常用命令**

1. **`npm init`**：初始化一个新的 Node.js 项目，生成 `package.json` 文件。
   ```bash
   npm init
   ```

2. **`npm install <package_name>`**：安装一个包，并将其添加到 `node_modules` 目录中。如果使用 `--save` 选项，会将包记录到 `package.json` 的 `dependencies` 字段中；`--save-dev` 选项会将包记录到 `devDependencies` 字段中。
   ```bash
   npm install express --save
   ```

3. **`npm install`**：在没有指定包名的情况下运行此命令，会根据 `package.json` 文件安装所有列出的依赖项。
   ```bash
   npm install
   ```

4. **`npm update`**：更新项目中的依赖项到最新的版本。
   ```bash
   npm update
   ```

5. **`npm uninstall <package_name>`**：卸载一个包，并从 `package.json` 中删除它。
   ```bash
   npm uninstall lodash --save
   ```

6. **`npm publish`**：将你的包发布到 npm 注册表中，使其可供其他开发者使用。
   ```bash
   npm publish
   ```

7. **`npm run <script_name>`**：执行 `package.json` 中定义的脚本。例如 `npm run test` 会执行 `scripts` 中的 `test` 脚本。
   ```bash
   npm run build
   ```

**包的分类**

1. **核心包（Core Packages）**：Node.js 内置的模块，不需要通过 npm 安装。例如 `fs`、`http`、`path` 等。
2. **第三方包（Third-Party Packages）**：由社区或公司开发的包，通常发布在 npm 注册表中，可以通过 npm 安装。例如 `express`、`lodash`、`axios` 等。
3. **本地包（Local Packages）**：开发者自己编写的包，通常用于项目内部的代码复用。

**总结**

- **npm** 是 Node.js 的包管理器，它使得管理和共享代码变得简单和高效。
- **包** 是一个可重用的代码单元，通常包含在 `package.json` 文件中定义的元数据和依赖项。通过 npm，开发者可以安装、管理和发布包，从而大大提升开发效率和代码复用性。

### 6、Express的使用

**Express** 是一个基于 Node.js 的轻量级、灵活的 Web 应用程序框架。它提供了一系列强大的功能，用于构建单页、多页和混合类型的 Web 应用程序。Express 使得在 Node.js 中构建 Web 服务器和 API 变得更加简单和直观。

**为什么使用 Express？**

1. **简洁易用**：Express 提供了一套简单的 API，简化了创建 Web 应用和 API 的过程。
2. **中间件支持**：Express 有强大的中间件机制，允许你在请求处理的各个阶段插入自定义的逻辑。
3. **灵活性**：Express 是一个微型框架，只提供核心的功能，可以通过插件和中间件扩展所需的功能。
4. **大规模社区支持**：由于它的流行，Express 拥有庞大的社区，提供了丰富的中间件和插件。

#### 如何使用 Express？

以下是使用 Express 构建一个简单的 Web 服务器的步骤：

**1. 安装 Node.js 和 npm**

确保你已经安装了 Node.js 和 npm。如果没有，请从 [Node.js 官方网站](https://nodejs.org/)下载安装。

**2. 初始化项目**

在项目目录中运行以下命令来初始化一个新的 Node.js 项目。这将创建一个 `package.json` 文件。

```bash
npm init -y
```

**3. 安装 Express**

使用 npm 安装 Express。

```bash
npm install express --save
```

**4. 创建一个简单的服务器**

创建一个新的文件 `app.js`，并在其中编写以下代码来创建一个简单的 Express 服务器：

```javascript
// 引入 express 模块
const express = require('express');

// 创建一个 Express 应用程序实例
const app = express();

// 定义一个简单的路由
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 启动服务器，并监听端口 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

**5. 启动服务器**

在终端中运行以下命令来启动服务器：

```bash
node app.js
```

然后，打开浏览器访问 `http://localhost:3000`，你将看到页面显示了 "Hello, World!"。

#### 常用功能和中间件

Express 提供了许多实用的功能和中间件，下面是一些常见的用法：

**路由**

Express 的路由功能允许你定义处理不同 HTTP 请求（GET、POST、PUT、DELETE 等）的函数。

```javascript
app.get('/users', (req, res) => {
  res.send('Get all users');
});

app.post('/users', (req, res) => {
  res.send('Create a new user');
});
```

**中间件**

中间件是 Express 应用的核心，处理请求响应周期中的各种任务，如解析请求体、日志记录、验证等。

```javascript
// 内置中间件，解析 JSON 请求体
app.use(express.json());

// 自定义中间件，记录请求时间
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // 将控制权交给下一个中间件
});
```

**静态文件服务**

Express 可以方便地提供静态文件服务，如 HTML、CSS、JavaScript 文件等。

```javascript
app.use(express.static('public'));
```

例如，如果你在项目的 `public` 目录中有一个 `index.html` 文件，那么它将可以通过 `http://localhost:3000/index.html` 访问。

**处理表单数据**

Express 也可以处理通过表单提交的 URL 编码数据。

```javascript
app.use(express.urlencoded({ extended: true }));
```

**总结**

- **Express** 是一个基于 Node.js 的轻量级 Web 框架，简化了 Web 应用和 API 的构建。
- 它提供了强大的路由功能和中间件机制，可以轻松处理 HTTP 请求和响应。
- Express 易于使用和扩展，拥有庞大的社区和丰富的插件支持，使其成为构建 Web 应用的主流选择之一。

通过 Express，你可以快速搭建一个功能强大且灵活的 Web 服务器或 RESTful API。

### 7、MySQL数据库

**MySQL** 是一个开源的关系型数据库管理系统（RDBMS），它使用结构化查询语言（SQL）进行数据管理。MySQL 是世界上最流行的数据库系统之一，广泛用于 Web 应用程序和数据存储系统。它以其高性能、可靠性和易用性而著称，并且在大型 Web 项目（如 Facebook、Twitter、YouTube）中得到了广泛应用。

#### 为什么使用 MySQL？

1. **性能优秀**：MySQL 提供了高效的数据存储和查询能力，能够处理大规模数据集。
2. **广泛支持**：MySQL 兼容各种操作系统和开发语言，并且与许多 Web 开发框架（如 PHP、Node.js）集成良好。
3. **开放源代码**：MySQL 是开源软件，提供了广泛的社区支持和丰富的文档。
4. **强大的安全性**：MySQL 提供了用户认证、访问控制和加密等多种安全特性，确保数据的安全性。

#### 如何使用 MySQL？

使用 MySQL 的步骤包括安装、配置、使用 SQL 进行数据库操作，以及与编程语言集成。

**1. 安装 MySQL**

首先，你需要在你的操作系统上安装 MySQL。可以从 [MySQL 官网](https://dev.mysql.com/downloads/) 下载适合你的操作系统的安装包。安装过程中，你可以选择默认配置，也可以根据需求进行自定义设置。

**2. 启动 MySQL 服务**

安装完成后，MySQL 服务器会自动启动。如果没有启动，你可以手动启动它：

- 在 Linux 系统上，使用以下命令：
  ```bash
  sudo systemctl start mysql
  ```

- 在 Windows 系统上，你可以通过服务管理器（Services）启动 MySQL 服务。

**3. 连接到 MySQL**

你可以通过 MySQL 的命令行客户端或其他数据库管理工具（如 MySQL Workbench, phpMyAdmin）来连接到 MySQL 服务器。

使用命令行连接到 MySQL：
```bash
mysql -u root -p
```
其中，`-u` 表示用户名，`-p` 表示需要密码。

**4. 基本 SQL 操作**

连接到 MySQL 后，你可以使用 SQL 命令来创建数据库、创建表、插入数据、查询数据等。

- **创建数据库：**
  ```sql
  CREATE DATABASE my_database;
  ```

- **选择数据库：**
  ```sql
  USE my_database;
  ```

- **创建表：**
  ```sql
  CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **插入数据：**
  ```sql
  INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
  ```

- **查询数据：**
  ```sql
  SELECT * FROM users;
  ```

- **更新数据：**
  ```sql
  UPDATE users SET name = 'Jane Doe' WHERE id = 1;
  ```

- **删除数据：**
  ```sql
  DELETE FROM users WHERE id = 1;
  ```

**5. 与编程语言集成**

MySQL 可以与多种编程语言集成，以下是与Node.js的集成方式：

- **Node.js**：使用 `mysql` 或 `mysql2` 库来连接和操作 MySQL 数据库。
  ```javascript
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'my_database'
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
  });
  ```

**6. 管理工具**

除了命令行，使用图形化工具也可以更加方便地管理 MySQL 数据库：

- **MySQL Workbench**：官方的图形化管理工具，提供数据库设计、SQL 开发、服务器管理等功能。
- **phpMyAdmin**：基于 Web 的 MySQL 管理工具，适合快速管理数据库操作。

**总结**

- **MySQL** 是一个强大的开源关系型数据库管理系统，适合各种规模的应用程序。
- 你可以通过 SQL 语句来管理数据库和数据表，并执行插入、查询、更新、删除等操作。
- MySQL 可以与多种编程语言集成，使你能够在应用程序中轻松使用数据库功能。
- 管理 MySQL 可以通过命令行或图形化工具，如 MySQL Workbench 或 phpMyAdmin。

## 二、Git

### 1、Git简介

**Git** 是一个分布式版本控制系统，用于跟踪文件和项目的更改，协调多人开发工作，以及管理和维护项目的不同版本。它是一个开源工具，被广泛用于软件开发和其他协作项目，可以帮助开发团队有效地协同工作，追踪代码的历史变更，以及解决潜在的冲突。

以下是如何使用Git的一般步骤：

**1. 安装Git：**

首先，您需要在计算机上安装Git。您可以从Git官方网站（[https://git-scm.com/downloads](https://git-scm.com/downloads)）下载适合您操作系统的安装程序，并按照安装向导的指示进行安装。

**2. 配置Git：**

在安装Git后，您需要配置全局Git用户信息，包括用户名和电子邮件地址。这些信息将用于标识您的提交记录。在终端中运行以下命令来配置：

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

**3. 创建或克隆仓库：**

要开始使用Git，您可以创建一个新的Git仓库或克隆现有的仓库。创建一个新的仓库可以使用以下命令：

```bash
git init
```

要克隆现有的仓库，您可以使用 `git clone` 命令，后跟仓库的URL。例如：

```bash
git clone https://github.com/user/repo.git
```

**4. 添加和提交更改：**

在Git中，您需要明确告诉Git哪些文件需要跟踪。使用 `git add` 命令将更改添加到暂存区，然后使用 `git commit` 命令提交更改到仓库。例如：

```bash
git add filename.ext  # 添加特定文件
git commit -m "Commit message"  # 提交更改
```

**5. 查看历史记录：**

使用 `git log` 命令可以查看提交历史记录，以及每个提交的详细信息，包括作者、日期、提交消息等。例如：

```bash
git log
```

**6. 创建分支和合并更改：**

Git允许您创建和管理分支，以便同时进行多个不同的工作。您可以使用 `git branch` 命令创建和列出分支，使用 `git checkout` 切换到不同的分支，使用 `git merge` 合并分支的更改。例如：

```bash
git branch feature-branch  # 创建分支
git checkout feature-branch  # 切换到分支
# 在分支上进行更改和提交
git checkout main  # 切换回主分支
git merge feature-branch  # 合并分支的更改
```

**7. 解决冲突：**

在多人协作中，有时可能会发生冲突，即多个人修改了同一个文件的相同部分。您需要手动解决这些冲突，并提交解决后的更改。Git会标识冲突的文件，您可以编辑这些文件以解决冲突。

**8. 推送和拉取更改：**

如果您使用Git与远程仓库协作（如GitHub、GitLab等），您可以使用 `git push` 命令将本地更改推送到远程仓库，并使用 `git pull` 命令拉取远程仓库的更改到本地。例如：

```bash
git push origin main  # 推送到远程主分支
git pull origin main  # 从远程主分支拉取更改
```

### 2、.gitignore文件

`.gitignore` 文件是一个用来告诉Git哪些文件或目录应该被忽略的配置文件。它通常位于Git项目的根目录下，并包含一系列规则，指示Git在版本控制期间忽略指定的文件或目录。这对于排除不需要跟踪的临时文件、编译产物、依赖库和敏感信息非常有用。

以下是如何使用 `.gitignore` 文件的一般步骤：

1. **创建 `.gitignore` 文件：**

在Git项目的根目录下创建一个名为 `.gitignore` 的文本文件（注意文件名以点开头）。您可以使用文本编辑器创建这个文件。

2. **编辑 `.gitignore` 文件：**

在 `.gitignore` 文件中，您可以列出要忽略的文件、目录或文件模式。每一行代表一个忽略规则。以下是一些示例：

   - 忽略特定文件：
     ```
     filename.txt
     ```

   - 忽略特定目录：
     ```
     /mydirectory/
     ```

   - 使用通配符忽略所有 `.log` 文件：
     ```
     *.log
     ```

   - 忽略文件名以 `.bak` 结尾的文件：
     ```
     *.bak
     ```

   - 忽略所有 `.tmp` 文件，包括子目录中的：
     ```
     **/*.tmp
     ```

   - 忽略根目录下的 `config.json`，但不忽略子目录下的同名文件：
     ```
     /config.json
     ```

   - 忽略所有 `.log` 文件，但不忽略 `important.log` 文件：
     ```
     *.log
     !important.log
     ```

3. **保存 `.gitignore` 文件：**

保存您的 `.gitignore` 文件。

4. **提交 `.gitignore` 文件：**

将 `.gitignore` 文件添加到Git仓库，并提交它，以便所有团队成员都能享受到忽略规则的好处。

```bash
git add .gitignore
git commit -m "Add .gitignore file"
```

现在，Git将根据 `.gitignore` 文件中的规则自动忽略指定的文件和目录。这些被忽略的文件不会出现在 `git status` 或 `git diff` 中，并且不会被包含在Git的版本历史中。

`.gitignore` 文件是一个非常有用的工具，可以帮助您保持Git仓库的干净和整洁，同时排除不必要的文件和敏感信息。在开发项目时，根据项目的需求和使用的编程语言、开发工具等，可以根据需要编辑 `.gitignore` 文件。



