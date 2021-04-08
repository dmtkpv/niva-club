module.exports = {

    devServer: {
        static: 'dist',
        compress: true,
        port: 49050
    },

    output: {
        library: 'MindMap',
        libraryTarget: 'umd',
        libraryExport: 'default',
        filename: 'mindmap.js'
    }

};
