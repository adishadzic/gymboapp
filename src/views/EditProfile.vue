<template>
    <div class="app">
        <h2>Edit Profile</h2>

        <form>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <p class="mt-2">
                        {{ store.currentUser }}
                    </p>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                 <p class="mt-2 mr-4">
                        {{ store.password }}
                 </p> <button type="button" @click="resetPw()" class="btn btn-secondary mb-3">Send password reset email</button>
            </div>
            <div class="form-group row">
                <label for="profilePicture" class="col-sm-2 col-form-label">Profile picture</label>
                <croppa 
                    :width="300" 
                    :height="300" 
                    placeholder="Učitaj sliku..." 
                    v-model="imageReference"
                    class="ml-5"
                >
                </croppa>
            </div>
            <div class="form-group row">
                <button type="submit" class="btn btn-primary" style="margin-left:330px">Post
              image</button>
            </div>
        </form>
    </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import { db, storage } from "@/firebase";


export default {
    name: 'EditProfile',
    data() {
        return{
            store,
            newImageUrl: "",
            imageReference: null
        }
    },
    methods: {
        resetPw(){
            const auth = firebase.auth();

            auth.sendPasswordResetEmail(auth.currentUser.email).then(() => {
                alert("Email sent. Check your inbox")
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>