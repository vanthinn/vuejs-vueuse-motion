<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const { quiz } = defineProps(['quiz'])
const router = useRouter()
const navigateTo = () => {
	router.push(`/quiz/${quiz.id}`)
}
</script>

<template>
	<div
		@click="navigateTo"
		v-motion
		:hovered="{
			scale: 1.1,
		}"
		class="bg-white rounded-md flex flex-col w-[300px] overflow-hidden shadow-2xl cursor-pointer h-[230px]">
		<img
			class="h-[75%] w-full object-cover top-0 right-0"
			:src="quiz.img"
			alt="img" />
		<div class="ml-2 flex flex-col justify-center">
			<h2 class="font-semibold text-xl">{{ quiz.name }}</h2>
			<p class="font-thin">{{ quiz.questions.length }} questions</p>
		</div>
	</div>
</template>
