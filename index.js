const quotes = [{
        id: 1,
        meaning: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        name: "Mother Teresa",
    },
    {
        id: 2,
        name: "Franklin Roosevelt",
        meaning: "When you reach the end of your rope, tie a knot in it and hang on",
    },
    {
        id: 3,
        name: "Margaret Mead",
        meaning: "Always remember that you are absolutely unique. Just like everyone else.",
    },
    {
        id: 4,
        name: "Robert Stevenson",
        meaning: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    },
    {
        id: 5,
        name: "Eleanor Roosevelt",
        meaning: "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
        id: 6,
        name: "Helen Keller",
        meaning: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    },
    {
        id: 7,
        name: "Aristotle",
        meaning: "It is during our darkest moments that we must focus to see the light.",
    },
    {
        id: 8,
        name: "Benjamin Franklin",
        meaning: "Tell me and I forget. Teach me and I remember. Involve me and I learn",
    },
    {
        id: 9,
        name: "Anne Frank",
        meaning: "Whoever is happy will make others happy too",
    },
    {
        id: 10,
        name: "Ralph Emerson",
        meaning: "Do not go where the path may lead, go instead where there is no path and leave a trail",
    },

];
const date = new Date();
const time = date.getHours();
console.log(time);
if (time < 12)
    document.querySelector("span").innerHTML = "Morning";
else if (time >= 12 && time <= 18)
    document.querySelector("span").innerHTML = "Afternoon";
else
    document.querySelector("span").innerHTML = "Night";
document.querySelector("#message").innerHTML = "Spread love everywhere you go. Let no one ever come to you without leaving happier.";
document.querySelector("#author").innerHTML = "Mother Teresa";

document.querySelector("#btn").addEventListener("click", handlechange);

const color = ["yellow", "red", "blue", "purple", "orange", "violet", "darkblue", "pink", "indigo", "skyblue", "indigo"]

document.querySelector("#message").innerHTML = quotes[0].meaning;
document.querySelector("#author").innerHTML = "-" + quotes[0].name;
let i = 1;

function handlechange() {

    document.querySelector("#message").innerHTML = quotes[i].meaning;
    document.querySelector("#author").innerHTML = "-" + quotes[i].name;
    i++;
    i %= 10;
    document.querySelector("body").style.background = color[i];
    document.querySelector(".box").style.color = color[i];
    document.querySelector("#btn").style.background = color[i];
    document.querySelector("#btn").style.borderColor = color[i];

}