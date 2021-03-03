export {}

declare module 'vue-router' {
  interface RouteMeta {
    icon?: string,
    title?: string,
    description?: string,
    public?: boolean
  }
}