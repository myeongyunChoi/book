const count = document.querySelector(".count");
const price = document.querySelector(".total_price");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

plus.addEventListener("click", function () {
    count.value++;
    if (count.value > 100) {
        alert("100권 초과 구매는 불가능합니다.");
        count.value = 1;
    }
    let t_price = count.value * 10620 + "원";
    price.innerHTML = t_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
});

minus.addEventListener("click", function () {
    count.value--;
    if (count.value <= 0) {
        count.value = 1;
        alert("1권 이상 구매가 가능합니다.");
    }
    let t_price = count.value * 10620 + "원";
    price.innerHTML = t_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
});

count.addEventListener("keyup", function () {
    if (isNaN(count.value)) {
        alert("숫자를 입력하세요.");
        count.value = 1;
    } else if (count.value % 1 != 0) {
        alert("수량을 정수로 입력하세요.");
        count.value = 1;
    } else if (count.value > 100) {
        alert("100권 초과 구매는 불가능합니다.");
        count.value = 1;
    } else if (count.value <= 0) {
        count.value = 1;
        alert("1권 이상 구매가 가능합니다.");
    }
    let t_price = count.value * 10620 + "원";
    price.innerHTML = t_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
});

function login() {
    alert("로그인 후 이용가능합니다.");
}

function selectAll(selectAll) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = selectAll.checked;
    })
}


let win_top = window.scrollY;
const review_btn = document.querySelector(".review_btn");

review_btn.addEventListener("click", function () {
    const review_top = document.querySelector("#guide").offsetTop + document.querySelector(".review").offsetTop;
    window.scrollTo({ top: review_top, behavior: "smooth" });
});


$(function () {
    $.get("txt/sub/detail.txt", function (data) {
        $(".book_detail").html(data);
    })
});

$(function () {
    $.get("txt/sub/detail_more.txt", function (data) {
        $(".detail_more").html(data);
    })
});

$(function () {
    $.get("txt/sub/review.txt", function (data) {
        $(".review_page").html(data);
    })
});

const more_btn = document.querySelector(".more_btn");
const close_btn = document.querySelector(".close_btn");
const detail_more = document.querySelector(".detail_more_wrap");
const more_box = document.querySelector(".more_box");

more_btn.onclick = function () {
    more_box.classList.add("hide");
    detail_more.classList.remove("hide");
};

close_btn.onclick = function () {
    more_box.classList.remove("hide");
    detail_more.classList.add("hide");
};

const right_count = document.querySelector(".right_count");
const right_total = document.querySelector(".right_total");
const right_plus = document.querySelector(".right_plus");
const right_minus = document.querySelector(".right_minus");

right_plus.addEventListener("click", function () {
    right_count.value++;
    if (right_count.value > 100) {
        alert("100권 초과 구매는 불가능합니다.");
        right_count.value = 1;
    }
    let right_t_price = right_count.value * 10620 + "원";
    right_total.innerHTML = right_t_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
});

right_minus.addEventListener("click", function () {
    right_count.value--;
    if (right_count.value <= 0) {
        right_count.value = 1;
        alert("1권 이상 구매가 가능합니다.");
    }
    let right_t_price = right_count.value * 10620 + "원";
    right_total.innerHTML = right_t_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
});

right_count.addEventListener("keyup", function () {
    if (isNaN(right_count.value)) {
        alert("숫자를 입력하세요.");
        right_count.value = 1;
    } else if (right_count.value % 1 != 0) {
        alert("수량을 정수로 입력하세요.");
        right_count.value = 1;
    } else if (right_count.value > 100) {
        alert("100권 초과 구매는 불가능합니다.");
        right_count.value = 1;
    } else if (right_count.value <= 0) {
        right_count.value = 1;
        alert("1권 이상 구매가 가능합니다.");
    }
    let right_t_price = right_count.value * 10620 + "원";
    right_total.innerHTML = right_t_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
});
