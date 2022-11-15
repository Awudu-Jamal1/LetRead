<template>
  <div>
    <section>
      <div class="">
        <h4>Currenty Reading</h4>
        <div class="d-flex space-around-evently">
          <div>
            <img
              style="height: 250px"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320565186i/765884.jpg"
              alt=""
            />
          </div>
          <div class="align-self-center mx-3">
            <div class="d-flex justify-content-between">
              <div>
                <img
                  style="height: 50px"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1430490255i/403760.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Carl Sewell</p>
                <p>1 book 5 followers</p>
              </div>
            </div>
            <button class="btn btn-dark">follow</button>
            <p class="mt-3">Started On: <span>21st December, 2021</span></p>
            <p>readers: <span>100</span></p>
            <div>
              <p>Review: <span>4.2</span></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <UpdateCard />
      </div>
    </section>
  </div>
</template>

<script>
import UpdateCard from "../updateCard.vue";
export default {
  setup() {},
  components: { UpdateCard },
};
</script>

<style>
p {
  font-size: 13px;
}
</style>
