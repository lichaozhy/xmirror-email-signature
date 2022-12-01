<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

function showModal() {
	console.log(11111);
}
</script>

<template>
	<header>
    <b-jumbotron
      header="Bootstrap-Vue"
      lead="Bootstrap v4 Components for Vue.js 2"
    >
      <p>Now running on @vue/compat and Vue.js 3</p>
      <b-button variant="primary" @click="showModal"> Click me! </b-button>
    </b-jumbotron>
	</header>

	<main>
	</main>
</template>

<style>
</style>
