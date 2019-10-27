window.onload = function () {
	let canvas = document.querySelector('#matrix');
	let ctx = canvas.getContext('2d');
	let img = new Image();

	// insert img
	img.onload = function insertImg() {
		canvas.width = img.naturalWidth;
		canvas.height = img.naturalHeight;
		ctx.drawImage(img, 0, 0);
	}

	img.src = 'assets/img/pixil-frame.png';

	// change img
	document.querySelector("#change-img").addEventListener("click", function () {
		event.preventDefault();
		img.src = 'assets/img/rss.png';
	});

	// create 4х4 matrix
	let request = new XMLHttpRequest();
	request.open("GET", "https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json", false);
	request.send();
	request.onload = function () {
		if (request.status == 200) {
	let smData = JSON.parse(request.responseText);

	document.querySelector("#sm-matrix").addEventListener("click", function () {
		event.preventDefault();
		canvas.width = 512;
		canvas.height = 512;
		let y = -128;
		let x = -128;

		smData.forEach(function (element) {
			x = -128;
			y = y + (512 / 4);

			element.forEach(function (smEl) {
				let color = '#' + smEl;
				x = x + (512 / 4);
				ctx.fillStyle = color;
				ctx.fillRect(x, y, 128, 128);
			});

		});

	});
} else {
	alert('ERROR. please, try again later');
}
};

	// create 32x32 matrix
	let requestBig = new XMLHttpRequest();
	requestBig.open("GET", "https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json");
	requestBig.send();
	requestBig.onload = function () {
		if (requestBig.status == 200) {
			let bigData = JSON.parse(requestBig.responseText);

			document.querySelector("#big-matrix").addEventListener("click", function () {
				event.preventDefault();
				canvas.width = 512;
				canvas.height = 512;
				let y = -16;
				let x = -16;

				bigData.forEach(function (element) {
					x = -16;
					y = y + (512 / 32);

					element.forEach(function (bigEl) {
						let color = "rgba(" + bigEl + ")";
						x = x + (512 / 32);
						ctx.fillStyle = color;
						ctx.fillRect(x, y, 16, 16);

					});

				});

			});
		} else {
			alert('ERROR. please, try again later');
		}


	};

};


