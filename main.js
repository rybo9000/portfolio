const portfolio = {
	companies: [
		{
			title: 'Agent Attendance',
			img: 'img/agentAttendance.png',
			url: 'https://agentattendance.com',
			description:
				'Agent Attendance is a tool built for Keller Williams Market Centers to take attendance during their training and classes.  This application is in production with paying subscribers.',
			builtWith: [ 'HTML', 'CSS', 'JavaScript', 'PHP', 'Photoshop', 'MySQL' ],
			alt: 'Website image for Agent Attendance',
			repo: 'none'
		},
		{
			title: 'Security Tracker',
			img: 'img/securityTracker.png',
			url: 'https://security-tracker.now.sh/',
			description: 'This tool is designed to help a company track the security posture of their clients.',
			builtWith: [ 'ReactJS', 'ExpressJS', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Photoshop' ],
			alt: 'Website image for Security Tracker application',
			repo: 'https://github.com/rybo9000/security-tracker'
		},
		{
			title: 'Meet Halfway',
			img: 'img/meetHalfway.png',
			url: 'https://rybo9000.github.io/meet-halfway/',
			description:
				'The purpose of this application is to use API calls to determine a geographic midpoint between two addresses. After the midpoint is calculated it then attempts to locate a selected activity within 10 miles of that midpoint.',
			builtWith: [ 'HTML', 'CSS', 'JavaScript', 'Photoshop' ],
			alt: 'Website image for Meet Halfway application',
			repo: 'https://github.com/rybo9000/meet-halfway'
		},
		{
			title: 'The Pixelized Princess',
			img: 'img/thePixelizedPrincess.png',
			url: 'https://thepixelizedprincess.com',
			description:
				'The Pixelized Princess needed a simple landing page so her customers can follow her on social media or buy from her Etsy store.',
			builtWith: [ 'HTML', 'CSS', 'JavaScript', 'Photoshop' ],
			alt: 'Website image for The Pixelized Princess',
			repo: 'none'
		},
		{
			title: 'Simpsons Trivia Quiz',
			img: 'img/simpsonsTrivia.png',
			url: 'https://rybo9000.github.io/quiz-app/',
			description:
				'A Simpsons quiz application I wrote for one of my Thinkful bootcamp projects.  Questions and answers are programmed to be generated in a random order.',
			builtWith: [ 'HTML', 'CSS', 'JavaScript', 'Photoshop' ],
			alt: 'Website image for my Simpsons quiz',
			repo: 'https://github.com/rybo9000/quiz-app'
		}
	],
	counter: 0
};

function checkCounterUp() {
	if (portfolio.counter === portfolio.companies.length - 1) {
		portfolio.counter = 0;
	} else {
		portfolio.counter++;
	}
}

function checkCounterDown() {
	if (portfolio.counter <= 0) {
		portfolio.counter = portfolio.companies.length - 1;
	} else {
		portfolio.counter--;
	}
}

function renderPortfolioContent() {
	// output content to proper elements
	document.querySelector('#portfolioImg').innerHTML = `<img src="${portfolio.companies[portfolio.counter]
		.img}" alt="${portfolio.companies[portfolio.counter].alt}">`;
	document.querySelector('#portfolioTitle').innerHTML = `${portfolio.companies[portfolio.counter].title}`;
	document.querySelector('#portfolioDescription').innerHTML = `${portfolio.companies[portfolio.counter].description}`;

	// iterate through the builtWith array to generate the html to output
	let builtWithString = '';

	for (let i = 0; i < portfolio.companies[portfolio.counter].builtWith.length; i++) {
		builtWithString += `<span class="builtWith">${portfolio.companies[portfolio.counter].builtWith[i]}</span>`;
	}

	document.querySelector('#portfolioBuiltWith').innerHTML = builtWithString;

	if (portfolio.companies[portfolio.counter].repo === 'none') {
		document.querySelector('#portfolioButtonContainer').innerHTML = `<a href="${portfolio.companies[
			portfolio.counter
		].url}" target="_blank"><button class="portfolioButton">Visit Site</button></a>`;
	} else {
		document.querySelector('#portfolioButtonContainer').innerHTML = `<a href="${portfolio.companies[
			portfolio.counter
		].url}" target="_blank"><button class="portfolioButton">Visit Site</button></a> <a href="${portfolio.companies[
			portfolio.counter
		].repo}" target="_blank"><button class="portfolioButton">Github Repo</button></a>`;
	}
}

document.addEventListener('DOMContentLoaded', function() {
	// right arrow event listener
	document.querySelector('#portfolioDiv').addEventListener('click', (e) => {
		if (e.target.id === 'portfolioLeftArrow' || e.target.id === 'portfolioRightArrow') {
			if (e.target.id === 'portfolioRightArrow') {
				checkCounterUp();
			} else if (e.target.id === 'portfolioLeftArrow') {
				checkCounterDown();
			}

			renderPortfolioContent();
		}
	});

	function navOriginal() {
		document.querySelector('header').style.flexWrap = 'nowrap';
		document.querySelector('nav').style.display = 'none';
		document.querySelector('nav').style.flexBasis = 'initial';
		document.querySelector('nav ul').style.flexDirection = 'row';
	}

	function navAdjusted() {
		document.querySelector('header').style.flexWrap = 'wrap';
		document.querySelector('nav').style.display = 'inline-block';
		document.querySelector('nav').style.flexBasis = '100%';
		document.querySelector('nav ul').style.flexDirection = 'column';
		document.querySelector('nav ul').style.textAlign = 'center';

		document.querySelectorAll('nav ul li').forEach((item) => {
			item.style.fontSize = '1.5rem';
		});
	}

	function navReset() {
		document.querySelector('header').removeAttribute('style');
		document.querySelector('nav').removeAttribute('style');
		document.querySelector('nav ul').removeAttribute('style');
		document.querySelector('nav').removeAttribute('style');

		document.querySelectorAll('nav ul li').forEach((item) => {
			item.removeAttribute('style');
		});
	}

	// hamburger menu event listener
	document.querySelector('#menu').addEventListener('click', (e) => {
		if (document.querySelector('nav').style.display != 'inline-block') {
			navAdjusted();
		} else {
			navOriginal();
		}
	});

	window.addEventListener('resize', (e) => {
		if (
			window.innerWidth > 860 &&
			(document.querySelector('nav').style.display === 'inline-block' ||
				document.querySelector('nav').style.display === 'none')
		) {
			navReset();
		}
	});

	renderPortfolioContent();
});
