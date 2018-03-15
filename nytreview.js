// "page load" event handler
$(function() {
  let apiKey = "42886ced5ed743bcba3d9a668bd33e92";
  let url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=black+panther&api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data.results[0]);
    const movie = data.results[0];
    $(".row").empty();
    let html = '<div>';
    html = html + '<div class="card">';
    html = html + '<img class="card-img-top" src="' + movie.multimedia.src + '">';
    html = html + '<div class="card-body">';
    html = html + '<h4 class="card-title">' + movie.display_title + '</h4>';
    html = html + '<p class="card-text">' + movie.summary_short + '</p>';
    html = html + '</div></div></div>';
    $(".row").append(html);
    $(".row").fadeIn(2000);
  });
});
