import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: { './Button': './src/Button.tsx' },
      shared: {
        react: { singleton: true, requiredVersion: '^18.3.1' },
        'react-dom': { singleton: true, requiredVersion: '^18.3.1' }
      }
    })
  ],
  server: { port: 3001, cors: true },
  build: { target: 'esnext', minify: false, cssCodeSplit: false, lib: { entry: 'src/main.tsx', formats: ['es'] } }
});
