import http from "../http-common";
class EmployeeService {
    getAll() {
        return http.get(`/employees` );
    }
    create(data) {
        return http.post("/employees", data);
    }
}
export default new EmployeeService();
