
document.getElementById("calc-chickens").onclick = () => {
  const price = parseInt(document.getElementById("price-ch").value);
  const howManyChickens = parseInt(document.getElementById("chickens").value);
  const money = parseInt(document.getElementById("money").value);
  if (money >= howManyChickens * price) {
    document.getElementById("result-ch").innerHTML = "Вам вистачить цих грошей.";
  } else {
    document.getElementById("result-ch").innerHTML = "Вам не вистачить цих грошей на " +
    parseInt(((howManyChickens * price - money) / price + 1)) + " курку(-ей).";
  }
}
document.getElementById("calc-corm").onclick = () => {
  const price = parseInt(document.getElementById("price-c").value);
  const money = parseInt(document.getElementById("price-on").value);
  const howManyCorm = parseInt(document.getElementById("corm-c").value);
  if (money >= howManyCorm * price) {
    document.getElementById("result-corm").innerHTML = "Вам вистачить грошей.";
  } else {
    document.getElementById("result-corm").innerHTML = "Вам не вистачить грошей на " +
    parseInt(((howManyCorm * price - money) / price + 1)) + " кілограм(-ів) корму.";
  }
}
