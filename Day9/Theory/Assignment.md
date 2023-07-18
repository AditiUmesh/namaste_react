# Q. When and why do we need lazy()?

Lazy loading is a design pattern. It allows to load parts of application on demand to resuce the initial load time.

If the react application size is huge and to optimize it we use lazy().
Lazy can be used for each layout or page, while using routes it takes some time to render and lazy can be used at that time.


# Q. What is suspense?

React Suspense is a React component that suspends a component(‘s) being render until a certain condition has been met, and will display a fallback option.
This fallback option is required, and it may be a string or another React component such as a spinner.
React Suspense only works with dynamic importing, aka lazy loading.

```
import React from 'react';

// Dynamic import()
const AboutUs = React.lazy(() => import('../../src/components/AboutUs'));

// Displays "loading..." to the user until CatAvatar
// has finished loading.
const AppContainer = () => (
  <React.Suspense fallback="loading...">
    <AboutUs />
  </React.Suspense>
);
```


# Q. Why we got this error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with loading indicator. To fix, updates that suspend should be wrapped with startTransition?How does suspense fix this error?

With the introduction of lazy loading, initially when the app loaded there was only file, when we made a call to another component it took some time(seconds) to load the file since react is fast it threw the error. To avoid this error suspense can be used along with lazy loading.


# Q Advantages and disadvantages of using this code splitting pattern

Advantages:
Code splitting can provide several advantages such as faster initial loading, better caching and enchanced user experience

Disadvantages:
If we choose too many split points we may end up having large number of smaller chunks that increase the overhead of network requests and reduce the enefits of caching.
If we choose few split points we may end up having too few large chuncks that increase the loading time and bandwidth.


# Q When do we and why do we need suspense?

The biggest problem with JavaScript applications is the hefty payload users have to pay to download & execute the code.
This is extremely expensive to users with weak devices, and network connections.
This is why code splitting JavaScript application is extremely useful.
React.lazy makes it really simple to tell Webpack and our application that certain files, and code can be loaded later in the application.
This will help reduce the initial size of code being shipped to the user.
But with that comes another problem.
As a user is navigating through the JavaScript application, and the code is being loaded on runtime, the user has to experience a delay until the network has finished loading and executing the next chunk of JavaScript code.
This is where React.Suspense comes in handy, and displays a graceful loading state to the user.
React.Suspense lets your users know that it’s loading the next chunk, will be with you shortly!
