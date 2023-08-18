## Namaste-React
# Let's get hooked

# 1. What is the difference between Named Export, Default export and * as export?

    The export default syntax allows you to export a single value from a module as the default export.
    When another module imports the module that uses export default, the imported value will be whatever value was exported as the default. You can only have one default export per module.

    Eg.: // greetings.js
    `const greeting = "Hello, world!";
    export default greeting;
`
    // app.js
    `import greeting from "./greetings.js";
    console.log(greeting); // outputs "Hello, world!"`

    The export syntax with named exports allows you to export multiple values from a module using named exports. When another module imports the module that uses named exports, the imported values will be an object with the exported values as properties. You can have multiple named exports per module.

    // greetings.js
    `export const greeting = "Hello, world!";
    export const farewell = "Goodbye, world!";`

    // app.js
    `import { greeting, farewell } from "./greetings.js";
    console.log(greeting); // outputs "Hello, world!"
    console.log(farewell); // outputs "Goodbye, world!"`

    Note that when importing named exports, the import statement must use the exact name of the exported value, surrounded by curly braces.

# 2. What is the importance of config.js file?
    Having config file allows to access variables instantly and improves the maintainability of the codebase since all the variables are in the same file.

# 3. What are React Hooks?
    React Hooks are simple Javascript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

    React provides a bunch of standard in-built hooks:
    useState: To manage states. Returns a stateful value and an updater function to update it.
    useEffect: To manage side-effects like API calls, subscriptions, timers, mutations and more
    useContext: to return current value for a context
    useReducer: A useState alternative to help with complex state management 
    useCallback: it returns a memoized version of a callback to help a child component not re-render unnecessarily
    useMemo: it returns a memoized value that helps in performance optimizations.
    useRef: It returns a ref object with .current property. The ref object is mutable. It is mainly used to access a child component imperatively.

# 4. Why do we need a useState Hook?
    useState is a React Hook that allows to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
    const [state, setState] = useState(initialValue);
    Here, the initialValue is the value to start with and state is the current state that can be used in component. The setState function can be used to update the state, triggering a re-render of the component.