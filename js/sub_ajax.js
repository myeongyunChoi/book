$(function(){

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "파라다이스1", sort:" accuracy", page: "1" },
        headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
    })
        .done(function (msg) {

            $(".book_img").append("<img src='" + msg.documents[1].thumbnail + "'/>");

            // let essay_box = document.getElementsByClassName("essay_box");
            // for (let i = 0; i < essay_box.length; i++) {
            //     $(".essay_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            //     $(".essay_box").eq(i).append("<h3>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
            //     $(".essay_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


            //     let str = msg.documents[i].contents;
            //     let str2 = str.substring(0, 92);

            //     $(".essay_box").eq(i).append("<p>" + '<a href="">' + str2 + "..." + "</a>" + "</p>");
            //     $(".essay_box").eq(i).append('<a href="#" class="btn">' + "MORE" + "</a>");
            // }
        });
});