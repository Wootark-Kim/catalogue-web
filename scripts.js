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
    Macragge's Honor: https://1d6chan.miraheze.org/wiki/Macragge%27s_Honour#/media/File:MacraggesHonourBFG2.jpg
    Invincible Reason: https://www.deviantart.com/hexanity/art/The-invincible-reason-Dark-Angels-flagship-1239785624
    Millennium Falcon: https://www.popularmechanics.com/culture/movies/a30210061/history-of-the-millennium-falcon/
    Razor Crest: https://jediinsider.com/275-24178#gsc.tab=0
    Executor: https://starwars.fandom.com/wiki/Executor?file=Executor_BF2.png
    Invisible Hand: https://starwars.fandom.com/wiki/Invisible_Hand?file=InvisibleHandROTS.png
========================================================================================================================
*/


// Creating a list/array of objects of spaceships
let spaceships = [
    {
        ip: "Alien",
        name: "USCSS Nostromo",
        image: "./img/usccnostromo.png",
        faction: "Weyland-Yutani Corporation",
        sizeLengthMeters: 334
    },
    {
        ip: "Dead Space",
        name: "USG Ishimura",
        image: "./img/usg_ishimura.png",
        faction: "Concordance Extraction Corporation",
        sizeLengthMeters: 1600
    },
    {
        ip: "Warhammer 40k",
        name: "Macragge's Honor",
        image: "./img/macragge_honour.png",
        faction: "Ultramarines",
        sizeLengthMeters: 26000
    },
    {
        ip: "Warhammer 40k",
        name: "Invincible Reason",
        image: "./img/invincible_reason.png",
        faction: "Dark Angels",
        sizeLengthMeters: 28000
    },
    {
        ip: "Star Wars",
        name: "Millennium Falcon",
        image: "./img/millennium_falcon.png",
        faction: "Rebel Alliance",
        sizeLengthMeters: 34.75
    },
    {
        ip: "Star Wars",
        name: "Razor Crest",
        image: "./img/razor_crest.png",
        faction: "Rebel Alliance",
        sizeLengthMeters: 24.27
    },
    {
        ip: "Star Wars",
        name: "Executor",
        image: "./img/executor.png",
        faction: "Galatic Empire",
        sizeLengthMeters: 19000
    },
    {
        ip: "Star Wars",
        name: "Invisible Hand",
        image: "./img/invisible_hand.png",
        faction: "Confederacy of Independent Systems",
        sizeLengthMeters: 1088
    }
]

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    // My modified version:
    for (let i = 0; i < spaceships.length; i++){
        const spaceship = spaceships[i];
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, spaceship.name, spaceship.image, spaceship.ip, spaceship.faction, spaceship.sizeLengthMeters); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

/*
====[Thought process]===================================================================================================
    What am I doing here?
    Answer: I'm attempting to avoid hard coding every ip (from the array object' property "ip") into the the "selectIP"
            drop down menu. Instead I'm trying to auto populate based on what the "spaceships" array contains.
========================================================================================================================
*/

const select = document.getElementById("selectIP");
const uniqueIPs = [];   // setting up an empty array in order to for-loop through the "spaceships" array and add in every unique ip property values that are found

// for-loop through the "spaceships" array and add in every unique ip property values that are found to the uniqueIPs array
for (let i=0; i < spaceships.length; i++){
    let ip = spaceships[i].ip;
    if (!uniqueIPs.includes(ip)){ // personal note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        uniqueIPs.push(ip);
    }
}

uniqueIPs.forEach(function(ip) {
    const option = document.createElement("option");
    option.value = ip;
    option.textContent = ip;
    select.appendChild(option);
});

//======================================================================================================================

function editCardContent(card, newTitle, newImageURL, newIp, newFaction, newSizeLengthMeters) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const cardIp = card.querySelector("#ip");
    cardIp.textContent = "IP: " + newIp;

    const cardFaction = card.querySelector("#faction");
    cardFaction.textContent = "Faction: " + newFaction;

    const cardSizeLengthMeters = card.querySelector("#sizeLengthMeters");
    cardSizeLengthMeters.textContent = "Size (length): " + newSizeLengthMeters + " meters";

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
