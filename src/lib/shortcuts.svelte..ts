const keys = new Set();

export function handleKeyDown(event: KeyboardEvent) {
	keys.add(event.key.toLowerCase());
	console.log(keys);
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
			const homeLink = document.querySelector('#home') as HTMLAnchorElement;
			homeLink.click();
		}

		if (keys.has('m')) {
			const metricsLink = document.querySelector('#metrics') as HTMLAnchorElement;
			metricsLink.click();
		}

		if (keys.has('w')) {
			const watchlistLink = document.querySelector('#watchlist') as HTMLAnchorElement;
			watchlistLink.click();
		}

		if (keys.has('p')) {
			const preferencesLink = document.querySelector('#preferences') as HTMLAnchorElement;
			preferencesLink.click();
		}
	}
}
