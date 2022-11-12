const img = document.getElementById("img");
const dropFile = document.getElementById("dropFile");
const inputText = document.getElementById("inputText");
const inputText2 = document.getElementById("inputText2");
dropFile.onchange = function(){
    if(dropFile.value != ""){
        inputText.style.display = "none";
        inputText2.style.display = "flex";
        img.style.backgroundImage = "url('./img/checkMark.png')";
        img.style.width = "90px";
    }
};
$("#checkBtn").click( function(){
   if(dropFile.value != ""){
    let pointPos = 0;
    let filesize = dropFile.files[0].size;
    let file = dropFile.value;
    let calcedFileSize;
    for(let i = 0; file.at(-i) != "."; i++){
        pointPos++;
    }
    file = file.slice(file.length-pointPos)
    if(filesize>1024){
        filesize = filesize/1024;
        calcedFileSize = filesize.toFixed(2)+"KB";
    }
    if(filesize>1024){
        filesize = filesize/1024;
        calcedFileSize = filesize.toFixed(2)+"MB";
    }
    if(filesize>1024){
        filesize = filesize/1024;
        calcedFileSize = filesize.toFixed(2)+"GB";
    }
    document.getElementById("fileSize").innerText = calcedFileSize;
    document.getElementById("checkResutScreen").classList.add("checkResutScreen__visible");
    if(file == ".png" || file == ".jpeg" || file == ".jpg" || file == ".svg" || file == ".webp" || file == ".gif"){
        document.getElementById("checkResutScreen").style.backgroundColor = "#71be94";
        document.getElementById("fileTypeImage").style.backgroundImage = "url('./img/image.png')";
        document.getElementById("fileType").innerText = "image";
        document.getElementById("fileExtension").innerText = " "+file;
    } else if(file == ".rar" || file == ".zip"){
        document.getElementById("checkResutScreen").style.backgroundColor = "#f8d6ac";
        document.getElementById("fileTypeImage").style.backgroundImage = "url('./img/zip.png')";
        document.getElementById("fileType").innerText = "archive";
        document.getElementById("fileExtension").innerText = " "+file;
    } else if(file == ".txt"){
        document.getElementById("checkResutScreen").style.backgroundColor = "#7cc6d3";
        document.getElementById("fileTypeImage").style.backgroundImage = "url('./img/text.png')";
        document.getElementById("fileType").innerText = "text";
        document.getElementById("fileExtension").innerText = " "+file;
    } else if(file == ".html" || file == ".htm"){
        document.getElementById("fileTypeImage").style.backgroundImage = "url('./img/html.png')";
        document.getElementById("fileType").innerText = "web";
        document.getElementById("fileExtension").innerText = " "+file;
        document.getElementById("checkResutScreen").style.backgroundColor = "#ffd45d";
    } else if(file == ".css" || file == ".scss"){
        document.getElementById("fileTypeImage").style.backgroundImage = "url('./img/css.png')";
        document.getElementById("fileType").innerText = "style sheet";
        document.getElementById("fileExtension").innerText = " "+file;
        document.getElementById("checkResutScreen").style.backgroundColor = "#9c80eb";
    } else if(file == ".js" || file == ".py" || file == ".c++" || file == ".c" || file == ".php" || file == ".java"){
        document.getElementById("fileTypeImage").style.backgroundImage = "url('./img/lan.png')";
        document.getElementById("fileType").innerText = "program languague";
        document.getElementById("fileExtension").innerText = " "+file;
        document.getElementById("checkResutScreen").style.backgroundColor = "#e0a09b";
    } else if(file == ".mp3" || file == ".aac" || file == ".adt" || file == ".adts"){
        document.getElementById("fileTypeImage").style.backgroundImage = "url('./img/audio.png')";
        document.getElementById("fileType").innerText = "audio";
        document.getElementById("fileExtension").innerText = " "+file;
        document.getElementById("checkResutScreen").style.backgroundColor = "#9bd6e0";
    } else if(file == ".mp4" || file == ".avi" || file == ".mov" || file == ".wmv"){
        document.getElementById("fileTypeImage").style.backgroundImage = "url('./img/mp4.png')";
        document.getElementById("fileType").innerText = "video";
        document.getElementById("fileExtension").innerText = " "+file;
        document.getElementById("checkResutScreen").style.backgroundColor = "#ffa2a2";
    } else if(file == ".doc" || file == ".docm" || file == ".docx" || file == ".PDF" || file == ".pdf"){
        document.getElementById("fileTypeImage").style.backgroundImage = "url('./img/doc.png')";
        document.getElementById("fileType").innerText = "document";
        document.getElementById("fileExtension").innerText = " "+file;
        document.getElementById("checkResutScreen").style.backgroundColor = "#a0aeff";
    } else{
        document.getElementById("checkResutScreen").classList.remove("checkResutScreen__visible");
        alert("Sorry we don't know what kind if file is it ):")
        location.reload();
    }
    dropFile.value = "";
    img.style.width = "70px";
    inputText.style.display = "flex";
    inputText2.style.display = "none";
    img.style.backgroundImage = "url('./img/plus.png')";
   }
});
$("#checkMoreFiles").click( function(){
    document.getElementById("checkResutScreen").classList.remove("checkResutScreen__visible");
});