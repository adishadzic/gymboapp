<template>
  <div class="app">
    <br>
    <b-container fluid class="container mt-4">
      <b-row class="d-flex inline-flex justify-content-start">
        <b-col class="mr-4 ml-3">
          <img src="@/assets/avatar.jpg" alt="Avatar" class="avatar">
          <h3 class="mt-3">{{ store.currentUser }}</h3>
          <router-link to="/editprofile">
            <button type="button" class="btn btn-secondary">Edit Profile</button>
          </router-link>
          <div class="form-group mt-5"  >
            <croppa :width="250" :height="250" placeholder="Upload picture"  v-model="imageReference" :margin="auto"></croppa>
            <form @submit.prevent="postNewImage" class="mb-5">
          
          <div class="form-group">
            <label for="imageDescription">Description</label>
            <input
              v-model="newImageDescription"
              type="text"
              class="form-control "
              placeholder="Enter: #before or #after, height, weight "
              id="imageDescription"
              />
          </div>
          <button type="submit" class="btn btn-primary ml-2">Post image</button>
        </form>
          </div>
        </b-col>
        <b-col cols="8">
          <b-row no-gutters>
            <b-col>
              <router-link to="/dashboard/workouts" class="nav-link text-light active"><img src="@/assets/dumbbell.png" class="mr-1" height="20">Workouts</router-link>
            </b-col>
            <b-col>
              <router-link to="/dashboard/myplan" class="nav-link text-light"><img src="@/assets/pencil.png" class="mr-1" height="20">My Plan</router-link>
            </b-col>
            <b-col>
              <router-link to="/dashboard/pics" class="nav-link text-light"><img src="@/assets/image.png" class="mr-1" height="20">Pics</router-link>
            </b-col>
            <b-col>
              <router-link to="/dashboard/BMI" class="nav-link text-light"><img src="@/assets/bmi1.png" class="mr-1" height="20">BMI</router-link>
            </b-col>
          </b-row>
          <b-row>
            <b-row class="mt-5 ml-5">
             <before-after-card v-for="card in cards" :key="card.id" :info="card" />
          </b-row>
             <div class="col-8">
        <!-- nova forma za post -->
        
      </div>
          </b-row>
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import { firebase } from '@/firebase';
  import store from '@/store';
  import { db, storage } from "@/firebase";
  import BeforeAfterCard from '../components/BeforeAfterCard.vue';
  
  
  /* cards = [
    { url: "https://picsum.photos/id/1//200/200", description: "blabla", time: "2 min ago"},
    { url: "https://picsum.photos/id/2//200/200", description: "albalb", time: "10 min ago"},
  ]; */
  
  export default {
    components: { BeforeAfterCard },
      
    data() {
      return {
        cards: [],
        store,
        newImageDescription: "",
        newImageUrl: "",
        imageReference: null,
      };
    },
    mounted(){  //dohvat iz firebase, trenutak kad se datoteka prikaze na ekranu
      this.getPosts();
  
    },
    methods: {
      getPosts(){
        db.collection("Posts")
        .orderBy("posted_at", "asc")
        .get()
        .then((query) => {
          this.cards = [];
          query.forEach((doc) => {
            const data = doc.data();
  
            this.cards.push({
              id: doc.id,
              time: data.posted_at,
              description: data.desc,
              url: data.url,
            })
          });
        });
  
      },
      postNewImage() {
          this.imageReference.generateBlob((blobData) => { //arrow funkcija čuva this
              console.log(blobData);
              let imageName = "Posts/" + store.currentUser + '/' + Date.now() + ".png";
  
              storage
                .ref(imageName)
                .put(blobData)
                .then(result => {
                result.ref.getDownloadURL().then(url => {
                        console.log("javni link", url);
  
                        const imageDescription = this.newImageDescription;
  
          db.collection("Posts").add({
            url: url,
            desc: imageDescription,
            user: store.currentUser,
            posted_at: Date.now(),
          })
          .then((doc) => {
              console.log("spremljeno", doc)
              alert("Image posted successfully");
              this.newImageDescription = "";
              this.imageReference.remove();
  
              this.getPosts(); //ponovno pozivamo da ne moramo osvjezavati stranicu nakon unacivanja slike
          })
          .catch((e) => {
              console.error(e);
          });
              })
              .catch((e) => {
                console.error(e);
              })
                })
              .catch(e => {
                console.error(e);
              });
          });  
      },
    },
  }
</script>
<style scoped>
  .container {
  margin-left: -150px;
  }
  a.router-link-active{
  background: gray;
  }
  .avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  }
</style>