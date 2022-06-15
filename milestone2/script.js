new Vue({
    el:"#app",
    data:{
        listaContatti: contatti,
        currentUser: 0,
    },
    methods:{
        activeContact: function(currentContact){
            this.currentUser = currentContact.messages;
    },
    }
});


