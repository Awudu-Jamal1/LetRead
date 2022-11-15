<script>
import BookList from "../../services/BookList";
export default {
  data() {
    return {
      search: null,
      results: {},
      show: false,
    };
  },
  watch: {
    search: async function (value) {
      if (this.search !== "") {
        this.results = (await BookList.searches(value)).data;
        this.show = true;
        console.log(this.results);
      } else {
        this.results = {};
        this.show = false;
      }
    },
  },
};
</script>
<template>
  <form
    style="position: relative"
    class="col-12 col-lg-4 mb-3 mb-lg-0 me-lg-3"
    role="search"
  >
    <input
      type="search"
      class="form-control"
      placeholder="Search..."
      aria-label="Search"
      v-model="search"
    />
    <div class="resultBar text-center">
      <div class="resultz" v-for="(result, i) in results" :key="i">
        <a
          :href="
            $router.resolve({ name: 'Book', params: { bookId: result.id } })
              .href
          "
          class="result-link d-flex"
          id="a"
        >
          <img style="height: 75px" :src="result.img_Url" alt="" />
          <div style="overflow-wrap: break-word; min-width: 1%">
            <div style="font-weight: bold">{{ result.title }}</div>
            <div>
              by <span>{{ result.author }}</span>
            </div>
          </div>
        </a>
      </div>

      <a style="height: 75px" class="a" v-show="show"
        >Show all results "{{ search }}"</a
      >
    </div>
  </form>
</template>
<style scoped>
#a {
  font-size: 12px;
  text-decoration: none;
  margin-bottom: 0px;
  overflow: hidden;
  height: 55px;
  padding: 8px;
  padding-right: 16px;
  color: #333333;
  border-bottom: 1px solid #eee;
}
img {
  flex-shrink: 0;
  align-self: flex-start;
  margin-right: 8px;
  width: 46px;
}
.resultBar {
  position: absolute;

  background: white;
  position: absolute;
  width: 100%;
  z-index: 70;
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%);
}
.a {
  font-size: 15px;
  cursor: pointer;
}
</style>
