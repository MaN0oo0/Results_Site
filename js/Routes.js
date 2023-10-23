let renderBody = $("#renderBody");

let routes = $(".navbar-nav .nav-item .nav-link");

$(routes).on("click", function (e) {
  let target = e.target.classList[1];

  // if(e.target.classList[1]){

  // }
  switch (target) {
    case "thanwy":
      renderBody.load("../Components/thanwyComp.html");
      break;

    default:
      break;
  }
});
