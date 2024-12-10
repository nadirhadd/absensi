<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="modal fade" id="changeTime" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header gap-2">
          <button class="btn" data-bs-dismiss="modal">
            <FontAwesomeIcon icon="fas fa-arrow-left" />
          </button>
          <h5 class="mt-2">Setting Jam Kerja</h5>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <table class="setting-jam">
            <tbody>
              <tr>
                <td>Senin</td>
                <td>
                  <input type="text" placeholder="08:00" />
                </td>
                <td>s/d</td>
                <td>
                  <input type="text" placeholder="16:30" />
                </td>
              </tr>
              <tr>
                <td>Selasa</td>
                <td>
                  <input type="text" placeholder="08:00" />
                </td>
                <td>s/d</td>
                <td>
                  <input type="text" placeholder="16:30" />
                </td>
              </tr>
              <tr>
                <td>Rabu</td>
                <td>
                  <input type="text" placeholder="08:00" />
                </td>
                <td>s/d</td>
                <td>
                  <input type="text" placeholder="16:30" />
                </td>
              </tr>
              <tr>
                <td>Kamis</td>
                <td>
                  <input type="text" placeholder="08:00" />
                </td>
                <td>s/d</td>
                <td>
                  <input type="text" placeholder="16:30" />
                </td>
              </tr>
              <tr>
                <td>Jumat</td>
                <td>
                  <input type="text" placeholder="08:00" />
                </td>
                <td>s/d</td>
                <td>
                  <input type="text" placeholder="16:30" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button class="btn btn-success text-white">
            <FontAwesomeIcon icon="fas fa-save" />
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
