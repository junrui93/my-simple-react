# my-simple-react

Is a simple [ReactJS][1] starter project which includes:

- [ReactJS tutorial][2] source code
- [webpack][3] configuration (only development version now)
- [webpack dev server][4] with hot reloading

Which is depends on the following:

- [ReactJS][1]
- [Babel][5]
- [css-modules][6] (using webpack's css-loader)

Not including:

- [react-router][7] (because I don't assume client routing)
- [redux][8] or [flux][9]

## Getting started

    git clone https://github.com/junrui93/my-simple-react
    cd my-simple-react
    npm i
    npm start

Access http://localhost:8080/

![react tutorial screenshot][screenshot]

[1]: https://facebook.github.io/react/
[2]: https://facebook.github.io/react/tutorial/tutorial.html
[3]: https://webpack.github.io/
[4]: https://github.com/webpack/webpack-dev-server
[5]: https://babeljs.io/
[6]: https://github.com/css-modules/css-modules
[7]: https://github.com/ReactTraining/react-router
[8]: http://redux.js.org
[9]: https://facebook.github.io/flux/
[screenshot]: https://s16.postimg.org/sqikw3gph/Screen_Shot_2016_11_25_at_11_40_18_AM.png
