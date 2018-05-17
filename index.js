if (process.env.NODE_ENV === "dev") 
{
    require("babel-register")({
        plugins: [],
        presets: ["env"]
    });

    module.exports = require("./src/index");
}
else 
{
    module.exports = require("./lib");
}