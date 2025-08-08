/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_URI: string;
  // add other env vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
