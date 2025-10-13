//preload for background image//
const images = [
    "images/home-3-back.webp",
    "images/globe.webp",
    "images/archi-logo.webp"
];
const preload = (images) => {
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
};

preload(images);

//portfolio & servies & tech filter
const filterInit = ()=>{
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        const buttons = container.querySelectorAll('.filter-menu button[data-filter]');
        const items = container.querySelectorAll('.content-list .content[data-filter]');

        const applyFilter = (filterType) => {
            items.forEach(item => {
                if (filterType === 'all') {
                    item.hidden = false;
                } else {
                    item.hidden = item.dataset.filter !== filterType;
                }
            });
        };

        container.addEventListener('click', e=>{
            const btn = e.target.closest('button[data-filter]');
            if (!btn) return;

            const filterType = btn.dataset.filter;

            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            applyFilter(filterType);
        });
        
        const activeBtn = container.querySelector('.filter-menu button.active');
        if (activeBtn) {
            applyFilter(activeBtn.dataset.filter);
        }
    });
};

filterInit();

//about & tech scroll
    const animationMove = function(selector){
        const target = document.querySelector(selector);
        console.log(target);
        const browserScrollY = window.scrollY;
        const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
        window.scrollTo({top: targetScrollY - 45, behavior:'smooth'})
    }

    const scrollMoveEl = document.querySelectorAll('[data-animation-scroll="true"]');
    console.log(scrollMoveEl);
    for(let i = 0 ; i< scrollMoveEl.length ; i++){
        scrollMoveEl[i].addEventListener("click",function(e){
            animationMove(this.dataset.target);
        })
    }

//home animation
const saTriggerMargin = 150;
const saElementList = document.querySelectorAll('.motion');

const saFunc = function() {
    $.each(saElementList, function(index, element) {
        if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
                element.classList.add('show');
            }
        }
    });
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);

// 모든 팝업 열기/닫기 관리
for (let i = 1; i <= 8; i++) {
    const openBtn = document.querySelector(`.popup-o${i}`);
    const popupEl = document.querySelector(`.popup${i}`);

    if (openBtn && popupEl) {
        // 열기 버튼 클릭 시 팝업 열기
        openBtn.addEventListener("click", () => {
            popupEl.classList.add("on");
        });

        // 팝업 안에 닫기 버튼(.popup-x)이 있다면 닫기 기능 추가
        const closeBtn = popupEl.querySelector(".popup-x");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                popupEl.classList.remove("on");
            });
        }
    }
}

//모바일 반응형
// 모바일 메뉴 토글 (슬라이드 인/아웃)
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".home-nav");

    if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("open");
    });

    // 메뉴 클릭 시 자동 닫힘
    nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        nav.classList.remove("open");
        });
    });
    }
});

