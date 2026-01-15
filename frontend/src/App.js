import React, { useState, useEffect } from 'react';

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Гарантируем что topics будет массивом
    setTopics([
      {
        id: 1,
        title: "Демо-тест по программированию",
        description: "Базовые концепции программирования"
      }
    ]);
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🧪 Testing Platform</h1>
      <p>Демо-интерфейс тестирования</p>
      
      <h2>Доступные тесты:</h2>
      {Array.isArray(topics) && topics.map(topic => (
        <div key={topic.id} style={{
          border: '1px solid #ccc',
          padding: '15px',
          margin: '10px 0',
          borderRadius: '8px'
        }}>
          <h3>{topic.title}</h3>
          <p>{topic.description}</p>
          <button style={{
            padding: '8px 16px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}>
            Начать тест
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;