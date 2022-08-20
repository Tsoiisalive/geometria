<template>
  <q-table
    :rows="rows"
    :columns="columns"
    row-key="name"
    class="bg-primary text-grey q-my-lg"
    table-header-class="second-font"
    color="amber"
    flat
    :rows-per-page-options="[0]"
  />
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true,
        },
        { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
        {
          name: "iron",
          label: "Iron (%)",
          field: "iron",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
      ],
    };
  },
};
</script>

<style>
</style>