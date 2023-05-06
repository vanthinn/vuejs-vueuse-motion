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
		class="bg-white rounded-md w-[300px] overflow-hidden shadow-2xl hover:cursor-pointer hover:border-[2px] hover:border-purple-500">
		<img class="" :src="quiz.img" alt="img" />
		<div class="ml-2">
			<h2 class="font-semibold text-xl pt-1">{{ quiz.name }}</h2>
			<p class="font-thin">{{ quiz.questions.length }} questions</p>
		</div>
	</div>
</template>
