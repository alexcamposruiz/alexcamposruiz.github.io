$(document).ready(function() {
  // Set the interval for scrolling the highlighted features
  var interval = setInterval(scrollFeatures, 5000);

  // Scroll the highlighted features
  function scrollFeatures() {
    var currentFeature = $('.feature.highlighted');
    var nextFeature = currentFeature.next('.feature');

    // If there is no next feature, go back to the first feature
    if (nextFeature.length === 0) {
      nextFeature = $('.feature').first();
    }

    // Scroll to the next feature
    currentFeature.removeClass('highlighted');
    nextFeature.addClass('highlighted');
  }

  // Stop scrolling the highlighted features when the user hovers over them
  $('.feature').hover(function() {
    clearInterval(interval);
  }, function() {
    interval = setInterval(scrollFeatures, 5000);
  });
});