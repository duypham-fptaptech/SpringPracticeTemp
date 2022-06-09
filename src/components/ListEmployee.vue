<template>
  <div>
<h4>List Product</h4>
    <a href="/add">Create new employee</a>
    <div>
      <table class="table table-striped table-bordered no-wrap">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Wage</th>
        </tr>
        </thead>
        <tbody>
        <tr :class="{ active: index === currentIndex }" v-for="(employee, index) in employees"  v-bind:key="index">
          <td v-text="employee.id"></td>
          <td v-text="employee.name"></td>
          <td v-text="employee.wage"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import EmployeeService from "../service/EmployeeService";
export default {
  name: "employees-list",
  data() {
    return {
      employees: [],
      currentIndex: -1,
      id: "",
      name: ""
    };
  },
  methods: {
    retrieveTutorials() {
        EmployeeService.getAll()
            .then(response => {
              this.employees = response.data;
              console.log(response.data);

            })
            .catch(e => {
              console.log(e);
            });
    },},
  created() {
    this.retrieveTutorials();
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>