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
        "Dark": "Enable Dark Mode"

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
        "Dark": "கண் வலி?"
      }
    }
  })

  export default i18nHelper;