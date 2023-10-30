from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import router as api_router
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://ramenzaifu.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api")
