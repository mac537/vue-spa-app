<template>
	<div id="add-item">
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

	

	export default {
	name: 'add-item',
		mounted(){
		},

		data () {
			return {
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