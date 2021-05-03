/**
 Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista con Vue JS e Axios.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */

const app = new Vue({
    el: '#app',
    data: {
        emailList: [],
        emailNumber: 10,
    },
    computed: {
        emailGenerated() {
            return this.emailList.length === this.emailNumber;
        },
    },
    created() {
        // API call
        for (let i = 0; i < this.emailNumber; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( email => {
                this.emailList.push(email.data.response,);
            })
            .catch( error => {
                console.log('ERRORE', error);
            });
        }
    },
});