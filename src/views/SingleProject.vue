<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
// import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
// import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";
import projectsData from "../data/projectsData.json";

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		// ProjectGallery,
		ProjectInfo,
		// ProjectRelatedProjects,
	},
	data: () => {
		return {
			projects: projectsData.projects,
			project: {},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	created() {
		this.loadProject();
	},
	methods: {
		loadProject() {
			const projectId = this.$route.params.id;
			this.project = projectsData.projects.find(p => p.id == projectId);
		}
	},

};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="project.singleProjectHeader" />

		<!-- Project gallery -->
		<!-- <ProjectGallery :projectImages="project.projectImages" /> -->

		<!-- Project information -->
		<ProjectInfo :projectInfo="project.projectInfo" />

		<!-- Project related projects -->
		<!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
	</div>
</template>
 

<style scoped></style>