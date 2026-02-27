/* ================================================
   AarogyaAura – Yoga for Healing & Wellness
   Vanilla JavaScript – All Interactive Features
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ========== DATA ==========

  const conditionsData = [
    {
      id: 'pcos',
      icon: '🌸',
      color: 'lavender',
      title: 'PCOS / PCOD',
      desc: 'Polycystic Ovary Syndrome affects nearly 1 in 10 women. It disrupts hormonal balance, causing irregular periods, weight gain, and emotional distress. Yoga helps regulate hormones, reduce insulin resistance, and ease anxiety.',
      symptoms: ['Irregular or missed periods', 'Excess facial/body hair', 'Weight gain (especially belly)', 'Acne & oily skin', 'Mood swings & anxiety'],
      asanas: [
        { name: 'Baddha Konasana (Butterfly Pose)', desc: 'Opens the hips and stimulates the ovaries, improving blood flow to the pelvic region.', duration: '1–2 min', benefits: 'Stimulates reproductive organs, relieves menstrual discomfort' },
        { name: 'Supta Baddha Konasana (Reclining Butterfly)', desc: 'A restorative variation that deeply relaxes the pelvic area and calms the nervous system.', duration: '2–3 min', benefits: 'Reduces stress hormones, opens hip flexors' },
        { name: 'Bharadvajasana (Seated Twist)', desc: 'Massages abdominal organs and aids hormonal regulation by improving digestion.', duration: '30 sec each side', benefits: 'Detoxifies, improves digestion, balances hormones' },
        { name: 'Dhanurasana (Bow Pose)', desc: 'Strengthens the core and stimulates the reproductive organs through gentle abdominal pressure.', duration: '30 sec – 1 min', benefits: 'Regulates menstrual cycle, strengthens back' },
        { name: 'Shavasana with Yoga Nidra', desc: 'Deep relaxation to lower cortisol — the stress hormone that worsens PCOS symptoms.', duration: '5–10 min', benefits: 'Reduces cortisol, promotes deep healing rest' }
      ]
    },
    {
      id: 'diabetes',
      icon: '🩸',
      color: 'gold',
      title: 'Pre-Diabetes',
      desc: 'Pre-diabetes means your blood sugar is higher than normal but not yet diabetic. With yoga, mindful eating, and daily movement, it is fully reversible. Yoga improves insulin sensitivity and metabolic function.',
      symptoms: ['Fasting blood sugar 100–125 mg/dL', 'Increased thirst & frequent urination', 'Fatigue & blurred vision', 'Dark patches on skin (Acanthosis)', 'Slow wound healing'],
      asanas: [
        { name: 'Surya Namaskar (Sun Salutation)', desc: 'A complete full-body flow that boosts metabolism and improves blood sugar regulation.', duration: '5–10 rounds', benefits: 'Activates pancreas, burns glucose, improves circulation' },
        { name: 'Paschimottanasana (Seated Forward Bend)', desc: 'Compresses the abdomen, stimulating the pancreas and improving insulin production.', duration: '1–2 min', benefits: 'Stimulates pancreas, calms the mind' },
        { name: 'Ardha Matsyendrasana (Half Spinal Twist)', desc: 'Massages abdominal organs including the pancreas, liver, and kidneys.', duration: '30 sec each side', benefits: 'Improves digestion, massages pancreas' },
        { name: 'Mandukasana (Frog Pose)', desc: 'Direct compression on the pancreas makes this one of the best asanas for diabetes management.', duration: '30 sec – 1 min', benefits: 'Directly stimulates pancreas, reduces blood sugar' },
        { name: 'Pranayama – Kapalbhati', desc: 'Rapid breathing technique that boosts metabolism and improves insulin sensitivity.', duration: '3–5 min', benefits: 'Increases metabolism, detoxifies, energizes' }
      ]
    },
    {
      id: 'thyroid',
      icon: '🦋',
      color: 'sage',
      title: 'Thyroid Disorders',
      desc: 'Thyroid imbalances (hypo or hyper) affect metabolism, energy, weight, and mood. Yoga poses that compress and stretch the neck directly stimulate the thyroid gland, helping regulate hormone production.',
      symptoms: ['Unexplained weight gain or loss', 'Fatigue & lethargy', 'Hair loss & dry skin', 'Sensitivity to cold or heat', 'Mood changes & brain fog'],
      asanas: [
        { name: 'Sarvangasana (Shoulder Stand)', desc: 'The "queen of asanas" — this inversion sends blood directly to the thyroid gland.', duration: '1–3 min', benefits: 'Directly stimulates thyroid, improves circulation' },
        { name: 'Halasana (Plow Pose)', desc: 'Extends from shoulder stand to further compress and massage the thyroid area.', duration: '30 sec – 1 min', benefits: 'Stretches neck and spine, stimulates thyroid' },
        { name: 'Matsyasana (Fish Pose)', desc: 'Opens the throat and stretches the neck — a perfect counter pose to shoulder stand.', duration: '30 sec – 1 min', benefits: 'Stimulates thyroid, opens chest and throat' },
        { name: 'Ustrasana (Camel Pose)', desc: 'A deep backbend that exposes and stretches the throat, stimulating the thyroid.', duration: '30 sec', benefits: 'Opens throat chakra, improves energy, stimulates thyroid' },
        { name: 'Ujjayi Pranayama (Ocean Breath)', desc: 'The gentle constriction of the throat in this breathing technique massages the thyroid from within.', duration: '3–5 min', benefits: 'Calms mind, stimulates thyroid, regulates breath' }
      ]
    },
    {
      id: 'anxiety',
      icon: '🧠',
      color: 'blue',
      title: 'Stress & Anxiety',
      desc: 'Chronic stress and anxiety flood your body with cortisol and adrenaline. Yoga activates the parasympathetic nervous system — your body\'s "rest and digest" mode — calming the mind and restoring emotional balance.',
      symptoms: ['Constant worry or racing thoughts', 'Difficulty sleeping', 'Rapid heartbeat or chest tightness', 'Irritability & restlessness', 'Muscle tension & headaches'],
      asanas: [
        { name: 'Balasana (Child\'s Pose)', desc: 'A grounding pose that signals safety to your nervous system and releases tension in the back, shoulders, and chest.', duration: '1–3 min', benefits: 'Calms nervous system, releases back tension' },
        { name: 'Viparita Karani (Legs Up the Wall)', desc: 'A gentle inversion that slows heart rate and promotes deep relaxation.', duration: '3–5 min', benefits: 'Reduces anxiety, improves sleep, relieves tired legs' },
        { name: 'Anulom Vilom (Alternate Nostril Breathing)', desc: 'Balances the left and right hemispheres of the brain, creating calm and focus.', duration: '5–10 min', benefits: 'Balances nervous system, reduces panic, improves focus' },
        { name: 'Uttanasana (Standing Forward Bend)', desc: 'Letting the head hang below the heart calms the brain and relieves stress.', duration: '30 sec – 1 min', benefits: 'Reduces stress, calms brain, stretches hamstrings' },
        { name: 'Yoga Nidra (Guided Sleep Meditation)', desc: 'One hour of Yoga Nidra equals 4 hours of deep sleep. A powerful tool against anxiety.', duration: '15–30 min', benefits: 'Deep relaxation, reduces cortisol, heals trauma' }
      ]
    },
    {
      id: 'weight',
      icon: '⚖️',
      color: 'coral',
      title: 'Weight Management',
      desc: 'Sustainable weight loss isn\'t about crash diets — it\'s about consistent movement, mindful eating, and hormonal balance. Yoga boosts metabolism, reduces stress-related eating, and builds lean muscle.',
      symptoms: ['BMI above 25 (overweight)', 'Low energy & sluggishness', 'Stress eating or emotional eating', 'Poor sleep quality', 'Joint pain & reduced mobility'],
      asanas: [
        { name: 'Surya Namaskar (Sun Salutation)', desc: 'The ultimate calorie-burning yoga flow. 12 rounds can burn up to 200 calories.', duration: '10–12 rounds', benefits: 'Full-body workout, boosts metabolism, builds stamina' },
        { name: 'Virabhadrasana (Warrior Poses)', desc: 'Warrior I, II, and III build strength in the legs, core, and arms while improving balance.', duration: '30 sec each side', benefits: 'Tones legs and arms, builds core strength' },
        { name: 'Navasana (Boat Pose)', desc: 'An intense core strengthener that targets belly fat and improves digestive fire.', duration: '30 sec – 1 min', benefits: 'Strengthens core, improves digestion, burns belly fat' },
        { name: 'Chaturanga Dandasana (Low Plank)', desc: 'Builds upper body and core strength — the yoga equivalent of a push-up hold.', duration: '15–30 sec', benefits: 'Tones arms, strengthens core and shoulders' },
        { name: 'Kapalbhati Pranayama', desc: 'Rapid abdominal breathing that fires up metabolism and aids in fat loss.', duration: '3–5 min', benefits: 'Boosts metabolism, reduces belly fat, detoxifies' }
      ]
    }
  ];

  const allPoses = [
    { name: 'Surya Namaskar', duration: '5 min' },
    { name: 'Tadasana', duration: '1 min' },
    { name: 'Trikonasana', duration: '1 min each side' },
    { name: 'Virabhadrasana I', duration: '30 sec each side' },
    { name: 'Virabhadrasana II', duration: '30 sec each side' },
    { name: 'Vrikshasana', duration: '30 sec each side' },
    { name: 'Bhujangasana', duration: '30 sec' },
    { name: 'Dhanurasana', duration: '30 sec' },
    { name: 'Paschimottanasana', duration: '1 min' },
    { name: 'Balasana', duration: '1 min' },
    { name: 'Setu Bandhasana', duration: '30 sec' },
    { name: 'Halasana', duration: '30 sec' },
    { name: 'Matsyasana', duration: '30 sec' },
    { name: 'Navasana', duration: '30 sec' },
    { name: 'Ustrasana', duration: '30 sec' },
    { name: 'Marjariasana (Cat-Cow)', duration: '1 min' },
    { name: 'Adho Mukha Svanasana', duration: '1 min' },
    { name: 'Uttanasana', duration: '30 sec' },
    { name: 'Shavasana', duration: '3 min' },
    { name: 'Anulom Vilom', duration: '5 min' },
    { name: 'Kapalbhati', duration: '3 min' },
    { name: 'Baddha Konasana', duration: '1 min' },
    { name: 'Sarvangasana', duration: '1 min' },
    { name: 'Viparita Karani', duration: '3 min' }
  ];

  const quotes = [
    '"The body benefits from movement, and the mind benefits from stillness." — Sakyong Mipham',
    '"Yoga is not about touching your toes. It is about what you learn on the way down." — Jigar Gor',
    '"The nature of yoga is to shine the light of awareness into the darkest corners of the body." — Jason Crandell',
    '"Inhale the future, exhale the past."',
    '"You are one yoga class away from a good mood."',
    '"Your body is your most priceless possession. Take care of it."',
    '"Almost everything will work again if you unplug it for a few minutes — including you."',
    '"Yoga does not just change the way we see things, it transforms the person who sees." — B.K.S. Iyengar',
    '"The pose begins when you want to leave it."',
    '"Heal yourself first. The rest will come."'
  ];

  // ========== NAVBAR ==========

  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ========== DARK MODE ==========

  const darkToggle = document.getElementById('dark-mode-toggle');
  const savedTheme = localStorage.getItem('aarogya-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    darkToggle.textContent = '☀️';
  }

  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    darkToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('aarogya-theme', isDark ? 'dark' : 'light');
  });

  // ========== SCROLL PROGRESS ==========

  const scrollProgress = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = progress + '%';
  });

  // ========== BACK TO TOP ==========

  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========== FADE-IN ON SCROLL ==========

  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => fadeObserver.observe(el));

  // ========== RENDER CONDITION CARDS ==========

  const conditionsGrid = document.getElementById('conditions-grid');

  conditionsData.forEach((c, idx) => {
    const card = document.createElement('div');
    card.className = 'condition-card glass-card fade-in';
    card.setAttribute('data-color', c.color);

    card.innerHTML = `
      <div class="card-icon">${c.icon}</div>
      <h3>${c.title}</h3>
      <p class="card-desc">${c.desc}</p>
      <ul class="symptoms">
        ${c.symptoms.map(s => `<li>${s}</li>`).join('')}
      </ul>
      <div class="asanas-section">
        <h4>✨ Recommended Asanas</h4>
        <div class="asana-tags">
          ${c.asanas.map(a => `<span class="asana-tag">${a.name.split('(')[0].trim()}</span>`).join('')}
        </div>
      </div>
      <button class="btn btn-secondary" data-condition="${idx}">See Yoga Routine</button>
    `;

    conditionsGrid.appendChild(card);

    // Observe for fade-in
    fadeObserver.observe(card);
  });

  // ========== MODAL ==========

  const modal = document.getElementById('routine-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  function openModal(conditionIdx) {
    const c = conditionsData[conditionIdx];
    modalTitle.textContent = `Yoga Routine for ${c.title}`;
    modalBody.innerHTML = c.asanas.map((a, i) => `
      <div class="modal-asana">
        <h4>${i + 1}. ${a.name}</h4>
        <p>${a.desc}</p>
        <div class="asana-meta">
          <span>⏱ ${a.duration}</span>
          <span>💚 ${a.benefits}</span>
        </div>
      </div>
    `).join('');

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Delegate click for condition buttons
  conditionsGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-condition]');
    if (btn) openModal(parseInt(btn.dataset.condition));
  });

  // ========== ROUTINE GENERATOR ==========

  const generateBtn = document.getElementById('generate-routine-btn');
  const routineResult = document.getElementById('routine-result');
  const routinePoses = document.getElementById('routine-poses');
  const routineQuote = document.getElementById('routine-quote');

  generateBtn.addEventListener('click', () => {
    // Shuffle and pick 5
    const shuffled = [...allPoses].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    routinePoses.innerHTML = selected.map((p, i) => `
      <div class="routine-pose" style="animation: fadeInPose 0.4s ease ${i * 0.1}s both;">
        <div class="pose-num">${i + 1}</div>
        <div class="pose-info">
          <div class="pose-name">${p.name}</div>
          <div class="pose-dur">⏱ ${p.duration}</div>
        </div>
      </div>
    `).join('');

    routineQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    routineResult.classList.remove('hidden');

    // Add animation keyframes if not already
    if (!document.getElementById('pose-anim-style')) {
      const style = document.createElement('style');
      style.id = 'pose-anim-style';
      style.textContent = `
        @keyframes fadeInPose {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `;
      document.head.appendChild(style);
    }
  });

  // ========== BMI CALCULATOR ==========

  const calcBmiBtn = document.getElementById('calc-bmi-btn');
  const bmiResult = document.getElementById('bmi-result');
  const bmiValue = document.getElementById('bmi-value');
  const bmiCategory = document.getElementById('bmi-category');
  const bmiSuggestion = document.getElementById('bmi-suggestion');

  calcBmiBtn.addEventListener('click', () => {
    const height = parseFloat(document.getElementById('bmi-height').value);
    const weight = parseFloat(document.getElementById('bmi-weight').value);

    if (!height || !weight || height <= 0 || weight <= 0) {
      alert('Please enter valid height and weight values.');
      return;
    }

    const heightM = height / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let category = '';
    let suggestion = '';
    let color = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      suggestion = '🍎 Focus on nourishing meals and gentle strength-building yoga like Surya Namaskar and Warrior poses.';
      color = '#6c9bcf';
    } else if (bmi < 25) {
      category = 'Normal Weight';
      suggestion = '🌿 Great job! Maintain your health with daily yoga, mindful eating, and good sleep.';
      color = '#7FB77E';
    } else if (bmi < 30) {
      category = 'Overweight';
      suggestion = '🧘 Time to add some active yoga flows! Surya Namaskar, Kapalbhati, and brisk walking can help.';
      color = '#daa520';
    } else {
      category = 'Obese';
      suggestion = '💛 Start with gentle movement — Chair Yoga, walking, and deep breathing. Every small step counts.';
      color = '#e17055';
    }

    bmiValue.textContent = bmi;
    bmiValue.style.color = color;
    bmiCategory.innerHTML = `<strong>Category:</strong> ${category}`;
    bmiSuggestion.textContent = suggestion;
    bmiResult.classList.remove('hidden');
  });

  // ========== TESTIMONIAL SLIDER ==========

  const track = document.getElementById('testimonial-track');
  const cards = track.querySelectorAll('.testimonial-card');
  const dotsContainer = document.getElementById('slider-dots');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  let currentSlide = 0;

  // Create dots
  cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(idx) {
    currentSlide = idx;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dotsContainer.querySelectorAll('.slider-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide === 0 ? cards.length - 1 : currentSlide - 1);
  });

  nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide === cards.length - 1 ? 0 : currentSlide + 1);
  });

  // Auto-slide every 5s
  let autoSlide = setInterval(() => {
    goToSlide(currentSlide === cards.length - 1 ? 0 : currentSlide + 1);
  }, 5000);

  // Pause on hover
  const sliderEl = document.getElementById('testimonial-slider');
  sliderEl.addEventListener('mouseenter', () => clearInterval(autoSlide));
  sliderEl.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      goToSlide(currentSlide === cards.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
  });

  // ========== CONTACT FORM VALIDATION ==========

  const contactForm = document.getElementById('contact-form');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const formSuccess = document.getElementById('form-success');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formSuccess.classList.add('hidden');

    if (!name) {
      nameError.textContent = 'Please enter your name.';
      valid = false;
    }

    if (!email) {
      emailError.textContent = 'Please enter your email.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    }

    if (!message) {
      messageError.textContent = 'Please enter a message.';
      valid = false;
    }

    if (valid) {
      formSuccess.classList.remove('hidden');
      contactForm.reset();
      setTimeout(() => formSuccess.classList.add('hidden'), 4000);
    }
  });

}); // end DOMContentLoaded
