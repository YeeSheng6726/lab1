<template>
  <div>
    <!-- Header -->
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <h2>ETF Mastery</h2>
        </div>
        <div class="nav-links" :class="{ active: mobileMenuOpen }">
          <a href="#overview" @click="scrollToSection('overview')">Overview</a>
          <a href="#curriculum" @click="scrollToSection('curriculum')">Curriculum</a>
          <a href="#instructor" @click="scrollToSection('instructor')">Instructor</a>
          <a href="#details" @click="scrollToSection('details')">Details</a>
          <a href="#register" class="btn-nav" @click="scrollToSection('register')">Register Now</a>
        </div>
        <div class="nav-toggle" :class="{ active: mobileMenuOpen }" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Master ETF Investing in One Intensive Day</h1>
        <p class="hero-subtitle">Build a Diversified Portfolio, Minimize Risk, and Maximize Returns with Expert-Led ETF Investment Strategies</p>
        <div class="hero-features">
          <div class="feature">
            <i class="fas fa-clock"></i>
            <span>8 Hours Intensive Training</span>
          </div>
          <div class="feature">
            <i class="fas fa-chart-line"></i>
            <span>Hands-On Portfolio Building</span>
          </div>
          <div class="feature">
            <i class="fas fa-certificate"></i>
            <span>Certificate of Completion</span>
          </div>
        </div>
        <div class="hero-cta">
          <a href="#register" class="btn-primary" @click="scrollToSection('register')">Secure Your Spot - $497</a>
          <p class="guarantee">30-Day Money Back Guarantee</p>
        </div>
      </div>
    </section>

    <!-- Course Overview -->
    <section id="overview" class="section darker">
      <div class="container">
        <h2>Transform Your Investment Strategy in One Day</h2>
        <p class="section-subtitle">Whether you're a beginner or looking to refine your approach, this comprehensive workshop will give you the tools and confidence to build a winning ETF portfolio.</p>
        
        <div class="card-grid">
          <div class="card">
            <i class="fas fa-graduation-cap"></i>
            <h3>Learn from Experts</h3>
            <p>Get insights from seasoned investment professionals with years of ETF trading experience.</p>
          </div>
          <div class="card">
            <i class="fas fa-users"></i>
            <h3>Small Class Size</h3>
            <p>Limited to 25 participants for personalized attention and interactive learning.</p>
          </div>
          <div class="card">
            <i class="fas fa-laptop"></i>
            <h3>Hands-On Practice</h3>
            <p>Build your first ETF portfolio during the class with real market data and tools.</p>
          </div>
          <div class="card">
            <i class="fas fa-book"></i>
            <h3>Comprehensive Materials</h3>
            <p>Take home detailed guides, checklists, and templates to continue your learning.</p>
          </div>
          <div class="card">
            <i class="fas fa-shield-alt"></i>
            <h3>Risk-Free Guarantee</h3>
            <p>30-day money-back guarantee ensures your complete satisfaction with the workshop.</p>
          </div>
          <div class="card">
            <i class="fas fa-headset"></i>
            <h3>Ongoing Support</h3>
            <p>Get 30 days of email support after the workshop to answer your investment questions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum -->
    <section id="curriculum" class="section dark">
      <div class="container">
        <h2>What You'll Learn</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-time">9:00 - 10:30 AM</div>
            <div class="timeline-content">
              <h3>ETF Fundamentals & Market Overview</h3>
              <ul>
                <li>Understanding ETF structures and mechanics</li>
                <li>Different types of ETFs (Equity, Bond, Commodity, Sector)</li>
                <li>ETF vs Mutual Funds vs Individual Stocks</li>
                <li>Market trends and opportunities in 2024</li>
              </ul>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-time">10:45 - 12:00 PM</div>
            <div class="timeline-content">
              <h3>ETF Analysis & Selection Criteria</h3>
              <ul>
                <li>Key metrics: Expense ratios, tracking error, liquidity</li>
                <li>Evaluating ETF providers and fund quality</li>
                <li>Screening tools and research platforms</li>
                <li>Tax efficiency considerations</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-time">1:00 - 2:30 PM</div>
            <div class="timeline-content">
              <h3>Portfolio Construction Workshop</h3>
              <ul>
                <li>Asset allocation strategies</li>
                <li>Geographic and sector diversification</li>
                <li>Core-satellite portfolio approach</li>
                <li>Hands-on portfolio building exercise</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-time">2:45 - 4:00 PM</div>
            <div class="timeline-content">
              <h3>Risk Management & Rebalancing</h3>
              <ul>
                <li>Understanding and measuring portfolio risk</li>
                <li>Rebalancing strategies and frequency</li>
                <li>Dollar-cost averaging with ETFs</li>
                <li>Market timing vs systematic investing</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-time">4:15 - 5:00 PM</div>
            <div class="timeline-content">
              <h3>Advanced Strategies & Q&A</h3>
              <ul>
                <li>International ETF investing</li>
                <li>ESG and thematic ETFs</li>
                <li>Common mistakes to avoid</li>
                <li>Open Q&A and portfolio reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instructor -->
    <section id="instructor" class="section darker">
      <div class="container">
        <h2>Meet Your Instructor</h2>
        <div class="instructor-card">
          <div class="instructor-image">
            <div class="instructor-placeholder">
              <i class="fas fa-user-tie"></i>
            </div>
          </div>
          <div class="instructor-info">
            <h3>{{ instructor.name }}</h3>
            <p class="instructor-title">{{ instructor.title }}</p>
            <div class="credentials">
              <div v-for="credential in instructor.credentials" :key="credential.text" class="credential">
                <i :class="credential.icon"></i>
                <span>{{ credential.text }}</span>
              </div>
            </div>
            <p class="instructor-bio">{{ instructor.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Class Details -->
    <section id="details" class="section dark">
      <div class="container">
        <h2>Class Details</h2>
        <div class="card-grid">
          <div v-for="detail in classDetails" :key="detail.title" class="card detail-card">
            <i :class="detail.icon"></i>
            <h3>{{ detail.title }}</h3>
            <div v-if="detail.content" v-html="detail.content"></div>
            <ul v-if="detail.list">
              <li v-for="item in detail.list" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration -->
    <section id="register" class="registration">
      <div class="container">
        <h2>Secure Your Spot Today</h2>
        <p class="registration-subtitle">Limited to 25 participants - Only 8 spots remaining!</p>
        
        <div class="form-container">
          <form class="form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  v-model="form.firstName" 
                  required
                  @blur="validateField('firstName')"
                  @focus="clearFieldError('firstName')"
                >
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  v-model="form.lastName" 
                  required
                  @blur="validateField('lastName')"
                  @focus="clearFieldError('lastName')"
                >
              </div>
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                @blur="validateField('email')"
                @focus="clearFieldError('email')"
              >
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="form.phone" 
                required
                @blur="validateField('phone')"
                @focus="clearFieldError('phone')"
              >
            </div>
            
            <div class="form-group">
              <label for="experience">Investment Experience Level</label>
              <select 
                id="experience" 
                v-model="form.experience" 
                required
                @blur="validateField('experience')"
                @focus="clearFieldError('experience')"
              >
                <option value="">Select your level</option>
                <option value="beginner">Beginner (0-2 years)</option>
                <option value="intermediate">Intermediate (2-5 years)</option>
                <option value="advanced">Advanced (5+ years)</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="goals">What are your main investment goals? (Optional)</label>
              <textarea 
                id="goals" 
                v-model="form.goals" 
                rows="3" 
                placeholder="e.g., Retirement planning, wealth building, portfolio diversification..."
              ></textarea>
            </div>
            
            <div class="pricing-summary">
              <div class="price-line">
                <span>Class Fee:</span>
                <span>${{ pricing.fee }}</span>
              </div>
              <div class="price-line total">
                <span>Total:</span>
                <span>${{ pricing.total }}</span>
              </div>
            </div>
            
            <button type="submit" class="btn-primary btn-full" :disabled="submitting">
              {{ submitting ? 'Processing...' : `Register Now - $${pricing.total}` }}
            </button>
            
            <div class="form-footer">
              <p><i class="fas fa-shield-alt"></i> Secure 256-bit SSL encryption</p>
              <p><i class="fas fa-undo"></i> 30-day money-back guarantee</p>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section darker">
      <div class="container">
        <h2>What Our Students Say</h2>
        <div class="card-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.author" class="card testimonial-card">
            <div class="stars">★★★★★</div>
            <p>"{{ testimonial.quote }}"</p>
            <div class="testimonial-author">
              <strong>{{ testimonial.author }}</strong>
              <span>{{ testimonial.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section dark">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="faq-item" 
            :class="{ active: faq.isOpen }"
          >
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>ETF Mastery Workshop</h3>
            <p>Empowering investors with practical ETF strategies for long-term wealth building.</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-linkedin"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <p><i class="fas fa-envelope"></i> info@etfmastery.com</p>
            <p><i class="fas fa-phone"></i> (555) 123-4567</p>
            <p><i class="fas fa-map-marker-alt"></i> 123 Investment Plaza<br>Downtown Business District</p>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#overview" @click="scrollToSection('overview')">Course Overview</a></li>
              <li><a href="#curriculum" @click="scrollToSection('curriculum')">Curriculum</a></li>
              <li><a href="#instructor" @click="scrollToSection('instructor')">Instructor</a></li>
              <li><a href="#register" @click="scrollToSection('register')">Register</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 ETF Mastery Workshop. All rights reserved.</p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Back to Top Button -->
    <button 
      v-show="showBackToTop" 
      class="back-to-top" 
      @click="scrollToTop"
      :style="backToTopStyles"
    >
      <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Notification -->
    <div 
      v-if="notification.show" 
      class="notification" 
      :class="`notification-${notification.type}`"
      :style="notificationStyles"
    >
      <div class="notification-content">
        <i :class="notificationIcon"></i>
        <span>{{ notification.message }}</span>
        <button class="notification-close" @click="closeNotification">&times;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Head configuration
useHead({
  title: 'ETF Investment Mastery - Full Day Workshop',
  meta: [
    { name: 'description', content: 'Master ETF investing in one intensive day. Build a diversified portfolio, minimize risk, and maximize returns with expert-led ETF investment strategies.' }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    }
  ]
})

// Reactive data
const mobileMenuOpen = ref(false)
const showBackToTop = ref(false)
const submitting = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  experience: '',
  goals: ''
})

const notification = ref({
  show: false,
  message: '',
  type: 'info'
})

// Static data
const instructor = {
  name: 'Choon Yee Sheng, CFP',
  title: 'Senior Portfolio Manager & ETF Specialist',
  credentials: [
    { icon: 'fas fa-award', text: '14+ Years Investment Experience' },
    { icon: 'fas fa-university', text: 'MSc Polymer Engineering, Wharton School' },
    { icon: 'fas fa-chart-line', text: '$500M+ Assets Under Management' }
  ],
  bio: "Choon Yee Sheng has spent over 14 years managing institutional portfolios and specializing in ETF strategies. He's helped thousands of investors build diversified, low-cost portfolios that outperform the market. His practical, no-nonsense approach makes complex investment concepts accessible to everyone."
}

const pricing = {
  fee: '497.00',
  total: '497.00'
}

const classDetails = [
  {
    icon: 'fas fa-calendar-alt',
    title: 'Date & Time',
    content: '<p><strong>Saturday, November 16, 2024</strong></p><p>9:00 AM - 5:00 PM</p><p>Lunch included (12:00 - 1:00 PM)</p>'
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    content: '<p><strong>Financial Learning Center</strong></p><p>123 Investment Plaza</p><p>Downtown Business District</p><p>Free parking available</p>'
  },
  {
    icon: 'fas fa-dollar-sign',
    title: 'Investment',
    content: '<p><strong>$497 per person</strong></p><p class="price-includes" style="color: #d4af37; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem;">Includes:</p>',
    list: [
      '8-hour intensive training',
      'Course materials & templates',
      'Lunch and refreshments',
      'Certificate of completion',
      '30-day email support'
    ]
  },
  {
    icon: 'fas fa-laptop',
    title: 'What to Bring',
    list: [
      'Laptop or tablet',
      'Notebook for notes',
      'Calculator (optional)',
      'Your current investment statements (optional)'
    ]
  },
  {
    icon: 'fas fa-users-cog',
    title: 'Class Size',
    content: '<p><strong>Limited to 25 participants</strong></p><p>Small intimate setting for personalized attention</p><p>Direct interaction with instructor</p><p>Networking opportunities with fellow investors</p>'
  },
  {
    icon: 'fas fa-award',
    title: 'Certification',
    content: '<p><strong>Professional Certificate</strong></p><p>Official completion certificate</p><p>LinkedIn skill verification eligible</p><p>Continuing education credits available</p>'
  }
]

const testimonials = [
  {
    quote: "This class completely changed how I approach investing. Choon Yee Sheng's teaching style is clear and practical. I built my first diversified ETF portfolio during the class and it's already showing great returns!",
    author: 'Michael Thompson',
    role: 'Software Engineer'
  },
  {
    quote: "I wish I had taken this class years ago. The strategies I learned have simplified my investment approach while improving my returns. Worth every penny!",
    author: 'Jennifer Liu',
    role: 'Marketing Director'
  },
  {
    quote: "Excellent workshop! The hands-on portfolio building session was incredibly valuable. I feel confident making ETF investment decisions now.",
    author: 'David Rodriguez',
    role: 'Business Owner'
  }
]

const faqs = ref([
  {
    question: 'Is this class suitable for beginners?',
    answer: 'Absolutely! This class is designed for all experience levels. We start with the fundamentals and build up to more advanced concepts. Beginners will gain a solid foundation, while experienced investors will learn new strategies and techniques.',
    isOpen: false
  },
  {
    question: "What if I can't attend the full day?",
    answer: "We recommend attending the full workshop for maximum benefit, as each session builds on the previous one. However, if you must leave early, you'll receive all course materials and have access to our 30-day email support.",
    isOpen: false
  },
  {
    question: 'Is there a refund policy?',
    answer: "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied with the class, contact us within 30 days for a full refund, no questions asked.",
    isOpen: false
  },
  {
    question: 'Will I need any special software or accounts?',
    answer: "No special software is required. We'll use free online tools and resources. You don't need any investment accounts to participate - this is an educational workshop focused on teaching you the strategies and principles.",
    isOpen: false
  },
  {
    question: 'Is lunch included?',
    answer: 'Yes, a catered lunch is included in your registration fee, along with morning coffee and afternoon refreshments.',
    isOpen: false
  }
])

// Computed properties
const notificationIcon = computed(() => {
  const iconMap = {
    success: 'fas fa-check-circle',
    error: 'fas fa-exclamation-circle',
    info: 'fas fa-info-circle'
  }
  return iconMap[notification.value.type] || iconMap.info
})

const backToTopStyles = computed(() => ({
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
  color: '#1a1a1a',
  border: 'none',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
  zIndex: '1000',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const notificationStyles = computed(() => ({
  position: 'fixed',
  top: '100px',
  right: '20px',
  background: notification.value.type === 'success' ? '#d4af37' : notification.value.type === 'error' ? '#ef4444' : '#d4af37',
  color: notification.value.type === 'error' ? 'white' : '#1a1a1a',
  padding: '1rem 1.5rem',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
  zIndex: '10000',
  maxWidth: '400px',
  border: '1px solid rgba(212, 175, 55, 0.4)'
}))

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const header = document.querySelector('.header')
    const headerHeight = header ? header.offsetHeight : 0
    const targetPosition = element.offsetTop - headerHeight - 20
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
    
    if (mobileMenuOpen.value) {
      mobileMenuOpen.value = false
    }
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const toggleFaq = (index) => {
  faqs.value.forEach((faq, i) => {
    if (i !== index) {
      faq.isOpen = false
    }
  })
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

const validateField = (fieldName) => {
  const field = form.value[fieldName]
  const element = document.getElementById(fieldName)
  
  if (!field || field.trim() === '') {
    if (element) element.style.borderColor = '#ef4444'
  } else if (fieldName === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(field)) {
      if (element) element.style.borderColor = '#ef4444'
    } else {
      if (element) element.style.borderColor = '#d4af37'
    }
  } else {
    if (element) element.style.borderColor = '#d4af37'
  }
}

const clearFieldError = (fieldName) => {
  const element = document.getElementById(fieldName)
  if (element) element.style.borderColor = '#d4af37'
}

const submitForm = async () => {
  // Validate required fields
  const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'experience']
  let isValid = true
  
  requiredFields.forEach(field => {
    if (!form.value[field] || form.value[field].trim() === '') {
      validateField(field)
      isValid = false
    }
  })
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (form.value.email && !emailRegex.test(form.value.email)) {
    validateField('email')
    isValid = false
  }
  
  if (!isValid) {
    showNotification('Please fill in all required fields correctly.', 'error')
    return
  }
  
  submitting.value = true
  
  // Simulate API call
  setTimeout(() => {
    showNotification('Registration successful! You will receive a confirmation email shortly.', 'success')
    
    // Reset form
    Object.keys(form.value).forEach(key => {
      form.value[key] = ''
    })
    
    submitting.value = false
    console.log('Form submitted:', form.value)
  }, 2000)
}

const showNotification = (message, type = 'info') => {
  notification.value = {
    show: true,
    message,
    type
  }
  
  setTimeout(() => {
    notification.value.show = false
  }, 5000)
}

const closeNotification = () => {
  notification.value.show = false
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
  
  const header = document.querySelector('.header')
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(0, 0, 0, 0.98)'
      header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.4)'
    } else {
      header.style.background = 'rgba(0, 0, 0, 0.95)'
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)'
    }
  }
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Initialize scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up')
      }
    })
  }, observerOptions)
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.card, .timeline-item')
  animateElements.forEach(el => {
    observer.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss">
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #f5f5f5;
  background: #0a0a0a;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Color Variables */
:root {
  --primary-gold: #d4af37;
  --light-gold: #f4d03f;
  --dark-bg: #0a0a0a;
  --darker-bg: #111111;
  --card-bg: #1a1a1a;
  --border-gold: rgba(212, 175, 55, 0.2);
  --text-light: #f5f5f5;
  --text-muted: #b0b0b0;
  --text-gray: #888888;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid var(--border-gold);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand h2 {
  color: var(--primary-gold);
  font-weight: 700;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    text-decoration: none;
    color: var(--text-light);
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-gold);
    }
  }
}

