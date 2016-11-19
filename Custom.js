var count = 2;

function increment() {
  document.getElementById('custom').innerHTML += "\n<input type=\"number\" value=\"" + count.toString() + "\" id=\"value" + count.toString() + "\">\n<input type=\"color\">";
  count++;
}

function removeAlert() {
  document.getElementById('custom').innerHTML.replace("\n<p style=\"color:red\">You cannot remove the first field.</p>", "");
}

function decrement() {
  if count == 1 {
    document.getElementById('custom').innerHTML += "\n<p style=\"color:red\">You cannot remove the first field.</p>";
    setTimeout(removeAlert, 3000);
    return
  }
  document.getElementById('custom').innerHTML.replace("\n<input type=\"number\" value=\"" + (count - 1).toString() + "\" id=\"value" + (count - 1).toString() + "\">\n<input type=\"color\">", "");
  count--;
}

function subm() {
  var form = $("#custom").serializeArray();
  var red = null;
  var green = null;
  var blue = null;
  var index = null;
  for (i = 0; i < form.length; i++) {
    switch (form[i]["name"]){
      case "red":
        red = form[i]["value"];
        break;
       case "green":
        green = form[i]["value"];
        break;
      case "blue":
        blue = form[i]["value"];
        break;
      case "index":
        index = form[i]["value"];
        break;
      default:
        alert("Invalid input!");
     }
    if (red && green && blue && index) {
      var webp = "https://agent.electricimp.com/LbCwF8_YvW3f?red=" + red + "&green=" + green + "&blue=" + blue + "&index=" + index;
      $.get(webp, function(data, status){
        if (status != "success")
          alert("Send failed. Please try again. Message:" + data);
      });
      red = null;
      green = null;
      blue = null;
      index = null;
    }
  }
}
