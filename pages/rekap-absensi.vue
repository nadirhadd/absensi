<template>
  <div class="d-flex">
    <div>
      <Sidebar />
    </div>
    <div class="d-flex flex-column gap-2 w-100">
      <div>
        <NavbarHeader />
      </div>
      <div class="px-3">
        <div
          class="rekap-main d-flex flex-column border border-2 rounded-4 pt-4 mt-4"
        >
          <div class="d-flex justify-content-between align-items-center mx-4">
            <h4>Rekap Absensi Karyawan TLH / PKWT</h4>
            <DaftarAkunHeader
              :downloadButton="{
                class: 'btn btn-success text-white px-4',
                icon: 'fas fa-download',
                text: 'Unduh',
              }"
              @download-csv="handleDownloadCsv"
              @search="updateSearch"
              @filter-unit="updateUnitFilter"
            />
          </div>
          <hr />
          <div>
            <RekapAbsensi
              :searchQuery="searchQuery"
              :selectedUnit="selectedUnit"
              @data-loaded="updatePresensiKaryawan"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DaftarAkunHeader from "~/components/DaftarAkun/Header.vue";
import { ref } from "vue";
import { downloadCsv } from "~/utils/download";

const presensiKaryawan = ref([]);
const searchQuery = ref("");
const selectedUnit = ref("");

const updateUnitFilter = (unit) => {
  selectedUnit.value = unit;
};

const updateSearch = (query) => {
  searchQuery.value = query;
};

const updatePresensiKaryawan = (data) => {
  presensiKaryawan.value = data;
};

const handleDownloadCsv = () => {
  if (presensiKaryawan.value.length > 0) {
    downloadCsv(presensiKaryawan.value, "rekap-absensi.csv");
  }
};
</script>
