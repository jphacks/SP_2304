import os
import openai
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/openai")

class ExcuseItem(BaseModel):
    sentence: str

@router.post("/excuse")
async def get_excuse(item: ExcuseItem):
    openai.api_key = os.getenv("OPENAI_API_KEY")
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that expresses a positive opinion about my statement."},
            {"role": "user", "content": item.sentence},
        ]
    )
    return completion.choices[0].message
