document.getElementById('shortenForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Show the success message with animation
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');
    successMessage.classList.add('visible');
  
    setTimeout(() => {
      successMessage.classList.remove('visible');
      successMessage.classList.add('hidden');
    }, 3000); // Hide the message after 3 seconds
  
    // Simulate adding a new shortened URL to the list
    const urlList = document.getElementById('urlList');
    const newUrlItem = document.createElement('li');
    newUrlItem.innerHTML = `
      <span>https://example.com</span>
      <a href="https://short.ly/abcd12" target="_blank">https://short.ly/abcd12</a>
    `;
    urlList.appendChild(newUrlItem);
  
    // Add animation to the new list item
    setTimeout(() => {
      newUrlItem.classList.add('visible');
    }, 100);
  });
  