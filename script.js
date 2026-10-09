/* ==========================================================================
   CyberShield - Animated Cybersecurity Platform Logic & Canvas Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Preloader Overlay (Matching Referral Site)
  initPreloader();

  // Custom Animated Cyber Mouse Follower Cursor
  initCyberCursor();

  // 3D Tilt Hover Effects on Cards
  initCard3DTilt();

  // Mobile drawer nav toggle
  initMobileNav();
  
  // Highlight active link based on current page
  highlightActiveNav();

  // Initialize Fixed Global Particle Canvas Background for Entire Website
  initGlobalCanvas();

  // Initialize Visual Radar Animation if element exists
  initRadarCanvas();
  
  // Initialize Interactive Features
  initThreatSimulator();
  initDomainAuditor();
  initSocTerminal();
  initPricingToggle();
  initScrollAnimations();
  initCounters();
  initModals();

  // Initialize 4 New Home Page Sections
  initIntelFeed();
  initIndustryTabs();
  initRoiCalc();
  initComplianceModal();

  // Initialize Leadership Profile Modal
  initLeadershipProfiles();

  // Initialize Contact Page Sections
  initEmergencyTiers();
  initOfficeHubs();
});

/* ==========================================
   15. Emergency Protocol Tier Matrix Handler
   ========================================== */
function initEmergencyTiers() {
  const tierBtns = document.querySelectorAll('.tier-btn');
  const nameEl = document.getElementById('tier-detail-name');
  const slaEl = document.getElementById('tier-detail-sla');
  const sevEl = document.getElementById('tier-detail-sev');
  const teamEl = document.getElementById('tier-detail-team');
  const descEl = document.getElementById('tier-detail-desc');
  const actionEl = document.getElementById('tier-detail-actions');

  if (!tierBtns.length || !nameEl) return;

  const tierData = {
    tier1: {
      name: "Tier 1: Active Breach & Ransomware Emergency",
      sla: "< 5 Mins Immediate Quarantine",
      sev: "P0 CRITICAL EMERGENCY",
      team: "Global SOC Red Team & Forensics Response Unit",
      desc: "Immediate active threat isolation protocol triggered upon detection of unauthorized admin access, cryptographic ransomware activity, or active exfiltration.",
      actions: [
        "Automatic VLAN network isolation and BGP null-routing",
        "Sub-millisecond memory dump capture & forensically clean snapshots",
        "Direct CISO war-room bridge initiation with dedicated SOC incident manager"
      ]
    },
    tier2: {
      name: "Tier 2: Volumetric DDoS & Core Outage",
      sla: "< 8 Mins Edge Scrubbing",
      sev: "P1 HIGH SEVERITY",
      team: "Anycast BGP Edge Routing & Traffic Scrubbing SOC",
      desc: "L3/L4/L7 DDoS attack mitigation utilizing CyberShield's 15.4 Tbps global Anycast scrubbing network.",
      actions: [
        "Dynamic BGP route rerouting to clean scrubbing PoPs",
        "AI-driven rate-limiting & challenge-response page deployment",
        "Continuous payload inspection and dynamic rule push to edge gateways"
      ]
    },
    tier3: {
      name: "Tier 3: Zero-Day Exploit & Vulnerability Exposure",
      sla: "< 30 Mins Virtual Patching",
      sev: "P2 ELEVATED RISKS",
      team: "Threat Intelligence & Vulnerability Engineering Lab",
      desc: "Rapid response protocol for unpatched zero-day vulnerabilities in enterprise applications or cloud infrastructure.",
      actions: [
        "Synthetic exploit sandbox execution and vulnerability confirmation",
        "Deploying WAF/eBPF virtual patch signatures across global cluster",
        "Detailed advisory delivery with remediation guidance"
      ]
    },
    tier4: {
      name: "Tier 4: Enterprise Audit & Advisory Request",
      sla: "< 2 Hours Advisory Consultation",
      sev: "P3 STANDARD ADVISORY",
      team: "CyberShield Governance & Compliance Advisory Team",
      desc: "Scheduled security assessments, penetration testing briefings, SOC 2 / ISO compliance reviews, and architecture audits.",
      actions: [
        "Assignment of lead enterprise security architect",
        "Pre-audit scope review and baseline posture evaluation",
        "Executive summary report delivery within 48 business hours"
      ]
    }
  };

  tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tierBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tierKey = btn.getAttribute('data-tier');
      const data = tierData[tierKey];
      if (!data) return;

      nameEl.textContent = data.name;
      slaEl.textContent = data.sla;
      sevEl.textContent = data.sev;
      teamEl.textContent = data.team;
      descEl.textContent = data.desc;

      if (actionEl) {
        actionEl.innerHTML = data.actions.map(act => `<li style="margin-bottom: 8px; font-size: 0.92rem; color: var(--text-muted);"><i class="fa-solid fa-square-check" style="color: var(--matrix-green); margin-right: 8px;"></i>${act}</li>`).join('');
      }
    });
  });
}

