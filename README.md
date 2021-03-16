# @michaeljaltamirano/eslint-plugin

Strongly-opinionated ESLint configuration.

Currently there are no additional rules added via the plugin, so it is purely configuration. It was setup as a plugin in the event bespoke rules are added in the future.

## Usage

### Installation

`yarn add @michaeljaltamirano/eslint-plugin --dev` or `npm install @michaeljaltamirano/eslint-plugin --saveDev`

### All

```json
"extends": "plugin:@michaeljaltamirano/all
```

### Jest configuration

```json
"extends": "plugin:@michaeljaltamirano/jest
```

### React configuration

```json
"extends": "plugin:@michaeljaltamirano/react
```

### TypeScript configuration

```json
"extends": "plugin:@michaeljaltamirano/typescript
```

### Other rules

```json
"extends": "plugin:@michaeljaltamirano/other
```
