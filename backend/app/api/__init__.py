from fastapi import APIRouter

from .openai.views import router as openai_router
from .goolab.views import router as goolab_router

router = APIRouter()
router.include_router(openai_router)
router.include_router(goolab_router)