<script>
  import readingTime from "../utils/readingTime";
  import randomEmoji from "../utils/randomEmoji";
  import formatIsoTime from "../utils/formatIsoTime";
  export let post;
</script>

<div class="post-item">
  <div class="post-content">
    <div class="post-head">
      <div class="post-title">
        <h2>
          <a rel="prefetch" href="blog/{post.slug}"
            >{randomEmoji()} {post.title}</a
          >
        </h2>
        <p>
          <time datetime={post.createdAt}>📅 {formatIsoTime(post.createdAt)}</time>
          <span class="dot" />
          <span>{readingTime(post.html)}</span>
        </p>
      </div>
      <div class="post-tags" />
      <div class="post-desc">
        <p>{post.desc}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .post-item {
    color: #191a22;
    position: relative;
  }

  .post-content {
    font-size: 16px;
    font-weight: 300;
    display: grid;
    justify-content: space-between;
    grid-gap: 5px;
    grid-template-columns: 1fr;
  }

  .post-title {
    font-size: 20px;
    margin: 0;
    padding: 0;
  }

  .post-title p {
    color: #333;
    font-size: 13px;
    font-weight: 300;
    margin-top: 5px;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #22215b;
  }

  .post-desc {
    color: #333;
    font-size: 16px;
    line-height: 28px;
    margin: 0 auto;
    word-break: break-word;
  }

  .dot {
    font-weight: 700;
  }
</style>
