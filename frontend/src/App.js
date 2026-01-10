import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Загружаем тесты
  useEffect(() => {
    axios.get('/api/topics/')
      .then(response => {
        console.log('Topics loaded:', response.data);
        setTopics(response.data);
      })
      .catch(error => {
        console.error('Error loading topics, using mock data', error);
        // Мок-данные для демо если API не работает
        setTopics([{
          id: 1,
          title: "ERP профессионал",
          sections: [{
            id: 1,
            title: "Основные средства",
            questions: [{
              id: 1,
              text: "Способом приобретения основного средства может быть:",
              answers: [
                { id: 1, text: "Строительство (создание)" },
                { id: 2, text: "Вклад в уставный капитал" },
                { id: 3, text: "Безвозмездное поступление" },
                { id: 4, text: "Варианты 1 или 2" },
                { id: 5, text: "Варианты 1 или 3" },
                { id: 6, text: "Варианты 1 или 2 или 3" }
              ]
            }]
          }]
        }]);
      });
  }, []);

  const startTest = (topic) => {
    setCurrentTopic(topic);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const getCurrentQuestion = () => {
    if (!currentTopic) return null;
    let questionCount = 0;
    for (const section of currentTopic.sections) {
      for (const question of section.questions) {
        if (questionCount === currentQuestionIndex) {
          return { ...question, sectionTitle: section.title };
        }
        questionCount++;
      }
    }
    return null;
  };

  const handleAnswer = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const nextQuestion = () => {
    if (selectedAnswer === 6) setScore(score + 1); // Правильный ответ id=6
    
    const totalQuestions = currentTopic.sections.reduce(
      (total, section) => total + section.questions.length, 0
    );
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      alert(`Тест завершен! Правильных ответов: ${score + (selectedAnswer === 6 ? 1 : 0)}/${totalQuestions}`);
      setCurrentTopic(null);
    }
  };

  const question = getCurrentQuestion();

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{ color: '#2c3e50' }}>🧪 Платформа тестирования</h1>
      
      {!currentTopic ? (
        <div>
          <h2>Доступные тесты:</h2>
          {topics.map(topic => (
            <div key={topic.id} style={{
              background: '#f8f9fa',
              border: '2px solid #dee2e6',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '15px'
            }}>
              <h3 style={{ color: '#495057' }}>{topic.title}</h3>
              <p style={{ color: '#6c757d' }}>
                {topic.sections?.length || 0} разделов, 
                {topic.sections?.reduce((sum, s) => sum + (s.questions?.length || 0), 0) || 0} вопросов
              </p>
              <button onClick={() => startTest(topic)}
                style={{
                  background: '#28a745',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}>
                Начать тест
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '15px',
            background: '#e9ecef',
            borderRadius: '8px'
          }}>
            <h2 style={{ margin: 0 }}>{currentTopic.title}</h2>
            <div>
              <span style={{ marginRight: '15px' }}>
                Вопрос {currentQuestionIndex + 1}/
                {currentTopic.sections.reduce((t, s) => t + s.questions.length, 0)}
              </span>
              <span>Счет: {score}</span>
            </div>
          </div>

          {question && (
            <div style={{
              background: 'white',
              border: '1px solid #ced4da',
              borderRadius: '8px',
              padding: '25px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                color: '#6c757d',
                fontSize: '14px',
                textTransform: 'uppercase',
                marginTop: 0 
              }}>
                {question.sectionTitle}
              </h3>
              
              <h4 style={{ 
                fontSize: '18px',
                marginBottom: '25px',
                color: '#212529'
              }}>
                {question.text}
              </h4>

              <div>
                {question.answers.map(answer => (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswer(answer.id)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '15px',
                      marginBottom: '10px',
                      border: `2px solid ${selectedAnswer === answer.id ? '#007bff' : '#dee2e6'}`,
                      borderRadius: '6px',
                      background: selectedAnswer === answer.id ? '#e7f1ff' : 'white',
                      fontSize: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {answer.text}
                    {selectedAnswer === answer.id && answer.id === 6 && ' ✓ Правильно!'}
                    {selectedAnswer === answer.id && answer.id !== 6 && ' ✗ Неверно'}
                  </button>
                ))}
              </div>

              {selectedAnswer && (
                <button onClick={nextQuestion}
                  style={{
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    width: '100%'
                  }}>
                  {currentQuestionIndex < currentTopic.sections.reduce((t, s) => t + s.questions.length, 0) - 1 
                    ? 'Следующий вопрос →' 
                    : 'Завершить тест'}
                </button>
              )}
            </div>
          )}
        </div>
      )}

      <div style={{ marginTop: '30px', textAlign: 'center', color: '#6c757d' }}>
        <p>Бэкенд: http://localhost:8000 | Админка: http://localhost:8000/admin</p>
        <p>Для демо: правильный ответ всегда "Варианты 1 или 2 или 3" (id=6)</p>
      </div>
    </div>
  );
}

export default App;