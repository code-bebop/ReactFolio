import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'code-bebop',
	title: '안녕하세요, [Name]입니다.',
	subTitle: emoji("꾸준히 배우는 개발자"),
	role: "프론트엔드 개발자",
	resumeLink: "Your resume link... google drive or something else",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/code-bebop',
	linkedin: '',
	email: 'your email link',
	facebook: '',
	twitter: "",
	instagram: "",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("소지하고 있는 기술 ⚡"),
	subTitle: "프론트엔드에 관한 전반적인 기술",
	describeSkills: [
		emoji("✔ HTML5: 웹의 근본이며 본질이라고 생각하고 있습니다."),
		emoji("✔ CSS3: 디자인이 UX의 반은 책임진다 생각하는 만큼, CSS를 중요하게 생각합니다."),
		emoji("✔ JS를 통해 DOM요소를 컨트롤하거나 유저가 웹과 상호작용 가능하게 만듭니다."),
		emoji("✔ SASS를 통한 더 readable한 CSS코드, 하지만 주로 styled-components를 사용합니다."),
		emoji("✔ React를 통해 웹을 interactive하게 바꾸는 것을 즐거워합니다."),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5"},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3"},
		{fontAwesome: "fab fa-js", text: "JS"},
		{fontAwesome: "fab fa-sass", text: "Sass"},
		{fontAwesome: "fab fa-react", text: "React"}
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2019.05~",
			company: "군에서 독학",
			role: "HTML5, CSS3, JS",
		},
		{
			date: "2020.01~",
			company: "국비지원학원 수강",
			role: "웹 퍼블리싱",
		},
		{
			date: "2020.07~",
			company: "React 등 독학",
			role: "프론트엔드",
		},
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: emoji("프로젝트 💻"),
	subTitle: "독학 중 실습하며 나름의 프로젝트",
	lists: [
		{
			title: "Naver 검색 API를 활용한 책 추천 게시판",
			desc: "프론트에서 API를 요청하고 받아오는 연습을 계기로 시작한 프로젝트입니다. 책을 검색하고, 마음에 드는 책을 추천하는 글을 작성할 수 있으며 작성된 글은 책 추천 게시판에 저장됩니다.",
			url: "#"
		},
		{
			title: "Riot API를 활용한 TFT 전적검색 웹앱",
			desc: "즐겨하는 게임에 관한 프로젝트를 하고싶은 마음에 시작한 프로젝트입니다. 디자인은 Blitz.gg를 참고하였습니다. 클론코딩에 더 가깝다고 생각합니다.",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: false
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: true
}

export const contactInfo = {
	title: "연락처 📞",
	subTitle: "subtitle for contact",
	introduce: emoji("010-1234-5678"),
	view: true
}