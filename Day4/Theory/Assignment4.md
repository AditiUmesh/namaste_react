Is JSX mandatory for React?
    JSX is not mandatory for React. Each JSX element is just syntactic sugar for calling React.createElement(component, props,...children)

const Header = React.createElement('h1', {}, "Hello React");
const root = ReactDOm.createRoot(document.getElementById("root"));
root.render(Header) 


Is ES6 mandatory for React?
    No, its not mandatory to learn ES6 for React, but its beneficial as it makes the code more readable and maintainable.

    To use React without ES6 we might need to install create-react-class module

    We need to create-react-class module in our file.
    Then we create a variable app that uses createReactClass API to define render function.
    var createReactClass = require('create-react-class');
    var Greeting = createReactClass({
        render: function(){
            return <h1> Hello world </h1>
        }
    })

How can I write comments in JSX?
 using /* */ we can comment JSX code

What is <React.Fragment></React.Fragment> and <></>?
    <React.Fragment> - is a feature in React that allows to return multiple elements from react component by allowing to group a list of children without adding extra nodes to the DOM.
<> </> -> is the shorthand tag for <React.Fragment>
Only difference is shorthand does not support key attribute

What is virtual DOM?
The Virtual DOM is a programming concept where an ideal or "virtual", representation of UI is kept in memory and synced with the "real" DOM by library such as ReactDOM. This is called reconciliation

What is Reconciliation in React?
Reconciliation is the algorithm behind what is popularly understood as "Virtual DOM".
React uses diffing algorithm so that components updates are faster.
 
React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by Diffing Algorithm

When the React application is rendered, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment -example, in case of browser application, its translated to set of Dom operations, When the app is updated(usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.  

What is React Fiber?
Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16.
The goal is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives. 
Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Why we need keys in React? When do we need keys in react?
Keys help to identify which items have changed(added/removed/updated/re-ordered).mTo give a unique identity to every element inside the array, key is required.

Can we use index as key in react?
It'ss not recommended to use index as key as it will cause issues when the component is deleted/re-ordered.

What is props in React? Way to
React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions

What is Config Driven UI?
Controlling the UI appearance based on data coming from the backend.

In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customise the UI for different use cases or user groups, without the need for extensive coding.

The configuration file or database may also define the data sources and the data to be displayed in the UI, as well as the interactions and behaviour of the UI components. This allows for greater flexibility and adaptability of the UI to different use cases, as the configuration data can be easily modified or replaced without affecting the underlying application logic