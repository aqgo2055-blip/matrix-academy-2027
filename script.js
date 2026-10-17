/* ==========================================================================
   أكاديمية ميتركس للتكنولوجيا والإبداع - المحرك التفاعلي البرمجي الشامل (2027)
   النسخة السحابية المعتمدة - متصلة بقاعدة بيانات Firebase سحابياً
   ========================================================================== */

// استيراد أدوات فايربيس من السحابة الرسمية
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

// مفاتيح التكوين السرية الخاصة بمشروعك على Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5HsrVU0PDNgUiiZGkCPMvT_iorqTOlCs",
  authDomain: "matrix2027-af3cb.firebaseapp.com",
  projectId: "matrix2027-af3cb",
  storageBucket: "matrix2027-af3cb.firebasestorage.app",
  messagingSenderId: "886514993898",
  appId: "1:886514993898:web:8a6f39bf95a68474b4e593"
};

// تهيئة الاتصال بـ Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
    initYearAutoFix();
    initDrawerMenu();
    initButtonRipple();
    initAboutAccordion();
    initFaqAccordion();
    initCourseAccordions();
    initCourseCountdowns();
    initCurrencySwitcher();
    initTrackQuiz();
    initShareSystem();
    initQuickSearchEngine();
    initBackToTop();
    initOfficialChannelsModals();
    initBookingSystem();
    initSupportMultiLevel();
    initCertificateVerification();
    checkUrlForDirectCertificate(); 
});

// 1. تثبيت سنة 2027 الصريحة في الفوتر برمجياً
function initYearAutoFix() {
    const yearElem = document.getElementById('yearVal');
    if (yearElem) {
        yearElem.innerText = '2027';
    }
}

