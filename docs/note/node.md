---
outline: deep
---
# Nodejs&Git

## 一、node.js

### 1、nodejs简介

Node.js（简称Node）是一个基于Chrome V8 JavaScript引擎的开源服务器端运行环境。它允许你使用JavaScript编写服务器端应用程序，而不仅仅是在浏览器中运行的客户端脚本语言。

以下是Node.js的一些关键特点和用途：

1. **事件驱动**: Node.js使用事件驱动的编程模型，这意味着它可以处理大量并发连接而无需创建线程。这使得它非常适合构建高性能的网络应用程序，如Web服务器。

2. **非阻塞I/O**: Node.js采用非阻塞I/O操作，可以在执行I/O操作时继续执行其他任务，而不会阻塞整个应用程序。这有助于提高应用程序的吞吐量和响应速度。

3. **轻量和高效**: Node.js的设计目标之一是轻量和高效。它的运行时非常快速，因此适用于构建实时应用程序，如聊天应用、在线游戏等。

4. **包管理器**: Node.js附带了一个名为npm（Node Package Manager）的包管理器，使开发人员能够轻松地安装、管理和共享JavaScript模块和库。

5. **跨平台**: Node.js可以在多个操作系统上运行，包括Windows、Linux和macOS，因此具有跨平台性。

Node.js通常用于构建服务器端应用程序，如Web应用、API服务、实时应用程序、代理服务器等。它的生态系统非常丰富，有大量的第三方库和模块，可以帮助开发人员加速应用程序的开发过程。由于使用JavaScript，前端开发人员可以轻松地转向后端开发，并共享一些代码和技能。

总之，Node.js是一个强大的服务器端运行环境，适用于构建高性能、可扩展和实时的网络应用程序。

### 2、常用的模块

Node.js具有许多常用的内置模块，这些模块可以帮助您执行各种任务，从文件操作到网络通信。以下是一些常用的内置模块以及如何使用它们的简要介绍：

1. **http 模块**：用于创建HTTP服务器和处理HTTP请求。

   ```javascript
   const http = require('http');
   
   const server = http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end('Hello, World!\n');
   });
   
   server.listen(3000, '127.0.0.1', () => {
     console.log('Server is running at http://127.0.0.1:3000/');
   });
   ```

2. **fs 模块**：用于文件系统操作，如读取、写入、删除文件等。

   ```javascript
   const fs = require('fs');
   
   fs.readFile('file.txt', 'utf8', (err, data) => {
     if (err) {
       console.error(err);
       return;
     }
     console.log(data);
   });
   ```

3. **path 模块**：用于处理文件路径。

   ```javascript
   const path = require('path');
   
   const filePath = path.join(__dirname, 'files', 'file.txt');
   console.log(filePath);
   ```

4. **events 模块**：用于创建和处理事件。

   ```javascript
   const EventEmitter = require('events');
   const emitter = new EventEmitter();
   
   emitter.on('customEvent', (arg) => {
     console.log(`Event occurred with argument: ${arg}`);
   });
   
   emitter.emit('customEvent', 'Hello, EventEmitter!');
   ```


这些是Node.js内置模块的一些示例。您可以使用`require`来引入这些模块，然后根据模块的文档和API文档来学习如何使用它们。此外，Node.js社区还提供了许多第三方模块，您可以使用npm来安装和管理这些模块，以扩展您的应用程序的功能。要使用第三方模块，首先需要在项目中运行以下命令来安装它们：

```bash
npm install 模块名
```

然后，在代码中使用`require`来引入这些模块，就像引入内置模块一样。例如：

```javascript
const express = require('express');
const mongoose = require('mongoose');
```

每个模块都有不同的功能和用法，所以建议查阅官方文档或模块的文档以获取更多详细信息。
### 3、创建web服务

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

Node.js使用的模块化系统是CommonJS模块系统。模块化是一种编程方法，通过将代码分割成模块，可以提高代码的可维护性、可重用性和可测试性。在Node.js中，每个文件都被视为一个独立的模块，您可以导出（export）模块的一部分，以便其他模块导入（require）并使用它。

以下是如何使用模块化开发的一般步骤：

1. **创建模块**：在Node.js中，一个文件就是一个模块。您可以创建一个包含可重用代码的JavaScript文件，然后在其他文件中引入它。例如，创建一个名为 `myModule.js` 的模块：

   ```javascript
   // myModule.js
   
   // 导出一个变量
   exports.myVariable = 'Hello from myModule!';
   
   // 导出一个函数
   exports.myFunction = function () {
     return 'This is a function from myModule!';
   };
   ```

