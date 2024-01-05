import path from 'path';
import webpack from 'webpack';
import {buildWebpack} from "./buildConfig/buildWebpack";
import {BuildMode, BuildPaths} from "./buildConfig/types/types";


interface EnvVariables {
    mode: BuildMode;
    analyzer?: boolean;
    port: number;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer
    })

    return config;
}