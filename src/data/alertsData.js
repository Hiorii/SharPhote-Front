import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AlertData= React.createContext();

const AlertsProvider = ({children}) => {

  const [alert, setAlert] = useState({
    show:false,
    msg:'',
    type:'success',
  });

  const showAlert = ({msg,type='success'}) => {
    setAlert({show:true, msg, type});
  };

  const hideAlert = () => {
    setAlert({...alert,show:false, msg:''});
  };

  return (
    <AlertData.Provider value={{alert,showAlert,hideAlert}}>
      {children}
    </AlertData.Provider>
  );
};

AlertsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AlertsProvider;
