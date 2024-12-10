<template>
    <div class="d-flex flex-column">
        <div class="confirm-content py-3 px-5">
            <h6>Apakah anda yakin untuk mengirim email ke</h6>
            <div class="form-confirm d-flex flex-row my-4">
                <div class="label d-flex flex-column">
                    <p>Nama</p>
                    <p>No Whatsapp</p>
                    <p>Email</p>
                    <p>Role</p>
                    <p>Status</p>
                </div>
                <div class="middle-point d-flex flex-column">
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </div>
                <div class="data d-flex flex-column">
                    <p>Nadir Septian Hadiansyah</p>
                    <p>085156483790</p>
                    <p>nadirhadd22@gmail.com</p>
                    <p>TLH</p>
                    <p>Aktif</p>
                </div>
            </div>
            <h6>Email akan berisi link untuk membuat kata sandi.</h6>
            <div class="buttons d-flex justify-content-between mt-5">
                <NuxtLink to="/main/form-account">
                    <button class="btn btn-outline-danger">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                        Ubah Data
                    </button>
                </NuxtLink>
                <NuxtLink to="/main/new-password">
                    <button class="btn btn-success text-white">
                        <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                        Kirim Email
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>