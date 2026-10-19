/* ==========================================================================
   أكاديمية ميتركس للتكنولوجيا والإبداع - المحرك التفاعلي البرمجي الشامل (2027)
   النسخة السحابية المعتمدة - نظام التحكم الشامل، الشارات التفاعلية، وتأثيرات التمرير
   المطور: صقر المعلوماتية
   ========================================================================== */

// استيراد أدوات فايربيس السحابية الرسمية
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

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

// حفظ الهيكل الأساسي للدورتين الأصليتين
let initialBaseCoursesHTML = '';

document.addEventListener('DOMContentLoaded', async () => {
    const tracksGrid = document.querySelector('.tracks-grid');
    if (tracksGrid) {
        initialBaseCoursesHTML = tracksGrid.innerHTML;
    }

    initYearAutoFix();
    initDrawerMenu();
    initButtonRipple();
    initAboutAccordion();
    initFaqAccordion();
    initCourseAccordions();
    initCurrencySwitcher();
    initShareSystem();
    initQuickSearchEngine();
    initBackToTop();
    initOfficialChannelsModals();
    initBookingSystem();
    initSupportMultiLevel();
    initCertificateVerification();
    checkUrlForDirectCertificate(); 
    
    // تشغيل المحرك السحابي الشامل، المستشار الذكي، ومحرك التمرير السلس
    await loadDynamicSiteContent();
    initTrackQuiz();
    initScrollReveal();
});

