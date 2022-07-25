$(function(){

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "파라다이스1", sort:" accuracy", page: "1" },
        headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
    })
        .done(function (msg) {

            $(".book_img").append("<img src='" + msg.documents[1].thumbnail + "'/>");
        });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "베르나르베르베르", sort:" accuracy", page: "1" },
            headers: { Authorization: "KakaoAK 7825d323e9c066c84dbfeebce8829253" }
        })
            .done(function (msg) {
                let series_box = document.getElementsByClassName("series_box");
                for (let i = 0; i < series_box.length; i++) {
                    $(".series_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                    $(".series_box").eq(i).append("<h3>" + '<a href="">' + msg.documents[i].title + "</a>" + "</h3>");
                    $(".series_box").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
                }
            });    
});