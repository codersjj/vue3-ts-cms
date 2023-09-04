export const projectStructure = `
.
|-- README.md
|-- auto-imports.d.ts
|-- babel.config.js
|-- commitlint.config.js
|-- components.d.ts
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- index.html
|-- src
|   |-- App.vue
|   |-- assets
|   |   |-- css
|   |   |   |-- base.less
|   |   |   |-- index.less
|   |   |-- img
|   |       |-- login-bg.jpg
|   |       |-- login-bg.svg
|   |       |-- logo.svg
|   |-- base-ui
|   |   |-- breadcrumb
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- breadcrumb.vue
|   |   |   |-- types
|   |   |       |-- index.ts
|   |   |-- card
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- card.vue
|   |   |-- chart
|   |   |   |-- data
|   |   |   |   |-- china.json
|   |   |   |-- hooks
|   |   |   |   |-- useChart.ts
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- base-chart.vue
|   |   |-- code
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- code.vue
|   |   |-- descriptions
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- descriptions.vue
|   |   |   |-- types
|   |   |       |-- index.ts
|   |   |-- form
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- form.vue
|   |   |   |-- types
|   |   |       |-- index.ts
|   |   |-- link-list
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- link-list.vue
|   |   |   |-- types
|   |   |       |-- index.ts
|   |   |-- table
|   |       |-- index.ts
|   |       |-- src
|   |       |   |-- table.vue
|   |       |-- types
|   |           |-- index.ts
|   |-- components
|   |   |-- nav-header
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- cpns
|   |   |       |   |-- user-info.vue
|   |   |       |-- nav-header.vue
|   |   |-- nav-menu
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- nav-menu.vue
|   |   |-- page-charts
|   |   |   |-- data
|   |   |   |   |-- geoCoordMap.ts
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- bar-chart.vue
|   |   |   |   |-- line-area-chart.vue
|   |   |   |   |-- map-chart.vue
|   |   |   |   |-- pie-chart.vue
|   |   |   |   |-- pie-rose-chart.vue
|   |   |   |-- types
|   |   |   |   |-- index.ts
|   |   |   |-- utils
|   |   |       |-- convertData.ts
|   |   |-- page-content
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- page-content.vue
|   |   |-- page-modal
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- page-modal.vue
|   |   |-- page-search
|   |       |-- index.ts
|   |       |-- src
|   |           |-- page-search.vue
|   |-- global
|   |   |-- index.ts
|   |   |-- register-element-plus-icons.ts
|   |   |-- register-element-plus.ts
|   |   |-- register-properties.ts
|   |-- composables
|   |   |-- usePageModal.ts
|   |   |-- usePageSearch.ts
|   |   |-- usePermission.ts
|   |-- main.ts
|   |-- router
|   |   |-- index.ts
|   |   |-- login
|   |   |-- main
|   |       |-- analysis
|   |       |   |-- dashboard
|   |       |   |   |-- dashboard.ts
|   |       |   |-- overview
|   |       |       |-- overview.ts
|   |       |-- product
|   |       |   |-- category
|   |       |   |   |-- category.ts
|   |       |   |-- goods
|   |       |       |-- goods.ts
|   |       |-- story
|   |       |   |-- chat
|   |       |   |   |-- chat.ts
|   |       |   |-- list
|   |       |       |-- list.ts
|   |       |-- system
|   |           |-- department
|   |           |   |-- department.ts
|   |           |-- menu
|   |           |   |-- menu.ts
|   |           |-- role
|   |           |   |-- role.ts
|   |           |-- user
|   |               |-- user.ts
|   |-- service
|   |   |-- axios_demo.ts
|   |   |-- index.ts
|   |   |-- login
|   |   |   |-- login.ts
|   |   |   |-- type.ts
|   |   |-- main
|   |   |   |-- analysis
|   |   |   |   |-- dashboard
|   |   |   |       |-- dashboard.ts
|   |   |   |-- system
|   |   |       |-- system.ts
|   |   |-- request
|   |   |   |-- config.ts
|   |   |   |-- index.ts
|   |   |   |-- type.ts
|   |   |-- types.ts
|   |-- shims-vue.d.ts
|   |-- store
|   |   |-- index.ts
|   |   |-- login
|   |   |   |-- login.ts
|   |   |   |-- types.ts
|   |   |-- main
|   |   |   |-- analysis
|   |   |   |   |-- dashboard
|   |   |   |       |-- dashboard.ts
|   |   |   |       |-- types.ts
|   |   |   |-- product
|   |   |   |   |-- product.ts
|   |   |   |   |-- types.ts
|   |   |   |-- system
|   |   |       |-- system.ts
|   |   |       |-- types.ts
|   |   |-- types.ts
|   |-- utils
|   |   |-- cache.ts
|   |   |-- date-format.ts
|   |   |-- eventBus.ts
|   |   |-- map-menus.ts
|   |   |-- string-format.ts
|   |-- views
|       |-- login
|       |   |-- config
|       |   |   |-- account-config.ts
|       |   |-- cpns
|       |   |   |-- login-account.vue
|       |   |   |-- login-panel.vue
|       |   |   |-- login-phone.vue
|       |   |-- hook
|       |   |-- login.vue
|       |-- main
|       |   |-- analysis
|       |   |   |-- dashboard
|       |   |   |   |-- dashboard.vue
|       |   |   |-- overview
|       |   |       |-- config
|       |   |       |   |-- component-specification.config.ts
|       |   |       |   |-- dependencies.config.ts
|       |   |       |   |-- dev-dependencies.config.ts
|       |   |       |   |-- file-naming-specification.config.ts
|       |   |       |   |-- git-commit-specification.config.ts
|       |   |       |   |-- index.ts
|       |   |       |   |-- project-structure.config.ts
|       |   |       |   |-- technology-stack.config.ts
|       |   |       |-- overview.vue
|       |   |-- main.vue
|       |   |-- product
|       |   |   |-- category
|       |   |   |   |-- category.vue
|       |   |   |-- goods
|       |   |       |-- config
|       |   |       |   |-- content.config.ts
|       |   |       |-- goods.vue
|       |   |-- story
|       |   |   |-- chat
|       |   |   |   |-- chat.vue
|       |   |   |-- list
|       |   |       |-- list.vue
|       |   |-- system
|       |       |-- department
|       |       |   |-- department.vue
|       |       |-- menu
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   |-- search.config.ts
|       |       |   |-- menu.vue
|       |       |-- role
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   |-- modal.config.ts
|       |       |   |   |-- search.config.ts
|       |       |   |-- role.vue
|       |       |-- user
|       |           |-- config
|       |           |   |-- content.config.ts
|       |           |   |-- modal.config.ts
|       |           |   |-- search.config.ts
|       |           |-- user.vue
|       |-- not-found
|           |-- not-found.vue
|-- test.html
|-- tsconfig.json
|-- vue.config.js

106 directories, 140 files
`
