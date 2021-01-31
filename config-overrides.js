const path = require("path");

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    const istanbulLoader = {
        test: /\.js$/,
        loader: 'istanbul-instrumenter-loader',
        options: {
            esModules: true
        },
        include: path.resolve('src/'),
        exclude: [
        ],
        enforce: "post",
    };
    if (!config.module.rules) {
        config.module.rules = [istanbulLoader];
    } else {
        config.module.rules.push(istanbulLoader);
    }
    return config;
}
