import os
from PyPDF2 import PdfReader
from django.conf import settings

def Pdfinfo(query_pdf):
    pdf_file_path = os.path.join(settings.MEDIA_ROOT, 'query_pdfs', query_pdf)
    try:
        with open(pdf_file_path, 'rb') as f:
            pdf = PdfReader(f)
            return {
                'error': False,
                'pdf': pdf.metadata,
                'pages': len(pdf.pages),
            }
    except Exception as e:
        return {
            'error': True,
            'message': f"An unexpected error occurred: {e}",
        }
