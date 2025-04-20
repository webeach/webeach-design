import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import childProcess from 'node:child_process';
import { dts } from 'rollup-plugin-dts';
import nodeExternals from 'rollup-plugin-node-externals';

const config = [
  {
    input: './src/index.ts',
    output: [
      {
        dir: './lib/esm',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
      {
        dir: './lib/cjs',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      nodeExternals(),
      {
        name: 'run-generate-css',
        buildEnd: () => {
          childProcess.exec('yarn run generate:css', (err, stdout, stderr) => {
            if (err) {
              console.error('Error running generate:css:', stderr);
            } else {
              console.log(stdout);
            }
          });
        },
      },
    ],
  },
  {
    input: './src/index.ts',
    output: [
      {
        file: './lib/types.d.ts',
      },
    ],
    plugins: [dts()],
  },
];

export default config;
