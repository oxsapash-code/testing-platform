# Используем официальный Python образ
FROM python:3.11-slim

# Устанавливаем системные зависимости (для PostgreSQL)
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Создаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY requirements.txt .

# Устанавливаем Python зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Копируем весь проект
COPY . .

# Создаем статическую папку (для collectstatic)
RUN mkdir -p /app/static

# Запускаем миграции и сервер
CMD ["sh", "-c", "python manage.py migrate && python manage.py collectstatic --noinput && gunicorn hackathon.wsgi:application --bind 0.0.0.0:8000"]