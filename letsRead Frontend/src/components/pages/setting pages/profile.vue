<template>
  <div>
    <div class="d-flex mb-2">
      <div>
        <img
          style="border-radius: 50%"
          src="https://cdn.dribbble.com/users/12903478/avatars/small/data?1661242315"
          alt=""
        />
      </div>
      <div class="d-flex mx-4 align-self-center">
        <div>
          <button class="btn btn-success">Update new picture</button>
        </div>
        <div>
          <button class="btn">Delete</button>
        </div>
      </div>
    </div>
    <form>
      <div class="">
        <div class="form-group">
          <label for="Email">Name</label>
          <input id="iput" v-model="name" class="form-control" />
        </div>
      </div>
      <div class="mt-5">
        <div class="form-group">
          <label for="password">Country</label>
          <input id="iput" class="form-control" />
        </div>
      </div>
      <div class="mt-5"><button @click.prevent="save" class="btn">Save Changes</button></div>
    </form>
  </div>
</template>

<script>

import AuthenticationService from "../../../services/AuthenticationService";
import { useStore } from "../../../store";

export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      name: null,
      country: null,
    };
  },
  watch: {
    store: {
      handler() {
        if (this.store !== null) {
          this.name = this.store.user.firstName;
          // this.email= this.store.user.email
        } else {
          this.name = null;
          this.country = null;
        }
      },
      immediate: true,
    },
  },
  methods: {
    async save() {
      console.log(this.name);
   const response= await AuthenticationService.update({id:this.store.user.id,
        firstName:this.name})
        this.store.setUser(response.data)
    },
  },
};
</script>

<style scoped>
label {
  font-size: 16px;
  margin-bottom: 5px;
}

#iput {
  height: 48px;
  border-width: 2px;
  border-color: #e7e7e9;
  background-color: #fff;
}
</style>
