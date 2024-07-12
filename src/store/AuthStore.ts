import { observable, action, computed } from 'mobx';
import axios from 'axios';

class AuthStore {
  @observable token = null;
  @observable isLoggedIn = false;

  @action
  async signin(email, password) {
    try {
      const response = await axios.post('https://api.vertical.chulakov.dev/api/auth/signin/email', {
        email,
        password,
      });
      this.token = response.data.token;
      this.isLoggedIn = true;
    } catch (error) {
      console.error(error);
    }
  }

  @action
  async refreshToken() {
    try {
      const response = await axios.post('https://api.vertical.chulakov.dev/api/auth/refresh', {});
      this.token = response.data.token;
    } catch (error) {
      console.error(error);
    }
  }

  @computed
  get isAuthorized() {
    return this.isLoggedIn && this.token !== null;
  }
}

const authStore = new AuthStore();

export default authStore;