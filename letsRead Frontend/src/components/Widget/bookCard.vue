<template>
   <div>
     <div class="container  ">
      <div class="d-flex row ">
        <div class="col" v-for="(book,i) in books" :key="i" v>
          <img
            thumbnail
            fluid
            :src="book.img_Url"
            alt="Image 1"
            height="200"
            :title="book.title"
          />
        </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  props: ['books']
}
</script>
