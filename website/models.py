from django.db import models

# Create your models here.
class Facts(models.Model):
    name = models.CharField(max_length=255, verbose_name="Назваие факта")
    text = models.TextField(verbose_name="Описание факта")
    
    class Meta:
        verbose_name = "Факт"
        verbose_name_plural = "Факты"
        
    def __str__(self):
        return self.name