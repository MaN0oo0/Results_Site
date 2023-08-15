$(function () {
  fetch("../json/json_data.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      $.each(json, function (i, e) {
        Templte(e.Name, e.Quantity, e.Price, e.Color, e.Size);
        getTotal();
      });
    });

  let conte = 0;
  function Templte(Name, Quantity, Price, Color, Size) {
    conte++;
    var row = `
    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0" id="Photo">
    <div
    class="bg-image hover-overlay hover-zoom ripple rounded"
    data-mdb-ripple-color="light"
  >
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
      class="w-100"
    />
    <a href="#!">
      <div
        class="mask"
        style="background-color: rgba(251, 251, 251, 0.2)"
      ></div>
    </a>
  </div>
    </div>
    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0" id="infoData">

        <p><strong>${Name}</strong></p>
        <p>Color: ${Color}</p>
        <p>Size: ${Size}</p>
        <p>Quantity: ${Quantity}</p>
       
      <button
      type="button"
      class="btn btn-primary btn-sm me-1 mb-2"
      data-mdb-toggle="tooltip"
      title="Remove item"
    >
      <i class="fas fa-trash"></i>
    </button>
    <button
      type="button"
      class="btn btn-danger btn-sm mb-2"
      data-mdb-toggle="tooltip"
      title="Move to the wish list"
    >
      <i class="fas fa-heart"></i>
    </button>

        </div>
        
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 inputNum">
        <!-- Quantity -->
        <div class="d-flex mb-4" style="max-width: 300px">
          <button class="btn btn-primary down" onclick="down(${conte})">
            <i class="fas fa-minus"></i>
          </button>

          <div class="form-outline">
            <input
              id="m-${conte}"
              min="0"
              name="quantity"
              value="1"
              type="number"
              class="form-control"
              data-append="${conte}"
            />
            
          </div>

          <button class="btn btn-primary Up" onclick="up(${conte})">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <!-- Quantity -->

        <!-- Price -->
        
        <p class="text-start text-md-center">
        <strong class="priceContainer" id="P-${conte}"data-pric="${Price}">$${Price}</strong>
      </p>
        <!-- Price -->
      </div>
        `;

    $("#ROW").append(row);
  }
  console.log($("#ROW"));
});

function down(par) {
  let countUp = document.getElementById(`m-${par}`);
  countUp.stepDown();
  let OldPrice = document.getElementById(`P-${par}`).getAttribute("data-pric");

  console.log(countUp.value);
  let newPrice = Number(OldPrice * parseInt(countUp.value));
  console.log(newPrice);

  if (parseInt(OldPrice) != 0) {
    document.getElementById(`P-${par}`).innerHTML = `$${newPrice}`;
  } else {
    document.getElementById(`P-${par}`).innerHTML = `$0`;
  }
  getTotal();
  console.log("down");
}

function up(par) {
  let countUp = document.getElementById(`m-${par}`);
  let OldPrice = document.getElementById(`P-${par}`).getAttribute("data-pric");
  countUp.stepUp();
  console.log(countUp.value);
  let newPrice = Number(OldPrice * parseInt(countUp.value));
  console.log(newPrice);
  document.getElementById(`P-${par}`).innerHTML = `$${newPrice}`;
  document.getElementById(`P-${par}`).setAttribute("data-pric", newPrice);
  getTotal();
  console.log("up");
}

function getTotal() {
  var priceContainer = document.querySelectorAll(".priceContainer");
  var total = 0;
  for (let index = 0; index < priceContainer.length; index++) {
    total += Number(priceContainer[index].getAttribute("data-pric"));
  }
  console.log(total);
  document.getElementById("total").innerHTML = `$${total}`;
}
