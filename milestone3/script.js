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
            this.listaContatti[this.currentUser].messages.push({
                message: this.enterMessage,
                status: "sent",
            })
            this.enterMessage ="";
        },
    }
});


