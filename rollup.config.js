import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import builtins from '@joseph184/rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import { terser } from "rollup-plugin-terser";

export default {
  external: [],
  input: 'src/entry/index.js',
  output: [
    // umd，第三方依赖未打包
    {
      name: 'weapp-mock',
      file: 'dist/weapp-mock.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    // umd压缩后，第三方依赖未打包
    {
      name: 'weapp-mock',
      file: 'dist/weapp-mock.common.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    // 使用es6 import语法
    {
      file: 'dist/weapp-mock.esm.js',
      format: 'esm',
      sourcemap: true,
      strict: true,
    },
  ],
  plugins: [
    json(),
    commonjs(),
    resolve(),
    builtins(),
    globals(),
    babel({
      configFile: path.resolve(__dirname, './.babelrc'),
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    terser({
      include: [/^.+\.common\.js$/],
    }),
  ],
  watch: {
    clearScreen: true,
    include: 'src/**',
  },
};