/* ==========================================
   16. Global SOC Office Hubs & Telemetry Handler
   ========================================== */
function initOfficeHubs() {
  const hubBtns = document.querySelectorAll('.hub-tab-btn');
  const hubTitle = document.getElementById('hub-panel-title');
  const hubBadge = document.getElementById('hub-panel-badge');
  const hubTime = document.getElementById('hub-panel-time');
  const hubPhone = document.getElementById('hub-panel-phone');
  const hubAddr = document.getElementById('hub-panel-addr');
  const hubPgp = document.getElementById('hub-panel-pgp');
  const hubLat = document.getElementById('hub-panel-lat');
  const hubCapacity = document.getElementById('hub-panel-cap');

  if (!hubBtns.length || !hubTitle) return;

  const hubData = {
    bangalore: {
      title: "Bangalore Global Command HQ",
      badge: "PRIMARY SOC COMMAND CENTER",
      time: "IST (UTC +5:30)",
      phone: "+91 80 4567 8900",
      addr: "Cyber Tech Park Phase II, Whitefield, Bangalore, KA - 560066",
      pgp: "4A8B 9C0D E1F2 3456 7890 1234 5678 9ABC DEF0 1122",
      lat: "0.012 ms (Sub-Millisecond)",
      cap: "5.2 Terabits/sec Local Scrubbing"
    },
    sf: {
      title: "San Francisco R&D & Threat Vault",
      badge: "AMERICAS THREAT LAB",
      time: "PST (UTC -8:00)",
      phone: "+1 (415) 890-4321",
      addr: "100 Montgomery St, Suite 2200, San Francisco, CA 94104",
      pgp: "9876 5432 10FE DCBA 9876 5432 10FE DCBA 8899",
      lat: "0.018 ms",
      cap: "4.8 Terabits/sec Local Scrubbing"
    },
    frankfurt: {
      title: "Frankfurt Sovereign Cyber Vault",
      badge: "EMEA SOVEREIGN CENTER",
      time: "CET (UTC +1:00)",
      phone: "+49 69 1234 5678",
      addr: "Mainzer Landstraße 180, 60327 Frankfurt am Main, Germany",
      pgp: "1122 3344 5566 7788 9900 AABB CCDD EEFF 3344",
      lat: "0.014 ms",
      cap: "3.5 Terabits/sec Local Scrubbing"
    },
    tokyo: {
      title: "Tokyo Edge Scrubbing & SOC Hub",
      badge: "APAC NORTH EDGE HUB",
      time: "JST (UTC +9:00)",
      phone: "+81 3 5555 0192",
      addr: "Roppongi Hills Mori Tower, Minato City, Tokyo 106-6108, Japan",
      pgp: "FFAA 9988 7766 5544 3322 1100 EEDD CCBB 5566",
      lat: "0.015 ms",
      cap: "1.9 Terabits/sec Local Scrubbing"
    }
  };

  hubBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      hubBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const hubKey = btn.getAttribute('data-hub');
      const data = hubData[hubKey];
      if (!data) return;

      hubTitle.textContent = data.title;
      if (hubBadge) hubBadge.textContent = data.badge;
      if (hubTime) hubTime.textContent = data.time;
      if (hubPhone) hubPhone.textContent = data.phone;
      if (hubAddr) hubAddr.textContent = data.addr;
      if (hubPgp) hubPgp.textContent = data.pgp;
      if (hubLat) hubLat.textContent = data.lat;
      if (hubCapacity) hubCapacity.textContent = data.cap;
    });
  });
}


