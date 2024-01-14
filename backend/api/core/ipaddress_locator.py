import requests
def Iplocator(query):
    ipinfo={}
    ip = query
    url="http://ip-api.com/json/"+ip
    r=requests.get(url)
    ipinfo=r.json()
    if ipinfo['status'] == 'success':
        return {
            'error' : False,
            'info' : ipinfo,
        }
    else:
        return {
            'error' : True ,
            'message': 'ipaddress location not found',
        }
    