GEMINI_API_KEY = "AIzaSyBqnY1tQGYdENf4Zq5vbYsNMXXU56k0nOs"

async function zeroShotPrompting(){
    const inputEl = document.getElementById('input') 
    const input = inputEl.value;
    if(input == ""){
        alert("Your have entered nothing");
        return;
    }
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`
        ,{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                contents:[
                    {
                        parts:[{text: input}]
                    }
                ]
            })
        }
    );
    const data = await response.json();
    console.log(data);
    const outputEl = document.getElementById('output');
    outputEl.innerHTML = `<h1 class="text-2xl p-5">${data.candidates?.[0]?.content?.parts?.[0].text}</h1>`
}