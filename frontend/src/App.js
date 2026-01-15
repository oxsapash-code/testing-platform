import React, { useState } from 'react';

function App() {
  // Данные теста прямо в коде
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      text: "Что такое переменная в программировании?",
      answers: [
        { id: 1, text: "Именованная область памяти", isCorrect: true },
        { id: 2, text: "Функция", isCorrect: false },
        { id: 3, text: "Цикл", isCorrect: false },
        { id: 4, text: "Условие", isCorrect: false },
      ]
    },
    {
      text: "Какой метод добавляет элемент в конец массива?",
      answers: [
        { id: 1, text: "push()", isCorrect: true },
        { id: 2, text: "pop()", isCorrect: false },
        { id: 3, text: "shift()", isCorrect: false },
        { id: 4, text: "unshift()", isCorrect: false },
      ]
    }
  ];

  const handleAnswer = (answerId, isCorrect) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerId);
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      alert(`Тест завершён! Вы набрали ${score} из ${questions.length} баллов.`);
      resetTest();
    }
  };

  const resetTest = () => {
    setTestStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  // Функции для кнопок
  const showLocalOnlyMessage = (featureName) => {
    alert(`${featureName} доступна только в полной версии при локальном запуске.\n\nРепозиторий: https://github.com/oxsapash-code/testing-platform_icecode\n\nДля запуска локально:\n1. git clone <репозиторий>\n2. cd frontend && npm install\n3. npm start`);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>🧪 Платформа для тестирования</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Демо-версия системы тестирования. Полная версия с бэкендом доступна локально.
      </p>
      
      {!testStarted ? (
        <div>
          {/* Кнопка демо-теста */}
          <div style={{ margin: '30px 0' }}>
            <h3>🧪 Быстрый демо-тест (2 вопроса)</h3>
            <button 
              onClick={() => setTestStarted(true)}
              style={{
                padding: '15px 40px',
                fontSize: '18px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                margin: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              ▶️ Начать демо-тест
            </button>
          </div>

          {/* Раздел "Полная версия локально" */}
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '30px', 
            borderRadius: '15px', 
            marginTop: '40px',
            border: '1px solid #ddd'
          }}>
            <h3>🚀 Полная версия (локальный запуск)</h3>
            <p style={{ marginBottom: '25px' }}>
              Эти функции работают с бэкендом на Django и требуют локального запуска
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {/* Кнопка создания тестов */}
              <button 
                onClick={() => showLocalOnlyMessage('Создание тестов')}
                style={{
                  padding: '15px 30px',
                  fontSize: '16px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  minWidth: '200px',
                  boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                }}
              >
                📝 Создание тестов
              </button>

              {/* Кнопка выгрузки тестов */}
              <button 
                onClick={() => showLocalOnlyMessage('Выгрузка тестов')}
                style={{
                  padding: '15px 30px',
                  fontSize: '16px',
                  backgroundColor: '#FF9800',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  minWidth: '200px',
                  boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                }}
              >
                📤 Выгрузка тестов
              </button>

              {/* Кнопка админ-панели */}
              <button 
                onClick={() => showLocalOnlyMessage('Админ-панель Django')}
                style={{
                  padding: '15px 30px',
                  fontSize: '16px',
                  backgroundColor: '#9C27B0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  minWidth: '200px',
                  boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                }}
              >
                ⚙️ Админ-панель
              </button>
            </div>

            <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
              <p><strong>Ссылка на репозиторий:</strong> https://github.com/oxsapash-code/testing-platform_icecode</p>
              <p style={{ marginTop: '10px' }}>
                Для запуска полной версии нужны: Python, Django, Node.js
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Блок с тестом */
        <div style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Вопрос {currentQuestion + 1} из {questions.length}</h3>
            <button 
              onClick={resetTest}
              style={{
                padding: '8px 15px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              ← Назад к меню
            </button>
          </div>
          
          <p style={{ fontSize: '20px', margin: '20px 0', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            {questions[currentQuestion].text}
          </p>
          
          <div>
            {questions[currentQuestion].answers.map(answer => (
              <button
                key={answer.id}
                onClick={() => handleAnswer(answer.id, answer.isCorrect)}
                disabled={selectedAnswer !== null}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '15px',
                  margin: '10px 0',
                  textAlign: 'left',
                  border: `2px solid ${selectedAnswer === answer.id ? (answer.isCorrect ? '#4CAF50' : '#f44336') : '#ddd'}`,
                  backgroundColor: selectedAnswer === answer.id ? (answer.isCorrect ? '#e8f5e9' : '#ffebee') : 'white',
                  borderRadius: '8px',
                  cursor: selectedAnswer ? 'default' : 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {answer.text}
                {selectedAnswer === answer.id && (
                  <span style={{ float: 'right', fontWeight: 'bold' }}>
                    {answer.isCorrect ? ' ✅' : ' ❌'}
                  </span>
                )}
              </button>
            ))}
          </div>
          
          {selectedAnswer && (
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <button 
                onClick={handleNext}
                style={{
                  padding: '12px 40px',
                  fontSize: '16px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                }}
              >
                {currentQuestion < questions.length - 1 ? 'Следующий вопрос →' : 'Завершить тест'}
              </button>
              <p style={{ marginTop: '15px', color: '#666' }}>
                Текущий счёт: <strong>{score}</strong> из {questions.length}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;