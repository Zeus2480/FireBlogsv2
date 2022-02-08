uc                          <template>
   <div class="contain tw-flex">
      <div class="tw-w-full tw-max-w-xs tw-m-auto tw-shadow-2-yellowshadow">
         <form class="tw-bg-white tw-rounded tw-px-8 tw-pt-4 tw-pb-6 tw-my-4">
            <h1 class="tw-font-bold tw-mb-6 tw-mt-0 tw-text-2xl">Login</h1>
            <div class="tw-mb-4">
               <label
                  class="tw-block tw-text-gray-700 tw-text-sm tw-text-left tw-font-bold tw-mb-2"
                  for="username"
               >
                  Email
               </label>
               <input
                  class="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                  id="username"
                  type="email"
                  placeholder="Email"
                  v-model.trim="email"
               />
               <p class="tw-text-red-500" v-show="!emailIsValid">
                  Email cannot be empty
               </p>
            </div>
            <div class="tw-mb-6">
               <label
                  class="tw-block tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-2 tw-text-left"
                  for="password"
               >
                  Password
               </label>
               <input
                  class="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  v-model.trim="password"
               />
               <p class="tw-text-red-500" v-show="!passwordIsValid">
                  Password cannot be empty
               </p>
               <p class="tw-text-red-500" v-show="showInvalidLoginCredentials">
                  Invalid Login Credentials
               </p>
               <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
            </div>
            <div class="tw-flex tw-items-center tw-justify-center">
               <v-btn
                  @click="login"
                  color="primary"
                  type="button"
               >
                  Login
               </v-btn>
            </div>
            <p class="tw-mt-4">
               Register instead?
               <router-link to="/register">
                  <span class="tw-text-blue-500">Register</span></router-link
               >
            </p>
         </form>
         <p class="tw-text-center tw-text-gray-500 tw-text-xs tw-yellow-text">
            &copy;2021 Fireblogs. All rights reserved.
         </p>
      </div>
   </div>
</template>
<script>
import axios from "axios";
export default {
   data() {
      return {
         email: "",
         password: "",
         showInvalidLoginCredentials: false,
         emailIsValid: true,
         passwordIsValid: true,
      };
   },
   methods: {
      login() {
         this.emailIsValid = true;
         this.passwordIsValid = true;
         if (this.email === "") {
            this.emailIsValid = false;
            return;
         } else if (this.password === "") {
            this.passwordIsValid = false;
            return;
         } else {
            const data = {
               email: this.email,
               password: this.password,
            };
            axios
               .post("/login", data)
               .then((response) => {
                  console.log(response.data.access_token);
                  localStorage.setItem("token", response.data.access_token);
                  this.$router.push({ name: 'home', params: {loggedIn: true }});
               })
               .catch((err) => {
                  if (err.response.status === 401) {
                     this.showInvalidLoginCredentials = true;
                  }
               });
         }
      },
   },
};
</script>
<style scoped>
.contain {
   background-color: #010411;
   height: 100vh;
}
.yellow {
   background-color: #fff500;
   color: #010411;
   border-radius: 10px;
}
.yellow:hover {
   color: #fff500;
   background-color: #010411;
   /* border: 4px #fff500 solid; */
}
.yellow-text {
   color: #fff500;
}
</style>
