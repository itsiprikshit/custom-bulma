# Custom Bulma
Customize bulma while adding a namespace to the classes

## Customize your build
* To customize your build edit `sass/custom.scss`
* Import the modules that you require

## Build
* Run `npm install` in the root directory
* Run `npm run css-build` to build your css in the root directory
* The output will be stored in the `css` folder
* You can change the file name and directories from the `package.json` file

## Namespacing build
Uses [postcss-prefixer](https://github.com/marceloucker/postcss-prefixer#readme) to namespace bulma <br/>
To namespace bulma open `index.js` and change the path of the input and output files (if required) <br/>
You can also change the prefix value in this file, currently it is set to `bu-` <br/>
To build your namespaced bulma, run the following command in the root directory <br />
Run `node index` from root