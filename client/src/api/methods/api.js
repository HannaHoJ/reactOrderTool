

const callApi = {
	'getHome': async function(){
		const response = await fetch('/home');
		const body = await response.json();

		if(response.status !== 200){
			throw Error(body.message);
		}
		return body;
	},

	'getCategories': async function(){
		const response = await fetch('/categories');
		const body = await response.json();
		if(response.status !== 200){
			throw Error(body.message);
		}
		return body;
	},
		
}

export default callApi;