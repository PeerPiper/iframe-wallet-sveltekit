<script>
	export let timestamp;

	$: date = new Date(timestamp).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	$: time = new Date(timestamp).toLocaleTimeString();
</script>

<span>{{ date }} {{ time }}</span>

<style scoped>
</style>
