from django.contrib import admin
from .models import Topic, Section, Question, Answer

admin.site.register(Topic)
admin.site.register(Section)
admin.site.register(Question)
admin.site.register(Answer)