---
outline: [1, 3]
---

# 前后端交互

## 一、服务器

### 1、客户端和服务器

**客户端**和**服务器**是计算机网络中的两个重要概念，它们定义了计算机如何在网络中进行交互和通信。理解客户端和服务器之间的关系是理解现代计算机网络、Web 开发和软件架构的基础。

![An image](/img/http1.png)

#### 客户端（Client）

**客户端**是指请求和使用网络资源或服务的设备或应用程序。客户端通常是用户直接与之交互的系统。以下是客户端的一些特点：

1. **发起请求**：

   - 客户端向服务器发送请求以获取资源或服务。例如，当你在浏览器中输入一个网址并访问某个网站时，浏览器作为客户端向 Web 服务器发送请求，要求获取网页内容。

2. **用户界面**：

   - 客户端通常有一个用户界面（UI），允许用户与应用程序或系统交互。例如，浏览器、移动应用、桌面应用程序等都是具有用户界面的客户端。

3. **执行部分逻辑**：

   - 客户端可以执行一部分应用程序逻辑，特别是在前端开发中，客户端通常负责呈现用户界面和处理用户输入。例如，前端的 JavaScript 代码在浏览器中运行，处理页面交互、动态更新内容等。

4. **依赖服务器**：
   - 客户端依赖服务器提供的资源和服务，例如数据存储、业务逻辑处理等。客户端通常不保存或处理大量的数据，而是依赖服务器的计算能力和存储。

#### 服务器（Server）

**服务器**是提供服务和资源的计算机或软件系统。服务器等待来自客户端的请求，并根据请求提供相应的资源或服务。以下是服务器的一些特点：

1. **等待请求**：

   - 服务器通常在网络上持续运行，等待来自客户端的请求。服务器会监听特定的网络端口，当客户端发送请求时，服务器会接收并处理。

2. **提供服务**：

   - 服务器的主要职责是提供服务，这些服务可以是数据存储、文件共享、计算处理、网页托管、数据库管理等。例如，Web 服务器向浏览器客户端提供网页，数据库服务器向应用服务器提供数据查询服务。

3. **执行主要逻辑**：

   - 服务器通常负责执行应用程序的核心业务逻辑。服务器可能会与数据库交互、执行复杂计算、生成动态内容并将其发送回客户端。

4. **高性能和可靠性**：
   - 服务器通常设计为能够处理大量请求，并提供高可用性和可靠性。例如，服务器可能运行在强大的硬件上，部署在数据中心，并具有备份、负载均衡等功能，以确保其稳定运行。

#### 客户端-服务器模型

客户端和服务器之间的关系通常被描述为**客户端-服务器模型**，这是现代计算机网络和 Web 应用开发的基本架构之一。在这种模型中：

1. **客户端发起请求**：

   - 客户端发送请求到服务器，通常通过网络协议（如 HTTP/HTTPS）。

2. **服务器处理请求**：

   - 服务器接收请求后，根据请求内容执行相应的操作，如访问数据库、处理业务逻辑，或者生成动态内容。

3. **服务器发送响应**：

   - 服务器处理完请求后，将结果（通常是响应数据）发送回客户端。

4. **客户端显示结果**：
   - 客户端接收到服务器的响应后，可能会根据响应内容更新用户界面、存储数据或执行其他操作。

**客户端与服务器的例子**

- **Web 浏览器与 Web 服务器**：

  - 浏览器是客户端，Web 服务器是服务器。当你访问一个网站时，浏览器向 Web 服务器发送请求，服务器返回 HTML、CSS、JavaScript 文件，浏览器呈现这些内容。

- **移动应用与后台服务器**：

  - 移动应用（如手机上的社交媒体应用）是客户端，后台服务器是服务器。移动应用向服务器请求数据（如用户信息、消息），服务器处理请求并返回相应的数据。

- **桌面应用与数据库服务器**：
  - 某些桌面应用（如财务软件）是客户端，它们可能通过网络与远程的数据库服务器通信，以获取和存储数据。

**总结**

- **客户端**：发起请求的设备或应用，通常负责用户界面和部分逻辑处理。
- **服务器**：响应客户端请求的计算机或系统，负责提供服务和资源，执行主要业务逻辑。

客户端和服务器之间的交互是构建现代网络应用的基础，通过理解这个模型，开发者可以更好地设计和实现高效的网络系统和应用。

### 2、URL 的组成

URL（Uniform Resource Locator，统一资源定位符）是用于在互联网上标识和定位资源的地址。URL 是 Web 浏览器、应用程序等访问网页、文件、图像、视频等资源时所使用的标准格式。它是我们日常上网时输入到浏览器地址栏中的文字，也是超链接中指向目标的具体地址。

#### URL 的组成

一个完整的 URL 包含多个部分，每个部分都有其特定的作用。以一个典型的 URL 为例：

```
https://www.example.com:8080/path/to/resource?query=example#section
```

**1. 协议（Protocol）**

