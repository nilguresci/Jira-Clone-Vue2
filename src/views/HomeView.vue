<template>
  <div class="home">
    <div class="left">left</div>
    <div class="pageContent">
      <a-button class="addSectionBtn" type="link"> Add new section </a-button>
      <!-- <HelloWorld msg="Welcome to Jira Clone" /> -->
      <div
        class="sections droptarget"
        v-on:drop="drop"
        v-on:dragover="allowDrop"
      >
        <div
          v-for="item in sectionCount"
          :key="item.section"
          :id="item.section"
          v-on:dragstart="drag"
          draggable="true"
          class="outSection"
        >
          <SectionComponent
            :count="sectionCount"
            :id="item.section"
          ></SectionComponent>
        </div>
        <!-- <div draggable="true" id="drag2" v-on:dragstart="drag">nil</div> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionComponent from "@/components/SectionComponent.vue";

export default {
  name: "HomeView",
  components: {
    //HelloWorld,
    SectionComponent,
  },

  data() {
    return {
      sectionCount: [
        { section: "section1" },
        { section: "section2" },
        { section: "section3" },
      ],
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
  methods: {
    allowDrop(event) {
      event.preventDefault();
    },
    drop(event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
      //document.getElementById("demo").innerHTML = "The p element was dropped";
    },
    drag(event) {
      event.dataTransfer.setData("Text", event.target.id);
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
      width: 1032px;
      height: 819px;
      display: flex;
      justify-content: space-between;
      border: 1px solid yellow;

      .outSection {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
