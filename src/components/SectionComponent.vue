<template>
  <div class="section" :id="id">
    <div class="sectionHeader">
      <div class="sectionName">{{ count.sectionName }}</div>
      <a-button>Add task</a-button>
    </div>
    <draggable
      v-model="tasks"
      group="people"
      @start="drag = true"
      @end="drag = false"
      class="tasks"
    >
      <TaskComponent
        v-for="item in tasks"
        :key="item.id"
        :id="item.id"
        :title="item.taskTitle"
        :task="item"
        :sectionName="count.sectionName"
      ></TaskComponent>
    </draggable>
  </div>
</template>

<script>
import store from "@/store";
import TaskComponent from "./TaskComponent.vue";
import draggable from "vuedraggable";

export default {
  name: "SectionComponent",
  props: {
    count: String,
    id: String,
  },
  components: {
    TaskComponent,
    draggable,
  },
  data() {
    return {
      taskCount: 2,
      enabled: true,
      rows: [
        {
          index: 1,
          items: [
            {
              title: "item 1",
            },
          ],
          title: "Make a Kanban App",
          img: true,
        },
        {
          index: 2,
          items: [
            {
              title: "item 2",
            },
            {
              title: "item 3",
            },
          ],
          title: "Complete eQuota Assesment",
          img: false,
        },
      ],
      tasks: [],
    };
  },
  mounted() {
    const $this = this;
    this.getTasks();
    $this.$store.watch(
      () => [store.state.tasks],
      async () => {
        this.tasks = store.state.tasks;
        console.log("mounted", this.tasks);
      }
    );
  },
  methods: {
    getTasks() {
      const $this = this;
      $this.$store.dispatch("setTasks").then(() => {
        this.tasks = store.state.tasks;
      });
    },
  },
};
</script>

<style lang="scss">
.section {
  width: 320px;

  //border: 1px solid blue;
  .sectionHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
}

.row-v {
  height: 150px;
  width: 200px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
