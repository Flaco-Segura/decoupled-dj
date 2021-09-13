from .serializers import BlogSerializers
from blog.models import Blog
from rest_framework.generics import ListAPIView, RetrieveAPIView

class BlogList(ListAPIView):
  serializer_class = BlogSerializers
  queryset = Blog.objects.all()

class BlogDetail(RetrieveAPIView):
  serializer_class = BlogSerializers
  queryset = Blog.objects.all()