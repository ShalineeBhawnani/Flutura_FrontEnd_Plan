var slider_img = document.querySelector('.bg1');
var images = ['web2.jpg', 'Master.jpg', 'lappy.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	console.log("here",i)
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	console.log(images[i])
	return slider_img.setAttribute('style', 'background-image: url("'+images[i]+'")');
	// return slider_img.setAttribute('style', 'background-image: "images/"+images[i]);
	// return slider_img.setAttribute('style', 'background-image: url("images/"+images[i]));
	

	
}