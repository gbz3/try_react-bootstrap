# try_react-bootstrap

[Getting Started](https://react-bootstrap.github.io/getting-started/introduction)

1. TypeScript の設定

```bash
$ npm init -y
$ npm install -D typescript
$ npx tsc --init
$ vi tsconfig.json
```

2. webpack の設定

```bash
$ npm install -D webpack webpack-cli ts-loader
$ vi webpack.config.js
$ npm install react react-dom
$ npm install -D @types/react @types/react-dom
$ mkdir src
$ vi src/index.tsx
$ npx webpack --mode production
```

3. `react-bootstrap` の設定

```bash
$ npm install react-bootstrap bootstrap
$ npm install -D css-loader mini-css-extract-plugin
$ vi webpack.config.js
$ vi src/index.tsx
$ npx webpack --mode production
```

4. `index.html` をビルド対象に追加

```bash
$ npm install -D html-webpack-plugin
$ vi webpack.config.js
$ vi src/index.html
$ npx webpack --mode production
```
