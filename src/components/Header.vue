<script setup lang="ts">
import { ref, watch } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute()

function onLangClick() {
  if (route.params.lang == 'ru') {
    router.push({ name: 'main-page', params: { lang: 'en' } })
  } else {
    router.push({ name: 'main-page', params: { lang: 'ru' } })
  }
}

const text = {
  en: {
    proj: 'Projects',
    exp: 'Experience',
    cont: 'Contacts'
  },
  ru: {
    proj: 'Проекты',
    exp: 'Опыт',
    cont: 'Контакты'
  }
}

const currentText = ref(text.ru)

watch(
  () => route.params.lang,
  (newLang) => {
    currentText.value = text[newLang]
  }
)
</script>

<template>
  <header class="header">
    <div class="name-logo">
      <h1>Zac</h1>
    </div>
    <div class="header-links">
      <p>{{ currentText.proj }}</p>
      <p>{{ currentText.exp }}</p>
      <p>{{ currentText.cont }}</p>
      <div class="icon" @click="onLangClick">
        <img src="/uk.png" alt="" v-if="route.params.lang == 'en'" />
        <img src="/ru.png" alt="" v-else />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #222222;
  padding: 0 21.8vw;

  .header-links {
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 71px;

    p {
      cursor: pointer;
      border-bottom: 1px solid #222222;
      transition: 0.1s ease-in-out;
    }

    p:hover {
      border-bottom: 1px solid #ffffff;
    }

    .icon {
      cursor: pointer;
      display: flex;
      width: 32px;
      height: 32px;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .header {
    padding: 0 10vw;
  }
}
</style>
