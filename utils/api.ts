import axios from "axios";
import type { Karyawan } from "~/components/Modal/AddAccount.vue";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const karyawanAPI = {
  async getAllDataKaryawan() {
    try {
      const response = await api.get("/karyawan/all");
      return response.data.data;
    } catch (error) {
      throw new Error("Error fetching all karyawan");
    }
  },

  async createKaryawan(karyawanData: Record<string, any>) {
    console.log("karyawanData:", karyawanData);
    try {
      const response = await api.post("/karyawan", karyawanData);
      return response.data;
    } catch (error) {
      throw new Error("Error updating");
    }
  },

  async updateKaryawan(karyawan: Karyawan) {
    try {
      if (!karyawan.id_karyawan) {
        throw new Error("ID is missing");
      }

      // Make sure the endpoint and data are correct
      const response = await api.put(
        `/karyawan/${karyawan.id_karyawan}`,
        karyawan
      );

      // Assuming the API returns the updated data
      return response.data;
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status other than 200
        console.error("Server error:", error.response.data);
        throw new Error(
          error.response.data.message || "Failed to update karyawan"
        );
      } else if (error.request) {
        // No response received from the server
        console.error(
          "Network error or no response from server:",
          error.request
        );
        throw new Error("No response from server");
      } else {
        // Something else caused the error
        console.error("Error:", error.message);
        throw new Error(error.message);
      }
    }
  },

  async deleteKaryawan(id_karyawan: number) {
    try {
      const response = await api.delete(`/karyawan/${id_karyawan}`);
      return response.data;
    } catch (error: unknown) {
      // Narrowing down the error type to an AxiosError if possible
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The server responded with an error status code
          return {
            status: "failed",
            message:
              error.response.data.message ||
              "Error occurred while deleting the data",
          };
        } else if (error.request) {
          // No response received from the server
          return {
            status: "failed",
            message: "No response from server",
          };
        }
      }

      // Handle any other types of errors
      return {
        status: "failed",
        message: "An unexpected error occurred during the request",
      };
    }
  },
};

export const presensiAPI = {
  async getPresensi() {
    try {
      const response = await api.get("/presensi/absen/all");
      return response.data.data;
    } catch (error) {
      throw new Error("Error fetching");
    }
  },
};
