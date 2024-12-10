<template>
  <div class="d-flex flex-column p-4">
    <h5>Silahkan Buat Kata Sandi</h5>
    <div class="row">
      <div class="new-input col">
        <div class="d-flex flex-column gap-2">
          <div class="d-flex flex-column">
            <label>Email Karyawan</label>
            <input type="text" placeholder="nadirhadd22@ypt.or.id" disabled />
          </div>
          <div class="d-flex flex-column">
            <label>Kata Sandi</label>
            <input type="password" placeholder="Kata Sandi" />
          </div>
          <div class="d-flex flex-column">
            <label>Konfirmasi Kata Sandi</label>
            <input type="text" placeholder="Konfirmasi Kata Sandi" />
          </div>
        </div>
      </div>
      <div class="col checkbox-input d-flex flex-column justify-content-end">
        <div>
          <input type="checkbox" checked class="mx-2" />
          <label
            >Terdiri dari minimal 8 karakter dan maksimal 16 karakter</label
          >
        </div>
        <div>
          <input type="checkbox" checked class="mx-2" />
          <label>Terdiri dari gabungan huruf besar dan huruf kecil</label>
        </div>
        <div>
          <input type="checkbox" checked class="mx-2" />
          <label>Terdiri dari minimal satu angka</label>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <button class="btn btn-success text-white w-25">Simpan Password</button>
    </div>
  </div>
</template>
