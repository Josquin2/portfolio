<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: String
})
</script>

<template>
  <div class="experience-logos">
    <h3>{{ props.title }}</h3>
    <div class="logos">
      <img src="/javascript.png" alt="" />
      <!-- <img src="/nodejs.png" alt="" /> -->
      <img src="/vue.png" alt="" />
      <img src="/html.png" alt="" />
      <img src="/css.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.experience-logos {
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 4px;
  }

  .logos {
    display: flex;
    margin-top: 56px;

    gap: 60px;
    img {
      height: 42px;
    }
  }
}
</style>
