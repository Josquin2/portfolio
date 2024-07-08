<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import ExpLogos from '@/components/ExpLogos.vue'
import OneProject from '@/components/OneProject.vue'
import CWModal from '@/components/modals/CWModal.vue'
import ContactModal from '@/components/modals/ContactModal.vue'
import { onCWButtonClick, onContactButtonClick } from '@/functions'
import { useLangStore } from '@/stores/text'
import { useRoute } from 'vue-router'

const route = useRoute()

const lang = useLangStore()

let currlang = lang.currLang
let text = ref(lang.getText)
let setLanguage = lang.setLanguage

onMounted(() => {
  setNewLang(route.params.lang)
})

watch(
  () => route.params.lang,
  (newLang) => {
    setNewLang(newLang)
  }
)

function setNewLang(language: string) {
  setLanguage(language)
  text.value = lang.getText
}

function onFirstProjectClick() {
  window.open('https://github.com/Josquin2/skytec-lc')
}
function onSecondProjectClick() {
  window.open('https://github.com/Josquin2/car-rental')
}
</script>

<template>
  <div class="home-view">
    <div class="photo">
      <span class="photo-background"><img src="/i-am.png" alt="" /></span>
    </div>
    <div class="few-words">
      <h1>{{ text.hello }}</h1>
      <p>
        {{ text.about_me }}
      </p>
      <div class="buttons">
        <button class="get-in-touch" @click="onContactButtonClick">
          {{ text.buttons.get_in_touch }}
        </button>
        <button class="cw" @click="onCWButtonClick">{{ text.buttons.cw }}</button>
      </div>
    </div>

    <ExpLogos :title="text.exp_logos" />

    <div class="projects" id="projects">
      <h2>{{ text.projects.title }}</h2>
      <div class="two-projects">
        <OneProject :text="text.projects.first" @click="onFirstProjectClick()" />
        <OneProject :text="text.projects.second" @click="onSecondProjectClick()" />
      </div>
    </div>
    <div class="experience-company" id="experience">
      <h2>{{ text.work_experience.title }}</h2>
      <div class="all-companies">
        <div class="one-company">
          <div class="comp-header">
            <h4>{{ text.work_experience.first_job.name }}</h4>
            <p>{{ text.work_experience.first_job.date }}</p>
          </div>
          <div class="text">
            <p>
              {{ text.work_experience.first_job.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- modals goes there -->
    <CWModal :text="text.modals.cw" />
    <ContactModal :text="text.modals.contact" />
  </div>
</template>

<style lang="scss">
.home-view {
  padding: 100px 21.8vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .photo {
    width: 213px;
    height: 213px;

    .photo-background {
      width: 213px;
      height: 213px;
      display: flex;
      position: absolute;
      background: linear-gradient(to bottom right, #ff8660, #d5491d);
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .few-words {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
      margin: 0;
      font-size: 55px;
      color: #ffffff;
      font-weight: 600;
      margin-top: 35px;
    }
    p {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      max-width: 572px;
      margin-top: 48px;
    }

    .buttons {
      margin-top: 38px;
      display: flex;
      gap: 18px;

      button {
        cursor: pointer;
        padding: 16px 30px;
        border: none;
        border-radius: 50px;
        font-size: 21px;
        font-weight: 600;
      }

      .get-in-touch {
        background-color: #ffffff;
        color: #111111;
      }

      .cw {
        background-color: transparent;
        border: 2px solid #ffffff;
        color: #ffffff;
      }
    }
  }

  .projects {
    margin-top: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 35px;
      font-weight: 900;
      background: linear-gradient(to bottom, #ff8660, #d5491d);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .two-projects {
      margin-top: 32px;
      display: flex;
      gap: 91px;
    }
  }

  .experience-company {
    margin: 81px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 35px;
      font-weight: 900;
      background: linear-gradient(to bottom, #5badff, #1373d1);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .all-companies {
      margin-top: 48px;
      display: flex;
      flex-direction: column;

      .one-company {
        width: 810px;
        .comp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          h4 {
            font-size: 21px;
            color: #ffffff;
            font-weight: 700;
          }

          p {
            font-size: 14px;
          }
        }

        .text {
          margin-top: 18px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1000px) {
  .home-view {
    zoom: 0.8;
  }
}
@media only screen and (max-width: 750px) {
  .home-view {
    zoom: 0.7;
  }
}

@media only screen and (max-width: 600px) {
  .home-view {
    zoom: 0.6;

    .projects {
      .two-projects {
        flex-direction: column;
        gap: 42px;
      }
    }

    .experience-company {
      .all-companies {
        .one-company {
          width: 492px;

          .comp-header {
            display: flex;

            h4 {
              width: 300px;
            }
          }
          .text {
            margin-top: 32px;
          }
        }
      }
    }
  }
}
</style>
