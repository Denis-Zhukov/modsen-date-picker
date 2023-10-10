import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            typescript(),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            terser(),
            commonjs(),
            alias({
                entries: [
                    { find: '@', replacement: './src' },
                ],
            }),
        ],
    },
    {
        input: 'dist/cjs/types/src/index.d.ts',
        output: [
            {
                file: 'dist/index.d.ts',
                format: 'esm',
            },
        ],
        plugins: [dts.default()],
        external: [/\.css$/],
    },
];
