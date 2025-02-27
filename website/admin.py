from django.contrib import admin
from .models import Facts

# Register your models here.
@admin.register(Facts)
class FactsAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']
    list_display_links = ['name']