2. **导入模块**：在另一个文件中，您可以使用 `require` 函数来导入模块。例如，导入上面创建的 `myModule.js` 模块：

   ```javascript
   const myModule = require('./myModule');
   
   console.log(myModule.myVariable);
   console.log(myModule.myFunction());
   ```

   在这里，`require('./myModule')` 会加载 `myModule.js` 文件，并返回其导出的对象。

3. **使用导出的变量和函数**：一旦您导入了模块，您就可以访问其导出的变量和函数，就像访问普通JavaScript对象一样。

   在 `myModule.js` 模块中导出的变量和函数可以在另一个文件中使用，这种方式允许您模块化您的代码，使其更易于维护和测试。

这是一个基本的示例，展示了如何在Node.js中使用模块化开发。实际上，您可以将模块分为不同的文件，创建一个包含多个模块的项目，也可以使用第三方模块，如Express.js，来加速Web应用程序的开发。模块化是现代JavaScript开发的重要概念，它有助于组织代码、减少代码重复，并提高应用程序的可扩展性。
### 5、npm和包

**npm**（Node Package Manager）是Node.js的官方包管理工具，用于管理和发布JavaScript包（也称为模块或库）。

**包**（Package）是指Node.js模块或库，它可以包含JavaScript代码、依赖关系、文档和其他相关文件。npm允许您轻松地安装、升级、卸载和共享JavaScript代码，使您能够在项目中使用第三方库，以加速开发并避免重复编写通用功能。

以下是如何使用第三方包的一般步骤：

1. **初始化项目**：在开始使用第三方包之前，通常需要创建一个Node.js项目，并在项目根目录中创建一个`package.json`文件。可以使用以下命令初始化项目：

   ```bash
   npm init
   ```

   这将引导您通过一些问题来生成`package.json`文件，其中包括项目的名称、版本、入口文件等信息。

2. **安装第三方包**：要安装第三方包，可以使用`npm install`命令，后跟要安装的包的名称。例如，要安装一个名为 "lodash" 的包：

   ```bash
   npm install lodash
   ```

   这将在项目的`node_modules`目录下安装 "lodash" 包。

3. **使用第三方包**：安装完成后，您可以在项目中使用已安装的第三方包。在Node.js脚本中，您可以使用`require`函数来导入包，然后使用其功能。例如：

   ```javascript
   const _ = require('lodash');
   const numbers = [1, 2, 3, 4, 5];
   const sum = _.sum(numbers);
   console.log(sum); // 输出：15
   ```

   上述代码中，我们导入了 "lodash" 包，然后使用它的 `sum` 函数对数组中的数字求和。

4. **更新和卸载包**：要更新已安装的包到最新版本，可以使用`npm update`命令。要卸载包，可以使用`npm uninstall`命令。例如：

   ```bash
   npm update lodash  # 更新 lodash 包到最新版本
   npm uninstall lodash  # 卸载 lodash 包
   ```

5. **package.json 文件**：`package.json`文件是用来管理项目依赖关系的重要文件。在项目中使用第三方包时，它们会被记录在`dependencies`或`devDependencies`字段中，可以确保您的项目在不同环境中具有一致的依赖。

   如果您想将包添加到项目的`dependencies`中，可以使用`--save`标志，例如：

   ```bash
   npm install lodash --save
   ```

   如果您想将包添加到`devDependencies`中，可以使用`--save-dev`标志，例如：

   ```bash
   npm install mocha --save-dev
   ```

这些是使用第三方包的基本步骤。npm提供了丰富的包搜索和发布功能，允许您找到并分享自己的包，以及管理项目的依赖关系。要了解更多关于npm的功能和用法，可以查阅npm的官方文档。

### 6、Express的使用

**Express.js**（通常称为Express）是一个流行的Node.js Web应用程序框架，它简化了构建Web和API应用程序的过程。Express提供了一组强大的功能和工具，使开发人员能够更轻松地处理路由、请求、响应、中间件等，从而加速Web应用程序的开发。

以下是如何使用Express.js的一般步骤：

1. **安装Express**：首先，您需要确保您的项目中已经安装了Node.js。然后，使用npm来安装Express。在项目的根目录中运行以下命令：

   ```bash
   npm install express
   ```

   这将在项目的`node_modules`目录中安装Express。

