var vector = {
	x: 1,
	y: 0,

	create: function (x, y) {
		var obj = Object.create(this);
		obj.setX(x);
		obj.setY(y);
		return obj;
	},

	setX: function (value) {
		this.x = value;
	},

	getX: function () {
		return this.x;
	},

	setY: function (value) {
		this.y = value;
	},

	getY: function () {
		return this.y;
	},

	setAngle: function (angle) {
		var length = this.getLength();
		return {

			x: Math.cos(angle) * length,
			y: Math.sin(angle) * length
		}
	},

	fromAngle: function (angle) {
		x = Math.cos(angle) * 1 ;
		y = Math.sin(angle) * 1 
		return { x: x, y: y }
	},

	getAngle: function () {
		return Math.atan2(this.y, this.x);
	},

	setLength: function (length) {
		var angle = this.getAngle();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
	},

	getLength: function (p) {
		return Math.sqrt(p.x * p.x + p.y * p.y);
	},

	add: function (v2) {
		return vector.create(this.x + v2.getX(), this.y + v2.getY());
	},

	subtract: function (v2) {
		return vector.create(this.x - v2.getX(), this.y - v2.getY());
	},

	multiply: function (val) {
		return vector.create(this.x * val, this.y * val);
	},

	divide: function (val) {
		return vector.create(this.x / val, this.y / val);
	},

	addTo: function (v2) {
		this.x += v2.x;
		this.y += v2.y;
	},

	subtractFrom: function (v2) {
		this.x -= v2.x;
		this.y -= v2.y;
	},

	multiplyBy: function (val) {
		this.x *= val;
		this.y *= val;
	},

	divideBy: function (val) {
		this.x /= val;
		this.y /= val;
	}
};