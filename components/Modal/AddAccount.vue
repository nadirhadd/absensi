<template>
  <div v-if="isVisible" class="modal-backdrop fade show"></div>
  <div
    v-if="isVisible"
    class="modal fade show d-block bg-transparent"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Account</h5>
          <button type="button" class="btn-close" @click="hideModal"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="nip_karyawan">NIP Karyawan</label>
              <input
                type="text"
                class="form-control"
                id="nip_karyawan"
                v-model="newKaryawan.nip_karyawan"
              />
            </div>
            <div class="form-group">
              <label for="nama_karyawan">Nama Karyawan</label>
              <input
                type="text"
                class="form-control"
                id="nama_karyawan"
                v-model="newKaryawan.nama_karyawan"
              />
            </div>
            <div class="form-group">
              <label for="wa_karyawan">WA Karyawan</label>
              <input
                type="text"
                class="form-control"
                id="wa_karyawan"
                v-model="newKaryawan.wa_karyawan"
              />
            </div>
            <div class="form-group">
              <label for="email_karyawan">Email Karyawan</label>
              <input
                type="email"
                class="form-control"
                id="email_karyawan"
                v-model="newKaryawan.email_karyawan"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="newKaryawan.password_karyawan"
              />
            </div>
            <div class="form-group">
              <label for="unit">Unit</label>
              <select class="form-control" id="unit" v-model="newKaryawan.unit">
                <option
                  v-for="option in unitOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="role_karyawan">Role Karyawan</label>
              <select
                class="form-control"
                id="role_karyawan"
                v-model="newKaryawan.role_karyawan"
              >
                <option
                  v-for="(option, index) in roleOptions"
                  :key="index"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="status_karyawan">Status Karyawan</label>
              <select
                class="form-control"
                id="status_karyawan"
                v-model="newKaryawan.status_karyawan"
              >
                <option
                  v-for="(option, index) in statusOptions"
                  :key="index"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="hideModal">Close</button>
          <button class="btn btn-primary" @click="createKaryawan">
            Add Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, defineEmits } from "vue";
import { karyawanAPI } from "~/utils/api";

export interface Karyawan {
  id_karyawan: number;
  nip_karyawan: string;
  nama_karyawan: string;
  wa_karyawan: string;
  email_karyawan: string;
  password_karyawan: string;
  unit: number;
  role_karyawan: boolean;
  status_karyawan: boolean;
}

export default {
  data() {
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

    const roleOptions = [
      { value: true, label: "TLH" },
      { value: false, label: "PKWT" },
    ];

    const statusOptions = [
      { value: true, label: "Aktif" },
      { value: false, label: "Non-Aktif" },
    ];

    return {
      unitOptions,
      roleOptions,
      statusOptions,
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const emit = defineEmits(["refreshTable"]);
    const isVisible = ref(props.visible);
    const newKaryawan = ref({
      id_karyawan: 1,
      nip_karyawan: "",
      nama_karyawan: "",
      wa_karyawan: "",
      email_karyawan: "",
      password_karyawan: "",
      unit: 1,
      role_karyawan: false,
      status_karyawan: false,
    });

    const createKaryawan = async () => {
      try {
        const response = await karyawanAPI.createKaryawan(newKaryawan.value);
        if (response.status === "success") {
          alert("Data created successfully!");
          hideModal();
          emit("refreshTable");
        } else {
          console.error(response.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const hideModal = () => {
      isVisible.value = false;
      newKaryawan.value = {
        id_karyawan: 1,
        nip_karyawan: "",
        nama_karyawan: "",
        wa_karyawan: "",
        email_karyawan: "",
        password_karyawan: "",
        unit: 1,
        role_karyawan: false,
        status_karyawan: false,
      };
    };

    watch(
      () => props.visible,
      (newValue) => {
        isVisible.value = newValue;
      }
    );

    return {
      isVisible,
      newKaryawan,
      createKaryawan,
      hideModal,
    };
  },
};
</script>