/* ==========================================
   -1. Preloader Overlay Progress & Fadeout
   ========================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader-overlay');
  const barFill = document.getElementById('preloader-bar-fill');
  const percentLabel = document.getElementById('preloader-percent-label');

  if (!preloader || !barFill || !percentLabel) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 6;
    if (progress > 100) progress = 100;

    barFill.style.width = `${progress}%`;
    percentLabel.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 300);
    }
  }, 50);
}

/* ==========================================
   0. Custom Cyber Mouse Follower Cursor
   ========================================== */
function initCyberCursor() {
  if (window.innerWidth < 768) return;

  const cursor = document.createElement('div');
  cursor.className = 'cyber-cursor';

  const follower = document.createElement('div');
  follower.className = 'cyber-cursor-follower';

  document.body.appendChild(cursor);
  document.body.appendChild(follower);

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function renderFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    requestAnimationFrame(renderFollower);
  }
  renderFollower();

  // Expand follower on interactive element hover
  const interactiveEls = document.querySelectorAll('a, button, .solution-card, .metric-card, input, select');
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.style.width = '54px';
      follower.style.height = '54px';
      follower.style.borderColor = 'var(--matrix-green)';
      cursor.style.background = 'var(--matrix-green)';
    });
    el.addEventListener('mouseleave', () => {
      follower.style.width = '36px';
      follower.style.height = '36px';
      follower.style.borderColor = 'rgba(0, 243, 255, 0.5)';
      cursor.style.background = 'var(--primary-cyan)';
    });
  });
}

/* ==========================================
   0.1 3D Card Tilt Hover Effect
   ========================================== */
