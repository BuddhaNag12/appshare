<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const { login } = useAuthStore()
</script>

<template>
  <form>
    <v-row class="justify-center">
      <v-col cols="12" sm="4" lg="4" md="4">
        <v-card class="mx-auto">
          <v-card-title class="text-center">Login</v-card-title>
          <v-card-item>
            <v-text-field label="E-mail" required type="email"></v-text-field>
          </v-card-item>
          <v-card-item>
            <v-text-field label="Password" required type="password"></v-text-field>
          </v-card-item>
          <v-card-actions class="justify-center">
            <v-row>
              <v-col cols="12" align="center">
                <v-btn block> Login </v-btn>
              </v-col>
              <v-col cols="12" align="center">
                <em class="text-caption">Don't have an account?</em>&nbsp;
                <v-btn class="text-capitalize" to="/auth/register"> Register </v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn block :onclick="login">
                  Continue with google<v-icon icon="mdi-google" color="red"></v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </form>
</template>
