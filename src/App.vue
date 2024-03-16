<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppBar from '@/components/core/AppBar.vue'
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
