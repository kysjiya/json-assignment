import productdata from './productpage.json' assert {type: 'json'};

console.log(productdata)

for (let i=0; i < productdata.length; i++) {
    document.getElementById('cardelements').innerHTML +=`
<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${productdata[i].productimage}" class="img-fluid rounded-start" id="productimage" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" id="name">${productdata[i].productname}</h5>
              <p class="card-text" id="description">${productdata[i].productdescription}</p>
              <p class="card-text" id="price">${productdata[i].productrating}</p>
              <p class="card-text" id="rating">${productdata[i].productprice}</p>
            </div>
          </div>
        </div>
      </div>
      `

}

