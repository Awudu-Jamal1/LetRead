import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Homepage/MainHome.vue";
import TestView from "../views/testView.vue";
import SignUp  from "../components/pages/Accounts/signUp.vue";
import SignIn  from "../components/pages/Accounts/signIn.vue";
import Genre from "../components/pages/genre/genrepage.vue";
import Mybook from "../components/pages/myBooks/mybookspage.vue"
import AccountS from "../views/settings/account.vue"
import ProfileS from "../views/settings/sprofile.vue"
import PasswordS from "../views/settings/password.vue"
import Book from "../components/pages/BOOK/bookView.vue"
import Text from "../views/enter/feed.vue"
import Review from "../components/pages/review/reviewPage.vue"
import User from "../components/pages/User/user.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    }, {
      path: "/test",
      name: "test",
      component: TestView,
    },{
      path: "/SignUp",
      name: "signup",
      component: SignUp,
    },{
      path: "/session/new",
      name: "Sign In",
      component: SignIn,
    },{
      path: "/genres/:name",
      name: "Genre",
      component: Genre,
    },{
      path: "/review/readlist",
      name: "Mybook",
      component: Mybook,
    },{
      path: "/review/readlist/show",
      
    },{
      path: "/account",
      name: "Account settings",
      component: AccountS,
    },{
      path: "/account/profile",
      name: "profile",
      component: ProfileS,
    },{
      path: "/account/password",
      name: "password",
      component: PasswordS,
    },{
      path: "/book/show/:bookId",
      name: "Book",
      component: Book,
    },{
      path: "/text",
      name: "text",
      component: Text,
    },{
      path: "/review/ratings",
      name: "Review",
    },{
      path: "/review/edit/:bookid",
      name: "Review",
      component: Review,
    },{
      path: "/reviews",
      name: "Reviews",
    },{
      path: "/reviews/:bookid",
      name: "Reviews",
    },
    {
      path: "/search",
      name: "search"
    },{
      path: "/user/show/:userId",
      name: "user",
      component: User,
    },{
      path: "/user/fellow",
      name: "users",
    
    }
  ],
});

export default router;
