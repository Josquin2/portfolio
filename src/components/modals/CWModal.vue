<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  text: Object
})

import { onCWButtonClick } from '@/functions'

function onEnglishCWClick() {
  window.open('resume/resume-en.pdf', '_blank')
}

function onRussianCWClick() {
  window.open('resume/resume-ru.pdf', '_blank')
}
</script>

<template>
  <div class="CW-modal closed" id="cw-modal">
    <div class="modal-common">
      <div class="close-button" @click="onCWButtonClick">
        <img src="/resume/close.png" alt="" />
      </div>
      <div class="text">
        <h4>{{ props.text?.title }}</h4>
      </div>
      <div class="languages">
        <button @click="onEnglishCWClick">{{ props.text?.en }}</button>
        <button @click="onRussianCWClick">{{ props.text?.ru }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.CW-modal {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #111111a6;

  .modal-common {
    width: 483px;
    height: 231px;
    background-color: #191919;
    border-radius: 10px;
    padding: 12px 18px;
    display: flex;
    flex-direction: column;

    .close-button {
      cursor: pointer;
      align-self: flex-end;
      height: 52px;

      img {
        margin-top: 8px;
        width: 24px;
      }
    }

    .text {
      align-self: center;
      margin-top: 12px;

      h4 {
        font-size: 24px;
      }
    }
    .languages {
      margin-top: 32px;
      align-self: center;
      display: flex;
      gap: 24px;

      button {
        cursor: pointer;
        padding: 10px 32px;
        border-radius: 24px;
        font-size: 18px;
        font-weight: 600;
        background-color: #191919;
        border: 2px solid #ffffff;
      }
    }
  }
}
</style>
