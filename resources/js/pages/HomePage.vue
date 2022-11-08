<template>
    <div>
        <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="12" sm="12" md="10">
                <v-toolbar
                    dense
                    floating
                    color="transparent"
                    class="text-left ml-5"
                    style="position: sticky; top: 2rem; z-index: 1"
                >
                    <v-btn
                        rounded="lg"
                        icon="mdi-menu"
                        variant="flat"
                        class="text-white"
                        style="background-color: rgba(0, 0, 0, 0.5)"
                    ></v-btn>
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
                        <v-img
                            src="https://drive.google.com/uc?export=view&id=10vutpZxW5n_BoLQuW6UigqxZeIEWJn6c"
                            width="500"
                        ></v-img>
                    </div>
                </div>

                <v-row class="mt-3">
                    <v-col cols="12">
                        <p class="responsive-text body montserrat text-left">“If it doesn’t sell, it isn’t creative.” - David Ogilvy&nbsp;<div>&nbsp;"만약 그것이 팔리지 않는다면, 그것은 창의적이지 않은 것이다." - David Ogilvy</div></p>
                    </v-col>
                </v-row>

                <div class="text-center text-h4 font-weight-bold text-primary mt-9 montserrat">PREVIEW</div>

                <v-row class="mt-3">
                <v-col cols="12" sm="12" md="6">
                <div class="text-h6 text-center responsive-text text-primary montserrat font-weight-bold">Answer the following questions.</div>
                <div class="text-h6 text-center responsive-text text-primary montserrat font-weight-bold">다음 질문에 답하세요.</div>
                </v-col>
                <v-col cols="12" sm="12" md="6" >
                    <div class="text-h6 montserrat">1. What do you think is the purpose of advertising?</div>
                    <div>당신은 광고의 목적이 무엇이라고 생각하세요?</div>
                    <div class="text-h6 montserrat mt-5">2. Why is advertising important?</div>
                    <div>왜 광고가 중요한가요?</div>
                </v-col>
                </v-row>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
    </div>
</template>

<style>
.banner-container {
    background: linear-gradient(90deg, #8174e5, #dedcf3);
    padding: 3rem;
}
</style>

<script setup></script>
