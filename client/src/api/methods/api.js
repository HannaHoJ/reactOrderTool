
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
	'postItem': async function(url, item){
		console.log(JSON.stringify(item))
		try{
			const response = await fetch(url, { 
				method: 'POST',
				body: JSON.stringify(item),
				headers: {
			      'content-type': 'application/json'
			    },
			});
			const body = await response.json();
			if(response.status !== 200){
				throw Error(response.message);
			}
			return body;
		}catch(e){
			console.error(url, e.toString())
		}
	}
}

export default callApi;
