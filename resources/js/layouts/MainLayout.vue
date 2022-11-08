<template>
    <v-app>
        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
</script>
