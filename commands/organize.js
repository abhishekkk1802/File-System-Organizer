let fs = require("fs");
let path = require("path");
function organizefn(dirPath) {
    let destPath;
    if (dirPath == undefined) {
        // console.log("kindly enter the path");
        destPath = process.cwd();
        return;
    } else {
        let doesexist = fs.existsSync(dirPath);
        if (doesexist) {
            destPath = path.join(dirPath, "organized_files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }
        } else {
            console.log("kindly enter the path");
            return;
        }

    }
    organizeHelper(dirPath, destPath);
}

function organizeHelper(src, dest) {

    let childNames = fs.readdirSync(src);
    // console.log(childNames);

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isfile = fs.statSync(childAddress).isFile()
        if (isfile) {
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            sendFiles(childAddress, dest, category);
        }
    }




}
function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    for (let type in types) {
        let currtypeArray = types[type];
        for (let i = 0; i < currtypeArray.length; i++) {
            if (ext == currtypeArray[i]) {
                return type;
            }
        }
    }
    return "others";

}
function sendFiles(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);

}
module.exports = {
    organizekey: organizefn
}