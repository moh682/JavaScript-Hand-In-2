const calc = require('./calc');
const PORT = 2345;

calc.calcServer(PORT, () => {
  console.log('Server Started');
})