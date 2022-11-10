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
                            <div class="text-h4 montserrat">1단원 - 광고의 중요성</div>
                        </div>

                        <div>
                            <v-img src="https://drive.google.com/uc?export=view&id=10vutpZxW5n_BoLQuW6UigqxZeIEWJn6c"
                                width="500"></v-img>
                        </div>
                    </div>

                    <v-row class="mt-3">
                        <v-col cols="12">
                            <p class="responsive-text body montserrat text-left">“If it doesn’t sell, it isn’t
                                creative.” -
                                David Ogilvy&nbsp;
                            <div>&nbsp;"만약 그것이 팔리지 않는다면, 그것은 창의적이지 않은 것이다." - David Ogilvy</div>
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
                                다음 질문에
                                답하세요.</div>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <div class="text-h6 montserrat">1. What do you think is the purpose of advertising?
                            </div>
                            <div class="text-h6">당신은 광고의 목적이 무엇이라고 생각하세요?</div>
                            <div class="text-h6 montserrat mt-5">2. Why is advertising important?</div>
                            <div class="text-h6">왜 광고가 중요한가요?</div>
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
                                광고의
                                중요성</div>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <div class="text-h6 montserrat">Advertising does not sell a product, but it plays an
                                essential
                                role in selling a product. It helps increase sales by getting people's attention,
                                making
                                them— especially the target market— become fully aware and informed about the
                                different
                                brands and product availability in the market.</div>
                            <div class="mt-5 text-h6">광고는 상품을 팔지 않습니다 하지만 상품을 팔기 위해서는 필수적인 역할을 하죠. 이것은 특히 타겟 시장의
                                사람들의 관심을
                                끌어서 그들이 제품에 대해서 완전히 인지하고 시장의 다양한 브랜드와 제품의 가용성에 대해 정보를 얻음으로서 판매를 증가시키는데 도움이 됩니다.
                            </div>
                            <div class="text-h6 montserrat mt-10">In simple terms, advertising is a way to promote a
                                product
                                or a brand using different mediums. If a product is advertised well and its
                                information
                                reaches the masses, its chance of being sold increases.</div>
                            <div class="mt-5 text-h6">간단히 말해서, 광고는 다른 매체를 사용하여 제품이나 브랜드를 홍보하는 방법입니다. 제품이 잘 광고되고 정보가
                                대중에게
                                전달되면 판매될 가능성이 커집니다.</div>
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
                                다음
                                물음들에 답하시오.</div>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <div class="text-h6 montserrat">1. How does advertising help increase sales?</div>
                            <div class="text-h6">광고가 매출 증대에 어떻게 도움이 되나요?</div>
                            <div class="text-h6 montserrat mt-5">2. Does an advertisement affect your judgment about
                                a
                                product? Why or why not?</div>
                            <div class="text-h6">광고가 제품에 대한 평가의 영향을 미칩니까? 그렇다면 왜인가요? 아니면 왜 아닐까요?</div>
                            <div class="text-h6 montserrat mt-5">3. What’s the most interesting advertising you have
                                seen?
                            </div>
                            <div class="text-h6">당신이 본 광고 중 가장 흥미로웠던 것은 무엇입니까?</div>
                        </v-col>
                    </v-row>

                    <q-dialog v-if="$vuetify.display.sm" v-model="mobileMenu" position="bottom" seamless
                        class="mobile-menu dimmed">
                        <q-card dark style="background-color: #1d1d1dd4">
                            <q-card-section class="row justify-evenly items-center no-wrap">
                                <q-btn flat round icon="mdi-chevron-left" />
                                <q-btn flat round icon="menu" />
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
const mobileMenu = ref(true)

const units = [
    { units: "UNIT 1 - 1469", title: "Unit 01: Importance of Advertising", path: "/" },
    { units: "UNIT 2 - 1470", title: "Unit 02: Mediums of Advertising", path: "/mediums" },
    { units: "UNIT 3 - 1471", title: "Unit 03: Television", path: "/television" },
]

const cards = [
    { image: "https://drive.google.com/uc?export=view&id=1YbB84ijEOVu7A2iDlShWxiWecbZkj3mZ", title: "Advertising", translation: "광고", subtitle: "The business of drawing public attention to goods and services", subTranslation: "상품과 서비스에 대한 대중의 관심을 끄는 사업" },
    { image: "https://drive.google.com/uc?export=view&id=1jYA3enNLTol64brMz5jdVq6T9Xq8vtRS", title: "Advertisement", translation: "광고", subtitle: "A public promotion of some product or service", subTranslation: "일부 제품 또는 서비스의 공공의 홍보" },
    { image: "https://drive.google.com/uc?export=view&id=1G7ZxN7r_OE2FMtDlHhwMjcgZy02tc8Bm", title: "Market", translation: "시장", subtitle: "The customers for a particular product or service", subTranslation: "특정 제품 또는 서비스의 고객" },
    { image: "https://drive.google.com/uc?export=view&id=1zdqmPZ7JSmygxtYUGEcirUwE-D5HBjgL", title: "Medium", translation: "매체", subtitle: "A means or instrumentality for storing or communicating information", subTranslation: "정보를 저장 또는 전달하기 위한 수단 또는 기구" },
    { image: "https://drive.google.com/uc?export=view&id=1PlgbiAtqwLaGOwoT8YePSTRpbel0q4Pp", title: "Mass", translation: "(일반)대중", subtitle: "The common people generally", subTranslation: "일반 대중" },
]

const keywords = [
    { image: "https://drive.google.com/uc?export=view&id=1BjkOQcj6vzx3vTxpfHGflBJyJRi06jBP", title: "product", translation: "생산물, 상품, 제품" },
    { image: "https://drive.google.com/uc?export=view&id=1XOOJTLquGGz-LSjUDHLV_DBpAHR1WYIf", title: "sales", translation: "판매량, 매출액" },
    { image: "https://drive.google.com/uc?export=view&id=1bONoX7YidpYtyNMSurchFET5YNkHpsM1", title: "target market", translation: "표적 시장" },
    { image: "https://drive.google.com/uc?export=view&id=1n1xE_eewSVOUGJO7r7HfmRnjW3M6kDX0", title: "promote", translation: "홍보하다" },
]

const oldScroll = ref(0)
const onScroll = (pos) => {
    if (pos > oldScroll.value) mobileMenu.value = false
    else mobileMenu.value = true
    oldScroll.value = pos
}
</script>
