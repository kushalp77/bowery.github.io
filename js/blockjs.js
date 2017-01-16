    function loadtxt()
    { 
	 var parentid=document.getElementById('mainblock').getElementsByClassName('inpanel');
 var plength=parentid.length;
  parentid[0].style.display="block";
		parentid[0].style.height="auto";
		parentid[0].className="inpanel contentblock"; 
		document.getElementById("link1").style.color="#fb7a04";
 for(var i=1;i<plength;i++)
	 {
		parentid[i].className="inpanel"; 
	 }
    }
  function enablediv(divid,thislink1)
  {
	 var parentid=document.getElementById('mainblock').getElementsByClassName('inpanel');
     var plength=parentid.length;
	 var linkid=document.getElementById('sidelinks').getElementsByTagName('a');
	 var llength=linkid.length;
	
	
	 
	 for(var i=0;i<plength;i++)
	 { 
	 if(linkid[i].id==thislink1)
	   {
		    
			document.getElementById(linkid[i].id).style.color="#fb7a04";
	   }
	   else
	   {
		   document.getElementById(linkid[i].id).style.color="";
		}
	    
		if(parentid[i].id!=divid)
		{
	    
		parentid[i].style.display="none";
		parentid[i].style.height=0;
		parentid[i].className="inpanel";
		
		}
		else
		{
		 
		parentid[i].style.display="block";
		parentid[i].style.height="auto";
		parentid[i].className="inpanel contentblock"; 
		
		}
		
	 }
	 
	  }