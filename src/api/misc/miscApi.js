import axios from "axios";
export default class API {
  constructor() {
    this.instance = axios.create({
      baseURL: `https://dummyjson.com`,
      //   headers: {
      //     Authorization: JSON.parse(localStorage.getItem('userAuth'))
      //       ?.authorization
      //   }
    });
  }

  getProducts() {
    return this.instance.get("/products");
  }
  updateProduct(data) {
    return this.instance.post("/products/add", data);
  }
}