.btn-nav {
  background: linear-gradient(135deg, var(--primary-gold) 0%, var(--light-gold) 100%);
  color: #1a1a1a !important;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    background: linear-gradient(135deg, var(--light-gold) 0%, var(--primary-gold) 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
  }
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: var(--text-light);
    margin: 3px 0;
    transition: 0.3s;
  }

  &.active {
    span:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(10, 10, 10, 0.75), rgba(26, 26, 26, 0.85)), 
              url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: var(--text-light);
  padding: 120px 0 80px;
  display: flex;
  align-items: center;
  min-height: 100vh;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  i {
    color: var(--primary-gold);
    font-size: 1.2rem;
    width: 20px;
  }
}

.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-gold) 0%, var(--light-gold) 100%);
  color: #1a1a1a;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);

  &:hover {
    background: linear-gradient(135deg, var(--light-gold) 0%, var(--primary-gold) 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
  }
}

.guarantee {
  font-size: 0.9rem;
  opacity: 0.8;
  text-align: center;
}

/* Section Styles */
.section {
  padding: 80px 0;

  &.dark {
    background: var(--dark-bg);
  }

  &.darker {
    background: var(--darker-bg);
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-light);
  }
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Card Styles */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 1px solid var(--border-gold);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(212, 175, 55, 0.2);
    border-color: rgba(212, 175, 55, 0.3);
  }

  i {
    font-size: 2.5rem;
    color: var(--primary-gold);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--text-light);
  }

  p {
    color: var(--text-muted);
  }
}

