new Vue({
    el:"#app",
    data:{
        listaContatti: contatti,
        currentContact: 0,
    },
    methods:{
        activeContact: function(currentContact){
            return this.listaContatti[currentContact].messages;
        }
    }
});


