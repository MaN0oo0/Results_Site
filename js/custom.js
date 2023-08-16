$(document).ready(function () {
  //#region Get Result
  $("#btnsub").click(function () {
    var seat = $("#Seating_No").val();
    if ($("#Seating_No").val() == "" || seat.length < 7 || seat.length > 7) {
      alert("اكتب رقم الجلوس");
      $("#Seating_No").val("");
      return;
    }

    $(".tbl").addClass("d-none");
    $("#data").html("");

    var mainUrl =
      "https://resultservices.bsite.net/api/results/ShowResult?seating_no=";
    $.ajax({
      url: `${mainUrl}${$("#Seating_No").val()}`,
      type: "POST",
    })
      .done(function (server_data, status) {
        $(".containerx").removeClass("d-none");
        $(".containerx").fadeOut("slow", function () {
          $(".tbl").removeClass("d-none");
          var row = ``;
          $.each(server_data, function (i, e) {
            row = `<tr><td>${e.seating_no}</td><td>${e.arabic_name}</td><td id="TotalDeg">${e.total_degree}</td><td>${e.student_case_desc}</td></tr>`;
          });
          $("#data").append(row);

          $("#Seating_No").val("");
          $(".loader").text("");
          $(".func").addClass("d-flex");
          console.log("success");
        });
      })
      .fail(function (jqXHR, status, err) {
        console.log(status);
        console.log(err);
        console.log(jqXHR.responseJSON["message"]);
        if (jqXHR.responseJSON["code"] == "402") {
          alert("رقم الجلوس غير موجود");
          $("#Seating_No").val("");
        }
      });
  });

  //#endregion

  $("#calc").on("click", function () {
    let TotalDeg = $("#TotalDeg").text();
    console.log(TotalDeg);
    if (!isNaN(+TotalDeg)) {
      let Deg = +(TotalDeg / 410) * 100;
      console.log(Math.round(Deg));
      // $(":root").css("--content", Math.round(Deg) + "%");

      $(".loader.active").css({
        content: Math.round(Deg) + "%",
        width: Math.round(Deg) + "%",
      });
      $(".loader").text(`${Deg} %`);
    }
  });
});
