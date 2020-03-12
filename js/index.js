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
//one way to do it - thanks 
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

//H4 in entire doc
let mHeaderFour = document.getElementsByTagName("h4");
console.log(mHeaderFour) //Get count of h4 tags
const headerFourFeat = mHeaderFour[0]
headerFourFeat.textContent = siteContent["main-content"]["features-h4"]
const headerFourAbout = mHeaderFour[1]
headerFourAbout.textContent = siteContent["main-content"]["about-h4"]
const headerFourServices = mHeaderFour[2]
headerFourServices.textContent = siteContent["main-content"]["services-h4"]
const headerFourProduct = mHeaderFour[3]
headerFourProduct.textContent = siteContent["main-content"]["product-h4"]
const headerFourVision = mHeaderFour[4]
headerFourVision.textContent = siteContent["main-content"]["vision-h4"]
const headerFourContact = mHeaderFour[5]
headerFourContact.textContent = siteContent["contact"]["contact-h4"]

//Paragraphs in entire doc
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs) //get count of p tags
const paragraphsOne = paragraphs[0]
paragraphsOne.textContent = siteContent["main-content"]["features-content"]
const paragraphsTwo = paragraphs[1]
paragraphsTwo.textContent = siteContent["main-content"]["about-content"]
const paragraphsThree = paragraphs[2]
paragraphsThree.textContent = siteContent["main-content"]["services-content"]
const paragraphsFour = paragraphs[3]
paragraphsFour.textContent = siteContent["main-content"]["product-content"]
const paragraphsFive = paragraphs[4]
paragraphsFive.textContent = siteContent["main-content"]["vision-content"]
const paragraphsSix = paragraphs[5]
paragraphsSix.textContent = siteContent["contact"]["vision-h4"]
const paragraphsSeven = paragraphs[6]
paragraphsSeven.textContent = siteContent["contact"]["address"]
const paragraphsEight = paragraphs[7]
paragraphsEight.textContent = siteContent["contact"]["phone"]
const paragraphsNine = paragraphs[8]
paragraphsNine.textContent = siteContent["contact"]["email"]

//Footer element
let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"]

// ## Task 3: Add new content *
// [] Change the color of the navigation text to be green.*
navigationItems.forEach(el => {
    el.style.color = 'green';
});
//[] Utilize `.appendChild()`
const newContent = document.createElement("nav")
newContent.textContent = siteContent["main-content"]["features-content"]
newContent.classList.add("footer-class")
const body = document.querySelector('footer')
body.appendChild(newContent)
console.log("hello")


console.log("World")

// 9c: Add it to the DOM with appendChild
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// and `.prepend()`

const parentElement = document.querySelector('footer');
parentElement.prepend(newContent)


// const parentElement = document.querySelector('body');
// parentElement.appendChild(newContent);

// to add two new items to the navigation system. You can call them whatever you want.

const navItem = document.createElement("a")
navItem.classList.add("some-class")
navItem.textContent = "Blog"
document.querySelector('nav').append(navItem)

// navigationItems.classList.add('new-nav-link') // <li class="fruits"></li>
// navigationItems.textContent = 'Blog' // <li class="fruits">kiwis</li>
// document.querySelector('nav').append(navigationItems) // adds <li class="fruits">kiwis</li> to the DOM in <ul> below grapes


//[] Check your work by looking at the[original html](original.html) in the browser