// Helper file for the locales
// Contains the phrases for different languages

import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

const i18nHelper = new VueI18n({
    locale: 'en',
    messages: {
      "en": {
        "Welcome": "Welcome",
        "Sign In": "Sign in",
        "New User": "New User?",
        "New Account": "Create an account",
        "Email": "Email address",
        "Password": 'Password',
        "Question": "What you wanna do?",
        "Logout": "Logout",
        "Dark": "Enable Dark Mode",
        "Started": "Welcome, let's get started!",
        "Name": "Your Name",
        "Create Account": "Create Account",
        "Desc": "Please enter the following details for account creation"

      },
      "ta": {
        "Welcome": "வணக்கம்",
        "Sign In": "உள்நுழைக",
        "New User": "புதிய பயனர்?",
        "New Account": "ஒரு கணக்கை உருவாக்கவும்",
        "Email": "தங்களது மின்னஞ்சல்",
        "Password": 'தங்களது கடவுச்சொல்',
        "Question": "ஏதாவது உள்ளிடவும்..",
        "Logout": "வெளியேறு",
        "Dark": "கண் வலியா?",
        "Started": "வாருங்கள், ஆரம்பிக்கலாம்!",
        "Name": "உங்கள் பெயர்",
        "Create Account": "உங்கள் கணக்கை துவங்குங்கள்",
        "Desc": "கணக்கு உருவாக்க பின்வரும் விவரங்களை உள்ளிடவும்"
      }
    }
  })

  export default i18nHelper;