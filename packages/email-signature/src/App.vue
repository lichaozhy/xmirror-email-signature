<script setup>
import { reactive, ref } from 'vue';
import { Legacy } from './Solution/index.mjs';

const data = ref({
	name: '姓名',
	position: '系统研发工程师',
	telephone: '13800000000',
	emailName: 'example',
	homeURL: 'www.xmirror.cn',
	address: '北京市中关村软件园一期8号楼',
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
		:email="data.emailName"
		:homeURL="data.homeURL"
		:address="data.address"
	/>
	<div class="px-1">
		<b-form-row>
			<b-col>
				<b-form-group
					id="data-name"
					class="mb-1"
					label="姓名"
				><b-form-input
					v-model.trim="data.name"
				/></b-form-group>
			</b-col>
			<b-col cols="8">
				<b-form-group
					id="data-position"
					class="mb-1"
					label="职位"
				><b-form-input
					v-model.trim="data.position"
				/></b-form-group>
			</b-col>
		</b-form-row>

		<b-form-group
			id="data-telephone"
			class="mb-1"
			label="联系方式"
		><b-form-input
			v-model.trim="data.telephone"
		/></b-form-group>

		<b-form-group
			id="data-email"
			class="mb-1"
			label="邮箱账户名"
		><b-form-input
			v-model.trim="data.emailName"
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
