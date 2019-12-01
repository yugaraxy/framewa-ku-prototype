// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

console.log(process.env.FIRE_BASE)

// firebase setting
var firebaseConfig = {
  apiKey: process.env.FIRE_BASE.API_KEY,
  authDomain: process.env.FIRE_BASE.AUTH_DOMAIN,
  databaseURL: process.env.FIRE_BASE.DATABASE_URL,
  projectId: process.env.FIRE_BASE.PROJECT_ID,
  storageBucket: process.env.FIRE_BASE.STORAGE_BUCKET,
  messagingSenderId: process.env.FIRE_BASE.MESSAGING_SENDERID,
  appId: process.env.FIRE_BASE.APP_ID,
  measurementId: process.env.FIRE_BASE.MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
