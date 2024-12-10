<script setup lang="ts">
import type { icon } from "@fortawesome/fontawesome-svg-core";
</script>

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
          class="content-setting border border-2 rounded-4 d-flex flex-column pt-4 mt-4"
        >
          <div class="d-flex justify-content-between align-items-center mx-4">
            <h4>Jam Kerja Harian</h4>
            <DaftarAkunHeader
              :editButton="{
                class: 'btn btn-warning text-white px-4',
                icon: 'fas fa-pen',
                text: 'Ubah',
                modalTarget: '#changeTime',
              }"
            />
          </div>
          <ModalChangeTime />
          <hr />
          <div>
            <SettingJamPengaturan />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
