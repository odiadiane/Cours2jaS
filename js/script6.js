document.getElementById('12').style.color='red'
let inittaille=100;

function agrandir_Image(){
    inittaille= inittaille+50;
    document.getElementById('im').style.width= inittaille+'px';
    if(inittaille==300){
        document.getElementById('im').src="../image/menu sanoh.jpeg"
    }
}
function diminuer_Image(){
    inittaille= inittaille-50;
    document.getElementById('im').style.width= inittaille+'px';
}
function changer_Image(){
    let val=document.getElementById('im').src;
    const im1='http://127.0.0.1:5500/image/ODIA.jpeg'
    const im2='http://127.0.0.1:5500/image/menu sanoh.jpeg'
    console.log('test')

    console.log(val)
    console.log(im1)
    if (val==im1){
        document.getElementById('im').src=im2
        
    }else{
        document.getElementById('im').src=im1
        
    
    }

}


