<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
          "\n" +
              "¡Hola! Soy un apasionado desarrollador con mucha dedicación la cual busco reflejar en cada línea de código que escribo. Creo en la poderosa sinergia entre la creatividad y la tecnología, convirtiendo ideas en aplicaciones eficientes que solucionen problemas y mejoren la vida de las personas."
        },
				{
					id: 2,
					bio:
          "Mi enfoque va más allá de programar; se trata de construir productos innovadores y superar desafíos. Fuera del desarrollo, encuentro inspiración en la música, la pintura y el arte en general, equilibrando mi vida profesional y personal para alimentar mi creatividad."
        },
        {
          id: 3,
          bio:
          "Explora mis proyectos, descubre el proceso detrás de cada uno y espero que disfrutes explorando tanto como yo disfruto creando."
        },
        {
          id: 4,
          bio:
          "¡Gracias por visitar mi sitio! Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer. Si desea trabajar conmigo o simplemente saludar, no dude en ponerse en contacto."
        }
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
        {{ bio.bio }}
			</p>
		</div>
	</div>
</template>
