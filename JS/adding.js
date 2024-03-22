function clear() {
  alert("Очистил!");
  console.log("Очистил");
}

function process() {
  var plane_name = document.Name.value;
  document.getElementById(process).innerHTML =
    "<b>Name</b>:" + plane_name + "<br>";
}

// function process() {
//   var cat_title = document.new_cat.cat_title.value;
//   var cat_description = document.new_cat.cat_description.value;
//   var cat_type = document.new_cat.cat_type.value;
//   document.getElementById("process").innerHTML =
//     "<b>Имя кота:</b>" + cat_title + "<br>";
//   document.getElementById("process").innerHTML +=
//     "<b>Описание кота:</b><br>" + cat_description + "<br>";
//   var type_name = "";
//   if (cat_type == 1) {
//     type_name = "Домашние";
//   } else if (cat_type == 2) {
//     type_name = "Пантеры";
//   } else {
//     type_name = "Пумы";
//   }
//   document.getElementById("process").innerHTML +=
//     "<b>Вид:</b>" + type_name + "<hr>";
// }
