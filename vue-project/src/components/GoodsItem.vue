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
  await axios.post('http://192.168.0.107:8000/shop/shop/'+props.id+'/like/',{})
  .then((response) => {
    if (response.status == 200){
      inner_likes.value++
    }
  })

}
async function addToCard(){
  await axios.post('http://192.168.0.107:8000/shop/shop/'+props.id+'/add_to_basket/',{})
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