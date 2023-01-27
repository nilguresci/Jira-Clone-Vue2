<template>
  <!-- <div :id="id"> -->
  <div class="section" :id="id">
    <div class="sectionHeader">
      <div class="sectionName">To do {{ id }}</div>
      <a-button>Add task</a-button>
    </div>
    <div class="tasks">
      <TaskComponent v-for="item in taskCount" :key="item.id"></TaskComponent>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import TaskComponent from "./TaskComponent.vue";
export default {
  name: "SectionComponent",
  props: {
    count: String,
    id: String,
  },
  components: {
    TaskComponent,
  },
  data() {
    return {
      taskCount: 1,
    };
  },
  methods: {
    drag(event) {
      event.dataTransfer.setData("Text", event.target.id);
    },
  },
};
</script>

<style lang="scss">
.section {
  width: 320px;

  border: 1px solid blue;
  .sectionHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
}
</style>
