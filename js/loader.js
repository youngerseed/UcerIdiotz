document.onreadystatechange = function() {
  setTimeout(function() {
    document.getElementById("spinner").style.display = "none";
  },2500);
};

function redirectToWebsite() {
  window.location.href = "https://www.perplexity.ai/";
}