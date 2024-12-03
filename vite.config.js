import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const resolveFromMultiplePaths = (
    aliasName,
    paths,
    extensions = ['.js', '.jsx', '.ts', '.tsx', '.json']
) => ({
    name: 'multi-path-alias',
    resolveId(source) {
        if (source.startsWith(aliasName)) {
            const relativePath = source.slice(aliasName.length + 1)
            for (const basePath of paths) {
                for (const ext of extensions) {
                    const fullPath = path.resolve(basePath, relativePath + ext)
                    if (fs.existsSync(fullPath)) {
                        return fullPath
                    }
                }
            }
        }
        return null
    },
})

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        fs: {
            strict: false,
        },
    },
    resolve: {
        alias: {
            '@vx-feature': 'vx-front/dist/feature/index',
        },
    },
    plugins: [
        react(),
        resolveFromMultiplePaths('@vx-components', [
            path.resolve(__dirname, './components'),
            '/var/opt/vx-front-main/components',
        ]),
        resolveFromMultiplePaths('@vx-hooks', [
            path.resolve(__dirname, './hooks'),
            '/var/opt/vx-front-main/hooks',
        ]),
    ],
})
