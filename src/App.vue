<template>
  <div class="container">
    <form class="pt-3">
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
        <div class="invalid-feedback" v-else-if="v$.email.$invalid">
          Це не емeйл
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
          v-model.lazy="v$.confirmPassword.$model"
        />

        <div class="invalid-feedback" v-if="v$.confirmPassword.sameAs">
          Пароль не одинаков
        </div>
      </div>
    </form>

    <button @click="a()">1</button>
    <button @click="b()">2</button>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';

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
    a() {
      console.log(this.v$.confirmPassword);
    },
    b() {
      console.log(this.v$.password);
    },
  },
  watch: {},
  components: {},
  validations() {
    return {
      email: { required, email },
      password: { minLength: minLength(6) },
      confirmPassword: { sameAs: sameAs('password') },
    };
  },
};
</script>

<style></style>
