## Namaste-React
# Exploring the world
# Q. What is microservice
  A microservice architecture is a type of application architecture where the application is developed as a collection of services. It provides the framework to develop, deploy, and maintain microservices architecture diagrams and services independently.

# Q. What is monolith architecture
  Monolith means composed all in one piece. The monolith application describes a single-tiered software application in which different components combined into single program from a single platform.
  Components can be: authorization, database,UI,notification

# Q. What is the difference between monolith and microservice
  Deployment and Management:
  `monolith` are simple to deploy and manage, since all components are included in a single package
  `microservice` are complex to deploy and manage, since each service is deployed independently and must communicate with other services over a network

  easy to understand
  `monolith` is easy to understand the entire system, since all components are integrated tightly
  `microservice` is difficult to understand the flow in microservice because of multiple services

  coupling
  `monolith` architecture components are tightly coupled which makes it difficult to make changes to the application without causing unintended consequences
  `microservice` promotes low coupling, its also easier to make changes to the application, since each service is responsible for specific business capability

# Q Why do we need useEffect() hook
  `useEffect()` hook is used to manage side effects (like fetching data, setting up event listeners, or updating the DOM) in functional component

# Q What is optional chaining
  The `optional chaining(?)` operator accesses an object's property or calls a function. If the object accessed or function called usng this operator is `undefined` or `null` the expression short circuits and evaluates to `undefined` instead of throwing error.

 # Q What is Shimmer UI
  A Shimmer UI is version of UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear.

# Q What is the difference between JS expression and JS statement
  Statement represent an action or command e.g. print statements, assignment statements. Expression is a combination of variables, operations and values that yields a result value

# `Q What is conditional rendering, explain with code example
  Conditional rendering is the process of displaying different content based on certain condition or states.
  ```if (listOfRestro.length === 0) {
    return <Shimmer />;
  }```

# Q What is CORS
  Cross-Orgin Resource sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins(domain,scheme, or port) other than its own from which a browser should permit loading resources.

# Q What is async await
  Async await are built on promises. The keyword "async" accompanies the function, indicating that it returns a promise, within the function, the await keyword is applied to the promise being returned. The await keyword ensures that the function waits for the promise to resolve.

# Q What is the use of const json= await data.json() in getRestaurants()
  Fetch API allows to make request to other API's It is a web API that uses promises to make network request over HTTP(same origin or cross-origin requests can be made using fetch api).

  The fetch API uses two object `Request` and `Response`. The `response` object holds the data sent by the API. Fetch sends the `request` and returns a promise, which is resolved to the response object when request completes.
  The reponse object returned by await fetch supports multiple functions for different data formats. ex. response.json , response.text (all these functions return a promise which resolves into specific data format).To extract the API response we will use await keyword.   
