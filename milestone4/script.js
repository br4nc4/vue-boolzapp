new Vue({
    el:"#app",
    data:{
        listaContatti: contatti,
        currentUser: 0,
        enterMessage:"",
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

        searchContacts: function(contact){
            
        },

        getFormattedTime(date) {
            const formattedTime = date.split(' ')[1];
            return formattedTime.slice(0, formattedTime.length - 3);
        },
    }
});


