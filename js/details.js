var Details = (function(){
    var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
    var $content = $("[rel=js-details]");

    function loadPerson(evt) {
        //var ID = $(evt.target).attr('rel').split('-')[2];

        var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/, "$1");

        $.ajax("details/" + ID + ".html", {dataType: "text"})
            .then(function(contents){
                $content.html(contents);
            })
    }

    function init() {
        $items.on("click", "[rel*='js-item-']", loadPerson);
    }

    return {
        init: init
    }
})();



$(document).ready(Details.init);
