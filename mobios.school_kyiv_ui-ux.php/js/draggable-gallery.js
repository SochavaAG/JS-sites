$(window).load(function() {
    /*/jquery ui silder*/
    var b = document.querySelectorAll('.draggable-row-2 > *'), xli = 0;
    /*собирает все li из draggable-row-1 в массив */
    for (var i = 0, j = b.length; i < j; i++) {
        xli += b[i].offsetWidth;
    }
    var b = document.querySelectorAll('#draggable > *');
    for (var i = 0, j = b.length; i < j; i++) {
        b[i].style.width = xli + 50 + "px";
        b[i].style.overflow = 'hidden';
        b[i].style.height = document.querySelector('#draggable img').offsetHeight + 'px';
    }
    var scrWith = $(window).width();
    var halfWidth = (xli - scrWith) / 2;

    var dragable = document.getElementById('draggable')
    dragable.style.left = "-" + halfWidth + "px";
    $(function (drag) {
        $("#draggable").draggable({
            axis: "x",
            drag: function (event, ui) {
                var dragableLeft = parseInt(dragable.style.left);
                xli2 = parseInt(xli);
                xli3 = "-" + (xli2 - scrWith);
                if (dragableLeft >= 0) {
                    ui.position.left = Math.min(0, ui.position.left);
                } else if (dragableLeft <= xli3) {
                    ui.position.left = Math.max(xli3, ui.position.left);
                };
            },
        });
    });
});


