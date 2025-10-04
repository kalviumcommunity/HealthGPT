import io
from PyPDF2 import PdfReader
from fastapi import UploadFile

async def extract_text_from_pdf(file: UploadFile) -> str: # Make the function async
    """
    Extracts text from an uploaded PDF file.
    """
    try:
        # Asynchronously read the file content into memory
        pdf_content = io.BytesIO(await file.read()) # Use await to read the file

        pdf_reader = PdfReader(pdf_content)
        
        text = ""
        for page in pdf_reader.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
        
        if not text:
            return "Could not extract any text from the PDF. The document might be image-based or corrupted."
            
        return text.strip()
    except Exception as e:
        return f"An error occurred during PDF processing: {str(e)}"