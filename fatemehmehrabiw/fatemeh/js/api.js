
		const app = document.querySelector("#app");
		let btnAdd = document.querySelector(".add")

		btnAdd.onclick = function () {

			let cityName = document.querySelector(".input").value;

			fetch(`http://api.weatherapi.com/v1/current.json?key=7547be5150a34989b67184641221712&q=${cityName}&aqi=no`)
				.then(res => res.json())
				.then(data =>
					app.innerHTML = `
		<div class="weather w-50 mx-auto my-3 ">
			<div class="card text-bg-warning mb-3" style="width: 300px; height: 300px; text-align: center;">
            <div class="card-header"  style="background-color: darkorange; width: 300px; height: 300px; ">
				<img src="${data.current.condition.icon}" class="weather-icon" alt="" style=" margin-top: 25%;  width: 100px; height: 100px;">
			</div>
              <div class="card-body">
              <h5 class="card-title">
				<p class="city">${data.location.name}</p>
			  </h5>
              <p class="card-text">
				<p class="deg">${data.current.temp_c} °C</p>

			  </p>
          </div>
       </div>

        </div>
		`
				)
		}
