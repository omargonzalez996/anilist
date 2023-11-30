<script>
	import { onMount } from 'svelte';

	export let data = [];

	let image = data[0].images.jpg.image_url;
</script>

<div class="card-container">
	<div class="card-image" />
	<div class="card-info">
		<div class="card-title">
			{`${data[0].title}`}
		</div>
		<div class="card-details">
			<div>
				{`${data[0].synopsis}`}
			</div>
		</div>
	</div>
</div>

<style>
	.card-container {
		width: 400px;
		height: 550px;
		background-color: #101010;
		font-family: sans-serif;
		color: #f5f5f5;
	}
	.card-image {
		width: fit-content;
		background-image: url({image});
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
