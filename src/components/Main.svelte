<script>
	import Sidebar from './Sidebar.svelte';
</script>
<main class="main">
    <div class="main-container">
        <div class="main-content">
            <slot/>
            <Sidebar/>
        </div>
    </div>
</main>

<style>
    .main-container {
        display: grid;
        grid-template-columns: minmax(auto, 1024px);
        justify-content: center;
        align-items: center;
    }

    .main-content {
        margin: 2em 0 0 0;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 60px;
        justify-content: space-between;
    }
</style>