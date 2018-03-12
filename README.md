# OpenCMS

This is a SPA created without a JavaScript Framework. I used the project to challenge myself and strengthen my foundation of JavaScript. I am sure there are many areas of the code that can be refactored and/or cleaned up. It was a great learning experience and I hope you can get some inspiration from it and build upon this project. I used [Bootstrap](https://getbootstrap.com) for the css because I wanted to focus more on the JavaScript than the design.

### Version
1.0.0

## Usage
Download or clone the project.

### Installation

Install the dependencies

```sh
$ npm install
```

### Serve
To serve in the browser  - Runs webpack-dev-server

```sh
$ npm start
```

To serve the Json Server - Runs json-server --watch

```sh
$ npm run json:server
```

### Build
Compile and build

```sh
$ npm run build
```

## More Info
I used a fake REST API called [json-server](https://github.com/typicode/json-server) for a backend. It was very simple to setup. It is already include with this project as well as the 'db.json' file. You will just have to run `npm run json:server` for to run on your local environment.

I used a Markdown editor called [inscryb-markdown-editor](https://github.com/Inscryb/inscryb-markdown-editor) for the `textarea`. It is a fork of simplemde-markdown-editor that seems to be abandon.

I used [showdown](https://github.com/showdownjs/showdown) to convert the Markdown to HTML.

The http.js file was created from a tutorial I followed from [Brad Travesy](https://www.traversymedia.com/). Big shout out to Brad for all the tutorials he puts out on [YouTube](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA). I have learn a lot from his YouTube Channel and paid courses.

### Author

[James Garcia](http://www.garciajames.com)

### License

This project is licensed under the MIT License
