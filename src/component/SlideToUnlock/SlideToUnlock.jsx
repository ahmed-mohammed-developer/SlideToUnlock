import './slideToUnlock.css' // استيراد ملفات CSS للتنسيق
import React, { useState, useEffect } from 'react'
import LockSlider from './LockSlider' // استيراد مكون LockSlider
import { AiFillUnlock } from "react-icons/ai" // استيراد أيقونة فتح القفل
import LockScren from './img/2.png' // استيراد صورة شاشة القفل
import OpenScren from './img/1.png' // استيراد صورة الشاشة المفتوحة

export default function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScren}) center/cover no-repeat`
  }); // تعريف حالة uiProps مع القيم الافتراضية

  const [showLockSlider, setShowLockSlider] = useState(true); // تعريف حالة showLockSlider
  const [lockSliderValue, setLockSliderValue] = useState(0); // تعريف حالة lockSliderValue

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value); // تحديث قيمة المنزلق عند تغيير قيمته
  };

  const lockScreen = () => {
    setLockSliderValue(0); // إعادة تعيين قيمة المنزلق إلى 0
    setShowLockSlider(true); // عرض المنزلق مرة أخرى
    setUiProps({
      uiText: "Unlock Screen",
      uiColor: "#eee",
      uiBg: `url(${LockScren}) center/cover no-repeat`
    }); // إعادة تعيين واجهة المستخدم إلى القيم الافتراضية
  };

  useEffect(() => {
    document.body.style.background = '#999'; // تعيين خلفية الصفحة إلى اللون الرمادي
    if (lockSliderValue === '100') { // التحقق إذا كانت قيمة المنزلق تساوي 100
      setUiProps({
        uiText: "Lock Screen",
        uiColor: "#222",
        uiBg: `url(${OpenScren}) center/cover no-repeat`
      }); // تحديث واجهة المستخدم إلى شاشة مفتوحة
      setShowLockSlider(false); // إخفاء المنزلق وعرض أيقونة فتح القفل
    }
  }, [lockSliderValue]); // تنفيذ هذا التأثير عند تغيير قيمة lockSliderValue

  return (
    <div className='container text-center d-flex' style={{ background: uiProps.uiBg }}>
      <h1 className='title' style={{ color: uiProps.uiColor }}>{uiProps.uiText}</h1>
      {showLockSlider ? (
        <LockSlider width={"250px"} handelInput={handleLockSliderInput} value={lockSliderValue} /> 
      ) : (
        <AiFillUnlock className='unlockIcon' onClick={lockScreen} /> // عرض أيقونة فتح القفل عند إخفاء المنزلق
      )}
    </div>
  );
}
