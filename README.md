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

* **💬 Multi-Shot Prompting (LLM Control)**

  * Ensures the AI follows a medically focused behavior by giving multiple Q\&A examples and rejecting unrelated questions (e.g., politics, celebrities).

* **🗣️ Voice Input/Output (Optional)**

  * Adds accessibility by allowing spoken queries and audio responses.

* **⚡ Fast & Scalable Backend**

  * Built using asynchronous FastAPI architecture to ensure rapid response times.

---

## 💡 Example Use Case

> **User Uploads**: A blood test report in PDF format
> **HealthGPT Responds**:
> "Your Hemoglobin is 9.5 g/dL, which is below the normal range for adult males. This may indicate iron deficiency anemia. It is advisable to consult a healthcare provider."

---

## 🧠 Multi-Shot Prompting (LLM Control)

To improve the accuracy and safety of HealthGPT, we implemented **multi-shot prompting** using Google Gemini’s API.

The model is guided with **multiple medical Q\&A examples** and one or more examples where it politely refuses to answer unrelated questions (like politics or movies).

### ✅ Example Few-Shot Prompt:

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

This technique improves model control and ensures HealthGPT stays strictly within the **medical domain**.

---

## 🧰 Tech Stack

* **Frontend**: React (Coming Soon)
* **Backend**: FastAPI + AsyncIO + HTTPX
* **AI**: LLM (e.g., Groq LLaMA 3, Gemini) with RAG pipeline
* **PDF Parsing**: PyMuPDF / pdfplumber
* **Vector DB**: Pinecone / FAISS
* **Deployment**: Docker, Hugging Face Spaces (optional)

---

## 🔐 Security & Privacy

* All data is processed securely.
* No personal health data is stored long-term.
* Compliant with privacy best practices.

---

## 🛠️ Getting Started (Basic Setup)

```bash
# Clone the repo
git clone https://github.com/kalviumcommunity/HealthGPT.git
cd HealthGPT
```

---

## 🤝 Contributing

We welcome contributions! Whether it's improving the UI, optimizing the backend, or suggesting medical knowledge integrations, feel free to open a pull request or issue.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍⚕️ Disclaimer

HealthGPT is **not a substitute for professional medical advice, diagnosis, or treatment**. Always consult a qualified healthcare provider for any medical condition or concern.

---

## 🙌 Built with passion at Kalvium ❤️
