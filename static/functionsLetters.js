
	//code for toggle content from W3School (adapted)
	var sect = document.getElementsByClassName("section");
	 var i;
	 
	 for (i = 0; i < sect.length; i++) {
	   sect[i].addEventListener("click", function() {
		 this.classList.toggle("active");
		 var panel1 = document.getElementById("see-changes");
		 var arrow = this.querySelector("i");
		 var panel = this.nextElementSibling;
		 //takes into account the see-changes button     
		 if (panel.style.display === "block" || panel1.style.display === "block") {
		   panel.style.display = "none";
		   panel1.style.display = "none";
		   arrow.classList.remove("up")
		   arrow.classList.toggle("down");
		 } else {
		   panel.style.display = "block";
		   arrow.classList.remove("down")
		   arrow.classList.toggle("up");
		 
		 }
	 
		 var panel = this.nextElementSibling;
		 if (panel.style.maxHeight) {
		   panel.style.maxHeight = null;
		 } else {
		   panel.style.maxHeight = panel.scrollHeight + "px";
		 } 
	   });
	 };
	
	// document.getElementById("Open").click();
	 // document.getElementById("Opentoo").click();
	
		//code for button to see changes of modernisation ^^
	  
		function see() {
		  var btn = document.getElementById("see-changes");
		  var usual = document.getElementById("transformedFR");
		  if (btn.style.display === "none" && usual.style.display === "block"){
		  btn.style.display = "block";
		  usual.style.display = "none";
		  }else{
		  btn.style.display = "none";
		  usual.style.display = "block";
		  }
		  }
		  function seediplo() {
		  var btn = document.getElementById("diplomatic");
		  var usual = document.getElementById("bonnet");
		  if (btn.style.display === "none" && usual.style.display === "block"){
		  btn.style.display = "block";
		  usual.style.display = "none";
		  }else{
		  btn.style.display = "none";
		  usual.style.display = "block";
		  }
		  }
	  
		function full(){
		  
		  document.getElementById("reduire").style.display ="block";
		document.getElementById("agrandir").style.display ="none";
		document.getElementById("voir").style.display ="none";
		var div = document.getElementById("transformedFR").cloneNode(true);
		div.id = "fullpage";
		div.classList.toggle("full");
		var bodychild = document.querySelector("#anchor").children;
		for (let i=0; i<bodychild.length; i++){
		   bodychild[i].style.display="none";
		};
		document.querySelector("#anchor").appendChild(div);
		}
		// see-changes div 
		function full1(){
		
		  document.getElementById("voir1").style.display ="none";
		  document.getElementById("reduire1").style.display ="block";
		document.getElementById("agrandir1").style.display ="none";
		var div1 = document.getElementById("see-changes").cloneNode(true);
		  div1.id = "ch-fullpage";
		  div1.classList.toggle("full");
		  var bodychild = document.querySelector("#anchor").children;
		for (let i=0; i<bodychild.length; i++){
		   bodychild[i].style.display="none";
		};
		document.querySelector("#anchor").appendChild(div1);
		}
	  
	//see diplomatic transcription
	function fulldiplo(){
		
		document.getElementById("voirdiplo").style.display ="none";
		document.getElementById("reduire0").style.display ="block";
	  document.getElementById("agrandir0").style.display ="none";
	  var div1 = document.getElementById("diplomatic").cloneNode(true);
		div1.id = "diplo-fullpage";
		div1.classList.toggle("full");
		var bodychild = document.querySelector("#anchor").children;
	  for (let i=0; i<bodychild.length; i++){
		 bodychild[i].style.display="none";
	  };
	  document.querySelector("#anchor").appendChild(div1);
	  }
	  
	  
	  function goBackToNormal(){
		var bodychild = document.querySelector("#anchor").children;
		for (let i=0; i<bodychild.length; i++){
		   bodychild[i].style.display="block";
		};
		document.getElementById("reduire").style.display ="none";
		document.getElementById("agrandir").style.display ="block";
		document.getElementById("voir").style.display ="block";
		while(document.getElementById("fullpage")){
		  document.querySelector("#fullpage").remove();
		}
	  }
	  //btn back for changes div
	  function goBack(){
		var bodychild = document.querySelector("#anchor").children;
		for (let i=0; i<bodychild.length; i++){
		   bodychild[i].style.display="block";
		};
		document.getElementById("reduire1").style.display ="none";
		document.getElementById("agrandir1").style.display ="block";
		document.getElementById("voir1").style.display ="block";
		while(document.getElementById("ch-fullpage")){
		  document.querySelector("#ch-fullpage").remove();
		}
	  }
	  //btn back for diplomatic div
	  function goBackdiplo(){
		var bodychild = document.querySelector("#anchor").children;
		for (let i=0; i<bodychild.length; i++){
		   bodychild[i].style.display="block";
		};
		document.getElementById("reduire0").style.display ="none";
		document.getElementById("agrandir0").style.display ="block";
		document.getElementById("voirdiplo").style.display ="block";
		while(document.getElementById("diplo-fullpage")){
		  document.querySelector("#diplo-fullpage").remove();
		}
	  }

	  // Now ES section
	  
	  function fullES(){
		document.getElementById("reduireES").style.display ="block";
		document.getElementById("agrandirES").style.display ="none";
		var div = document.getElementById("transformedES").cloneNode(true);
		div.id = "ESfullpage";
		div.classList.toggle("full");
		var bodychild = document.querySelector("#anchor").children;
		for (let i=0; i<bodychild.length; i++){
		   bodychild[i].style.display="none";
		};
		document.querySelector("#anchor").appendChild(div);
	  }
	  
	  function goBackES(){
		var bodychild = document.querySelector("#anchor").children;
		for (let i=0; i<bodychild.length; i++){
		   bodychild[i].style.display="block";
		};
		document.getElementById("reduireES").style.display ="none";
		document.getElementById("agrandirES").style.display ="block";
	   
		while(document.getElementById("ESfullpage")){
		  document.querySelector("#ESfullpage").remove();
		}
	  }
	  
		
	 /*  
	  var panelFR = document.getElementById("transformedFR");
	  var panelES= document.getElementById("transformedES");
	  
	  function synchro(){                          //add onscroll="synchro()" in concerned div, i.e. #transformedFR 
		  if(panelES.style.display==="block"){
				  var scroll1 = panelFR.scrollTop;
				  panelES.scrollTop = scroll1;
			  }
	  }
	  function synchro1(){
		  if(panelFR.style.display==="block"){
				  var scroll2 = panelES.scrollTop;
				  panelFR.scrollTop = scroll2;
			  }
	  }
    
		*/
	 
		
	