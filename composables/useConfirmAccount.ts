// useConfirmAccount.ts
import { ref } from "vue";
import type { Ref } from "vue";
import type { Karyawan } from "~/components/Modal/AddAccount.vue";

const accountData: Ref<Karyawan | null> = ref(null); // Initially null
const isConfirmModalVisible = ref(false);

export const useConfirmAccount = () => {
  const setAccountData = (data: Karyawan) => {
    accountData.value = data;
    isConfirmModalVisible.value = true;
  };

  const hideConfirmModal = () => {
    isConfirmModalVisible.value = false;
  };

  return {
    accountData,
    isConfirmModalVisible,
    setAccountData,
    hideConfirmModal,
  };
};
