1. What is Emmet?

Emmet is a set of plug-ins for text editors that allow for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist.
Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.

2. What is difference between framework and library?

A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.
Eg: Angular JS is a framework, React JS is library


3. What is CDN? Why do we use it?

A content delivery network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are. Data centers across the globe use caching, a process that temporarily stores copies of files, so that you can access internet content from a web-enabled device or browser more quickly through a server near you. CDNs cache content like web pages, images, and video in proxy servers near to your physical location. This allows you to do things like watch a movie, download software, check your bank balance, post on social media, or make purchases, without having to wait for content to load.
A CDN improves efficiency by introducing intermediary servers between the client and the website server. These CDN servers manage some of the client-server communications. They decrease web traffic to the web server, reduce bandwidth consumption, and improve the user experience of your applications.

4. Why is React known as React?

React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data. React was originally created by Facebook in 2011 for use in their own web applications, and it was released as an open-source project in 2013.
React's primary goal is to simplify the creation of complex, interactive user interfaces by breaking them down into smaller, reusable components. These components are built using a declarative syntax that allows developers to describe what the interface should look like at any given moment, and React takes care of efficiently updating the DOM (Document Object Model) as needed when the data changes.

The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

The name "React" also reflects the fact that the library is built around the concept of a unidirectional data flow, where changes in data flow down through the component hierarchy, triggering updates and re-renders as necessary. This approach helps to avoid common issues with two-way data binding, such as performance problems and hard-to-debug code.

5. What is cross-origin in the script tag?

The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

6. What is the difference between REACT and REACT-DOM?

React is a javascript library, designed for building user interfaces
React-DOM is a complimentary library to React which glues React to the browser DOM(ReactDOM is the JavaScript library that allows React to interact with the DOM.)

7. What is difference between react.development.js and react.production.js files via CDN?

The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.
The production build, on the other hand, runs in production mode which means this is the code running on client's machine. The production build runs uglify and builds source files into one or multiple minimized files. It also extracts CSS and images and of course any other sources you're loading with Webpack. There's also no hot reloading included. Source Maps might be included as separate files depending on webpack 

8. What are async and defer?
