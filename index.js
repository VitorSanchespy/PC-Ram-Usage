const os = require('os');
setInterval(()=>{
const {arch, platform, totalmem, freemem} = os
const tRam = totalmem() / 1024 / 1024;
const fRam = freemem() / 1024 / 1024;
const uso = (fRam / tRam) * 100;
const status ={
    OS:platform(),
    Arch:arch(),
    TotalRam: `${parseInt(tRam)}.MB`,
    freeRam: `${parseInt(fRam)}.MB`,
    Uso: `${uso.toFixed(2)}%`,
    };

    console.clear();
    console.table(status);
    exports.status = status;
}, 1000)

