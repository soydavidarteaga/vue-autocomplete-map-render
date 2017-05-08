<template>
  <div id="app" class="container">
    <h1>VueJs + Google Mapas + AutoCompletado</h1>
    <vue-google-autocomplete
      id="map"
      classname="form-control"
      placeholder="Introduce la direccion que quieres buscar"
      v-on:placechanged="getAddressData"
      country="ve"
  >
  </vue-google-autocomplete>
  <gmap-map :center="center" :zoom="zoom" style="width: 100%; height: 400px">
      <gmap-marker :position="position" :clickable="true" :draggable="false" @click="center=position"></gmap-marker>
  </gmap-map>

  <h3 class="text-center">Hecho por David Arteaga, creditos: <a href="https://github.com/xkjyeah/vue-google-maps" target="_blank">Vue2-google-maps</a> y <a href="https://github.com/olefirenko/vue-google-autocomplete" target="_blank">Vue-google-autocomplete</a></h3>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
  components: { VueGoogleAutocomplete},
  name: 'app',
  data () {
    return {
      zoom:5,
      center: {
            lat: 10.2452281,
            lng: -68.00760589999999
          },
            position: {
              lat: 10.2452281,
              lng: -68.00760589999999
            },
      address:{}
    }
  },
  methods:{
    getAddressData: function (addressData, placeResultData) {
                console.log(addressData)
                this.address = addressData
                var location = {lat:addressData.latitude,lng:addressData.longitude}
                this.center = location
                this.position = location
                this.zoom = 15
                
            }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
