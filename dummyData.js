

const coolDudesIveMet = [
    {id: 1, name: "Alan", coolReason: "he can do a backflip!", coolPoints: 5},
    {id: 2, name: "Sean", coolReason: "has a mowhawk!!", coolPoints: 7},
    {id: 3, name: "Frank", coolReason: "can ride a bike with no hands!", coolPoints: 3},
    {id: 4, name: "Derek", coolReason: "plays the guitar!!", coolPoints: 6},

]

const list = () => {
    return [...coolDudesIveMet] 
  }; 
  
const find = (id) => {
    const dude = coolDudesIveMet.find(dude => dude.id === +id);
    return {...dude};
  }


  
  
  module.exports = {list: list, find: find};

