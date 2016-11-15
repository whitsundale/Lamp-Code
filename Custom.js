var count = 1;

function increment() {
  document.getElementById('custom').innerHTML += "\n<input type=\"number\" value=\"" + count.toString() + "\">\n<input type=\"color\">";
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
  document.getElementById('custom').innerHTML.replace("\n<input type=\"number\" value=\"" + count.toString() + "\">\n<input type=\"color\">", "");
  count--;
}
