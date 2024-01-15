// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'NASA Space Apps Challenge',
		category: 'Web & Mobile Application',
		img: require('@/assets/images/projects/photos/project1 (1).jpeg'),
	},
	{
		id: 2,
		title: 'CompuActual Management',
		category: 'Web & Mobile Application',
		img: require('@/assets/images/projects/photos/project2 (1).jpeg'),
	},
	{
		id: 3,
		title: 'Survey System by Geographic Area',
		category: 'Mobile Application',
		img: require('@/assets/images/projects/project3.jpg'),
	},
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	category: 'UI/UX Design',
	// 	img: require('@/assets/images/ui-project-2.jpg'),
	// },
	// {
	// 	id: 5,
	// 	title: 'React Social App',
	// 	category: 'Mobile Application',
	// 	img: require('@/assets/images/mobile-project-1.jpg'),
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: require('@/assets/images/web-project-1.jpg'),
	// },
];

export default projects;
