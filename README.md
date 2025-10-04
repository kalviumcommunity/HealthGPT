# 🩺 **HealthGPT**

An AI-powered medical assistant that helps you understand complex health reports with ease. Upload a PDF of your lab results, and get a simplified, easy-to-read summary in seconds.

---

## ✨ **The Problem It Solves**

Medical reports are often filled with complex jargon, abbreviations, and data points that are difficult for the average person to understand. This can cause anxiety and confusion. HealthGPT bridges this gap by using the power of Generative AI to translate your reports into simple, actionable insights, empowering you to have more informed conversations with your healthcare provider.

---

## 🚀 **Features**

* 📄 **PDF Report Upload:** Securely upload any text-based medical report in PDF format.
* 🧠 **Intelligent Text Extraction:** Automatically parses the document to extract key metrics and values.
* 🤖 **AI-Powered Summaries:** Leverages Google's Gemini models to provide clear, simple explanations of what your results mean.
* ⚡ **Resilient Backend:** Built with a robust error-handling and retry mechanism to manage API rate limits and temporary service issues gracefully.
* 🔒 **Secure & Private:** Your data is processed in memory and is not stored long-term. All processing is done securely.

---

## 🛠️ **Tech Stack**

| Component   | Technology                 |
| ----------- | -------------------------- |
| Backend     | Python, FastAPI            |
| Frontend    | React, Axios               |
| AI Model    | Google Gemini (gemini-pro) |
| PDF Parsing | PyPDF2                     |

---

## ⚙️ **Getting Started**
Follow these instructions to get a local copy up and running.

### **Prerequisites**

* Python 3.8+
* Node.js and npm

### **Configuration**

**Get a Google Gemini API Key:**

1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Click **"Get API key"** and create a new key.

**Set Up Environment Variables:**

1. Navigate to the backend directory.
2. Create a file named `.env`.
3. Add your API key to the file like this:

   ```bash
   GOOGLE_API_KEY="YOUR_NEW_AI_STUDIO_API_KEY"
   ```

---

### **Installation & Running**

#### 1. Backend Server

```bash
# Navigate to the backend directory
cd backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn app.main:app --reload
```

Backend runs at: **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

#### 2. Frontend Application

```bash
# Open a new terminal and navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the React app
npm start
```

Frontend runs at: **[http://localhost:5173](http://localhost:3000)** (or a similar port)

---

👨‍⚕️ **Disclaimer**
HealthGPT is an informational tool and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider with any questions you may have regarding a medical condition.
