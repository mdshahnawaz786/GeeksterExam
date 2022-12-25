const img = document.getElementById("img");
        const button = document.getElementById("button");

        button.addEventListener("click", getPet);

        async function getPet(){
            img.style.display = "block"
            const data = await fetch("https://dog.ceo/api/breeds/image/random");
            const textData = await data.text();
            const jsonData = JSON.parse(textData)
            img.setAttribute("src",jsonData.message)
        }

        addEventListener("keyup",((event) => {
            if(event.key === "Enter"){
                getPet()
            }
        }))