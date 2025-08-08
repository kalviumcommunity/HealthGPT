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

async function multiShotPrompting(){
    const inputEl = document.getElementById('input');
    const input = inputEl.value;
    if(input == ""){
        alert("You entered literally nothing and expecting an output");
        return;
    }
    const messagePrompt =`
        Q: What are the symptoms of diabetes?
        A: Common symptoms include frequent urination, excessive thirst, fatigue, and blurred vision.

        Q: What does a high WBC count indicate?
        A: A high white blood cell count may indicate infection, inflammation, or an immune system disorder.

        Q: What is the normal hemoglobin level for adults?
        A: For adult males, it’s about 13.8 to 17.2 g/dL; for adult females, it’s about 12.1 to 15.1 g/dL.

        Q: Who is the President of the United States?
        A: I'm sorry, I can only answer health-related questions. Please ask something related to health or medical information.

        Q: ${input}
        A:
        `;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [
                {
                    parts: [{ text: messagePrompt }]
                }
            ]
        })
    });
    const data = await response.json();
    console.log(data);
    const outputEl = document.getElementById('output');
    outputEl.innerHTML = `<h1 class="text-2xl p-5">${data.candidates?.[0]?.content?.parts?.[0].text}</h1>`
}