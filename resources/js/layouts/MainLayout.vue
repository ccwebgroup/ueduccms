<template>
    <v-app>
        <!-- <v-toolbar color="transparent">
            <v-btn
                rounded="lg"
                icon="mdi-menu"
                color="grey"
                variant="flat"
            ></v-btn>
        </v-toolbar> -->
        <v-app-bar :elevation="0" class="mt-5 mx-16 px-16">
            <v-btn
                @click="drawer = !drawer"
                rounded="lg"
                icon="mdi-menu"
                color="grey"
                variant="flat"
            ></v-btn>
        </v-app-bar>

        <v-navigation-drawer floating v-model="drawer">
            <div class="h3">DISCUSSION AND ANALYSIS</div>
        </v-navigation-drawer>
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
