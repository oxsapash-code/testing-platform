import React from 'react';

export default function App() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#2c3e50' }}>🧪 Testing Platform</h1>
      <p style={{ fontSize: '18px', color: '#7f8c8d' }}>
        Образовательная платформа для создания и прохождения тестов
      </p>
      
      <div style={{ 
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <a 
          href="https://github.com/oxsapash-code/testing-platform_icecode"
          style={{
            padding: '12px 24px',
            background: '#24292e',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          📦 Код на GitHub
        </a>
        
        <button 
          onClick={() => alert('Демо-режим: полная версия работает локально')}
          style={{
            padding: '12px 24px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          🎯 Демо тест
        </button>
      </div>
    </div>
  );
}