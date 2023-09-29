#!/usr/bin/env node
let inputarr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpobj = require("./commands/help")
let treeobj = require("./commands/tree")
let organizeobj = require("./commands/organize")
let command = inputarr[0];
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'gz', 'ar', 'iso', 'xz'],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb']
}
switch (command) {
    case "tree":
        treeobj.treekey(inputarr[1]);
        break;
    case "organize":
        organizeobj.organizekey(inputarr[1]);
        break;
    case "help":
        helpobj.helpkey();
        break;
    default:
        console.log("pls input 🤣 right cmd")
        break;
}


