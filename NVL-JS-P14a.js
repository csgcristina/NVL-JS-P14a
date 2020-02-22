var contenedor=document.querySelector("#contenedor");
var lista=document.createElement("ul");
contenedor.appendChild(lista);

var pelis=[["nombre1","accion"],["nombre6","terror"],
["nombre2","amor"],["nombre7","accion"],
["nombre3","terror"],["nombre8","amor"],
["nombre4","accion"],["nombre9","terror"],
["nombre5","amor"],["nombre10","terror"]

];

for (var i = 0; i < pelis.length; i++) {
		var epigrafe=document.createElement("li");
		lista.appendChild(epigrafe);

		if(pelis[i][1] == "terror"){
			var imagen=document.createElement("img");
			var spanTexto=document.createElement("span");
			epigrafe.appendChild(imagen);
			epigrafe.appendChild(spanTexto);
			imagen.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAwFBMVEX1RVgAAAB6cn3Mz9RbVV7mQVLj5useHB96IizEx8xkXGk9OT6qrLBxc3U5EBQ9ERbWPE0ZFxoqJytvZ3FJSkwqKisNDg4yLjRmX2hLRU9zICn////u7e9VVlhuZnBCQ0SOkJR/gYRjZWe7vsMuLi+5ubk6OzxBPEJUTlaanJ8fICAUFRUcCArDN0braHeoLzzQOkuYKzdoHSW+NkQjCgxaGSATBQeho6ddXmF2eHtRJCmkLjuHJjCGiIsuDRFHFBoUeKgZAAAEhElEQVR4nO2ca3eiOhSGocoIR+zoKNRyRsVrtXWO9VI7l17+/78a9t5BEryxmEni6eL9lPWK7IeYbEhINMaeifLG/0YqTUyl8saGtyt/jdRTGz+KauyKlatIN6oBTASoRLrpAkCzWlGjBigGwGtXq+Y/oEYBwAN076qxbpvssHY18eKvlhNvGnvTxCvH3m3iteOonDdNA3T5lumzWLzHqumO927IE7rOHXkV3mNUPu9NUwDCidk3vggeVUvjAKhw4gZdrPDVL/vXY96kAKp5AEwCEKw/Aei7oI4AMENvwgP4aLn3PMA9eT4PMEFrJgB00OsfAXA/gWoCQAm9lgCA1iePB/DIEwBaaJUEgBp6bgFQABwB6NRAEwFggJ4ndEO0ag88wAN5Qjf00BoIABP0OkcAEmnIA7fCp5S9xacTCiak2EOZsHIAilJ2W/CqKYAmfxYivmr7eye5mvInYXcoAZ7doXh4n92N+Br1y3u34/JO8d2L97qx1Uy85imvm3i707UT7wKfB3QCNMrKNb0F+QxAqwoAAJjb6hWA5gzgs6FeFui6APi/AzwulvZqZS8XjzoA1sEm6UubYK0YYDlP9+f5UiHAYpMOj9WwUARgvbOIo0E/dN3wx2DEjHdLBcAjXf6oPywxOc6wTwybzM0xP8B6C5G8sMTLcZwQxormNmtjzA3wDa+0VkopInBq+NE3uQB1aP3+LB2fCEJ4wJjXZQJYb9HhD+5+fCJwYbDylqkl5gQIoJKfD8UnApgMMAN5AHU4f/9wfARw+nBElh8hH8BTdHDrSHxGAMPYJ1kAj3B5w6MA1AzgmAzZIBfAKjp2cDw+VcH36KCVJADogs4JACQYQleUAwA5aHIqPlXBJFM2ygMQnOgCHMCPTD0xD8Dn000wBnAznTEPQJQFfRbJfd3LhmghQZSQ36QARLfBe4w1gJzvC/2BWQgQ3Ra3MgAs1gaH8Wsub/d7JNaYtcKz94McAHWWBpMXa70YgLNYMjybjfMDhBCncYezZeyphLdepQPAHF/1ik0sEoBgSQeAhz+YsYJXLCMCEKyPD6D9J9DeCLV3w/OJSDbA2VQsH+DMzUgFwDEVAAXAxwYwNuceimUDrH/WTg5LpAMY/50JXwB8eIBfm5beRrg9MD2nEkB7IioACoACgAN47rXGVHJbLfZ8POz0ZpITEQw8KNZDXILpmHtKj9EI1R8jgCdpigZnyXA0iIufv0MJhqVULbBcCIbGjgMjxWspAC8Qo/b8yhZfd8KwRaVeOOtQadJ/xjHSixQAmKfLpvOzdDlny7dxhPcdy/V1XNrEb/PMrazZcsN6oggvhrWikm0YNpVWlrEkwKcs72zyAUSVsAzsNQaoLwJ7gSVrYQe/sN9Za3u1zPbqMC/AX1MBcFkA2pfxaFUBcBHL+bQvaLwQgKR+tCxq1b6sV/vCZu1Luy9icbv25f0FQAGgfaNTIg15QPtmN+3b/bRveFSsi3wg0QhgqtjpnNpYLWx8ViPsi9U9O9n8Llsj2FzfSbueMVZEMKK/F0ht7/fGvwGPZNd+r1cr7gAAAABJRU5ErkJggg==";
			spanTexto.textContent=pelis[i][0];
			imagen.style.width = "35px";
			imagen.style.height = "35px";
		} else if(pelis[i][1] == "amor"){
			var imagen=document.createElement("img");
			var spanTexto=document.createElement("span");
			epigrafe.appendChild(imagen);
			epigrafe.appendChild(spanTexto);
			imagen.src="https://cdn.iconscout.com/icon/free/png-256/film-strip-1590996-1353235.png";
			spanTexto.textContent=pelis[i][0];
			imagen.style.width = "35px";
			imagen.style.height = "35px";
		} else if(pelis[i][1] == "accion"){
			var imagen=document.createElement("img");
			var spanTexto=document.createElement("span");
			epigrafe.appendChild(imagen);
			epigrafe.appendChild(spanTexto);
			imagen.src="https://cdn.iconscout.com/icon/premium/png-256-thumb/action-film-1413239-1194613.png";
			spanTexto.textContent=pelis[i][0];
			imagen.style.width = "35px";
			imagen.style.height = "35px";
		}
}



