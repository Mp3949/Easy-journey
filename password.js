function checkpass(){
    if(document.getElementById('password').value!=document.getElementById('c-password').value){
        document.getElementById('al').classList.remove('d-none');
    }else{
        document.getElementById('al').classList.add('d-none');
    }
}