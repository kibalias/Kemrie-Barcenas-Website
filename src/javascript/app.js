const app = Vue.createApp({

    data(){
        return{
            showModal: false,
            showToolbar: false,
            showSidebar: false,
            date: "September X, 2022",
        }
    },
    methods: {
        toggleShowModal(){
            this.showModal = !this.showModal
        },
        changeUser() {
            this.name = 'John Doe'
        },
        toggleShowSidebar(){
            this.showSidebar = !this.showSidebar
        },
        toggleShowMobileToolbar(){
            this.showToolbar = !this.showToolbar
        }
    }
})

app.mount('#app')