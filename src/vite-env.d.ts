/// <reference types="vite/client" />

interface ImportMeta {
  readonly globEager: <T = any>(pattern: string) => Record<string, T>;
}
