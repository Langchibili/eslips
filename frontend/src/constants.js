const LOCAL_API_URL = 'http://localhost:1337' /*'http://192.168.43.207:1337/api' // localhost api */
//const REMOTE_API_URL = 'https://driverbabase.thenetworkzambia.com:1337/api' // remote server url
export const api_url = LOCAL_API_URL
  
 export function setClientId(){
    const generateUID = ()=> {
      const array = new Uint32Array(4); // 4 random 32-bit numbers
      window.crypto.getRandomValues(array);
  
      let uid = '';
      array.forEach(number => {
          uid += number.toString(16).padStart(8, '0'); // Convert to hexadecimal and pad to 8 characters
      });
  
      return uid;
    }
  
    const checkCookieExists = (cookieName)=> {
      const cookies = document.cookie.split(';'); // Split cookies into an array
      for (const cookie of cookies) {
          const [name, value] = cookie.trim().split('=');
          if (name === cookieName) {
              return true; // Cookie with the specified name exists
          }
      }
      return false; // Cookie with the specified name doesn't exist
    }
      
    const setClientIDCookie = (name, value)=> {
      // Set an expiration date 100 years from now
      const expires = new Date();
      expires.setFullYear(expires.getFullYear() + 10); // Set the expiration to 100 years from now
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }
    // set the clientId cookie
    const cookieExists = checkCookieExists('clientId');
    if (cookieExists) {
        return  
    } else {
      setClientIDCookie('clientId', generateUID());
    }
  }

  function getClientId() {
    const cookies = document.cookie.split('; ');
  
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'clientId') {
        return decodeURIComponent(value);
      }
    }
  
    return null; // Cookie not found
  }

export function setUserCurrentLocation(){

}

export function getNotificationPermision(){

}