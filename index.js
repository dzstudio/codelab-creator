#! node

'use strict'

var path = require('path');

const webcreator = require('./creators/webcreator');
const golangcreator = require('./creators/golangcreator');
const nodejscreator = require('./creators/nodejscreator');
const phpcreator = require('./creators/phpcreator');
const webappcreator = require('./creators/webappcreator');

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

let creator = null;
let projectname = 'myproject-' + new Date().getTime();
let destpath = process.cwd() // 当前执行程序的路径;
let currentflag = '';
process.argv.slice(2).forEach(item => {
    switch (item) {
        case "web":
            creator = webcreator;
            break;
        case "webapp":
            creator = webappcreator;
            break;
        case "golang":
            creator = golangcreator;
            break;
        case "node":
            creator = nodejscreator;
            break;
        case "php":
            creator = phpcreator;
            break;
        default:
            if (item == '-name' || item == '-path') {
                currentflag = item;
            } else if (currentflag == '-name') {
                projectname = item;
            } else if (currentflag == '-path') {
                destpath = path.join(process.cwd(), item)
            }
    }
})

if (creator) {
    console.log('Project Name: ' + projectname)
    console.log('Project Path: ' + destpath)
    console.log('Start creating project...')
    creator.createProject(projectname, destpath)
    console.log('Project create success!')
} else {
    console.log(welcome);
}
