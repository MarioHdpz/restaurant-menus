// On image click download pdf
$(document).ready(function() {
    $(".logo").click(function() {
        var pdf_link = $(this).attr("pdf");
        window.location.href = pdf_link;
    });
});