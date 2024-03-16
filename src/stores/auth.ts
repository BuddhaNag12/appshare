import { ref, computed } from 'vue'
import { type UserCredential } from 'firebase/auth'

import { defineStore } from 'pinia'
import { AuthService } from '@/services/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserCredential>()

  async function login() {
    const responseData = await AuthService.login()
    user.value = responseData
  }

  const isLoggedIn = computed(() => (user.value?.user ? true : false))

  return { login, isLoggedIn, user }
})
