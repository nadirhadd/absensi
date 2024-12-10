<template>
  <div class="utilities d-flex gap-3">
    <!-- Search Box Start -->
    <div
      class="search-group border rounded-2 shadow-sm d-flex align-items-center gap-1 px-2"
    >
      <FontAwesomeIcon icon="fas fa-search" class="text-secondary" />
      <input type="text" placeholder="Cari Karyawan..." @input="updateSearch" />
    </div>
    <!-- Search Box End -->

    <!-- Filter Unit Start -->
    <div class="d-flex gap-1 justify-content-end">
      <label class="align-self-center px-2">Unit:</label>
      <select class="form-select" v-model="selectedUnit" @change="filterByUnit">
        <option value="">All Units</option>
        <option
          v-for="unit in unitOptions"
          :key="unit.value"
          :value="unit.value"
        >
          {{ unit.label }}
        </option>
      </select>
    </div>
    <!-- Filter Unit End -->

    <!-- Add Account Start -->
    <div v-if="addButton" class="d-flex">
      <button :class="addButton.class" @click="showModal = true">
        <FontAwesomeIcon :icon="addButton.icon" class="me-2" /> Tambah
      </button>
      <ModalAddAccount
        v-if="showModal"
        :visible="showModal"
        @close="showModal = false"
        @accountAdded="handleAccountAdded"
      />
    </div>
    <!-- Add Account End -->

    <!-- Download Button Start -->
    <div v-if="downloadButton" class="d-flex">
      <button :class="downloadButton.class" @click="downloadCsv">
        <FontAwesomeIcon :icon="downloadButton.icon" class="me-2" />
        Unduh
      </button>
    </div>
    <!-- Download Button End -->

    <!-- Edit Button Start -->
    <div v-if="editButton">
      <button
        :class="editButton.class"
        data-bs-toggle="modal"
        :data-bs-target="editButton.modalTarget"
      >
        <FontAwesomeIcon :icon="editButton.icon" class="me-2" />
        {{ editButton.text }}
      </button>
    </div>
    <!-- Edit Button End -->
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineProps } from "vue";
import { ref } from "vue";
import ModalAddAccount from "../Modal/AddAccount.vue";

const unitOptions = [
  { value: 1, label: "Secretary Foundation Office" },
  { value: 2, label: "Internal Audit" },
  { value: 3, label: "Legal" },
  { value: 4, label: "Education Strategic Policy" },
  { value: 5, label: "Education System" },
  { value: 6, label: "Higher Education Management" },
  { value: 7, label: "Primary Secondary Education Operations" },
  { value: 8, label: "Finance & Risk Management" },
];

const props = defineProps({
  addButton: {
    type: Object,
    default: () => null,
  },
  downloadButton: {
    type: Object,
    default: () => null,
  },
  editButton: {
    type: Object,
    default: () => null,
  },
});

const showModal = ref(false);
const selectedUnit = ref("");

const emit = defineEmits(["search", "filter-unit", "download-csv"]);

const updateSearch = (event) => {
  emit("search", event.target.value);
};

const filterByUnit = () => {
  emit("filter-unit", selectedUnit.value);
};

const handleAccountAdded = (newAccount) => {
  console.log("New Account Added", newAccount);
};

const downloadCsv = () => {
  emit("download-csv");
};
</script>
