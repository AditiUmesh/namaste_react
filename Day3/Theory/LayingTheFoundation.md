## Namaste React
# Laying the foundation

# 1. What is JSX?

    JSX stands for Javascript XML and it is a very useful tool for React developers. JSX is an extension of the JavaScript language which provides a way to structure component rendering using syntax similar to HTML. JSX gives us the ability to write HTML elements in Javascript and place them in the DOM by converting the HTML tags into React elements without the need for other methods like createElement()

    Without JSX:

    `const heading = React.createElement("h1", {}, "Namaste React");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading)`

    With JSX:

    `const heading = <h1> Namaste React </h1>
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading)`

# 2. Superpowers of JSX?
    JSX gives us the ability to write the HTML inside the javascript and place them in DOM by converting HTML tags to react elements.
    JSX is easy to maintain compared to React.createElement

# 3.Role of type attribute in script tag? What options can I use there?

    The type attribute specifies the type of script
    The type attribute identifies the content between the <script> and </script>

    `<script type="scripttype"></script>`

# 4. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent> </TitleComponent>} in JSX

    {TitleComponent} -> is the javascript expression or a variable.React Element are called inside the {} so that it would be returning us the value of the react element
     
    {<TitleComponent/>}  -> is the Component returning some JSX code. Components are written inside the < /> braces.

    {<TitleComponent> </TitleComponent>} -> is same as {<TitleComponent/>} with child components inside it.  


    <div>
    <h1></h1>
    <h2></h2>
    <h3></h3>
    </div>