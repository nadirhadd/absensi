<template>
    <div class="d-flex flex-column">
        <div class="content py-3 px-5">
            <form class="new-form">
                <div class="input-text d-flex flex-column gap-1">
                    <label for="nama">Nama</label>
                    <input type="text" name="nama" placeholder="Masukkan Nama">
                    <label for="whatsapp">Nomor Whatsapp</label>
                    <input type="text" name="number" placeholder="Masukkan Nomor Whatsapp">
                    <label for="email">Email <span>(*domain ypt.or.id)</span></label>
                    <input type="email" name="email" placeholder="Masukkan Email">
                </div>
    
                <div class="mt-3">
                    <label>Pilih Role</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="role" id="tlh" value="tlh">
                        <label>TLH</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="role" id="pkwt" value="pkwt">
                        <label>PKWT</label>
                    </div>
                </div>
    
                <div class="mt-3">
                    <label>Pilih Status</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="status" id="aktif" value="aktif">
                        <label>Aktif</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="status" id="nonaktif" value="nonaktif">
                        <label>Non-Aktif</label>
                    </div>
                </div>
    
                <div class="d-flex justify-content-between pt-3">
                    <NuxtLink to="/">
                        <button class="btn btn-outline-danger">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-left"/>
                            Kembali
                        </button>
                    </NuxtLink>
                    <NuxtLink to="/main/confirm-form">
                        <button class="btn btn-success text-white">
                            <FontAwesomeIcon icon="fa-solid fa-circle-check"/>
                            Konfirmasi
                        </button>
                    </NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>