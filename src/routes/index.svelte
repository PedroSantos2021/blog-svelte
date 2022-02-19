<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import Post from "../components/Post.svelte";
  export let posts;
</script>

<svelte:head>
  <title>Pedro Santos Diaz</title>
</svelte:head>

<div class="home">
  <div class="posts">
    {#each posts as post}
      <Post {post}/>
    {/each}
  </div>
</div>

<style>
  .posts {
    display: grid;
    justify-content: space-between;
    grid-gap: 15px;
    grid-template-columns: 1fr;
  }
</style>
