import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/index.ts',
  plugins: [typescript(), postcss()],
  external: ['react', 'react-dom']
};

export default config;
