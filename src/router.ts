import Vue from "vue";
import VueRouter from "vue-router";
import {
  RawLocation,
  Route,
  RouteConfig,
  RouterMode,
  RouterOptions
} from "vue-router/types/router";

// Named routes to be used when programmatically navigating
export class Routes {
  public static readonly Home: string = "home";
  public static readonly About: string = "about";
  public static readonly Projects: string = "projects";
  public static readonly PageNotFound: string = "page-not-found";
}

/**
 * Describes vue-router configuration.
 *
 * More info: http://router.vuejs.org/en/
 */
export default class Router implements RouterOptions {
  public routes: RouteConfig[] = [
    {
      path: "/",
      name: Routes.Home,
      component: () => import("@/views/Home.vue"),
      meta: {
        title: "Home"
      }
    },
    {
      path: "/about",
      name: Routes.About,
      component: () => import("@/views/About.vue"),
      meta: {
        title: "About"
      }
    },
    {
      path: "/projects",
      name: Routes.Projects,
      component: () => import("@/views/Projects.vue"),
      meta: {
        title: "Projects"
      }
    },
    {
      path: "*",
      name: Routes.PageNotFound,
      component: () => import("@/views/PageNotFound.vue"),
      meta: {
        title: "Page not found"
      }
    }
  ];

  public mode: RouterMode = "history";

  private readonly router: VueRouter;

  public constructor() {
    Vue.use(VueRouter);

    this.router = new VueRouter(this);

    this.router.beforeEach(Router.beforeEach);
  }

  public get instance(): VueRouter {
    return this.router;
  }

  private static async beforeEach(
    to: Route,
    from: Route,
    /* eslint-disable-next-line */
    next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
  ) {
    // Set <title>
    if (to.meta.title) {
      document.title = to.meta.title + " | Jack Domleo";
    } else {
      document.title = 'Jack Domleo';
    }

    next();
  }
}
