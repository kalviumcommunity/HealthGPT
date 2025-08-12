# 🩺 HealthGPT

**HealthGPT** is a personal AI-powered medical assistant that helps users understand their medical reports with ease. By uploading a PDF of a medical test result, users can receive simplified explanations, identify abnormalities, and learn about potential health risks—all in real-time.

---

## ✨ Features

* **📄 Upload Medical Reports (PDF)**

  * Upload lab reports or diagnostic test results.

* **🔍 Intelligent Extraction**

  * Automatically extracts values like Hemoglobin, WBC count, Glucose, etc.

* **🧠 AI-Powered Explanations (RAG)**

  * Uses Retrieval-Augmented Generation to explain what each test means and what the values indicate.

* **🪰 Healthcare Advisor Mode**

  * Interacts like a virtual doctor to provide calm, empathetic, and medically sound explanations.

* **💬 Advanced Prompting (LLM Control)**

  * Ensures the AI follows a medically focused behavior by giving it examples and rejecting unrelated questions.

* **🌀 Dynamic Prompting (NEW)**

  * The prompt is built at runtime using the uploaded PDF data + conversation history so answers stay context-aware and tied to the report.

* **🗣️ Voice Input/Output (Optional)**

  * Adds accessibility by allowing spoken queries and audio responses.

* **⚡ Fast & Scalable Backend**

  * Built using asynchronous FastAPI architecture to ensure rapid response times.

---

## 💡 Example Use Case

**User Uploads:** A blood test report in PDF format

**HealthGPT Responds:**

> "Your Hemoglobin is 9.5 g/dL, which is below the normal range for adult males. This may indicate iron deficiency anemia. It is advisable to consult a healthcare provider."

Later the user can ask follow-up questions and HealthGPT will use the same uploaded report and prior conversation to answer.

---

## 🧠 Prompt Engineering for LLM Control

To improve the accuracy and safety of HealthGPT, we implemented several prompt engineering techniques using Google Gemini’s API. This ensures HealthGPT stays strictly within the medical domain.

### One-Shot Prompting (Latest Implementation)

One-shot prompting provides the model with a single high-quality example to steer its responses efficiently.

**Example One-Shot Prompt:**

```
Q: My report says Triglycerides are 210 mg/dL. Is this normal?
A: A triglyceride level of 210 mg/dL is considered high. The desirable range is typically below 150 mg/dL. High triglycerides can increase the risk of heart disease.

Q: <user question>
A:
```

### Multi-Shot (Few-Shot) Prompting

Multi-shot prompting feeds the model multiple examples (including refusal examples) to better control behavior.

**Example Few-Shot Prompt:**

```
Q: What are the symptoms of diabetes?
A: Common symptoms include frequent urination, excessive thirst, fatigue, and blurred vision.

Q: What does a high WBC count indicate?
A: A high white blood cell count may indicate infection, inflammation, or an immune system disorder.

Q: Who is the President of the United States?
A: I'm sorry, I can only answer health-related questions. Please ask something medical.

Q: <user question>
A:
```

### Dynamic Prompting (Added Feature)

Dynamic prompting means the prompt is assembled at runtime using:

* Extracted text & metadata from the uploaded PDF (or its retrieved chunks),
* Conversation history (previous user & AI turns), and
* Any additional context (patient age, report date, clinician notes).

This lets HealthGPT:

* Answer **only** from the uploaded report when required,
* Preserve context across follow-ups,
* Reduce hallucinations by including retrieved evidence from the vector DB.

**Example: appending conversation history into the prompt**

```javascript
// conversationHistory is an array of message objects
conversationHistory.forEach((msg, index) => {
    systemInstructions += `\n${msg.role === "user" ? "User" : "AI"}: ${msg.text}`;
});
```

The code above concatenates all prior messages into `systemInstructions`, so the LLM sees the full session context along with the extracted PDF text.

---

## 🔐 Security & Privacy

* All data is processed securely.
* No personal health data is stored long-term unless explicitly opted-in.
* Compliant with privacy best practices.

---

## 🤝 Contributing

We welcome contributions! Whether it's improving the UI, optimizing the backend, or suggesting medical knowledge integrations, feel free to open a pull request or issue.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍⚕️ Disclaimer

HealthGPT is **not** a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for any medical condition or concern.

---

## 🙌 Built with passion at Kalvium ❤️
