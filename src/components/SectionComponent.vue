<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="section scroll" :id="id">
    <div class="sectionHeader">
      <input
        class="sectionName"
        @change="updateSectionName(section.id)"
        v-model="section.sectionName"
      />

      <a-button
        name="addTaskBtn"
        class="addTaskBtn"
        type="link"
        @click="addTask(section.id)"
        >Add task</a-button
      >
    </div>
    <draggable
      v-model="butasks"
      group="task"
      @start="drag = true"
      @end="drag = false"
      class="tasks"
    >
      <TaskComponent
        v-for="(item, idx) in butasks"
        :key="idx"
        :id="item.id"
        :title="item.taskTitle"
        :task="item"
        :sectionName="section.sectionName"
        :sectionId="section.id"
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
    section: Object,
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
      butasks: [],
      defaultTask: {},
      //updateSectionName: "",
    };
  },
  async mounted() {
    const $this = this;
    $this.$store.dispatch("setTasks");

    //this.updateSectionName = this.section.sectionName
    $this.$store.watch(
      () => [store.state.tasks],
      async () => {
        this.tasks = store.state.tasks;
        console.log("mounted", this.tasks);
        const tasks = $this.$store.state.tasks;
        this.butasks = tasks.filter(
          (task) => task.sectionId === this.section.id
        );
        console.log("butaks", this.butasks);
      }
    );
  },
  methods: {
    async getTasks() {
      const $this = this;
      console.log("gettask başladı");
      await $this.$store.dispatch("setTasks").then(async () => {
        this.tasks = await store.state.tasks;
        this.butasks = await this.tasks.filter(
          (task) => task.sectionId === this.section.id
        );
        console.log("butaks", this.butasks);
      });
    },
    addTask(sectionId) {
      const $this = this;
      console.log("tık");
      let taskData = {
        taskTitle: "My new task",
        //taskContent: "perferendis",
        links: ["https://github.com", "https://v2.vuejs.org/"],
        tags: ["design", "development"],
        taskImage: "",
        comments: [
          {
            id: "1",
            text: "comment comment comment comment",
          },
          {
            id: "2",
            text: "comment comment comment comment",
          },
        ],
        collaborators: [
          {
            userId: "1",
            userImage: "",
          },
          {
            userId: "2",
            userImage: "",
          },
        ],
        sectionId: sectionId,
      };
      $this.$store.dispatch({
        type: "setNewTask",
        taskData: taskData,
      });
    },
    updateSectionName(sectionId) {
      const $this = this;
      console.log("tık", sectionId);
      console.log("section name model", this.section.sectionName);
      let updateData = {
        id: sectionId,
        sectionName: this.section.sectionName,
      };
      let timeoutId;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        // Runs 1 second (1000 ms) after the last change
        $this.$store.dispatch({
          type: "setUpdateSectionName",
          updateData: updateData,
        });
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.section {
  width: 320px;
  overflow-y: auto;
  overflow-x: hidden;

  //border: 1px solid blue;
  .sectionHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    .sectionName {
      font-weight: 600;
      color: #667085;
      font-size: 13px;
    }
    .sectionName:focus {
      outline: none;
    }

    .addTaskBtn {
      :hover {
        color: #101828 !important;
      }
    }
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
