<template>
  <header class="header">
    <div class="name-logo">
      <h1>Zac</h1>
    </div>
    <div class="header-links">
      <p>Home</p>
      <p>Projects</p>
      <p>Experience</p>
      <p>Contact</p>
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
    gap: 71px;

    p {
      cursor: pointer;
      border-bottom: 1px solid #222222;
      transition: 0.1s ease-in-out;
    }

    p:hover {
      border-bottom: 1px solid #ffffff;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .header {
    padding: 0 10vw;
  }
}
</style>
