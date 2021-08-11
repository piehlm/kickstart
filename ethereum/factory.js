import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xc8B125990c9e8E22068eFd4826afdf407eE99E00'
);

export default instance;