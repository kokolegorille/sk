# Starter Kit

Webpack 5 starter kit w/ esbuild-loader.

```
$ mkdir sk
$ cd sk
$ npm init -y
$ mkdir -p dist static src/js src/css src/fonts
$ touch README.md
$ touch src/js/index.js
$ touch src/css/app.css
```

```
$ git init
$ git add .
$ git commit -m "Initial commit"
$ vim .gitignore
/dist
/node_modules
npm-debug.log
.DS_Store
```

## dev dependencies

```
$ npm i -D esbuild-loader copy-webpack-plugin css-loader css-minimizer-webpack-plugin html-webpack-plugin mini-css-extract-plugin sass sass-loader terser-webpack-plugin webpack webpack-cli webpack-dev-server
```


### Changes

```
$ git status
Sur la branche master
Modifications qui ne seront pas validées :
  (utilisez "git add <fichier>..." pour mettre à jour ce qui sera validé)
  (utilisez "git restore <fichier>..." pour annuler les modifications dans le répertoire de travail)
	modifié :         README.md
	modifié :         package.json
	modifié :         src/css/app.css

Fichiers non suivis:
  (utilisez "git add <fichier>..." pour inclure dans ce qui sera validé)
	.gitignore
	package-lock.json
	src/css/fonts.scss
	src/css/styles.scss
	src/fonts/
	src/index.html
	src/index.js
	static/
	webpack.config.js
```
