from rest_framework import viewsets
from .models import Topic
from .serializers import TopicSerializer

class TopicViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer