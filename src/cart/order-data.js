//are we putting all the product information in order or only parts of it?
var orderData = {
	"id" : "493",
	"name": "order No1",
	"totalPrice": "19,00",
	"date":  "19-12-2008",
	"user": {
		"id": "u1",
		"name": "sunny",
	},
	"items": [
		{
			"id" : "p1",
			"name": "Roggenbrot",
			"category": "Brot",
			//"ingredients": ["Roggenmehl", "Wasser", "Sauerteig", "Hefe", "Salz", "Pfeffer", "Kümmel"],
			"price" : "400",
			//"weight" : "1000g",
			//"unit" : "piece",
			//"description" : "sehr saftiges, kerniges Brot",
			"amount": "3",
		},
		{
			"id" : "p3",
			"name": "Bauernbrot",
			"category": "Brot",
			//"ingredients": [ "Roggenmehl", "Weizenmehl", "Wasser", "Sauerteig", "Hefe", "Salz", "Pfeffer", "Kümmel"],
			"price" : "350",
			//"weight" : "1000g",
			//"unit" : "piece",
			//"description" : "der Klassiker! Passt zu allem",
			"amount" : "2"

		}
	

	]		
	
}

export default orderData;