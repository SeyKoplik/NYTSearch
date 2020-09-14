$(".btn").on("click", function (event) {
    event.preventDefault();
    var searchArticle = $("#search").val()
    // var animalDiv = $("<div>")
    // var animalImage = $("<img>");
    // animalImage.attr("src", "https://freepngimg.com/thumb/red_panda/9-2-red-panda-png-hd.png");
    // animalDiv.append(animalImage)
    // $(".inputArticlesHere").prepend(animalDiv);
    var numberOfArticles = $("#numberOfRecords").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    console.log(searchArticle)
    console.log(numberOfArticles)
    console.log(startYear)
    console.log(endYear)

    var searchArticle = "election";
    var startYear = "2012";
    var endYear = "2012";
    var numberOfArticles = "";
    var APIKey = "&api-key=EJrcSA8ezUAcGaCldNZs6oz29GGC1cUQ";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startYear + "0101&end_date=" + endYear + "1231&q=" + searchArticle + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        for (var i = 0; i < response.response.docs.length; i++) {
            console.log("  ");
            console.log(response.response.docs[i].headline.main);
            console.log(response.response.docs[i].byline.original);
            console.log(response.response.docs[i].subsection_name);
        }
    });
})



