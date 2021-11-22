module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/tnt-vue-ztree/' : '/',
  css: {
    extract: false
  }
}
