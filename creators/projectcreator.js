'use strict'

var fs = require('fs');
var path = require('path');

let projectcreator = {
    copyTemplate: function(from, to) {
        fs.stat(to, function(err, stat) {
            if (err) {
                this.mkdir(to)
            }
            this.travel(from, (pathname, isdir) => {
                if (isdir) {
                    this.mkdir(path.join(to, path.basename(pathname)));
                } else {
                    this.copyFile(pathname, path.join(to, path.basename(pathname)));
                }
            });
        }.bind(this));
    },

    copyFile: function(from, to) {
        this.write(to, fs.readFileSync(from, 'utf-8'))
    },

    write: function(path, str, mode) {
        fs.writeFileSync(path, str)
    },

    mkdir: function(dirname) {
        try {
            fs.statSync(path.dirname(dirname));
        } catch (err) {
            this.mkdir(path.dirname(dirname));
        }
        fs.mkdirSync(dirname);
    },

    travel: function(dir, callback) {
        fs.readdirSync(dir).forEach(function(file) {
            var pathname = path.join(dir, file);
            if (fs.statSync(pathname).isDirectory()) {
                callback(pathname, true)
                this.travel(pathname, callback);
            } else {
                callback(pathname, false);
            }
        });
    }
}

module.exports = projectcreator;
