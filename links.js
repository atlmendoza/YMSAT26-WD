//names of the image files
var links = [];
/* template
links[1]={
	section:"",
	title:"",
	desc:"",
	url:"",
	icon:"",
	by:"",
	stat:  // to indicate acceptance - true (for displaying) or false (means conditional after some edits) 
}
*/
links[0]={
	section:"9Be",
	title:"Shakespeare's Quill",
	desc:"This is Shakespeare's Quill, a visually rich exploration of William Shakespeare’s world, blending dark design, animation, and literary history into a timeless experience.",
	url:"https://youngerpanao02.github.io/WDProjBerylliumPanaoTamon/",
	icon:"be2328.png",
	by:"PanaoTamon",
	stat: false
}
links[1]={
	section:"9Be",
	title:"Pamana Adventures",
	desc:"Pamana Adventures is an interactive travel website where users create a personalized profile, explore destinations tailored to their interests and budget, and discover curated meaningful adventures across the Philippines made just for them.",
	url:"https://rafaelayatco.github.io/WDProjBeGaborniYatco/",
	icon:"",
	by:"",
	stat:false
}
links[2]={
	section:"9be",
	title:"Icons of Ghibli",
	desc:"Whispers of Ghibli is a very emotional and sincere trip to the dream-like realm of the Studio Ghibli—where art, imagination, and feelings come together to create storytelling that will never be forgotten.",
	url:"https://aravilalado.github.io/WDProjBeMacatangayVillados/public/homepage.html",
	icon:"be1929.png",
	by:"",
	stat:false
}
links[3]={
	section:"9Cs",
	title:"MineMaster",
	desc:"Minemaster is a collection of different guides designed to give inspiration to and improve your builds in the game Minecraft.",
	url:"https://frncjcnt.github.io/WDProjCesiumJacintoMapalo/index.html",
	icon:"Cs1419.png",
	by:"Mateo&Mapalo",
	stat:false
}
links[4]={
	section:"9Cs",
	title:"Pizza Papi",
	desc:"Inspired by casual cooking games, this interactive website celebrates pizza through a game with rankings, historical insights, and creator details to provide an engaging experience for everyone from hungry audiences to pizza enthusiasts.",
	url:"https://steph0801.github.io/WDProjCesiumBasconMargarito/",
	icon:"cs0520.png",
	by:"Bascon&Margarita",
	stat:true
}
links[5]={
	section:"9Cs",
	title:"Unstable Universe: Given one Chance, What Life will You Choose to Live?",
	desc:"This website is about a Minecraft server called the Unstable SMP that aims to tell amazing stories for its viewers.",
	url:"https://flarepia.github.io/3QPortifolioCSTonido/index.html",
	icon:"cs1730.png",
	by:"tonido",
	stat: false
}
links[6]={
	section:"9Cs",
	title:"Clemmy OS Login",
	desc:"",
	url:"https://alena-harriett.github.io/WDProjCesiumMembradoReyes/",
	icon:"cs2128.webp",
	by:"Membrado&Reyes",
	stat: true // to indicate acceptance - true (for displaying) or false (means conditional after some edits) 
}
links[7]={
	section:"9Li",
	title:"Martial Arts and the World",
	desc:"Martial Arts and The World is an interactive educational website showcasing the history, techniques, and philosophy of five major martial arts disciplines: Karate, Taekwondo, Judo, Brazilian Jiu-Jitsu, and Muay Thai.",
	url:"hhttps://davidhermosi.github.io/WDProjLiCristobalHermoso/",
	icon:"licrishermo.png",
	by:"Cristobal&Hermoso",
	stat: true // to indicate acceptance - true (for displaying) or false (means conditional after some edits) 
}
links[8]={
	section:"9Li",
	title:"CHEMVIS",
	desc:"See chemistry in action with Chemivis, where 3D models, interactive pages, and fun games bring concepts to life!",
	url:"https://drijbl.github.io/WDProjLithiumGabrielTumbaga/",
	icon:"CHEMIVIS.png",
	by:"Gabriel&Tumbaga",
	stat: true  // to indicate acceptance - true (for displaying) or false (means conditional after some edits) 
}
links[9]={
	section:"9Li",
	title:"Valorant: Beyond the Crosshair",
	desc:"Valorant: Beyond the Crosshair is an interactive guide designed to help players of all skill levels improve their gameplay. It offers detailed insights into agents, maps, weapons, and strategies — everything a player needs to understand the game in depth.",
	url:"https://nikkodizon.github.io/WDProjLithiumDIZONVIBAL/",
	icon:"",
	by:"Dizon&Vibal",
	stat: false // to indicate acceptance - true (for displaying) or false (means conditional after some edits) 
}

function dispProj(){
	var x;
	var genNum=[];
	var numProj = Math.floor(Math.random() * links.length);
	for (let i=0;i<links.length;i++) {	
		// update list of used number
		genNum.push(numProj);
		// check if the generated random number is already used.	
		numProj = Math.floor(Math.random() * links.length)
		x = genNum.indexOf(numProj)
		if (genNum.length == links.length)
			break;
		while (x >= 0) {
			numProj = Math.floor(Math.random() * links.length)
			x = genNum.indexOf(numProj)
		}		
	}
  // construct content of the body
	var tobeDisp = ""
	for (let i=0;i<links.length;i++) {
		tobeDisp +=	 
		'<div class="gallery">'+
		'<a target="_blank" href="' + links[genNum[i]].url +'">'+
		'<div> <img src="img\\'+links[genNum[i]].icon +'" /></div>'+
		'<div class="desc"><span>'+links[genNum[i]].title+'</span>'+
					'<p>'+links[genNum[i]].desc+'</p></div>'+
		'</a></div>'
		
	}
		
	document.getElementById("pHolder").innerHTML = tobeDisp;
	let myVar = setTimeout(dispProj, 50000);
}
	
