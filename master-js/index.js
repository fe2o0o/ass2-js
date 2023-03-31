
var quotesContainer = [
    {
        author:"― Marilyn Monroe",
        quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
    },
    {
        author: "― Albert Einstein",
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        author:"― Frank Zappa",
        quote:"“So many books, so little time.”"
    },
    {
        author: "― Marcus Tullius Cicero",
        quote:"“A room without books is like a body without a soul.”"
    },
    {
        author: "― Bernard M. Baruch",
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
    },
    {
        author: "― William W. Purkey",
        quote:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”"
        
    },
    {
        author: "― Dr. Seuss",
        quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
    },
    {
        author: "― Mae West",
        quote:"“You only live once, but if you do it right, once is enough.”"
    },
    {
        author: "― Mahatma Gandhi",
        quote:"“Be the change that you wish to see in the world.”"
    },
    {
        author: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
        quote:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”"
    }
];



function displayQoutes() {
    var changeQ = quotesContainer[Math.trunc(Math.random() * quotesContainer.length)];
    var cartona =
    `
    <p>${changeQ.quote}</p>
    <P>${changeQ.author}</p>
    `;
    document.getElementById("demo").innerHTML = cartona;
}

var x=   
` <div>
        <div class="form-group mb-4">
            <label for="">Your Name:</label>
            <input type="text" id="outhorName" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Your Quote:</label>
            <textarea id="authorQoute"  cols="10" rows="5" class="form-control"></textarea>
        </div>
        <button onclick="saveQuote()" class="btn btn-outline-dark">Save&Add</button>
    </div>
`;



function addQuote() {
    document.getElementById("title").innerHTML="Add Your Qoute...";
    document.getElementById("hidden").style.display="none";
    document.getElementById("phidden").style.display="none";
    document.getElementById("demo").innerHTML=x;
}




function saveQuote(){
    var outhor=document.getElementById("outhorName");
    var qoute=document.getElementById("authorQoute");
    var qouteOpject={
        author:outhor.value,
        quote:qoute.value
    }
    quotesContainer.push(qouteOpject);
    document.getElementById("title").innerHTML="Quote of the Day";
    document.getElementById("hidden").style.display="block";
    document.getElementById("phidden").style.display="block";
    document.getElementById("demo").innerHTML=" ";
    console.log(quotesContainer);
}