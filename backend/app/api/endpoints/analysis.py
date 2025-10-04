from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services import text_extractor, llm_service
from app.schemas.analysis import AnalysisResponse

router = APIRouter()
# ... imports

@router.post("/analyze-report/", response_model=AnalysisResponse)
async def analyze_report(file: UploadFile = File(...)):
    """
    Accepts a PDF file, extracts text, and returns an AI-generated summary.
    """
    if file.content_type != 'application/pdf':
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload a PDF.")
    
    await file.seek(0)
    
    # 1. Extract text from the PDF
    extracted_text = await text_extractor.extract_text_from_pdf(file) # Use await here
    
    # 2. Get a summary from the LLM service
    summary = llm_service.get_report_summary(extracted_text)
    
    return AnalysisResponse(summary=summary, extracted_text=extracted_text)