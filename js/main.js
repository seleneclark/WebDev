
const links = [
    {
        label: "Week 1",
        url: "week1/index.html"
    },
    {
        label: "Week 2",
        url: "week2/index.html"
    },
    {
        label: "Week 3",
        url: "week3/index.html"
    },
    {
        label: "Week 4",
        url: "week4/index.html"
    },
    {
        label: "Week 5",
        url: "week5/index.html"
    }
    
]

function createList(){
    console.log("Console.log = Hello. This has been logged to the console")
    for (var i=0; i < links.length; i++){
        var listOfWeeks = document.getElementById("myList").innerHTML +=
            '<li>' + '<a href="'+links[i].url+'">'+links[i].label+'</a>'+'</li>'

    }
}
            
        