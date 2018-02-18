/**
 * ArtBoardCtrl - Main actions for manipulating canvas boards
 * 
 * 
 */

export default class ArtBoardCtrl {

	constructor() {
		this.init()
	}

	init() {
		this.canvas = document.getElementById('artboard')

		if (this.canvas.getContext('2d')) {
			let ctx = this.canvas.getContext('2d')
			resize();

			// last known position
			var pos = { x: 0, y: 0 };

			window.addEventListener('resize', resize);
			document.addEventListener('mousemove', draw);
			document.addEventListener('mousedown', setPosition);
			document.addEventListener('mouseenter', setPosition);

			// new position from mouse event
			function setPosition(e) {
				// let boardOffset = 5
				// let boardOverflow = false

				pos.x = e.clientX;
				pos.y = e.clientY;
		    }

		    // resize canvas
		    function resize() {
				ctx.canvas.width = window.innerWidth;
				ctx.canvas.height = window.innerHeight;
		    }

		    function draw(e) {
				// mouse left button must be pressed
				if (e.buttons !== 1) return;

				ctx.beginPath(); // begin

				ctx.lineWidth = 5;
				ctx.lineCap = 'round';
				ctx.strokeStyle = '#888';

				ctx.moveTo(pos.x, pos.y); // from
				setPosition(e);
				ctx.lineTo(pos.x, pos.y); // to

				ctx.stroke(); // draw it!
		    }
		}
	}

}