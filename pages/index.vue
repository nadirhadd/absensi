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
          class="main-content border border-2 rounded-4 d-flex flex-column pt-4 mt-4"
        >
          <div class="d-flex justify-content-between align-items-center mx-4">
            <h4>Daftar Akun Karyawan TLH / PKWT</h4>
            <div>
              <DaftarAkunHeader
                :addButton="{
                  class: 'btn btn-success text-white px-4',
                  icon: 'fas fa-add',
                }"
                @search="searchQuery = $event"
                @filter-unit="selectedUnit = $event"
              />
              <ModalAddAccount />
            </div>
          </div>
          <hr />
          <div>
            <DaftarAkunTabelAkun
              :searchQuery="searchQuery"
              :selectedUnit="selectedUnit"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const selectedUnit = ref("");
</script>
