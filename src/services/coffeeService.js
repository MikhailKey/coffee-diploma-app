export default class CoffeeService {
    _apiBase = 'http://localhost:3000';  
    async getResourse(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}, error: ${res.status}`);
      }
      return await res.json();
    }
    
    getBestSellers = async () => {
       return await this.getResourse('/bestsellers/')
       
      }
    getAllCoffee = async () => {
        const res = await this.getResource('/coffee');
        return res;
      }
    getAllGoods = async () => {
        const res = await this.getResource('/goods');
        return res;
      }
  
    } 
    
   
  