/* Timeline Styles */
.timeline {
  max-width: 900px;
  margin: 0 auto;
}

.timeline-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 100px;
    top: 80px;
    width: 2px;
    height: calc(100% + 1rem);
    background: rgba(212, 175, 55, 0.3);
  }
}

.timeline-time {
  background: linear-gradient(135deg, var(--primary-gold) 0%, var(--light-gold) 100%);
  color: #1a1a1a;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  height: fit-content;
  position: relative;
  z-index: 1;
}

.timeline-content {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid var(--primary-gold);
  border: 1px solid var(--border-gold);

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--text-light);
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-muted);

      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--primary-gold);
        font-weight: bold;
      }
    }
  }
}

/* Form Styles */
.form-container {
  max-width: 600px;
  margin: 0 auto;
}

.form {
  background: rgba(26, 26, 26, 0.8);
  padding: 2.5rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-light);
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid rgba(212, 175, 55, 0.3);
    border-radius: 8px;
    background: rgba(26, 26, 26, 0.8);
    color: var(--text-light);
    font-size: 1rem;
    transition: all 0.3s ease;

    &::placeholder {
      color: rgba(245, 245, 245, 0.6);
    }

    &:focus {
      outline: none;
      border-color: var(--primary-gold);
      background: rgba(26, 26, 26, 0.9);
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    }
  }
}

