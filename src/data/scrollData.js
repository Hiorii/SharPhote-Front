import React,{useState, useEffect} from 'react';

export const ScrollData = React.createContext();

const ScrollProvider = ({children}) => {
  const [height, setHeight] = useState(0);

  useEffect(()=> {
    window.addEventListener('scroll',()=> {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll',()=> {});
  });

  return (
    <ScrollData.Provider value={{height}}>
      {children}
    </ScrollData.Provider>
  );
};

export default ScrollProvider;
