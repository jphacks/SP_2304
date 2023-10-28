import os
import requests
from fastapi import APIRouter
from pydantic import BaseModel

BASE_URL = "https://labs.goo.ne.jp/api"

router = APIRouter(prefix="/goolabs")

class KeywordItem(BaseModel):
    title: str
    body: str
@router.post("/morph")
async def get_keywords(item: MorphItem):
    pass

@router.post("/keywords")
async def get_keywords(item: KeywordItem):
    api_key =  os.getenv("GOOLAB_API_KEY")
    url = f"{BASE_URL}/keyword"
    print(url)
    payload = {
        "app_id": api_key,
        "title": item.title,
        "body": item.body
    }
    response = requests.post(url, json=payload)
    word_list = []
    for i in response.json()["keywords"]:
        word_list += list(i.keys())
    word_list += ["", "", ""]
    return {"word_0": word_list[0], "word_1": word_list[1], "word_2": word_list[2]}

