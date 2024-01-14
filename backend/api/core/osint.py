from .name_info import Nameinfo
from .phone_number import Phonenumber 
from .pdf_analysis import Pdfinfo
from .webscrap import FindHiddenLinks
from .ipaddress_locator import Iplocator
'''
            1.Social media hunting using image
            2.Trace Single IP
            3.Heatmap
            4.URL redirection checker
            5.PDF meta data analysis
            6.URL lookup in webpages
            7.Information Gathering using Name
            8.Phonenumber verifier
'''
def Osint(feature_name,query,query_img,query_pdf) :
  match feature_name :
    case 'Information Gathering using Name' :
      return Nameinfo(query)
    case 'Phonenumber verifier' :
      return Phonenumber(query)
    case 'PDF meta data analysis' :
      return Pdfinfo(query_pdf)
    case 'URL lookup in webpages' :
      return FindHiddenLinks(query)
    case 'Trace Single IP' :
      return Iplocator(query)
    case default : 
      return {'error': 'Internal error'}