- **描述**：协议指定了客户端与服务器通信所使用的规则或方法。
- **位置**：URL 的开头，后面跟着`“://”`。
- **示例**：

  - `http`：超文本传输协议，用于传输网页数据。
  - `https`：安全超文本传输协议，是 HTTP 的加密版本。
  - `ftp`：文件传输协议，用于传输文件。

  在例子中，`https` 是使用的协议。

**2. 域名（Domain Name）**

- **描述**：域名是用于标识网站服务器的地址，通常是人们记忆和访问网站的主要方式。
- **位置**：紧随协议之后，位于`“://”`后面。
- **示例**：

  - `www.example.com`：一个示例域名。
  - `google.com`、`wikipedia.org` 也是常见的域名。

  在例子中，`www.example.com` 是域名。

**3. 端口号（Port）**

- **描述**：端口号指定了服务器上提供服务的具体程序。默认情况下，Web 服务使用 80 端口（HTTP）或 443 端口（HTTPS），所以通常可以省略。
- **位置**：位于域名后面，用“:”分隔。
- **示例**：

  - `:8080`：一个自定义的端口号，通常用于开发和测试环境。

  在例子中，`:8080` 是端口号。

**4. 路径（Path）**

- **描述**：路径指向服务器上的具体资源或文件，就像文件系统中的文件路径一样。
- **位置**：位于域名和端口号后面，以“/”开始。
- **示例**：

  - `/path/to/resource`：指向服务器上一个具体的文件或资源。

  在例子中，`/path/to/resource` 是路径。

**5. 查询字符串（Query String）**

- **描述**：查询字符串包含以键值对形式传递给服务器的额外参数，通常用于搜索、过滤或其他操作。
- **位置**：位于路径后面，以“?”开始，每个键值对之间用“&”分隔。
- **示例**：

  - `?query=example`：表示查询参数 `query` 的值为 `example`。

  在例子中，`?query=example` 是查询字符串。

**6. 片段标识符（Fragment Identifier）**

- **描述**：片段标识符用于指向页面中的某个部分，通常用于页面内导航。
- **位置**：位于查询字符串或路径后面，以“#”开始。
- **示例**：

  - `#section`：指向页面中的 `section` 部分。

  在例子中，`#section` 是片段标识符。

#### URL 的作用

1. **资源定位**：URL 是在互联网上定位资源的标准方式。它可以指向一个网页、图片、视频、文件等各种资源。

2. **导航**：用户通过输入 URL 或点击链接可以导航到不同的网页或资源。浏览器根据 URL 向服务器发送请求，获取相应资源并显示在用户的屏幕上。

3. **参数传递**：通过查询字符串，URL 可以传递参数给服务器。例如，在搜索引擎中，用户输入的搜索关键词通常通过查询字符串传递给服务器，然后服务器根据这些参数返回搜索结果。

4. **内容标识**：片段标识符让用户可以直接跳转到页面内的某个特定位置，常见于长文档或目录导航。

**URL 示例解析**

- **示例 URL**：`https://www.example.com:8080/products/view?id=12345#details`
  - `https`：使用的协议，表示数据通过 HTTPS 传输。
  - `www.example.com`：域名，表示服务器的位置。
  - `:8080`：端口号，指定了服务器监听的端口。
  - `/products/view`：路径，指向具体的资源或页面。
  - `?id=12345`：查询字符串，向服务器传递了一个名为 `id` 的参数，值为 `12345`。
  - `#details`：片段标识符，指向页面内的 `details` 部分。

了解 URL 的结构和作用，对于理解 Web 浏览器如何访问网页、如何进行前端开发，以及如何在开发中有效管理资源至关重要。

### 3、通信过程

客户端和服务器之间的通信过程是网络应用的核心，尤其是在 Web 开发中。这个过程通常涉及请求和响应的循环，客户端发起请求，服务器处理并返回响应。这一过程通常通过 HTTP/HTTPS 协议进行，但也可以通过其他协议（如 WebSocket、FTP 等）完成。

#### 客户端-服务器通信的基本过程

![An image](/img/http2.png)

1. **客户端发起请求**：

   - 通常，用户在客户端（例如浏览器）上执行某个操作，比如点击链接、提交表单，或者访问一个网址。
   - 这会触发客户端向服务器发起一个请求。这个请求通常是一个 HTTP 请求，包含请求的类型、目标资源的路径、请求头（header）和可选的请求体（body）。

   **示例：**

   - 用户在浏览器中输入 `https://www.example.com` 并按下回车，浏览器会向服务器发起一个 GET 请求，请求 `www.example.com` 网站的首页。

2. **服务器接收请求**：

   - 服务器接收到客户端的请求后，会解析请求内容。这个内容包括请求的路径、请求方法（如 GET、POST）、请求头信息，以及可能包含的请求体（例如，POST 请求时的表单数据）。
   - 服务器会根据请求的路径和方法，确定如何处理这个请求。例如，服务器可能需要查询数据库、执行业务逻辑，或直接返回一个静态文件。

   **示例：**

   - 服务器收到请求后，识别到请求的是网站的首页，查找相应的 HTML 文件，或者调用后端应用程序生成首页内容。

