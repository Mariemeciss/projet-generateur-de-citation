
const cite = [
"se contenter de ce que l'on a est trop ordinaire pour ce justifier devant  l'admirable principe de ce que l'on veut : MAME CHEIKH TIDIANE SY" ,
"si la priere cesse d'etre sacralisation à nos actes quotidiens malheur a ceux qui  par ignorance en devienne les victimes.car la priere est  à l'ame comme l'engrais a la surface du sol ou elle ameliore ou elle l'ecrasse.c'est une question de dosage une question d'education mystique : MAME CHEIKH TIDIANE SY",
"je suis démocrate, je suis suis libéral. je suis de gauche ou de droite.je suis parti au pouvoir ou opposant .Au sénégal il y'a une et une seule idéologie qui vaille,c'est etre sénégalais ::MAME CHEIKH TIDIANE SY",
"N'attendez pas que tout le monde soit bon pour que vous soyez bons.Mais soyez plutot bons pour inspirer autres la bonté. ce n'ést que par la politesse et la pudeur que l'on se rapproche davantagede Dieu :MAME CHEIKH TIDIANE SY",
"La Haine c'est la faiblesse du temps.la jalousie est plus qu'une faiblesse, c'est un manque de foi.Est-il vraiment recommandé de demander à toutes les victimes de la Haine et de la jalousie d'enseigner aux autres la bonté et la noblesse divine :MAME CHEIKH TIDIANE SY ",
"A chaque jeunesse sa responsablité soit elle l'assume, soit elle la fuit,Demain l'histoire nous jugera :MAME CHEIKH TIDIANE SY",
"Quand on a les dent solide il faut avoir les gencives solides: FATOU DIOM"
];



function ciss(){
var randomIndex=Math.floor(Math.random()*cite.length); 
var randomcite=cite[randomIndex];
document.getElementById("list").innerHTML="   "+ randomcite;
}

