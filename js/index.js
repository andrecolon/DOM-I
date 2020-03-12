const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};



// ## Task 1: Create selectors to point your data VALUES into elements *
//     [k] Create selectors by using any of the DOM element 's methods *
//     [k] Note that IDs have been used on all images.Use the IDs to update src path content
// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// ## Task 2: Update the HTML with the JSON data *
//[] Remember, NO direct updating of the HTML source is allowed.*[] 
//Using your selectors, update the content to match the example file.*[] 
//Remember to update the src attributes on images
// const navContainer = document.getElementsByTagName("a"); //Find the tag name
// const navArray = Array.from(navContainer)//Create an array from the HTML collection -- CONSIDER never using actual numeric characters
// const navtextOne = navArray[0]; // assign 1rst item in Nodelist array index to number
// navtextOne.textContent = siteContent["nav"]["nav-item-1"] // assign the text content from object above


const navigationItems = document.querySelectorAll("header nav a"); //High level specificity on selecting all anchor tags
console.log(navigationItems) //Check your work

const nav = document.querySelector("nav") // Nav variable ready to used 
for (let i = 0; i < navigationItems.length; i++) { //Setting the loop to iterate and increment up
    navigationItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`] //grab all navigation items assign content from siteContent JSON and append through iteratable properpitie becasue there is no  nov-item-0 prop
}

// H1 tag
let headerOne = document.querySelector("section div h1");
headerOne.textContent = siteContent["cta"]["h1"]

//Button under H1 tag
let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"]

//H4 in main content
let mcFeatHeaderFour = document.querySelector("h4");
mcFeatHeaderFour.textContent = siteContent["main-content"]["features-h4"]
let mcAboutHeaderFour = document.querySelector("h4");
mcAboutHeaderFour[3].textContent = siteContent["main-content"]["about-h4"]

// let allHeaderFour = document.querySelectorAll("h4");
// console.log(allHeaderFour)


// for (let i = 0; i < allHeaderFour.length; i++) { //Setting the loop to iterate and increment up
//     allHeaderFour[i].textContent = siteContent[`${i}`]
// }
// allHeaderFour.textContent = siteContent["main-content"]
// console.log(allHeaderFour)


// //Paragraphs in main content
// let mainParag = document.querySelector("text-content");
// ctaButton.textContent = siteContent["cta"]["button"]

// ## Task 3: Add new content *
//     [] Change the color of the navigation text to be green.*[] Utilize `.appendChild()`
// and `.prepend()`
// to add two new items to the navigation system.You can call them whatever you want.*
//[] Check your work by looking at the[original html](original.html) in the browser