3. **服务器处理请求**：

   - 服务器根据请求的内容执行相应的操作。这可能涉及：
     - **静态资源的返回**：服务器直接返回请求的文件（如 HTML、CSS、JavaScript、图片等）。
     - **动态内容生成**：服务器根据请求内容和业务逻辑生成动态内容。例如，从数据库获取数据并生成 HTML 页面。
     - **调用 API**：如果服务器本身是一个 API 服务器，它可能会调用内部服务或数据库，然后返回 JSON、XML 等格式的数据。
     - **执行后台逻辑**：例如，处理用户登录、提交表单数据、进行数据验证等。

   **示例：**

   - 服务器根据请求 URL `/products/view`，查询数据库获取产品列表，然后生成包含产品信息的 HTML 内容。

4. **服务器返回响应**：

   - 服务器处理请求后，会生成一个响应并返回给客户端。这个响应包含：
     - **状态码**：指示请求的结果，如 200（成功）、404（未找到）、500（服务器错误）等。
     - **响应头**：包含关于响应的元数据，例如内容类型（Content-Type）、缓存指令（Cache-Control）等。
     - **响应体**：实际的数据内容，可以是 HTML、JSON、图片、文件等。

   **示例：**

   - 服务器返回状态码 200，表示请求成功，并附带生成的 HTML 页面作为响应体。

5. **客户端接收响应**：

   - 客户端接收到服务器的响应后，根据响应内容进行处理：
     - **渲染页面**：浏览器会根据返回的 HTML、CSS 和 JavaScript 文件渲染页面并显示给用户。
     - **处理数据**：如果响应是 JSON 数据，客户端可能会用 JavaScript 解析数据并更新页面的部分内容（例如，使用 AJAX 更新部分网页内容）。
     - **错误处理**：如果服务器返回错误状态码（如 404 或 500），客户端可能会显示错误信息或采取其他操作。

   **示例：**

   - 浏览器接收到服务器返回的 HTML 页面后，解析并呈现给用户，同时可能加载附带的 CSS 和 JavaScript 文件以完成页面渲染和交互。

#### 一个简单的 Web 请求过程

假设你在浏览器中访问一个电商网站的产品页面：

1. **用户输入 URL**：

   - 你输入 `https://www.shop.com/products/12345` 并按下回车。

2. **浏览器发起 GET 请求**：

   - 浏览器向 `www.shop.com` 的服务器发起一个 GET 请求，请求路径为 `/products/12345`。

3. **服务器接收请求**：

   - 服务器收到请求后，识别请求路径指向特定的产品页面，需要查询数据库以获取产品 `12345` 的详细信息。

4. **服务器查询数据库并生成响应**：

   - 服务器查询数据库，获取产品 `12345` 的名称、价格、描述、图片等信息。然后，服务器生成一个 HTML 页面，嵌入这些产品信息。

5. **服务器返回 HTML 响应**：

   - 服务器返回包含产品信息的 HTML 页面，状态码为 200（成功）。

6. **浏览器渲染页面**：
   - 浏览器接收到 HTML 响应后，解析并渲染页面，将产品信息显示给用户。如果页面包含 CSS 和 JavaScript 文件，浏览器会继续请求这些资源并加载它们。


#### 总结

客户端和服务器的通信过程是通过网络协议（通常是 HTTP/HTTPS）来完成的，涉及请求的发起、服务器的处理、响应的返回以及客户端对响应的处理。了解这个过程是掌握 Web 开发和网络编程的重要基础。

## 二、HTTP

### 1、HTTP

HTTP（Hypertext Transfer Protocol，超文本传输协议）是用于在 Web 上进行数据传输的基本协议。它定义了客户端（通常是浏览器）与服务器之间如何请求和传输资源（如 HTML 文件、图片、视频等）的规则和方式。

#### HTTP 的基本概念

- **超文本**：指的是包含链接（hyperlink）的文本，可以通过点击链接从一个文档跳转到另一个文档或资源。超文本是构建 Web 的核心概念。

- **传输协议**：HTTP 是一种应用层协议，用于在客户端和服务器之间传输数据。它是一种无状态协议，即每次请求都是独立的，不会记住之前的请求信息。

**HTTP 的工作原理**

HTTP 通信遵循“请求-响应”模型。客户端（如浏览器）向服务器发送 HTTP 请求，服务器处理请求并返回 HTTP 响应。这种通信过程包括以下几个步骤：

1. **客户端发起 HTTP 请求**：

   - 用户在浏览器中输入 URL 或点击链接，浏览器会根据 URL 生成一个 HTTP 请求并发送到服务器。请求包括请求行、请求头、请求体等部分。

2. **服务器接收并处理请求**：

   - 服务器接收到 HTTP 请求后，解析请求内容，根据请求的路径、方法等进行处理。这可能包括访问数据库、执行业务逻辑、读取文件等操作。

3. **服务器返回 HTTP 响应**：

   - 服务器处理完请求后，生成一个 HTTP 响应并发送回客户端。响应包括状态码、响应头、响应体等。

4. **客户端处理响应**：
   - 客户端接收到 HTTP 响应后，根据响应内容进行处理。浏览器通常会渲染返回的 HTML 内容、加载资源文件（如 CSS、JavaScript），并显示给用户。

