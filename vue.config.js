const path = require('path');

module.exports = {
    pages: {
        // 複数のページを設定することができる
        index: {
            // エントリーポイント
            entry: 'src/main.js',
            // テンプレートファイル
            template: 'public/index.html',
            // 出力されるファイル名
            filename: 'index.html',
            // titleテキスト テンプレートファイル内の以下が置換される。
            // <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // チャンクの指定
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // Stringのみで設定もできる。
        // テンプレートファイルは、 `public/subpage.html`
        // public/subpage.htmlがなかったら `public/index.html`が呼び出される。
        // 出力されるファイル名は `subpage.html`となる。
        // subpage: 'src/subpage/main.js'
    },
    // 静的ファイルはキャッシュ制御のためにファイル名にハッシュをつけるかどうか。
    // デフォルトでtrueなので、falseの場合のみ指定
    filenameHashing: false,
    // webpack の devServerの設定をかける
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'public'),
        host: 'localhost',
    },
    css: {
        // 毎回読み込んでおくscssファイルの指定
        // 変数設定など、cssの出力がないもの
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/val.scss";`
            }
        }
    },
    // webpack の設定
    configureWebpack: {
        resolve: {
            alias: {
                // 'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve(__dirname, 'src/'),
            }
        },
        plugins: [
            // plugin
        ]
    }
}