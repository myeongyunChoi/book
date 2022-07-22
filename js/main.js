let slide = document.querySelector(".bg_slide");
let slide_img = document.querySelectorAll(".bg_slide > li");
let idx = 0;
slide_count = slide_img.length;
let bg_prev = document.querySelector(".bg_prev");
let bg_next = document.querySelector(".bg_next");
slide_width = window.innerWidth;
make_clone();
start();

function make_clone() {
    let clone_first = slide_img[0].cloneNode(true);
    let clone_last = slide.lastElementChild.cloneNode(true);
    slide.append(clone_first);
    slide.insertBefore(clone_last, slide.firstElementChild);
}//무한슬라이드를 위한 클론 생성 윈도우 이너에 들어가는 박스 수만큼

function start() {
    slide.style.width = slide_width * (slide_count + 2) + "px";
    slide.style.left = -(slide_width) + "px";
}//슬라이드 한면의 넓이와 슬라이드 한 칸의 넓이

bg_next.addEventListener("click", function () {
    if (idx <= slide_count -1) {
        slide.style.left = -(idx + 2) * slide_width + "px";
        slide.style.transition = "0.75s ease-out";
    }
    if (idx === slide_count - 1) {
        setTimeout(function () {
            slide.style.left = -slide_width + "px";
            slide.style.transition = "0s ease-out";
        }, 750);
        idx = -1;
    }
    idx += 1;
});

bg_prev.addEventListener("click", function () {
    if (idx >= 0) {
        slide.style.left = -idx * slide_width + "px";
        slide.style.transition = `0.75s ease-out`;
    }
    if (idx === 0) {
        setTimeout(function () {
            slide.style.left = -slide_count * slide_width + "px";
            slide.style.transition = `0s ease-out`;
        }, 500);
        idx = slide_count;
    }
    idx -= 1;
});


cate.onclick = function (e) {
    let cat = document.querySelectorAll(".category li");
    let best_inner = document.querySelectorAll(".best_wrap > div");
    for (var i = 0; i < cat.length; i++) {

        cat[i].classList.remove("col");
        if (e.target == cat[i]) {
            e.target.classList.add("col");
        }

        cat[i].setAttribute("data-index", i);
        best_inner[i].setAttribute("data-index", i);

        if (e.target.getAttribute("data-index") == best_inner[i].getAttribute("data-index")) {
            best_inner[i].style.opacity = "1";
            // }else if(e.target != cat[i]){
            //     best_inner[i].style.opacity = "1";
        } else {
            best_inner[i].style.opacity = "0";
        }
    }
}

let slides = document.querySelector(".slide");
let slideImg = document.querySelectorAll(".slide li");
currentIdx = 0;
slideCount = slideImg.length;
prev = document.querySelector(".prev");
next = document.querySelector(".next");
slideWidth = window.innerWidth / 5;//한 화면에 출력하고 싶은 이미지의 수
slideMargin = 0;
initfunction();

function initfunction() {
    slides.style.width = slideWidth * slideCount + "px";
}//전체 넓이는 클론 개수 포함, 슬라이드 한면의 넓이와 슬라이드 한 칸의 넓이

next.addEventListener("click", function () {
    if (currentIdx <= slideCount - 1) {
        slides.style.left = -(currentIdx + 1) * (slideWidth + slideMargin) + "px";
        slides.style.transition = "0.75s ease-out";
        next.style.display ="inline";
        prev.style.display ="inline";
    }
    if (currentIdx === slideCount - 6) {
        next.style.display ="none";
    }else if(currentIdx <= slideCount - 6){
        next.style.display ="inline";
    }
    currentIdx += 1;
});
prev.addEventListener("click", function () {
    if (currentIdx >= 0) {
        slides.style.left =  -(currentIdx - 1) * (slideWidth + slideMargin) + "px";
        slides.style.transition =  "0.75s ease-out";
        next.style.display ="inline";
    }
    if (currentIdx === 1) {
        prev.style.display="none"
        next.style.display ="inline";
    }
    currentIdx -= 1;
});


$(function () {
    $(".new_box").children().mouseover(function () {
        $(this).children(".img_h3").hide();
        $(this).siblings(".txt_box").stop().fadeIn(500).css("display", "flex");
    });
    $(".new_box").mouseleave(function () {
        $(".txt_box").hide();
        $(".img_h3").fadeIn(500);
    });
});

// let slides = document.querySelector(".slide");
// let slideImg = document.querySelectorAll(".slide li");
// currentIdx = 0;
// slideCount = slideImg.length;
// prev = document.querySelector(".prev");
// next = document.querySelector(".next");
// slideWidth = window.innerWidth / 5;//한 화면에 출력하고 싶은 이미지의 수
// slideMargin = 0;
// makeClone();
// initfunction();
// function makeClone() {
//     let cloneSlide_first = slideImg[0].cloneNode(true);
//     let cloneSlide_second = slideImg[1].cloneNode(true);
//     let cloneSlide_third = slideImg[2].cloneNode(true);
//     let cloneSlide_fourth = slideImg[3].cloneNode(true);
//     let cloneSlide_five = slideImg[4].cloneNode(true);
//     let cloneSlide_last = slides.lastElementChild.cloneNode(true);
//     slides.append(cloneSlide_first);
//     slides.append(cloneSlide_second);
//     slides.append(cloneSlide_third);
//     slides.append(cloneSlide_fourth);
//     slides.append(cloneSlide_five);
//     slides.insertBefore(cloneSlide_last, slides.firstElementChild);
// }//무한슬라이드를 위한 클론 생성 윈도우 이너에 들어가는 박스 수만큼( 5 )

// function initfunction() {
//     slides.style.width = slideWidth * (slideCount + 6) + "px";
//     slides.style.left = -(slideWidth) + "px";
// }//전체 넓이는 클론 개수 포함, 슬라이드 한면의 넓이와 슬라이드 한 칸의 넓이

// next.addEventListener("click", function () {
//     if (currentIdx <= slideCount - 1) {
//         slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + "px";
//         slides.style.transition = "0.75s ease-out";
        
//     }
//     if (currentIdx === slideCount - 1) {
//         setTimeout(function () {
//             slides.style.left = -(slideWidth + slideMargin) + "px";
//             slides.style.transition = "0s ease-out";
//         }, 750);
//         currentIdx = -1;
//     }
//     currentIdx += 1;
// });
// prev.addEventListener("click", function () {
//     if (currentIdx >= 0) {
//         slides.style.left = -currentIdx * (slideWidth + slideMargin) + "px";
//         slides.style.transition =  "0.75s ease-out";
//     }
//     if (currentIdx === 0) {
//         setTimeout(function () {
//             slides.style.left = -slideCount * (slideWidth + slideMargin) + "px";
//             slides.style.transition = "0s ease-out";
//         }, 500);
//         currentIdx = slideCount;
//     }
//     currentIdx -= 1;
// });


