 <template>
    <div>
        <section class="container" style="border:none;">
            <div class="row">
                <div class="col-3 "><Leftside/></div>
                <div class="col-6 "><Middle/></div>
                <div class="col-3"><Rightside/></div>
            </div>
        </section>
    </div>
 </template>

 <script>
import Leftside from '../../components/Widget/homepageWidget/leftside.vue';
import Middle from '../../components/Widget/homepageWidget/middle.vue';
import Rightside from '../../components/Widget/homepageWidget/rightside.vue';
 export default {
    setup() {
    },
    components: { Leftside, Middle, Rightside }
}
 </script>
