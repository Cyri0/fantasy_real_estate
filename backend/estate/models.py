from django.db import models

class Estate(models.Model):
    title = models.CharField(max_length=256)
    priceInHUF = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(null=True, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title