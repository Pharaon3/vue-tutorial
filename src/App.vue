<template>
  <div>
    <Header id="header" />
    <div id="content" class="row">
      <div id="sidebar">
        <!-- <SideBar id="sidebar" /> -->
        <sidebar-menu :menu="sidebar" />
        <i class="fa fa-futbol-o" aria-hidden="true"></i>
      </div>
      <div class="col-8">
        <MainPage id="mainpage" />
      </div>
      <div class="col-4">
        <BetSlip />
      </div>
    </div>
  </div>
</template>

<script>
import uniqueId from "lodash.uniqueid";
// import SideBar from "./components/SideBar.vue";
import MainPage from "./components/MainPage.vue";
import Header from "./components/Header.vue";
import BetSlip from "./components/BetSlip.vue";

export default {
  name: "App",
  components: {
    // SideBar,
    MainPage,
    Header,
    BetSlip,
  },
  data() {
    return {
      ToDoItems: [
        {
          id: uniqueId("todo-"),
          label: "Money Line 3-way",
          leftTitle: "HOME",
          middleTitle: "TIE",
          rightTitle: "AWAY",
          leftAmount: "+1200",
          middleAmount: "800",
          rightAmount: "-200",
          done: false,
        },
        {
          id: uniqueId("todo-"),
          label: "Double Chance",
          leftTitle: "HOME",
          middleTitle: "TIE",
          rightTitle: "AWAY",
          leftAmount: "+1200",
          middleAmount: "800",
          rightAmount: "-200",
          done: false,
        },
        {
          id: uniqueId("todo-"),
          label: "Match Goals",
          leftTitle: "HOME",
          middleTitle: "TIE",
          rightTitle: "AWAY",
          leftAmount: "+1200",
          middleAmount: "800",
          rightAmount: "-200",
          done: false,
        },
        {
          id: uniqueId("todo-"),
          label: "Alternative Match Goals",
          leftTitle: "HOME",
          middleTitle: "TIE",
          rightTitle: "AWAY",
          leftAmount: "+1200",
          middleAmount: "800",
          rightAmount: "-200",
          done: false,
        },
        // { id: uniqueId("todo-"), label: "Double Chance", done: true },
        // { id: uniqueId("todo-"), label: "Match Goals", done: true },
        // { id: uniqueId("todo-"), label: "Alternative Match Goals", done: false },
        // { id: uniqueId("todo-"), label: "Match Corners", done: false },
      ],
      ThreeWayTables: [
        {
          id: uniqueId("twt-"),
          title: "Match Corners",
          currentCorners: "4",
          corners: [
            ["5", "-225", "260", "+700"],
            ["6", "-235", "270", "+710"],
            ["7", "-244", "280", "+720"],
            ["8", "-255", "290", "+730"],
          ],
        },
      ],
      sidebar: [
        {
          header: 'EZ Live',
          hiddenOnCollapse: true,
        },
        {
          // href: '/Popular',
          title: 'Popular',
          // icon: 'fa fa-user',
          icon: 'fa fa-users',
          child: [
            {
              href: '/Popular/NHL',
              title: 'NHL',
            },
            {
              href: '/Popular/MLB',
              title: 'MLB',
            },
            {
              href: '/Popular/NFL',
              title: 'NFL',
            },
            {
              href: '/Popular/FOQ',
              title: 'French Open Qual.(M)',
            },
            {
              href: '/Popular/Boxing',
              title: 'Boxing',
            },
          ],
        },
        {
          href: '/SportsTeams',
          title: 'Sports teams',
          icon: 'fa',
        },
        {
          // href: '/AZSports',
          title: 'A-Z Sports',
          icon: 'fa fa-bars',
          child: [
            {
              href: '/AZSports/aussierules',
              title: 'aussie rules',
            },
            {
              href: '/AZSports/baseball',
              title: 'baseball',
            },
            {
              href: '/AZSports/basketball',
              title: 'basketball',
            },
            {
              href: '/AZSports/boxing',
              title: 'boxing',
            },
            {
              href: '/AZSports/COQ',
              title: 'cricket Open Qual.(M)',
            },
          ],
        },
      ],
    };
  },
  methods: {
    addToDo(toDoLabel) {
      console.log("toDoLabel: ", toDoLabel);
      this.ToDoItems.push({
        id: uniqueId("todo-"),
        label: toDoLabel,
        done: false,
      });
    },
  },
};
</script>

<style>
.row {
  display: flex;
  justify-content: space-between;
}

.col-4 {
  width: 33%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  margin-top: 60px;
  background-color: #000;
}

#app {
  margin: 0px;
}

.v-sidebar-menu {
  position: relative !important;
  ;
}

.col-6 {
  width: 50%;
}
.col-8 {
  width: 67%;
}
.col-4 {
  width: 33%;
}

@media (max-width: 1400px) {
  .col-6 {
    width: 100%;
  }
  .col-8 {
    width: 100%;
  }
  .col-4 {
    width: 100%;
  }

  .row {
    display: block;
  }

  .v-sidebar-menu {
    position: fixed !important;
    top: 80px !important;
  }
  #content {
    margin-left: 65px;
  }
}</style>
