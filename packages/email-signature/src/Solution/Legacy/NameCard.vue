<script setup>
import { onMounted, ref } from 'vue';
import * as PIXI from 'pixi.js';

defineProps(['name', 'position', 'telephone', 'email', 'homeURL', 'address']);

const canvasDiv = ref(document.createElement('div'));

onMounted(() => {
	const application = new PIXI.Application({
		antialias: true,
		background: 0x000000,
		height: 266,
		width: 530
	});

	canvasDiv.value.appendChild(application.view);
});

</script>

<template>
<div
	class="canvas"
	ref="canvasDiv"
></div>
</template>
