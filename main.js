var menu_list = ["Margherita", "Farm House", "Peppy Paneer", "Mexican Green Wave", "Veg Extravaganza"];
function get_menu() {
    var htmldata1;
    htmldata1 = "<ol>";
    menu_list.sort();
    for (var i = 0; i<menu_list.length; i++) {
        htmldata1 = htmldata1 + "<li>" + menu_list[i] + "</li>";
    }
    htmldata1 = htmldata1 + "</ol>";
    document.getElementById("menu_box").innerHTML = htmldata1;
}
function add_item() {
    var htmldata2;
    var item = document.getElementById("recommend_pizza").value;
    menu_list.push(item);
    menu_list.sort();
    htmldata2 = "<section class='card'>";
    for (j = 0; j<menu_list.length; j++) {
        htmldata2 = htmldata2 + "<div class='cards'>" + "<img height='20' src='https://toppng.com/uploads/preview/pizza-png-11553999379orjd1miyt1.png'>" + menu_list[j] + "</div>";
    }
    htmldata2 = htmldata2 + "</section/";
    document.getElementById("cards_div").innerHTML = htmldata2;
}