import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBdq16d3TBXfXfev-rR2CK1hCHsidnc45c",
  authDomain: "vue-calendar-a315a.firebaseapp.com",
  databaseURL: "https://vue-calendar-a315a.firebaseio.com",
  projectId: "vue-calendar-a315a",
  storageBucket: "vue-calendar-a315a.appspot.com",
  messagingSenderId: "846672324720",
  appId: "1:846672324720:web:b4f079cfde1ccfc6cd6cb5",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
