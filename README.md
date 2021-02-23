# Custom-Bulma
Customize bulma while adding a namespace to the classes

## Customize your build
* To customize your build edit `sass/custom.scss`
* Import the modules that you require

## Build
* Run `npm install` in the root directory
* Run `npm run css-build` to build your css
* The output will be stored in the `css` folder
* You can change the file name and directories from the `package.json` file

## Namespacing build
To namespace bulma open `index.js` and change the path of the indput and output files if required
Run `node index` to build your namespaced bulma