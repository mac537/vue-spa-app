<template>
	<div id="edit-item">
		<form v-on:submit.prevent="saveItem">
			<div>
				<label>Title</label>
				<input type="text" v-model="item.title">
			</div>

			<div>
				<label>Url</label>
				<input type="url" v-model="item.url">
			</div>

			<div v-if="!item.thumbnail">
				<label>Thumbnail</label>
				<input type="file" @change="onFileChange">
			</div>

			<div v-else>
				<img :src="item.thumbnail" />
				<button @click="removeImage">Remove thumbnail</button>
			</div>

			<input type="submit" value="Save">
		</form>

		
	</div>
</template>

<script>

	import axios from 'axios'

	export default {
	name: 'edit-item',
		mounted(){
			this.id = this.$route.params.id;
			this.fillItem();
		},

		data () {
			return {
				id: null,
				item: {
					title: '',
					url: '',
					thumbnail: ''
				}
			}
		},

		methods: {
			saveItem(){
				console.log(this.item)
			},

			fillItem(){
		  		axios.get(`https://jsonplaceholder.typicode.com/photos/${this.id}`)
		  			.then((response) => {
		  				console.log(response.data)
		  				var data = response.data
		  				this.item.title = data.title
		  				this.item.url = data.url
		  				this.item.thumbnail = data.thumbnailUrl
		  			});
		  	},

			onFileChange(e) {
				var files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return;
				this.createImage(files[0]);
			},
			createImage(file) {
				var thumbnail = new Image();
				var reader = new FileReader();
				var vm = this;

				reader.onload = (e) => {
					vm.item.thumbnail = e.target.result;
				};
				reader.readAsDataURL(file);
				console.log(this.item);

			},
			removeImage: function (e) {
				this.item.thumbnail = '';
			}
		}
	}
</script>