// ==========================================================================
// 0. المحرك السحابي المركزي: وضع الصيانة، الإعلانات، المنصات، والدورات التراكمية
// ==========================================================================
async function loadDynamicSiteContent() {
    try {
        const settingsRef = doc(db, "site_settings", "main");
        const settingsSnap = await getDoc(settingsRef);
        let siteSettingsData = {};

        if (settingsSnap.exists()) {
            siteSettingsData = settingsSnap.data();
            const d = siteSettingsData;

            // 1. نظام وضع الصيانة الشامل الحصري
            if (d.maintenance_mode === true) {
                applyMaintenanceModeUI(d);
                return;
            }

            // 2. التحكم بشريط الإعلانات العلوي
            const announceBar = document.querySelector('.announcement-bar');
            if (announceBar) {
                if (d.announcement_active === false) {
                    announceBar.style.display = 'none';
                } else {
                    announceBar.style.display = 'block';
                    if (d.announcement) {
                        const annText = announceBar.querySelector('.announcement-content > span:not(.badge)');
                        if (annText) annText.innerText = d.announcement;
                    }
                }
            }

            // 3. تحديث نبذة الأكاديمية الرسمية
            if (d.about_academy) {
                const aboutP = document.querySelector('#about .accordion-inner p');
                if (aboutP) aboutP.innerText = d.about_academy;
            }

            // 4. تحديث نبذة المدراء وروابط التواصل المباشرة
            const bios = document.querySelectorAll('.manager-bio');
            if (d.edris_bio_1 && bios[0]) bios[0].innerText = d.edris_bio_1;
            if (d.edris_bio_2 && bios[1]) bios[1].innerText = d.edris_bio_2;
            if (d.edris_tg) document.querySelectorAll('a[href*="t.me/dea_y_1"]').forEach(a => a.href = d.edris_tg);
            if (d.edris_wa) document.querySelectorAll('a[href*="wa.me/967717016894"]').forEach(a => a.href = d.edris_wa);

            if (d.saqr_bio_1 && bios[2]) bios[2].innerText = d.saqr_bio_1;
            if (d.saqr_bio_2 && bios[3]) bios[3].innerText = d.saqr_bio_2;
            if (d.saqr_tg) document.querySelectorAll('a[href*="t.me/VIlllllllllllP"]').forEach(a => a.href = d.saqr_tg);
            if (d.saqr_wa) document.querySelectorAll('a[href*="wa.me/967713962536"]').forEach(a => a.href = d.saqr_wa);

            // 5. التحكم بالمنصات السبع (أعلى / جانب / أسفل)
            if (d.top_tg_url) document.querySelectorAll('.social-strip a.icon-tg').forEach(a => a.href = d.top_tg_url);
            if (d.top_wa_url) document.querySelectorAll('.social-strip a.icon-wa').forEach(a => a.href = d.top_wa_url);
            if (d.top_fb_url) document.querySelectorAll('.social-strip a.icon-fb').forEach(a => a.href = d.top_fb_url);
            if (d.top_tt_url) document.querySelectorAll('.social-strip a.icon-tt').forEach(a => a.href = d.top_tt_url);
            if (d.top_ig_url) document.querySelectorAll('.social-strip a.icon-ig').forEach(a => a.href = d.top_ig_url);
            if (d.top_yt_url) document.querySelectorAll('.social-strip a.icon-yt').forEach(a => a.href = d.top_yt_url);
            if (d.top_x_url)  document.querySelectorAll('.social-strip a.icon-x').forEach(a => a.href = d.top_x_url);

            if (d.drawer_tg_url) document.querySelectorAll('.drawer-socials a.s-tg').forEach(a => a.href = d.drawer_tg_url);
            if (d.drawer_wa_url) document.querySelectorAll('.drawer-socials a.s-wa').forEach(a => a.href = d.drawer_wa_url);
            if (d.drawer_fb_url) document.querySelectorAll('.drawer-socials a.s-fb').forEach(a => a.href = d.drawer_fb_url);
            if (d.drawer_tt_url) document.querySelectorAll('.drawer-socials a.s-tt').forEach(a => a.href = d.drawer_tt_url);
            if (d.drawer_ig_url) document.querySelectorAll('.drawer-socials a.s-ig').forEach(a => a.href = d.drawer_ig_url);
            if (d.drawer_yt_url) document.querySelectorAll('.drawer-socials a.s-yt').forEach(a => a.href = d.drawer_yt_url);
            if (d.drawer_x_url)  document.querySelectorAll('.drawer-socials a.s-x').forEach(a => a.href = d.drawer_x_url);

            if (d.footer_tg_url) document.querySelectorAll('.footer-socials a.f-tg').forEach(a => a.href = d.footer_tg_url);
            if (d.footer_wa_url) document.querySelectorAll('.footer-socials a.f-wa').forEach(a => a.href = d.footer_wa_url);
            if (d.footer_fb_url) document.querySelectorAll('.footer-socials a.f-fb').forEach(a => a.href = d.footer_fb_url);
            if (d.footer_tt_url) document.querySelectorAll('.footer-socials a.f-tt').forEach(a => a.href = d.footer_tt_url);
            if (d.footer_ig_url) document.querySelectorAll('.footer-socials a.f-ig').forEach(a => a.href = d.footer_ig_url);
            if (d.footer_yt_url) document.querySelectorAll('.footer-socials a.f-yt').forEach(a => a.href = d.footer_yt_url);
            if (d.footer_x_url)  document.querySelectorAll('.footer-socials a.f-x').forEach(a => a.href = d.footer_x_url);

            const tgModalLinks = document.querySelectorAll('#tgChannelsModal .channels-list a.channel-item');
            if (tgModalLinks.length >= 3) {
                if (d.modal_tg_1_url) tgModalLinks[0].href = d.modal_tg_1_url;
                if (d.modal_tg_2_url) tgModalLinks[1].href = d.modal_tg_2_url;
                if (d.modal_tg_3_url) tgModalLinks[2].href = d.modal_tg_3_url;
            }

            const waModalLinks = document.querySelectorAll('#waChannelsModal .channels-list a.channel-item');
            if (waModalLinks.length >= 3) {
                if (d.modal_wa_1_url) waModalLinks[0].href = d.modal_wa_1_url;
                if (d.modal_wa_2_url) waModalLinks[1].href = d.modal_wa_2_url;
                if (d.modal_wa_3_url) waModalLinks[2].href = d.modal_wa_3_url;
            }

            if (d.tg_official) document.querySelectorAll('a[href*="t.me/MATRIX_ACD"]').forEach(a => a.href = d.tg_official);
            if (d.wa_official) document.querySelectorAll('a[href*="whatsapp.com/channel/0029Vb8kH747IUYLVFqo4p2S"]').forEach(a => a.href = d.wa_official);
        }

        // 6. بناء وعرض الدورات السحابية + دمج وتعديل دورتي الأساس
        const coursesCol = collection(db, "courses");
        const coursesSnap = await getDocs(coursesCol);
        const tracksGrid = document.querySelector('.tracks-grid');

        if (tracksGrid) {
            let combinedHTML = initialBaseCoursesHTML;

            if (!coursesSnap.empty) {
                coursesSnap.forEach(docSnap => {
                    const c = docSnap.data();
                    let syllabusList = '';
                    if (c.syllabus && Array.isArray(c.syllabus)) {
                        syllabusList = c.syllabus.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('');
                    } else if (c.description) {
                        syllabusList = `<li><i class="fas fa-check-circle"></i> ${c.description}</li>`;
                    } else {
                        syllabusList = `<li><i class="fas fa-check-circle"></i> تطبيق عملي ومشاريع حية ومتابعة مستمرة من المدرب.</li>`;
                    }

                    const badge = c.badge || "متاح للتسجيل 🟢";
                    const duration = c.duration || "4 أسابيع مكثفة";
                    const instructor = c.instructor || "صقر المعلوماتية";
                    const iconClass = c.icon || "fas fa-laptop-code";
                    const countdownDays = parseInt(c.countdown_days) || 0;
                    const pUsd = c.price_usd || "$10";
                    const pYer = c.price_yer || "5,000 YER";
                    const pSar = c.price_sar || "40 SAR";
                    const waTarget = c.instructor_wa || "967713962536";
                    const tgTarget = c.instructor_tg || "VIlllllllllllP";

                    let countdownHtml = '';
                    if (countdownDays > 0) {
                        countdownHtml = `
                            <div class="course-countdown" data-days="${countdownDays}" data-hours="12">
                                <div class="countdown-label"><i class="fas fa-stopwatch"></i> متبقي لانطلاق فترة الحجز والتجربة:</div>
                                <div class="countdown-timer">
                                    <div class="timer-unit"><span class="timer-val days-val">${String(countdownDays).padStart(2, '0')}</span><small>يوم</small></div>
                                    <span class="timer-sep">:</span>
                                    <div class="timer-unit"><span class="timer-val hours-val">12</span><small>ساعة</small></div>
                                    <span class="timer-sep">:</span>
                                    <div class="timer-unit"><span class="timer-val mins-val">00</span><small>دقيقة</small></div>
                                </div>
                            </div>
                        `;
                    }

                    combinedHTML += `
                        <div class="premium-course-card scroll-reveal" data-course-id="${docSnap.id}">
                            <div class="course-card-header">
                                <div class="course-badge">${badge}</div>
                                <div class="course-icon"><i class="${iconClass}"></i></div>
                            </div>
                            <h3 class="course-title">${c.title || 'مسار تدريبي معتمد'}</h3>
                            
                            <div class="course-price-box">
                                <span class="price-val" data-usd="${pUsd}" data-yer="${pYer}" data-sar="${pSar}">${pUsd}</span>
                                <small class="price-note">حضور ومحتوى متاح | الرسوم لطلب الشهادة المعتمدة</small>
                            </div>

                            ${countdownHtml}

                            <p class="course-desc">${c.description || 'مسار تخصصي عملي متكامل بأعلى المعايير التدريبية.'}</p>
                            
                            <div class="course-accordion">
                                <button class="btn-course-dropdown">
                                    <span><i class="fas fa-list-ul"></i> محاور ومميزات الدورة</span>
                                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                                </button>
                                <div class="course-dropdown-body">
                                    <ul>${syllabusList}</ul>
                                </div>
                            </div>

                            <div class="course-footer-info">
                                <span><i class="far fa-clock"></i> ${duration}</span>
                                <span><i class="fas fa-user-tie"></i> المدرب: ${instructor}</span>
                            </div>

                            <button class="btn-enroll open-booking-btn" 
                                data-course="${c.title}" 
                                data-wa="${waTarget}" 
                                data-tg="${tgTarget}">
                                <i class="fas fa-bolt"></i> حجز مقعد تدريبي
                            </button>
                        </div>
                    `;
                });
            }

            // تحديث DOM مرة واحدة لضمان استقرار الصفحة
            tracksGrid.innerHTML = combinedHTML;

            // تطبيق تعديلات دورتي الأساس فوراً بعد رسم الـ DOM
            if (Object.keys(siteSettingsData).length > 0) {
                applyBaseCourseModifications(siteSettingsData);
            }
            
            // إعادة تفعيل الوظائف والأحداث
            initCourseAccordions();
            initBookingSystem();
            initCurrencySwitcher();
            initButtonRipple();
            initCourseCountdowns();
            updateComparisonTableDynamically(coursesSnap);
            initScrollReveal();
        }
    } catch (err) {
        console.error("خطأ في جلب المحتوى السحابي:", err);
    }
}

