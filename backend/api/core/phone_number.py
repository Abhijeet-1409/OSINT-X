import requests
import urllib.parse

def Phonenumber(query):
    phonenum = query
    base_url = "https://api.apilayer.com/number_verification/validate"
    params = {'number': phonenum}
    url = base_url + '?' + urllib.parse.urlencode(params)

    payload = {}
    headers = {
        "apikey": "09Tq7H7XYAfK7E0Sa9reLRmABcDnxoRN"
    }
    resp = requests.get(url, headers=headers, data=payload)
    details = resp.json()
    return details



