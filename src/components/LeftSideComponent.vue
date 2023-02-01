<template>
  <div class="leftSide">
    <div class="d-flex leftSideContent">
      <div class="pickCompany">
        <select
          class="form-select form-select-sm selectBox"
          aria-label=".form-select-sm example"
        >
          <option selected>Company</option>
          <div class="logo"></div>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="content">
        <div class="item d-flex tasks">
          <div class="itemLeft">
            <div class="icon">
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
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </div>
            <div class="text">Tasks</div>
          </div>
          <div class="right">
            <div class="count">{{ taskCount }}</div>
          </div>
        </div>
        <div class="item d-flex">
          <div class="itemLeft">
            <div class="icon">
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
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>
            </div>
            <div class="text">Notifications</div>
          </div>
          <div class="right">
            <div class="count">2</div>
          </div>
        </div>
        <div class="item d-flex">
          <div class="itemLeft">
            <div class="icon">
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
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
            </div>
            <div class="text">Analytics</div>
          </div>
          <div class="right">
            <div class="count">2</div>
          </div>
        </div>
        <div class="item d-flex">
          <div class="itemLeft">
            <div class="icon">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div class="text">Team</div>
          </div>
          <div class="right">
            <div class="count">2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "LeftSide",
  props: {},
  data() {
    return {
      taskCount: 0,
    };
  },
  methods: {},
  mounted() {
    this.taskCount = store.state.tasks.length;

    this.$store.watch(
      () => [store.state.tasks],
      async () => {
        this.taskCount = store.state.tasks.length;
      }
    );
  },
};
</script>

<style scoped lang="scss">
.leftSide {
  .leftSideContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 24px 16px;
    gap: 32px;

    // width: 320px;
    height: 982px;
    left: 0px;
    top: 0px;

    background: #ffffff;
    .pickCompany {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 62px;

      //width: 252px;
      height: 24px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;

      .selectBox {
        width: 272px;
        height: 48px;
        color: #1d2939;
        font-weight: bold;
        border: none;
      }
    }
    .content {
      display: flex;
      flex-direction: column;

      align-items: flex-start;
      padding: 0px;
      gap: 8px;

      //width: 272px;
      height: 862px;
      margin-top: 20px;
      /* Inside auto layout */

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 1;
      .icon {
        width: 16px;
        height: 16px;
      }
      .item {
        width: 100%;
        justify-content: space-between;
        height: 40px;
        align-items: center;
        border-radius: 8px;
        color: #667085;
        font-weight: 600;
        font-size: 13px;
        .itemLeft {
          display: flex;
          .text {
            margin-left: 8px;
          }
          .icon {
            margin-left: 8px;
          }
        }
        .right {
          .count {
            margin-right: 8px;
            border-radius: 30%;
            background-color: #f2f4f7;
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            font-size: 16px;
            font-size: 13px;
            align-items: center;
            color: #475467;
          }
        }
      }
      .tasks {
        background-color: #f2f4f7;
        color: #1d2939;
        font-weight: 700;
        .right {
          .count {
            background-color: #1d2939;
            color: #f2f4f7;
          }
        }
      }
    }
  }
}

.logo {
  background-color: red;
  width: 20px;
  height: 20px;
}
</style>
