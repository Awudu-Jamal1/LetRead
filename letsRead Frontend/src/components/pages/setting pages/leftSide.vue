<template>
  <div>
    <ul>
      <li><a href="/account">General</a></li>
      <li><a href="/account/profile">Edit Profile</a></li>
      <li><a href="/account/password">Password</a></li>
      <li>Spcial Profile</li>
    </ul>
  </div>
</template>

<style scoped>
a{
  text-decoration: none;
  transition: all ease ;
}

a:hover{
  color: #fff;
}

ul {
  list-style: none;
  font-size: 16px;
}
li {margin-right: 25px;
  padding-top:5px ;
  padding-bottom: 5px;
  padding-left: 25px;
  cursor: pointer;
  transition: all ease 0.5s;
}
li:hover{
  background:  #e48d8b;
  color: #fff;
}

.profile img {
  border-radius: 50%;
  height: 50px;
}
</style>
