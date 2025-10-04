import google.generativeai as genai
from app.core.config import GEMINI_API_KEY
import time
from google.api_core import exceptions

# Configure the Gemini API client
genai.configure(api_key=GEMINI_API_KEY)
# ❗️ Updated to use gemini-1.5-flash-latest
model = genai.GenerativeModel('gemini-pro')

def get_report_summary(report_text: str) -> str:
    # ... (keep the first if statement)
    if not report_text or report_text.startswith("Could not extract") or report_text.startswith("An error occurred"):
        return "Cannot analyze the report due to a text extraction issue."

    # ❗️❗️ TEMPORARY DEBUGGING CODE ❗️❗️
    print("--- DEBUG: Bypassing PDF content and sending a simple prompt. ---")
    prompt = "Explain what a mitochondrion is in a single paragraph."  
    max_retries = 3
    delay = 2

    for attempt in range(max_retries):
        try:
            response = model.generate_content(prompt)
            return response.text
        # ❗️ Now catches BOTH rate limit and service unavailable errors
        except (exceptions.ResourceExhausted, exceptions.ServiceUnavailable) as e:
            if attempt < max_retries - 1:
                # This new print statement helps you see what's happening in the terminal
                print(f"Caught a retryable error: {type(e).__name__}. Retrying in {delay} seconds...")
                time.sleep(delay)
                delay *= 2
            else:
                print("Max retries reached. Failing.")
                return "The AI model is currently busy. Please try again in a few moments."
        except Exception as e:
            print(f"An unexpected error occurred: {e}")
            return "An unexpected error occurred while communicating with the AI model."