//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const axios = require('axios')
const server = require('./src/app.js');
const { conn, Type } = require('./src/db.js');


conn.sync({ force: false }).then(() => { //si esta en false, se le agrega el contenido.
  axios.get("https://pokeapi.co/api/v2/type")
  .then(
    response=>{
      return response.data.results.forEach( t => Type.findOrCreate({
          where: {
            name:t.name}
        })
      )
    }
  )
  
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
})

// async function getAinfo(){
// const info = await axios.get(url)
// }

