$(function() {

	CMS.init({

		// Name of your site
		siteName: 'img/logo.png',

		// Tagline for your site
		siteTagline: '',

		// Email address
		siteEmail: 'josh@coriunder.com',

		// Name
		siteAuthor: 'Josh Daniel',

		// Navigation items
		siteNavItems: [
			{ name: 'Documentation', href: 'http://coriunder.com/docs', newWindow: true},
			{ name: 'About'},
			{ name: 'Links'},
		],

		// Posts folder name
		postsFolder: 'posts',

		// Homepage posts snippet length
		postSnippetLength: 300,

		// Pages folder name
		pagesFolder: 'pages',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'joshcoriunder',
			repo: 'blog'
		}

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
