
<template>
  <header class="d-flex jc-between pl-3 pr-3">
    <a class="logo" href="/">
      <img src="/logo.svg" alt="Aviasoft Logo">
    </a>
    <ul class="d-flex ai-center p-0">
      <li class="menu">
        <a class="active" href="#">Home</a>
      </li>
      <li class="menu">
        <a href="#">Product List</a>
      </li>
      <li class="menu">
        <a href="#">About Us</a>
      </li>
      <li class="menu">
        <a href="#">FAQ</a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
  li.menu {
    list-style-type: none;
    margin-left: 1rem;
    .active {
      color: var(--primary-color)
    }
  }
</style>
