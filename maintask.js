function loadjson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("datatask.json",function(text){
    let datatask=JSON.parse(text);
    console.log(datatask);
    basic(datatask.details);
    basic1(datatask.details1);
})
function loadjson(file)
{
    return new Promise((resolve,reject)=>{
        return fetch(file).then(responsive=>{
            if(responsive.ok){
                resolve(responsive.json());
            }
            else{
                reject(new Error('error'));
            }
        })
    })
}
    var newfile=loadjson("datatask.json");
newfile.then(datatask=>{
    console.log(datatask);
    basic(datatask.details);
    basic1(datatask.details1);
})
var child1=document.querySelector(".child1");
function basic(det)
{
    var img=document.createElement("img");
    img.src=det.image;
    child1.appendChild(img);

var name=document.createElement("p");
name.textContent=det.name;
child1.appendChild(name);

var email=document.createElement("a");
email.href="mailto:noname@gmail.com";
email.textContent=det.email;
child1.appendChild(email);

child1.appendChild(document.createElement("br"));

var number=document.createElement("number");
number.textContent=det.number;
child1.appendChild(number);

var ad=document.createElement("h3");
ad.textContent="address";
child1.appendChild(ad);
var add1=document.createElement("p");
add1.textContent=det.adress;
child1.appendChild(add1);

}

var child2=document.querySelector(".child2");
function basic1(det1)
{
    var img=document.createElement("img");
    img.src=det1.image1;
    child2.appendChild(img);

var name=document.createElement("h4");
name.textContent=det1.name1;
child2.appendChild(name);

var email=document.createElement("a");
email.href="mailto:noname@gmail.com";
email.textContent=det1.email1;
child2.appendChild(email);

child2.appendChild(document.createElement("br"));

var number=document.createElement("number");
number.textContent=det1.number1;
child2.appendChild(number);

var ad=document.createElement("h3");
ad.textContent="address";
child2.appendChild(ad);
var add1=document.createElement("p");
add1.textContent=det1.adress1;
child2.appendChild(add1);
}