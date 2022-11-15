<template>
     <div style="font-size:16px;" class="p-3">
    <p>Displaying 1-30 of 5000 reviews</p>
    <div class="row">
      <div class="col-3 ">
        <img class="rounded" style="height:40px;" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1649902670i/175635._UY200_CR29,0,200,200_.jpg" alt="">
        <h5>Trevor</h5>
       <p> 1,555 reviews <br>
        20.8k folowers</p>
      <button class="btn btn-dark">Follow</button>
      </div>
      <div class="col-8 reviews ">
        <div>
          <div>
            <div class=""><img style="height:20px;" src="https://www.pngfind.com/pngs/m/668-6687141_star-rating-png-487848-5-stars-transparent-background.png" alt=""></div>
          </div>
          <div>March 5, 2008</div>
        </div>
        <div>
          <p>
            I found a lot of this book incredibly tedious. I tend to avoid the winners of the Man / Booker – they make me a little depressed. The only Carey I haven’t liked won the Booker (Oscar and Lucinda), I really didn’t like the little bit of Vernon God Little I read and I never finished The Sea despite really liking Banville’s writing. So, being told a book is a winner of the Booker tends to be a mark against it from the start, unfortunately.
          </p>
        </div>
        <div>More</div>
      <div class="mb-2"><span>Literature</span> <span>religion</span></div>
      <div class="comments mb-2">
        <span>756 likes</span>.
        <span>215 comments</span>
      </div>
      <div class="symbols">
        <span>Like</span>
        <span>Comment</span>
        ...
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import review from '../../services/review';

export default {
  data(){
    return{

    }
    
  },props:["bookid"],
  async mounted(){
  const bookID= this.$route.params.bookId
  console.log(bookID)
    const response = await review.show( bookID
    )
   
  }
}
</script>