window.onload = function() {

	const panels = document.querySelectorAll('.panel');
	console.log(panels);

	function toggleOpen() {
		this.classList.toggle('open');
	};
	function toggleOpenActive(e) {
		console.log(e.propertyName);
		if(e.propertyName === 'flex' || e.propertyName === 'flex-grow') {
			this.classList.toggle('open-active');
		};
	};



	panels.forEach( panel => {
		panel.addEventListener('click', toggleOpen);
		panel.addEventListener('transitionend', toggleOpenActive);
		});
};