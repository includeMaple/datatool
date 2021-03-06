import {uglify} from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import {configs} from './config';
import resolve from 'rollup-plugin-node-resolve';


export default {
  input: configs.entry,
  output: {
    name: 'dataTools',
    file: configs.out+'.min.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    uglify(),
    babel({
      // exclude: 'node_modules/**',
    })
  ]
}
