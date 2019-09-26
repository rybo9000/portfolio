const portfolio = {
    companies : [
        {
            title : "Keller Networks",
            img : "img/kellerNetworks.png",
            url : "https://kellernetworks.com",
            description : "Keller Networks is a regional MSP company based out of Waco, Texas. This customer wanted a site that would be easy to both manage and update purely from their end.",
            builtWith : ["HTML", "CSS", "JavaScript", "PHP", "Wordpress", "jQuery", "Photoshop"],
            alt : "Website image for Keller Networks"
        },
        {
            title : "Agent Attendance",
            img : "img/agentAttendance.png",
            url : "https://agentattendance.com",
            description : "Agent Attendance is a tool built for Keller Williams Market Centers to take attendance during their training and classes.",
            builtWith : ["HTML", "CSS", "JavaScript", "PHP", "Photoshop", "MySQL"],
            alt : "Website image for Agent Attendance"
        },
        {
            title : "The Pixelized Princess",
            img : "img/thePixelizedPrincess.png",
            url : "https://thepixelizedprincess.com",
            description : "The Pixelized Princess needed a simple landing page so her customers can follow her on social media or buy from her Etsy store.",
            builtWith : ["HTML", "CSS", "JavaScript", "Photoshop"],
            alt : "Website image for The Pixelized Princess"
        },
        {
            title : "Simpsons Trivia Quiz",
            img : "img/simpsonsTrivia.png",
            url : "https://rybo9000.github.io/quiz-app/",
            description : "A Simpsons quiz application I wrote for one of my @Thinkful bootcamp projects.",
            builtWith : ["HTML", "CSS", "JavaScript", "Photoshop"],
            alt : "Website image for my Simpsons quiz"
        }
    ],
    counter : 0
}

function checkCounterUp() {
    
    if (portfolio.counter === portfolio.companies.length - 1) {
        portfolio.counter = 0;
    }
    else {
        portfolio.counter++;
    }
}

function checkCounterDown() {

    if (portfolio.counter <= 0) {
        
        portfolio.counter = portfolio.companies.length - 1;
    }
    else {

        portfolio.counter--;
    }
}

function renderPortfolioContent() {
    
    // output content to proper elements
    document.querySelector("#portfolioImg").innerHTML = `<img src="${portfolio.companies[portfolio.counter].img}" alt="${portfolio.companies[portfolio.counter].alt}">`;
    document.querySelector("#portfolioTitle").innerHTML = `${portfolio.companies[portfolio.counter].title}`;
    document.querySelector("#portfolioDescription").innerHTML = `${portfolio.companies[portfolio.counter].description}`;

    
    // iterate through the builtWith array to generate the html to output
    let builtWithString = "";
    
    for (let i = 0; i < portfolio.companies[portfolio.counter].builtWith.length; i++) {
        builtWithString += `<span class="builtWith">${portfolio.companies[portfolio.counter].builtWith[i]}</span>`;
    }

    document.querySelector("#portfolioBuiltWith").innerHTML = builtWithString;
    
}



document.addEventListener("DOMContentLoaded", function(){
    
    
    // right arrow event listener
    document.querySelector("#portfolioDiv").addEventListener("click", (e) => {
   
        if (e.target.id === "portfolioLeftArrow" || e.target.id === "portfolioRightArrow") {
            
            if (e.target.id === "portfolioRightArrow") {
                checkCounterUp();
            }
            else if (e.target.id === "portfolioLeftArrow") {
                checkCounterDown();
            }

            renderPortfolioContent();
        }

    })

    renderPortfolioContent();
  
});