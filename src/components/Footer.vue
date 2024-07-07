<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useLangStore } from '@/stores/text'
import { useRoute } from 'vue-router'

const route = useRoute()

const text = {
  en: {
    title: 'Contacts',
    name: 'Zakhar Startsev | 2024'
  },
  ru: {
    title: 'Контакты',
    name: 'Захар Старцев | 2024'
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
  <footer class="footer">
    <h2>{{ currentText.title }}</h2>

    <div class="all-icons">
      <div class="icon">
        <img src="/email-icon.png" alt="" />
        <a href="mailto:Josquinwork@mail.ru">Josquinwork@mail.ru</a>
      </div>
      <div class="icon">
        <img src="/gh-icon.png" alt="" />
        <a href="https://github.com/Josquin2">Josquin2</a>
      </div>
      <div class="icon">
        <img src="/tg-icon.png" alt="" />
        <a href="https://t.me/Josquin2">Josquin2</a>
      </div>
    </div>

    <hr />

    <p>{{ currentText.name }}</p>
  </footer>
</template>

<style>
.footer {
  height: 420px;
  width: 100%;
  background-color: #1d1d1d;
  padding: 72px 21.8vw;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    font-weight: 800;
    color: #ffffff;
  }

  .all-icons {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .icon {
      display: flex;
      align-items: center;

      img {
        width: 27px;
        height: 27px;
      }

      a {
        text-decoration: none;
        color: #c5c5c5;
        margin: 0;
        margin-left: 8px;
        font-size: 16px;
      }
    }
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #c5c5c5;
    margin: 1em 0;
    padding: 0;
    margin-top: 48px;
  }

  p {
    margin-top: 12px;
    align-self: center;
  }
}

@media only screen and (max-width: 1000px) {
  .footer {
    padding: 72px 10vw;
  }
}

@media only screen and (max-width: 500px) {
  .footer {
    zoom: 0.7;
  }
}
</style>
