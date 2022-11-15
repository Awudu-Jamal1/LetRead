<script>
export default {
  setup() {},
  data() {
    return {
      genres: [
        "Art",
        "Biography",
        "Business",
        "Children",
        "Christian",
        "Classics",
        "Cookbooks",
        "Ebooks",

        "Fantasy",

        "Fiction",

        "Graphic Novels",

        "Historical Fiction",

        "History",

        "Horror",

        "Memoir",

        "Music",

        "Mystery",

        "Nonfiction",

        "Poetry",

        "Psychology",

        "Romance",

        "Science",

        "Science Fiction",

        "Self Help",

        "Sports",

        "Thriller",
        "Travel",
      ],
    };
  },
};
</script>
<template>
  <div class="d-flex space-around-evenly">
    <div class="Spotlight">
      <p class="text-center">Genres</p>
      <ul class="unlist" >
        <li v-for="(genre,i) in genres" :key="i">
          <router-link :to="{ name: 'Genre', params: { name: genre } }">
            {{genre}} </router-link>
          
        </li>
      
      </ul>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--font-color);
  list-style: 3px;
 
}
a:hover{
  text-decoration: underline;
  color: var(--font-color);
}
ul {
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  width: 30rem;
  columns: 3;
  column-gap: 0;
}
li{
  list-style: none;
  font-size: 15px;
  letter-spacing:  0.0125 rem;
  padding: 4px;

}
p{

  font-size: 18px;
  letter-spacing:  0.2125 rem;
  
}
</style>
