<script setup lang="ts">
import ExpLogos from '@/components/ExpLogos.vue'
import OneProject from '@/components/OneProject.vue'
</script>

<template>
  <div class="home-view">
    <div class="photo">
      <span class="photo-background"><img src="/i-am.png" alt="" /></span>
    </div>
    <div class="few-words">
      <h1>Hi there!, I’m Zac!</h1>
      <p>
        I am a front-end software engineer, specializing in website development using various
        frameworks.
      </p>
      <div class="buttons">
        <button class="get-in-touch">Get In Touch</button>
        <button class="cw">Download CW</button>
      </div>
    </div>

    <ExpLogos />

    <div class="projects">
      <h2>PROJECTS</h2>
      <div class="two-projects">
        <OneProject />
        <OneProject />
      </div>
    </div>
    <div class="experience-company">
      <h2>EXPERIENCE</h2>
      <div class="all-companies">
        <div class="one-company">
          <div class="comp-header">
            <h4>Junior Front-End Software Engineer</h4>
            <p>Apr 2024 - Present</p>
          </div>
          <div class="text">
            <p>
              As part of my job, I was involved in the development of web applications using the Vue
              framework. My responsibilities included transforming Figma layouts into functional web
              pages. Special attention was paid to responsive design, thanks to which the sites I
              created were correctly displayed on both computers and mobile devices.
            </p>
          </div>
        </div>
      </div>
    </div>
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
</style>
