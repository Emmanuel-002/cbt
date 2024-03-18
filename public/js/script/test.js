const displayTime = document.querySelector("#displayTime")

if(localStorage.getItem("time")==null)
{
    localStorage.setItem("time","60:00")
    setInterval(updateCountDown, 1000)
}
else
    setInterval(updateCountDown, 1000)

        function updateCountDown(){
            let string = localStorage.getItem("time")
            let [str_mins,str_sec] = string.split(":")
            let mins = Number(str_mins)
            let sec = Number(str_sec)
            let time = mins*60 + sec
            time--
            mins = Math.floor(time/60)
            sec = Math.floor(time%60)
            string = `${mins}:${sec}`
            localStorage.setItem("time",string)

            // localStorage.setItem("time",JSON.stringify(time))
            // const currentTime = (new Date().getTime())/1000
            // let time = startTime-currentTime
            // const minutes = Math.floor(time/60)
            // let seconds = Math.floor(time%60)
            // countDown = `${minutes}:${seconds}`
            displayTime.innerText = localStorage.getItem("time")
            console.log()
            
        }
        const finishTest = document.querySelector("#finish")
        finishTest.addEventListener("click",(event)=>{
            event.preventDefault();
            localStorage.removeItem("time")
        })