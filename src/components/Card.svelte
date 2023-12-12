<script>
	import { onMount } from 'svelte';

	export let data = {};

	let image = data.images.jpg.image_url;
</script>

<div class="card-container">
	<div class="card-image">
		<img src={image} alt="img" />
	</div>
	<div class="card-info">
		<div class="card-title">
			{`${data.title}`}
		</div>
		<!-- <div class="card-details">
			<div>
				{`${data.synopsis}`}
			</div>
		</div> -->
	</div>
</div>

<style>
	.card-container {
		width: 200px;
		height: 340px;
		background-color: #101010;
		font-family: sans-serif;
		color: #f5f5f5;
		margin: 0.5rem;
		border-radius: 1rem;
	}
	.card-image {
		width: fit-content;
		height: fit-content;
		display: flex;
		justify-content: center;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 1rem;
	}
	img {
		border-radius: 1rem 1rem 0;
		width: 200px;
	}
	.card-info {
		padding: 0.5rem;
	}
	.card-title {
		display: flex;
		justify-content: center;
		align-items: bottom;
		font-size: 1rem;
		text-align: center;
		max-height: 50px;
		overflow-y: scroll;
	}
	/* .card-details {
		padding: 1rem;
		font-size: 0.7rem;
		text-align: justify;
		max-height: 50px;
		overflow-y: scroll;
	} */
</style>
