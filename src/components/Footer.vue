<template>
  <footer class="footer">
    <h2>Contact</h2>

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

    <p>Zakhar Startsev | 2024</p>
  </footer>
</template>

<style>
.footer {
  height: 420px;
  width: 100vw;
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
</style>
