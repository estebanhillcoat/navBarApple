let elemento = document.getElementById("mantiene").style.display;

if (elemento != "none") {
  document.getElementById("mantiene").style.display = "none";
} else {
  document.getElementById("mantiene").style.display = "block";
}

function chau() {
  let elemento = document.getElementById("mantiene").style.display;

  if (elemento == "block") {
    document.getElementById("mantiene").style.display = "none";
  } else {
    document.getElementById("mantiene").style.display = "block";
  }
}
