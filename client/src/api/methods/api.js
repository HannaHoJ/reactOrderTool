
/*
API calls to server
*/

const callApi = {
	'getContent': async function(url){
		try{
			const response = await fetch(url);
			const body = await response.json();
			console.log(response)
			console.log(body);
			if(response.status !== 200){
				throw Error(response.message);
			}
			return body;
		}catch(e){
			console.error(url, e.toString())
		}
	},
}

export default callApi;
