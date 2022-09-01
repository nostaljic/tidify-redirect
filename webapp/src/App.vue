<template>
  <html>
    <head>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
    </head>
    <div id="app" data-app>
      <router-view />
    </div>
  </html>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap");
html,
body,
#app {
  height: 100%;
  width: 100%;
}
#app {
  background: transparent !important;
  font-family: Noto Sans KR;
  color: black;
  font-family: "Noto Sans KR", sans-serif;
}
.v-data-table__wrapper {
  overflow-x: inherit !important;
  overflow-y: inherit !important;
}
.v-data-table__wrapper > table > thead > tr > th {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #ffffff;
  border-bottom: 1px solid #5f65ff !important;
  color: #868686 !important;
  font-weight: 400;
  font-size: 14px !important;
  height: 48px;
}
.v-data-table__wrapper > table > tbody > tr > td {
  font-size: 16px !important;
  height: 72px !important;
  border-bottom: 4px solid #f9f9ff !important;
  color: #363636;
}
.v-data-table__wrapper
  > table
  > tbody
  > tr.v-data-table__expanded.v-data-table__expanded__row
  > td {
  border-bottom: 1px solid #cccccc !important;
}
.v-data-table
  > .v-data-table__wrapper
  tbody
  tr.v-data-table__expanded__content {
  box-shadow: none !important;
}
.v-data-table
  > .v-data-table__wrapper
  tbody
  tr.v-data-table__expanded__content
  td {
  padding: 0;
}
.nav-tabs .v-tab--active {
  color: #373eff !important;
}
.nav-tabs .v-tabs-slider-wrapper {
  height: 4px !important;
}
.nav-tabs .v-tab {
  font-size: 16px;
  font-weight: 500;
}
.full-size {
  height: 100%;
  width: 100%;
}
.view-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f9f9ff;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-center {
  text-align: center;
}
.text-truncate {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
</style>
