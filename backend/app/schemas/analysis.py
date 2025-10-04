from pydantic import BaseModel
from typing import Optional

class AnalysisResponse(BaseModel):
    summary: str
    extracted_text: str
    confidence: Optional[float] = None