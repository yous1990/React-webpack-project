# React-webpack-project

>React-webpack-project

## Installation
* git clone "https://github.com/yous1990/api-project.git"

* cd api-project

## Frontend
* cd webapp

* npm install

* npm start

## Backend
* cd api-project

* npm install

* npm start

## Détails

J’ai commencé par faire le backend puis le frontend avec leurs propres package.json.
Le backend est à la racine du projet et j’ai regroupé le frontend dans le dossier webapp où j’ai aussi configuré le frontend avec webpack en suivant ce [tutoriel](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)

Dans la configuration de webpack, j’ai utilisé un proxy qui permet de taper sur un port différent du port du frontend, de même j’ai configuré le backend pour qu’il puisse récupérer et répondre aux requêtes venant d’un autre port.

``` 
proxy: {
			'/api': {
				target: 'http://localhost:3000',
				pathRewrite: {'^/api' : ''}
			}
```
```app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
```
Dans le fichier src/app.js du frontend, j’ai réalisé un composant intelligent qui a un state. Ce state prend en compte 2 valeurs: le ‘fetching’ qui est initialisé à false et ‘active’ qui est initialisé à 0. Lorsque le fetching est égale à true, on appelle un autre composant Loading. Ce composant peut être réutilisé en cas d’une éventuelle évolution de l’application.

``` 
import Loading from './components/loading/loading.component'
```
```
this.state = {
			active: 0,
			fetching: false
		};
	}
```
Le composant “myEll” retourne un bouton lorsque on le clique dessus, il exécute la fonction “fetchValue” qui va lancer la requête au backend pour récupérer une valeur aléatoire 1 ou 0, La réponse de la requête modifie le state avec un setState donc le fetching devient false (le chargement est fini) et  le active s’il est 0, on sait qu’en Javascript que 0 est une valeur falsy, alors le bouton ne sera pas disabled et s’il est true (1) donc le bouton devient disabled.

```
fetchValue(){
		this.setState({fetching: true});
		fetch('http://localhost:3000/vb')
			.then(resp => resp.json())
			.then(data => {
				this.setState({fetching: false});
				this.setState({active: data.value});
			});
	}
```
```
<div>
	<span>{this.state.active}</span>
	<button onClick={this.fetchValue} disabled={this.state.active}>Fetch Data</button>
</div>
```

Pour des fins démonstratives , j’ai fais un setTimeout  pour prolonger la durée de la requête d’une seconde afin de bien voir le temps de chargement.

```
setTimeout(function() {
		res.send({"value": generatedValue});
	}, 1000);
```
