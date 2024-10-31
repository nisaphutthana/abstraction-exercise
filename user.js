class User {
  constructor(username, password) {
    this.username = username;
    this._password = password; 
    this._profile = { name: username }; 
  }

  login(credentials) {
    if (credentials.username === this.username && credentials.password === this._password) {
      console.log(`${this.username} logged in successfully.`);
      return true;
    } else {
      throw new Error("Invalid credentials.");
    }
  }

  logout() {
    console.log(`${this.username} logged out.`);
  }

  getProfile() {
    return this._profile;
  }
}