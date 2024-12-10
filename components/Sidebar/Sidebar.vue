<template>
  <div class="sidebar">
    <!-- Header Sidebar Start -->
    <div class="header-sidebar">
      <img src="../../assets/images/ypt.svg" />
      <p>Intern Presence</p>
    </div>
    <!-- Header Sidebar End -->
    <hr />
    <!-- Profile Start -->
    <div class="user-data">
      <img src="../../assets/images/user.jpg" />
      <div class="user-inner">
        <h6>{{ akunAdmin[0].nama }}</h6>
        <h6 class="nip">{{ akunAdmin[0].role }}</h6>
      </div>
    </div>
    <hr />
    <!-- Profile End -->
    <!-- Menu Start -->
    <div class="menu my-4">
      <div>
        <p>MENU</p>
      </div>
      <div class="menu-list">
        <ul>
          <NuxtLink to="/" :class="{ active: isActive('/') }">
            <li>
              <a>
                <span class="me-2">
                  <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                </span>
                Daftar Akun
              </a>
            </li>
          </NuxtLink>
          <NuxtLink
            to="/rekap-absensi"
            :class="{ active: isActive('/rekap-absensi') }"
          >
            <li>
              <a>
                <span class="me-2">
                  <FontAwesomeIcon icon="fa-solid fa-clipboard-list" />
                </span>
                Absensi
              </a>
            </li>
          </NuxtLink>
          <NuxtLink to="/setting" :class="{ active: isActive('/setting') }">
            <li>
              <a>
                <span class="me-2">
                  <FontAwesomeIcon icon="fa-solid fa-gear" />
                </span>
                Jam Kerja
              </a>
            </li>
          </NuxtLink>
        </ul>
      </div>
    </div>
    <!-- Menu End -->
  </div>
</template>

<script setup>
import { useRoute } from "#vue-router";
import { akunAdmin } from "#imports";

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>
