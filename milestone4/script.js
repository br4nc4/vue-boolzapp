new Vue({
    el:"#app",
    data:{
        listaContatti: contatti,
        currentUser: 0,
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
                })
                this.enterMessage ="";

                setTimeout (() => {
                    this.currentUser.messages.push({
                        message: "ok",
                        status: "received",
                    })
                }, 1000);
            }
        },

        searchContacts: function(){
            /* let filteredContacts = []

            for (let i = 0; i < listaContatti.length; i++) {
                const searched = searched.toLowerCase();
                const contact = listaContatti[i].name.toLowerCase();
                
                if(contact.includes(searched)){
                    filteredContacts.push(listaContatti[i])
                }
            }

            return filteredContacts; */
            return this.listaContatti.filter((contact) => {
            return contact.name.toLowerCase().includes(this.searched.trim(" ").toLowerCase());
            }) 
        },

        /* getFormattedTime(date) {
            const formattedTime = date.split(' ')[1];
            return formattedTime.slice(0, formattedTime.length - 3);
        }, */
    }
});