.pricing-summary {
  background: rgba(212, 175, 55, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem 0;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.price-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  &.total {
    border-top: 1px solid rgba(212, 175, 55, 0.3);
    padding-top: 0.5rem;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--primary-gold);
  }
}

.btn-full {
  width: 100%;
  margin-bottom: 1.5rem;
}

.instructor-card {
  background: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 300px 1fr;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid var(--border-gold);
}

.instructor-image {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-gold);
}

.instructor-placeholder {
  text-align: center;

  i {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
}

.instructor-info {
  padding: 2.5rem;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: var(--text-light);
  }
}

.instructor-title {
  color: var(--primary-gold);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.credentials {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.credential {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  i {
    color: var(--primary-gold);
    width: 20px;
  }
}

.instructor-bio {
  color: var(--text-muted);
  line-height: 1.7;
}

.detail-card {
  &:hover {
    border-color: var(--primary-gold);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
  }

  strong {
    color: var(--text-light);
  }

  ul {
    list-style: none;
    text-align: left;

    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-muted);

      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--primary-gold);
        font-weight: bold;
      }
    }
  }
}

.registration {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  color: var(--text-light);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
}

.registration-subtitle {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.form-footer {
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.8;

  p {
    margin-bottom: 0.5rem;
  }

  i {
    margin-right: 0.5rem;
    color: var(--primary-gold);
  }
}

.testimonial-card {
  .stars {
    color: var(--primary-gold);
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    font-style: italic;
    margin-bottom: 1.5rem;
    color: var(--text-muted);
    line-height: 1.7;
  }
}

.testimonial-author {
  strong {
    color: var(--text-light);
    display: block;
  }

  span {
    color: var(--text-gray);
    font-size: 0.9rem;
  }
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border: 2px solid var(--border-gold);
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  background: var(--card-bg);

  &:hover {
    border-color: var(--primary-gold);
  }

  &.active .faq-question i {
    transform: rotate(180deg);
  }

  &.active .faq-answer {
    padding: 1.5rem;
    max-height: 200px;
  }
}

.faq-question {
  padding: 1.5rem;
  background: var(--card-bg);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: #2d2d2d;
  }

  h3 {
    color: var(--text-light);
    margin: 0;
  }

  i {
    color: var(--primary-gold);
    transition: transform 0.3s ease;
  }
}

