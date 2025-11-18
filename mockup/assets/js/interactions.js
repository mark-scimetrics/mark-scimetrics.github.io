// Interaction states for Auction Discovery Mockup

// Save button toggle
document.addEventListener('DOMContentLoaded', function() {
  
  // Save button heart animation
  const saveButtons = document.querySelectorAll('.save-btn');
  saveButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Toggle saved state
      if (this.classList.contains('saved')) {
        this.classList.remove('saved');
        this.textContent = '❤️';
        this.style.background = 'rgba(255, 255, 255, 0.95)';
      } else {
        this.classList.add('saved');
        this.textContent = '❤️';
        this.style.background = '#FF6B8A';
        this.style.color = 'white';
        
        // Animate
        this.style.transform = 'scale(1.3)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 200);
      }
    });
  });
  
  // Quick reply button states
  const quickButtons = document.querySelectorAll('.quick-btn');
  quickButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Add pressed state
      this.style.background = '#F28A76';
      this.style.color = 'white';
      this.style.borderColor = '#F28A76';
      
      // Reset after delay
      setTimeout(() => {
        this.style.background = 'white';
        this.style.color = '#3B3B3B';
        this.style.borderColor = '#ccc';
      }, 1000);
    });
  });
  
  // Send button state
  const sendBtn = document.querySelector('.send-btn');
  const chatInput = document.querySelector('.chat-input input');
  
  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', function() {
      if (chatInput.value.trim() !== '') {
        // Show sending state
        const originalText = this.textContent;
        this.textContent = '✓';
        this.style.background = '#4CAF50';
        
        // Clear input
        chatInput.value = '';
        
        // Reset after delay
        setTimeout(() => {
          this.textContent = originalText;
          this.style.background = '#F28A76';
        }, 1000);
      }
    });
    
    // Also trigger on Enter key
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendBtn.click();
      }
    });
  }
  
  // Filter pills interaction
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', function() {
      // Remove active from all
      filterPills.forEach(p => p.classList.remove('active'));
      // Add active to clicked
      this.classList.add('active');
    });
  });
  
  // Button hover effects for better feedback
  const allButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
  allButtons.forEach(button => {
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.97)';
    });
    button.addEventListener('mouseup', function() {
      this.style.transform = 'scale(1)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
});
