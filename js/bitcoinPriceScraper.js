
function loadData(price){
    $("#center").fadeOut("fast", function() {
        var center =  document.getElementById("center");
        center.innerHTML = '<span id="prezzo" class="alignHorizontal"></span>';

        var priceObj = document.getElementById("prezzo");
        priceObj.innerHTML = price.toFixed(2).toString().replace(".", ",") +"€";
        $("#center").fadeIn("fast", function() {})
    });
}

function Get(url){
    $.getJSON(url, function( data ) {
        var d = data["result"]["XXBTZEUR"];
        if("a" in d && d["a"].length >= 1)
        var priceNow = parseFloat(d["a"][0]);
        loadData(priceNow);
    });

}