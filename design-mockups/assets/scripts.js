// BehavioralHealth Connect - Interactive Scripts

// Toast notification system
const ToastManager = {
  show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast-enter fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg ${this.getToastClasses(type)}`;
    toast.innerHTML = `
      <div class="flex items-start">
        <span class="flex-1">${message}</span>
        <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-current opacity-70 hover:opacity-100">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    `;
    document.body.appendChild(toast);
    
    if (duration > 0) {
      setTimeout(() => toast.remove(), duration);
    }
  },
  
  getToastClasses(type) {
    const classes = {
      info: 'bg-blue-50 text-blue-800 border border-blue-200',
      success: 'bg-green-50 text-green-800 border border-green-200',
      warning: 'bg-amber-50 text-amber-800 border border-amber-200',
      error: 'bg-red-50 text-red-800 border border-red-200'
    };
    return classes[type] || classes.info;
  }
};

// Modal management
const ModalManager = {
  open(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  },
  
  close(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  },
  
  closeOnBackdrop(event, modalId) {
    if (event.target.id === modalId) {
      this.close(modalId);
    }
  }
};

// Star rating component
function initStarRating(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const stars = container.querySelectorAll('.star-rating label');
  const inputs = container.querySelectorAll('.star-rating input');
  
  stars.forEach((star, index) => {
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, i) => {
        s.style.color = i <= index ? '#F59E0B' : '#D1D5DB';
      });
    });
    
    star.addEventListener('click', () => {
      inputs[index].checked = true;
    });
  });
  
  container.addEventListener('mouseleave', () => {
    const checked = container.querySelector('.star-rating input:checked');
    const checkedIndex = checked ? Array.from(inputs).indexOf(checked) : -1;
    
    stars.forEach((s, i) => {
      s.style.color = i <= checkedIndex ? '#F59E0B' : '#D1D5DB';
    });
  });
}

// Dropdown menu
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('[data-dropdown-toggle]')) {
    document.querySelectorAll('[data-dropdown-menu]').forEach(menu => {
      menu.classList.add('hidden');
    });
  }
});

// Tab navigation
function switchTab(tabGroupId, tabId) {
  const tabGroup = document.getElementById(tabGroupId);
  if (!tabGroup) return;
  
  // Hide all tab panels and deactivate buttons
  tabGroup.querySelectorAll('[role="tabpanel"]').forEach(panel => {
    panel.classList.add('hidden');
  });
  
  tabGroup.querySelectorAll('[role="tab"]').forEach(button => {
    button.classList.remove('border-blue-500', 'text-blue-600');
    button.classList.add('border-transparent', 'text-gray-500');
    button.setAttribute('aria-selected', 'false');
  });
  
  // Show selected panel and activate button
  const selectedPanel = document.getElementById(tabId);
  const selectedButton = tabGroup.querySelector(`[data-tab="${tabId}"]`);
  
  if (selectedPanel) {
    selectedPanel.classList.remove('hidden');
  }
  
  if (selectedButton) {
    selectedButton.classList.add('border-blue-500', 'text-blue-600');
    selectedButton.classList.remove('border-transparent', 'text-gray-500');
    selectedButton.setAttribute('aria-selected', 'true');
  }
}

// Form validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  let isValid = true;
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('border-red-500');
      
      // Show error message
      const errorId = input.getAttribute('aria-describedby');
      if (errorId) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
          errorElement.classList.remove('hidden');
        }
      }
    } else {
      input.classList.remove('border-red-500');
    }
  });
  
  return isValid;
}

// Character counter for textareas
function initCharCounter(textareaId, counterId, maxLength) {
  const textarea = document.getElementById(textareaId);
  const counter = document.getElementById(counterId);
  
  if (!textarea || !counter) return;
  
  textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    counter.textContent = `${length}/${maxLength}`;
    
    if (length > maxLength) {
      counter.classList.add('text-red-600');
    } else {
      counter.classList.remove('text-red-600');
    }
  });
}

// Increment/Decrement buttons
function increment(inputId) {
  const input = document.getElementById(inputId);
  if (input) {
    input.value = parseInt(input.value || 0) + 1;
    input.dispatchEvent(new Event('change'));
  }
}

function decrement(inputId) {
  const input = document.getElementById(inputId);
  if (input) {
    const newValue = Math.max(0, parseInt(input.value || 0) - 1);
    input.value = newValue;
    input.dispatchEvent(new Event('change'));
  }
}

// Multi-select tag component
function removeTag(tagElement) {
  tagElement.remove();
}

// Password visibility toggle
function togglePasswordVisibility(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  
  if (input && icon) {
    if (input.type === 'password') {
      input.type = 'text';
      icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>';
    } else {
      input.type = 'password';
      icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>';
    }
  }
}

// Simulate loading state
function simulateLoading(buttonId, duration = 2000) {
  const button = document.getElementById(buttonId);
  if (!button) return;
  
  const originalText = button.innerHTML;
  button.disabled = true;
  button.innerHTML = '<svg class="spinner w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
  
  setTimeout(() => {
    button.disabled = false;
    button.innerHTML = originalText;
  }, duration);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    
    if (mobileMenu && menuButton && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
  
  // Initialize any star ratings on page
  document.querySelectorAll('.star-rating').forEach((rating, index) => {
    initStarRating(`star-rating-${index}`);
  });
});

// Export functions for use in HTML
window.ToastManager = ToastManager;
window.ModalManager = ModalManager;
window.initStarRating = initStarRating;
window.toggleDropdown = toggleDropdown;
window.switchTab = switchTab;
window.validateForm = validateForm;
window.initCharCounter = initCharCounter;
window.increment = increment;
window.decrement = decrement;
window.removeTag = removeTag;
window.togglePasswordVisibility = togglePasswordVisibility;
window.simulateLoading = simulateLoading;
