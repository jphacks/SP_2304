import os
import openai
from fastapi import APIRouter
router = APIRouter(prefix="/openai")
@router.post("/excuse")
async def get_excuse(item: ExcuseItem):
    pass
