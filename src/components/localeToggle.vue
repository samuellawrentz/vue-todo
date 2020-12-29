<template>
    <em style="font-size: 12px; margin-right: 1rem">Language: <span @click="updateLocale('en')">English</span> | <span @click="updateLocale('ta')">தமிழ்</span></em>
</template>

<script lang="ts">
// Component that handles the locale toggle
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Toggle extends Vue {
    updateLocale(locale: any){
        this.$i18n.locale = locale;
    }
}
</script>