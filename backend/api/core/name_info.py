import requests
import webbrowser
from bs4 import BeautifulSoup
def Nameinfo(name):
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38'
    }   
    try:
        url="https://www.google.com/search?q="+name
        response=requests.get(url,headers=headers)
        socialmedia=["instagram","facebook","twitter","linkedin","github","scholar","hackerearth","hackerrank","hackerone","tiktok","youtube","books","researchgate","publons","orcid","maps"]
        linklist=[]        
        soup=BeautifulSoup(response.content,'html.parser')
        for g in soup.find_all('div', class_='g'):
            anchors = g.find_all('a')
            if 'href' in str(anchors[0]):
                linklist.append(anchors[0]['href'])

        socialmedialinks=[]
        for i in socialmedia:
            sm=str(i)
            for j in linklist:
                if sm in str(j):
                    socialmedialinks.append(j)

        filelinklist = [] 
        url="https://www.google.com/search?q=%22"+name+"%22+filetype%3Apdf&oq=%22"+name+"%22+filetype%3Apdf"
        response=requests.get(url,headers=headers)
        soup=BeautifulSoup(response.content,'html.parser')
        for g in soup.find_all('div', class_='g'):
            links = g.find_all('a')
            if 'href' in str(links[0]):
                filelinklist.append(links[0]['href'])
        return  { 
                 'socialmedialinks' : socialmedialinks ,
                 'filelinklist' : filelinklist, 
                }       
    except Exception as e:
        return { 
                 'error' : e,
                 'message ' : 'No data found'
               }
        


