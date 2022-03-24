import { getWallet } from '@peerpiper/iframe-wallet-engine';

let wallet;

async function loadWallet() {
	wallet = await getWallet();
}

loadWallet();

const generateMnemonic = () => {
	wallet.generateMnemonic();
};
const addMnemonic = () => {};
const validateMnemonic = () => {};

export { generateMnemonic, addMnemonic, validateMnemonic };