2. **创建Express应用程序**：创建一个新的JavaScript文件，通常称为应用程序入口文件，例如 `app.js` 或 `server.js`。在文件中，导入Express并创建一个Express应用程序实例：

   ```javascript
   const express = require('express');
   const app = express();
   ```

3. **定义路由**：使用Express，您可以定义不同的路由，以指定不同URL路径的处理逻辑。例如，创建一个处理根路径的路由：

   ```javascript
   app.get('/', (req, res) => {
     res.send('Hello, Express!');
   });
   ```

   这个路由会在用户访问根路径（例如 http://localhost:3000/）时发送 "Hello, Express!"。

4. **启动服务器**：使用Express，您可以将应用程序监听在特定的端口上，以便接受来自客户端的请求。例如：

   ```javascript
   const port = 3000;
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   ```

5. **运行应用程序**：最后，您可以在终端中运行应用程序入口文件，例如：

   ```bash
   node app.js
   ```

   您的Express应用程序将在指定的端口上启动。

6. **访问应用程序**：打开Web浏览器或使用HTTP客户端工具来访问您的Express应用程序。在上述示例中，您可以通过访问 http://localhost:3000/ 来查看 "Hello, Express!" 消息。

这只是一个基本示例，展示了如何创建和使用Express.js应用程序。Express具有丰富的功能，包括路由、中间件、模板引擎支持、请求/响应处理、静态文件服务等等。您可以根据您的项目需求来深入学习和使用Express的各种功能。Express是构建Web应用程序和API的强大工具，也有大量的第三方中间件和插件可用于扩展其功能。

### 7、MySQL数据库

**MySQL** 是一个开源的关系型数据库管理系统（RDBMS），它使用结构化查询语言（SQL）来管理和操作数据。MySQL广泛用于Web应用程序和服务器端开发，是一个可靠的数据库解决方案，支持多种操作系统。

以下是如何使用MySQL进行简单的增删改查（CRUD）操作的一般步骤：

**1. 安装 MySQL：**

首先，您需要在计算机上安装 MySQL 数据库。您可以从 MySQL [官方网站](https://dev.mysql.com/downloads/mysql/)下载 MySQL Community Server 版本，根据您的操作系统选择适当的安装程序，并按照安装向导的指示进行安装。

**2. 连接到 MySQL：**

一旦 MySQL 安装完成，您可以使用命令行客户端或图形化工具连接到数据库。通常，您需要提供主机名、用户名和密码来建立连接。

使用命令行客户端，可以运行以下命令连接到 MySQL（假设 MySQL 已添加到系统的 PATH 环境变量中）：

```bash
mysql -u 用户名 -p
```

系统将提示您输入密码，然后您将进入 MySQL 命令行终端。

**3. 创建数据库和表：**

在 MySQL 中，您可以创建数据库和表来存储数据。例如，创建一个名为 `mydb` 的数据库和一个名为 `users` 的表：

```sql
CREATE DATABASE mydb;
USE mydb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
```

上述 SQL 语句创建了一个名为 `users` 的表，包含了 `id`、`username` 和 `email` 三个字段。

**4. 插入数据：**

要向表中插入数据，您可以使用 INSERT INTO 语句。例如，插入一条新用户记录：

```sql
INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com');
```

**5. 查询数据：**

要从表中检索数据，您可以使用 SELECT 语句。例如，检索所有用户的记录：

```sql
SELECT * FROM users;
```

**6. 更新数据：**

要更新数据，您可以使用 UPDATE 语句。例如，更新用户名为 "john_doe" 的用户的电子邮件地址：

```sql
UPDATE users SET email = 'new_email@example.com' WHERE username = 'john_doe';
```

**7. 删除数据：**

要删除数据，您可以使用 DELETE 语句。例如，删除用户名为 "john_doe" 的用户记录：

```sql
DELETE FROM users WHERE username = 'john_doe';
```

这是一个简单的示例，展示了如何使用 MySQL 进行 CRUD 操作。MySQL 提供了丰富的功能和选项，包括索引、事务、外键、存储过程等等，用于更复杂和高级的数据库操作。您可以使用各种编程语言（如Node.js、Python、Java等）的 MySQL 客户端库来与 MySQL 数据库进行交互，以便在应用程序中执行数据库操作。



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

这是Git的基本用法。Git还提供了其他高级功能，如标签、重置、stash等，用于更灵活地管理项目的版本和更改。学习使用Git需要一些时间和实践，但它是一个非常有价值的工具，可以提高开发和协作的效率，以及确保代码的版本控制。

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



