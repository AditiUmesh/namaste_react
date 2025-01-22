## Namaste-React
# Igniting the App

# 1. What is npm?

    npm is the world's largest software registry.
    The registry contains over 800,000 code packages.
    Open-source developers use npm to share software.

    npm is a package manager for the JavaScript programming language maintained by npm, Inc.
    npm is the default package manager for the JavaScript runtime environment Node.js.
    npm is installed with Node.js. means need to install Node.js to get npm installed on computer. 
    nom consists of a command line client that can be used to download and install software 
    npm install <package_name>
    and an online database of public and paid-for private packages, called the npm registry.
    npm doesn't stand for node package manager.
    All npm packages are defined in files called package.json
    At least two feilds must be there in the definition file: name and version

    npm can manage dependencies.
    npm can install all the dependencies of a project.
    Dependencies are also defined in package.json

# 2. What is 'Parcel/Webpack'? Why do we need it?

    Parcel and webpack are the bundlers used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application.
    Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

# 3. What is '.parcel-cache'?
    The .cache folder stores the information about our project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyse everthing from scratch. Its a key reason parcel can be so fast in development mode.

# 4. What is npx?

    NPX is package executor and it comes with npm
    npx is an npm package runner that can execute any package from the npm registry(NPX is a tool to execute node.js packages)

# 5. What is difference between 'dependencies' vs 'devDependencies'?

    dependency: packages that are needed for application to work in production
    devDependency: packages that are only needed in local development or testing

# 6. What is Tree Shaking?

    Parcel statically analyzes the imports and exports of each module and removes everything that isn't used.
    This is called "tree-shaking" or "dead code elimination".

# 7. What is Hot Module Replacement?

    `HMR`is feature which is enabled by parcel when we use parcel bundler.
    Its automatically rebuilds the changed files and updates the app in the browser 
    without fully refreshing the page in your browser. 
    It uses `file watcher algorithm` to keep track of file changes while development 
    and render those changes on the web page.
 
# 8. List down favourite 5 superpowers of Parcel and describe any 3 of them in own words.

    - Dev Server
    - Hot reloading
    - diagnostics
    - Minification
    - Bundling
    - reliable caching
    - Image Optimization
    - Compression
    - Code Splitting
    - Code hashing
    - differential bundling

    HMR: Its automatically rebuilds the changed files and updates the app in the browser 
    without fully refreshing the page in your browser. 

    Zero Config: It also gives to zero requirement while we using it first time.

# 9. What is 'gitignore'? What should we add and not add into it?
    A gitignore contains all the files which can be ignored while pushing the files to github

    the files which could be regenerated using other files should be added
    eg: node-module, parcel-cache, dist

    the files which cannot be regenerated and is needed for the app development and deployment should not be added. 
    eg.: package.json package-lock.json

# 10. What is the difference between package.json and package-lock.json?
    package.json is the configuration file for npm where the packages are installed
    package-lock.json keeps track of the exact version of packages that is being installed

# 11.Why sould I not modify 'package-lock.json'?

    it is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit package-lock. json to your code repository.

    - we should never modify the `package-lock.json` because its holds the actual detailed information about while development.
    - we should never add to that file inside .gitignore because that information required when we recreate that app.

# 12. What is node_modules? Is it a good idea to push that on git?
    The `node_modules` is folder which has all the dependencies like dependencies, devDependencies and transitive dependencies of packages required for a project.
    It's not a good idea to push node_modules on git as that folder is huge and it can be easily regenerated in the project with the help of package.json

# 13. What is the `dist` folder?
    The dist folder is automatically generated while building the project.
    It stores the compiled version of the code.

    There are two folders src folder and dist folder. They are used to store the source code and compiled code respectively. The src folder is where developers write their code and dist is where compiled code is stored. This ensures that the code is kept separate from the compiled version, making it easier to debug and maintain.

# 14. What is `browserlists`?

    `BrowserLists` is a tool or package which can specify the compatibilty of the application with the browser. we can also modify that browserlist by itself. ex- `"last 2 versions"` and `"last 2 chrome versions"` etc. Its means that it definetly works on `last 2 versions` properly but it also work on other version but not that much guarantee for other version working properly.

#  Note: Diff b/w `~` and `^` ?
    - `~`version = 	Approximately equivalent to version, i.e., only accept new patch versions(`~`1.1.2)
    - `^`version =	Compatible with version, i.e., accept new minor and patch versions(`^`1.1.3)
    - version  =   Must match version exactly(1.1.3)
