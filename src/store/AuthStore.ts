'use client';
import { makeAutoObservable } from 'mobx';
import usersData from './users.json';

interface User {
  email: string;
  password: string;
}

class AuthStore {
  isLoggedIn = false;
  user: User | null = null; 
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.checkAuth();
  }

  checkAuth() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser) as User;
      this.isLoggedIn = true;
    }
  }

  async signin(email: string, password: string) {
    try {
      const user = usersData.find(u => u.email === email && u.password === password);

      if (user) {
        this.isLoggedIn = true;
        this.user = user;
        this.error = null;
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.isLoggedIn = false;
        this.user = null;
        this.error = 'Incorrect email or password';
      }
    } catch (error) {
        this.error = 'Auth error';
        console.error('Auth error:', error);
    }
  }

  signout() {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user');
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthStore();
