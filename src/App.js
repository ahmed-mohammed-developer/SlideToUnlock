import './App.css'; // استيراد ملفات CSS للتنسيق
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد ملفات CSS الخاصة بـ Bootstrap
import SlideToUnlock from './component/SlideToUnlock/SlideToUnlock';
function App() {
  return (
    <div className="App">
      <SlideToUnlock />
    </div>
  );
}

export default App; // تصدير المكون App للاستخدام في ملفات أخرى
