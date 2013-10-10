function assert(value, desc){
	var resultList = document.getElementById("results");
	
	// create result list, if it doesn't already exist. 
	if(!resultList){
		resultList = document.createElement('ul');
		document.getElementsByTagName('body')[0].appendChild(resultList);
		resultList.setAttribute('id','results')
	}
	
	//add the list item for this assertion s
	var li = document.createElement('li');
	li.className = value ? "pass":"fail";
	li.appendChild(document.createTextNode(desc));
	resultList.appendChild(li);
}
