Vue.createApp({
    data() {
        return {
            discList: [],
            apiUrl: "http://localhost/boolean/php-dischi-json/server/server.php"
        }
    },
    created(){
        axios.get(this.apiUrl).then(resp => {
            this.discList = resp.data.response;
            console.log("Created: " + this.discList);
        });
    },
    methods: {
        handleLike(index){
            
            const data = new FormData();
            data.append("like_index",index);
            console.log("Indice inviato: " + index);

            axios.post(this.apiUrl, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then(resp => {
                this.discList = resp.data.response;
                console.log("POST: " + this.discList);
            });
        }
    }
}).mount("#app");