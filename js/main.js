
            const links = [
                {
                    label: "Week 1",
                    url: "week1/index.html"
                },
                {
                    label: "Week 2",
                    url: "week2/index.html"
                }
            ]
            
            function createList(){
                for (var i=0; i < links.length; i++){
                    var listOfWeeks = document.getElementById("myList").innerHTML +=
                        '<li>' + '<a href="'+links[i].url+'">'+links[i].label+'</a>'+'</li>'

                }
            }
            
        