<script setup>
import { defineProps, defineEmits } from 'vue'

const { quiz } = defineProps(['quiz'])
const emit = defineEmits(['selectOption'])

const emitSelectOption = (isCorrect) => {
	emit('selectOption', isCorrect)
}
</script>

<template>
	<h2 class="text-3xl mb-6">
		{{ quiz.text }}
	</h2>
	<div class="flex flex-col gap-4 mb-2">
		<div
			v-for="option in quiz.options"
			:key="option.id"
			@click="emitSelectOption(option.isCorrect)"
			class="flex items-center gap-5">
			<span class="bg-purple-700 text-white px-3 py-1 cursor-pointer">{{
				option.label
			}}</span>
			<p
				class="bg-purple-100 px-4 py-1 w-[40%] hover:translate-x-[-8px] cursor-pointer">
				{{ option.text }}
			</p>
		</div>
	</div>
</template>
