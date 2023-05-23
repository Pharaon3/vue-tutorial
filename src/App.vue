<template>
  <div id="app">
    <!-- <h1 class="header">EZ <span style="color: yellow;">LIVE</span></h1> -->
    <!-- <ToDoForm :plabel="newLabel" @todo-added="addToDo" /> -->
    <Header id="header" />
    <div class="row">
      <div style="width: 15%">
        <SideBar id="sidebar" />
      </div>
      <div style="width: 55%">
        <MainPage id="mainpage"/>
        <!-- <ul class="col-4">
          <li v-for="item in ToDoItems" :key="item.id">
            <ThreeWay
              :id="item.id"
              :label="item.label"
              :leftTitle="item.leftTitle"
              :middleTitle="item.middleTitle"
              :rightTitle="item.rightTitle"
              :leftAmount="item.leftAmount"
              :middleAmount="item.middleAmount"
              :rightAmount="item.rightAmount"
              :done="item.done"
            />
          </li>
          <li v-for="item in ThreeWayTables" :key="item.id">
            <ThreeWayTable
              :id="item.id"
              :title="item.title"
              :currentCorners="item.currentCorners"
              :corners="JSON.stringify(item.corners)"
            />
          </li>
        </ul> -->
      </div>
      <div style="width: 30%">
        <BetSlip />
      </div>
    </div>
    <!-- <h2>{{ ToDoItems.filter(item => item.done).length }} items completed out of {{ ToDoItems.length }}. </h2> -->
  </div>
</template>

<script>
// import ToDoItem from "./components/ToDoItem.vue";
import uniqueId from "lodash.uniqueid";
// import ToDoForm from "./components/ToDoForm.vue";
// import ThreeWay from "./components/ThreeWay.vue";
// import ThreeWayTable from "./components/ThreeWayTable.vue";
import SideBar from "./components/SideBar.vue";
import MainPage from "./components/MainPage.vue";
import Header from "./components/Header.vue";
import BetSlip from "./components/BetSlip.vue";

export default {
  name: "App",
  components: {
    // ThreeWay,
    // ThreeWayTable,
    SideBar,
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
  /* background: #fff; */
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  padding-top: 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}
</style>
