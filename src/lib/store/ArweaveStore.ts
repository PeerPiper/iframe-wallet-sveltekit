import { writable } from 'svelte/store';
import { reactive } from './utils';

const ArweaveStore = reactive({
	gatewayURL: null as null | string,
	wallets: {} as { [key: string]: ArweaveAccount },
	txs: {} as { [key: string]: Partial<GQLTransactionInterface> },
	uploads: {} as { [key: string]: { upload?: number } }
});

export default ArweaveStore;
