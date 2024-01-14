import requests
from bs4 import BeautifulSoup

def FindHiddenLinks(qurey):
    url=qurey
    hiddenLinks =[]
    try:
        response=requests.get(url)
        soup=BeautifulSoup(response.text,'html.parser')
        for link in soup.find_all('a'):
            lin=link.get('href')
            if lin is not None and "pdf" not in lin and lin.startswith('http') :
                hiddenLinks.append(lin)
        return {
            'error' : False,
            'hiddenLinks' : hiddenLinks,
        }
    except Exception as e:
        return {
            'error': True,
            'message': f"An unexpected error occurred: {e}"
        }

    
