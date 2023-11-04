$(".Tops").load("../Components/thanwyTops.html");

let renderBody = $("#renderBody");
$(renderBody).hide();
const routes = $(".quick");

$(routes).on("click", function (e) {
  $(".containerx").removeClass("d-none");
  $(".containerx").fadeIn(10);
  let target = e.target.classList[1];
  console.log(target);
  if (!e.target.classList[1]) {
    location.reload();
  }
  switch (target) {
    case "thanwy":
      $(".containerx").fadeOut(1000);
      $(renderBody).show(1100);
      renderBody.load("../Components/thanwyComp.html", "", () => {
        $("#btnsub").focus();
      });
      break;

    case "ebtedaey":
    case "aedady":
    case "deplom":
    default:
      $(".containerx").fadeOut(1000);
      renderBody.load("../Components/coningSoon.html", "", () => {
        $("#focs").focus();
      });
      break;
  }
});
