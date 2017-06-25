# plate-cli
**Boilerplate Generator using Command Line Interface.** <br><br>

#### Introduce
Many frameworks have create project CLI. However, these projects will not only have a lot of unnecessary features, but also take a long time to understand for using.
This CLI is intended to make a simplest boilerplate. It will help you create a variety of boilerplates that include only the features you need.
Quickly start your project with simple commands.

## Install
```
$ sudo npm install -g plate-cli
```

## How to Use
Basically, open the terminal and write down boilerplate name. When you use 'plate' command, the cli setup boilerplate your working directory.
```
$ plate <boilerplate>
```

#### examples
Here are examples.
```
$ mkdir my-plate && cd my-plate
$ plate react

```
Using directory option.
```
$ plate react -d my-plate
```

## Options
There are some useful options.

#### set directory
If you want to directory path, please use this option.
```
$ plate <boilerplate> --directory [path] // -d, --directory
```

#### git clone
This option support git clone. If you set github SSH, you can use it.
```
$ plate <boilerplate> --clone // -c, --clone
```

## Plate List
- [react](https://github.com/haegul/react-boilerplate)
- [react-ssr](https://github.com/haegul/react-ssr-boilerplate)
- [vue-vuex](https://github.com/haegul/vue-vuex-boilerplate)

## How to Contribute
Please Reference [CONTRIBUTING.md](https://github.com/haegul/plate-cli/blob/master/CONTRIBUTING.md)