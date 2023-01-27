<template>
  <div class="task">
    <!-- <div class="nil">
      <div id="div1" v-on:drop="drop(event)" v-on:dragover="allowDrop(event)">
        <div draggable="true" v-on:dragstart="dragStart(event)" id="drag3">
          nil
        </div>
      </div>

      <div
        id="div2"
        v-on:drop="drop(event)"
        v-on:dragover="allowDrop(event)"
      ></div>
    </div> -->

    <!-- <div class="droptarget" v-on:drop="drop" v-on:dragover="allowDrop">
      <p v-on:dragstart="drag" draggable="true" id="dragtarget">Drag me!</p>
    </div>

    <div class="droptarget" v-on:drop="drop" v-on:dragover="allowDrop"></div> -->
    <a-card style="width: 300px">
      <h3 class="cardHeader">Make a Kanban App</h3>
      <div class="cardInfo">
        <p>12th Jan</p>
        <div class="dot">~</div>
        <p class="creator">Created by Nil</p>
      </div>
      <p class="cardText">
        Today, in the latest of my money-themed posts, I’m looking
      </p>
      <img
        slot="cover"
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
      <div class="links">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>

        <a slot="extra" href="#">more</a>
        <a slot="extra" href="#">more</a>
      </div>

      <p :style="{ marginTop: '16px' }">Inner Card content</p>
    </a-card>
    <br />
  </div>
</template>

<script>
export default {
  name: "TaskComponent",
  props: {
    //msg: String,
  },
  methods: {
    drag(event) {
      event.dataTransfer.setData("Text", event.target.id);
    },

    allowDrop(event) {
      event.preventDefault();
    },
    drop(event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    },
  },
};
</script>

<style lang="scss">
.droptarget {
  float: left;
  width: 100px;
  height: 35px;
  margin: 15px;
  padding: 10px;
  border: 1px solid red;
}
.task {
  background-color: #fcfcfd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 16px;
  position: relative;
  width: 320px;
  height: 369px;
  box-shadow: 0px 0.5px 2px rgba(16, 24, 40, 0.3);
  border-radius: 8px;
  .cardHeader {
    display: flex;
    justify-self: flex-start;
    color: #000000;
  }
  .cardInfo {
    display: flex;
    justify-content: flex-start;
    color: #98a2b3;
    .dot {
      margin: 0 5px 0 5px;
    }
    .creator {
      color: #475467;
    }
  }
  .cardText {
    color: #98a2b3;
  }
  img {
    border-radius: 8px;
  }
  .links {
    display: flex;
    align-items: center;
    margin-top: 10px;
    svg {
      width: 16px;
      height: 16px;
    }
    a {
      margin: 0 5px 0 5px;
    }
  }
}
</style>
