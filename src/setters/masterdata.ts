import { MasterData } from '../../generated/schema';


export const initMD = (): MasterData => {
    let md = MasterData.load('0x');
    if (!md) {
      md = new MasterData('0x');
      md.status = 'ok';
      md.networkId = i32(43114);
      md.networkName = 'avalanche';
      md.launchTimestamp = i32(1638483222);
    }
    return md;
}