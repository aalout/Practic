import { makeAutoObservable, observable, action } from 'mobx';
import { useQuery, useMutation } from 'react-query';
import authService from '../services/auth';

class AuthStore {
  @observable isLoggedIn = false;
  @observable user: any = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async login(credentials: any) {
    try {
      const response = await authService.login(credentials);
      this.isLoggedIn = true;
      this.user = response.data;
      // Сохраните токен авторизации (например, в localStorage)
    } catch (error) {
      // Обработка ошибок
    }
  }

  @action
  async register(credentials: any) {
    // ... аналогично login
  }

  @action
  logout() {
    this.isLoggedIn = false;
    this.user = null;
  }
}

export default new AuthStore();