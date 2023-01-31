<template>
  <div class="task">
    <a-card style="width: 280px">
      <div class="cardHeader">{{ title }} {{ sectionName }}</div>
      <div class="cardInfo">
        <p>{{ createdDate }}</p>
        <div class="dot">~</div>
        <p class="creator">Created by</p>

        <p class="creatorName">{{ task.creatorName }}</p>
      </div>
      <p class="cardText" :id="task.id + 'cardText'">
        {{ task.taskContent }}
      </p>
      <img
        v-if="task.taskImage"
        slot="cover"
        alt="example"
        :src="task.taskImage"
      />
      <div class="links">
        <div class="d-flex link" v-for="link in task.links" :key="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
              clip-rule="evenodd"
            />
          </svg>

          <a slot="extra" :href="link">{{ link }}</a>
        </div>

        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
            clip-rule="evenodd"
          />
        </svg>

        <a slot="extra" href="#">https://v2.vuejs.org/</a> -->
      </div>

      <div class="tags">
        <a-tag class="tag greenTag" v-for="tag in task.tags" :key="tag">
          {{ tag }}
        </a-tag>
        <!-- <a-tag class="tag grayTag"> green </a-tag> -->
      </div>
      <div class="cardFooter">
        <div class="comment">
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
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
          <div class="commentCount">{{ task.comments.length }}</div>
        </div>
        <div class="persons">
          <div
            class="person"
            v-for="person in task.collaborators"
            :key="person"
          >
            <img src="../../public/user-image2.jpg" alt="" />
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import moment from "moment";
import $ from "jquery";
export default {
  name: "TaskComponent",
  props: {
    //msg: String,
    title: String,
    sectionName: String,
    task: Object,
  },
  data() {
    return {
      createdDate: "",
    };
  },
  mounted() {
    console.log(this.title);
    this.createdDate = moment(this.task.createdDate).format("MMM Do");
  },
  methods: {
    showContent(id) {
      $(`#${id}cardText`).css("white-space", "initial");
    },
    hideContent(id) {
      $(`#${id}cardText`).css("white-space", "pre");
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
  //border: 1px solid red;
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
  height: auto;
  box-shadow: 0px 0.5px 2px rgba(16, 24, 40, 0.3);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  .cardHeader {
    display: flex;
    justify-self: flex-start;
    color: #000000;
    font-size: 18px;
  }
  .cardInfo {
    display: flex;
    justify-content: flex-start;
    color: #98a2b3;
    font-size: 13px;
    font-weight: 700;
    padding-top: 8px;
    .dot {
      margin: 0 5px 0 5px;
    }
    .creator {
      margin-right: 4px;
    }
    .creatorName {
      color: #344054;
    }
  }
  .cardText {
    color: #98a2b3;
    font-size: 15px;
    font-weight: 500;

    font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
    text-overflow: ellipsis;
    white-space: pre;
    overflow: hidden;
  }
  img {
    border-radius: 8px;
    height: 100px;
    width: 280px;
  }
  .links {
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: #98a2b3;
    font-size: 13px;
    font-weight: 500;
    .link {
      svg {
        width: 16px;
        height: 16px;
        font-size: 13px;
        font-weight: 600;
      }
      a {
        margin: 0 5px 0 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #98a2b3;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }
  .tags {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 400;
    .tag {
      margin-right: 10px;
    }
    .greenTag {
      border-color: aqua;
      background-color: aquamarine;
      border-radius: 8px;
      color: green;
      padding: 5px 7px 5px 7px;
    }
    .grayTag {
      border-color: gray;
      background-color: grey;
      border-radius: 8px;
      color: black;
      padding: 5px 7px 5px 7px;
    }
  }

  .cardFooter {
    margin: 12px 0 5px 0;
    display: flex;
    justify-content: space-between;
    .comment {
      display: flex;
      justify-content: flex-start;
      color: #98a2b3;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }
      .commentCount {
        font-size: 13px;
      }
    }

    .persons {
      display: flex;
      .person {
        margin: 0 3px 0 3px;
        img {
          border-radius: 50%;
          width: 25px;
          height: 25px;
        }
        // background-color: red;

        // background-image: url("../../public/user-image2.jpg");
      }
    }
  }
}
</style>
