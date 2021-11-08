const app = Vue.createApp({
  data() {
    return {
      msg: "",
      codenames: [
        { name: "Protagonist", codename: "Joker" },
        { name: "Anne", codename: "Panther" },
        { name: "Ryuji", codename: "Skull" },
      ],
      form: {
        name: "",
        email: "",
      },
    };
  },
  computed: {
    isNameValid() {
      return this.form.name.length > 2;
    },
    isEmailValid() {
      const r =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      return r.test(this.form.email.toLowerCase());
    },
    isBothValid() {
      if (this.isNameValid && this.isEmailValid) {
        return true;
      }

      return false;
    },
  },
  watch: {
    "form.name": {
      handler() {
        if (!this.isNameValid) {
          this.msg = "The name field has to be greater than 2 characters.";
          return;
        }

        this.msg = "";
      },
    },
    "form.email": {
      handler(val) {
        if (!this.isEmailValid) {
          this.msg =
            "The email is not valid please type something like sample@example.com";
          return;
        }

        this.msg = "";
      },
    },
  },
});

app.component("CodeName", {
  props: {
    codeName: Object,
  },
  data() {
    return {
      isCodeNameActive: false,
    };
  },
  methods: {
    activateCodeName() {
      this.isCodeNameActive = !this.isCodeNameActive;
    },
  },
  template: `
    <div @click="activateCodeName">
      {{ isCodeNameActive ? this.codeName.codename : this.codeName.name}}
    </div>
  `,
});

app.mount("#app");
