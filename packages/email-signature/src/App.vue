<script setup>
import { ref } from 'vue';
import { Legacy } from './Solution/index.mjs';
import { base64ToBlob } from './utils.mjs';
import addressList from './address.json';

const data = ref({
	name: '姓名',
	position: '系统研发工程师',
	telephone: '13800000000',
	emailName: 'example',
	homeURL: 'www.xmirror.cn',
	address: '北京市中关村软件园一期8号楼',
});

const solution = ref(null);

const solutionList = [
	{ name: Legacy.name, NameCard: Legacy.NameCard }
];

async function download() {
	const base64 = await solution.value.generate();
	const blob = base64ToBlob(base64.split(',')[1], 'image/png');
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');

	a.href = url;
	a.setAttribute('download', `xmirror_email_signature_${Date.now()}.png`);
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}
</script>

<template>
<b-container
	class="h-100 p-0 d-flex align-items-center justify-content-center"
>
	<b-row class="justify-content-center">
		<b-col
			lg="auto"
			cols="12"
			class="d-flex justify-content-center"
		>
			<component
				:is="solutionList[0].NameCard"
				:name="data.name"
				:position="data.position"
				:telephone="data.telephone"
				:email="data.emailName"
				:homeURL="data.homeURL"
				:address="data.address"
				ref="solution"
			/>
		</b-col>

		<div class="w-100"></div>

		<b-col lg="6" cols="9">
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

				<div class="w-100"></div>

				<b-col cols="3">
					<b-form-group
						id="data-telephone"
						class="mb-1"
						label="联系方式"
					><b-form-input
						v-model.trim="data.telephone"
					/></b-form-group>
				</b-col>

				<b-col cols="3">
					<b-form-group
						id="data-email"
						class="mb-1"
						label="邮箱账户名"
					><b-form-input
						v-model.trim="data.emailName"
					/></b-form-group>
				</b-col>

				<b-col>
					<b-form-group
						id="data-address"
						class="mb-1"
						label="地点"
					><b-form-select
						v-model.trim="data.address"
						:options="addressList"
					/></b-form-group>
				</b-col>
			</b-form-row>

			<b-button
				variant="success"
				block
				class="mt-2"
				@click="download"
			>生成</b-button>
		</b-col>
	</b-row>
</b-container>
</template>

<style>

</style>
