window.onload = function(){
	document.querySelector("#menu-mobile").addEventListener("change",function(){
		var ref = this.value;
		location.href=ref;
	})
}