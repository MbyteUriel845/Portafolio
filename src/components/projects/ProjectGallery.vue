<script>
export default {
	props: ['projectImages'],
	methods: {
    getImageSource(imageName) {
      try {
        return require('@/assets/images/projects/' + imageName + '.png');
      } catch (error) {
        try {
          return require('@/assets/images/projects/' + imageName + '.jpeg');
        } catch (error) {
			return require('@/assets/images/projects/' + imageName + '.jpeg')
        }
      }
    }
  }
};
</script>

<template>
	<!-- <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div class="mb-10 sm:mb-0" v-for="projectImage in projectImages" :key="projectImage.id">
			<img :src="getImageSource(projectImage.img)"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none" alt="{{ projectImage.title }}" />
		</div>
	</div> -->

	<!-- <div class="max-w-screen-md mx-auto">
		<v-carousel progress="primary" hide-delimiters>
			<v-carousel-item v-for="projectImage in projectImages" :key="projectImage.id"
				:src="getImageSource(projectImage.img)">
			</v-carousel-item>
		</v-carousel>
	</div> -->

	<div class="mx-4 sm:mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl shadow-2xl">
		<v-carousel progress="primary" hide-delimiters>
			<v-carousel-item v-for="projectImage in projectImages" :key="projectImage.id"
			:src="getImageSource(projectImage.img)">
			</v-carousel-item>
		</v-carousel>
	</div>
</template>
