<script setup>
import Card from "../components/Card.vue";
import q from "../data/quizes.json"
import { ref,watch } from "vue"

const quizes = ref(q)
const search = ref("")

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  
})
  
</script>

<template >
  <div>
    <div class="py-10 flex items-center gap-8">
      <h2 class="text-4xl text-purple-700 font-semibold">Quizes</h2>
      <input v-model="search" class="text-base px-2 h-[30px] rounded-sm border-[1px] border-gray-400" type="text" placeholder="Search...">
    </div>

    <div class="flex flex-wrap gap-8">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>

  </div>
</template>