**HTTP 请求的结构**

一个典型的 HTTP 请求包括以下部分：

1. **请求行**：

   - 包含请求方法（如 GET、POST）、请求路径（如 `/index.html`）、HTTP 版本（如 `HTTP/1.1`）。
   - 示例：`GET /index.html HTTP/1.1`

2. **请求头**：

   - 包含与请求相关的元数据，如用户代理（User-Agent）、接受的内容类型（Accept）、主机（Host）等。
   - 示例：
     ```
     Host: www.example.com
     User-Agent: Mozilla/5.0
     Accept: text/html
     ```

3. **请求体**：
   - 包含要发送给服务器的数据，通常用于 POST 或 PUT 请求中（如表单数据、JSON 数据）。GET 请求通常没有请求体。

**HTTP 响应的结构**

一个典型的 HTTP 响应包括以下部分：

1. **状态行**：

   - 包含 HTTP 版本、状态码、状态描述。
   - 示例：`HTTP/1.1 200 OK`

2. **响应头**：

   - 包含与响应相关的元数据，如内容类型（Content-Type）、内容长度（Content-Length）、服务器信息等。
   - 示例：
     ```
     Content-Type: text/html
     Content-Length: 2048
     Server: Apache/2.4.41
     ```

3. **响应体**：
   - 包含实际返回的数据，如 HTML 文档、图像、JSON 数据等。

**HTTP 的无状态性**

HTTP 是无状态的，这意味着每次请求都是独立的，服务器不会自动保存上次请求的信息。如果需要保持状态（如用户会话），通常使用**Cookie**或**Session**来实现。

#### HTTPS：HTTP 的安全版本

HTTPS（Hypertext Transfer Protocol Secure）是 HTTP 的加密版本，使用 SSL/TLS 加密数据传输，确保数据在传输过程中不被窃听或篡改。使用 HTTPS 是现代 Web 开发中的最佳实践，尤其是在处理敏感信息时。

**总结**

HTTP 是 Web 上最基本的协议，用于客户端和服务器之间的数据传输。它通过请求和响应的方式实现了 Web 资源的访问和交互，是现代互联网的基石。了解 HTTP 的工作原理、请求和响应结构、常见的 HTTP 方法和状态码等，对于 Web 开发和网络编程至关重要。

### 2、请求方法

HTTP 常用的请求方法包括以下几种：

1. **GET**：从服务器请求数据。GET 请求通常用于获取资源（例如网页、图像、数据等），而不会对服务器产生任何副作用。

2. **POST**：向服务器发送数据以创建资源。POST 请求通常用于提交表单数据、上传文件或发送 JSON 数据。POST 请求可能会对服务器产生副作用，比如创建新的记录或更新数据。

3. **PUT**：向服务器发送数据以更新资源。PUT 请求通常用于更新现有资源，如果资源不存在，它可能会创建一个新的资源。

4. **DELETE**：请求服务器删除指定的资源。DELETE 请求用于删除资源，可能会对服务器产生副作用。

5. **PATCH**：对服务器上的资源进行部分更新。与 PUT 不同，PATCH 只更新资源的部分内容，而不是整个资源。

这些请求方法都是 HTTP 协议的一部分，每种方法都有其特定的用途和语义，开发者可以根据实际需求选择合适的请求方法。

### 3、状态码

HTTP 状态码是服务器在响应中返回的数字代码，用来指示请求的结果：

- **2xx 成功**：
  - `200 OK`：请求成功，服务器返回请求的资源。
  - `201 Created`：请求成功，服务器创建了新的资源。
- **3xx 重定向**：
  - `301 Moved Permanently`：资源永久移动到新的位置。
  - `302 Found`：资源暂时移动到新的位置。
- **4xx 客户端错误**：
  - `400 Bad Request`：请求格式错误或无效。
  - `401 Unauthorized`：需要身份验证。
  - `404 Not Found`：请求的资源不存在。
- **5xx 服务器错误**：
  - `500 Internal Server Error`：服务器内部错误。
  - `503 Service Unavailable`：服务器当前无法处理请求，通常因为过载或维护。

### 4、请求消息

HTTP 请求消息（HTTP Request Message）是客户端向服务器发送的请求，用于获取资源、提交数据等。HTTP 请求消息由以下几个部分组成：

![An image](/img/http3.png)

#### 1. **请求行（Request Line）**

请求行包含了请求方法、请求目标（通常是 URI）和 HTTP 协议的版本。格式如下：

```
<请求方法> <请求目标> <HTTP版本>
```

例如：

```
GET /index.html HTTP/1.1
```

#### 2. **请求头部（Request Headers）**

请求头部包含了多个键值对，提供请求的附加信息，如客户端的类型、支持的媒体格式、授权信息等。每个请求头部占一行，格式如下：

```
<头部字段名>: <字段值>
```

常见的请求头部字段包括：

