Vue.createApp({
  data() {
    return {
      discList: [],
      navLinks: ["All", "Favorites"],
      activePage: "",
      apiUrl: "http://localhost/boolean/php-dischi-json/server/server.php",
    };
  },
  created() {
    this.activePage = this.navLinks[0];
    this.getAll();
  },
  methods: {
    handleLike(index) {
      this.likeRequest(index);

      if (this.activePage === "Favorites") {
        console.log("ciao");
        this.handleOptions(this.activePage);
      }
    },
    handleOptions(link) {
      if (link === "Favorites") {
        this.activePage = this.navLinks[1];
        console.log("GET HandleOptions: " + this.activePage);

        axios
          .get(this.apiUrl, {
            params: {
              like: true,
            },
          })
          .then((resp) => {
            this.discList = resp.data.response;
            console.log("Favorites: " + this.discList);
          });
      } else {
        this.activePage = this.navLinks[0];
        console.log("HandleOptions: " + this.activePage);

        this.getAll();
      }
    },
    getAll() {
      axios.get(this.apiUrl).then((resp) => {
        this.discList = resp.data.response;
        // console.log("GET_ALL: " + this.discList);
      });
    },
    likeRequest(index) {
      const data = new FormData();
      data.append("like_index", index);
      console.log("Indice inviato: " + index);
      axios
        .post(this.apiUrl, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          this.discList = resp.data.response;
          console.log("POST: " + this.discList);
        });
    },
  },
}).mount("#app");
