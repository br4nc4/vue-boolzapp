dayjs.extend(dayjs_plugin_customParseFormat)

new Vue({
    el:"#app",
    data:{
        listaContatti: contatti,
        currentUser: contatti[0],
        enterMessage:"",
        searched:"",
    },
    methods:{
        activeContact: function(currentContact){
            this.currentUser = currentContact;
        },

        inputMessage: function(){
            if(this.currentUser !== 0){
                this.currentUser.messages.push({
                    message: this.enterMessage,
                    status: "sent",
                    date: null
                })
                this.enterMessage ="";

                setTimeout (() => {
                    this.currentUser.messages.push({
                        message: "ok",
                        status: "received",
                        date: null
                    })
                }, 1000);
            }
        },

        searchContacts: function(){
            /* let filteredContacts = []

            for (let i = 0; i < contatti.length; i++) {
                
                const contact = contatti[i].name;
                
                if(contact.includes(this.searched.toLowerCase())){
                    return filteredContacts.push(contatti[i])
                }
            }  */
            return this.listaContatti.filter((contact) => {
            return contact.name.toLowerCase().includes(this.searched.trim(" ").toLowerCase());
            })
        },

        formatDate(date) {
            if(date === null){
                return dayjs().format("HH:mm")
            } else {
                return dayjs(date, "DD/MM/YYYY HH:mm:ss").format("HH:mm");
            }
        }
    }
});




