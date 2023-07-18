# Q: What are various ways to `add images` into our App? Explain with `code examples`.

Using the `full URL of the image` for the web (CDN) or any public images.
Example : 
```
<img src="https://reactjs.org/logo.png" alt="React Image" />
```

By storing all the images in an `images` folder of the project. 
```
import reactLogo from "../../images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

# Q: What would happen if we do console.log(useState()).
    
`console.log(useState())` would return a array `[undefined,f]` where the state is undefined and the function is bound dispatchSetState


# Q: How will `useEffect` behave if we don't add a `dependency array`.

Case 1. When there is `no dependency` the `useEffect` would be called everytime the component renders 
```
useEffect(()=>{
    console.log('use effect called everytime)
})
```

Case 2. When there is an `empty dependency` array the useEffect would be called on the initial render(just once)
```
   useEffect(()=>{
    console.log('use effect called on initial render)
},[])
```

Case 3. When there is a `condition in the dependency array` the useEffect would be called every time the dependency changes
```
   useEffect(()=>{
    console.log('use effect called when dependency changes)
},[btnName])
```


# Q: What is SPA.

A Single Page Application is a we application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server, instead of reloading of the browser for new pages.


# Q: What is difference between Client Side Routing and Server Side Routing?

In Server side routing needs to keep making requests to the server in order for the application to rerender
In client side routing doesn't make request to the server, the request is made once when the application is being loaded into the browser.
