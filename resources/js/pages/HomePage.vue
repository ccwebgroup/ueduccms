<template>
    <div v-scroll="onScroll">
        <q-layout view="hHh LpR fFf">
            <q-drawer v-model="sideMenu" :width="550" elevated>
                <q-card flat class="mt-5 q-pa-md">
                    <q-btn @click="sideMenu = false" size="1.8rem" flat round class="float-right text-bold mt-5"
                        icon="arrow_back" />
                    <q-item-label class="text-h3 montserrat text-bold ml-6">DISCUSSION AND ANALYSIS</q-item-label>

                    <q-list class="mt-5 q-gutter-y-sm">
                        <q-item @click="sideMenu = false" v-for="item in units" clickable :to="item.path"
                            active-class="active-unit">
                            <q-item-section>
                                <q-item-label class="text-subtitle1 montserrat">{{ item.units }}</q-item-label>
                                <q-item-label class="text-h6 montserrat text-bold mt-4">{{ item.title }}
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card>
            </q-drawer>

            <q-page-container>
                <div style="max-width: 900px" class="mx-auto">
                    <v-toolbar v-if="!$vuetify.display.sm && !sideMenu" dense floating color="transparent"
                        class="text-left ml-5" style="position: sticky; top: 2rem; z-index: 1">
                        <v-btn @click="sideMenu = true" rounded="lg" icon="mdi-menu" variant="flat" class="text-white"
                            style="background-color: rgba(0, 0, 0, 0.5)"></v-btn>
                    </v-toolbar>
                    <div class="mx-auto mt-5 banner-container">
                        <div class="text-white mt-5">
                            <div class="font-weight-bold responsive-text text-h2 montserrat">
                                Discussion and
                            </div>
                            <br>
                            <div class="text-h2 font-weight-bold mb-8 montserrat">
                                Analysis Basic
                            </div>

                            <div class="font-weight-thin mb-4 text-h4 montserrat">
                                Lesson 1: Importance of Advertising
                            </div>
                            <div class="text-h4 montserrat">1?????? - ????????? ?????????</div>
                        </div>

                        <div>
                            <v-img src="https://drive.google.com/uc?export=view&id=10vutpZxW5n_BoLQuW6UigqxZeIEWJn6c"
                                width="500"></v-img>
                        </div>
                    </div>

                    <v-row class="mt-3">
                        <v-col cols="12">
                            <p class="responsive-text body montserrat text-left">???If it doesn???t sell, it isn???t
                                creative.??? -
                                David Ogilvy&nbsp;
                            <div>&nbsp;"?????? ????????? ????????? ????????????, ????????? ??????????????? ?????? ?????????." - David Ogilvy</div>
                            </p>
                        </v-col>
                    </v-row>

                    <div class="text-center text-h4 font-weight-bold text-primary mt-9 montserrat">PREVIEW</div>
                    <v-row class="mt-4">
                        <v-col cols="12" sm="12" md="6">
                            <div class="text-h6 text-center responsive-text text-primary montserrat font-weight-bold">
                                Answer
                                the following questions.</div>
                            <div class="text-h6 text-center responsive-text text-primary montserrat font-weight-bold">
                                ?????? ?????????
                                ????????????.</div>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <div class="text-h6 montserrat">1. What do you think is the purpose of advertising?
                            </div>
                            <div class="text-h6">????????? ????????? ????????? ??????????????? ????????????????</div>
                            <div class="text-h6 montserrat mt-5">2. Why is advertising important?</div>
                            <div class="text-h6">??? ????????? ????????????????</div>
                        </v-col>
                    </v-row>
                    <div class="text-center text-h4 font-weight-bold text-primary mt-9 montserrat">VOCABULARY</div>
                    <v-row class="mt-4">
                        <v-col v-for="card in cards" cols="12" sm="12" md="4">
                            <v-card :height="$vuetify.display.sm ? undefined : '520'" border flat>
                                <v-img :src="card.image" width="150" class="mx-auto">
                                </v-img>

                                <v-card-title class="montserrat text-center text-primary text-h5 font-weight-bold">
                                    {{ card.title }}
                                    <div>{{ card.translation }}<br></div>
                                </v-card-title>
                                <v-card-text class="montserrat text-center font-weight-thin text-h6"
                                    style="color: rgba(0, 0, 0, 0.6);  letter-spacing: 0.114286px; line-height: 1.5em;">
                                    {{ card.subtitle }}
                                    <div>
                                        <span
                                            style=" letter-spacing: 0.114286px; color: rgba(0, 0, 0, 0.6); line-height: 1.5em;"
                                            class="selected">{{ card.subTranslation }}</span>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                    <div class="text-center text-h4 font-weight-bold text-primary mt-9 montserrat">READING</div>
                    <v-row class="mt-4">
                        <v-col cols="12" sm="12" md="6">
                            <div class="text-h6 text-center responsive-text text-primary montserrat font-weight-bold">
                                Importance of advertising</div>
                            <div class="text-h6 text-center responsive-text text-primary montserrat font-weight-bold">
                                ?????????
                                ?????????</div>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <div class="text-h6 montserrat">Advertising does not sell a product, but it plays an
                                essential
                                role in selling a product. It helps increase sales by getting people's attention,
                                making
                                them??? especially the target market??? become fully aware and informed about the
                                different
                                brands and product availability in the market.</div>
                            <div class="mt-5 text-h6">????????? ????????? ?????? ???????????? ????????? ????????? ?????? ???????????? ???????????? ????????? ??????. ????????? ?????? ?????? ?????????
                                ???????????? ?????????
                                ????????? ????????? ????????? ????????? ????????? ???????????? ????????? ????????? ???????????? ????????? ???????????? ?????? ????????? ??????????????? ????????? ?????????????????? ????????? ?????????.
                            </div>
                            <div class="text-h6 montserrat mt-10">In simple terms, advertising is a way to promote a
                                product
                                or a brand using different mediums. If a product is advertised well and its
                                information
                                reaches the masses, its chance of being sold increases.</div>
                            <div class="mt-5 text-h6">????????? ?????????, ????????? ?????? ????????? ???????????? ???????????? ???????????? ???????????? ???????????????. ????????? ??? ???????????? ?????????
                                ????????????
                                ???????????? ????????? ???????????? ????????????.</div>
                        </v-col>
                    </v-row>

                    <div class="text-center text-h4 font-weight-bold text-primary mt-9 montserrat">KEYWORDS</div>
                    <v-row class="mt-5">
                        <v-col v-for="key in keywords" cols="12" sm="12" md="3">
                            <v-card flat class="border pa-3">
                                <v-img :src="key.image" width="150" class="mx-auto"></v-img>
                                <div class="montserrat text-center text-primary text-h5 font-weight-bold">
                                    {{ key.title }}
                                </div>
                                <v-card-text class="text-center text-h6">
                                    {{ key.translation }}
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                    <div class="text-center text-h4 font-weight-bold text-primary mt-9 montserrat">DISCUSSION</div>
                    <v-row class="mt-4">
                        <v-col cols="12" sm="12" md="6">
                            <div class="text-h6 text-center responsive-text text-primary montserrat font-weight-bold">
                                Answer the following questions.</div>
                            <div class="text-h6 text-center responsive-text text-primary montserrat font-weight-bold">
                                ??????
                                ???????????? ????????????.</div>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <div class="text-h6 montserrat">1. How does advertising help increase sales?</div>
                            <div class="text-h6">????????? ?????? ????????? ????????? ????????? ??????????</div>
                            <div class="text-h6 montserrat mt-5">2. Does an advertisement affect your judgment about
                                a
                                product? Why or why not?</div>
                            <div class="text-h6">????????? ????????? ?????? ????????? ????????? ????????????? ???????????? ????????????? ????????? ??? ?????????????</div>
                            <div class="text-h6 montserrat mt-5">3. What???s the most interesting advertising you have
                                seen?
                            </div>
                            <div class="text-h6">????????? ??? ?????? ??? ?????? ??????????????? ?????? ????????????????</div>
                        </v-col>
                    </v-row>

                    <q-dialog v-model="mobileMenu" position="bottom">
                        <q-card flat class="q-pa-sm">
                            <q-item-label class="text-h4 montserrat text-center text-bold q-mt-md">DISCUSSION AND ANALYSIS
                            </q-item-label>

                            <q-list class="mt-5 q-gutter-y-sm">
                                <q-item @click="sideMenu = false" v-for="item in units" clickable :to="item.path"
                                    active-class="active-unit">
                                    <q-item-section>
                                        <q-item-label class="text-subtitle1 montserrat">{{ item.units }}</q-item-label>
                                        <q-item-label class="text-h6 montserrat text-bold mt-4">{{ item.title }}
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-card>
                    </q-dialog>

                    <q-dialog v-if="$vuetify.display.sm" v-model="mobileNav" position="bottom" seamless
                        class="mobile-menu dimmed">
                        <q-card dark style="background-color: #1d1d1dd4">
                            <q-card-section class="row justify-evenly items-center no-wrap">
                                <q-btn flat round icon="mdi-chevron-left" />
                                <q-btn @click="mobileMenu = true" flat round icon="menu" />
                                <q-btn flat round icon="mdi-chevron-right" />
                            </q-card-section>
                        </q-card>
                    </q-dialog>
                </div>
            </q-page-container>
        </q-layout>
    </div>
