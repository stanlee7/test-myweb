// 스크롤 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .about-content, .review-card').forEach(el => {
        observer.observe(el);
    });

    // 스무스 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 폼 제출 핸들링
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.');
            this.reset();
        });
    }

    // AOS 초기화
    AOS.init({
        duration: 1000,
        once: true
    });
    
    // 숫자 카운팅 애니메이션
    const countUp = (element, target) => {
        let count = 0;
        const speed = 2000 / target;
        
        const timer = setInterval(() => {
            count += 1;
            element.textContent = count;
            
            if (count >= target) {
                clearInterval(timer);
            }
        }, speed);
    };
    
    // 통계 숫자 애니메이션
    const stats = document.querySelectorAll('.stat-item h3');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (!isNaN(target)) {
            countUp(stat, target);
        }
    });
}); 