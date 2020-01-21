<template>
  <div id="app" class="small-container">
    <h1>Employees</h1>

    <employee-table v-bind:employees="employees" />
  </div>
</template>

<script>
import EmployeeTable from "@/components/EmployeeTable.vue";

export default {
  name: "app",
  components: {
    EmployeeTable
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Vasile Popescu",
          email: "vasile@popescu.com"
        },
        {
          id: 2,
          name: "Vincent Staggs",
          email: "Vincent@Staggs.com"
        },
        {
          id: 3,
          name: "Sherwood Keel",
          email: "Sherwood@Keel.com"
        }
      ]
    };
  }
};
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>