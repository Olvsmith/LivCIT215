const flashcards = {
  data() {
    return {
      cards: [
        {
          question: "What year was IUPUI founded?",
          answer: "1969",
          category: "history",
          flipped: false,
        },
        {
          question: "What is 2+2?",
          answer: "4",
          category: "math",
          flipped: false,
        },
        {
          question: "Is mayonnaise an instrument?",
          answer: "No",
          category: "science",
          flipped: false,
        },
      ],
      form: {
        question: "",
        answer: "",
        category: "history",
      },
    };
  },
  methods: {
    flip(idx) {
      this.cards[idx].flipped = !this.cards[idx].flipped;
    },
    submitForm(e) {
      e.preventDefault();

      // Push the new card from form.
      this.cards.push({
        question: this.form.question,
        answer: this.form.answer,
        category: this.form.category,
        flipped: false,
      });

      // Reset form after submit
      this.form = {
        question: "",
        answer: "",
        category: "history",
      };
    },
  },
};

Vue.createApp(flashcards).mount("#flashcards-app");
