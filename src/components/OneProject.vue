<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  text: Object
})
</script>

<template>
  <div class="one-project">
    <img :src="props.text?.image" alt="" />
    <div class="p-footer">
      <div class="lp-f">
        <p>{{ props.text?.click }}</p>
        <h3>{{ props.text?.title }}</h3>
      </div>
      <div class="rp-f">
        <img src="/arrow.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.one-project {
  cursor: pointer;
  height: 301px;
  width: 390px;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 390px;
    height: 235px;
  }

  .p-footer {
    background-color: #222222;
    padding: 13px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .lp-f {
      p {
        margin: 0;
        font-size: 10px;
        color: #c5c5c5;
      }
      h3 {
        margin: 0;
        font-size: 19px;
        font-weight: 700;
        color: #ffffff;
      }
    }
    .rp-f {
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>
