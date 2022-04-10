import http from "../http-common";
class TimelogDataSerice {
  getAll() {
    return http.get("/");
  }
  create(data) {
    return http.post("/", data);
  }
}
export default new TimelogDataSerice();
