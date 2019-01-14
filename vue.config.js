// This is to ensure that .svg files are base64
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('url-loader')
      .loader('url-loader')

    return config
  }
}
