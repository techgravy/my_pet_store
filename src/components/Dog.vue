<template>
	<v-card color="grey lighten-2">
	  <v-card-media :src="dog.img" height="170px">
	  </v-card-media>
	    <v-card-title>
	      <div>
	        <h3>{{dog.name}}</h3>
	        <p class="breed">{{dog.breed}}</p>
	      </div>
	    </v-card-title>
			<v-btn @click="$emit('addToFavorites', dog)">Add to Favorites</v-btn>
	</v-card>
</template>
	
<script>
export default {
  props: {
    dog: {
      type: Object
    }
  }
};
</script>
