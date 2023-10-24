import fs from "fs/promises";

document.getElementById("wwww").addEventListener("click", () => {
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "http://www.example.org/example.txt");
  req.send();
  $.ajax({
    url: "https://localhost:7240/api/results/GetHtml",
    type: "get",
  })
    .done(function (server_data) {
      console.log("success" + server_data);

      fs.writeFile("all.html", server_data, "utf-8", () => {});
      new File(server_data, "foo.txt", {
        type: "text/plain",
      });
    })
    .fail(function (jqXHR, status, err) {
      console.log("fail" + err);
    });
});

$("#ff").on("click", () => {});
