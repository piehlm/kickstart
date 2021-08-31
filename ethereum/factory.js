import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x40CC6193Aa496CFde518f66240A13D54b4e3F5E9'
);

export default instance;