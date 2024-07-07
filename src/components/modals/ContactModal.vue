<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  text: Object
})

import { onContactButtonClick } from '@/functions'

function onTelegramClick() {
  window.open('https://t.me/Josquin2')
}

function onEmailClick() {
  window.open('mailto:Josquinwork@mail.ru')
}
</script>

<template>
  <div class="contact-modal closed" id="contact-modal">
    <div class="modal-common">
      <div class="close-button" @click="onContactButtonClick">
        <img src="/resume/close.png" alt="" />
      </div>
      <div class="text">
        <h4>{{ props.text?.title }}</h4>
      </div>
      <div class="languages">
        <button @click="onTelegramClick">{{ props.text?.tg }}</button>
        <button @click="onEmailClick">{{ props.text?.email }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contact-modal {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
