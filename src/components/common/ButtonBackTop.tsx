import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ButtonBackTop = () => {
  const [showButtonTop, setshowButtonTop] = useState(false);

  const checkScrollTop = () => {
    if (!showButtonTop && window.pageYOffset > 400) {
      setshowButtonTop(true)
    } else if (showButtonTop && window.pageYOffset <= 400) {
      setshowButtonTop(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    }
  })

  return (
    <button
      className={"fixed z-40 right-5 bottom-5 shadow-lg flex justify-center text-white items-center w-10 h-10 bg-indigo-500 rounded-full focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 transition duration-300 ease"}
      onClick={scrollTop}
      style={{ display: showButtonTop ? 'flex' : 'none' }}
    >
      <FiArrowUp />
    </button>
  )
}

export default ButtonBackTop
