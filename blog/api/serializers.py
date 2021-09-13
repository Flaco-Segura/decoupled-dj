from django.db import models
from django.db.models import fields
from blog.models import Blog
from rest_framework import serializers

class BlogSerializers(serializers.ModelSerializer):
	class Meta:
		model = Blog
		fields = [
			"title",
			"body",
			"created_at",
			"status",
			"id"
		]
		