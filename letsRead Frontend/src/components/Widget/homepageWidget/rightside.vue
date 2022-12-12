<template>
 

  <div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title">Book Recommendation</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex">
      <div><img src="https://media.anobii.com/covers/01d41ff48a3de09c88/130/199/1/paperback/webp/1500553684" alt=""></div>
          <div>
            <p class="name">The Power</p>
            <p class="author">by Noami Alderin</p>
          </div>
    </li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>

</div>
</template>

<style scoped>
.card{
  
    border: 1px solid #f1f1f1;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
    

}
.card img{
height: 180px;
}
.name{
  font-weight: 600;
  padding-top: 30px;
  font-size: 1.2rem;
}
.author{
  font-size: 0.9rem;
  line-height: 2px;
}
</style>