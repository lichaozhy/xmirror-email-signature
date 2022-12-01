<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import * as PIXI from 'pixi.js';
import backgroundURL from './background.png';

const ROW_SPACING = 14;
const GLOBAL_FONT_SIZE = 14;
const NAME_FONT_SIZE = 32;
const NAME_POSITION = [240, 36];
const NAME_WIDTH = 90;
const ITEM_ORIGIN = [270, 86];
const POSITION_PRE_SPACE = 20;

const TEXT_META_MAP = {
	name: {
		fontSize: NAME_FONT_SIZE,
		x: NAME_POSITION[0],
		y: NAME_POSITION[1],
		width: NAME_WIDTH,
		text: text => text.length === 2 ? text.split('').join('  ') : text,
	},
	position: {
		fontSize: GLOBAL_FONT_SIZE,
		x: NAME_POSITION[0] + POSITION_PRE_SPACE + NAME_WIDTH,
		y: 54,
		width: null,
		text: text => text,
	},
	telephone: {
		fontSize: GLOBAL_FONT_SIZE,
		x: 0,
		y: 0,
		width: null,
		text: text => text.trim().substr(0, 11),
	},
	email: {
		fontSize: GLOBAL_FONT_SIZE,
		x: 0,
		y: 0,
		width: null,
		text: text => `${text.trim().toLowerCase()}@anpro-tech.com`,
	},
	homeURL: {
		fontSize: GLOBAL_FONT_SIZE,
		x: 0,
		y: 0,
		width: null,
		text: text => text,
	},
	address: {
		fontSize: GLOBAL_FONT_SIZE,
		x: 0,
		y: 0,
		width: null,
		text: text => text,
	},
};

let index = 0;

for (const name of ['telephone', 'email', 'homeURL', 'address']) {
	const style = TEXT_META_MAP[name];

	style.x = ITEM_ORIGIN[0];
	style.y = ITEM_ORIGIN[1] + index * (GLOBAL_FONT_SIZE + ROW_SPACING);
	index++;
}

const props = defineProps([
	'name', 'position', 'telephone', 'email', 'homeURL', 'address'
]);

const canvasDiv = ref(document.createElement('div'));
const texture = PIXI.Texture.from(backgroundURL);
const container = new PIXI.Container();
const back = new PIXI.Sprite(texture);

container.addChild(back);

const application = new PIXI.Application({
	antialias: true,
	background: 0x000000,
	backgroundAlpha: 0,
	height: 226,
	width: 530,
});

application.stage.addChild(container);

onMounted(() => {
	for (const name of Object.keys(props)) {
		const { fontSize, x, y, text, width } = TEXT_META_MAP[name];

		const itemText = new PIXI.Text('', {
			fontSize,
			fontWeight: 600,
		});

		itemText.x = x;
		itemText.y = y;

		if (width !== null) {
			itemText.style.wordWrapWidth = width;
		}

		container.addChild(itemText);

		watch(() => props[name], value => {
			itemText.text = text(value);
		}, { immediate: true });
	}

	canvasDiv.value.appendChild(application.view);
});

onBeforeUnmount(() => canvasDiv.value.removeChild(application.view));

defineExpose({
	generate: () => application.renderer.extract.base64(application.stage)
});
</script>

<template>
<div
	class="canvas"
	ref="canvasDiv"
></div>
</template>
