GEMINI_API_KEY = "AIzaSyBqnY1tQGYdENf4Zq5vbYsNMXXU56k0nOs"

// for dynamic prompting i am initializing an empty array in this i will be pushing all the queries that the user asks from our llm
let conversationHistory = [];

async function dynamicPrompting(){
    const inputEl = document.getElementById('input') 
    const input = inputEl.value;
    if(input == ""){
        alert("Your have entered nothing");
        return;
    }
    let systemInstructions = `
        You are HealthGot, an AI medical report explainer.
        Analyze the provided medical document, explain medical terms in simple language, and highlight any important findings.
        Avoid giving medical advice — only explain.
        Here is the conversation so far:
    `;
    conversationHistory.push({role: "user" , text: input});
    conversationHistory.forEach((message,index)=>{
        systemInstructions+=`\n${message.role === 'user' ? "User" :"AI"}: ${message.text}`
    })
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`
        ,{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                contents:[
                    {
                        parts:[{text: systemInstructions}]
                    }
                ]
            })
        }
    );
    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0].text || "No response from AI.";
    console.log(data);

    conversationHistory.push({role:"ai" , text: aiResponse})

    const outputEl = document.getElementById('output');
    outputEl.innerHTML = `<h1 class="text-2xl p-5">${aiResponse}</h1>`
}
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
You are HealthGot, an AI medical report explainer.
Analyze the provided medical document, explain medical terms in simple language, and highlight any important findings. Avoid giving medical advice — only explain.

Example:
Medical Report:  
"Patient Hemoglobin: 8.5 g/dL  
WBC Count: 11,000 /µL  
Cholesterol: 220 mg/dL"

AI Analysis:  
The patient’s hemoglobin is lower than the normal range (12–15 for females, 13–17 for males), which may indicate anemia.  
The white blood cell (WBC) count is slightly elevated, possibly due to infection or inflammation.  
Cholesterol is slightly above the recommended limit of 200 mg/dL, which may increase heart disease risk.

        Medical Report: ${input}
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