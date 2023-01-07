$(document).ready(function()
{
    $("#search").on("keyup", function()
    {
        var value = $(this).val().toLowerCase();
        $("#listi li").filter(function()
        {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
