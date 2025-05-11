
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{textAlign: 'center', marginTop: '100px', fontSize: '24px'}}>
    مرحبًا بك في موقع <strong>سوشيالي</strong> 🚀<br />
    اطلب متابعين، لايكات، مشاهدات، وأكثر!
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
