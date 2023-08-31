const {Gpio} = require("onoff");
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = () => {
    const switchSignal = new Gpio(17, 'out');
    switchSignal.writeSync(0);

    return nextConfig
}
