document.getElementById("submit").onclick = function () {
  const name = document.getElementById("name");

  let checked_count = 0;
  document.getElementsByName("drama").forEach(function (checkbox) {
    if (checkbox.checked) {
      checked_count++;
    }
  });

  alert(name.value + "님 저와 " + checked_count + "개의 취향이 같으시네요!");
};
