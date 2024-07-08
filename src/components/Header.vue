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

function onBurgerClick() {
  document.getElementById('burger')?.classList.toggle('closed')
}

function onProjectsClick() {
  const element = document.getElementById('projects')
  element?.scrollIntoView({ behavior: 'smooth' })
  closeBurger()
}

function onExperienceClick() {
  const element = document.getElementById('experience')
  element?.scrollIntoView({ behavior: 'smooth' })
  closeBurger()
}

function onContactsClick() {
  const element = document.getElementById('contacts')
  element?.scrollIntoView({ behavior: 'smooth' })
  closeBurger()
}

function closeBurger() {
  if (!document.getElementById('burger')?.classList.contains('closed')) {
    onBurgerClick()
  }
}
</script>

<template>
  <header class="header">
    <div class="name-logo">
      <img src="/logo-zac-main.png" alt="" />
    </div>
    <div class="header-links">
      <p @click="onProjectsClick">{{ currentText.proj }}</p>
      <p @click="onExperienceClick">{{ currentText.exp }}</p>
      <p @click="onContactsClick">{{ currentText.cont }}</p>
      <div class="icon" @click="onLangClick">
        <img src="/uk.png" alt="" v-if="route.params.lang == 'en'" />
        <img src="/ru.png" alt="" v-else />
      </div>
      <div class="burger-menu">
        <img src="/burger.png" alt="" @click="onBurgerClick" />
        <div class="extended closed" id="burger">
          <p class="p" @click="onProjectsClick">{{ currentText.proj }}</p>
          <p class="p" @click="onExperienceClick">{{ currentText.exp }}</p>
          <p class="p" @click="onContactsClick">{{ currentText.cont }}</p>
        </div>
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
    .burger-menu {
      display: none;
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

@media only screen and (max-width: 700px) {
  .header {
    .header-links {
      gap: 36px;
      p {
        display: none;
      }
      .burger-menu {
        display: flex;

        .extended {
          position: absolute;
          z-index: 10;
          left: 0;
          top: 0;
          margin-top: 100px;
          width: 100vw;
          height: max-content;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #333333;

          background-color: #222222;
          .p {
            border-bottom: 1px solid #333333;
            display: flex;
            align-items: center;
            height: 9vh;
            font-size: 28px;
            text-align: center;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
