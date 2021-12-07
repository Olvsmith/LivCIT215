const app = Vue.createApp({
  data() {
    return {
      cart: [],
      isInstrumentModalOpen: false,
      products: [
        {
          id: 1,
          name: "Piano",
          instrument: "Keyboard",
          price: 200,
          brand: "Yamaha",
          modal: false,
          img: "https://kawaius.com/wp-content/uploads/2018/06/Kawai-RX-1-Grand-Piano.jpg",
        },
        {
          id: 2,
          name: "Guitar",
          instrument: "String",
          price: 300,
          brand: "Fender",
          modal: false,
          img: "https://www.martinguitar.com/on/demandware.static/-/Sites-martin-master-catalog/default/dw9d7b53db/images/00-18/00-18_f.jpg",
        },
        {
          id: 3,
          name: "Drums",
          instrument: "Percussion",
          price: 100,
          brand: "Yamaha",
          modal: false,
          img: "https://www.musicca.com/files/scripts/drumkit/static/media/drum-kit.eb6cdcf0.png",
        },
        {
          id: 4,
          name: "Trumpet",
          instrument: "Brass",
          price: 150,
          brand: "Maton",
          modal: false,
          img: "https://cdn.jpmusicalinstruments.com/uploads/prod_card_img/2_34_cb.png?v=1516639304",
        },
        {
          id: 5,
          name: "Flute",
          instrument: "Woodwind",
          price: 100,
          brand: "Yamaha",
          modal: false,
          img: "https://www.californiakeyboards.com/wp-content/uploads/2017/07/flute.jpg",
        },
        {
          id: 6,
          name: "Violin",
          instrument: "String",
          price: 200,
          brand: "Yamaha",
          modal: false,
          img: "https://m.media-amazon.com/images/I/71Kxqh0AisL._AC_SL1500_.jpg",
        },
      ],
      brandOptions: [
        {
          id: 1,
          name: "Yamaha",
        },
        {
          id: 2,
          name: "Fender",
        },
        {
          id: 3,
          name: "Maton",
        },
      ],
      formError: false,
      form: {
        name: "",
        instrument: "",
        brand: "Yamaha",
        price: "",
        modal: false,
        img: "",
      },
    };
  },
  computed: {
    doesFormHaveErrors() {
      if (
        this.form.name === "" ||
        this.form.instrument === "" ||
        this.form.brand === "" ||
        this.form.price === ""
      ) {
        return true;
      }

      return false;
    },
  },
  methods: {
    addToCart(product) {
      product.modal = false;
      this.cart.push(product);
    },
    removeFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    openModal(product) {
      product.modal = true;
    },
    closeModal(product) {
      product.modal = false;
    },
    clearCart() {
      this.cart = [];
    },
    openInstrumentModal() {
      this.isInstrumentModalOpen = true;
    },
    closeInstrumentModal() {
      this.form = {
        name: "",
        instrument: "",
        brand: "",
        price: "",
        modal: false,
        img: "",
      };

      this.isInstrumentModalOpen = false;
    },
    addInstrument() {
      console.log(this.form);
      console.log(this.doesFormHaveErrors);

      if (this.doesFormHaveErrors) return;

      if (this.form.img === "") {
        this.form.img =
          "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6";
      }

      let newProduct = {
        id: this.products.length + 1,
        ...this.form,
      };

      this.products.push(newProduct);
      this.closeInstrumentModal();
    },
  },
});

app.component("modal", {
  props: {
    isOpen: Boolean,
  },
  template: `
    <div class="fixed z-10 inset-0 overflow-y-auto" :class="{'hidden': !isOpen}">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="$emit('closeModal')"></div>
        <span class="hidden inline-block align-middle h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 text-center">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  `,
});

app.mount("#app");
