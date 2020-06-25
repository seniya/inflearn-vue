<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID : </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">PW : </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button v-bind:disabled="!isUsernameValid || !password" type="submit">로그인</button>
    <p>{{ logMessege }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessege: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data);
        this.logMessege = `${data.user.nickname} 로그인 되었습니다.`;
      } catch (error) {
        console.log(error);
        console.log(error.response.data);
        this.logMessege = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
