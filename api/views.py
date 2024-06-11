from django.http import JsonResponse
from .models import TotalView

def total_views(request):
    queryset = TotalView.objects.all()
    dct = {
        "labels": [],
        "datasets": [{
            "label": '# of Views',
            "borderWidth": 1,
            "data": []
        }]
    }
    print("-----------")
    print(dct)
    print("-----------")
    for item in queryset:
        dct['labels'].append(item.label)
        dct['datasets'][0]['data'].append(item.views)
    
    return JsonResponse(dct)
    
