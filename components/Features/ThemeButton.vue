<script setup>
import { Square, CheckSquare } from "lucide-vue-next";
const colorMode = useColorMode();
const props = defineProps({
    title: {
        type: String,
        default: null,
    },
    color: {
        type: String,
        default: "system",
    },

});

const setColorMode = () => {
    colorMode.preference = props.color;
};
</script>

<template>
    <a @click="setColorMode()">
        <div class="title-container">
            <span>
                <slot name="btnIcon">
                </slot>
            </span>
            <p>{{ title }}</p>
        </div>
        <span>
            <CheckSquare v-if="colorMode.preference == props.color" class="icon" />
            <Square v-else class="icon" />
        </span>
    </a>
</template>

<style scoped>
a {
    @apply flex flex-row justify-between text-center py-2 px-4 cursor-pointer;
}

a .title-container {
    @apply flex flex-row items-center justify-around;
}

a .title-container p {
    @apply ml-2 text-sm antialiased font-medium;
}

a .icon {
    @apply w-4 h-4;
}
</style>
