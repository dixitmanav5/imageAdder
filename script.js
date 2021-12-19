//html elements
//1) input to select files
let addFileInput=document.getElementById('addFileInput');
//2)button to run print-page command
let printBtn=document.getElementById('printBtn');
//3)div to add images
let imgDiv=document.getElementById('images');
//4)label for addFileInput
let addFileLabel=document.getElementById('addFileLabel')
//onclick listener on printBtn
printBtn.addEventListener('click',()=>{
  printBtn.style.display="none";
  addFileLabel.style.display="none";
  window.print();
  setTimeout(function() {
printBtn.style.display="inline";
 addFileLabel.style.display="inline";
  }, 5000);
})
//onclick listener on addFileInput
addFileInput.addEventListener('change',(event)=>{
  let files=event.target.files[0];
  console.log(files);
  if (files){
  let reader=new FileReader();
  //reading files fetched as data url
 reader.readAsDataURL(files);
 //running the callback function when the reader has successfully read fetched file
  reader.addEventListener('load',()=>{
    //creating element and adding it to imgDiv
    imgDiv.innerHTML+=`
    <div class="container">
	<img src=${reader.result} alt="question image">
	</img>
</div>	
    `
  })
  }
  //setting value of input tag as "" so that if same file is selected twice onChange event can be fired
  event.target.value="";
})
