<script setup>
import Card from '../components/Card.vue'
import q from '../data/quizes.json'
import { ref, watch } from 'vue'

const quizes = ref(q)
const search = ref('')

watch(search, () => {
	quizes.value = q.filter((quiz) =>
		quiz.name.toLowerCase().includes(search.value.toLowerCase())
	)
})
</script>

<template>
	<div>
		<div class="py-10 flex items-center gap-8">
			<h2
				v-motion
				:initial="{ y: -100, opacity: 0 }"
				:enter="{
					y: 0,
					opacity: 1,
					transition: {
						duration: 300,
						type: 'damping',
						stiffness: 250,
						damping: 25,
						mass: 0.5,
						ease: 'easeIn',
					},
				}"
				class="text-5xl text-purple-700 font-semibold">
				Quizes
			</h2>
			<input
				v-model="search"
				class="mt-3 text-base px-2 h-[30px] rounded-sm border-[1px] border-gray-400"
				type="text"
				v-motion
				:initial="{ x: 50, opacity: 0 }"
				:enter="{
					x: 0,
					opacity: 1,
					transition: {
						duration: 300,
						type: 'damping',
						stiffness: 250,
						ease: 'easeIn',
					},
				}"
				placeholder="Search..." />
		</div>

		<div class="flex flex-wrap gap-8">
			<Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" v-motion-pop />
		</div>
	</div>
</template>
