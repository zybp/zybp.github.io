// var a_idx = 0; jQuery(document).ready(function($) { $("body").click(function(e) { var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"); var $i = $("<span/>").text(a[a_idx]); a_idx = (a_idx + 1) % a.length; var x = e.pageX, y = e.pageY; let scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop; y = y - scrolly; $i.css({ "z-index": 999, "top": y - 20, "left": x, "position": "fixed", "font-weight": "bold", "color": "#ff6651" /*随机颜色写法："rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"*/ }); $("body").append($i); $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function() { $i.remove(); });  }); });
// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
		document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});

(function() { function t() { i(), a() }  function i() { document.addEventListener("mousemove", o), document.addEventListener("touchmove", e), document.addEventListener( "touchstart", e), window.addEventListener("resize", n) }  function n(t) { d = window.innerWidth, window.innerHeight }  function e(t) { if (t.touches.length > 0) for (var i = 0; i < t.touches.length; i++) s(t.touches[i].clientX, t.touches[i].clientY, r[Math.floor(Math.random() * r.length)]) }  function o(t) { u.x = t.clientX, u.y = t.clientY, s(u.x, u.y, r[Math.floor(Math.random() * r.length)]) }  function s(t, i, n) { var e = new l; e.init(t, i, n), f.push(e) }  function h() { for (var t = 0; t < f.length; t++) f[t].update(); for (t = f.length - 1; t >= 0; t--) f[t].lifeSpan < 0 && (f[t].die(), f.splice(t, 1)) }  function a() { requestAnimationFrame(a), h() }  function l() { this.character = "*", this.lifeSpan = 120, this.initialStyles = { position: "fixed", top: "0", display: "block", pointerEvents: "none", "z-index": "10000000", fontSize: "20px", "will-change": "transform" }, this.init = function(t, i, n) { this.velocity = { x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2), y: 1 }, this.position = { x: t - 10, y: i - 20 }, this.initialStyles.color = n, this.element = document.createElement("span"), this.element.innerHTML = this.character, c(this.element, this.initialStyles), this.update(), document.body.appendChild(this.element) }, this.update = function() { this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + this.lifeSpan / 120 + ")" }, this.die = function() { this.element.parentNode.removeChild(this.element) } }  function c(t, i) { for (var n in i) t.style[n] = i[n] } var r = ["#D61C59", "#E7D84B", "#1B8798", "#ffaaff", "#aaaaff"], d = window.innerWidth, u = (window.innerHeight, { x: d / 2, y: d / 2 }), f = []; t() })();