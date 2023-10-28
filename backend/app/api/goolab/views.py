import os
import requests
from fastapi import APIRouter
router = APIRouter(prefix="/goolabs")
@router.post("/morph")
async def get_keywords(item: MorphItem):
    pass
@router.post("/keywords")
async def get_keywords(item: KeywordItem):
    pass
