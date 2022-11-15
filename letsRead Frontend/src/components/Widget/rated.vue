<script>
    export default {
        setup() {
            
        },props:["rate"],
      
    }

    </script>

<template>
    <div>
        <div class="stars-outer">
            <div style="" class="stars-inner " id="nice"></div>
          </div>
    </div>
</template>
<style scoped>
@import "https://use.fontawesome.com/releases/v5.0.13/css/all.css";
#nice{
    width:v-bind(rate)

}
.stars-outer {
  position: relative;
      display: inline-block;
}

.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;

}

.stars-outer::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 600;
  color: #8e8e97;
  font-size: 30px;
  
}

.stars-inner::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 600;
  color: #e87400;
  font-size: 30px;
  
}
</style>