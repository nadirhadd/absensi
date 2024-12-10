<template>
  <div class="modal fade" id="deleteAccount" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="input-group d-flex flex-column">
            <div class="d-flex flex-column p-3">
              <div v-if="hapusAkun">
                <h6 class="text-center">
                  {{ hapusAkun.text }}
                </h6>
              </div>
              <div v-if="hapusAbsensi">
                <h6 class="text-center">
                  {{ hapusAbsensi.text }}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-danger text-white w-25"
            @click="confirmDelete"
          >
            Ya
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary w-25"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  hapusAkun: {
    type: Object,
    default: () => null,
  },
  hapusAbsensi: {
    type: Object,
    default: () => null,
  },
  id: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["confirmDelete"]);

const confirmDelete = () => {
  if (props.karyawan) {
    emit("confirmDelete", props.karyawan);
  }
};
</script>
