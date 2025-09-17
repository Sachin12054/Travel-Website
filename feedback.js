document.addEventListener('DOMContentLoaded', () => {
  const starContainers = [
      'easeOfUse-stars-container',
      'features-stars-container',
      'speed-stars-container',
      'reliability-stars-container'
  ];

  starContainers.forEach(containerId => {
      const container = document.getElementById(containerId);
      for (let i = 1; i <= 5; i++) {
          const star = document.createElement('i');
          star.classList.add('fas', 'fa-star', 'star');
          star.dataset.value = i;
          star.addEventListener('click', () => setRating(containerId, i));
          container.appendChild(star);
      }
  });
});

function setRating(containerId, rating) {
  const container = document.getElementById(containerId);
  container.dataset.rating = rating;
  const stars = container.querySelectorAll('.star');
  stars.forEach(star => {
      star.classList.toggle('active', star.dataset.value <= rating);
  });
}

function submitFeedback() {
  const ratings = {
      easeOfUse: document.getElementById('easeOfUse-stars-container').dataset.rating,
      features: document.getElementById('features-stars-container').dataset.rating,
      speed: document.getElementById('speed-stars-container').dataset.rating,
      reliability: document.getElementById('reliability-stars-container').dataset.rating
  };

  const feedbackText = document.getElementById('feedback-input').value;
  const emailConsent = document.getElementById('email-consent').checked;

  const feedbackData = {
      ratings,
      feedbackText,
      emailConsent
  };

  // For demonstration purposes, let's log the feedback data to the console.
  // In a real-world scenario, you would send this data to a server.
  console.log(feedbackData);

  // Show success message
  Swal.fire({
      title: 'Thank you!',
      text: 'Your feedback has been submitted.',
      icon: 'success',
      confirmButtonText: 'OK'
  });
}
