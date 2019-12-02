document.getElementById("fun").addEventListener("click", function () { BishBosh(); })

function BishBosh() {
    //alert("Button clicked!")
    var i;
    var nrOfLoops;
    var bishValue;
    var boshValue;
    nrOfLoops = parseInt(document.getElementById("nrOfCycles").value);
    bishValue = parseInt(document.getElementById("bish").value);
    boshValue = parseInt(document.getElementById("bosh").value);
    console.log("v: " + nrOfLoops);
    var ta = document.getElementById("texta");
    if (0 < nrOfLoops <= 999 && 0 < bishValue <= 9  && 0 < boshValue <= 9) {
        ta.value = "";
        for (i = 1; i <= nrOfLoops; i++) {
            if ((i % boshValue === 0) && (i % bishValue === 0))
                //            console.log("Bish-Bosh");
                ta.value += "BishBosh\n";
            else if (i % boshValue === 0)
                //            console.log("Bosh");
                ta.value += "Bosh\n";
            else if (i % bishValue === 0)
                //            console.log("Bish");
                ta.value += "Bish\n";
            else
                //            console.log(i);
                ta.value += i + "\n";
        }
    }
}