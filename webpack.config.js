module.exports = {
    name: 'used-before-initialization',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    compiler: 'ttypescript',
                },
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
        ],
    },
    devtool: false,
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.mjs'],
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    mode: 'development',
    target: 'node'
};
