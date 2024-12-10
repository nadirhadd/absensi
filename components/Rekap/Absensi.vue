<template>
  <div class="tabel-rekap p-3">
    <table class="text-center">
      <thead>
        <tr>
          <th scope="col">TANGGAL</th>
          <th scope="col">NAMA</th>
          <th scope="col">UNIT</th>
          <th scope="col">LOKASI</th>
          <th scope="col">Status</th>
          <th scope="col">C/I</th>
          <th scope="col">C/O</th>
          <th scope="col">AKSI</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(presensi, index) in filteredKaryawan"
          :key="presensiKaryawan.id_karyawan"
        >
          <td>{{ presensi.tanggal_presensi }}</td>
          <td>{{ presensi.nama_karyawan }}</td>
          <td>{{ getUnitLabel(presensi.unit) }}</td>
          <td>{{ presensi.lokasi }}</td>
          <td>{{ presensi.status_kerja }}</td>
          <td>{{ presensi.check_in }}</td>
          <td>{{ presensi.check_out }}</td>
          <td>
            <button
              class="btn btn-danger w-100"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#deleteAccount"
            >
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </button>
            <ModalDelete
              :hapusAbsensi="{
                text: 'Anda Yakin Untuk Menghapus Absensi?',
              }"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div
    v-if="loading"
    class="spinner-load d-flex justify-content-center align-items-center"
  >
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, defineProps } from "vue";
import { presensiAPI } from "~/utils/api";

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
  searchQuery: {
    type: String,
    default: "",
  },
  selectedUnit: {
    type: Number,
    default: "",
  },
});

const getUnitLabel = (unitValue) => {
  const unit = unitOptions.find((u) => u.value === unitValue);
  return unit ? unit.label : "";
};

const presensiKaryawan = ref([]);
const emit = defineEmits(["data-loaded"]);

onMounted(async () => {
  try {
    const data = await presensiAPI.getPresensi();
    presensiKaryawan.value = data;
    emit("data-loaded", presensiKaryawan.value);
  } catch (error) {
    console.error("Error fetching data", error.message);
  }
});

const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;
    const data = await karyawanAPI.getAllDataKaryawan();
    dataKaryawan.value = data;
  } catch (error) {
    console.error("Error fetching data", error.message);
  } finally {
    loading.value = false;
  }
});

const filteredKaryawan = computed(() => {
  let filtered = presensiKaryawan.value;

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