// تطبيق تعديلات دورتي الأساس بشكل قطعي وجذري
function applyBaseCourseModifications(data) {
    const cards = document.querySelectorAll('.premium-course-card');
    if (cards.length < 2) return;

    const setupBaseCard = (card, prefix) => {
        // 1. تحديث الشارة
        if (data[`${prefix}_badge`]) {
            const b = card.querySelector('.course-badge');
            if (b) b.innerText = data[`${prefix}_badge`];
        }

        // 2. تحديث الأسعار بمراعاة العملة المختارة حالياً
        const p = card.querySelector('.price-val');
        if (p) {
            if (data[`${prefix}_price_usd`]) p.setAttribute('data-usd', data[`${prefix}_price_usd`]);
            if (data[`${prefix}_price_yer`]) p.setAttribute('data-yer', data[`${prefix}_price_yer`]);
            if (data[`${prefix}_price_sar`]) p.setAttribute('data-sar', data[`${prefix}_price_sar`]);

            const activeBtn = document.querySelector('.currency-btn.active');
            const curr = activeBtn ? activeBtn.getAttribute('data-curr') : 'USD';
            if (curr === 'YER' && data[`${prefix}_price_yer`]) p.innerText = data[`${prefix}_price_yer`];
            else if (curr === 'SAR' && data[`${prefix}_price_sar`]) p.innerText = data[`${prefix}_price_sar`];
            else if (data[`${prefix}_price_usd`]) p.innerText = data[`${prefix}_price_usd`];
        }

        // 3. تحديث النبذة
        if (data[`${prefix}_desc`]) {
            const descElem = card.querySelector('.course-desc');
            if (descElem) descElem.innerText = data[`${prefix}_desc`];
        }

        // 4. حذف العبارة القديمة بشكل حاسم وقطعي أياً كان نوع الـ Tag
        card.querySelectorAll('div, p, span').forEach(el => {
            if (el.classList.contains('completed-batch-notice') || 
                el.classList.contains('course-price-box') || 
                el.classList.contains('course-desc') || 
                el.classList.contains('course-accordion')) return;

            const text = el.innerText || '';
            if (text.includes('انطلقت قبل أسبوعين') || text.includes('جارية حالياً') || text.includes('ترقبوا فتح باب التسجيل')) {
                el.remove();
            }
        });

        // 5. فحص حالة المقاعد (مكتملة أم مفتوحة)
        const isFull = (data[`${prefix}_status`] === 'full') || 
                       (data[`${prefix}_badge`] && data[`${prefix}_badge`].includes('مكتملة'));

        let countdownBox = card.querySelector('.course-countdown');
        let completedBox = card.querySelector('.completed-batch-notice');
        const priceBox = card.querySelector('.course-price-box');

        if (isFull) {
            // إخفاء أي عداد
            if (countdownBox) countdownBox.style.display = 'none';

            const noticeText = data[`${prefix}_notice`] || 
                "📌 إشعار الدفعة: اكتملت المقاعد المخصصة لهذه الدورة بنجاح، وقد تم انطلاق البرنامج مسبقاً. في حال إطلاق دفعة جديدة سيتم الإعلان عنها واعتمادها رسمياً هنا عبر المنصة.";

            if (!completedBox) {
                completedBox = document.createElement('div');
                completedBox.className = 'completed-batch-notice';
                if (priceBox) {
                    priceBox.insertAdjacentElement('afterend', completedBox);
                } else {
                    card.appendChild(completedBox);
                }
            }

            completedBox.style.display = 'block';
            completedBox.innerHTML = `
                <div class="batch-notice-inner">
                    <i class="fas fa-lock"></i>
                    <span>${noticeText}</span>
                </div>
            `;
        } else {
            // المقاعد مفتوحة: إخفاء صندوق الإشعار وإظهار العداد
            if (completedBox) completedBox.style.display = 'none';

            const days = parseInt(data[`${prefix}_countdown_days`]);
            if (!isNaN(days) && days > 0) {
                if (!countdownBox) {
                    countdownBox = document.createElement('div');
                    countdownBox.className = 'course-countdown';
                    if (priceBox) {
                        priceBox.insertAdjacentElement('afterend', countdownBox);
                    } else {
                        card.appendChild(countdownBox);
                    }
                }
                countdownBox.style.display = 'block';
                countdownBox.setAttribute('data-days', days);
                countdownBox.setAttribute('data-hours', 12);
                countdownBox.innerHTML = `
                    <div class="countdown-label"><i class="fas fa-stopwatch"></i> متبقي لانطلاق فترة الحجز والتجربة:</div>
                    <div class="countdown-timer">
                        <div class="timer-unit"><span class="timer-val days-val">${String(days).padStart(2, '0')}</span><small>يوم</small></div>
                        <span class="timer-sep">:</span>
                        <div class="timer-unit"><span class="timer-val hours-val">12</span><small>ساعة</small></div>
                        <span class="timer-sep">:</span>
                        <div class="timer-unit"><span class="timer-val mins-val">00</span><small>دقيقة</small></div>
                    </div>
                `;
            } else if (countdownBox) {
                countdownBox.style.display = 'none';
            }
        }
    };

    // تطبيق التعديل على الكارت الأول والثاني
    setupBaseCard(cards[0], 'c_eng');
    setupBaseCard(cards[1], 'c_web');
}

