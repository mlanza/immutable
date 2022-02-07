import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import json  from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';

export default [{
  input: 'src/Immutable.js',
  external: ['atomic/core', 'atomic/value-object', 'atomic/hash'],
  output: [{
    name: 'Immutable',
    exports: 'named',
    file: './dist/immutable.js',
    format: 'es',
    sourcemap: false
  }],
  plugins: [
    alias({
      entries: [
        { find: './predicates/isValueObject', replacement: 'atomic/core' },
        { find: './Hash', replacement: 'atomic/core' }
      ]
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'inline'
    }),
    json()
  ]
},{
  input: 'src/custom.js',
  output: [{
    name: 'Hash',
    exports: 'named',
    file: './dist/hash.js',
    format: 'es',
    plugins: [],
    sourcemap: false
  }],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'inline'
    }),
    json()
  ]
}];
