from django.db import models

# Create your models here.
class CulturalFacility(models.Model):
    esntl_id = models.CharField(max_length=50, primary_key=True)
    mlsfc_nm = models.CharField(max_length=50)
    fclty_nm = models.CharField(max_length=100)
    ctprvn_nm = models.CharField(max_length=50)
    signgu_nm = models.CharField(max_length=50)
    fclty_road_nm_addr = models.CharField(max_length=200)
    lnm_addr = models.CharField(max_length=200)
    adit_dc = models.CharField(max_length=100, null=True)
    latitude = models.CharField(max_length=200, default=1)
    longitude = models.CharField(max_length=200, default=1)

    def __str__(self):
        return self.fclty_nm