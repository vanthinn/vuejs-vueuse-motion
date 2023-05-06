<script setup>
import Question from './Question.vue'
import { useRoute, RouterLink } from 'vue-router'
import q from '../data/quizes.json'
import { ref, computed } from 'vue'

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = q.find((quiz) => quiz.id == quizId)
const currentQuestionindex = ref(0)
const answercorrect = ref(0)
const ishowResults = ref(false)

// const questionStatus = computed(
// 	() => `${currentQuestionindex.value} / ${quiz.questions.length}`
// 	)
const questionStatus = computed(() => {
	return `${currentQuestionindex.value} / ${quiz.questions.length}`
})

const percentStatus = computed(() => {
	return `${(currentQuestionindex.value / quiz.questions.length) * 100}%`
})

const handleNext = () => {
	if (quiz.questions.length > currentQuestionindex.value) {
		currentQuestionindex.value++
	}
	if (quiz.questions.length === currentQuestionindex.value) {
		ishowResults.value = true
	}
}

const onOptionSelect = (isCorrect) => {
	if (isCorrect) {
		answercorrect.value++
	}
	handleNext()
}
</script>

<template>
	<div class="py-10">
		<header>
			<h4 class="text-xl mb-3">Question {{ questionStatus }}</h4>
			<div class="h-[36px] w-[200px] border-[2px] border-purple-600">
				<div
					:style="{ width: percentStatus }"
					class="h-full bg-purple-600"></div>
			</div>
		</header>

		<div class="mt-4">
			<Question
				v-if="!ishowResults"
				:quiz="quiz.questions[currentQuestionindex]"
				@selectOption="onOptionSelect" />
			<div v-else class="w-full flex flex-col justify-center items-center">
				<div class="flex flex-col">
					<h4 class="text-5xl">Result</h4>
					<span class="text-6xl mt-8"
						>{{ answercorrect }} / {{ quiz.questions.length }}</span
					>
				</div>
				<RouterLink
					to="/"
					class="mt-12 px-2 py-1 bg-purple-500 rounded-md text-white">
					Go Home
				</RouterLink>
			</div>
		</div>

		<button
			v-if="!ishowResults"
			@click="handleNext"
			class="mt-6 text-white rounded-md bg-purple-500 px-2 py-1">
			Next question
		</button>
	</div>
</template>
