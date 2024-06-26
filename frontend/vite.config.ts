import reactPlugin from '@vitejs/plugin-react';
import { type ConfigEnv, defineConfig, loadEnv, PluginOption } from 'vite';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import viteSvgr from 'vite-plugin-svgr';

const config = ({ mode }: ConfigEnv): ReturnType<typeof defineConfig> => {
  const {
    VITE_APP_PROXY_SERVER_URL,
    VITE_APP_API_ORIGIN_URL,
    VITE_APP_DEVELOPMENT_PORT,
  } = loadEnv(mode, process.cwd());

  return defineConfig({
    build: {
      outDir: 'build',
    },
    plugins: [viteSvgr(), tsconfigPathsPlugin(), reactPlugin()],
    server: {
      port: Number(VITE_APP_DEVELOPMENT_PORT),
      proxy: {
        [VITE_APP_API_ORIGIN_URL]: {
          target: VITE_APP_PROXY_SERVER_URL,
          changeOrigin: true,
        },
      },
    },
  });
};

export default config;
