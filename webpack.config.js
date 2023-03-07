const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildPath = './build/';

module.exports = {
    entry: {
        main: './src/js/app.js',
        work: './src/js/work.js',
        project: './src/js/project.js',
        info: './src/js/info.js'
    },
    output: {
        path: path.join(__dirname, buildPath),
        filename: '[name].[hash].js',
        publicPath: `/${pkg.repository}/`,
        // assetModuleFilename: './src/images/[name][ext][query]'
    },
    target: 'web',
    devtool: 'source-map',
    stats: {
        warnings: false
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
            },
            // {
            //     test: /\.html$/,
            //     exclude: [path.resolve(__dirname, './node_modules/'), path.resolve(__dirname, './src/html/')],
            //     // exclude: [/node_modules/, require.resolve('./index.html')],
            //     use: {
            //         loader: 'file-loader',
            //         // query: {
            //         //     name: '[name].[ext]'
            //         // },
            //     }
            // },
            // {
            //     test: /\.html$/,
            //     use: ['html-loader'],
            //     exclude: [
            //             path.resolve(__dirname, './src/html/index.html'),
            //             path.resolve(__dirname, './src/html/work.html'),
            //         ]
            //         // exclude: path.resolve(__dirname, './src/html/'),
            // },
            // {
            //     test: /\.html$/,
            //     exclude: /node_modules/,
            //     use: [{
            //         loader: "html-loader",
            //         options: {
            //             sources: {
            //                 list: [{
            //                     tag: "source",
            //                     attribute: "src",
            //                     type: "src"
            //                 }]
            //             }
            //         }
            //     }]
            // },
            {
                test: /\.css$/,
                /** or /\.css$/i if you aren't using sass */
                use: [{
                        loader: 'style-loader',
                        options: {
                            insert: 'head', // insert style tag inside of <head>
                            injectType: 'singletonStyleTag' // this is for wrap all your style in just one style tag
                        },
                    },
                    "css-loader",
                ],
            },

            // for assets in three js
            {
                test: /\.(jpe?g|png|gif|svg|tga|gltf|babylon|mtl|pcb|pcd|prwm|obj|mat|mp3|ogg)$/i,
                use: 'file-loader',
                exclude: [
                    path.resolve(__dirname, './node_modules/'), path.resolve(__dirname, './src/images/'), path.resolve(__dirname, './src/thumbnails/')
                ]

            },
            {
                test: /\.mp4$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        esModule: false
                            // outputPath: "video"
                    }
                }]
            },

            // for assets in html pages
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                // use: 'file-loader',
                // options: {
                //     outputPath: '../images/' // Chage this like 'public/images' or any other relative path to the root
                // },
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '.',
                        esModule: false
                    }
                }],
                exclude: [path.resolve(__dirname, './src/components/')]

            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     // use: 'file-loader',
            //     // options: {
            //     //     outputPath: '../images/' // Chage this like 'public/images' or any other relative path to the root
            //     // },
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]',
            //             // outputPath: '/images/garlic/'
            //         }
            //     }],
            //     exclude: [
            //         path.resolve(__dirname, './node_modules/'),
            //         path.resolve(__dirname, './src/components/'),
            //         // path.resolve(__dirname, './src/images/'), 
            //         path.resolve(__dirname, './src/thumbnails/')
            //     ]

            // },

            {
                test: /\.(vert|frag|glsl|shader|txt)$/i,
                use: 'raw-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
            },
            {
                type: 'javascript/auto',
                test: /\.(json)/,
                exclude: path.resolve(__dirname, './node_modules/'),
                use: [{
                    loader: 'file-loader',
                }, ],
            },
            {
                test: /\.hdr$/,
                use: "url-loader",
                exclude: path.resolve(__dirname, './node_modules/'),
            }
        ],
    },
    resolve: {
        alias: {
            lights$: path.resolve(__dirname, 'src/components/lights'),
            objects$: path.resolve(__dirname, 'src/components/objects'),
            scenes$: path.resolve(__dirname, 'src/components/scenes'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: true,
            title: pkg.title,
            template: "./src/html/index.html",
            // css: "./src/css/home.css",
            favicon: './src/favicon.png',
            chunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: "work.html",
            title: "work",
            template: "./src/html/work.html",
            favicon: 'src/favicon.png',
            chunks: ["work"]
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: "info.html",
            title: "info",
            template: "./src/html/info.html",
            favicon: 'src/favicon.png',
            chunks: ["info"]
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: "garlic.html",
            title: "garlic",
            template: "./src/html/garlic.html",
            favicon: 'src/favicon.png',
            chunks: ["project"]
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: "fibonacci.html",
            title: "fibonacci",
            template: "./src/html/fibonacci.html",
            favicon: 'src/favicon.png',
            chunks: ["project"]
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: "alpaca.html",
            title: "alpaca",
            template: "./src/html/alpaca.html",
            favicon: 'src/favicon.png',
            chunks: ["project"]
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: "variations.html",
            title: "variations",
            template: "./src/html/variations.html",
            favicon: 'src/favicon.png',
            chunks: ["project"]
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: "tinder.html",
            title: "tinder",
            template: "./src/html/tinder.html",
            favicon: 'src/favicon.png',
            chunks: ["project"]
        }),


    ],
};