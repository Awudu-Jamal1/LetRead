<script>
    import LeftSide from '../../components/pages/setting pages/leftSide.vue';
    import Profilediv from '../../components/pages/setting pages/profilediv.vue';
import General from '../../components/pages/setting pages/general.vue';
    export default {
        components: { LeftSide, Profilediv, General }
    }
    </script>
    <template>
        <div><div class="main-container">
            <div>
               
    <Profilediv/>
                <div>
                    <div class="col-left" style="width:200px; float:left;">
                        <LeftSide/>
                    
                </div>
                <div class="col-right" style="width:770px; float:right;">
                <General/>
    
                </div>
                </div>
               
            </div>
        </div></div>
    </template>
    
    <style scoped>
    ul{
        list-style: none;
        font-size: 16px;
    }
    li{
        cursor: pointer;
    }
    </style>