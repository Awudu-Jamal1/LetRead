<script>
export default {
    setup() {
        
    },
    data(){
        return{
            radios:"",
            color:"15%"
        }
    }
}
</script>
<template>
   <div>{{radios}}
    <fieldset class="rating">
					<input type="radio" id="star5" v-model="radios"  name="rating" value="5"/><label for="star5" class="full" title="Awesome"></label>
					<input type="radio" id="star4.5" v-model="radios"  name="rating" value="4.5"/><label for="star4.5" class="half"></label>
					<input type="radio" id="star4" v-model="radios"  name="rating" value="4"/><label for="star4" class="full"></label>
					<input type="radio" id="star3.5" v-model="radios"  name="rating" value="3.5"/><label for="star3.5" class="half"></label>
					<input type="radio" id="star3" v-model="radios"  name="rating" value="3"/><label for="star3" class="full"></label>
					<input type="radio" id="star2.5" v-model="radios"  name="rating" value="2.5"/><label for="star2.5" class="half"></label>
					<input type="radio" id="star2" v-model="radios"  name="rating" value="2"/><label for="star2" class="full"></label>
					<input type="radio" id="star1.5" v-model="radios"  name="rating" value="1.5"/><label for="star1.5" class="half"></label>
					<input type="radio" id="star1" v-model="radios"  name="rating" value="1"/><label for="star1" class="full"></label>
					<input type="radio" id="star0.5" v-model="radios" name="rating" value="0.5"/><label for="star0.5"  class="half"></label>
				</fieldset>

                <div class="stars-outer">
            <div style="" class="stars-inner " id="nice"></div>
          </div>
   
   </div>
</template>
<style scoped>
@import "https://use.fontawesome.com/releases/v5.0.13/css/all.css";
#nice{
    width:v-bind(color)

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
  font-weight: 900;
  color: #ccc;
}

.stars-inner::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: #f8ce0b;
}
/************************ */
#rating-value{	
	width: 110px;
	margin: 40px auto 0;
	padding: 10px 5px;
	text-align: center;
	box-shadow: inset 0 0 2px 1px rgba(46,204,113,.2);
}

/*styling star rating*/
.rating{
	border: none;
	float: left;
}

.rating > input{
	display: none;
}

.rating > label:before{
	content: '\f005';
	font-family: 'Font Awesome 5 free';
	margin: 5px;
	font-size: 1.5rem;
	display: inline-block;
	cursor: pointer;
}

.rating > .half:before{
	content: '\f089';
	position: absolute;
	cursor: pointer;
}


.rating > label{
	color: #acc;
	float: right;
	cursor: pointer;
    font-weight: 900;
}

.rating > input:checked ~ label,
.rating:not(:checked) > label:hover, 
.rating:not(:checked) > label:hover ~ label{
	color: #f8ce0b;
    font-weight: 900;
}

.rating > input:checked + label:hover,
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label{
	color: #f8ce0b;
    font-weight: 900;
}



</style>

