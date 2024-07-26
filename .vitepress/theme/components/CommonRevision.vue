<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
    posts: {
        revision: string;
        content: string;
        number: string;
    }[];
}>();

const selectedIndex = ref(0);

const selected = computed(() => props.posts[selectedIndex.value]);
</script>

<template>
    <div class="wrapper-select" v-if="posts.length > 1">
        <!-- show selector if more than 1 -->
        <select v-model="selectedIndex" class="privacy-selector">
            <option v-for="(post, index) of props.posts" :value="index">
                Versi {{ post.number }} ({{ post.revision }})
            </option>
        </select>
    </div>
    <div class="actual-page">
        <p class="effective">Efektif pada: <span>{{ selected.revision }}</span></p>
        <div class="provider" v-html="selected.content"></div>
    </div>
</template>

<style scoped>
.privacy-selector {
    display: block;
    width: 100%;
    cursor: pointer;
    opacity: 1;
    outline: none;
    border: none;
    background-color: #e4e4e4;
    color: #333;
    padding: 1rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    margin-top: 1rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.dark .privacy-selector {
    background-color: #383838;
    color: #e2e8f0;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.privacy-selector > option {
    padding: 0.3rem;
}

.effective {
    font-size: 16px;
    font-weight: bold;
}

.effective span {
    font-weight: normal;
}
</style>
