<template>
  <section class="container-fluid">
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
    <section class="row">
        <article class='col-md-4' v-for="(actu, idx) in actus" :key="idx">
            <div class="card" style="width: 18rem;">
                <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                <div class="card-body">
                    <h5 class="card-title">{{ actu.title }}</h5>
                    <p class="card-text">{{actu.content}}</p>
                    <p>{{actu.date}}</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
            </div>  
        </article>
    </section>
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
      name: 'actus',

  async asyncData({app, params, error}) {
        const allActus = fireDb.collection('actus')
        const oneActu = allActus.doc('actus')
        let snaps
        let snap
        try{
          snaps = await allActus.get()
          snap = await oneActu.get()

        } catch (e) {
          console.log(e)
        }
        var arr = []
        snaps.forEach(function(doc){
          //console.log(doc.id, " => ", doc.data());
          arr.push(doc.data());
        })
          console.log(app);
          console.log(params);
          console.log(error);

          
        return{
          //all actus
          actus: arr,

          //one actu
          title: snap.data().title,
          content: snap.data().content,
          date: snap.data().date
        }
        //return this.actus

      },
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

    
     
    methods: {


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