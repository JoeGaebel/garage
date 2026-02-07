import {Gpio} from 'onoff';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function toggleGarage() {
    const switchSignal = new Gpio(17, 'out');
    await switchSignal.write(1);
    await sleep(2000);
    await switchSignal.write(0);
}
