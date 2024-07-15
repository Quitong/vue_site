<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You are not a potato!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
-->

<script setup>
import GoodsItem from './components/GoodsItem.vue'
</script>
<template>
  <button @click="getPosts">Get posts</button>
  <GoodsItem v-for="post in posts.data" :key="post.id" data-test="post" :id = "post.id" :likes="post.likes">
    <template #title>
      {{ post.name }}
    </template>
    <template #price>
      {{ post.cost }}
    </template>
  </GoodsItem>
  
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: {data:null}
    }
  },
  methods: {
    async getPosts() {
      this.posts = await axios.get('http://192.168.0.107:8000/shop/shop/')
      console.log(this.posts)
    }
  }
}
</script>
<style scoped> 
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
