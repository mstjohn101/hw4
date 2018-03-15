// "page load" event handler
$(function() {
  let apiKey = "1ecff60ea4f6471ebba087cef1a6f794";
  let url = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data.results[0]);
    const story = data.results[0];
    $(".story").empty();
    let html = '<div>';
    html = html + '<div class="card">';
    html = html + '<img class="card-img-top" src="' + story.multimedia[0].url + '">';
    html = html + '<div class="card-body">';
    html = html + '<h4 class="card-title">' + story.title + '</h4>';
    html = html + '<em>' + story.byline + '</em>';
    html = html + '<p class="card-text">' + story.abstract + '</p>';
    html = html + '</div></div></div>';
    $(".story").append(html);
    $(".story").fadeIn(2000);
  });
});
