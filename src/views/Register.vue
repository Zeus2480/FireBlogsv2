<template>
   <div>
      <template>
         <div class="contain tw-flex tw-min-h-screen tw-bg-gray-900">
            <div
               class="tw-w-full  tw-max-w-xs tw-m-auto tw-shadow-2-yellowshadow"
            >
               <form
                  class="tw-bg-white tw-rounded tw-px-8 tw-pt-4 tw-pb-6 tw-my-4"
               >
                  <h1 class="tw-font-bold tw-mb-6 tw-mt-0 tw-text-2xl">
                     Register
                  </h1>

                  <div class="tw-mb-4">
                     <label
                        class="tw-block tw-text-gray-700 tw-text-sm tw-font-semibold tw-mb-2 tw-text-left"
                        for="username"
                     >
                        Name
                     </label>
                     <input
                        class="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Name"
                        v-model.trim="name"
                     />
                     <p class="tw-text-red-600 tw-mt-1" v-if="!nameIsValid">
                        Name should not be blank
                     </p>
                  </div>
                  <div class="tw-mb-4">
                     <label
                        class="tw-block tw-text-gray-700 tw-text-sm tw-text-left tw-font-semibold tw-mb-2"
                        for="useremail"
                     >
                        Email
                     </label>
                     <input
                        class="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                        id="useremail"
                        type="email"
                        placeholder="Email"
                        v-model.trim="email"
                     />
                     <p class="tw-text-red-600 tw-mt-1" v-if="!emailIsValid">
                        Email should not be blank
                     </p>
                     <p
                        class="tw-text-red-600 tw-mt-1"
                        v-if="emailAlreadyTaken"
                     >
                        Email already taken.
                     </p>
                  </div>
                  <div class="tw-mb-3">
                     <label
                        class="tw-block tw-text-gray-700 tw-text-left tw-text-sm tw-font-semibold tw-mb-2"
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
                     <p class="tw-text-red-600 tw-mt-1" v-if="!passwordIsValid">
                        Password should not be blank
                     </p>
                     <p class="tw-text-red-600 tw-mt-1" v-if="!passwordSame">
                        Password and Confirm Password should be same
                     </p>
                     <p
                        class="tw-text-red-600 tw-mt-1"
                        v-if="!passwordLengthIsValid"
                     >
                        Password should alteast be 6 characters long.
                     </p>

                     <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                  </div>
                  <div class="tw-mb-6">
                     <label
                        class="tw-block tw-text-gray-700 tw-text-left tw-text-sm tw-font-semibold tw-mb-2"
                        for="confirmpassword"
                     >
                        Confirm Password
                     </label>
                     <input
                        class="tw-shadow tw-appearance-none tw-border rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                        id="confirmpassword"
                        type="password"
                        placeholder="Confirm Password"
                        v-model.trim="confirmPassword"
                     />
                     <p
                        class="tw-text-red-600 tw-mt-1"
                        v-if="!confirmPasswordIsValid"
                     >
                        Confirm Password should not be blank
                     </p>
                     <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                  </div>
                  <div class="tw-flex tw-items-center tw-justify-center">
                     <v-btn
                        @click="register"
                       color="primary"
                        type="button"
                     >
                        Register
                     </v-btn>
                  </div>
                  <p class="tw-mt-4">
                     Already have an account? <br /><router-link to="/login">
                        <span class="tw-text-blue-500">Login</span></router-link
                     >
                  </p>
               </form>
               <p
                  class="tw-text-center tw-text-gray-500 tw-text-xs tw-yellow-text"
               >
                  &copy;2022 Fireblogs. All rights reserved.
               </p>
            </div>
         </div>
      </template>
   </div>
</template>
<script>
import axios from "axios";
export default {
   data() {
      return {
         name: "",
         nameIsValid: true,
         email: "",
         emailIsValid: true,
         password: "",
         passwordIsValid: true,
         confirmPassword: "",
         confirmPasswordIsValid: true,
         passwordLengthIsValid: true,
         passwordSame: true,
         formIsvalid: true,
         emailAlreadyTaken: false,
         errorArray: [],
      };
   },
   methods: {
      validation() {
         this.formIsvalid = true;
         this.nameIsValid = true;
         this.emailIsValid = true;
         this.passwordIsValid = true;
         this.confirmPasswordIsValid = true;
         if (this.name === "") {
            this.nameIsValid = false;
            this.formIsvalid = false;
         }
         if (this.email === "") {
            this.emailIsValid = false;
            this.formIsvalid = false;
         }
         if (this.password.length < 6) {
            this.passwordLengthIsValid = false;
            this.formIsvalid = false;
         }
         if (this.password === "") {
            this.passwordIsValid = false;
            this.formIsvalid = false;
         }
         if (this.confirmPassword === "") {
            this.confirmPasswordIsValid = false;
            this.formIsvalid = false;
         }
         if (this.password !== this.confirmPassword) {
            this.passwordSame = false;
            this.formIsvalid = false;
         }
      },
      register() {
         this.validation();
         if (this.formIsvalid) {
            const data = {
               name: this.name,
               email: this.email,
               password: this.password,
               password_confirmation: this.confirmPassword,
            };

            // console.log(data);
            axios
               .post("/register", data)
               .then((res) => {
                  localStorage.setItem("token", res.data.access_token);
                  this.$router.push("/home");
               })
               .catch((err) => {
                  if (err.response.data.errors.email) {
                     this.emailAlreadyTaken = true;
                     this.email = "";
                     this.password = "";
                     this.confirmPassword = "";
                     this.name = "";
                  }
               });
            // this.$router.push("/login");
         }
      },
   },
};
</script>
