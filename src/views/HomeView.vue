<template>
  <div class="home">
    <div class="left">left</div>
    <div class="pageContent">
      <a-button class="addSectionBtn" type="link"> Add new section </a-button>
      <!-- <HelloWorld msg="Welcome to Jira Clone" /> -->
      <draggable
        v-model="sectionCount"
        group="people"
        @start="drag = true"
        @end="drag = false"
        class="sections droptarget"
      >
        <div
          v-for="element in sectionCount"
          :key="element.id"
          class="outSection"
        >
          <SectionComponent
            :count="element"
            :id="element.index"
          ></SectionComponent>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionComponent from "@/components/SectionComponent.vue";
import draggable from "vuedraggable";
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
    };
  },
  methods: {},
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
      width: 1032px;
      height: 819px;
      display: flex;
      justify-content: space-between;
      //border: 1px solid yellow;

      .outSection {
        display: flex;
        justify-content: space-between;
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
