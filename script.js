const btn = document.getElementById('btn');
const titleText = document.querySelector('.home-title h1');

console.log(titleText.classList);

window.onscroll = function() {
    showBtn();
}

function showBtn() {
    let scrollPosition = document.documentElement.scrollTop;
    
    if (scrollPosition > 300)  {
        btn.className = 'showbtn'; 
        titleText.className = 'slideDown'; 
    } else {
        btn.className = 'gotopbtn';
    }
}

function scrollToTop() {
    let position = document.documentElement.scrollTop;

    setInterval(() => {
        if (position < 0) {
            clearInterval();
        } else {
            position = position - 10;
            document.documentElement.scrollTop = position;
        }
    }, 1);  
}

btn.addEventListener('click', scrollToTop)


