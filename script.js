
async function fetchData(){
    try{
        const data = {
            people: 18,
            zone: "Center Corridor",
            time: "10 seconds",
            route: "Left Exit",
            reduction: "28%"
        }

        document.getElementById("people").innerText = data.people
        document.getElementById("zone").innerText = data.zone
        document.getElementById("time").innerText = data.time
        document.getElementById("route").innerText = data.route
        document.getElementById("reduction").innerText = data.reduction
    }catch(err){
        console.error(err)
    }
}

fetchData()
setInterval(fetchData,5000)
