import './slideToUnlock.css'
import React, {useState, useEffect} from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from "react-icons/ai";
import LockScren from './img/2.png'
import OpenScren from './img/1.png'

export default function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScren}) center/cover no-repeat`
  });
  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState(0);

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value);
  };

  const lockScreen = () => {
    setLockSliderValue(0);
    setShowLockSlider(true);
    setUiProps({
      uiText: "Unlock Screen",
      uiColor: "#eee",
      uiBg: `url(${LockScren}) center/cover no-repeat`
    });
  };

  useEffect(() => {
    document.body.style.background = '#999';
    if (lockSliderValue === '100'){
      setUiProps({
        uiText: "Lock Screen",
        uiColor: "#222",
        uiBg: `url(${OpenScren}) center/cover no-repeat`
      });
      setShowLockSlider(false); // قم بتحديث حالة showLockSlider إلى false
    }
  }, [lockSliderValue]);

  return (
    <div className='container text-center d-flex' style={{background: uiProps.uiBg}}>
      <h1 className='title' style={{color: uiProps.uiColor}}>{uiProps.uiText}</h1>
      {showLockSlider ? (
        <LockSlider width={"250px"} handelInput={handleLockSliderInput} value={lockSliderValue} />
      ) : (
        <AiFillUnlock className='unlockIcon' onClick={lockScreen} />
      )}
    </div>
  );
}
