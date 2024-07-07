export interface Text {
  hello: string
  about_me: string
  buttons: {
    get_in_touch: string
    cw: string
  }
  exp_logos: string
  projects: {
    title: string
    first: OneProject
    second: OneProject
  }
  work_experience: {
    title: string
    first_job: {
      name: string
      date: string
      text: string
    }
  }
  modals: {
    cw: {
      title: string
      ru: string
      en: string
    }
    contact: {
      title: string
      tg: string
      email: string
    }
  }
}

export interface Language {
  currentLanguage: string
}

interface OneProject {
  title: string
  image: string
  click: string
}