// محرك التمرير السلس السريع كالريشة (Scroll Reveal Animation)
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.premium-course-card, .comm-card, .accordion-item, .comparison-wrapper, .diploma-preview-box, .stat-pill'
    );

    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(el => el.classList.add('revealed'));
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach((el, index) => {
        el.classList.add('scroll-reveal-item');
        el.style.transitionDelay = `${(index % 3) * 0.08}s`;
        revealObserver.observe(el);
    });
}

// تحديث جدول المقارنة تلقائياً
function updateComparisonTableDynamically(coursesSnap) {
    const tableTheadTr = document.querySelector('.comparison-table thead tr');
    const tableTbody = document.querySelector('.comparison-table tbody');
    if (!tableTheadTr || !tableTbody || coursesSnap.empty) return;

    if (tableTheadTr.children.length > 3) return;

    coursesSnap.forEach(docSnap => {
        const c = docSnap.data();
        const th = document.createElement('th');
        th.innerHTML = `<i class="${c.icon || 'fas fa-laptop-code'} icon-neon"></i> ${c.title}`;
        tableTheadTr.appendChild(th);

        const rows = tableTbody.querySelectorAll('tr');
        if (rows.length >= 5) {
            const td1 = document.createElement('td');
            td1.innerText = "تأسيسي إلى احترافي (مشاريع حية ومتابعة)";
            rows[0].appendChild(td1);

            const td2 = document.createElement('td');
            td2.innerText = "الكمبيوتر أو الهاتف الذكي (بيئات سحابية وتطبيقات)";
            rows[1].appendChild(td2);

            const td3 = document.createElement('td');
            td3.innerText = c.duration || "4 - 5 أسابيع مكثفة";
            rows[2].appendChild(td3);

            const td4 = document.createElement('td');
            td4.innerText = "مشاريع عملية معتمدة + كورس تدريبي مساند";
            rows[3].appendChild(td4);

            const td5 = document.createElement('td');
            td5.innerText = "شهادة إتمام معتمدة برقم تعريفي موثق 2027";
            rows[4].appendChild(td5);
        }
    });
}

