const postcss = require("postcss");
const prefixer = require("postcss-prefixer");
const fs = require("fs");

fs.readFile("./css/bulma-custom.css", (err, css) => {
    postcss([
        prefixer({
            prefix: "bu-"
        })
    ])
        .process(css, { from: "./css/bulma-custom.css", to: "./css/bu-custom.css" })
        .then((result) => {
            fs.writeFile("./css/bu-custom.css", result.css, () => true);
        });
});
