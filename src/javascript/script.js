// Functional formatting in Blog Editor

let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("editor-area");
let linkButton = document.getElementById("addLink");
let alignButtons = document.querySelectorAll(".align")
let formatButtons = document.querySelectorAll(".format");
let mediaButton = document.querySelectorAll(".media-btn");

//List
let fontList = [
    "Arial", 
    "Verdana", 
    "Times New Roman", 
    "Georgia", 
    "Calibri", 
    "Curier New", 
    "Lato", 
    "Abel", 
    "Permanent Marker"
];

// Initial Settings
const initializer = () =>{
    //highlighting buttons function
    highlighter(alignButtons, true);
    highlighter(formatButtons, false);

    // options for font names
    fontList.map((value) =>{
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    //fontSize
    for (let i = 1; i <= 7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

//main logic
const modifyText = (command, defaultUi, value) => {
    //execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
  };

  //For basic operations which don't need value parameter
  optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modifyText(button.id, false, null);
    });
  });

  //options that require value parameter (e.g colors, fonts)
  advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
      modifyText(button.id, false, button.value);
    });
  });

//link
linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL");
    //if link has http then pass directly else add https
    if (/http/i.test(userLink)) {
      modifyText(linkButton.id, false, userLink);
    } else {
      userLink = "http://" + userLink;
      modifyText(linkButton.id, false, userLink);
    }
  });

//Highlight clicked button
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            //needs removal = true when only one button should be highlighted
            if(needsRemoval){
                let alreadyActive = false;

                //check if button is already active
                if(button.classList.contains("active")){
                    alreadyActive = true;
                }

                //remove highlight in other buttons
                highlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add("active");
                }
            } else{
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
}

window.onload = initializer();

function pickMedia() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => {
              let files =   Array.from(input.files);
              console.log(files);
          };
    input.click();
  }

  /* End of Blog editor functionalities */


  /* Hiding and showing toolbar in blog-editor.html in mobile view
   * This method shows the toolbar when clicked upon 
   * the editing area and will be hidden once clicked outside the area
   */
  document.addEventListener('click', function showToolbar(event) {
    const textArea = document.querySelector('.text-area');
    const toolbar = document.querySelector('.toolbar');
    const otherTools = document.querySelector('.hidden-tools');

    if (textArea.contains(event.target) || toolbar.contains(event.target) || otherTools.contains(event.target)) {
      toolbar.classList.remove('hidden');
    }else{
      toolbar.classList.add('hidden');
    }
  });

  /* Hiding and showing the extended toolbar in blog-editor.html in mobile view
   * This method unhides the extended tools once the more button is clicked
   */
  document.addEventListener('click', function showToolbar(event) {
    const moreBtn = document.getElementById('more');
    const textArea = document.querySelector('.text-area');
    const otherTools = document.querySelector('.hidden-tools');

    if (more.contains(event.target) || otherTools.contains(event.target)) {
      otherTools.classList.remove('hidden');
    }else{
      otherTools.classList.add('hidden');
    }
  });


/* Loads value of a div to blog editor for editing
 * (In admin, editing of blogs redirect to editor with editable content)
 */
function sendValue(e){
  var articleNum = e;
  localStorage.setItem("value", articleNum);
  window.location.href="editBlogArticles/edit-blog.html";
}

// Alert when Save button is clicked
function promptMessage(){
  alert("Blog Saved Successfully!");
  window.location.href="../adminBlogs.html";
}

// Alert when Publish button is clicked
function publishBlogPrompt(){
  alert("Blog Published Successfully!");
  window.location.href="adminBlogs.html";
}

// On click, add image to blog header
let uploadBtn = document.getElementById("inputFileBtn");
let fileInput = document.getElementById('header-placeholder');

uploadBtn.addEventListener('change', (e) =>{
    const file = e.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (){
        
      fileInput.setAttribute('style', `background-image: url('${fileReader.result}')`);
          
    }
})