.faq-answer {
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  p {
    color: var(--text-muted);
    line-height: 1.7;
  }
}

.footer {
  background: var(--dark-bg);
  color: var(--text-light);
  padding: 60px 0 20px;
  border-top: 1px solid var(--border-gold);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  h3,
  h4 {
    margin-bottom: 1rem;
    color: var(--primary-gold);
  }

  p {
    margin-bottom: 0.5rem;
    opacity: 0.8;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 0.5rem;

      a {
        color: var(--text-light);
        text-decoration: none;
        opacity: 0.8;
        transition: all 0.3s ease;

        &:hover {
          opacity: 1;
          color: var(--primary-gold);
        }
      }
    }
  }
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    background: #2d2d2d;
    color: var(--text-light);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(212, 175, 55, 0.3);

    &:hover {
      background: var(--primary-gold);
      color: #1a1a1a;
      transform: translateY(-2px);
    }
  }
}

.footer-bottom {
  border-top: 1px solid var(--border-gold);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 2rem;

  a {
    color: var(--text-light);
    text-decoration: none;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      color: var(--primary-gold);
    }
  }
}

.notification {
  .notification-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .notification-close {
    background: none;
    border: none;
    color: inherit;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: auto;
    padding: 0;
    line-height: 1;
  }
}

/* Animation Classes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(26, 26, 26, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transform: translateY(-100vh);
    transition: all 0.3s ease;
    z-index: 999;
    border-bottom: 1px solid var(--border-gold);

    &.active {
      transform: translateY(0);
    }

    a {
      margin: 0.5rem 0;
      font-size: 1.1rem;
    }
  }

  .nav-toggle {
    display: flex;
  }

  .hero {
    padding: 100px 0 60px;
    
    h1 {
      font-size: 2.5rem;
    }
  }

  .hero-content {
    text-align: center;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 1rem;

    &::after {
      display: none;
    }
  }

  .instructor-card {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .container {
    padding: 0 15px;
  }

  .section {
    padding: 60px 0;
  }

  .footer-bottom {
    text-align: center;
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .form {
    padding: 1.5rem;
  }
}
</style>
