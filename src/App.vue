<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="submit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{ 'is-invalid': v$.email.$error }"
          v-model.lazy="v$.email.$model"
        />
        <div class="invalid-feedback" v-if="v$.email.required.$invalid">
          Це поле не маэ бути пустим
        </div>
        <div class="invalid-feedback" v-else-if="v$.email.email.$invalid">
          Це не емeйл
        </div>
        <div class="invalid-feedback" v-else-if="v$.email.isUniqueEmail">
          емейл занят
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{ 'is-invalid': v$.password.$error }"
          v-model.lazy="v$.password.$model"
        />

        <div class="invalid-feedback" v-if="v$.password.minLength.$invalid">
          Довжина пароля має бути не менше ніж
          {{ v$.password.minLength.$params.min }} символыв. зараз довжина
          {{ password.length }} символів
        </div>
      </div>
      <div class="form-group">
        <label for="confirm"> Confirm Password</label>
        <input
          type="password"
          id="confirm"
          class="form-control"
          :class="{ 'is-invalid': v$.confirmPassword.$error }"
          v-model="v$.confirmPassword.$model"
        />

        <div class="invalid-feedback" v-if="v$.confirmPassword.sameAsPassword">
          Пароль не одинаков
        </div>
      </div>
      <button class="btn btn btn-success" type="submit" :disabled="v$.$invalid">
        submit
      </button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from '@vuelidate/validators';
const { withAsync } = helpers;
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },

  methods: {
    submit() {
      let a = [this.email, this.password];
      console.log(a);
    },
  },
  watch: {},
  components: {},
  validations() {
    return {
      email: {
        required,
        email,
        isUniqueEmail: withAsync(function (newEmail) {
          if (newEmail === '') {
            return true;
          }
          return new Promise((resolve) => {
            setTimeout(() => {
              const value = newEmail !== 'test@gmail.com';
              resolve(value);
            }, 500);
          });
        }),
      },

      password: { minLength: minLength(6), required },
      confirmPassword: { sameAsPassword: sameAs(this.password) },
    };
  },
};
</script>

<style></style>
