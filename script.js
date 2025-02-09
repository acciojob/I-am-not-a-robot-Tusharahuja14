//your code here
const arr = ["img1", "img2", "img3", "img4", "img5"];
const para=document.getElementById("para");
// Pick a random image to duplicate
const rimg = arr[Math.floor(Math.random() * arr.length)];

// Create an array with five unique images + one duplicate
const finalImages = [...arr, rimg];

// Function to shuffle an array using Fisher-Yates Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;  // Ensure we return the shuffled array

	
}


// Shuffle the finalImages array
shuffleArray(finalImages);
const imagesdiv=document.querySelectorAll("#images-container div");
imagesdiv.forEach((div,index)=>{
	div.className=finalImages[index];
});
const selectedimg=[];
const resetbtn=document.querySelector("#reset");
const verify=document.querySelector("#verify");
imagesdiv.forEach((div,index)=>{
	div.addEventListener("click",()=>{
		if(selectedimg.length<2&&!div.classList.contains("selected"))
		{
			selectedimg.push(div.className);
			div.style.border="2px solid blue";
			 div.classList.add("selected");
			resetbtn.style.display="block";
			 if (selectedimg.length === 2) {
            verify.style.display = "block";
        }
		}
	});
});
resetbtn.addEventListener("click",()=>{
	selectedimg.length=0;
	imagesdiv.forEach((div)=>{
		div.classList.remove("selected");
		div.style.border="none";
	});
	para.innerText = ""; 
    verify.style.display = "none";
});
 verify.addEventListener("click",()=>
{
	if(selectedimg[0]==selectedimg[1])
	{
		para.innerText="You are a human. Congratulations!";
		 para.style.color = "green";
	}
	else
	{
		para.innerText="We can't verify you as a human. You selected the non-identical tiles.";
		para.style.color="red";
		verify.style.display="none";
	}
});

