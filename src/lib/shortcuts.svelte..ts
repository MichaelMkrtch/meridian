import { goto } from '$app/navigation';

const keys = new Set();

export function handleKeyDown(event: KeyboardEvent) {
	keys.add(event.key.toLowerCase());
	checkCombination();
}

export function handleKeyUp() {
	if (keys.size === 2) {
		keys.clear();
	}
}

function checkCombination() {
	if (keys.has('g')) {
		if (keys.has('h')) {
			goto('/');
		}

		if (keys.has('m')) {
			goto('/metrics');
		}

		if (keys.has('w')) {
			goto('/watchlist');
		}

		if (keys.has('p')) {
			goto('/preferences');
		}
	}
}