// دالة وضع الصيانة التكتيكي
function applyMaintenanceModeUI(settings) {
    const title = settings.maintenance_title || "الموقع في وضع الصيانة والتحديث الدوري 🛠️";
    const desc = settings.maintenance_desc || "عذراً عزيزي الزائر، تجري إدارة أكاديمية ميتركس حالياً عمليات تطوير وترقية دورية للبنية التحتية.";
    const days = parseInt(settings.maintenance_days) || 0;
    const hours = parseInt(settings.maintenance_hours) || 0;
    const mins = parseInt(settings.maintenance_mins) || 0;

    document.body.innerHTML = `
        <div style="min-height: 100vh; background: #07090e; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: 'Tajawal', sans-serif; direction: rtl; text-align: center; color: #fff;">
            <div style="max-width: 650px; background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 24px; padding: 40px 25px; box-shadow: 0 0 40px rgba(239, 68, 68, 0.25); backdrop-filter: blur(12px);">
                <div style="font-size: 3.5rem; color: #ef4444; margin-bottom: 15px;">
                    <i class="fas fa-tools fa-spin" style="--fa-animation-duration: 6s;"></i>
                </div>
                <h1 style="font-size: 1.8rem; font-weight: 900; color: #fff; margin-bottom: 12px; letter-spacing: -0.5px;">${title}</h1>
                <p style="color: #94a3b8; font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;">${desc}</p>
                
                <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px; margin-bottom: 25px;">
                    <div style="color: #ef4444; font-size: 0.85rem; font-weight: 700; margin-bottom: 12px;">
                        <i class="fas fa-stopwatch"></i> الوقت التقديري المتبقي لانتهاء الصيانة والعودة للعمل:
                    </div>
                    <div style="display: flex; justify-content: center; gap: 12px; direction: ltr;">
                        <div style="background: rgba(239,68,68,0.1); border: 1px solid #ef4444; border-radius: 12px; padding: 10px 16px; min-width: 65px;">
                            <span id="m_days" style="font-size: 1.6rem; font-weight: 900; color: #ef4444; display: block;">${days}</span>
                            <small style="font-size: 0.72rem; color: #94a3b8;">يوم</small>
                        </div>
                        <div style="background: rgba(239,68,68,0.1); border: 1px solid #ef4444; border-radius: 12px; padding: 10px 16px; min-width: 65px;">
                            <span id="m_hours" style="font-size: 1.6rem; font-weight: 900; color: #ef4444; display: block;">${hours}</span>
                            <small style="font-size: 0.72rem; color: #94a3b8;">ساعة</small>
                        </div>
                        <div style="background: rgba(239,68,68,0.1); border: 1px solid #ef4444; border-radius: 12px; padding: 10px 16px; min-width: 65px;">
                            <span id="m_mins" style="font-size: 1.6rem; font-weight: 900; color: #ef4444; display: block;">${mins}</span>
                            <small style="font-size: 0.72rem; color: #94a3b8;">دقيقة</small>
                        </div>
                    </div>
                </div>

                <p style="color: #64748b; font-size: 0.82rem; margin: 0;">🚀 أڪاديمية ميتركس للتكنولوجيا والإبداع (2027) | أنظمة التحكم التكتيكية</p>
            </div>
        </div>
    `;

    let totalSec = (days * 86400) + (hours * 3600) + (mins * 60);
    const timerInterval = setInterval(() => {
        if (totalSec > 0) {
            totalSec--;
            const d = Math.floor(totalSec / 86400);
            const h = Math.floor((totalSec % 86400) / 3600);
            const m = Math.floor((totalSec % 3600) / 60);
            const dElem = document.getElementById('m_days');
            const hElem = document.getElementById('m_hours');
            const mElem = document.getElementById('m_mins');
            if (dElem) dElem.innerText = String(d).padStart(2, '0');
            if (hElem) hElem.innerText = String(h).padStart(2, '0');
            if (mElem) mElem.innerText = String(m).padStart(2, '0');
        } else {
            clearInterval(timerInterval);
            window.location.reload();
        }
    }, 1000);
}

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
    currButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const selectedCurr = btn.getAttribute('data-curr') || 'USD';
            const priceElements = document.querySelectorAll('.price-val');
            priceElements.forEach(elem => {
                let newPrice = elem.getAttribute('data-usd');
                if (selectedCurr === 'YER') newPrice = elem.getAttribute('data-yer');
                else if (selectedCurr === 'SAR') newPrice = elem.getAttribute('data-sar');
                elem.innerText = newPrice;
            });
        });
    });
}

