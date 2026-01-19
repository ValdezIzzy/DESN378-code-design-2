// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');

// Story content
const captions = [
  "Click the image to begin...",
  "Connection often starts with shared joy. SpongeBob and Patrick's friendship begins in simple moments—laughing, playing, and enjoying each other's presence without expectation.",
  "True friendship shows up during vulnerable moments. SpongeBob and Patrick show up for each other no matter what.",
  "Even the strongest connections experience conflict. Miscommunication and hurt feelings test their bond, reminding us that closeness doesn't mean perfection.",
  "Connection deepens when both sides choose understanding. SpongeBob and Patrick forgive each other, proving that love grows through patience and empathy.",
  "At its core, connection is choosing each other again and again. SpongeBob and Patrick's friendship remains steady, joyful, and unconditional. Let's learn from their example and nurture our own relationships with care and kindness this Valentine's Day."
];

// Track current step
let currentStep = 0;

// Listen for clicks
image.addEventListener('click', function() {
  if (currentStep < captions.length - 1) {
    currentStep++;

    // Update caption
    caption.textContent = captions[currentStep];

    // Update image
    image.src = `assets/images/story-image-${currentStep}.jpg`;

    // Update progress dots
    updateProgress(currentStep);
  }
});

function updateProgress(step) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index <= step) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}