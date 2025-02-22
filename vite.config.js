import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/alduin-dev.github.io/', // Reemplaza con el nombre de tu repositorio
  plugins: [react()],
  build: {
    outDir: 'dist', // Debe ser 'dist' para que gh-pages lo encuentre
    sourcemap: false
  }
});