// 5. محرك المستشار الذكي المتكيف كلياً مع جميع الدورات المتاحة
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
        {
            q: "1. ما هو المجال التخصصي الأكثر جذباً لطموحك المهني؟",
            options: [
                { text: "الأمن السيبراني، تفكيك البرمجيات، واختبار الاختراق التكتيكي", weight: "security" },
                { text: "بناء مواقع الويب الحديثة وهندسة السيرفرات بالذكاء الاصطناعي", weight: "web" },
                { text: "احتراف اللغة الإنجليزية والنطق السليم وكسر حاجز التخاطب", weight: "english" },
                { text: "برمجة بايثون المتقدمة والأتمتة وصناعة الأدوات الذكية", weight: "python" }
            ]
        },
        {
            q: "2. ما هو الجهاز الذي تعتمد عليه حالياً في التطبيق العملي؟",
            options: [
                { text: "الهاتف الذكي فقط وأرغب في دورة تدعم التطبيق المرن بالهاتف", weight: "english" },
                { text: "جهاز حاسوب أو لابتوب مخصص لكتابة الأكواد واستخدام الأدوات", weight: "security" },
                { text: "أتنقل بين الهاتف والكمبيوتر بمرونة", weight: "web" }
            ]
        },
        {
            q: "3. ما هو مستواك الأكاديمي الحالي في المجال المطلوب؟",
            options: [
                { text: "من الصفر المطلق وأحتاج لتأسيس منهجي خطوة بخطوة", weight: "english" },
                { text: "مبتدئ ولدي شغف بالتطبيق والمشاريع الحية العميقة", weight: "web" },
                { text: "متوسط وأرغب في صقل مهاراتي المتقدمة بسوق العمل", weight: "security" }
            ]
        },
        {
            q: "4. ما هو النمط التدريبي الذي تفضله لضمان الاستيعاب؟",
            options: [
                { text: "واجبات وتصحيح يومي مباشر مع كادر المتابعة المتفرغ", weight: "english" },
                { text: "بناء معرض أعمال برمجية حي (Portfolio) على منصة GitHub", weight: "web" },
                { text: "تطبيق سيناريوهات محاكاة حقيقية واكتشاف ثغرات أمنية", weight: "security" }
            ]
        },
        {
            q: "5. ما هو هدفك الاستراتيجي الرئيسي لعام 2027؟",
            options: [
                { text: "العمل الحر عن بعد (Freelancing) كمطور ويب معتمد", weight: "web" },
                { text: "التخصص الميداني في مسار الفريق الأحمر (Red Teaming)", weight: "security" },
                { text: "التحدث بطلاقة واكتساب لغة تقنية تعزز فرضي المهنية", weight: "english" }
            ]
        },
        {
            q: "6. ما هي الميزة التدريبية التي تهمك أكثر عند الانطلاق؟",
            options: [
                { text: "تجربة الأيام الأولى مجاناً بالكامل للتأكد من جودة الشرح", weight: "web" },
                { text: "حضور كامل ومحتوى مفتوح مع خيار استخراج الشهادة المعتمدة", weight: "english" },
                { text: "شهادة معتمدة مشفرة برقم تعريفي مع متابعة مباشرة من المدربين", weight: "security" }
            ]
        }
    ];

    let currentStep = 0;
    let categoryScores = { security: 0, web: 0, english: 0, python: 0 };
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
        categoryScores = { security: 0, web: 0, english: 0, python: 0 };
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
        if (categoryScores[weight] !== undefined) {
            categoryScores[weight] += 2;
        }

        currentStep++;
        if (currentStep < questions.length) {
            renderQuestion();
        } else {
            showDiagnosticResult();
        }
    }

    function showDiagnosticResult() {
        quizContent.style.display = 'none';
        resultView.style.display = 'block';

        const allAvailableCards = Array.from(document.querySelectorAll('.premium-course-card'));
        const availableTitles = allAvailableCards.map(c => {
            const t = c.querySelector('.course-title');
            return t ? t.innerText.trim() : '';
        }).filter(t => t.length > 0);

        let winningCategory = 'web';
        let maxScore = -1;
        for (const [cat, score] of Object.entries(categoryScores)) {
            if (score > maxScore) {
                maxScore = score;
                winningCategory = cat;
            }
        }

        let targetTitle = '';
        if (winningCategory === 'security') {
            targetTitle = availableTitles.find(t => t.includes('سيبراني') || t.includes('هندسة') || t.includes('عكسية') || t.includes('أمن') || t.includes('ريد تيم'));
        } else if (winningCategory === 'english') {
            targetTitle = availableTitles.find(t => t.includes('إنجليزية') || t.includes('لغة') || t.includes('English'));
        } else if (winningCategory === 'python') {
            targetTitle = availableTitles.find(t => t.includes('بايثون') || t.includes('Python') || t.includes('أتمتة'));
        }

        if (!targetTitle) {
            targetTitle = availableTitles.find(t => t.includes('الويب') || t.includes('الذكاء') || t.includes('Web')) || availableTitles[0] || "المسار التدريبي المعتمد";
        }

        matchedCourseName = targetTitle;
        resultTitle.innerText = matchedCourseName;
        resultDesc.innerText = `بناءً على اهتماماتك وطبيعة جهازك، تم تحليل رغباتك ومطابقتها بدقة عالية مع هذا البرنامج التدريبي المعتمد.`;
        resultScore.innerText = `نسبة التوافق التكتيكي: 97% 🎯`;
    }

    if (btnGoToTrack) {
        btnGoToTrack.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.style.overflow = '';
            window.location.hash = '#tracks';
            setTimeout(() => {
                const bookBtn = Array.from(document.querySelectorAll('.open-booking-btn')).find(b => b.getAttribute('data-course') === matchedCourseName);
                if (bookBtn) {
                    bookBtn.click();
                } else {
                    const fallbackBtn = document.querySelector('.open-booking-btn');
                    if (fallbackBtn) fallbackBtn.click();
                }
            }, 350);
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
    const promoMessage = `🚀 بوابتك نحو احتراف التقنيات واللغات ومواكبة الذكاء الاصطناعي لعام 2027!\nانضم الآن إلى منصة أڪاديمية ميتركس للتكنولوجيا والإبداع:\n${window.location.href}`;
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
    if (shareTgBtn) shareTgBtn.href = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('🚀 انضم الآن إلى منصة أڪاديمية ميتركس للتكنولوجيا والإبداع 2027')}`;
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

// 7 & 8 & 9. الأكورديونات ومحاور الدورات
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
    document.querySelectorAll('.btn-course-dropdown').forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });

    document.querySelectorAll('.btn-course-dropdown').forEach(btn => {
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

// 10. العداد التنازلي التكتيكي للدفعة
function initCourseCountdowns() {
    const countdowns = document.querySelectorAll('.course-countdown');
    countdowns.forEach(item => {
        if (item._countdownInterval) clearInterval(item._countdownInterval);

        let totalSeconds = (parseInt(item.getAttribute('data-days')) || 4) * 86400 + (parseInt(item.getAttribute('data-hours')) || 12) * 3600;
        const daysElem = item.querySelector('.days-val');
        const hoursElem = item.querySelector('.hours-val');
        const minsElem = item.querySelector('.mins-val');

        function updateTimer() {
            if (totalSeconds <= 0) {
                item.innerHTML = '<span style="color: #ef4444; font-weight: 700; font-size: 0.88rem;"><i class="fas fa-exclamation-triangle"></i> انتهت فترة الحجز لهذه الدفعة</span>';
                if (item._countdownInterval) clearInterval(item._countdownInterval);
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
            item._countdownInterval = setInterval(updateTimer, 1000);
        }
    });
}

// 11. محرك البحث السريع اللحظي الديناميكي بالكامل
function initQuickSearchEngine() {
    const openBtn = document.getElementById('openSearchBtn');
    const modal = document.getElementById('searchModal');
    const closeBtn = document.getElementById('closeSearchModal');
    const input = document.getElementById('quickSearchInput');
    const resultsBox = document.getElementById('searchResultsBox');
    if (!openBtn || !modal || !input || !resultsBox) return;

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

        const dynamicSearchIndex = [];

        document.querySelectorAll('.premium-course-card').forEach(card => {
            const titleElem = card.querySelector('.course-title');
            if (titleElem && titleElem.innerText.trim()) {
                dynamicSearchIndex.push({
                    title: titleElem.innerText.trim(),
                    cat: 'المسارات التدريبية المتاحة',
                    link: '#tracks'
                });
            }
        });

        dynamicSearchIndex.push(
            { title: 'جدول المقارنة بين المسارات التدريبية', cat: 'المقارنات التكتيكية', link: '#comparison' },
            { title: 'المستشار الذكي لتحديد مسارك التدريبي', cat: 'أدوات المنصة', link: '#tracks' },
            { title: 'المدير الأول: إدريس الإدريسي (مدير ومهندس الأكاديمية)', cat: 'القيادة والإشراف', link: '#about' },
            { title: 'المدير الثاني: صقر المعلوماتية (الريد تيم وتطوير الويب)', cat: 'القيادة والتدريب', link: '#about' },
            { title: 'نظام فحص وتوثيق الشهادات الرقمية المعتمدة', cat: 'الشهادات والاعتمادات', link: '#verifySection' },
            { title: 'قنواتنا الرسمية المعتمدة على التلغرام', cat: 'مجتمعات الأكاديمية', link: '#community' },
            { title: 'قنواتنا الرسمية المعتمدة على الواتساب', cat: 'مجتمعات الأكاديمية', link: '#community' },
            { title: 'الأسئلة الشائعة والأجهزة والتصحيح اليومي', cat: 'الأسئلة الشائعة', link: '#faq' }
        );

        const filtered = dynamicSearchIndex.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.cat.toLowerCase().includes(query)
        );

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

// 12. زر الصعود السريع للأعلى
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

// 14. نظام حجز المقاعد وتوجيه الرسائل لمدرب الدورة المخصص
function initBookingSystem() {
    const modal = document.getElementById('bookingModal');
    const closeBtn = document.getElementById('closeBooking');
    const openBtns = document.querySelectorAll('.open-booking-btn');
    const modalTitle = document.getElementById('modalCourseTitle');
    const traineeNameInput = document.getElementById('traineeName');
    const traineeContactInput = document.getElementById('traineeContact');
    const btnBookWhatsapp = document.getElementById('btnBookWhatsapp');
    const btnBookTelegram = document.getElementById('btnBookTelegram');
    
    let currentCourse = 'مسار تدريبي عام';
    let currentWa = '967713962536';
    let currentTg = 'VIlllllllllllP';

    openBtns.forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });

    document.querySelectorAll('.open-booking-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentCourse = btn.getAttribute('data-course') || 'المسار التدريبي';
            currentWa = btn.getAttribute('data-wa') || '967713962536';
            currentTg = btn.getAttribute('data-tg') || 'VIlllllllllllP';
            
            if (modalTitle) modalTitle.innerText = `حجز مقعد: ${currentCourse}`;
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
        btnBookWhatsapp.onclick = (e) => {
            e.preventDefault();
            const name = traineeNameInput ? traineeNameInput.value.trim() : '';
            const contact = traineeContactInput ? traineeContactInput.value.trim() : '';
            if (!name || !contact) {
                alert('يرجى إدخال اسمك ومعلومات التواصل أولاً.');
                return;
            }
            const message = encodeURIComponent(`🚀 طلب انضمام وحجز مقعد - أكاديمية ميتركس\n\n📌 المسار التدريبي: ${currentCourse}\n👤 اسم المتدرب: ${name}\n📞 وسيلة التواصل: ${contact}`);
            window.open(`https://wa.me/${currentWa}?text=${message}`, '_blank');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
            clearForm();
        };
    }

    if (btnBookTelegram) {
        btnBookTelegram.onclick = (e) => {
            e.preventDefault();
            const name = traineeNameInput ? traineeNameInput.value.trim() : '';
            const contact = traineeContactInput ? traineeContactInput.value.trim() : '';
            if (!name || !contact) {
                alert('يرجى كتابة اسمك ومعلومات التواصل أولاً.');
                return;
            }
            const message = encodeURIComponent(`🚀 طلب انضمام وحجز مقعد - أكاديمية ميتركس\n\n📌 المسار التدريبي: ${currentCourse}\n👤 اسم المتدرب: ${name}\n📞 وسيلة التواصل: ${contact}`);
            window.open(`https://t.me/${currentTg}?text=${message}`, '_blank');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
            clearForm();
        };
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

// 16. نظام التحقق الرقمي من الشهادات - السحابي الشامل
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
                const trainerSignature = certData.trainer || "صقر المعلوماتية";
                const issueDate = certData.date || "17 أكتوبر 2027م";

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
                                <strong>${trainerSignature}</strong>
                                <small style="color: var(--text-muted); font-size: 0.68rem; margin-top: 2px;">${issueDate}</small>
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
