<template>
  <div class="hello">
    <p>this count is {{count}}</p>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    add: function () {
      this.count += 1
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
