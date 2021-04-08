const versicles = [
	"O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",

	"Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar",

	"Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo",

	"Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro",

	"Por isso não tema, pois estou com você não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",

	"O SENHOR É O MEU PASTOR;NADA ME FALTARÁ"
]

const versicleNumber = [
	"1 Coríntios 13:4-7",
	"Josué 1:9",
	"João 16:33",
	"Jeremias 29:11",
	"Isaías 41:10",
	"SALMOS 23:1"
]

const randomImage = [
	"will-turner-GTPT_fNFQiE-unsplash.jpg",
	"jerry-wang-dO0hj3Oxm20-unsplash.jpg",
	"andrea-orsini-DF8Tr3jssuU-unsplash.jpg"

]

const versicleText = document.getElementById("title");
const versicleId = document.getElementById("subtitle")
const button = document.querySelector("button");
const sectionTitle = document.querySelector("section");

function versicleChange(){
	const randonVersicle = Math.floor(Math.random() * (versicleNumber.length));
	const randonImageIndex = Math.floor(Math.random() * randomImage.length)

			versicleText.innerText = versicles[randonVersicle];
			versicleId.innerText = versicleNumber[randonVersicle];
		
			sectionTitle.style.backgroundImage = "url(" + randomImage[randonImageIndex] + ")"
}

button.addEventListener("click", versicleChange)

