$(function(){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "산문", sort: "latest", page: "5" },
    headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
})
    .done(function (msg) {
        let new_box = document.getElementsByClassName("new_box");
        for (let i = 0; i < new_box.length; i++) {
            $(".img_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".img_box").eq(i).append("<h3 class='img_h3'>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".txt_box").eq(i).append("<h3>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".txt_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


            let str = msg.documents[i].contents;
            let str2 = str.substring(0, 65);

            $(".txt_box").eq(i).append("<p>" + '<a href="">' + str2 + "..." + "</a>" + "</p>");
            $(".txt_box").eq(i).append('<a href="#" class="btn">' + "more" + "</a>");

        }
    });//상단8개


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


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "에세이", sort: " accuracy", page: "11" },
    headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
})
    .done(function (msg) {
        let essay_box = document.getElementsByClassName("essay_box");
        for (let i = 0; i < essay_box.length; i++) {
            $(".essay_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".essay_box").eq(i).append("<h3>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".essay_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


            let str = msg.documents[i].contents;
            let str2 = str.substring(0, 92);

            $(".essay_box").eq(i).append("<p>" + '<a href="">' + str2 + "..." + "</a>" + "</p>");
            $(".essay_box").eq(i).append('<a href="#" class="btn">' + "MORE" + "</a>");
        }
    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "소설", sort: " accuracy", page: "11" },
    headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
})
    .done(function (msg) {
        let novel_box = document.getElementsByClassName("novel_box");
        for (let i = 0; i < novel_box.length; i++) {
            $(".novel_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".novel_box").eq(i).append("<h3>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".novel_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


            let str = msg.documents[i].contents;
            let str2 = str.substring(0, 92);

            $(".novel_box").eq(i).append("<p>" + '<a href="">' + str2 + "..." + "</a>" + "</p>");
            $(".novel_box").eq(i).append('<a href="#" class="btn">' + "MORE" + "</a>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "시", sort: " accuracy", page: "11" },
    headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
})
    .done(function (msg) {
        let poem_box = document.getElementsByClassName("poem_box");
        for (let i = 0; i < poem_box.length; i++) {
            $(".poem_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".poem_box").eq(i).append("<h3>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".poem_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


            let str = msg.documents[i].contents;
            let str2 = str.substring(0, 92);

            $(".poem_box").eq(i).append("<p>" + '<a href="">' + str2 + "..." + "</a>" + "</p>");
            $(".poem_box").eq(i).append('<a href="#" class="btn">' + "MORE" + "</a>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오디오북", sort: " accuracy", page: "10" },
    headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
})
    .done(function (msg) {
        let audio_box = document.getElementsByClassName("audio_box");
        for (let i = 0; i < audio_box.length; i++) {
            $(".audio_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".audio_box").eq(i).append("<h3>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".audio_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


            let str = msg.documents[i].contents;
            let str2 = str.substring(0, 92);

            $(".audio_box").eq(i).append("<p>" + '<a href="">' + str2 + "..." + "</a>" + "</p>");
            $(".audio_box").eq(i).append('<a href="#" class="btn">' + "MORE" + "</a>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "자기계발", sort: " accuracy", page: "11" },
    headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
})
    .done(function (msg) {
        let enlightenment_box = document.getElementsByClassName("enlightenment_box");
        for (let i = 0; i < enlightenment_box.length; i++) {
            $(".enlightenment_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".enlightenment_box").eq(i).append("<h3>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".enlightenment_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


            let str = msg.documents[i].contents;
            let str2 = str.substring(0, 92);

            $(".enlightenment_box").eq(i).append("<p>" + '<a href="">' + str2 + "..." + "</a>" + "</p>");
            $(".enlightenment_box").eq(i).append('<a href="#" class="btn">' + "MORE" + "</a>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "예술", sort: " accuracy", page: "11" },
    headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
})
    .done(function (msg) {
        let art_box = document.getElementsByClassName("art_box");
        for (let i = 0; i < art_box.length; i++) {
            $(".art_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".art_box").eq(i).append("<h3>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".art_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


            let str = msg.documents[i].contents;
            let str2 = str.substring(0, 92);

            $(".art_box").eq(i).append("<p>" + '<a href="">' + str2 + "..." + "</a>" + "</p>");
            $(".art_box").eq(i).append('<a href="#" class="btn">' + "MORE" + "</a>");
        }
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
});

let slides = document.querySelector(".slide");
let slideImg = document.querySelectorAll(".slide li");
currentIdx = 0;
slideCount = slideImg.length;
prev = document.querySelector(".prev");
next = document.querySelector(".next");
slideWidth = window.innerWidth / 5;//한 화면에 출력하고 싶은 이미지의 수
slideMargin = 0;
makeClone();
initfunction();
function makeClone() {
    // for(let i = 0; i< 5; i++){
    let cloneSlide_first = slideImg[0].cloneNode(true);
    let cloneSlide_second = slideImg[1].cloneNode(true);
    let cloneSlide_third = slideImg[2].cloneNode(true);
    let cloneSlide_fourth = slideImg[3].cloneNode(true);
    let cloneSlide_five = slideImg[4].cloneNode(true);
    let cloneSlide_last = slides.lastElementChild.cloneNode(true);
    slides.append(cloneSlide_first);
    slides.append(cloneSlide_second);
    slides.append(cloneSlide_third);
    slides.append(cloneSlide_fourth);
    slides.append(cloneSlide_five);
    slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}//무한슬라이드를 위한 클론 생성 윈도우 이너에 들어가는 박스 수만큼( 5 )

function initfunction() {
    slides.style.width = slideWidth * (slideCount + 6) + "px";
    slides.style.left = -(slideWidth) + "px";
}//슬라이드 한면의 넓이와 슬라이드 한 칸의 넓이

next.addEventListener("click", function () {
    if (currentIdx <= slideCount - 1) {
        slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + "px";
        slides.style.transition = "0.75s ease-out";
    }
    // for (let o = 0; o < slideCount; o++) {
    //     slideImg[o].classList.remove("opa");
    // }

    // let x = 5;
    // slideImg[x].classList.add("opa");
    // x++;
    // if( x == slideCount){
    //     x=9;
    // }


    if (currentIdx === slideCount - 1) {
        setTimeout(function () {
            slides.style.left = -(slideWidth + slideMargin) + "px";
            slides.style.transition = "0s ease-out";
        }, 750);
        currentIdx = -1;
    }
    currentIdx += 1;
});
prev.addEventListener("click", function () {
    if (currentIdx >= 0) {
        slides.style.left = -currentIdx * (slideWidth + slideMargin) + "px";
        slides.style.transition = `${0.5}s ease-out`;
    }
    if (currentIdx === 0) {
        setTimeout(function () {
            slides.style.left = -slideCount * (slideWidth + slideMargin) + "px";
            slides.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = slideCount;
    }
    currentIdx -= 1;
});

//
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "소설", sort: " accuracy", page: "5" },
    headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
})
    .done(function (msg) {
        let slide_box = document.getElementsByClassName("slide_box");
        for (let i = 0; i < slide_box.length + 6; i++) {
            $(".slide_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".slide_txt").eq(i).append("<h3>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".slide_txt").eq(i).append("<h5>" + msg.documents[i].authors + " | " + msg.documents[i].publisher + "</h5>");
        }
    });//슬라이드 도서
// const slider = document.querySelector(".slide");
// let isDown = false;
// let startX;
// let scrollLeft;

// // 시작했을 때 마우스 위치
// slider.addEventListener("mousedown", function (e) {
//     isDown = true;
//     startX = e.pageX;
//     scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener("mouseleave", function () {
//     isDown = false;
// });
// slider.addEventListener("mouseup", function () {
//     isDown = false;
// });
// slider.addEventListener("mousemove", function (e) {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX;
//     const walk = (x - startX);
//     slider.scrollLeft = scrollLeft - walk;
// });
