const {Gpio} = require("onoff");
const os = require('os');
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

// Force the hardware switch off when starting, since it's on when powered by default
module.exports = () => {
    if (os.platform() === 'linux') {
        const switchSignal = new Gpio(17, 'out');
        switchSignal.writeSync(0);

    }

    return nextConfig
}