</template>

<style>
.banner-container {
    background: linear-gradient(90deg, #8174e5, #dedcf3);
    padding: 3rem;
}

.mobile-menu {
    width: 100% !important;
    position: relative;
}

.active-unit {
    background-color: #e4fadf;
}
</style>

<script setup>
import { ref } from 'vue';

const sideMenu = ref(false);
const mobileNav = ref(true)
const mobileMenu = ref(false)

const units = [
    { units: "UNIT 1 - 1469", title: "Unit 01: Importance of Advertising", path: "/" },
    { units: "UNIT 2 - 1470", title: "Unit 02: Mediums of Advertising", path: "/mediums" },
    { units: "UNIT 3 - 1471", title: "Unit 03: Television", path: "/television" },
]

const cards = [
    { image: "https://drive.google.com/uc?export=view&id=1YbB84ijEOVu7A2iDlShWxiWecbZkj3mZ", title: "Advertising", translation: "??????", subtitle: "The business of drawing public attention to goods and services", subTranslation: "????????? ???????????? ?????? ????????? ????????? ?????? ??????" },
    { image: "https://drive.google.com/uc?export=view&id=1jYA3enNLTol64brMz5jdVq6T9Xq8vtRS", title: "Advertisement", translation: "??????", subtitle: "A public promotion of some product or service", subTranslation: "?????? ?????? ?????? ???????????? ????????? ??????" },
    { image: "https://drive.google.com/uc?export=view&id=1G7ZxN7r_OE2FMtDlHhwMjcgZy02tc8Bm", title: "Market", translation: "??????", subtitle: "The customers for a particular product or service", subTranslation: "?????? ?????? ?????? ???????????? ??????" },
    { image: "https://drive.google.com/uc?export=view&id=1zdqmPZ7JSmygxtYUGEcirUwE-D5HBjgL", title: "Medium", translation: "??????", subtitle: "A means or instrumentality for storing or communicating information", subTranslation: "????????? ?????? ?????? ???????????? ?????? ?????? ?????? ??????" },
    { image: "https://drive.google.com/uc?export=view&id=1PlgbiAtqwLaGOwoT8YePSTRpbel0q4Pp", title: "Mass", translation: "(??????)??????", subtitle: "The common people generally", subTranslation: "?????? ??????" },
]

const keywords = [
    { image: "https://drive.google.com/uc?export=view&id=1BjkOQcj6vzx3vTxpfHGflBJyJRi06jBP", title: "product", translation: "?????????, ??????, ??????" },
    { image: "https://drive.google.com/uc?export=view&id=1XOOJTLquGGz-LSjUDHLV_DBpAHR1WYIf", title: "sales", translation: "?????????, ?????????" },
    { image: "https://drive.google.com/uc?export=view&id=1bONoX7YidpYtyNMSurchFET5YNkHpsM1", title: "target market", translation: "?????? ??????" },
    { image: "https://drive.google.com/uc?export=view&id=1n1xE_eewSVOUGJO7r7HfmRnjW3M6kDX0", title: "promote", translation: "????????????" },
]

const oldScroll = ref(0)
const onScroll = (pos) => {
    if (pos > oldScroll.value) mobileNav.value = false
    else mobileNav.value = true
    oldScroll.value = pos
}
</script>
