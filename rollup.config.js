import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
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
            typescript({
                exclude: [
                    '**/__tests__',
                    '**/*.test.ts',
                    '**/stories',
                    '**/*.stories.ts'
                ],
            }),
            peerDepsExternal(),
            resolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            commonjs(),
            terser(),
            commonjs(),
            alias({
                entries: [
                    {
                        find: '@',
                        replacement: './src',
                    },
                ],
            }),
            image(),
        ],
    },
];
