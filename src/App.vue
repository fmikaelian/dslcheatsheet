<template>
  <div id="app">
    <div class="container">
      <img class="mb-4" v-bind:src="selectedImage" alt="" width="300px" height="300px">
      <h1 class="h3 mb-3 font-weight-normal">Data Science Leader Cheatsheet</h1>
      <p class="lead text-muted">Use it to make sure your data science projects generate business value.</p>
      <b-button class="btn-space" variant="outline-primary" v-on:click="getItems">Preview</b-button>
      <b-button variant="primary" v-ga="'download'" href="./dslcheatsheet.csv" download="dslcheatsheet.csv">Download</b-button>
      <div v-if="preview" class="text-left pt-5">
        <b-table responsive bordered hover small :items="items"></b-table>
      </div>
      <footer class="pt-5 pb-3 text-muted">
        <p>Made by <a href="https://fmikaelian.github.io">@fmikaelian</a> from Paris.</p>
      </footer>
    </div>
  </div>
</template>

<script>
import cheatsheet from './assets/dslcheatsheet.json';

export default {
  name: 'app',
  data () {
    return {
      items: [],
      preview: false,
      images: [
        require('./assets/logo_woman.png'),
        require('./assets/logo_man.png')
      ],
      selectedImage: ''
    }
  },
  mounted () {
    const idx = Math.floor(Math.random() * this.images.length)
    this.selectedImage = this.images[idx]
  },
  methods: {
    getItems: function () {
      if (this.preview === false) {
        this.items = cheatsheet;
        this.preview = true;
      } else {
        this.preview = false
      }
    },
    track () {
      this.$ga.page('/')
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
}

body {
  color: rgb(55, 53, 47);
  fill: currentcolor;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: auto;
}

.container {
  max-width: 900px;
}

.btn-space {
    margin-right: 5px;
}
</style>