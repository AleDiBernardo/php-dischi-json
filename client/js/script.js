Vue.createApp({
    data() {
        return {
            discList: []
        }
    },
    created(){
        axios.get("http://localhost/boolean/php-dischi-json/server/server.php").then(resp => {
            this.discList = resp.data.response;
            console.log(this.discList);
        });
    }
}).mount("#app");