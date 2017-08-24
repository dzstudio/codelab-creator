var fs = require('fs');
var path = require('path');

let copyTemplate = function(from, to) {
    from = path.join(__dirname, 'templates', from);
    write(to, fs.readFileSync(from, 'utf-8'))
}

let write = function(path, str, mode) {
    fs.writeFileSync(path, str)
}

let mkdir = function(path, fn) {
    fs.mkdir(path, function(err) {
        fn && fn()
    })
}

export {
    copyTemplate,
    write,
    mkdir
};
