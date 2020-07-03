This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [Introdução](#Introdução)
- [Documentação](#Documentação)
 - [Componentes](#Componentes)
 - [Packages utilizados](#Packages-utilizados)


# Introdução
## Descrição do projeto
Nesse projeto foi reproduzido a tela proposta na [frontend-challenge](https://github.com/WealthSystems/frontend-challenge) da WealthSystems

## Setup do projeto

No diretório raiz do projeto execute:
### `yarn`
Para baixar as dependencias necessárias

## Scripts disponíveis

No diretório raiz do projeto você pode executar os seguintes comandos

### `yarn start`

Roda a aplicação no modo de desenvolvimento<br />
Abra [http://localhost:3000](http://localhost:3000) para vizualizar o projeto.

### `yarn build`

Faz o *build* do projeto pra pasta `build`.<br />

# Documentação
## Componentes
### Activities

![](https://i.imgur.com/TxOjmki.png)

| Parametro | Descrição |
| ------------ | ------------ |
| data | Recebe um vetor com a estrutura especificada abaixo  |
```
[
	{
		title: String,
		contact: String,
		type: String ['call', 'meeting', 'event', 'email'],
		date: String,
		category: String ['late', 'underway', 'expected', 'finished']
	}
]
```
### Card
| Parametro | Descrição |
| ------------ | ------------ |
| title | Titulo do card |
| children* | Conteudo do card |
**children não é uma prop e sim o conteudo que se encontra entre <Card> e </Card>*

### CreditLimit

![](https://i.imgur.com/zw32yiE.png)

| Parametro | Descrição |
| ------------ | ------------ |
| data | Recebe um objeto com a estrutura especificada abaixo |

```
{
	granted: Number,
	avaliable: Number
}
```

### FinancialSecurities

![](https://i.imgur.com/dlHDCzk.png)

| Parametro | Descrição |
| ------------ | ------------ |
| data | Recebe um objeto com a estrutura especificada abaixo |
```
{
	overdue: { 
		amount: Number,
		value: String
	},
	nearOverdue: {
		amount: Number,
		value: String
	},
	paid: {
		amount: Number,
		value: String
	}
}
```

### GeneralInfo

![](https://i.imgur.com/R5nJEYf.png)

| Parametro | Descrição |
| ------------ | ------------ |
| data | Recebe um objeto com a estrutura especificada abaixo |
```
{
	name: String,
	company: String,
	isActive: Boolean,
	phone: String,
	email: String,
	socialMedia: {
		whatsapp: String, //URL
		facebook: String, //URL
		instagram: String, //URL
		twitter: String, //URL
		linkedin: String, //URL
	}
}
```

### IconInfo

![](https://i.imgur.com/rn3RRKP.png)

| Parametro | Descrição |
| ------------ | ------------ |
| icon | String, nome do icone [email, phone, event, group, whatsapp, facebook, instagram, twitter, linkedin, place] |
| value | String, valor principal ou "header" |
| description | String, valor secundario ou "subheader" |
| color | String, nome da cor ou valor hexadecimal em String |

### Indicator

![](https://i.imgur.com/jtCdzwX.png)

| Parametro | Descrição |
| ------------ | ------------ |
| value | Number, valor a ser mostrado no indicador |
| title | String, titulo do indicador |
| subtitle | String, subtitulo/descrição (opcional) |
| color | String, nome da cor ou valor hexadecimal em String |
| isSelected | Boolean, aplica estilo de selecionado no objeto |
| isSelectable | Boolean, aplica estilo de selecionável no objeto |

### MapLocation

![](https://i.imgur.com/BsWwpP0.png)

| Parametro | Descrição |
| ------------ | ------------ |
| data | Recebe um objeto com a estrutura especificada abaixo |
```
{
	longitude: Number,
	latitude: Number,
	place: String,
	description: String
}
```

### Opportunities

![](https://i.imgur.com/wlYGK4G.png)

| Parametro | Descrição |
| ------------ | ------------ |
| data | Recebe um objeto com a estrutura especificada abaixo |
```
{
	won: {
		amount: Number,
		value: String
	},
	lost: {
		amount: Number,
		value: String
	},
	open: {
		amount: Number,
		value: String
	},
	discarded: {
		amount: Number,
		value: String
	}
}
```

### SalesChart

![](https://i.imgur.com/TP7YnHb.png)

| Parametro | Descrição |
| ------------ | ------------ |
| data | Recebe um objeto com a estrutura especificada abaixo |
```
[
	{
	month: String,
	value: Number
	}, ...
]
```

### SocialMedia

![](https://i.imgur.com/mngraWs.png)

| Parametro | Descrição |
| ------------ | ------------ |
| icon | String, nome do icone [email, phone, event, group, whatsapp, facebook, instagram, twitter, linkedin, place] |
| url | String, URL |

### TimelineCategory

![](https://i.imgur.com/zxmA8e5.png)

| Parametro | Descrição |
| ------------ | ------------ |
| name | String, nome da categoria |
| color | String, nome da cor ou valor hexadecimal em String |
| data | Recebe um objeto com a estrutura especificada abaixo |
```
{
	title: String,
	contact: String,
	type: String ['call', 'meeting', 'event', 'email'],
	date: String,
	category: String ['late', 'underway', 'expected', 'finished']
}
```

### TimelineItem

![](https://i.imgur.com/n1xqDHg.png)

| Parametro | Descrição |
| ------------ | ------------ |
| title | String, nome do item |
| contact | String, usuario/pessoa responsável pelo item |
| icon | String, nome do icone [email, phone, event, group, whatsapp, facebook, instagram, twitter, linkedin, place] |
| color | String, nome da cor ou valor hexadecimal em String |
| date | String, data em ISO 8601 |

# Packages utilizados
#### react-icons
Utilizada por conter já a maioria dos pacotes de icones com fácil acesso.

#### react-chartjs-2, chart.js
Utilizada por ser um pacote que traz gráficos responsivos, animados e muito customizaveis, ainda tendo uma fácil curva de aprendizado em sua utilização. Além de eu já ter experiência com o mesmo.

#### pigeon-maps, pigeon-marker
Inicialmente foi considerado utilizar um pacote que utilizasse o google maps, porém como para utiliza-lo é necessário registro e token foi decidido por esse.
Utilizado por ser uma opção de fácil utilização e de não precisar utilizar tokens para o funcionamento do mesmo.

#### react-grid-system
Utilizada para poder trazer responsividade à pagina, podendo ser vizualizada em qualquer tela e em qualquer orientação.

#### moment
Utilizado para formatar as datas mostradas no painel de atividades

## Packages utilizados (devDependecies)
Foram utilizados o eslint (vem por padrão no boilerplate) e o prettier para manter o mesmo estilo de código em todos os componentes do projeto.
