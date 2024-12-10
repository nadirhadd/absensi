<template>
  <div class="d-flex">
    <div>
      <Sidebar />
    </div>
    <div class="d-flex flex-column gap-2 w-100">
      <div>
        <NavbarHeader />
      </div>
      <div class="px-3">
        <div
          class="main-content border border-2 rounded-4 d-flex flex-column pt-4 mt-4"
        >
          <div class="d-flex justify-content-between align-items-center mx-4">
            <h4>Buat Password Baru</h4>
          </div>
          <hr />
          <div>
            <NewPassword />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
