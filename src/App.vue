<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="main">
    <Header />
    <RouterView class="page-common" />
    <Footer />
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.page-common {
  min-height: 70vh;
}
</style>