- `Host`: 指定服务器的域名（必须的）。
- `User-Agent`: 客户端的信息（如浏览器类型、操作系统等）。
- `Accept`: 客户端可接受的媒体类型。
- `Authorization`: 认证信息，如 Basic Auth 或 Bearer Token。
- `Content-Type`: 请求正文的数据格式（通常用于 POST、PUT 等方法）。

示例：

```
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml
```

#### 3. **空行**

请求头部结束后有一个空行，表示请求头部的结束，空行后可以包含请求正文。

#### 4. **请求正文（Request Body）**

请求正文包含要发送给服务器的数据，通常用于 POST、PUT 等方法。正文可以是表单数据、JSON、XML 等格式。对于 GET 请求，通常没有请求正文，参数通过 URI 传递。

示例：

```json
{
  "username": "user1",
  "password": "mypassword"
}
```

**示例完整的 HTTP 请求消息**

```
POST /login HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Content-Type: application/json
Content-Length: 34

{
  "username": "user1",
  "password": "mypassword"
}
```

在这个示例中，客户端通过 POST 方法向服务器发送登录信息，服务器会根据接收到的信息作出相应的处理。

### 5、响应消息

HTTP 响应消息（HTTP Response Message）是服务器对客户端发出的请求所返回的消息。它由以下几个部分组成：

![An image](/img/http4.png)

#### 1. **状态行（Status Line）**

状态行包含了 HTTP 协议版本、状态码和状态描述。格式如下：

```
<HTTP版本> <状态码> <状态描述>
```

例如：

```
HTTP/1.1 200 OK
```

- **状态码**：是一个三位数字，用于表示服务器对请求的处理结果。常见状态码包括：
  - `200 OK`：请求成功，服务器返回所请求的资源。
  - `301 Moved Permanently`：请求的资源已被永久移动到新位置。
  - `404 Not Found`：服务器找不到请求的资源。
  - `500 Internal Server Error`：服务器内部错误，无法完成请求。

#### 2. **响应头部（Response Headers）**

响应头部包含多个键值对，提供响应的附加信息，如服务器类型、内容类型、缓存控制等。每个响应头部占一行，格式如下：

```
<头部字段名>: <字段值>
```

常见的响应头部字段包括：

- `Date`: 响应的日期和时间。
- `Server`: 服务器的信息（如软件名称和版本）。
- `Content-Type`: 响应内容的 MIME 类型（如`text/html`, `application/json`）。
- `Content-Length`: 响应内容的长度（字节数）。
- `Set-Cookie`: 设置 HTTP Cookie，通常用于会话管理。

示例：

```
Date: Tue, 27 Aug 2024 12:28:53 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 138
```

#### 3. **空行**

响应头部结束后有一个空行，表示响应头部的结束，空行后紧跟响应正文。

#### 4. **响应正文（Response Body）**

响应正文是服务器返回的实际数据，通常是 HTML 页面、JSON 数据、图像或其他类型的资源。响应正文的内容由`Content-Type`头部字段指定的类型决定。

例如，如果请求的是一个 HTML 页面，响应正文可能是：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

**示例完整的 HTTP 响应消息**

```
HTTP/1.1 200 OK
Date: Tue, 27 Aug 2024 12:28:53 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 138

<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <h1>Hello, world!</h1>
</body>
</html>
```

在这个示例中，服务器返回了一个成功的响应（状态码 200），并且返回了一个简单的 HTML 页面作为响应正文。

HTTP 响应消息通常是客户端与服务器交互的结果，客户端会根据响应消息的内容来进一步处理，例如渲染网页、解析数据、显示错误信息等。

### 6、请求格式

HTTP 请求的数据格式由 `Content-Type` 头部字段指定，`Content-Type` 告诉服务器请求正文的媒体类型（MIME 类型），以便服务器正确解析请求数据。常见的 `Content-Type` 值有以下几种：

#### 1. **`application/x-www-form-urlencoded`**

- 用途：这是最常见的表单数据提交格式，通常用于 `POST` 请求。
- 数据格式：键值对通过`&`分隔，键和值通过`=`连接，数据会自动进行 URL 编码（如空格转换为`+`，特殊字符会被编码）。
- 示例：
  ```
  name=John+Doe&age=23
  ```

#### 2. **`multipart/form-data`**

- 用途：用于上传文件和表单数据的混合提交，常用于 `POST` 请求。每个部分可以有不同的 `Content-Type`。
- 数据格式：数据分成多个部分，每部分以 `boundary` 分隔，每个部分包含字段名、字段值或文件内容。
- 示例：

  ```
  Content-Disposition: form-data; name="file"; filename="example.txt"
  Content-Type: text/plain

  (file content)
  ```

#### 3. **`application/json`**

- 用途：用于发送 JSON 格式的数据，通常用于 API 请求。
- 数据格式：请求正文为 JSON 字符串，键值对表示复杂的嵌套数据结构。
- 示例：
  ```json
  {
    "name": "John Doe",
    "age": 23
  }
  ```

#### 4. **`application/xml`**

- 用途：用于发送 XML 格式的数据，适用于需要严格数据结构和验证的场景。
- 数据格式：请求正文为 XML 格式，类似于 HTML，但用于表示结构化数据。
- 示例：
  ```xml
  <person>
    <name>John Doe</name>
    <age>23</age>
  </person>
  ```

