console.log("hello");
shownotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    console.log("clicked");
    let addtxt = document.getElementById("addtxt");
    let addtitle=document.getElementById("addtitle")
    // txt naam ki jgah same add txt vala naam bhi de skte hai
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    } else {
        noteobj = JSON.parse(notes);
        //array mei convert krta JSON.parse
    }
    let myobj={
        titlee: addtitle.value,
        textt: addtxt.value
    }
    noteobj.push(myobj);
    // push function array mei hee kaam krega
    localStorage.setItem("notes", JSON.stringify(noteobj));
    addtxt.value = "";
    addtitle.value="";
    // local storage mei string mei hee dalti hai cheeje
    // console.log(noteobj);
    shownotes();
});

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    } else {
        noteobj = JSON.parse(notes);
    }
    let html="";
    noteobj.forEach(function(element,index) {
        html+=`
        <div  class="cardii my-2 mx-2" style="width: auto; border: 2px solid black; background-color: rgb(247, 232, 214);">
            
            <div class="card-body">

              <h5 class="card-title">${element.titlee}</h5>
              <p class="card-text">${element.textt}</p>
              <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">DELETE NOTE</button>
            </div>
          </div> `;
    })
    let noteselem=document.getElementById("notes");
    if(noteobj.length!=0)
    {
        noteselem.innerHTML=html;
    }
    else{
        noteselem.innerHTML=`Nothing to show"use:- ADD A NOTE "above`;
    }
}
// deleting note
 function deletenote(index){

     console.log("deleting ok ",index);
     let notes = localStorage.getItem("notes");
     if (notes == null) {
         noteobj = [];
        } else {
            noteobj = JSON.parse(notes);
        }
        noteobj.splice(index,1);
        // splice mei kis index se delete krna, kitne cheeje aage ki delete krni
        localStorage.setItem("notes",JSON.stringify(noteobj));
        // vapas local storage mei add kro
        shownotes();



 }  

let search=document.getElementById('searchtxt');
search.addEventListener('input',function () {
    let inputval=search.value;
    // console.log(inputval);
    let cardii=document.getElementsByClassName('cardii');
    Array.from(cardii).forEach(function(element){
        let cardtxt=element.getElementsByTagName('p')[0].innerText;
        if(cardtxt.includes(inputval))
        {
            element.style.display='block';
        }
        else
        {
            element.style.display='none';
        }
    })
})