require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind("page.change", function(e, config) {
        $(".book-header .pull-left").last().before($("<div class='unic-logo'><img src='http://www.unic.com/img/unic-logo.png' /></div>"));

        $(".font-family-list").hide();

        $(".book-summary .active").parents(".chapter").addClass("unic-active")
    });

});
