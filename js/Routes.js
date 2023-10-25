$(".Tops").load("../Components/thanwyTops.html");

let renderBody = $("#renderBody");

const routes = $(".quick");

$(routes).on("click", function (e) {
  let target = e.target.classList[1];
  console.log(target);
  if (!e.target.classList[1]) {
    location.reload();
  }
  switch (target) {
    case "thanwy":
      renderBody.load("../Components/thanwyComp.html", "", () => {
        $("#Seating_No").focus();
      });
      break;

    default:
      renderBody.load("../Components/coningSoon.html", "", () => {
        $("#focs").focus();
      });
      break;
  }
});
