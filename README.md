# Gatsby (VERSION CON GRAPHQL Y A11 ESLINT)

1. Implementacion de los plugin requeridos para la practica 

```js

`gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        name: "Articles",
        typePrefix: "api",
        data: {
          ns: "posts",
          method: "articles",
        },
        url: "https://jsonplaceholder.typicode.com/posts", //Ejemplo
        method: "GET",
        auth: false,
        headers: {
          "Content-Type": "application/json",
        },
        verboseOutput: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
```

2. Configuracon del ESLINT 

```js
{
    "rules": {
        "no-anonymous-exports-page-templates": "warn",
        "limited-exports-page-templates": "warn",
        "jsx-a11y/rule-name": 2
    },
    "extends": ["plugin:jsx-a11y/recommended"]
}
```

3. Devolver datos desde un json con el plugin 

![JSON](/src/images/json.png)

4. Devolver datos desde una api con el plugin 

```js
    {
      resolve: "gatsby-source-apiserver",
      options: {
        name: "Articles",
        typePrefix: "api",
        data: {
          ns: "posts",
          method: "articles",
        },
        url: "https://jsonplaceholder.typicode.com/posts", //Ejemplo
        method: "GET",
        auth: false,
        headers: {
          "Content-Type": "application/json",
        },
        verboseOutput: process.env.NODE_ENV !== "production",
      },
    }
```

![API](/src/images/api.png)

5. ESLINT A11 en funcionamiento

![A11](/src/images/a11.png)
