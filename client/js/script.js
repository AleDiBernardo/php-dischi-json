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
            console.log(this.discList);
        });
    },
    methods: {
        handleLike(index){
            const data = {
                like_index: index

            }
            console.log(index);
            axios.post(this.apiUrl, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then(resp => {
                this.discList = resp.data.response;
                console.log("ciao");
                console.log(this.discList);
            });
        }
    }
}).mount("#app");