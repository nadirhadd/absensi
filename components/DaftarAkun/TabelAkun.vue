<template>
  <div class="daftar-akun p-3">
    <table class="text-center">
      <thead>
        <tr>
          <th scope="col">NAMA</th>
          <th scope="col">NOMOR KONTAK</th>
          <th scope="col">EMAIL</th>
          <th scope="col">UNIT</th>
          <th scope="col">ROLE</th>
          <th scope="col">STATUS</th>
          <th scope="col">AKSI</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="karyawan in filteredKaryawan" :key="karyawan.id_karyawan">
          <td>{{ karyawan.nama_karyawan }}</td>
          <td>{{ karyawan.wa_karyawan }}</td>
          <td>{{ karyawan.email_karyawan }}</td>
          <td>{{ karyawan.nama_unit }}</td>
          <td>{{ karyawan.role_karyawan === true ? "TLH" : "PKWT" }}</td>
          <td>
            {{ karyawan.status_karyawan === true ? "Aktif" : "Non-Aktif" }}
          </td>
          <td class="d-flex justify-content-center gap-2">
            <button
              @click="showEditModal(karyawan)"
              class="btn btn-warning text-white w-100"
            >
              <FontAwesomeIcon icon="fas fa-pen" />
            </button>
            <button
              class="btn btn-danger w-100"
              @click="handleDelete(karyawan)"
            >
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="loading"
      class="spinner-load d-flex justify-content-center align-items-center"
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <ModalEdit
    :visible="showModal"
    :selectedKaryawan="selectedKaryawan"
    @close="closeModal"
    @refreshData="fetchDataKaryawan"
  />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, onMounted, computed } from "vue";
import { karyawanAPI } from "~/utils/api";

const dataKaryawan = ref<any[]>([]);
const loading = ref<boolean>(false);
const showModal = ref<boolean>(false);
const selectedKaryawan = ref<any | null>(null);

const showEditModal = (karyawan: any) => {
  selectedKaryawan.value = karyawan;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

onMounted(() => {
  fetchDataKaryawan();
});

const fetchDataKaryawan = async () => {
  try {
    loading.value = true;
    const data = await karyawanAPI.getAllDataKaryawan();
    dataKaryawan.value = data;
  } catch (error) {
    console.error("Error fetching data");
  } finally {
    loading.value = false;
  }
};

const deleteKaryawan = async (id_karyawan: number) => {
  try {
    const response = await karyawanAPI.deleteKaryawan(id_karyawan);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

const handleDelete = async (karyawan: any) => {
  if (window.confirm("Anda Yakin Untuk Menghapus Akun?")) {
    try {
      await deleteKaryawan(karyawan.id_karyawan);
      dataKaryawan.value = dataKaryawan.value.filter(
        (item) => item.id_karyawan !== karyawan.id_karyawan
      );
    } catch (error) {
      console.error("Error deleting karyawan:", error);
      alert("Failed to delete karyawan. Please try again.");
    }
  }
};

const props = defineProps<{
  searchQuery: String;
  selectedUnit: String;
}>();

const filteredKaryawan = computed(() => {
  let filtered = dataKaryawan.value;

  if (props.searchQuery && props.searchQuery.trim() !== "") {
    filtered = filtered.filter((karyawan) =>
      karyawan.nama_karyawan
        .toLowerCase()
        .includes(props.searchQuery.toLowerCase())
    );
  }

  if (props.selectedUnit) {
    filtered = filtered.filter(
      (karyawan) => karyawan.unit === props.selectedUnit
    );
  }

  return filtered;
});
</script>
