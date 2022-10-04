//On click, add image to song album when uploading
let albumUploadBtn = document.getElementById('songAlbumBtn');
let placeholder = document.getElementById('songAlbum');

albumUploadBtn.addEventListener('change', (e) =>{
    const file = e.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (){
       // images[0].setAttribute('src', fileReader.result);
          placeholder.setAttribute('style', `background-image: url('${fileReader.result}')`);
          
    }
});