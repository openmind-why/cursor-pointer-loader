const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: 'dist/index.esm.js',
      format: 'es'
    }
  ],
  external: [
    '@babel/core',
    '@babel/parser', 
    '@babel/traverse',
    '@babel/generator'
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    terser({
      compress: {
        drop_console: false,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    })
  ]
};
