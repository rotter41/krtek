function nahod(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min
}
let kol = true


document.getElementById("zac").onclick = function()
{
        const audio = document.getElementById("myAudio");
        const audio2 = document.getElementById("myAudio2");
        const audio3 = document.getElementById("myAudio3")
        audio3.pause()
        audio3.currentTime = 0
        audio.play();
        

    if (kol == true)
    {
        kol =false
    document.getElementById("skore").textContent = "0"
    document.getElementById("go").textContent = ""

    

    let skore = 0
    let hrsk = 0
    function spust ()
    {
        if (skore >= 20)
        {
            document.getElementById("go").textContent = "GAME OVER"
            if (hrsk == 20)
                { document.getElementById("per").textContent = "!!! PERFEKTNI SKORE !!!"
                    audio3.play()
                }
                    kol = true
            audio.pause()
            audio.currentTime = 0
            return
        }

        let r = nahod(1, 9)
        if (r == 1) document.getElementById("a1-1").textContent = "X"
        else if (r == 2) document.getElementById("a1-2").textContent = "X"
        else if (r == 3) document.getElementById("a1-3").textContent = "X"
        else if (r == 4) document.getElementById("a2-1").textContent = "X"
        else if (r == 5) document.getElementById("a2-2").textContent = "X"
        else if (r == 6) document.getElementById("a2-3").textContent = "X"
        else if (r == 7) document.getElementById("a3-1").textContent = "X"
        else if (r == 8) document.getElementById("a3-2").textContent = "X"
        else if (r == 9) document.getElementById("a3-3").textContent = "X"

        let jenjed = true

        if (r == 1)
            {
                document.getElementById("a1-1").onclick = function(){
                    if(jenjed == true)
                    {
                    hrsk++
                    jenjed = false
                    document.getElementById("skore").textContent = hrsk
                    audio2.play()
                    }
                }
            }
        else if (r == 2)
            {
                document.getElementById("a1-2").onclick = function(){
                    if(jenjed == true)
                        {
                        hrsk++
                        jenjed = false
                        document.getElementById("skore").textContent = hrsk
                        audio2.play()
                        }
                }
            }
        else if (r == 3)
            {
                document.getElementById("a1-3").onclick = function(){
                    if(jenjed == true)
                        {
                        hrsk++
                        jenjed = false
                        document.getElementById("skore").textContent = hrsk
                        audio2.play()
                        }
                }
            }
        else if (r == 4)
            {
                document.getElementById("a2-1").onclick = function(){
                    if(jenjed == true)
                        {
                        hrsk++
                        jenjed = false
                        document.getElementById("skore").textContent = hrsk
                        audio2.play()
                        }
                }
            }
        else if (r == 5)
            {
                document.getElementById("a2-2").onclick = function(){
                    if(jenjed == true)
                        {
                        hrsk++
                        jenjed = false
                        document.getElementById("skore").textContent = hrsk
                        audio2.play()
                        }
                }
            }
        else if (r == 6)
            {
                document.getElementById("a2-3").onclick = function(){
                    if(jenjed == true)
                        {
                        hrsk++
                        jenjed = false
                        document.getElementById("skore").textContent = hrsk
                        audio2.play()
                        }
                }
            }
        else if (r == 7)
            {
                document.getElementById("a3-1").onclick = function(){
                    if(jenjed == true)
                        {
                        hrsk++
                        jenjed = false
                        document.getElementById("skore").textContent = hrsk
                        audio2.play()
                        }
                }
            }
        else if (r == 8)
            {
                document.getElementById("a3-2").onclick = function(){
                    if(jenjed == true)
                        {
                        hrsk++
                        jenjed = false
                        document.getElementById("skore").textContent = hrsk
                        audio2.play()
                        }
                }
            }
        else if (r == 9)
            {
                document.getElementById("a3-3").onclick = function(){
                    if(jenjed == true)
                        {
                        hrsk++
                        jenjed = false
                        document.getElementById("skore").textContent = hrsk
                        audio2.play()
                        }
                }
            }
    
    
    setTimeout(() => 
        {
            
            let r = nahod(1, 9)
            document.getElementById("a1-1").textContent = ""
            document.getElementById("a1-2").textContent = ""
            document.getElementById("a1-3").textContent = ""
            document.getElementById("a2-1").textContent = ""
            document.getElementById("a2-2").textContent = ""
            document.getElementById("a2-3").textContent = ""
            document.getElementById("a3-1").textContent = ""
            document.getElementById("a3-2").textContent = ""
            document.getElementById("a3-3").textContent = ""
    skore++
    spust()    
    }, 2000)
    }   
    }
    spust()
}