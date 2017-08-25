'use strict'

const creator = require('./projectcreator');

var path = require('path');

let createProject = (name, dest) => {
    let templatePath = path.join(__dirname, "../template/web")
    creator.copyTemplate(templatePath, path.join(dest, name))
};

module.exports.createProject = createProject
