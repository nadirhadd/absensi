<template>
  <!-- Edit Account Modal -->
  <div v-if="visible" class="modal-backdrop fade show"></div>
  <div
    v-if="visible"
    class="modal fade show d-block bg-transparent"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Account</h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="nip_karyawan">NIP Karyawan</label>
              <input
                type="text"
                class="form-control"
                id="nip_karyawan"
                v-model="formData.nip_karyawan"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="nama_karyawan">Nama Karyawan</label>
              <input
                type="text"
                class="form-control"
                id="nama_karyawan"
                v-model="formData.nama_karyawan"
              />
            </div>
            <div class="form-group">
              <label for="wa_karyawan">WA Karyawan</label>
              <input
                type="text"
                class="form-control"
                id="wa_karyawan"
                v-model="formData.wa_karyawan"
              />
            </div>
            <div class="form-group">
              <label for="email_karyawan">Email Karyawan</label>
              <input
                type="email"
                class="form-control"
                id="email_karyawan"
                v-model="formData.email_karyawan"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="formData.password_karyawan"
              />
            </div>
            <div class="form-group">
              <label for="unit">Unit</label>
              <select class="form-control" id="unit" v-model="formData.unit">
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
                v-model="formData.role_karyawan"
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
                v-model="formData.status_karyawan"
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
          <button class="btn btn-secondary" @click="$emit('close')">
            Close
          </button>
          <button class="btn btn-primary" @click="updateKaryawan">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
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
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    selectedKaryawan: {
      type: Object as () => Karyawan,
      required: true,
    },
  },

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

  setup(props, { emit }) {
    const formData = ref<Karyawan>({
      id_karyawan: props.selectedKaryawan?.id_karyawan, // Use optional chaining and fallback values
      nip_karyawan: props.selectedKaryawan?.nip_karyawan || "",
      nama_karyawan: props.selectedKaryawan?.nama_karyawan || "",
      wa_karyawan: props.selectedKaryawan?.wa_karyawan || "",
      email_karyawan: props.selectedKaryawan?.email_karyawan || "",
      password_karyawan: props.selectedKaryawan?.password_karyawan || "",
      unit: props.selectedKaryawan?.unit || 1,
      role_karyawan: props.selectedKaryawan?.role_karyawan || false,
      status_karyawan: props.selectedKaryawan?.status_karyawan || false,
    });

    // Watch for changes in selectedKaryawan and update formData accordingly
    watch(
      () => props.selectedKaryawan,
      (newKaryawan) => {
        if (newKaryawan) {
          formData.value = { ...newKaryawan }; // Pre-fill the form when new selectedKaryawan is received
        }
      },
      { immediate: true } // Immediately populate form on mount
    );

    const updateKaryawan = async () => {
      try {
        console.log("Updating Karyawan:", formData.value);
        const response = await karyawanAPI.updateKaryawan(formData.value);
        if (response.status === "success") {
          alert("Data updated successfully!");
          emit("refreshData");
        } else {
          console.error(response.message);
        }
      } catch (error) {
        console.error("Error updating Karyawan:", error);
      }
    };

    return {
      formData,
      updateKaryawan,
    };
  },
};
</script>
