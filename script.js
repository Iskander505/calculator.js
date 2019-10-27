let actionButton = document.querySelector(".to_calculate");

actionButton.onclick = function() {
  let firstVariable = document.querySelector(".n1").value;
  let operation = document.querySelector("select");
  let secondVariable = document.querySelector(".n2").value;
  if (firstVariable !== "" && secondVariable !== "") {
    if (operation[0].selected) {
      document.querySelector(".Res").value =
        parseInt(firstVariable, 10) + parseInt(secondVariable, 10);
    }
    if (operation[1].selected) {
      document.querySelector(".Res").value =
        parseInt(firstVariable, 10) - parseInt(secondVariable, 10);
    }
    if (operation[2].selected) {
      document.querySelector(".Res").value =
        parseInt(firstVariable, 10) * parseInt(secondVariable, 10);
    }
    if (operation[3].selected && secondVariable != "0") {
      document.querySelector(".Res").value =
        parseInt(firstVariable, 10) / parseInt(secondVariable, 10);
    }
  }else{
      alert("Error");
  }
};