function initCard3DTilt() {
  const cards = document.querySelectorAll('.solution-card, .metric-card, .hero-visual-card, .contact-card, .auth-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ==========================================
   0.2 Mobile Drawer Nav Toggle
   ========================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navPanel = document.getElementById('mobile-nav-panel');
  const closeBtn = document.getElementById('mobile-nav-close');

  if (!toggleBtn || !navPanel) return;

  toggleBtn.addEventListener('click', () => {
    navPanel.classList.add('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      navPanel.classList.remove('active');
    });
  }
}

/* ==========================================
   0.3 Highlight Active Nav Link
   ========================================== */
function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ==========================================
   1. Global Interactive Particle Canvas (Whole Website Background)
   ========================================== */
function initGlobalCanvas() {
  let canvas = document.getElementById('global-bg-canvas');
  
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'global-bg-canvas';
    document.body.prepend(canvas);
  }

  let scanline = document.querySelector('.cyber-scanline');
  if (!scanline) {
    scanline = document.createElement('div');
    scanline.className = 'cyber-scanline';
    document.body.prepend(scanline);
  }

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 110;
  const maxDistance = 170;

  let mouse = { x: null, y: null, radius: 220 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 1.1;
      this.vy = (Math.random() - 0.5) * 1.1;
      this.radius = Math.random() * 2.8 + 1;
      this.color = Math.random() > 0.35 ? '#00f3ff' : '#00ff9d';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse collision repulsion
      if (mouse.x && mouse.y) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          let angle = Math.atan2(dy, dx);
          let force = (mouse.radius - dist) / mouse.radius;
          this.x -= Math.cos(angle) * force * 2.5;
          this.y -= Math.sin(angle) * force * 2.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          let alpha = 1 - dist / maxDistance;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 243, 255, ${alpha * 0.28})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================
   2. Radar Cyber Scanner Canvas Animation
   ========================================== */
function initRadarCanvas() {
  const canvas = document.getElementById('radar-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const size = 280;
  canvas.width = size;
  canvas.height = size;
  const center = size / 2;
  const maxRadius = center - 10;
  let angle = 0;

  const blips = [
    { r: 40, a: 0.8, color: '#ff2a5f', active: true },
    { r: 80, a: 2.4, color: '#00ff9d', active: true },
    { r: 110, a: 4.1, color: '#00f3ff', active: true },
    { r: 60, a: 5.2, color: '#ffb703', active: true }
  ];

  function animateRadar() {
    ctx.clearRect(0, 0, size, size);

    // Draw concentric radar rings
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.2)';
    ctx.lineWidth = 1;
    for (let r = 30; r <= maxRadius; r += 30) {
      ctx.beginPath();
      ctx.arc(center, center, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(center, 10);
    ctx.lineTo(center, size - 10);
    ctx.moveTo(10, center);
    ctx.lineTo(size - 10, center);
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.15)';
    ctx.stroke();

    // Radar Sweeping Cone
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, maxRadius, angle, angle + 0.4);
    ctx.closePath();
    const gradient = ctx.createRadialGradient(center, center, 0, center, center, maxRadius);
    gradient.addColorStop(0, 'rgba(0, 243, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 243, 255, 0.02)');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw threat blips
    blips.forEach(b => {
      let bx = center + b.r * Math.cos(b.a);
      let by = center + b.r * Math.sin(b.a);

      ctx.beginPath();
      ctx.arc(bx, by, 4, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = b.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    angle += 0.035;
    requestAnimationFrame(animateRadar);
  }
  animateRadar();
}

/* ==========================================
   3. Interactive Threat Simulator Engine
   ========================================== */
function initThreatSimulator() {
  const simBtns = document.querySelectorAll('.sim-btn');
  const simTitle = document.getElementById('sim-threat-name');
  const simGaugeScore = document.getElementById('sim-gauge-score');
  const simGaugeCircle = document.getElementById('sim-gauge-circle');
  const simLogContainer = document.getElementById('sim-logs');

  if (!simLogContainer) return;

  const threatData = {
    ddos: {
      name: "DDoS Mitigation Layer",
      score: "99.9%",
      color: "#00ff9d",
      logs: [
        "[00:00:01] ALERT: Volumetric Syn-Flood attack detected (1.4 Terabits/sec).",
        "[00:00:02] SOC AI: Engaging Automated BGP Anycast scrubbing nodes.",
        "[00:00:03] NETWORK: 99.8% malicious traffic filtered at edge PoP.",
        "[00:00:04] SUCCESS: Target server load stabilized at 12% CPU."
      ]
    },
    ransomware: {
      name: "Ransomware & Behavioral Shield",
      score: "100%",
      color: "#00f3ff",
      logs: [
        "[00:00:01] DETECT: Cryptographic file modification attempt on Host-302.",
        "[00:00:02] BEHAVIORAL: Unrecognized process `vssadmin.exe delete shadows` blocked.",
        "[00:00:03] ISOLATION: Host-302 quarantined from local subnet instantly.",
        "[00:00:04] SUCCESS: Zero data loss. Automatic shadow volume rollback completed."
      ]
    },
    zero_day: {
      name: "Zero-Day Exploit Heuristics",
      score: "98.7%",
      color: "#a855f7",
      logs: [
        "[00:00:01] HEURISTICS: Abnormal memory buffer overflow in Apache service.",
        "[00:00:02] DEEP INSPECTION: Sandboxing payload in AI isolation chamber.",
        "[00:00:03] VULN INTELLIGENCE: Patch hot-fix deployed to all global edge gateways.",
        "[00:00:04] SUCCESS: Unknown exploit vector neutralized in <0.4ms."
      ]
    },
    phishing: {
      name: "Identity & Credential Guard",
      score: "99.4%",
      color: "#ffb703",
      logs: [
        "[00:00:01] EMAIL GUARD: Spoofed Executive domain login link flagged.",
        "[00:00:02] FIDO2 ENFORCE: Step-up WebAuthn hardware key required.",
        "[00:00:03] SESSION: Unauthorized access attempt tokens revoked automatically.",
        "[00:00:04] SUCCESS: Zero accounts compromised across 45,000 active users."
      ]
    }
  };

  simBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      simBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.getAttribute('data-threat');
      const data = threatData[key];
      if (!data) return;

      if (simTitle) simTitle.textContent = data.name;
      if (simGaugeScore) {
        simGaugeScore.textContent = data.score;
        simGaugeScore.style.color = data.color;
      }

      simLogContainer.innerHTML = '';
      data.logs.forEach((logText, idx) => {
        setTimeout(() => {
          const div = document.createElement('div');
          div.className = 'log-line';
          if (logText.includes('ALERT') || logText.includes('DETECT')) {
            div.className += ' log-warn';
          } else if (logText.includes('SUCCESS')) {
            div.className += ' log-success';
          } else {
            div.className += ' log-info';
          }
          div.textContent = logText;
          simLogContainer.appendChild(div);
          simLogContainer.scrollTop = simLogContainer.scrollHeight;
        }, idx * 350);
      });
    });
  });
}

/* ==========================================
   4. Domain Security Scanner Tool Engine
   ========================================== */
