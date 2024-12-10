<template>
    <div class="container">
        <div class="row password-content">
            <div class="col d-flex flex-column gap-4">
                <fieldset disabled class="d-flex flex-column gap-2">
                    <label>Email Karyawan</label>
                    <input type="text" class="form-control w-75" placeholder="nadirhadd22@gmail.com">
                </fieldset>
                <div class="set-password d-flex flex-column gap-4">
                    <div class="new-password">
                        <label for="password">Kata Sandi Baru</label>
                        <input type="password" class="form-control w-75" placeholder="Kata Sandi Baru">
                    </div>
                    <div class="confirm-password">
                        <label for="password-confirm">Konfirmasi Kata Sandi Baru</label>
                        <input type="password" class="form-control w-75" placeholder="Kata Sandi Baru">
                    </div>
                </div>
            </div>
            <div class="col credential d-flex flex-column align-items-center">
                <div class="credential-items d-flex flex-column gap-4">
                    <div>
                        <input type="checkbox" checked disabled>
                        <label>Terdiri dari minimal 8 karakter dan maksimal 16 karakter</label>
                    </div>
                    <div>
                        <input type="checkbox" checked disabled>
                        <label>Terdiri dari gabungan huruf besar dan huruf kecil</label>
                    </div>
                    <div>
                        <input type="checkbox" checked disabled>
                        <label>Terdiri dari minimal satu angka</label>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column align-items-end">
                <NuxtLink>
                    <button class="btn btn-success text-white w-100">
                        <FontAwesomeIcon icon="fas fa-download" />
                        Simpan
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>