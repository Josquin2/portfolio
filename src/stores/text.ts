import { defineStore } from 'pinia'

export const useLangStore = defineStore({
  id: 'localization',
  state: () => ({
    currentLanguage: 'en',
    text: {
      en: {
        hello: 'Hi there, I’m Zac!',
        about_me:
          'I am a front-end software engineer, specializing in website development using various frameworks.',
        buttons: {
          get_in_touch: 'Get In Touch',
          cw: 'Download CW'
        },
        exp_logos: 'EXPERIENCE WITH',
        projects: {
          title: 'PROJECTS'
        },
        work_experience: {
          title: '',
          first_job: {
            name: 'Junior Front-End Software Engineer',
            date: 'Apr 2024 - Present',
            text: 'As part of my job, I was involved in the development of web applications using the Vue framework. My responsibilities included transforming Figma layouts into functional web pages. Special attention was paid to responsive design, thanks to which the sites I created were correctly displayed on both computers and mobile devices.'
          }
        },

        modals: {
          cw: {
            title: 'Choose language',
            ru: 'Russian',
            en: 'English'
          },
          contact: {
            title: 'Contact with me!',
            tg: 'Telegram',
            email: 'Email'
          }
        }
      },
      ru: {
        hello: 'Привет, я Захар!',
        about_me:
          'Я front-end разработчик, специализирующийся на разработке веб-сайтов с использованием различных фреймворков.',
        buttons: {
          get_in_touch: 'Связаться',
          cw: 'Резюме'
        },
        exp_logos: 'ОПЫТ РАБОТЫ С',
        projects: {
          title: 'ПРОЕКТЫ'
        },
        work_experience: {
          title: 'ОПЫТ',
          first_job: {
            name: 'Junior Front-End Software Engineer',
            date: 'Апр 2024 - Наст. вр.',
            text: 'В рамках своей работы я занимался разработкой веб-приложений, используя фреймворк Vue. Мои обязанности включали в себя преобразование макетов Figma в функциональные веб-страницы. Особое внимание уделялось адаптивной верстке, благодаря чему созданные мной сайты корректно отображались как на компьютерах, так и на мобильных устройствах.'
          }
        },

        modals: {
          cw: {
            title: 'Выберите язык',
            ru: 'Русский',
            en: 'Английский'
          },
          contact: {
            title: 'Свяжитесь со мной!',
            tg: 'Телеграм',
            email: 'Почта'
          }
        }
      }
    }
  }),
  getters: {
    currLang: (state) => {
      return state.currentLanguage
    },
    getText: (state) => {
      return state.text[state.currLang]
    }
  },
  actions: {
    setLanguage(language: string) {
      this.currentLanguage = language
    }
  }
})
