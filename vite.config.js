
import { resolve } from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import copy from 'rollup-plugin-copy'

export default {
    // base : '/',
    outDir: 'dist',
    assetsDir: '_',
    assetsInclude: ['**/*.m4a'],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    server: {
        open: true,
        host: '0.0.0.0',
        port: 7000,
        // proxy: {
        //     '/api': {
        //         target: 'http://127.0.0.1:8888',
        //         changeOrigin: true,
        //         rewrite: path => path.replace('^/api', '')
        //     }
        // }
    },
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
            },
            output: {
                // chunkFileNames: 'assets/js/chunk-[name]-[hash].js',
                // entryFileNames: 'assets/js/entry-[name]-[hash].js',
                // assetFileNames: 'assets/static/asset-[name]-[hash].[ext]',
                chunkFileNames: '_/[hash].js',
                entryFileNames: '_/[hash].js',
                assetFileNames: '_/[hash].[ext]',
                manualChunks(id) {
                    // console.log({id});
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            },
        },
        // 内联文件尺寸
        assetsInlineLimit: 4096,
    },
    plugins: [
        createVuePlugin(),
        copy({
            targets: [
              { src: './data/articles.json', dest: 'dist/data/' }, //执行拷贝
            ]
        })
    ]
}