
const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
    style: {
        postcss: {
            mode: "extends",
            loaderOptions: {
                postcssOptions: {
                    ident: "postcss",
                    plugins: [
                        [
                            "postcss-px-to-viewport-8-plugin",
                            {
                                viewportWidth: 375, // 设计稿的视口宽度
                            },
                        ],
                    ],
                },
            },
        },
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            return webpackConfig
        },
        alias: {
            '@@': pathResolve('.'),
            '@': pathResolve('src')
            // 此处是一个示例，实际可根据各自需求配置
        }
    },
    plugins: [
    ]
}

