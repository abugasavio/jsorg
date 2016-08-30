var Details = (function(){
    var $content;

    function loadPerson(ID) {
        //var ID = $(evt.target).attr('rel').split('-')[2];

        $.ajax("details/" + ID + ".html", {dataType: "text"})
            .then(function(contents){
                $content.html(contents);
            })
    }

    function selectedPerson(evt) {
        evt.preventDefault();
        var ID = $(evt.target).attr("data-person");
        EVT.emit("person-selected", ID);

    }

    function init() {
        $content = $("[rel=js-details]");

        $content.on("click", "[rel='js-select-person']", selectedPerson);

        EVT.on("person-selected", loadPerson);
    }

    EVT.on("init", init);

    return {
        init: init,
        loadPerson: loadPerson
    }
})();


