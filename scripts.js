/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

//const FRESH_PRINCE_URL =
//  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
//const CURB_POSTER_URL =
//  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
//const EAST_LOS_HIGH_POSTER_URL =
//  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
//
// This is an array of strings (TV show titles)
//let titles = [
//  "Fresh Prince of Bel Air",
//  "Curb Your Enthusiasm",
//  "East Los High",
//];

/*
====[Thought process]===================================================================================================
    Matching each images manually to each titles' element seems awkward. To better scale, I'm going to use an a list
    of objects instead. This way I can just loop through the list without using a bunch of if-else statements. Plus
    I get to add more object properties if I want to expand more.

    Note: Instead of movies, I think I want to do something else. Some ideas:
        - list of resident evil viruses
        - list of fictional spaceships (Warhammer, Star War, Star Trek, Alien series, etc.)
        - list of clothing companies and their origins

    Decision: Spaceships. I can add a space background and it'll give some tangent ideas to practice some javascript
              shenanigans.
========================================================================================================================
*/

/*
====[Image Sources]=====================================================================================================
    USCUSS Nostromo: https://static.wikia.nocookie.net/avp/images/c/c5/Img4.jpg/revision/latest?cb=20131021025529
    USG Ishimura: https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Flefu1g2o4eja1.jpg
    Macragge's Honor: https://static.wikia.nocookie.net/warhammer40k/images/3/39/BGA_2_-_Macragge%27s_Hononr.png/revision/latest?cb=20180128034619
========================================================================================================================
*/


// Creating a list/array of objects of spaceships
let spaceships = [
    {
        ip: "alien",
        name: "USCSS Nostromo",
        image: "./img/usccnostromo.png",
        faction: "Weyland-Yutani Corporation",
        sizeLengthMeters: 334
    },
    {
        ip: "deadspace",
        name: "USG Ishimura",
        image: "./img/usg_ishimura.png",
        faction: "Concordance Extraction Corporation",
        sizeLengthMeters: 1600
    },
    {
        ip: "warhammer",
        name: "Macragge's Honor",
        image: "./img/macragge_honour.png",
        faction: "Ultramarines",
        sizeLengthMeters: 26000
    },
//    {
//        ip: "warhammer",
//        name: "Invincible Reason",
//        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9089cf60-7a39-47c6-8e1d-30badd99f166/dki4wpk-8f61e8ae-74f6-4aed-a988-c76b2b42d161.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi85MDg5Y2Y2MC03YTM5LTQ3YzYtOGUxZC0zMGJhZGQ5OWYxNjYvZGtpNHdway04ZjYxZThhZS03NGY2LTRhZWQtYTk4OC1jNzZiMmI0MmQxNjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.niwTo96ulPCFjTQC9oXAU1Arr-6UvhikWL2D_6D9Smc",
//        faction: "Dark Angels",
//        sizeLengthMeters: 28000
//    },
//    {
//        ip: "starwar",
//        name: "Millennium Falcon",
//        faction: "Rebel Alliance",
//        sizeLengthMeters: 34.75
//    },
//    {
//        ip: "starwar",
//        name: "Razor Crest",
//        faction: "Rebel Alliance"
//        sizeLengthMeters: 24.27
//    },
//    {
//        ip: "starwar",
//        name: "Executor",
//        faction: "Galatic Empire"
//        sizeLengthMeters: 19000
//    },
//    {
//        ip: "starwar",
//        name: "Invisible Hand",
//        faction: "Confederacy of Independent Systems"
//        sizeLengthMeters: 1088
//    }
]

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    // My version:
    for (let i = 0; i < spaceships.length; i++){
        const spaceship = spaceships[i];
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, spaceship.name, spaceship.image); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }

    // What was given:
//    for (let i = 0; i < titles.length; i++) {
//        let title = titles[i];
//
//        // This part of the code doesn't scale very well! After you add your
//        // own data, you'll need to do something totally different here.
//        let imageURL = "";
//        if (i == 0) {
//          imageURL = FRESH_PRINCE_URL;
//        } else if (i == 1) {
//          imageURL = CURB_POSTER_URL;
//        } else if (i == 2) {
//          imageURL = EAST_LOS_HIGH_POSTER_URL;
//        }
//        const nextCard = templateCard.cloneNode(true); // Copy the template card
//        editCardContent(nextCard, title, imageURL); // Edit title and image
//        cardContainer.appendChild(nextCard); // Add new card to the container
//    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!");
    alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
    );
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
