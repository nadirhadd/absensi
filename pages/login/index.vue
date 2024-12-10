<template>
  <div class="header-login">
    <h2>Intern Presence</h2>
    <h3>Presensi untuk TLH dan PKWT</h3>
  </div>

  <div class="login-content d-flex">
    <div class="w-100">
      <p class="fs-4 px-4">Silakan Masuk</p>
      <form
        class="login-input d-flex flex-column justify-content-between"
        @submit.prevent="handleLogin"
      >
        <ul>
          <li>
            <input
              type="text"
              placeholder="Nomor Induk Pegawai"
              class="mb-3"
              v-model="nip"
              required
            />
          </li>
          <li>
            <input
              type="password"
              placeholder="Kata Sandi"
              class="mb-3"
              v-model="password"
              required
            />
          </li>
          <li>
            <button type="submit" class="btn btn-primary button-login">
              Masuk
            </button>
          </li>
        </ul>
      </form>
      <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
    </div>
    <div>
      <img src="../../assets/images/login-assets.jpg" class="gambar-login" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nip: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      const validNip = "230601";
      const validPassword = "dummy@230601";

      if (this.nip === validNip && this.password === validPassword) {
        this.$router.push("/");
      } else {
        this.errorMessage = "Nomor Induk Pegawai atau Kata Sandi salah.";
      }
    },
  },
};
</script>
