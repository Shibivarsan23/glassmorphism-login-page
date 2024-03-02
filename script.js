function pic()
{
    let Username=document.getElementById('one').value

    let password=document.getElementById('two').value
    if (Username=="NANDHA"&& password=="123")
    {
        window.location.href = "./sibi.html";

        
    }
    else{
        alert("Invalid password or Username")
    }
}