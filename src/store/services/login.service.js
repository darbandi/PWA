import Axios from "axios";

class LoginDataService {
  login(email, password) {
    const params = {
      email,
      password,
    };
    return Axios.get(`http://localhost:3000/api/login`, { params });
  }
}

export default new LoginDataService();
