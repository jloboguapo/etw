# etw
### Project setup
```
yarn
```

#### Compiles and hot-reloads for development
```
yarn dev
```

#### Compiles and minifies for production
```
yarn postinstall
```

#### Lints and fixes files
```
yarn lint
```

#### Contentful

We use Contentful to host all of the text, data, content, etc.  Routes.js grabs all of the entries
and builds the routes per page (path, title, id, and pageLayout) and then builds the correct component
per the id.  
