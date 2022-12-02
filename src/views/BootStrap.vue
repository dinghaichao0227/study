<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid" style="height: 2rem">
        <a class="navbar-brand" href="#">logo</a>
        <button
          class="navbar-toggler"
          type="button"
          style="height: 1.5rem; line-height: 0rem"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list-ul"></i>
          <span class="navbar-toggler-icon" style="width: 1rem; height: 1rem; border: none"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/boot">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="boot/home">活动</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">商店</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">优选</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">折扣</a>
            </li>
          </ul>
          <form class="d-flex mt-1" role="search">
            <input
              class="form-control me-2 mt-1"
              style="height: 1.5rem"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success btn-sm mt-1" style="height: 1.5rem; line-height: 0rem" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <main>
      111
      <router-view />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  .navbar {
    width: 100%;
    background-color: red;
  }
}

@media screen and (min-width: 768px) {
  .navbar {
    width: 750px;
    background-color: red;
  }
}
@media screen and (min-width: 992px) {
  .navbar {
    width: 970px;
    background-color: red;
  }
}

@media screen and (min-width: 1200px) {
  .navbar {
    width: 1170px;
    background-color: red;
  }
}
</style>
