<template>
<div class="app">
  <br>
      <div class="row mt-5">
        <div class="col-0 image">
          <img src="@/assets/avatar.jpg" alt="Avatar" class="avatar">
          <h3 class="mt-3">{{ store.currentUser }}</h3>
          <router-link to="/editprofile">
          <button type="button" class="btn btn-secondary">Edit Profile</button>
          </router-link>
        </div>
        <div class="ml-5"><router-link to="/dashboard/workouts" class="nav-link text-light active"><img src="@/assets/dumbbell.png" class="dumbbell-logo1 mr-1" height="25">Workouts</router-link>

        <b-row class="my-1" >
      <b-col sm="3">
        <label :for="`type-Height`"> Height </label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-Height`" v-model="Height"></b-form-input>
      </b-col>
    </b-row>
<b-row class="my-1" >
      <b-col sm="3">
        <label :for="`type-Weight`"> Weight </label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-Weight`" v-model="Weight"></b-form-input>
      </b-col>
    </b-row>

  <div>
    <b-button class="mb-2" variant="primary" @click="bmiToast()">
      Calculate
    </b-button>
    <b-toast id="example-toast" title="Results say that.." static no-auto-hide>
      Your BMI index is {{bmi}}
    </b-toast>
  </div>

        </div>
        <div class="ml-5"><router-link to="/dashboard/myplan" class="nav-link text-light"><img src="@/assets/pencil.png" class="mr-1" height="20">My Plan</router-link>
        </div>
        <div class="ml-5"><router-link to="/dashboard/pics" class="nav-link text-light"><img src="@/assets/image.png" class="mr-1" height="20">Pics</router-link>
        </div>
        <div class="ml-5"><router-link to="/dashboard/BMI" class="nav-link text-light"><img src="@/assets/image.png" class="mr-1" height="20">BMI</router-link>
        </div>
      </div>
</div>

</template>

<script>
import { firebase } from '@/firebase';
import store from '@/store';

export default {
    data() {
      return {
        store,
        bmi: null,
        Height: null,
        Weight: null,
        types: [
          'Height',
          'Weight'
             ]
      }
    },
  methods: {
      bmiToast(append = false) {
        this.bmi = (Number(this.Weight) /Number((this.Height/100)*(this.Height/100))).toFixed(2)
        this.$bvToast.toast(`This is the bmi ${this.bmi}`, {
          title: 'BootstrapVue Toast',
          autoHideDelay: 5000,
          toaster: 'b-toaster-top-center',
          appendToast: append
        })
      }
    }
  }
  
/* import TestCard from '@/components/TestCard.vue';

let cards = [];

cards = [
  {
    img: require('@/assets/gym.jpg'),
    route: '/login',
  },
];

export default {
  name: 'Dashboard',
  data: function() {
    return {
      cards,
    };
  },
  components: {
    TestCard,
  }
}; */
</script>

<style scoped>
.image{
  margin-left: -120px;
}
.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.dumbbell-logo{
  margin-top: -2px;
}
</style>