#### 5. **`text/plain`**

- 用途：用于发送纯文本数据，数据未进行格式化。
- 数据格式：请求正文为普通文本，不进行任何编码或格式化。
- 示例：
  ```
  Just some plain text.
  ```

#### 6. **`application/octet-stream`**

- 用途：用于发送二进制数据（如文件、图像等），数据以二进制流的形式发送，适合下载或上传文件。
- 数据格式：请求正文为二进制数据，不经过任何编码。
- 示例：没有特定的文本示例，直接是二进制数据流。

#### 7. **`text/html`**

- 用途：用于发送 HTML 格式的文本，通常在表单数据提交中不常见，但有时用于发送 HTML 文档。
- 数据格式：请求正文为 HTML 代码。
- 示例：
  ```html
  <html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>
  ```

每种 `Content-Type` 值都有其特定的使用场景，开发者需要根据具体情况选择合适的格式来传递数据，以确保服务器能正确处理和解析请求数据。

## 三、form表单和Ajax

### 1、form表单

通过 HTML 的 `<form>` 表单提交数据是最常见的与服务器进行交互的方式之一。表单提交可以通过 `GET` 或 `POST` 方法来发送数据。下面是一些基础知识以及示例代码，帮助你理解如何通过表单提交数据。

#### 1. **基本表单结构**

一个基本的 HTML 表单通常包含各种输入字段，例如文本框、复选框、下拉菜单等，以及一个提交按钮。表单的结构如下：

```html
<form action="服务器接收数据的URL" method="POST">
    <label for="username">用户名:</label>
    <input type="text" id="username" name="username">
    
    <label for="email">邮箱:</label>
    <input type="email" id="email" name="email">

    <input type="submit" value="提交">
</form>
```

- **`action` 属性**：指定表单数据提交的目标 URL（服务器地址）。
- **`method` 属性**：指定表单数据的提交方式。常用值有：
  - `GET`：将表单数据附加到 URL 中，以查询字符串的形式发送。
  - `POST`：将表单数据包含在请求正文中发送，适用于提交较大或敏感数据。

#### 2. **表单提交方式**

##### **使用 GET 提交**

- 数据会以查询字符串的形式附加在 URL 后面。
- 适用于查询操作或对数据安全性要求不高的场景。
- 示例：

```html
<form action="/search" method="GET">
    <label for="query">搜索:</label>
    <input type="text" id="query" name="query">
    <input type="submit" value="搜索">
</form>
```

当用户提交表单时，浏览器会将数据附加到 URL，例如：

```
/search?query=keyword
```

##### **使用 POST 提交**

- 数据在请求正文中发送，URL 中不会包含提交的数据。
- 适用于提交表单、上传文件或发送敏感信息等场景。
- 示例：

```html
<form action="/submit" method="POST">
    <label for="username">用户名:</label>
    <input type="text" id="username" name="username">
    
    <label for="password">密码:</label>
    <input type="password" id="password" name="password">
    
    <input type="submit" value="登录">
</form>
```

当用户提交表单时，浏览器会将数据包含在 HTTP 请求的正文中发送。

#### 3. **处理不同类型的数据**

- **文本输入 (`<input type="text">`, `<textarea>`)**：发送文本数据。
- **密码输入 (`<input type="password">`)**：用于敏感信息的输入。
- **选择框 (`<input type="checkbox">`, `<input type="radio">`)**：发送布尔值或单选值。
- **下拉菜单 (`<select>`)**：发送选中的选项值。
- **文件上传 (`<input type="file">`)**：上传文件，需使用 `enctype="multipart/form-data"`。

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
    <label for="file">选择文件:</label>
    <input type="file" id="file" name="file">
    <input type="submit" value="上传">
</form>
```

#### 4. **表单提交后的处理**

- **服务器端接收数据**：服务器会根据请求方法和数据格式解析提交的数据，并执行相应的处理（如存储数据库、发送邮件等）。
- **客户端反馈**：服务器通常会返回一个响应（例如成功页面或错误消息），浏览器会根据服务器响应更新页面。

`form`表单提交，每次提交都会刷新页面，用户体验可能显得不够流畅，因此现代浏览器推荐使用Ajax和Axios进行异步提交。

### 2、Ajax 是什么？

**Ajax**（Asynchronous JavaScript and XML）是一种用于创建动态网页应用的技术。和传统表单提交相比，它允许网页在不重新加载整个页面的情况下与服务器进行异步通信。通过 Ajax，网页可以部分更新内容，从而提高用户体验和交互效率。

#### Ajax 的主要特点

1. **异步通信**：Ajax 允许在后台发送和接收数据，而不阻塞用户操作。用户可以继续与页面进行交互，而不必等待服务器响应。

2. **局部刷新**：通过 Ajax，网页可以仅更新页面的部分内容，而不是重新加载整个页面。这减少了服务器负载和网络带宽的使用，提升了页面响应速度。

3. **跨浏览器支持**：Ajax 基于 JavaScript 和 XMLHTTP，几乎在所有现代浏览器中都得到支持，且可以处理多种数据格式，如 JSON、XML、HTML、纯文本等。

#### Ajax 的工作原理

1. **创建 XMLHttpRequest 对象**：Ajax 通过 `XMLHttpRequest` 对象（或在现代浏览器中通过 `fetch` API）与服务器通信。这个对象允许发送 HTTP 请求并接收响应。

2. **配置请求**：使用 `XMLHttpRequest` 对象的方法如 `open()` 来配置请求的类型（GET、POST 等）、目标 URL 和是否异步。

3. **发送请求**：调用 `send()` 方法将请求发送到服务器。可以传递数据作为参数（通常用于 POST 请求）。

4. **监听响应**：使用 `onreadystatechange` 事件或 `fetch` 的 `.then()` 方法来处理服务器的响应。通过检查 `readyState` 和 `status` 来确定请求是否完成以及是否成功。

5. **处理响应数据**：一旦接收到响应数据，通常会将其解析为所需格式（如 JSON）并更新页面内容。

#### Ajax 请求的示例

使用 `XMLHttpRequest` 的简单示例：

```javascript
// 创建 XMLHttpRequest 对象
var xhr = new XMLHttpRequest();

