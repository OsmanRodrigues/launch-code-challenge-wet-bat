import * as path from 'path'
import * as webpack from 'webpack'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'

const config: webpack.Configuration = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'node',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'ts',
                    target: 'es6',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()],
        fallback: {
            path: false,
            crypto: false,
            buffer: false,
            url: false,
            stream: false,
            util: false,
            assert: false,
            querystring: false,
            http: false,
            zlib: false,
            fs: false,
            net: false,
        },
    }
}

export default config
