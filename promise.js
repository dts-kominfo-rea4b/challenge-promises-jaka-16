const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
let promiseOutput = null;
  
promiseOutput = (emosi) => {
  return new Promise((resolved) => {
    function countTheaterIXX(amount) { 
          promiseTheaterIXX()
              .then()
                    .then((resolve) => {
                        let count_marah = 0;
                        let count_tdk_marah = 0;
                        Object.values(resolve).forEach((value) => {
                          let esmosi = value['hasil'];
                          if (esmosi === 'marah'){
                            count_marah = 4;
                          }else{
                            count_tdk_marah = 2;
                          }

                        })
                        amount(emosi === 'marah' ? count_marah : count_tdk_marah);
                      })
                    }
                      
                    promiseTheaterVGC()
                            .then()
                                .then((resolve) => {
                                    countTheaterIXX((x) => {
                                        let count_marah = 0;
                                        let count_tdk_marah = 0;
                                        Object.values(resolve).forEach((value) => {
                                            let esmosi = value['hasil'];
                                                if (esmosi == 'marah'){
                                                    count_marah = 4;
                                                }else{
                                                    count_tdk_marah = 2;
                                                }

                                        })
                        return resolved(emosi === 'marah' ? count_marah: count_tdk_marah);
                                    })
                                })
                        })
}
module.exports = {
  promiseOutput,
};
