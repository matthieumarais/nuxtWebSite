<template>
  <section class="container">
    <div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>
    <div>
        <h2>
            Read from Firestore.
        </h2>
        <div>
            <button @click="readFromFirestore" :disabled="readSuccessful">
            <span v-if="!readSuccessful">Read now</span>
            <span v-else>Successful!</span>
            </button>
            <p>{{text}}</p>
        </div>
        <div>
          <!-- <button @click='getLists'>console.log</button> -->
        </div>
    </div>
    <div>
        <article v-for="(actu, idx) in actus" :key="idx">
            
            <h1>{{ actu.title }}</h1>
            <p>{{actu.content}}</p>
            <p>{{actu.date}}</p>
        </article>
    </div>
    <div>
        <h1>{{title}}</h1>
        <p>{{content}}</p>
        <p>{{date}}</p>        
    </div>
</section>
</template>
<script>
  import {fireDb} from '~/plugins/firebase.js'
  export default {
      name: 'index',
    data() {
      return {
        writeSuccessful: false,
        readSuccessful: false,
        actus: [],
        text: '',
        title: '',
        content: '',
        date: ''
      }
    },
async getLists({app, params, error}) {
        const ref = fireDb.collection('actus')
        let snap
        try{
          snap = await ref.get()

        } catch (e) {
          console.log(e)
        }
        var actus = []
        snap.forEach(function(doc){
          //console.log(doc.id, " => ", doc.data());
          actus.push(doc.data());
        })
          console.log(actus)
        //this.actus = actus;
        return{
          actus: {title : snap.actus.title}
        }
        //return this.actus

      },
    
     //afficher côté serveur
    async asyncData({app, params, error}) {
        const ref = fireDb.collection("actus").doc("actus")
        let snap
        try {
            snap = await ref.get()
        } catch (e) {
            // TODO: error handling
            console.error(e)
        }
        return {
            title: snap.data().title,
            content: snap.data().content,
            date: snap.data().date
        }
    },


      //afficher les infos côté client d'une liste
      async getListFirestore() {
        const ref = fireDb.collection('actus').doc('actus')
        let snap
        try{
          snap = await ref.get()
        } catch (e) {
          console.log(e)
        }
        return {
          title: snap.data().title,
          content: snap.data().content,
          date: snap.data().date
        }

      },


        
    methods: {

      

      /* start(){
        fireDb.collection("actus").get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              //actus : doc.data();
          });
      })
      .catch(function(error) {
              console.log("Error getting documents: ", error);
          });

      }, */
      


        //écrire sur Firestore
      async writeToFirestore() {
        const ref = fireDb.collection("test").doc("test")
        const document = {
          text: "This is a test message."
        }
        try {
          await ref.set(document)
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        this.writeSuccessful = true
      },
      //afficher les infos côté client d'un document
      async readFromFirestore() {
        const ref = fireDb.collection("test").doc("test")
        let snap
        try {
            snap = await ref.get()
        } catch (e) {
            // TODO: error handling
            console.error(e)
        }
        this.text = snap.data().text
        this.readSuccessful = true
        },


       firestore () {
        return {
        actus: fireDb.collection('actus')
        }
    }
    }
  }

</script>
<style>
  /* .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  } */
</style>