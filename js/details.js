var Details = (function(){
    var $content;

    function loadPerson(ID) {
        //var ID = $(evt.target).attr('rel').split('-')[2];

        $.ajax("details/" + ID + ".html", {dataType: "text"})
            .then(function(contents){
                $content.html(contents);
            })
    }

    function init() {
        $content = $("[rel=js-details]");
    }

    return {
        init: init,
        loadPerson: loadPerson
    }
})();