// 2. تأثير تموج الأزرار التفاعلي عند اللمس (Ripple Effect)
function initButtonRipple() {
    const rippleElements = document.querySelectorAll('.btn, .btn-enroll, .drawer-item, .comm-card, .btn-action-book, .btn-quiz-trigger, .quiz-option-btn, .btn-share-app, .btn-diploma-action');
    rippleElements.forEach(element => {
        element.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const circle = document.createElement('span');
            const diameter = Math.max(rect.width, rect.height);
            const radius = diameter / 2;
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - rect.left - radius}px`;
            circle.style.top = `${e.clientY - rect.top - radius}px`;
            circle.classList.add('ripple-circle');
            const existingRipple = this.querySelector('.ripple-circle');
            if (existingRipple) existingRipple.remove();
            this.appendChild(circle);
        });
    });
}

// 3. التحكم بالقائمة الجانبية الفاخرة (Drawer Menu)
function initDrawerMenu() {
    const openBtn = document.getElementById('openDrawerBtn');
    const closeBtn = document.getElementById('closeDrawerBtn');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerLinks = document.querySelectorAll('.drawer-item');
    if (!openBtn || !drawerOverlay) return;
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeDrawer();
        });
    }
    drawerOverlay.addEventListener('click', (e) => {
        if (e.target === drawerOverlay) closeDrawer();
    });
    drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
    function closeDrawer() {
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// 4. محول ومحدد العملات اللحظي لرسوم الدورات
function initCurrencySwitcher() {
    const currButtons = document.querySelectorAll('.currency-btn');
    const priceElements = document.querySelectorAll('.price-val');
    currButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const selectedCurr = btn.getAttribute('data-curr') || 'USD';
            priceElements.forEach(elem => {
                let newPrice = elem.getAttribute('data-usd');
                if (selectedCurr === 'YER') newPrice = elem.getAttribute('data-yer');
                else if (selectedCurr === 'SAR') newPrice = elem.getAttribute('data-sar');
                elem.innerText = newPrice;
            });
        });
    });
}

// 5. أداة المستشار الذكي لتحديد المسار
function initTrackQuiz() {
    const openBtn = document.getElementById('openQuizModal');
    const modal = document.getElementById('quizModal');
    const closeBtn = document.getElementById('closeQuizModal');
    const questionText = document.getElementById('quizQuestionText');
    const optionsGrid = document.getElementById('quizOptionsGrid');
    const stepLabel = document.getElementById('quizStepLabel');
    const progressFill = document.getElementById('quizProgressFill');
    const quizContent = document.getElementById('quizContent');
    const resultView = document.getElementById('quizResultView');
    const resultTitle = document.getElementById('resultTrackTitle');
    const resultDesc = document.getElementById('resultTrackDesc');
    const resultScore = document.getElementById('resultMatchScore');
    const btnGoToTrack = document.getElementById('btnGoToMatchedTrack');
    if (!openBtn || !modal) return;
    const questions = [
        { q: "1. ما هو مجالك التدريبي المستهدف الذي تبحث عنه حالياً؟", options: [{ text: "تأسيس واحتراف مهارات اللغة الإنجليزية والنطق والقواعد", weight: "english" }, { text: "برمجة وبناء مواقع الويب الحديثة وتوظيف أدوات الذكاء الاصطناعي", weight: "web" }, { text: "أرغب في اكتساب المهارات التقنية والتخاطبية معاً", weight: "both" }] },
        { q: "2. ما هو الجهاز الرئيسي المتوفر لديك للتطبيق والتعلم؟", options: [{ text: "الهاتف الذكي فقط (متابعة المحاضرات والواجبات اليومية)", weight: "english" }, { text: "كمبيوتر أو لابتوب قياسي لتطبيق الأكواد وإدارة GitHub", weight: "web" }, { text: "أستخدم الهاتف والحاسوب بمرونة", weight: "both" }] },
        { q: "3. ما هو النمط التعليمي الأكثر جذباً لاهتمامك؟", options: [{ text: "تطوير المفردات اليومية ومحادثات تفاعلية ونطق سليم", weight: "english" }, { text: "كتابة سورس كود، حل أخطاء الأكواد (Debugging)، ونشر المشاريع الحية", weight: "web" }, { text: "الحصول على شهادة معتمدة مع متابعة وإشراف مباشر من المدربين", weight: "both" }] },
        { q: "4. ما هو الوقت المتاح لديك للدراسة أسبوعياً؟", options: [{ text: "حل تمارين وواجبات يومية مستمرة مع مدرب المتابعة والتصحيح", weight: "english" }, { text: "تطبيق مشاريع أسبوعية مكثفة وبناء معرض أعمال برمجية (Portfolio)", weight: "web" }, { text: "ساعة إلى ساعتين يومياً من التطبيق العملي", weight: "both" }] },
        { q: "5. ما هو هدفك الاستراتيجي الرئيسي بعد اجتياز البرنامج؟", options: [{ text: "التخاطب بطلاقة وكسر حاجز الخوف في اللغة الإنجليزية", weight: "english" }, { text: "احتراف رفع المواقع على السيرفرات السحابية والعمل الحر كمطور ويب", weight: "web" }, { text: "تطوير مهاراتي الرقمية ومواكبة متطلبات سوق العمل لعام 2027", weight: "both" }] },
        { q: "6. ما هي الميزة التدريبية التي تفضلها في البداية؟", options: [{ text: "حضور كامل ومحتوى مجاني 100% مع خيار الشهادة المعتمدة", weight: "english" }, { text: "تجربة أول 3 أيام مجانية بالكامل ومفتوحة لاختبار جودة التدريب", weight: "web" }, { text: "مجموعات تفاعلية مغلقة ونقاش مباشر مع كبار المدربين", weight: "both" }] }
    ];
    let currentStep = 0;
    let scores = { english: 0, web: 0 };
    let matchedCourseName = '';
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        resetQuiz();
    });
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    function resetQuiz() {
        currentStep = 0;
        scores = { english: 0, web: 0 };
        quizContent.style.display = 'block';
        resultView.style.display = 'none';
        renderQuestion();
    }
    function renderQuestion() {
        const item = questions[currentStep];
        questionText.innerText = item.q;
        stepLabel.innerText = `السؤال ${currentStep + 1} من ${questions.length}`;
        progressFill.style.width = `${((currentStep + 1) / questions.length) * 100}%`;
        optionsGrid.innerHTML = '';
        item.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.innerHTML = `<span>${opt.text}</span><i class="fas fa-chevron-left"></i>`;
            btn.addEventListener('click', () => handleOptionClick(opt.weight));
            optionsGrid.appendChild(btn);
        });
    }
    function handleOptionClick(weight) {
        if (weight === 'english') scores.english += 2;
        else if (weight === 'web') scores.web += 2;
        else { scores.english += 1; scores.web += 1; }
        currentStep++;
        if (currentStep < questions.length) renderQuestion();
        else showDiagnosticResult();
    }
    function showDiagnosticResult() {
        quizContent.style.display = 'none';
        resultView.style.display = 'block';
        if (scores.web >= scores.english) {
            matchedCourseName = "بناء وتطوير مواقع الويب بالذكاء الاصطناعي";
            resultTitle.innerText = "دورة بناء وتطوير مواقع الويب المتقدمة بالذكاء الاصطناعي";
            resultDesc.innerText = "بناءً على اهتمامك بالتقنية وبناء المشاريع البرمجية واحتراف GitHub ونشر المواقع الحية، هذا المسار سينقلك لمستوى احترافي عالٍ.";
            resultScore.innerText = "نسبة التوافق: 96% 💻";
        } else {
            matchedCourseName = "دورة اللغة الإنجليزية المتكاملة";
            resultTitle.innerText = "دورة اللغة الإنجليزية المتكاملة (Foundations & Grammar)";
            resultDesc.innerText = "بناءً على رغبتك في التأسيس اللغوي السليم والمتابعة اليومية مع الكادر المتفرغ، هذا البرنامج سيصقل مهاراتك التخاطبية والنحوية من الصفر.";
            resultScore.innerText = "نسبة التوافق: 95% 📘";
        }
    }
    if (btnGoToTrack) {
        btnGoToTrack.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.style.overflow = '';
            window.location.hash = '#tracks';
            setTimeout(() => {
                const bookBtn = Array.from(document.querySelectorAll('.open-booking-btn')).find(b => b.getAttribute('data-course') === matchedCourseName);
                if (bookBtn) bookBtn.click();
            }, 300);
        });
    }
}

// 6. نظام مشاركة المنصة الفاخر
function initShareSystem() {
    const openBtn = document.getElementById('openShareModal');
    const modal = document.getElementById('shareModal');
    const closeBtn = document.getElementById('closeShareModal');
    const shareWaBtn = document.getElementById('shareWhatsappBtn');
    const shareTgBtn = document.getElementById('shareTelegramBtn');
    const copyBtn = document.getElementById('copyShareLinkBtn');
    const alertBox = document.getElementById('copyAlertMsg');
    if (!openBtn || !modal) return;
    const promoMessage = `🚀 بوابتك نحو احتراف التقنيات واللغات ومواكبة الذكاء الاصطناعي لعام 2027!\nانضم الآن إلى منصة أڪاديمية ميترڪس للتڪنولوجـيـا والإبـداع:\n${window.location.href}`;
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.style.overflow = '';
            if (alertBox) alertBox.innerText = '';
        });
    }
    if (shareWaBtn) shareWaBtn.href = `https://wa.me/?text=${encodeURIComponent(promoMessage)}`;
    if (shareTgBtn) shareTgBtn.href = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('🚀 انضم الآن إلى منصة أڪاديمية ميترڪس للتڪنولوجـيـا والإبـداع 2027')}`;
    if (copyBtn) {
        copyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(promoMessage).then(() => {
                if (alertBox) {
                    alertBox.innerHTML = '<i class="fas fa-check-circle"></i> تم نسخ الرابط والرسالة الترويجية إلى الحافظة بنجاح!';
                    setTimeout(() => { alertBox.innerHTML = ''; }, 3000);
                }
            });
        });
    }
}

// 7 & 8 & 9. الأكورديونات والدورات
function initAboutAccordion() {
    const headers = document.querySelectorAll('#about .accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const currentBody = currentItem.querySelector('.accordion-body');
            const isActive = currentItem.classList.contains('active');
            document.querySelectorAll('#about .accordion-item').forEach(item => {
                item.classList.remove('active');
                const body = item.querySelector('.accordion-body');
                if (body) body.style.maxHeight = null;
            });
            if (!isActive && currentBody) {
                currentItem.classList.add('active');
                currentBody.style.maxHeight = currentBody.scrollHeight + "px";
            }
        });
    });
}

function initFaqAccordion() {
    const faqHeaders = document.querySelectorAll('#faq .accordion-header');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const currentBody = currentItem.querySelector('.accordion-body');
            const isActive = currentItem.classList.contains('active');
            document.querySelectorAll('#faq .accordion-item').forEach(item => {
                item.classList.remove('active');
                const body = item.querySelector('.accordion-body');
                if (body) body.style.maxHeight = null;
            });
            if (!isActive && currentBody) {
                currentItem.classList.add('active');
                currentBody.style.maxHeight = currentBody.scrollHeight + "px";
            }
        });
    });
}

function initCourseAccordions() {
    const dropdownBtns = document.querySelectorAll('.btn-course-dropdown');
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = btn.closest('.course-accordion');
            if (!parent) return;
            const body = parent.querySelector('.course-dropdown-body');
            const isActive = parent.classList.contains('active');
            if (isActive) {
                parent.classList.remove('active');
                if (body) body.style.maxHeight = null;
            } else {
                parent.classList.add('active');
                if (body) body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
}

// 10. العداد التنازلي
function initCourseCountdowns() {
    const countdowns = document.querySelectorAll('.course-countdown');
    countdowns.forEach(item => {
        let totalSeconds = (parseInt(item.getAttribute('data-days')) || 4) * 86400 + (parseInt(item.getAttribute('data-hours')) || 12) * 3600;
        const daysElem = item.querySelector('.days-val');
        const hoursElem = item.querySelector('.hours-val');
        const minsElem = item.querySelector('.mins-val');
        function updateTimer() {
            if (totalSeconds <= 0) {
                item.innerHTML = '<span style="color: #ef4444; font-weight: 700; font-size: 0.88rem;"><i class="fas fa-exclamation-triangle"></i> انتهت فترة الحجز لهذه الدفعة</span>';
                return;
            }
            const d = Math.floor(totalSeconds / 86400);
            const h = Math.floor((totalSeconds % 86400) / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            if (daysElem) daysElem.innerText = String(d).padStart(2, '0');
            if (hoursElem) hoursElem.innerText = String(h).padStart(2, '0');
            if (minsElem) minsElem.innerText = String(m).padStart(2, '0');
            totalSeconds--;
        }
        if (daysElem && hoursElem && minsElem) {
            updateTimer();
            setInterval(updateTimer, 1000);
        }
    });
}

// 11. محرك البحث السريع
function initQuickSearchEngine() {
    const openBtn = document.getElementById('openSearchBtn');
    const modal = document.getElementById('searchModal');
    const closeBtn = document.getElementById('closeSearchModal');
    const input = document.getElementById('quickSearchInput');
    const resultsBox = document.getElementById('searchResultsBox');
    if (!openBtn || !modal || !input || !resultsBox) return;
    const searchIndex = [
        { title: 'دورة اللغة الإنجليزية المتكاملة (Foundations & Grammar)', cat: 'المسارات الحالية', link: '#tracks' },
        { title: 'بناء وتطوير مواقع الويب المتقدمة بالذكاء الاصطناعي', cat: 'المسارات القادمة', link: '#tracks' },
        { title: 'جدول المقارنة بين المسارات التدريبية', cat: 'المقارنات التكتيكية', link: '#comparison' },
        { title: 'المستشار الذكي لتحديد مسارك التدريبي', cat: 'أدوات المنصة', link: '#tracks' },
        { title: 'المدير الأول: إدريس الإدريسي (مدير ومهندس الأكاديمية)', cat: 'القيادة والإشراف', link: '#about' },
        { title: 'المدير الثاني: صقر المعلوماتية (الريد تيم وتطوير الويب)', cat: 'القيادة والتدريب', link: '#about' },
        { title: 'نظام فحص وتوثيق الشهادات الرقمية المعتمدة', cat: 'الشهادات والاعتمادات', link: '#verifySection' },
        { title: 'قنواتنا الرسمية المعتمدة على التلغرام', cat: 'مجتمعات الأكاديمية', link: '#community' },
        { title: 'قنواتنا الرسمية المعتمدة على الواتساب', cat: 'مجتمعات الأكاديمية', link: '#community' },
        { title: 'الأسئلة الشائعة والأجهزة والتصحيح اليومي', cat: 'الأسئلة الشائعة', link: '#faq' }
    ];
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => input.focus(), 150);
    });
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.style.overflow = '';
            input.value = '';
            renderResults([]);
        });
    }
    input.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
            resultsBox.innerHTML = '<div class="search-hint"><i class="fas fa-keyboard"></i> اكتب كلمة البحث للانتقال المباشر لأي قسم...</div>';
            return;
        }
        const filtered = searchIndex.filter(item => item.title.toLowerCase().includes(query) || item.cat.toLowerCase().includes(query));
        renderResults(filtered);
    });
    function renderResults(list) {
        if (list.length === 0) {
            resultsBox.innerHTML = '<div class="search-hint"><i class="fas fa-search-minus"></i> لا توجد نتائج مطابقة لبحثك</div>';
            return;
        }
        resultsBox.innerHTML = list.map(item => `
            <a href="${item.link}" class="search-result-item" onclick="document.getElementById('searchModal').classList.remove('active'); document.body.style.overflow='';">
                <div>
                    <strong>${item.title}</strong>
                    <small>${item.cat}</small>
                </div>
                <i class="fas fa-arrow-left"></i>
            </a>
        `).join('');
    }
}

// 12. زر الصعود للأعلى
function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) btn.classList.add('show');
        else btn.classList.remove('show');
    });
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 13. نوافذ القنوات الرسمية
function initOfficialChannelsModals() {
    const tgModal = document.getElementById('tgChannelsModal');
    const closeTgBtn = document.getElementById('closeTgModal');
    const tgTriggers = [document.getElementById('openTelegramModal'), document.querySelector('#openTelegramModal .btn-card-action')];
    tgTriggers.forEach(trigger => {
        if (trigger && tgModal) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                tgModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    });
    if (closeTgBtn && tgModal) {
        closeTgBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            tgModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    const waModal = document.getElementById('waChannelsModal');
    const closeWaBtn = document.getElementById('closeWaModal');
    const waTriggers = [document.getElementById('openWhatsappModal'), document.querySelector('#openWhatsappModal .btn-card-action')];
    waTriggers.forEach(trigger => {
        if (trigger && waModal) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                waModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    });
    if (closeWaBtn && waModal) {
        closeWaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            waModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

// 14. نظام حجز المقاعد السريع
function initBookingSystem() {
    const modal = document.getElementById('bookingModal');
    const closeBtn = document.getElementById('closeBooking');
    const openBtns = document.querySelectorAll('.open-booking-btn');
    const modalTitle = document.getElementById('modalCourseTitle');
    const traineeNameInput = document.getElementById('traineeName');
    const traineeContactInput = document.getElementById('traineeContact');
    const btnBookWhatsapp = document.getElementById('btnBookWhatsapp');
    const btnBookTelegram = document.getElementById('btnBookTelegram');
    let currentSelectedCourse = 'مسار تدريبي عام';
    let currentCoordinator = 'saqr';
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentSelectedCourse = btn.getAttribute('data-course') || 'المسار التدريبي';
            currentCoordinator = btn.getAttribute('data-coordinator') || 'saqr';
            if (modalTitle) modalTitle.innerText = `حجز مقعد: ${currentSelectedCourse}`;
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    if (btnBookWhatsapp) {
        btnBookWhatsapp.addEventListener('click', (e) => {
            e.preventDefault();
            const name = traineeNameInput ? traineeNameInput.value.trim() : '';
            const contact = traineeContactInput ? traineeContactInput.value.trim() : '';
            if (!name || !contact) {
                alert('يرجى إدخال اسمك ومعلومات التواصل أولاً.');
                return;
            }
            const message = encodeURIComponent(`🚀 طلب انضمام وحجز مقعد - أكاديمية ميتركس\n\n📌 المسار التدريبي: ${currentSelectedCourse}\n👤 اسم المتدرب: ${name}\n📞 وسيلة التواصل: ${contact}`);
            const targetPhone = (currentCoordinator === 'edris') ? '967717016894' : '967713962536';
            window.open(`https://wa.me/${targetPhone}?text=${message}`, '_blank');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
            clearForm();
        });
    }
    if (btnBookTelegram) {
        btnBookTelegram.addEventListener('click', (e) => {
            e.preventDefault();
            const name = traineeNameInput ? traineeNameInput.value.trim() : '';
            const contact = traineeContactInput ? traineeContactInput.value.trim() : '';
            if (!name || !contact) {
                alert('يرجى كتابة اسمك ومعلومات التواصل أولاً.');
                return;
            }
            const message = encodeURIComponent(`🚀 طلب انضمام وحجز مقعد - أكاديمية ميتركس\n\n📌 المسار التدريبي: ${currentSelectedCourse}\n👤 اسم المتدرب: ${name}\n📞 وسيلة التواصل: ${contact}`);
            const targetUsername = (currentCoordinator === 'edris') ? 'dea_y_1' : 'VIlllllllllllP';
            window.open(`https://t.me/${targetUsername}?text=${message}`, '_blank');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
            clearForm();
        });
    }
    function clearForm() {
        if (traineeNameInput) traineeNameInput.value = '';
        if (traineeContactInput) traineeContactInput.value = '';
    }
}

