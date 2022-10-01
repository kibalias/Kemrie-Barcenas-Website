const app = Vue.createApp({

    data(){
        return{
            showSidebar: false,
            date: "September X, 2022",
        }
    },
    methods: {
        changeUser() {
            this.name = 'John Doe'
        },
        toggleShowSidebar(){
            this.showSidebar = !this.showSidebar
        }
    }
})

app.mount('#app')