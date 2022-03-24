import { reactive } from './utils';
import { arDB } from '$lib/store/ArweaveStore';
import interfaceStore from '$lib/store/InterfaceStore';
import { unpackTags } from '$lib/functions/Transactions';
import { getVerification } from 'arverify';
import { awaitEffect } from '$lib/functions/AsyncData';

const ProfileStore = reactive({
	arweaveId: {},
	arweaveIdStatus: {},
	arverify: {},
	arverifyStatus: {}
});

export default ProfileStore;

export async function getArweaveId(address) {
	if (!address || ($ProfileStore.arweaveIdStatus[address] ??= {}).loading) {
		return;
	}
	if (!address.match(/^[a-z0-9_-]{43}$/i)) {
		return;
	}
	$ProfileStore.set(`arweaveIdStatus.${address}.loading`, true);
	await awaitEffect(() => $interfaceStore.windowVisible);

	try {
		const arweaveIdTx = (
			await arDB.search().from(address).tag('App-Name', 'arweave-id').findOne()
		)[0]?.node;
		if (!arweaveIdTx) {
			return;
		}
		const tags = unpackTags(arweaveIdTx.tags);
		if (tags.Image && !tags.Image.match(/^[a-z0-9_-]{43}$/i)) {
			delete tags.image;
		}
		ProfileStore.arweaveId[address] = tags;
	} catch (e) {
		ProfileStore.arweaveIdStatus[address].loading = false;
		console.error(e);
	}
}

export async function getArverify(address) {
	if (!address || (ProfileStore.arverifyStatus[address] ??= {}).loading) {
		return;
	}
	if (!address.match(/^[a-z0-9_-]{43}$/i)) {
		return;
	}
	ProfileStore.arverifyStatus[address].loading = true;
	await awaitEffect(() => $interfaceStore.windowVisible);

	try {
		ProfileStore.arverify[address] = await getVerification(address);
	} catch (e) {
		ProfileStore.arverifyStatus[address].loading = false;
		console.error(e);
	}
}

if (import.meta.env.DEV) {
	window.ProfileStore = ProfileStore;
}
