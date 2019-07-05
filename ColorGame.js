
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var mode="hard";
hard();

// function easy()
// {
// 	var td=document.querySelectorAll("td");
// 	document.querySelector("table").style.margin="200px auto auto auto";
// 	for(var i=3;i<6;i++)
// 	{
//        td[i].style.background="black";
// 	}
// document.querySelector(".mainhead").style.background="rgba(115,162,245,0.7))";
// var colorlimit=256;
// var redColor=getRandomInt(colorlimit);
// var greenColor=getRandomInt(colorlimit);
// var blueColor=getRandomInt(colorlimit);

// document.querySelector("#r").textContent=redColor;
// document.querySelector("#g").textContent=greenColor;
// document.querySelector("#b").textContent=blueColor;
// var targetBox=getRandomInt(3);
// var x=document.querySelectorAll("td");

// for(var i=0;i<x.length-3;i++)
// {
//    if(i==targetBox)
//    {
//    	 x[i].style.background="rgb("+redColor+","+greenColor+","+blueColor+")";
//    }
//    else
//    {
//    	 x[i].style.background="rgb("+getRandomInt(colorlimit)+","+getRandomInt(colorlimit)+","+getRandomInt(colorlimit)+")";
//    }
// }

// for(var i=0;i<x.length-3;i++)
// {
// 	x[i].addEventListener("click",function(){
// 		if(this.id==targetBox)
// 		{
// 			document.querySelector(".mainhead").style.background="rgb("+redColor+","+greenColor+","+blueColor+")";
// 			alert("Yeah We Won");
// 			for(var j=0;j<x.length-3;j++)
// 			{
// 				x[j].style.background="rgb("+redColor+","+greenColor+","+blueColor+")";
// 			}
// 		}
// 		else
// 		{
// 			this.style.background="black";
// 		}
// 	});
// }

// var newColor=document.querySelector("#newcolors");
// newColor.addEventListener("click",function(){
//     hard();
// });
// newColor.addEventListener("mouseover",function(){
//     this.style.background="red";
// });
// newColor.addEventListener("mouseout",function(){
//     this.style.background="white";
// });

// var easy=document.querySelector("#easy");
// easy.addEventListener("click",function(){
// 	mode="easy";
// 	easy();
// });
// easy.addEventListener("mouseover",function(){
//      this.style.background="red";
// });
// easy.addEventListener("mouseout",function(){
//      this.style.background="white";
// });

// var hard=document.querySelector("#hard");
// hard.addEventListener("click",function(){
// 	mode="hard";
// 	hard();
// });
// hard.addEventListener("mouseover",function(){
//      this.style.background="red";
// });
// hard.addEventListener("mouseout",function(){
//      this.style.background="white";
// });
// }



function hard()
{
document.querySelector(".mainhead").style.background="rgba(115,162,245,0.7)";
var colorlimit=256;
var redColor=getRandomInt(colorlimit);
var greenColor=getRandomInt(colorlimit);
var blueColor=getRandomInt(colorlimit);

document.querySelector("#r").textContent=redColor;
document.querySelector("#g").textContent=greenColor;
document.querySelector("#b").textContent=blueColor;

var targetBox=getRandomInt(6);
var x=document.querySelectorAll("td");

for(var i=0;i<x.length;i++)
{
   if(i==targetBox)
   {
   	 x[i].style.background="rgb("+redColor+","+greenColor+","+blueColor+")";
   }
   else
   {
   	 x[i].style.background="rgb("+getRandomInt(colorlimit)+","+getRandomInt(colorlimit)+","+getRandomInt(colorlimit)+")";
   }
}
var count=0;
for(var i=0;i<x.length;i++)
{
	x[i].addEventListener("click",function(){
		if(this.id==targetBox)
		{
			document.querySelector(".mainhead").style.background="rgb("+redColor+","+greenColor+","+blueColor+")";
			for(var j=0;j<x.length;j++)
			{
				x[j].style.background="rgb("+redColor+","+greenColor+","+blueColor+")";
			}
            alert("Yeah We Won");
		}
		else
		{
			this.style.background="black";
		}
	});
}

var newColor=document.querySelector("#newcolors");
newColor.addEventListener("click",function(){
    hard();
});
newColor.addEventListener("mouseover",function(){
    this.style.background="red";
});
newColor.addEventListener("mouseout",function(){
    this.style.background="white";
});

// var easy=document.querySelector("#easy");
// easy.addEventListener("click",function(){
// 	mode="easy";
// 	easy();
// });
// easy.addEventListener("mouseover",function(){
//      this.style.background="red";
// });
// easy.addEventListener("mouseout",function(){
//      this.style.background="white";
// });

// var hard=document.querySelector("#hard");
// hard.addEventListener("click",function(){
// 	mode="hard";
// 	hard();
// });
// hard.addEventListener("mouseover",function(){
//      this.style.background="red";
// });
// hard.addEventListener("mouseout",function(){
//      this.style.background="white";
// });
}