// 15. زر الدعم العائم الذكي
function initSupportMultiLevel() {
    const trigger = document.getElementById('supportTrigger');
    const popup = document.getElementById('supportPopup');
    const closeBtn = document.getElementById('closeSupportPopup');
    const cardSupportBtn = document.getElementById('cardSupportBtn');
    const levelMain = document.getElementById('supportLevelMain');
    const openTgChoices = document.getElementById('openTelegramChoices');
    const openWaChoices = document.getElementById('openWhatsappChoices');
    const tgSubMenu = document.getElementById('telegramSubMenu');
    const waSubMenu = document.getElementById('whatsappSubMenu');
    const backFromTg = document.getElementById('backFromTelegram');
    const backFromWa = document.getElementById('backFromWhatsapp');
    if (!trigger || !popup) return;
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.toggle('show');
        resetViews();
    });
    if (cardSupportBtn) {
        cardSupportBtn.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('show');
            resetViews();
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.remove('show');
            resetViews();
        });
    }
    if (openTgChoices) {
        openTgChoices.addEventListener('click', (e) => {
            e.preventDefault();
            if (levelMain) levelMain.style.display = 'none';
            if (tgSubMenu) tgSubMenu.style.display = 'flex';
        });
    }
    if (openWaChoices) {
        openWaChoices.addEventListener('click', (e) => {
            e.preventDefault();
            if (levelMain) levelMain.style.display = 'none';
            if (waSubMenu) waSubMenu.style.display = 'flex';
        });
    }
    if (backFromTg) {
        backFromTg.addEventListener('click', (e) => {
            e.preventDefault();
            if (tgSubMenu) tgSubMenu.style.display = 'none';
            if (levelMain) levelMain.style.display = 'block';
        });
    }
    if (backFromWa) {
        backFromWa.addEventListener('click', (e) => {
            e.preventDefault();
            if (waSubMenu) waSubMenu.style.display = 'none';
            if (levelMain) levelMain.style.display = 'block';
        });
    }
    function resetViews() {
        if (levelMain) levelMain.style.display = 'block';
        if (tgSubMenu) tgSubMenu.style.display = 'none';
        if (waSubMenu) waSubMenu.style.display = 'none';
    }
}

