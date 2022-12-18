    const country = document.getElementById("country");
    const state   = document.getElementById("state");
    const button  = document.getElementById("search");
    const parent  = document.getElementById("card_container");
    const clear  = document.getElementById("clear");

    button.addEventListener("click",getData);

    async function getData(){
        const valueCon = country.value;
        const valueSta = state.value;
        const api = await fetch (`http://universities.hipolabs.com/search?country=india`);
        const textResponse = await api.text();
        const jsonResponse = JSON.parse(textResponse);
        // console.log(jsonResponse);
        // console.log(valueSta
        for(let i=0; i<jsonResponse.length; i++){
            if(jsonResponse[i]["state-province"] === valueSta){
                // console.log(jsonResponse[i]["state-province"])
                const div = document.createElement("div");
                div.setAttribute("id","card");
                const h3 = document.createElement("h3");
                h3.innerText = `State Name: ${jsonResponse[i]["state-province"]}`;

                const last = document.createElement("h3");
                last.innerText = `University name: ${jsonResponse[i].name}`

                const next = document.createElement("h3");
                next.innerText = `University site URL: ${jsonResponse[i].domains["0"]}`;
                
                div.append(h3);
                div.append(last);
                div.append(next);
                
                parent.append(div)
            }
    }
    }
    
