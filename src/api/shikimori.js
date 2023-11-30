export async function getCurrentSeasonAnimes() {
	let animes = [];
	try {
		const response = await fetch('https://api.jikan.moe/v4/seasons/now');
		if (response.ok) {
			const data = await response.json();
			animes = data.data;
			return animes;
		} else {
			console.log(`[${response.statusText}] `);
		}
	} catch (error) {
		console.error('Error de red:', error);
	}
}