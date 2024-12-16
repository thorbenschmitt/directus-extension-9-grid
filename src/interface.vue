<template>
	<div class="alignment-picker">
		<div class="grid">
			<input v-for="(option, index) in options" :key="index" class="grid-item" type="radio" :name="pickerName"
				:value="option.value" :checked="option.value === value" @change="updateValue(option.value)" />

		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		value: {
			type: String,
			default: null,
		}, options: {
			type: Array,
			default: () => [
				{ value: "top-left", label: "Top-Left" },
				{ value: "top-center", label: "Top-Center" },
				{ value: "top-right", label: "Top-Right" },
				{ value: "middle-left", label: "Middle-Left" },
				{ value: "middle-center", label: "Middle-Center" },
				{ value: "middle-right", label: "Middle-Right" },
				{ value: "bottom-left", label: "Bottom-Left" },
				{ value: "bottom-center", label: "Bottom-Center" },
				{ value: "bottom-right", label: "Bottom-Right" },
			],
		},
	},
	emits: ['input'],

	setup(props, { emit }) {
		const pickerName = `alignment-picker-${Math.random().toString(36).substr(2, 5)}`;
		function updateValue(value: string): void {
			emit('input', value);
		}
		return { updateValue, pickerName };


	},
});
</script>
<style scoped>
.alignment-picker {
	display: flex;

}

.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 5px;

}
</style>