<script setup lang="ts">
import { data as posts } from './blog.data'

function getDateTime(time: number) {
  return new Date(time).toISOString()
}
</script>

<template>
  <ul class="blog-list">
    <li class="blog-entry" v-for="post of posts">
      <article>
        <img v-if="post.image" class="blog-image" :src="post.image" :alt="post.title">
        <time :datetime="getDateTime(post.date.time)">
          {{ post.date.string }}
        </time>
        <h2 class="title">
          <a :href="post.url">{{ post.title }}</a>
        </h2>
      </article>
    </li>
  </ul>
</template>

<style scoped>
.blog-list {
  list-style-type: none;
  padding: 0;
}
.blog-entry {
  margin-top: 3em;
  border-bottom: 1px solid var(--vp-c-divider);
}
.blog-entry time {
  font-size: 14px;
}
.title {
  border: none;
  margin-top: 0;
  padding-top: 0;
  font-size: 22px;
}
.title a {
  font-weight: 600;
  text-decoration: none;
}

.blog-image {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
}
</style>