import os
import requests
from fastapi import APIRouter
from pydantic import BaseModel

BASE_URL = "https://labs.goo.ne.jp/api"

router = APIRouter(prefix="/goolabs")

class KeywordItem(BaseModel):
    title: str
    body: str

class MorphItem(BaseModel):
    sentence: str

@router.post("/morph")
async def get_keywords(item: MorphItem):
    api_key =  os.getenv("GOOLAB_API_KEY")
    url = f"{BASE_URL}/morph"
    print(url)
    payload = {
        "app_id": api_key,
        "sentence": item.sentence,
    }
    response = requests.post(url, json=payload)
    word_list = []
    for word in response.json()["word_list"]:
        for i in word:
            if i[1] == "名詞":
                word_list.append(i[0])
            
    print(word_list)
    word_list += ["", "", ""]
    return {"word_0": word_list[0], "word_1": word_list[1], "word_2": word_list[2]}
    
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
    
