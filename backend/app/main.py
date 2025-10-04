from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import analysis

app = FastAPI(
    title="HealthGPT API",
    description="API for analyzing medical reports using Generative AI.",
    version="1.0.0"
)

# Configure CORS (Cross-Origin Resource Sharing)
# Configure CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "http://localhost:5173"  # 👈 Add this line
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the API router
app.include_router(analysis.router, prefix="/api", tags=["Analysis"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the HealthGPT API"}