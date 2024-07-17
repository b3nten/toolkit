import { safeHashKey } from "../collections/hashKey";
import { LFUCache } from "../collections/LFUCache";

export function memo(fn){
	const cache = new LFUCache({
		capacity: 100,
		hashFunction: safeHashKey,
	});
}