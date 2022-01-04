//configuracion de un fetch como requisito
export const getData=async(url)=>{
    const dirSolve =  `http://localhost:4000/${url}`
      const response = await fetch(dirSolve, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }   
    }); 
    if (response.status===200||response.status===204){

      const json = await response.json()
      return json
    }else { 
      
      return false
      }
   
  }