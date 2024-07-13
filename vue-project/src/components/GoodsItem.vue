<template>
    <div class="item">
        <slot name="title"></slot>
        <slot name="price"></slot>
        <button @click="addToCard">Buy</button>
        <button @click="like">❤{{ inner_likes }}</button>
    </div>
</template>

<script setup>
import {ref} from "vue"
import axios from "axios"
const props = defineProps(["id","likes"])
const inner_likes = ref(props.likes)
async function like(){
  inner_likes.value ++
}
async function addToCard(){
  await axios.get('http://127.0.0.1:5000/buy/'+props.id)
}
</script>



<style scoped>

.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}


@media (min-width: 1024px) {
    .item {
      margin-top: 0;
      padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    }
}
</style>