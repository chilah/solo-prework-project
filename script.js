const btn = document.getElementById('btn');
const titleText = document.querySelector('.home-title h1');
const featureItem = document.querySelectorAll('.feature-item');

window.onscroll = function() {
    showBtn();
}

function showBtn() {
    let scrollPosition = document.documentElement.scrollTop;
    
    if (scrollPosition > 300)  {
        btn.className = 'showbtn'; 
        titleText.className = 'slideDown'; 

        featureItem.forEach(item => item.classList.add('animate'))
    } else {
        btn.className = 'gotopbtn';
    }
}

btn.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}