<template>
    <div class="item">
        <slot name="title"></slot>
        <slot name="price"></slot>
    </div>
</template>



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