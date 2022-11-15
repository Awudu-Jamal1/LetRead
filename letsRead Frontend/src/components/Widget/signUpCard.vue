<script>
export default {
methods:{
  emailS() {
    this.$router.push('/register/email')
  }
}
}
</script>
<template>
  <div>
    <div class="card d-flex justify-content-center text-center p-4" style="width:260px">
      <div><p style="font-size:18px; font-weight:semi-bold;">Find And Read More</p></div>
      <div class="d-flex flex-column text-align-center align-self-center justify-content-center ">
        <div>
          <button class="btn" style="background:#3b5998; ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="background:#3b5998; color: #3b5998;"
              height="25px"
              viewBox="0 0 448 512"
              id="can"
            >
              <path
                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
              />
            </svg>
            Join with Facebook
          </button>
        </div>
        <div>
          <button class="btn" style="color:black;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 384 512"
            >
              <path
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            Join with Apple
          </button>
        </div>
        <div><button @click="emailS()" class="btn " style=" background-color: #ac3b61;">Join with Email</button></div>
      </div>
      <p>
        By creating an account, you agree to the Goodreads Terms of Service and
        Privacy Policy.
      </p>
      <hr />
      <p style="font-size:16px;">Already a Member <a href="">SignIn <i class="fa-brands fa-apple"></i></a></p>
    </div>
  </div>
</template>

<style scoped>
.btn {
    font-size: 14px;
  color: #FFF;
  transition: all 0.5s;
  position: relative;
  border: 1px solid;
  text-align: center;
  padding: 10px;
  width: 200px;
  height: 50px;
   margin-bottom: 15px;
}
.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s;
}
.btn:hover::before {
  opacity: 0 ;
  transform: scale(0.5,0.5);
}
.btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*z-index: 1;*/
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255,255,255,0.5);
  transform: scale(1.2,1.2);
}
.btn:hover::after {
  opacity: 1;
  transform: scale(1,1);
}
.btn svg{
    margin-right: 5px;
margin-top: -5px;
    background:white;
}
#can{
    background: white;
}
</style>
