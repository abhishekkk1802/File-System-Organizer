let fs = require("fs");
let path = require("path");
function treefn(dirPath) {
    // let destPath;
    if (dirPath == undefined) {
        treeHelper(process.cwd(), "");
        return;
    } else {
        let doesexist = fs.existsSync(dirPath);
        if (doesexist) {
            treeHelper(dirPath, "");
        } else {
            console.log("kindly enter the path");
            return;
        }

    }
}


function treeHelper(dirPath, indent) {
    let isfile = fs.lstatSync(dirPath).isFile();
    if (isfile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "----- " + fileName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + "-----" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}
module.exports = {
    treekey: treefn
}