// 16. نظام التحقق الرقمي من الشهادات - النسخة السحابية المحدثة (Firebase Firestore)
function initCertificateVerification() {
    const verifyBtn = document.getElementById('verifyBtn');
    const certInput = document.getElementById('certInput');
    const verifyResult = document.getElementById('verifyResult');

    if (!verifyBtn || !certInput || !verifyResult) return;

    checkBlockStatus();

    verifyBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        if (isUserBlocked()) return;

        const inputCode = certInput.value.trim().toUpperCase();

        if (!inputCode) {
            verifyResult.innerHTML = `
                <div style="color: #ef4444; font-size: 0.9rem; padding: 8px;">
                    <i class="fas fa-exclamation-circle"></i> يرجى إدخال رمز التحقق المشفر للشهادة أولاً.
                </div>
            `;
            return;
        }

        verifyResult.innerHTML = `
            <div style="color: var(--cyan-neon); font-size: 0.88rem; padding: 10px;">
                <i class="fas fa-spinner fa-spin"></i> جاري فحص السجلات المشفرة وسحب البيانات من السحابة...
            </div>
        `;

        try {
            const docRef = doc(db, "certificates", inputCode);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                resetFailedAttempts();
                const certData = docSnap.data();

                const directUrl = `${window.location.origin}${window.location.pathname}?cert=${inputCode}`;

                verifyResult.innerHTML = `
                    <div class="cyber-diploma" dir="rtl">
                        <div class="diploma-watermark">MATRIX ACADEMY</div>
                        <div class="diploma-top-bar">
                            <div class="diploma-title-box">
                                <i class="fas fa-shield-halved"></i>
                                <span>وثيقة إتمام واعتماد رسمي | OFFICIAL DIPLOMA</span>
                            </div>
                            <div class="diploma-verified-badge">
                                <span class="badge-pulse"></span>
                                <span>VERIFIED 2027</span>
                            </div>
                        </div>
                        <p class="diploma-text-intro">تشهد إدارة أكاديمية ميتركس للتكنولوجيا والإبداع بأن:</p>
                        <div style="margin: 6px 0 12px 0;">
                            <small style="display: block; color: var(--text-muted); font-size: 0.72rem; font-weight: 500; margin-bottom: 2px; letter-spacing: 0.3px;">اسم الطالب الرباعي:</small>
                            <h2 class="diploma-trainee-name" style="font-size: 1.15rem; font-weight: 600; color: #fff; letter-spacing: -0.2px; line-height: 1.4;">${certData.name}</h2>
                        </div>
                        <p class="diploma-text-pass">قد اجتاز بنجاح واقتدار كافة المتطلبات النظرية والتطبيقية المقررة لمسار:</p>
                        <div class="diploma-course-name">${certData.course}</div>
                        <div class="diploma-meta-grid">
                            <div class="diploma-meta-item">
                                <small>التقدير العام</small>
                                <strong style="color: var(--primary-neon);"><i class="fas fa-star"></i> ${certData.grade}</strong>
                            </div>
                            <div class="diploma-meta-item">
                                <small>الرمز المشفر (Secure ID)</small>
                                <strong style="color: var(--cyan-neon); font-family: var(--font-code);">${inputCode}</strong>
                            </div>
                        </div>
                        <div class="diploma-footer-seal">
                            <div class="diploma-seal-box">
                                <div class="diploma-seal-icon" style="animation: none !important; transform: none !important;" title="ختم الاعتماد الرسمي لميتركس">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <div class="diploma-seal-text">
                                    <strong>ختم الاعتماد الرسمي</strong>
                                    <small>إدارة الأكاديمية | Matrix Academy</small>
                                </div>
                            </div>
                            <div class="diploma-signature-box">
                                <small>المشرف والمدرب المعتمد</small>
                                <strong>صقر المعلوماتية</strong>
                                <small style="color: var(--text-muted); font-size: 0.68rem; margin-top: 2px;">17 أكتوبر 2027م</small>
                            </div>
                        </div>
                        <div class="diploma-actions">
                            <button type="button" class="btn-diploma-action" onclick="navigator.clipboard.writeText('${directUrl}'); alert('تم نسخ رابط التوثيق المباشر للشهادة بنجاح!');">
                                <i class="fas fa-link"></i> نسخ رابط التوثيق
                            </button>
                            <a href="https://wa.me/?text=${encodeURIComponent('🎓 وثيقة اعتمادي الرسمية الصادرة من أكاديمية ميتركس للتكنولوجيا والإبداع:\n' + directUrl)}" target="_blank" class="btn-diploma-action" style="text-decoration: none;">
                                <i class="fab fa-whatsapp"></i> مشاركة الإنجاز
                            </a>
                        </div>
                    </div>
                `;
            } else {
                handleFailedAttempt(inputCode);
            }
        } catch (error) {
            console.error("Firebase Error:", error);
            verifyResult.innerHTML = `
                <div style="color: #ef4444; font-size: 0.9rem; padding: 8px;">
                    <i class="fas fa-exclamation-circle"></i> حدث خطأ في الاتصال بقاعدة البيانات السحابية. تأكد من الإنترنت.
                </div>
            `;
        }
    });

    function handleFailedAttempt(code) {
        let attempts = parseInt(localStorage.getItem('mtx_cert_fails') || '0') + 1;
        let blockLevel = parseInt(localStorage.getItem('mtx_block_level') || '1');
        localStorage.setItem('mtx_cert_fails', attempts);
        if (attempts >= 5) {
            let blockSeconds = blockLevel * 60;
            let unblockTime = Date.now() + (blockSeconds * 1000);
            localStorage.setItem('mtx_unblock_time', unblockTime);
            localStorage.setItem('mtx_block_level', blockLevel + 1);
            localStorage.removeItem('mtx_cert_fails');
            applyBlockUI(blockSeconds);
        } else {
            let remaining = 5 - attempts;
            verifyResult.innerHTML = `
                <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid #ef4444; padding: 12px; border-radius: 12px; color: #ef4444; font-size: 0.88rem; margin-top: 14px; text-align: center;">
                    <i class="fas fa-times-circle"></i> الرمز المشفر (${code}) غير مسجل في السجل السحابي العام.<br>
                    <small style="color: var(--text-muted);">تنبيه أمني: متبقي لديك <strong>${remaining}</strong> محاولات قبل تجميد الفحص أمنياً.</small>
                </div>
            `;
        }
    }

    function checkBlockStatus() {
        let unblockTime = parseInt(localStorage.getItem('mtx_unblock_time') || '0');
        if (unblockTime > Date.now()) {
            let remainingSeconds = Math.ceil((unblockTime - Date.now()) / 1000);
            applyBlockUI(remainingSeconds);
        } else {
            localStorage.removeItem('mtx_unblock_time');
        }
    }

    function isUserBlocked() {
        let unblockTime = parseInt(localStorage.getItem('mtx_unblock_time') || '0');
        return (unblockTime > Date.now());
    }

    function applyBlockUI(seconds) {
        certInput.disabled = true;
        verifyBtn.disabled = true;
        verifyBtn.style.opacity = '0.5';
        verifyBtn.style.cursor = 'not-allowed';
        let timer = seconds;
        verifyResult.innerHTML = `
            <div style="background: rgba(239, 68, 68, 0.12); border: 1px solid #ef4444; padding: 14px; border-radius: 14px; color: #ef4444; font-size: 0.9rem; margin-top: 14px; text-align: center; box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);">
                <i class="fas fa-ban"></i> <strong>تم تجميد نظام الفحص أمنياً!</strong><br>
                <span>تم تجاوز الحد المسموح من المحاولات الخاطئة.</span><br>
                <div style="margin-top: 6px; font-family: var(--font-code); font-weight: 700; color: #fff;">
                    الوقت المتبقي لرفع الحظر: <span id="blockTimer">${timer}</span> ثانية
                </div>
            </div>
        `;
        let interval = setInterval(() => {
            timer--;
            let timerElem = document.getElementById('blockTimer');
            if (timerElem) timerElem.innerText = timer;
            if (timer <= 0) {
                clearInterval(interval);
                liftBlockUI();
            }
        }, 1000);
    }

    function liftBlockUI() {
        localStorage.removeItem('mtx_unblock_time');
        certInput.disabled = false;
        verifyBtn.disabled = false;
        verifyBtn.style.opacity = '1';
        verifyBtn.style.cursor = 'pointer';
        verifyResult.innerHTML = `
            <div style="color: var(--primary-neon); font-size: 0.88rem; padding: 8px;">
                <i class="fas fa-unlock-alt"></i> تم رفع التجميد الأمني. يرجى إدخال الكود بعناية.
            </div>
        `;
    }

    function resetFailedAttempts() {
        localStorage.removeItem('mtx_cert_fails');
        localStorage.removeItem('mtx_block_level');
        localStorage.removeItem('mtx_unblock_time');
    }
}

// 17. فحص الرابط المباشر التلقائي للشهادات عند الدخول (URL Query Param)
function checkUrlForDirectCertificate() {
    const urlParams = new URLSearchParams(window.location.search);
    const certCode = urlParams.get('cert');
    if (certCode) {
        const certInput = document.getElementById('certInput');
        const verifyBtn = document.getElementById('verifyBtn');
        if (certInput && verifyBtn) {
            certInput.value = certCode;
            window.location.hash = '#verifySection';
            setTimeout(() => {
                verifyBtn.click();
            }, 400);
        }
    }
}
