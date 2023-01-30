<template>
  <div class="row">
    <div class="col-8">
      <h3>Draggable</h3>
      <draggable
        v-model="rows"
        tag="v-layout"
        class="row wrap fill-height align-center sortable-list"
        style="background: grey; height: 600px"
      >
        <v-flex
          v-for="row in rows"
          :key="row.index"
          class="sortable"
          xs12
          my-2
          style="background: red; height: 250px"
        >
          <draggable
            :list="row.items"
            tag="v-layout"
            :group="{ name: 'row' }"
            class="row wrap justify-space-around"
          >
            <v-flex
              v-for="item in row.items"
              :key="item.title"
              xs4
              pa-3
              class="row-v"
            >
              <v-card style="height: 100px">{{ item.title }}</v-card>
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </v-flex>
          </draggable>
        </v-flex>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="rows" title="List" />
    <div class="col-1">
      <button type="button" class="d-flex btn btn-danger">Danger</button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "AboutView",
  display: "Functional third party",
  // order: 17,
  components: {
    draggable,
  },
  data() {
    return {
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
};
</script>
<style lang="scss">
.buttons {
  margin-top: 35px;
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
