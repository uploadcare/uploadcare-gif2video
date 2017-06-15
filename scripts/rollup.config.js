import {join} from 'path'
import filesize from 'rollup-plugin-filesize'
import babili from 'rollup-plugin-babili'
import license from 'rollup-plugin-license'

const isProduction = process.env.BUILD === 'production'

let plugins = [
  filesize(),
  license({banner: {file: join(__dirname, 'rollup.banner.txt')}}),
]

if (isProduction) {
  plugins.splice((plugins.length - 2), 0, babili({comments: false}))
}

export default {
  entry: 'index.js',
  dest: `dist/${process.env.npm_package_config_name}${(isProduction ? '.min' : '')}.js`,
  sourceMap: !isProduction,
  format: 'umd',
  moduleName: process.env.npm_package_config_library,
  plugins,
}
