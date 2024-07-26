<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
    pid: string,
    invite: boolean,
    strict?: boolean,
    globalToggle?: boolean;
    oauth?: boolean;
}>();

const isFeature = computed(() => props.pid.startsWith('ntfeatures-'));

const emit = defineEmits<{
    perms: [string, boolean]
    feature: [string, boolean]
}>();

const toggle = (value: boolean) => {
    if (props.globalToggle && props.pid !== 'administrator') {
        return;
    }

    if (isFeature.value) {
        emit('feature', props.pid, value);
    } else {
        emit('perms', props.pid, value);
    }
};

const isDisabled = computed(() => props.strict || (props.pid !== 'administrator' && props.globalToggle));
</script>

<template>
    <div>
        <input type="checkbox" :checked="invite" @change="() => toggle(!invite)" :disabled="isDisabled" />
        <label @click="() => toggle(!invite)" :class="oauth ? 'color-oauth' : ''"><slot></slot></label>
    </div>
</template>

<style scoped>
label {
    margin-left: 0.2rem;
    cursor: pointer;
}
</style>
