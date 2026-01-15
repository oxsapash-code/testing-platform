import React from 'react';

function App() {
  const topics = [
    {
      id: 1,
      title: "ERP профессионал",
      sections: [{
        title: "Основные средства",
        questions: [{
          text: "Способом приобретения основного средства может быть:",
          answers: [
            "Строительство (создание)",
            "Вклад в уставный капитал", 
            "Безвозмездное поступление",
            "Варианты 1 или 2",
            "Варианты 1 или 3",
            "Варианты 1 или 2 или 3"
          ]
        }]
      }]
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>🧪 Testing Platform</h1>
      <h2>Темы для тестирования:</h2>
      
      {topics.map((topic, idx) => (
        <div key={idx} style={{ 
          border: '2px solid #4CAF50',
          borderRadius: '10px',
          padding: '15px',
          margin: '15px 0'
        }}>
          <h3>{topic.title}</h3>
          <button style={{
            padding: '10px 20px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px'
          }}>
            Начать тест
          </button>
        </div>
      ))}
      
      <p style={{ marginTop: '30px', color: '#666' }}>
        Полная версия с бэкендом доступна при локальном запуске
      </p>
    </div>
  );
}

export default App;