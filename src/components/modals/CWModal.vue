<script setup lang="ts">
import { onCWButtonClick } from '@/functions.ts'

function onEnglishCWClick() {
  window.location.href = '/resume/resume-en.pdf'
}

function onRussianCWClick() {
  window.location.href = '/resume/resume-ru.pdf'
}
</script>

<template>
  <div class="CW-modal closed" id="cw-modal">
    <div class="modal-common">
      <div class="close-button" @click="onCWButtonClick">X</div>
      <div class="text">
        <h4>Choose language</h4>
      </div>
      <div class="languages">
        <button @click="onEnglishCWClick">English</button>
        <button @click="onRussianCWClick">Russian</button>
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
      font-size: 32px;
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
