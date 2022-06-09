<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <div>
          <input
              type="text"
              placeholder="Please enter id"
              class="form-control"
              required
              v-model="employee.id"
              name="id"
          />
        </div>
      </div>
      <div class="form-group">
        <input
            type="text"
            placeholder="Please enter name"
            class="form-control"
            required
            v-model="employee.name"
            name="name"
        />
      </div>
      <div class="form-group">
        <input
            type="text"
            placeholder="Please enter wage"
            class="form-control"
            required
            v-model="employee.wage"
            name="wage"
        />
      </div>
      <button @click="saveEmployee" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <a href="/">Return list employee</a>
    </div>
  </div>
</template>

<script>
import EmployeeService from "@/service/EmployeeService";

export default {
  name: "AddEmployee",
  data() {
    return {
      employee: {
        id: "",
        name: "",
        wage: "",
        published: true
      },
      submitted: false
    };
  },
  methods: {
    saveEmployee() {
      var data = {
        id: this.employee.id,
        name: this.employee.name,
        wage: this.employee.wage
      };
      EmployeeService.create(data)
          .then(response => {
            this.employee.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
    },
}};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>