function initDomainAuditor() {
  const form = document.getElementById('domain-scan-form');
  const domainInput = document.getElementById('domain-input');
  const emailInput = document.getElementById('email-input');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput ? emailInput.value.trim() : '';
    
    if (!email) {
      alert('Gmail / Work Email address is mandatory to run instant scan!');
      if (emailInput) emailInput.focus();
      return;
    }

    // Redirect to 404 page upon filling mandatory email and running instant scan
    window.location.href = '404.html';
  });
}

/* ==========================================
   5. Interactive SOC Live Terminal
   ========================================== */
function initSocTerminal() {
  const termBody = document.getElementById('soc-terminal-output');
  const cmdInput = document.getElementById('soc-cmd-input');
  if (!cmdInput || !termBody) return;

  cmdInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const cmd = cmdInput.value.trim();
      cmdInput.value = '';
      if (!cmd) return;

      appendTermLine(`root@cybershield-soc:~# ${cmd}`, 'log-info');
      handleCommand(cmd.toLowerCase());
    }
  });

  function appendTermLine(text, className = '') {
    const line = document.createElement('div');
    line.className = `log-line ${className}`;
    line.textContent = text;
    termBody.appendChild(line);
    termBody.scrollTop = termBody.scrollHeight;
  }

  function handleCommand(cmd) {
    if (cmd === 'clear') {
      termBody.innerHTML = '';
    } else if (cmd === 'help') {
      appendTermLine('Available SOC Commands:', 'log-success');
      appendTermLine('  /scan        - Initiate full infrastructure telemetry check');
      appendTermLine('  /shield      - Display active DDoS and AI Firewall status');
      appendTermLine('  /threats     - List currently blocked threat vectors');
      appendTermLine('  /clear       - Clear terminal logs');
    } else if (cmd === '/scan') {
      appendTermLine('[SYSTEM] Initiating global telemetry node scan...', 'log-warn');
      setTimeout(() => appendTermLine('[OK] 14,890 Edge Nodes Verified - 100% Operational', 'log-success'), 600);
    } else if (cmd === '/shield') {
      appendTermLine('[STATUS] Autonomous Shield: ACTIVE', 'log-success');
      appendTermLine('[FIREWALL] Quantum BGP Filters: ENFORCED', 'log-info');
    } else if (cmd === '/threats') {
      appendTermLine('[THREAT FEED] 12,409 brute-force attempts blocked in last 60s', 'log-warn');
    } else {
      appendTermLine(`Command not recognized: '${cmd}'. Type 'help' for options.`, 'log-alert');
    }
  }
}

/* ==========================================
   6. Pricing Switcher Logic
   ========================================== */
function initPricingToggle() {
  const toggle = document.getElementById('billing-toggle');
  const starterPrice = document.getElementById('price-starter');
  const proPrice = document.getElementById('price-pro');
  const enterprisePrice = document.getElementById('price-enterprise');

  if (!toggle) return;

  let isAnnual = false;
  toggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    toggle.classList.toggle('active', isAnnual);

    if (isAnnual) {
      if (starterPrice) starterPrice.textContent = '$39';
      if (proPrice) proPrice.textContent = '$149';
      if (enterprisePrice) enterprisePrice.textContent = '$499';
    } else {
      if (starterPrice) starterPrice.textContent = '$49';
      if (proPrice) proPrice.textContent = '$189';
      if (enterprisePrice) enterprisePrice.textContent = '$599';
    }
  });
}

/* ==========================================
   7. Scroll Animations & Reveal Effects
   ========================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/* ==========================================
   8. Counter Animations
   ========================================== */
function initCounters() {
  const counterEls = document.querySelectorAll('.counter-val');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        const duration = 1500;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
          current += step;
          if (current < target) {
            entry.target.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(update);
          } else {
            entry.target.textContent = target.toLocaleString();
          }
        };
        update();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => observer.observe(el));
}

/* ==========================================
   9. Modal Controls
   ========================================== */
