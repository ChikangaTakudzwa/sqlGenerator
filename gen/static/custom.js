// Smooth Scroll

  // Add a click event listener to the document
  document.addEventListener('click', function (event) {

    // Check if the clicked element is a link with a hash in the href attribute
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
  
      // Prevent default link behavior
      event.preventDefault();
  
      // Get the target element ID
      var targetId = event.target.hash;
      
      // Scroll to the target element
      smoothScroll(targetId, 1000);
    }
  });
  
  function smoothScroll(target, duration) {
  
    // Get the target element and its position
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop;
  
    // Get the current position and calculate the distance to scroll
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
  
    // Initialize variables for the animation loop
    var startTime = null;
  
    // Define the animation function
    function animation(currentTime) {
  
      // If the start time is null, set it to the current time
      if (startTime === null) startTime = currentTime;
  
      // Calculate the time elapsed and the current position of the scroll
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
  
      // Scroll to the current position
      window.scrollTo(0, run);
  
      // If the animation is not complete, request another animation frame
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    // Define the easing function
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    // Start the animation loop
    requestAnimationFrame(animation);
  }
  
  // End Smooth Scroll