// 配置请求：GET 请求，目标 URL，异步
xhr.open("GET", "https://api.example.com/data", true);

// 监听响应
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // 请求成功，处理响应数据
    var responseData = JSON.parse(xhr.responseText);
    console.log(responseData);
  }
};

// 发送请求
xhr.send();
```

使用现代 `fetch` API 的示例：

```javascript
// 发送 GET 请求
fetch("https://api.example.com/data")
  .then((response) => response.json()) // 解析为 JSON
  .then((data) => {
    // 请求成功，处理响应数据
    console.log(data);
  })
  .catch((error) => console.error("Error:", error)); // 处理错误
```

#### Ajax 的应用场景

- **实时数据加载**：如新闻网站的实时更新、社交媒体的动态内容刷新。
- **表单验证**：用户提交表单前，通过 Ajax 检查用户名是否已存在或验证邮箱格式。
- **自动完成**：搜索框输入时，自动向服务器请求相关关键词并显示建议。
- **无刷新分页**：加载下一页内容时，通过 Ajax 获取数据并追加到页面中，而无需刷新整个页面。

#### 现代发展

虽然 Ajax 这个术语最初包含了 XML，但如今 JSON 已经取代 XML 成为最流行的数据格式。此外，随着 JavaScript 的发展，`fetch` API 逐渐替代了 `XMLHttpRequest`，提供了更简洁和现代的方式进行异步 HTTP 请求。Ajax 技术仍然是构建动态和响应式网页应用的重要工具。

## 三、Axios和跨域

### 1、什么是Axios？

**Axios** 是一个基于 Promise 的 JavaScript HTTP 客户端，用于在浏览器和 Node.js 中发送 HTTP 请求。它提供了一个简洁的 API，用于执行各种类型的 HTTP 请求，并自动处理常见任务，如 JSON 数据的转换、请求取消、超时处理等。Axios 非常流行，广泛用于前端开发中，尤其是在与 RESTful API 交互时。

#### Axios 的主要特点

1. **基于 Promise**：Axios 使用 Promise 对象来处理异步操作，使代码更简洁和易读，方便链式调用。
  
2. **支持多种请求方式**：Axios 支持常见的 HTTP 请求方法，如 `GET`、`POST`、`PUT`、`DELETE`、`PATCH` 等。

3. **自动转换 JSON 数据**：Axios 自动将请求数据转换为 JSON 格式，并将响应数据解析为 JSON 对象。

4. **支持请求和响应拦截器**：你可以在请求发送前或响应返回前拦截并处理数据，例如在请求头中添加授权 token。

5. **自动处理请求的超时和取消**：Axios 支持设置请求的超时时间，并且可以手动取消请求。

6. **跨浏览器支持**：Axios 在现代浏览器和老旧浏览器中都能良好运行。

7. **CSRF 保护**：Axios 可以自动处理跨站请求伪造（CSRF）保护的相关工作。

#### 安装 Axios

你可以通过 npm 或 yarn 安装 Axios：

```bash
npm install axios
# 或
yarn add axios
```

在 HTML 文件中，也可以直接使用 CDN 引入 Axios：

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

#### Axios 的基本使用

**发送 GET 请求**

```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

**发送 POST 请求**

```javascript
axios.post('https://api.example.com/data', {
    name: 'John Doe',
    age: 30
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

**使用 async/await 语法**

```javascript
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

#### 配置 Axios

你可以为 Axios 实例配置默认值，或者为特定请求配置参数：

```javascript
// 创建带有全局配置的 Axios 实例
const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: {'Authorization': 'Bearer token123'}
});

// 使用实例发送请求
instance.get('/data')
  .then(response => {
    console.log(response.data);
  });
```

#### 拦截器

Axios 允许你在请求或响应被处理之前拦截它们：

```javascript
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在请求发送前做些什么
  config.headers['Authorization'] = 'Bearer token123';
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做些什么
  return response;
}, error => {
  // 对响应错误做些什么
  return Promise.reject(error);
});
```