function initModals() {
  const modal = document.getElementById('expert-modal');
  const triggers = document.querySelectorAll('.trigger-modal');
  const closeBtn = document.querySelector('.modal-close');

  if (!modal) return;

  triggers.forEach(t => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

/* ==========================================
   10. Global Threat Intelligence Feed Filter
   ========================================== */
function initIntelFeed() {
  const filterBtns = document.querySelectorAll('.intel-filter-btn');
  const tableRows = document.querySelectorAll('.intel-table tbody tr');

  if (!filterBtns.length || !tableRows.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      tableRows.forEach(row => {
        const type = row.getAttribute('data-type');
        if (filter === 'all' || type === filter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================
   11. Industry Use-Case Tabs
   ========================================== */
function initIndustryTabs() {
  const tabBtns = document.querySelectorAll('.industry-tab-btn');
  const panels = document.querySelectorAll('.industry-panel');

  if (!tabBtns.length || !panels.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPanel = document.getElementById(`industry-${targetId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ==========================================
   12. Interactive Enterprise ROI Calculator
   ========================================== */
function initRoiCalc() {
  const endpointsSlider = document.getElementById('roi-endpoints-slider');
  const endpointsLabel = document.getElementById('roi-endpoints-val');
  const cloudSlider = document.getElementById('roi-cloud-slider');
  const cloudLabel = document.getElementById('roi-cloud-val');
  const priceDisplay = document.getElementById('roi-monthly-price');
  const savingsDisplay = document.getElementById('roi-annual-savings');

  if (!endpointsSlider || !cloudSlider || !priceDisplay || !savingsDisplay) return;

  function updateRoi() {
    const endpoints = parseInt(endpointsSlider.value, 10);
    const cloud = parseInt(cloudSlider.value, 10);

    endpointsLabel.textContent = endpoints.toLocaleString();
    cloudLabel.textContent = cloud.toLocaleString();

    // Calculated pricing formula
    const baseCost = 99;
    const endpointCost = endpoints * 3.5;
    const cloudCost = cloud * 25;
    const monthlyTotal = Math.round(baseCost + endpointCost + cloudCost);
    const annualSavings = Math.round(monthlyTotal * 12 * 0.20);

    priceDisplay.textContent = `$${monthlyTotal.toLocaleString()}`;
    savingsDisplay.textContent = `Save $${annualSavings.toLocaleString()}/yr with Annual Plan`;
  }

  endpointsSlider.addEventListener('input', updateRoi);
  cloudSlider.addEventListener('input', updateRoi);
  updateRoi();
}

/* ==========================================
   13. Compliance Matrix Detail Modal
   ========================================== */
function initComplianceModal() {
  const cards = document.querySelectorAll('.compliance-card');
  const modal = document.getElementById('expert-modal');

  if (!cards.length || !modal) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3').textContent;
      const desc = card.querySelector('p').textContent;
      const modalBody = modal.querySelector('.modal-content');
      
      const modalTitle = modalBody.querySelector('h3') || modalBody.querySelector('h2');
      if (modalTitle) modalTitle.textContent = `${title} Verification`;
      
      modal.classList.add('active');
    });
  });
}

/* ==========================================
   14. Executive Leadership Profile Modal
   ========================================== */
function initLeadershipProfiles() {
  const modal = document.getElementById('leader-modal');
  const modalClose = document.getElementById('leader-modal-close');
  const modalBtnClose = document.getElementById('modal-leader-close-btn');
  const teamCards = document.querySelectorAll('.team-card[data-leader], .view-profile-btn[data-leader]');

  if (!modal || !teamCards.length) return;

  const leaderData = {
    vikram: {
      name: 'Dr. Vikram Sharma',
      role: 'Chief Executive Officer & Co-Founder',
      img: 'assets/about-soc.webp',
      bio: 'Former Defense Cyber Cell Lead with over 18 years of national threat intelligence and autonomous SOC engineering experience. Dr. Sharma pioneered sub-millisecond AI threat neutralization frameworks and scaled CyberShield into a global enterprise security leader protecting over 14 Billion daily telemetry events.',
      edu: 'Ph.D. in Computer Science & Quantum Cryptography, IISc Bangalore / MIT',
      patents: 'Autonomous Heuristic Sandboxing in Sub-Millisecond Windows (US Patent #11,849,204), Zero-Trust Protocol Standards for Quantum Systems',
      certs: 'CISSP, CISM, OSCE (Offensive Security Certified Expert), CISO Advisory Board Member'
    },
    elena: {
      name: 'Elena Rostova',
      role: 'Chief Technology Officer',
      img: 'assets/research-advisory.webp',
      bio: 'Pioneer in deep neural network heuristic sandboxing and zero-day threat prediction algorithms. Former Lead AI Architect at Global Cyber Labs, Elena leads CyberShield\'s R&D division developing autonomous SOAR playbooks and predictive attack vector models.',
      edu: 'M.S. in Artificial Intelligence & Machine Learning, ETH Zürich',
      patents: 'Deep Recurrent Neural Networks for Real-Time Packet Payload Dissection (EP Patent #3,948,102)',
      certs: 'GREM, GXPN, Certified Information Systems Auditor (CISA)'
    },
    marcus: {
      name: 'Marcus Vance',
      role: 'Chief Information Security Officer',
      img: 'assets/research-lab.webp',
      bio: '15+ years engineering high-frequency banking PCI-DSS 4.0 hardware security modules (HSM) and zero-trust microsegmentation. Marcus oversees platform compliance across SOC 2 Type II, ISO 27001, and HIPAA regulatory frameworks.',
      edu: 'M.S. in Cybersecurity Engineering, Stanford University',
      patents: 'Hardware-Enforced Microsegmentation in Multi-Tenant Financial Gateways (US Patent #10,928,341)',
      certs: 'CISSP-ISSAP, CCSP, CRISC, Financial Sector Cyber Council'
    },
    sarah: {
      name: 'Sarah Lin',
      role: 'Head of Incident Response & Digital Forensics',
      img: 'assets/hero-cyber.webp',
      bio: 'Directs global 24/7 SOC incident response teams with a sub-15 minute ransomware containment SLA. Veteran digital forensics investigator who has led response teams across 100+ high-profile enterprise breach incidents.',
      edu: 'B.S. in Computer Engineering, National University of Singapore',
      patents: 'Automated Memory Forensics & Ransomware Key Recovery in Microseconds (SG Patent #2023/04812)',
      certs: 'GCFA, GCFE, GIAC Certified Incident Handler (GCIH), CMMC Assessor'
    }
  };

  function openLeaderModal(key) {
    const data = leaderData[key];
    if (!data) return;

    document.getElementById('modal-leader-img').src = data.img;
    document.getElementById('modal-leader-name').textContent = data.name;
    document.getElementById('modal-leader-role').textContent = data.role;
    document.getElementById('modal-leader-bio').textContent = data.bio;
    document.getElementById('modal-leader-edu').textContent = data.edu;
    document.getElementById('modal-leader-patents').textContent = data.patents;
    document.getElementById('modal-leader-certs').textContent = data.certs;

    modal.classList.add('active');
  }

  teamCards.forEach(el => {
    el.addEventListener('click', (e) => {
      // Don't trigger modal if social icon links were clicked
      if (e.target.closest('.team-socials')) return;
      
      const key = el.getAttribute('data-leader');
      if (key) openLeaderModal(key);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modalBtnClose) {
    modalBtnClose.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

/* ==========================================
   17. User & Admin Dashboard Tab Switcher & Mobile Drawer Toggle
   ========================================== */
function toggleDashSidebar(forceState) {
  const sidebar = document.querySelector('.dash-sidebar');
  if (!sidebar) return;
  if (typeof forceState === 'boolean') {
    sidebar.classList.toggle('active', forceState);
  } else {
    sidebar.classList.toggle('active');
  }
}

// Global click outside listener to close dashboard sidebar drawer on mobile
document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.dash-sidebar');
  const toggleBtn = e.target.closest('.dash-mobile-toggle');
  
  if (sidebar && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !toggleBtn) {
    sidebar.classList.remove('active');
  }
});

function switchUserTab(tabId, btnElement) {
  const views = document.querySelectorAll('.user-tab-view');
  views.forEach(v => v.style.display = 'none');

  const targetView = document.getElementById(tabId);
  if (targetView) targetView.style.display = 'block';

  const navItems = document.querySelectorAll('.dash-sidebar-nav .dash-nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    const defaultBtn = document.querySelector(`.dash-sidebar-nav [onclick*="${tabId}"]`);
    if (defaultBtn) defaultBtn.classList.add('active');
  }

  if (window.innerWidth <= 992) {
    toggleDashSidebar(false);
  }
}

function switchAdminTab(tabId, btnElement) {
  const views = document.querySelectorAll('.admin-tab-view');
  views.forEach(v => v.style.display = 'none');

  const targetView = document.getElementById(tabId);
  if (targetView) targetView.style.display = 'block';

  const navItems = document.querySelectorAll('.dash-sidebar-nav .dash-nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    const defaultBtn = document.querySelector(`.dash-sidebar-nav [onclick*="${tabId}"]`);
    if (defaultBtn) defaultBtn.classList.add('active');
  }

  if (window.innerWidth <= 992) {
    toggleDashSidebar(false);
  }
}



