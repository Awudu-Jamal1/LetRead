<template>
  <footer>
      <div class="container">
        <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4"
          >
        <div class="col "><h2>LetsRead</h2></div>
        <div class="col">
          <div class="mx-4"><h5>Company</h5></div>
          <ul>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div class="col">
          <div class="mx-4"><h5>More</h5></div>
          <ul>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Instructions</li>
          </ul>
        </div>
        <div class="col">
          <div class="d-flex  justify-content-around pt-4">
            <div><iconify-icon class="ic" icon="ic:baseline-facebook"></iconify-icon></div>
          <div><iconify-icon class="ic" icon="ph:instagram-logo-light"></iconify-icon></div>
         <div ><iconify-icon class="ic" icon="ant-design:twitter-circle-filled"></iconify-icon></div>
        <div><iconify-icon class="ic" icon="ph:youtube-logo-fill"></iconify-icon></div>
        </div>
        </div>
        </div>
      </div>
    </footer>
</template>

<style scoped>
.ic{ 
  color: #fff;
  font-size: 40px;
 
}
li{
list-style: none;
font-weight: 500;
font-size: 1rem;
}

footer{
  background-color: #1d3557;
  color: #fff;
  padding-top: 50px;
  padding-bottom: 50px;
}

 h2{
  color: #e07a5f;
  letter-spacing: 2px;
  font-weight:700;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
}
h5{
  font-size: 1.2rem;
}

</style>
