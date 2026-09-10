import { defineConfig } from 'vite';
export default defineConfig({
  base: '/canyon-racer/',
  server: { host: true },
  build: { target: 'es2020' }
});
