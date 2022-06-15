new Vue({
    el:"#app",
    data:{
        listaContatti: contatti,
        currentUser: 0,
        classRecevied: "recevied",
        classSent: "sent",
    },
    methods:{
        activeContact: function(currentContact){
            this.currentUser = currentContact.messages;
    },
    }
});


