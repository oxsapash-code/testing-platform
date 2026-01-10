markdown
# Testing Platform 🧪

Образовательная платформа для создания и прохождения тестов.

## 🚀 Быстрый старт

### Вариант 1: Docker (рекомендуется)
```bash
# Клонируйте репозиторий
git clone <ваш-репозиторий>
cd testing-platform

# Запустите всё одной командой
docker-compose up --build
Вариант 2: Ручная установка
bash
# Бэкенд
cd backend
python -m venv venv
source venv/bin/activate  # или venv\Scripts\activate на Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Фронтенд (в другом терминале)
cd frontend
npm install
npm start
📍 Доступ
Фронтенд: http://localhost:3000

Бэкенд API: http://localhost:8000

Админка: http://localhost:8000/admin (admin/admin)

Тестовый пользователь: testuser / testpass123

🛠 Функции
✅ Создание тем и вопросов
✅ Два режима тестирования
✅ Импорт/экспорт тестов
✅ История попыток
✅ Адаптивный дизайн

📁 Структура проекта
text
testing-platform/
├── backend/          # Django REST API
├── frontend/         # React приложение
└── docker-compose.yml
🔧 Технологии
Backend: Python, Django, Django REST Framework

Frontend: React, Material-UI

Database: PostgreSQL (или SQLite)

Deployment: Docker, Docker Compose

👥 Автор 

OxaPas

Лицензия
MIT