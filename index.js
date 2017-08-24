#! node

const welcome = `Welcome to use codelab-gen!
It can create simple codebases for practice~~~

Please select a codebase type:
codelab-gen web
codelab-gen webapp
codelab-gen golang
codelab-gen node
codelab-gen php

Options:
-name [specify the project name]
-path [specify a path to create project, default is current path]

`

process.argv.slice(2).forEach(item =>
    switch (item) {
        case "web":
            break;
        case "webapp":
            break;
        case "golang":
            break;
        case "node":
            break;
        case "php":
            break;
        default:
            console.log(welcome);
    }
)