#### 请求取消

你可以通过 `CancelToken` 取消请求：

```javascript
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/data', {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  })
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    console.log('Error:', thrown.message);
  }
});

// 取消请求
cancel('Operation canceled by the user.');
```

#### 总结

Axios 是一个功能强大且灵活的 HTTP 客户端，适合处理前端开发中几乎所有的 HTTP 请求场景。通过其简洁的 API 和强大的功能，你可以轻松地与服务器进行交互，并管理复杂的异步操作。

### 2、跨域问题

浏览器的跨域问题（Cross-Origin Resource Sharing，简称 CORS）指的是由于浏览器的同源策略（Same-Origin Policy）限制，网页不能从不同的域（协议、域名、端口三者任意一个不同）中请求资源。这是一种浏览器安全机制，用来防止恶意网站窃取用户数据或发起攻击。

#### 同源策略

同源策略是一种安全策略，它限制了一个网页可以与同一源的文档或脚本进行交互。这意味着协议、域名和端口必须完全相同。只有在同源的情况下，网页才能够访问其他网页的资源，例如：

- `http://example.com` 和 `http://example.com/page` 是同源的。
- `http://example.com` 和 `https://example.com` 不是同源的（协议不同）。
- `http://example.com` 和 `http://sub.example.com` 不是同源的（子域不同）。
- `http://example.com` 和 `http://example.com:8080` 不是同源的（端口不同）。

#### 跨域问题

当你的网页尝试通过 JavaScript 访问不同域的资源（例如，通过 AJAX 请求或从 `<script>` 标签加载脚本）时，浏览器会阻止这种行为，除非目标服务器明确允许这种跨域请求。

#### CORS（跨源资源共享）

**CORS** 是一种机制，它允许服务器指定哪些源（域）可以访问服务器上的资源。这是通过设置响应头来实现的。CORS 允许服务器控制哪些请求可以跨域访问，以及允许哪些 HTTP 方法和请求头。

#### CORS 响应头

服务器可以通过设置特定的 HTTP 头来控制 CORS 策略：

- **`Access-Control-Allow-Origin`**：指定允许哪些源访问资源。可以是具体的域名或 `*`（表示允许所有域名访问）。如果不设置这个头，默认情况下浏览器会阻止跨域请求。

  ```http
  Access-Control-Allow-Origin: https://example.com
  ```

- **`Access-Control-Allow-Methods`**：指定允许的 HTTP 方法，例如 `GET`、`POST`、`PUT`、`DELETE` 等。

  ```http
  Access-Control-Allow-Methods: GET, POST, PUT
  ```

- **`Access-Control-Allow-Headers`**：指定允许的请求头字段。

  ```http
  Access-Control-Allow-Headers: Content-Type, Authorization
  ```

- **`Access-Control-Allow-Credentials`**：指定是否允许携带凭证（如 Cookies）。如果为 `true`，浏览器会允许请求携带凭证。

  ```http
  Access-Control-Allow-Credentials: true
  ```

- **`Access-Control-Expose-Headers`**：指定哪些响应头可以被浏览器访问。

  ```http
  Access-Control-Expose-Headers: X-Custom-Header
  ```

- **`Access-Control-Max-Age`**：指定预检请求（OPTIONS 请求）的结果缓存多长时间（秒）。

  ```http
  Access-Control-Max-Age: 86400
  ```

#### 预检请求

对于某些跨域请求（特别是使用了 `PUT`、`DELETE` 方法，或请求中包含了自定义头部），浏览器会先发送一个预检请求（OPTIONS 方法）来检查服务器是否允许实际请求。这称为“预检请求”。

#### 示例

```http
OPTIONS /resource HTTP/1.1
Host: example.com
Origin: https://yourdomain.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-Custom-Header
```

服务器响应预检请求：

```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://yourdomain.com
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-Custom-Header
```

#### 解决跨域问题的方法

1. **服务器配置 CORS**：最常见的方法是配置服务器的 CORS 响应头，允许来自特定域的请求。

2. **JSONP**：JSONP（JSON with Padding）是一种老旧的技术，用于绕过同源策略的限制。它通过 `<script>` 标签来加载跨域的数据，但只支持 `GET` 请求。现代浏览器和 API 设计中，JSONP 已经逐渐被 CORS 取代。

3. **代理服务器**：在开发过程中，你可以设置本地代理服务器，将请求代理到目标服务器，这样浏览器只会和代理服务器交互，而不会直接进行跨域请求。

4. **浏览器扩展**：有些浏览器扩展可以暂时禁用同源策略，用于开发和调试。注意，这不应在生产环境中使用，因为它会降低安全性。

#### 示例代码

**前端代码**（发送跨域请求）：

```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  credentials: 'include'  // 如果需要携带凭证
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

**服务器端代码**（Node.js 示例）：

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 允许所有域
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/data', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

总结，跨域问题是浏览器安全机制的一部分，用来防止恶意攻击。CORS 是解决跨域问题的标准方式，通过在服务器上配置响应头来控制跨域访问。


