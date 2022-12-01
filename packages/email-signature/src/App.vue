<script setup>
import { reactive, ref } from 'vue';
import { Legacy } from './Solution/index.mjs';

const data = reactive({
	name: ref(''),
	position: ref(''),
	telephone: ref(''),
	email: ref(''),
	homeURL: ref('www.xmirror.cn'),
	address: ref('北京市中关村软件园一期8号楼'),
});

const solutionList = [
	{ name: Legacy.name, NameCard: Legacy.NameCard }
];
</script>

<template>
<b-container
	fluid
	class="h-100 p-0 d-flex align-items-center justify-content-center"
>
	<component
		class="d-flex"
		:is="solutionList[0].NameCard"
		:name="data.name"
		:position="data.position"
		:telephone="data.telephone"
		:email="data.email"
		:homeURL="data.homeURL"
		:address="data.address"
	/>
	<div class="px-1">
		<b-form-row>
			<b-col>
				<b-form-group
					id="data-name"
					label="姓名"
				><b-form-input
					v-model="data.name"
				/></b-form-group>
			</b-col>
			<b-col cols="8">
				<b-form-group
					id="data-position"
					label="职位"
				><b-form-input
					v-model="data.position"
				/></b-form-group>
			</b-col>
		</b-form-row>

		<b-form-group
			id="data-telephone"
			label="联系方式"
		><b-form-input
			v-model="data.telephone"
		/></b-form-group>

		<b-form-group
			id="data-email"
			label="邮箱"
		><b-form-input
			v-model="data.email"
		/></b-form-group>

		<b-button
			variant="success"
			block
		>生成</b-button>
	</div>
</b-container>
</template>

<style>

</style>
