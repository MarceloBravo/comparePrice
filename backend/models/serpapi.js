const _const = require('../shared/constantes')
const fetch = require('node-fetch');
const testData = require('../shared/test-data');

const SerpApi = {}

SerpApi.cotizar = async (params, callback) => {

    try{
        /*
        const response = await fetch(`${_const.endPoint}engine=${params.engine}&q=${params.textoBusqueda}&location=${params.location}&hl=${params.hl}&gl=${params.gl}&google_domain=${params.google_domain}&num=${params.num}&start=${params.start}&safe=${params.safe}&api_key=${_const.apiKey}`)
        
        if (!response.ok) {
            console.log('ERROR IN THE FIRST CALL TO API', `${_const.endPoint}engine=${params.engine}&q=${params.textoBusqueda}&location=${params.location}&hl=${params.hl}&gl=${params.gl}&google_domain=${params.google_domain}&num=${params.num}&start=${params.start}&safe=${params.safe}&api_key=${_const.apiKey}`)
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        
        const resSource = await fetch(`${_const.endPoint}engine=${params.engine}&q=${params.textoBusqueda}&location=${params.location}&hl=${params.hl}&gl=${params.gl}&google_domain=${params.google_domain}&num=${params.num}&start=${params.start}&safe=${params.safe}&api_key=${_const.apiKey}&tbm=lcl`)

        if(resSource){
            const resultSource = await resSource.json();
            result.local_results = resultSource.local_results
        }
        */
       let result = testData
        return callback({result, error: null})
    } catch (err) {
        console.log(err);
        return callback({result: null, error: err})
    }
}

module.exports = SerpApi