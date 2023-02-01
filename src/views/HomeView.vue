<template>
  <div class="home">
    <aside class="left">
      <LeftSideComponent></LeftSideComponent>
    </aside>
    <div class="pageContent">
      <a-button class="addSectionBtn" type="link" @click="addSection()">
        Add new section
      </a-button>
      <draggable
        v-model="sections"
        group="section"
        @start="drag = true"
        @end="drag = false"
        class="sections droptarget"
      >
        <div v-for="(sec, idx) in sections" :key="idx" class="outSection">
          <SectionComponent :section="sec" :id="sec.id"></SectionComponent>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import SectionComponent from "@/components/SectionComponent.vue";
import LeftSideComponent from "@/components/LeftSideComponent.vue";
import draggable from "vuedraggable";
import store from "@/store";
export default {
  name: "HomeView",
  components: {
    SectionComponent,
    draggable,
    LeftSideComponent,
  },
  data() {
    return {
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
    width: 21%;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    left: 0;
  }
  .pageContent {
    width: 79%;
    padding: 80px 40px 40px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f2f4f7;

    .addSectionBtn {
      color: #667085;
      margin-left: 9px;
      font-weight: 600;
      font-size: 13px;
    }
    .sections {
      width: 100%;
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
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #f2f4f7;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #e4e7ec;
  border-radius: 10px;
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
