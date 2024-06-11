from django.db import models

class TotalView(models.Model):
    label = models.CharField(max_length=100)
    views = models.IntegerField()
    
    def __str__(self) -> str:
        return self.label
