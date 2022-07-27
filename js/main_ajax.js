
$(function () {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "산문", sort: "latest", page: "5" },
        headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
    })
        .done(function (msg) {
            let new_box = document.getElementsByClassName("new_box");
            for (let i = 0; i < new_box.length; i++) {
                $(".img_box").eq(i).append('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".img_box").eq(i).append("<h3 class='img_h3'>" + '<a href="sub.html">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".txt_box").eq(i).append("<h3>" + '<a href="sub.html">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".txt_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


                let str = msg.documents[i].contents;
                let str2 = str.substring(0, 65);

                $(".txt_box").eq(i).append("<p>" + '<a href="sub.html">' + str2 + "..." + "</a>" + "</p>");
                $(".txt_box").eq(i).append('<a href="sub.html" class="btn">' + "more" + "</a>");

            }
        });//상단8개

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "에세이", sort: " accuracy", page: "11" },
        headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
    })
        .done(function (msg) {
            let essay_box = document.getElementsByClassName("essay_box");
            for (let i = 0; i < essay_box.length; i++) {
                $(".essay_box").eq(i).append('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".essay_box").eq(i).append("<h3>" + '<a href="sub.html">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".essay_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


                let str = msg.documents[i].contents;
                let str2 = str.substring(0, 92);

                $(".essay_box").eq(i).append("<p>" + '<a href="sub.html">' + str2 + "..." + "</a>" + "</p>");
                $(".essay_box").eq(i).append('<a href="sub.html" class="btn">' + "MORE" + "</a>");
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
                $(".novel_box").eq(i).append('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".novel_box").eq(i).append("<h3>" + '<a href="sub.html">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".novel_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


                let str = msg.documents[i].contents;
                let str2 = str.substring(0, 92);

                $(".novel_box").eq(i).append("<p>" + '<a href="sub.html">' + str2 + "..." + "</a>" + "</p>");
                $(".novel_box").eq(i).append('<a href="sub.html" class="btn">' + "MORE" + "</a>");
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
                $(".poem_box").eq(i).append('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".poem_box").eq(i).append("<h3>" + '<a href="sub.html">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".poem_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


                let str = msg.documents[i].contents;
                let str2 = str.substring(0, 92);

                $(".poem_box").eq(i).append("<p>" + '<a href="sub.html">' + str2 + "..." + "</a>" + "</p>");
                $(".poem_box").eq(i).append('<a href="sub.html" class="btn">' + "MORE" + "</a>");
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
                $(".audio_box").eq(i).append('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".audio_box").eq(i).append("<h3>" + '<a href="sub.html">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".audio_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


                let str = msg.documents[i].contents;
                let str2 = str.substring(0, 92);

                $(".audio_box").eq(i).append("<p>" + '<a href="sub.html">' + str2 + "..." + "</a>" + "</p>");
                $(".audio_box").eq(i).append('<a href="sub.html" class="btn">' + "MORE" + "</a>");
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
                $(".enlightenment_box").eq(i).append('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".enlightenment_box").eq(i).append("<h3>" + '<a href="sub.html">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".enlightenment_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


                let str = msg.documents[i].contents;
                let str2 = str.substring(0, 92);

                $(".enlightenment_box").eq(i).append("<p>" + '<a href="sub.html">' + str2 + "..." + "</a>" + "</p>");
                $(".enlightenment_box").eq(i).append('<a href="sub.html" class="btn">' + "MORE" + "</a>");
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
                $(".art_box").eq(i).append('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".art_box").eq(i).append("<h3>" + '<a href="sub.html">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".art_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


                let str = msg.documents[i].contents;
                let str2 = str.substring(0, 92);

                $(".art_box").eq(i).append("<p>" + '<a href="sub.html">' + str2 + "..." + "</a>" + "</p>");
                $(".art_box").eq(i).append('<a href="sub.html" class="btn">' + "MORE" + "</a>");
            }
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설", sort: " accuracy", page: "5" },
        headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
    })
        .done(function (msg) {
            let slide_box = document.getElementsByClassName("slide_box");
            for (let i = 0; i < slide_box.length; i++) {
                $(".slide_img").eq(i).append('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".slide_txt").eq(i).append("<h3>" + '<a href="sub.html">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".slide_txt").eq(i).append("<h5>" + msg.documents[i].authors + " | " + msg.documents[i].publisher + "</h5>");
            }
        });

});