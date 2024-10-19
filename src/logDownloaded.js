const Fse = require('fs-extra');
const path = require('path');

let logFile;

function getFormattedDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function setLogFile(file) {
    logFile = file;
}

function logDownloaded(illust, dldir) {
    if (logFile) {
        const datetime = getFormattedDateTime();
        const dirname = path.basename(dldir);
        Fse.appendFileSync(logFile, `${datetime}\t${dirname}\t${illust.id}\t${illust.url}\t${illust.title}\t${dldir}/${illust.file}\n`);
    }
}

module.exports = {
    logDownloaded,
    setLogFile,
}