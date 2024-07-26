<template>
    <CommonRevision :posts="parsedPosts" />
</template>

<script setup lang="ts">
import CommonRevision from './CommonRevision.vue';
import { data as posts } from './terms.data'

const parsedPosts = posts.map((post) => {
    return {
        revision: post.revision.string,
        content: post.content,
        number: post.num
    }
});
</script>