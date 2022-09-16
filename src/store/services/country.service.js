import Axios from "./index";

class CountryDataService {
  getAll() {
    return Axios.get("v3.1/all");
  }

  get(cioc) {
    return Axios.get(`v3.1/alpha/${cioc}`);
  }
  
  filterByRegion(region) {
    return Axios.get(`v3.1/region/${region}`);
  }
}

export default new CountryDataService();
