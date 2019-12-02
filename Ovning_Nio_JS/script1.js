//alert("Hi");

document.getElementById("fun").addEventListener("click", function () { BishBosh(); })

function BishBosh() {
    //alert("Button clicked!")
    var i;
    for (i = 1; i <= 100; i++)
    {
        if ((i % 4 === 0) && (i % 3 === 0))
            console.log("Bish-Bosh");
        else if (i % 4 === 0)
            console.log("Bosh");
        else if (i % 3 === 0)
            console.log("Bish");
        else
            console.log(i);
    }
}
