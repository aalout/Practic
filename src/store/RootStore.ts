import { makeAutoObservable } from 'mobx';
import AuthStore from './AuthStore';

class RootStore {
  authStore = new AuthStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export default new RootStore();