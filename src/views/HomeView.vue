<template>
  <div class="home">
    <div class="left">left</div>
    <div class="pageContent">
      <a-button class="addSectionBtn" type="link" @click="addSection()">
        Add new section
      </a-button>
      <!-- <HelloWorld msg="Welcome to Jira Clone" /> -->
      <draggable
        v-model="sections"
        group="section"
        @start="drag = true"
        @end="drag = false"
        class="sections droptarget"
      >
        <div v-for="sec in sections" :key="sec.id" class="outSection">
          <SectionComponent :section="sec" :id="sec.id"></SectionComponent>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionComponent from "@/components/SectionComponent.vue";
import draggable from "vuedraggable";
import store from "@/store";
export default {
  name: "HomeView",
  components: {
    //HelloWorld,
    SectionComponent,
    draggable,
  },
  data() {
    return {
      sectionCount: [
        {
          section: "section1",
          sectionName: "To do",
          index: 1,
          items: [
            {
              title: "item 1",
            },
          ],
        },
        {
          section: "section2",
          sectionName: "Doing",
          index: 2,
          items: [
            {
              title: "item 2",
            },
            {
              title: "item 3",
            },
          ],
        },
        {
          section: "section3",
          sectionName: "Done",
          index: 3,
          items: [
            {
              title: "item 1",
            },
          ],
        },
      ],
      items: [{ message: "Foo" }, { message: "Bar" }],
      enabled: true,
      rows: [
        {
          index: 1,
          items: [
            {
              title: "item 1",
            },
          ],
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
        },
      ],
      sections: [],
    };
  },
  mounted() {
    const $this = this;
    this.getSections();
    $this.$store.watch(
      () => [store.state.sections],
      async () => {
        this.sections = store.state.sections;
        console.log("mounted sections", this.sections);
      }
    );
  },
  methods: {
    getSections() {
      const $this = this;
      $this.$store.dispatch("setSections").then(() => {
        this.sections = store.state.sections;
      });
    },
    addSection() {
      const $this = this;
      console.log("tık");
      $this.$store.dispatch({
        type: "setNewSection",
      });
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  .left {
    width: 320px;
  }
  .pageContent {
    width: 1192px;
    padding: 80px 40px 40px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f2f4f7;

    .addSectionBtn {
      color: #667085;
    }
    .sections {
      width: 1045px;
      height: 819px;
      display: flex;
      justify-content: space-between;
      overflow-x: auto;
      overflow-y: hidden;
      //border: 1px solid yellow;

      .outSection {
        display: flex;
        justify-content: space-between;
        margin: 0 20px 0 0px;
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
