// 리스트 클릭 활성화
const list = document.querySelectorAll('.list');
function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));

// 텍스트 마퀴 스크롤
const pTag1 = document.querySelector('.first-parallel');
const pTag2 = document.querySelector('.second-parallel');
const pTag3 = document.querySelector('.third-parallel');
const pTag4 = document.querySelector('.forth-parallel');

const textArr1 = 'Yummy Tasty Delicious Useful Coding Yummy Yummmmy Yummmmmmmmmy yum'.split(' ');
const textArr2 = 'Chicken Hamburger Pizza Salad Sushi Ramen Gimbab JJajangmyeon'.split(' ');
const textArr3 = "Let's Dive Into This Tutorial Take It Easy! Don't Worry".split(' ');
const textArr4 = 'Pure Moral Conscientious Meritorious Worthy Exemplary Upright'.split(' ');

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);
initTexts(pTag3, textArr3);
initTexts(pTag4, textArr4);

function initTexts(element, textArray) {
  textArray.push(...textArray);
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
  }
}

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`;
    count = 0;
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`;
  return count;
}

function animate() {
  count1++;
  count2++;
  count3++;
  count4++;

  count1 = marqueeText(count1, pTag1, -1);
  count2 = marqueeText(count2, pTag2, 1);
  count3 = marqueeText(count3, pTag3, -1);
  count4 = marqueeText(count4, pTag4, 1);

  window.requestAnimationFrame(animate);
}

function scrollHandler() {
  count1 += 15;
  count2 += 15;
  count3 += 15;
  count4 += 15;
}

window.addEventListener('scroll', scrollHandler);
animate();

// 모달 기능
const modal = document.getElementById('resumeModal');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// 팝업 모달 기능
document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.popup-btn');
  const closeButtons = document.querySelectorAll('.close-btn');

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popupId = button.getAttribute('data-popup');
      document.getElementById(popupId).style.display = 'block';
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });
});

// Intersection Observer로 스크롤 애니메이션 처리
const allSections = document.querySelectorAll('.first-section, .second-section, .third-section, .profiletext, .profile, .namebox, .item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 // 10%가 보이면 활성화
});

// 관찰 대상 섹션에 대해 관찰 시작
allSections.forEach(section => {
  observer.observe(section);
});


const textElement = document.querySelector('.animated-text');
const text = textElement.textContent;
textElement.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
