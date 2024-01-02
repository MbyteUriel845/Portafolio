<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Oscar Juárez Portafolio',
			author: 'Mbyte Systems',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="#"
				target="__blank"
				class="font-general-medium hover:underline hover:text-[#407bff] dark:hover:text-[#407bff] duration-500"
			>
				{{ projectName }}
			</a>
			. Developed by
			<a
				href="#"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-[#407bff] dark:hover:text-[#407bff] duration-500"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
