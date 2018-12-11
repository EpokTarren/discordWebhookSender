document.getElementById("field_toggle").onclick = function ()
	{
    	if (field_toggle.checked)
    {
        document.getElementById("left_side").style.width = "49%"
        document.getElementById("right_side").style.width = "49%";
        document.getElementById("right_side").style.opacity = 1;
    }else{
    	document.getElementById("left_side").style.width = "100%"
        document.getElementById("right_side").style.width = "0%";
        document.getElementById("right_side").style.opacity = 0;
    }
}
