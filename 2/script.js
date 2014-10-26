var ___ = function() {
	
	con.sign();

	var ta = document.getElementById("wish");
	var bt = document.getElementById("make");
	var wwp = document.getElementById("wishwrapper");
	var kebuka = false;

	if (bt)
		bt.addEventListener("click", taTampil);


	function taTampil() {
		ta.style.display = "block";

		if (kebuka) {
			kirimWish();
			bt.style.display = "none";
			ta.style.display = "none";
		}		

		kebuka = true;
	}


	function kirimWish() {
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				if(xmlhttp.status==200){
					con.blue(xmlhttp.responseText);

					var hw = document.createElement("div");
					hw.id = "handwritten";
					hw.innerHTML = "<h2>A Wish</h2>" + ta.value.replace(/(?:\r\n|\r|\n)/g, '<br />');
					wwp.appendChild(hw);

					//echo '<div id="handwritten"><h2>A Wish</h2>' . nl2br($kueri) . '</div>';
				} else {
					con.err(xmlhttp.responseText);
					bt.style.display = "block";
					ta.style.display = "block";
				}
			}
		}
		xmlhttp.open("POST","http://192.168.1.127/hbd/2/api/kirim.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("wish=" + encodeURI(ta.value));
	}
}
window.addEventListener("load", ___);