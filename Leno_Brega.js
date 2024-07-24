async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

Certa noite em Campo Grande
Eu dei a maior trepada
Com uma linda cuiabana
Da bunda avantajada

A trepada foi tão grande
Que eu acho que desmaiei
No outro dia, cedinho
Só um bilhete encontrei

No bilhete, ela dizia
Que ia me encontrar
Pra nós dar outra trepada
Quando eu fosse em Cuiabá

Peguei meu fuscão vermelho
E saí desesperado
Passei em Jaraguari
Comi o cu de um viado

Comi outro em Bandeirantes
E sai na correria
Chegando em São Gabriel
Enrabei uma guria
Rio Verde e Coxim
Foi a maior putaria

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

O meu pinto endureceu
Quando eu passei em Sonora
Em Rondonópolis, dei uma
No rabo de uma senhora

Santa Elvira, não parei
Juscimeira e Pedro Cipa
Chegando em Jaciara
Dei o maior show de pica

Na serra de São Vicente
Já estava bem escuro
Chegando em Cuiabá
Meu cacete tava duro

Fui direto à casa dela
A mãe dela estava lá
A velhota não saía
E eu querendo trepar

E eu doido para comer
Aquela linda teteia
Nisso, a mulher foi dormir
E me surgiu uma ideia
Naquele tesão danado
Eu comi o cu da véia

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Eu sou um cara fudido
Só gosto do que é certo
Não como a mulher do próximo
Quando o próximo está perto
Longe do próximo eu como
E não tenho cerimônia
Não cago fora do tacho
E nem solto peido na fronha

Eu sou fudido
Sou cabra macho
Mulher comigo trepa em cima e trepa em baixo
Do jeito que ela quiser
Faço regaço

Não sou feio e nem bonito
Sou um cara diferente
Meu cipó tem 4 quinas
Só não como meus parentes
Mas os parentes dos outros
Comigo não facilita
Quem facilitar comigo
Não demora leva pica

Eu sou fudido
Sou cabra macho
Mulher comigo trepa em cima e trepa em baixo
Do jeito que ela quiser
Faço regaço

Nunca tive preconceito
Mulher pra mim é mulher
Se começar com frescura já sei o que ela quer
É água de morro abaixo
E o fogo nas alturas
Mulher quando quer dar não tem ninguém que segura

Eu sou fudido
Sou cabra macho
Mulher comigo trepa em cima e trepa em baixo
Do jeito que ela quiser
Faço regaço

Eu queria te comer na minha cama
Mas é outro vagabundo que tu ama
Mas ele é bicha

Ele anda dando o cu pra todo mundo
O miserável vive até de rabo fundo
De tanto dar

Você dá pra ele e ele dá pros outros
Será que é isso o que você quer?
Se envolvendo com esse bicha giletão
Que nem é homem e nem mulher

Esse fi de rapariga só te engana
Vira-lata igual a ele ninguém viu
Você tem que mandar esse traveco
Ir à puta que pariu

Deixe eu dar um pau nesse safado
Deixar ele desmaiado e mijar na cara dele
Querida dá pra mim sua bundona
Esquece essa bichona
Senão acabo com ele

Ela me ligou chamando
Pra eu ir na casa dela
Dizendo que estava afim de transar numa boa

Disse que tava curtindo
Uma tesão danada
E não queria trepar com outra pessoa

Cheguei, parti pra cima dela e fui tirando a roupa
E a filha da puta tava meio louca
Me amarrou na cama
Bagunçou comigo

Pulou em cima de mim
Mijou na minha cara
Arrancou meus pentelhos, torceu minha vara
Doeu até o imbigo

Até hoje eu não esqueci o que aquela infeliz me fez
Me obrigou transar com ela umas quatro ou cinco vezes

Nunca mais eu vou sair com aquela estupradora
Se até hoje eu não posso ver um cabo de vassoura

Hoje relembrando foda lembrei daquela que a gente deu
Foi uma gozada gostosa quase saiu bosta do cuzinho seu
Eu estava apaixonado ficava calado ao olhar pra você
E a todo momento eu só queria foder

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

Hoje só resta lembrança daquele corpinho lindo
Da sua bunda gostosa e do seu priquito liso
Cheirando sua calcinha eu dormia sem querer
Amor volta pra mim tô doidin pra te comer

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

A gente se amava tanto que quase arrancava o couro
Você era a minha vaca e eu era o seu touro
Hoje tô me acabando na solidão e de tristeza
Lembrando de você vou bater outra punheta

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

Sou comedor de xiranha
E não dou moleza não
Gosto de carne mijada
Como em qualquer posição

Meu pai era um buceteiro
Não saia dos puteiros
Ele contava pra mim
Por onde o velho passava
Um cabaço ele arrancava
Meu velho pai era assim

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

E foi assim que aprendi
A trepar com perfeição
A trepada que eu dou
É de avermelhar vinhão

Tem mulher quando me vê
Ela começa a se tremer
Não consegue nem falar
A roupa já tirando
E já vem se encostando
Só pra ver o pau entrar

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Hoje estou velho e fodido
Mas gosto de farrear
Meu filho tem 5 aninhos
E já começou trepar

Já umas trepadinha
Na galinha da vizinha
Ele só pensa em foder
Quando ele ficar rapaz
Vai ficar igual meu pai
Que trepou até morrer

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Sente meu pau que eu vou
Eu vou gozar
Eu sei que gozo sim
Porque gozar

Por você me faz
As putinhas que eu
Fico acunhar
Não tem gozo igual

Por isso é que te digo
Sempre que te vejo
Sente meu pau

Romântico é gozar
De ouvido assim
Falando em meu ouvido
Ai bote mais

Ai meu gordin'
Mas se eu achar alguém
Como você
Nunca, será igual

Alguém que sente bem
E bem igualzinho
Ai, o meu pau

(Senta no meu pau amor)

Quando tu tava na merda
Sem grana, sem roupa, fudida
Na cabeça só tinha piolho
E a boca cheia de ferida

O suvaco cheio de cabelo
O desodorante vencido
Os peitos no meio da barriga
O rabo cheio de mosquito
A precheca azeda e fedida
Realmente, tu estavas fudida

Enchi teu rabo de comida
Te dei banho, lavei tua precheca
Tirei teus cabelos do suvaco
Comprei roupa nova e te dei

Arrumei cama pra tu dormir
Te dei casa pra tu morar
E na hora que eu fui te comer
Tu não quisestes me dar
Falando que eu só quero me aproveitar

Agora tas gorda e bonita
Roupa nova, precheca limpinha
Parece que tem ouro no cu
Não me dá nem que a vaca tussa

Você é uma filha da puta
Vagabunda, mal agradecida
Quando mim ver com o pinto duro
Fica com a cara deslambida
Você não vale nada, cachorra bandida

Fiz uma grande proeza
Foi em um mês de fevereiro
Fui buscar uma putada
Lá perto de Marmeleiro

Num garimpo da pesada
Ali só tinha um puteiro
O dono tinha morrido
Pelas mãos de um pistoleiro
As putas tavam sofrendo
Sem comida e sem dinheiro

Quando eu cheguei no puteiro
Já tava raiando o dia
As putas me avistaram
Foi tão grande a alegria

Umas arrumavam as malas
Outra um cigarro pedia
Outras queriam trepar
Mas na hora eu não podia
E na hora da saída uma disse que não ia

Ela se agarrou com um cara
Sujeito mal-encarado
E disse "daqui não saio sem o meu enrabichado"
Os dois caíram no mato
Parti de passo apressado
Encontrei o cara e a puta no meio do descampado
Amarrei ela e trouxe
Deixei o cara amarrado

Quando eu cheguei no puteiro
O cara já tava lá
Achei aquilo esquisito
Dele se desamarrar
Mesmo assim não liguei
Mandei as putas embarcar
O cara chegou em mim
Falou pra eu lhe levar
Que estava desmoralizado, ali não podia ficar

Eram trinta e cinco putas
Com o cara trinta e seis
Quando entreguei a putada
Alguma coisa cismei
Faltava o cara e a puta
Nisso eu me assustei
Só trinta e quatro putas, o que aconteceu não sei
Dizem que era um fantasma de um garimpeiro gay

Tô indo agora pra casa da minha puta
Podem falar, podem pensar o que quiser
Ela faz tudo que eu quero e o que eu gosto
Sempre é melhor do que a primeira mulher

Chegando lá eu dou dinheiro para ela
Ela me dá bolacha com bolo e café
Descanso um pouco em cima da sua cama
Ela me abraça e me faz um cafuné

Minha puta
Como tu és carinhosa
És bonita e és gostosa
Nunca quero te perder

Minha puta
Tira logo esta roupa
Veja só a minha trouxa
Ai tá doidinha pra foder

(Oh minha puta, eu te amo demais)

Depois da foda dou-lhe um beijo e um abraço
Saio escondido que é para ninguém me ver
Chego em casa encontro a mulher e filhos
Estão com fome pois não tem o que comer

A mulher reclama diz que sou um vagabundo
Fico calado pois não sei o que dizer
Vou outra vez lá pra casa da minha puta
Fico tranquilo pois lá tem o que eu comer

Minha puta
Como tu és carinhosa
És bonita e és gostosa
Nunca quero te perder

Minha puta
Tira logo esta roupa
Ai veja só a minha trouxa ai
Tu tá doidinha pra foder

Mas minha puta
Como você é legal
Só em olhar pra você
Ai já levanta o meu pau

(Ai minha puta, como eu te amo, ai, ai)

Recordo com saudade
O bundão da Mercedita
Foi a bunda mais bonita
Que eu vi no Paraguai

Ela passava na rua
Os homens ficavam olhando
E os pintos levantando
E não baixavam nunca mais

E lá vai punheta pra todo lado
Todo mundo tinha calos nas mãos
Tinha até velho que desmaiava
E ficava estrebuchando no chão

Ela via tudo e não ligava
Mas rebolava aquele bundão
Até o padre pra se vingar
Comia a mulher do sacristão
O padre véi safado
Mas o tempo foi passando
Mercedita ficou velha
Os peitos dela virou peia
E a bunda encolheu

E a pobre Mercedita
Que era muito orgulhosa
Sua bunda tão gostosa
Só a terra que comeu

E assim acabou a Mercedita
Os peitos grandes e a bunda bonita
A bunda dela ninguém comeu
Por isso pobre ela morreu

E ainda se vê alguém nas madrugadas
No cemitério, na cova dela
E vai batendo uma punheta
Em homenagem

A bunda dela

O meu nome é Edílson
Sou forte como um jumento
Minha pica tá crescendo
Só por causa de você
Meu bem eu quero fuder
E você não me quer não
Quero passar minha mão
Nessa bunda tão gostosa
Que um dia saiu bosta e sujou meu cunhão
Que um dia saiu bosta e sujou meu cunhão

Menina o teu sorriso parece uma buceta
Quando vejo corro logo pra bater uma punheta
Minha pica tá batendo
Aqui dentro do calção
Parecendo um coração
Quando está de pressão alta
Vejam só a minha gala se arrastando pelo chão
Vejam só a minha gala já caindo pelo chão

Ontem a noite eu dormindo
Tive um sonho com você
Era a doida me chupando
E eu morrendo de prazer
Se enroscava em minha pica
Eu gritava Ai amor!
Eu cutucava sua bunda
Tu gritava Ai que dor!

Dava gota e eu gozava
Outra vez como isso é bom
Data gota e mais gozava
Outra vez como isso é bom

Eu me lembro aquele tempo
Quando a gente se amava
Você dizia que dava sua bunda só pra mim
Minha pica era só tua
Teu piriquito era só meu
Eu chupava o teu peito
E tu cheirava os culhão meu
Hoje só resta saudades das coisas que a gente fez
Hoje só resta saudades das coisas que a gente fez

Meu bem
Esse meu diário foi lembrar nosso passado
Quando eu tiver do teu lado não sei como vou ficar
Se corro, se fico quieto, se choro ou se dou risada
Ou se convido você para dar outra trepada
Minha pica tem saudade da minha ex-namorada
Minha pica tem saudade da minha ex-namorada

Me despeço de você com uma dor no coração
Não quero mais competir com seu novo Ricardão
Veja só minha piquinha caidinha de emoção
O corpinho dela tem o cheiro do seu grande bucetão
Reviveram belos dias se enrolando pelo chão
Reviveram belos dias se enrolando pelo chão

Moro em Campina Grande
Cidade paraibana
Quem quiser meu endereço
Veja aqui na minha pomba
Tá escrito aonde eu moro
E faço um show tão bacana
Que mulher, moça e menina não vão ficar com vergonha
Alegria e respeito não faltará para as damas
Alegria e respeito não faltará para as damas
Alegria e respeito não faltará para as damas
Alegria e respeito não faltará para as damas

Quando a gente ama
Qualquer coisa serve
Para relembrar
A calcinha velha da mulher amada
Tem muito valor
Aquele cheirinho do periquito dela
Que ficou no quarto
Sobre a penteadeira, um lençol galado
Estas são lembranças de um grande amor

E hoje não tenho mais
Aquela buceta
O meu consolo é bater uma punheta
E depois enxugo no meu paletó
Eu guardo no meu armário
E bem escondido
Aquele fio de pentelho comprido
Que nós teve lutando em nosso suor

Volta amor
Sobrou pra mim o cheirinho do teu periquito no meu quarto
Aquele lençol galado
E um pentelho comprido

Quando a gente ama
E esse alguém não está
Para dar uma trepada
Uma coisa tola
É um bom motivo
Pra gente chorar

Apagam-se as luzes
Ao chegar a hora de ir para a cama
Quando deito nela
O meu pau levanta
E começo logo a pensar em ti

E hoje não tenho mais
Aquela buceta
O meu consolo é bater uma punheta
E depois enxugo no meu paletó
Eu guardo no meu armário
E bem escondido
Aquele fio de pentelho comprido
Que nós teve lutando em nosso suor
Volta amor
Volta


Mas se você é corno
F' de puta ou viado
Vam dançar um forró, oi
Na casa do caralho

Na casa do caralho!
Na casa do caralho

Ladrão e maconheiro
Também tu que é tarado
Mulher, menina, moça
Cabra, sábido e otário

Se tu é preguiçoso
Também tá desempregado
Tem vaga pra vocês oh
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(Oh casa miseravi menino)

Cachaça importada
Feita na casa do diabo
Tu bebe fica doido
Ou então abestalhado

Tira gosto de pica
Buceta ou cú rapado
Você come na hora
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(Bota um cú pra mim ae minina, eu quero um cú!)

Concurso do priquito
Que for mais arreganhado
Um cuzão mais gostoso
Sem ser muito acolosado

O peito mais bonito
Que ninguém tenha chupado
Concorre que tu ganha
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(Acunha!)

Campina Grande em peso
Também tá do nosso lado
Tem muita gente boa
Tem também cabra safado

Agora vou embora
Que eu já tô ficando magro
De tanto fazer festa
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(É, vá se lascar!)

Lá na rua onde eu moro
Tem uma moça tarada
Toda vez que ela me vê
Me leva pra sua casa

Começa me alisando
Vai tirando minha roupa
Quando eu penso que não
Minha trouxa já tá dura
E dentro da sua boca

Como você é gulosa mulher

Começamos a gemer
É aquele mela-mela
É capinga de buceta
E cu fedendo a merda

Mesmo assim eu chupo ela
Da cabeça ao mocotó
Ela fica me mordendo
E falando em meu ouvido
Vai torar o meu cipó

Ai, e como eu vou gozar, gostosa?

Dou a primeira gozada
A segunda
E a terceira
E fico já desmaiando
Pois dá uma tremedeira

Quero vestir minha roupa
Mas a moça me segura
Dizendo pra eu voltar
Pois eu vou ter que arrancar
Uma prega da sua bunda

E como tu vai cagar, danada?

Eu já tô todo esgotado
Mas eu vou tentar de novo
Mas tenha pena de mim
E do pobre do meu ovo
Já não consigo gozar
Pois já não tenho mais gala
Meu cacete só sai vento
Pois eu tento, tento, tento
E ele só saindo água

Ai amor, tá saindo fumaça na minha pimba
Entupa com sua língua, vá

Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei

Namoro uma moça
Rica e bonita
Mas tem um defeito
Não gosta de banho
Só veste mulambo
Fede pra cacete

O priquito ensebado
Suvaco suado
Que mulher imunda
Vai escovar os dentes
Vai lavar a tristeza
E também sua bunda

Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei

Se você é sebosa
Só fede a bosta
Siga meu conselho

Vá tomar um banho
Coloque perfume
No seu corpo inteiro
Vista roupa curtinha
E vá pra pracinha
Dar uma paquerada
E acabe com a tristeza (acabe com a tristeza)
Dando uma trepada

Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Em primeiro de outubro
As mocinhas viverão
Uma grande emoção

Pois será o meu cacete
O deputado do povo
Agora desta eleição

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

(Oh meu pau subindo menina)
(Vai meu pau de cabeça erguida)

Se você ainda é moça
Tem medo de levar troxa
Dou a minha opinião

Deixa de ser tão bobinha
Venha pega a minha pimba
E coloca no seu cuzão

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

Pra deputado estadual

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Em primeiro de outubro
As mocinhas viverão
Uma grande emoção

Pois será o meu cacete
O deputado do povo
Agora desta eleição

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

(Oh meu pau subindo menina)
(Vai meu pau de cabeça erguida)

Se você ainda é moça
Tem medo de levar troxa
Dou a minha opinião

Deixa de ser tão bobinha
Venha pega a minha pimba
E coloca no seu cuzão

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

Pra deputado estadual

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Em primeiro de outubro
As mocinhas viverão
Uma grande emoção

Pois será o meu cacete
O deputado do povo
Agora desta eleição

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

(Oh meu pau subindo menina)
(Vai meu pau de cabeça erguida)

Se você ainda é moça
Tem medo de levar troxa
Dou a minha opinião

Deixa de ser tão bobinha
Venha pega a minha pimba
E coloca no seu cuzão

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

Pra deputado estadual

Se você quer fuder
Use camisinha
Pode ser da cara
Ou da baratinha
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão

Use camisinha, Cavalo do Pau, entra dura e sai legal!

Se você quer fuder
Use camisinha
Pode ser da cara
Ou da baratinha
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão

Use camisinha, Cavalo do Pau, entra dura e sai legal!

Muito prazer em te ver
Rapariga metida
Muito mais feia, acabada
Tu és uma bandida

Eu ainda lembro do jeito
Que a gente trepava
É muito melhor uma cachorra
Ou então uma vaca

Puta
Safada
Quenga
Flagelada
Que fazia de tudo

Trocou meu cacete
Gordinho
Fofinho
Lindinho

Me traiu com um burro
Um burro
Aquele jumento até hoje
Trepa com você
Aquele maldito jumento até hoje
Quer você

Eu sei que o safado da história também
Fui eu
E este medo terrível de arruinar essa buceta
Agora é meu

Sei que eu devia aceitá-la de volta
Mas não consigo
A sua buceta está
Igual a boca de um sino
Tão grande
Tão larga
E só resta nela um buraco
Seria difícil gozar
Com um simples caralho

Puta
Safada
Quenga
Flagelada
Que fazia de tudo

Trocou meu cacete
Gordinho
Fofinho
Lindinho

Me traiu com um burro
Um burro
Aquele jumento até hoje
Trepa com você
Aquele maldito jumento até hoje
Quer você

Eu sei que o safado da história também
Fui eu
E este medo terrível de arruinar essa buceta arrombada
Agora é meu

Meu vizinho cascou fora
Levou a mulher em bora
Eu fiquei na solidão, a vizinha era
Tarada, nós dava tanta trepada de estremecer o chão
Quando o marido saia era a maior putaria de avermelhar culhão
A danada não parava, quando o pau escorregava ela ajeitava com a mão
O vizinho desconfiado se mandou com a coitadinha
O vizinho que se foda, chorei por minha vizinha pois vizinha trepadeira difícil de se encontrar, vizinho filha da puta se encontra em qualquer lugar

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha

Meu vizinho cascou fora
Levou a mulher em bora
Eu fiquei na solidão, a vizinha era
Tarada, nós dava tanta trepada de estremecer o chão
Quando o marido saia era a maior putaria de avermelhar culhão
A danada não parava, quando o pau escorregava ela ajeitava com a mão
O vizinho desconfiado se mandou com a coitadinha
O vizinho que se foda, chorei por minha vizinha pois vizinha trepadeira difícil de se encontrar, vizinho filha da puta se encontra em qualquer lugar

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha



Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu
Se fosse fácill se olhar
Quem diria eu?
Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu!

Eu chupo meu pau
Eu chupo seu pau?
Não, eu chupo meu pau
O pau é seu?
Não, o pau é meu
Se fosse fácil chupar o próprio pau
Cada um chupava o seu
Eu chupo o meu pau
Eu chupo o seu pau?
Não, eu chupo o meu pau
O pau é seu?
Não, o pau é meu!

Eu me mato
Eu te mato?
Não, eu me mato
A morte é sua?
Não, a morte é minha
Se fosse fácil se matar
Todo mundo morria
Eu me mato
Eu te mato?
Não, eu me mato
A morte é sua?
Não, a morte é minha!

Eu chupo meu pau
Eu chupo seu pau?
Não, eu chupo meu pau
O pau é seu?
Não, o pau é meu
Se fosse fácil chupar o próprio pau
Cada um chupava o seu
Eu chupo o meu pau
Eu chupo o seu pau?
Não, eu chupo o meu pau
O pau é seu?
Não, o pau é meu!

Eu me drogo
Eu te drogo?
Não, eu me drogo
A droga é sua?
Não, a droga é minha
Se fosse fácil se drogar
Quem não se drogaria?
Eu me drogo
Eu te drogo?
Não, eu me drogo
A droga é sua?
Não, a droga é minha!

Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu
Se fosse fácill se olhar
Quem diria eu?
Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu!
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

Meu Deus, quanta empadinha!
Elas me dão tanta alegria
Mas a empadinha de camarão
É a rainha
Desmanchando na boca
Penetrando macia
A empadinha de camarão
Me lembra tanto uma bucetinha
Quando eu penso nos teus olhos
Vejo só escuridão
Nada fica, tudo passa
No fundo falso dessa canção
Meu Deus, quanta empadinha
Quando o dia vira noite
E o sol foi pro além
Quando tudo é muito pouco
E o que era eu
Agora é breu

Dedo, língua, cu e boceta
Dedo, boceta, língua e cu
Dedo na língua, língua no dedo
Cu na boceta, boceta no cu
Dedo na boceta, língua no cu
Língua na boceta, dedo no cu
Dedo, língua, cu, boceta também
Boceta vezes dedos, noves fora cu
Língua, língua, língua, dedo no cu
Dedo na boceta, língua no cu
Dedo, língua, cu e boceta
Dedo, boceta, língua e cu



Uma carrocinha de cachorro quente
Espia só o vendedor
Olha prum lado, olha pro outro
Disfarça, não vem ninguém
A lá
Ele tá enfiando a mão dentro da calça
Aquela mão que segura o cachorro-quente
A lá
Ele tá coçando o cu com a mão
Moça, ô moça, num compra cachorro-quente não!

Nome: Clarice
Altura: 1, 80m
Esguia, magérrima, olhos de esfinge, pés pequenininhos
Mas tem uma trolha!

O elefante pergunta pra vaquinha
Tomou?
No cu?
A colombina pergunta pro pierrot
Tomou?
No cu?
A enfermeira pergunta pro defunto
Tomou?
No cu?
E todo mundo começa a perguntar
Tomou?
No cu?!

Calma
Cê deve ter tomado alguma coisa
Relaxa
Respira fundo
Isso
Agora me fala
Qual seu nome?
Buceta!
De onde você vem?
Buceta!
O nome da tua mãe?
Buceta!
O que que você quer
Buceta!

Desculpa
Esse meu jeito
Meio desesperado
De dizer as coisas
Mas o problema
É que nesse momento
Nesse exato momento
Um marimbondo
Tá dentro da minha calça
E tá picando
A minha bunda!

Eu bem que fiz tudo
Pra ser o que mamãe queria
Mas o tempo foi passando
O tempo foi passando
E tudo foi ficando
Meio escalafobético
"Ele era tão quietinho"
Um idiota comentou
E tudo seria patético
Se não fosse
Pateta!
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

A buceta Bradesco
Se chama Bia
Em caso de fome
Será que atenderia?

É aberta por fora
E fechada por dentro
Um mistério profundo
Um sonho, um pesadelo

Nos abismos do céu
Num pedaço de mar
Nos barracos da cidade

Dentro do coração
No interior do sertão
Nas senzalas, no senado

A buceta Bradesco
Faz pompoarismo
Clã de sereias
Todas famintas

Quem escuta seu canto
Não fica ileso
A sua voz soa a todo momento

Os buracos, nos vãos
No brilho dos salões
Nos atalhos, nas esquinas

Os desvãos da canção
No outro lado do rio
Nas ruínas, nas favelas

A buceta Bradesco
É um buraco negro
Tem gosma, tem sangue
Tem cheiro, tem pelo

O seu coração é uma cloaca
Um buraco no meio
E o vazio dentro

Na avenida Brasil
Ou debaixo do chão
Nas vitrines
Nas estrelas

Nas celas das prisões
Diante da tevê
Internet, Netflix

A buceta Bradesco
Parece cinema
Às vezes exílio
Às vezes non sense

Ela tem uma coisa
Que não transparece
Um sorriso nos lábios
Um riso nos dentes

Alô, comunidade dos Macacos
Rocinha, Vidigal
Alô, Turano, Querosene, Alemão
Bicho tá pegando

Dois corpos não ocupam
O mesmo lugar no espaço
O corpo do cadáver
Em putrefação

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, milícia
Ninguém desconfia
Podia ser seu filho
Podia ser meu pai

O corpo dos átomos
O corpo das moléculas
O corpo do aleijado
O corpo em combustão

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, polícia
Nêgo Dito
Kátia Flávia
Clara Crocodilo

O corpo da poesia
O corpo da canção
O corpo da matéria
O corpo em convulsão

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, parceiro
Aqui no Rio são quatro horas da manhã
Ninguém mais dorme nessa porra
Tá todo mundo aceso

O corpo cavernoso
Corpo sem cabeça
Corpo esburacado
O corpo do indigente

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô?
Quem tá falando?
Eu num tô entendendo nada
Que que 'cê disse?

O corpo operado
O corpo sem órgãos
O corpo com prótese
O corpo violado

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, alô, torcida do Flamengo
Tá todo mundo fodido
É o silêncio do Maracanã lotado

O corpo vazio
O corpo do desejo
O corpo dissecado
O corpo em êxtase

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, Mangueira
Estação primeira
A linha caiu
Ninguém chama, ninguém responde

O corpo de uma pedra
O corpo da escrita
O corpo que resiste
O corpo traduzível

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô?
Quem tá falando?

Alô, alô, torcida do Flamengo
Tá todo mundo fodido

Dois corpos não ocupam
O mesmo lugar no espaço
O corpo do cadáver
Em putrefação

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Não !!!! Roubaram meu pau !!!!!
Capado !! Canalha !!!
Não !!!! Roubaram meu pau !!!!!
Destroço !!!! Estrago !!!!!
Não !!!! Roubaram meu pau !!!!!!
Castrado !!!! Cadáver !!!! Catástrofe !!!!
O pesadelo só começou.
Cadê meu pau?
Cadê meu pau?


Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro

Não deixa não, o samba morrer
O samba chegou, o samba é você
Não deixa não, o samba morrer
O samba chegou, o samba é você

O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Fátima Bernardes fugiu de casa
Fátima Bernardes mandou um beijo
Fátima Bernardes foi baleada
Fátima Bernardes chupando dedo

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Fátima Bernardes pra presidente
Fátima Bernardes em carne e osso
Fátima Bernardes tem corrimento
Fátima Bernardes, William Bonner

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Fátima Bernardes investe tudo
Fátima Bernardes com arroz 'la grega'
Fátima Bernardes é vagabunda
Fátima Bernardes tem caderneta

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Fátima Bernardes cheirando cola
Fátima Bernardes com a pica dura
Fátima Bernardes experiência
Fátima Bernardes também é cultura

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Aqui tem joão-de-barro
Pintassilgo, pintarroxo
Pica-pau e colibri
Aqui tem canário-belga
Araponga, assum-preto
Curió e bem-te-vi
Aqui tem tanta andorinha
Cambaxirra, quero-quero
Rouxinol e juriti
Que servem de tiro ao alvo
Para espantar o tédio
E o vazio do existir

Matador de passarinho
Matador de passarinho
Matador de passarinho
Matador de passarinho

Tico-tico, quando voas
Tico-tico, tu pareces
Um teco-teco no ar
Tico-tico, quando cantas
Me lembro da minha infância
Feriado em Paquetá
Tico-tico, tão arisco
Tico-tico, tu beliscas
Uns grãozinhos de fubá
Tico-tico, me perdoa
Mas me vem uma vontade
Não posso me segurar

Matador de passarinho
Matador de passarinho
Matador de passarinho
Matador de passarinho

Beija-flor, de flor em flor
Beija-flor, tu és o rei
Beija-flor, te quero bem
Beija-flor, se tu soubesses
Beija-flor, ah! Se eu pudesse
Beijaria flor também
Beija-flor, tu vais levando
Numa nuvem cor-de-rosa
Grãos de pólen para quem?
Beija-flor, tu és tão lindo
Mas chegou a tua hora
Não beijarás mais ninguém

Matador de passarinho
Matador de passarinho
Matador de passarinho
Matador de passarinho

Dedo no cu é o seu nome, mora no canavial
Gritaria é um assombro, tem a voz dos carnavais
Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria

Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria

Dedo no cu é o seu nome, canta no canavial
Gritaria é um assombro, tem a voz dos carnavais
Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria

Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria



Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
E apesar de tudo é tão comovente,
A verdade explode na cara da gente,
A verdade é crua, a verdade é nua,
A verdade torce e a verdade estupra.
A verdade é puta, a verdade é puta,
A verdade trai e nem se incomoda.
A verdade grita em poucas palavras,
A verdade arde, a verdade arde:

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.

Então era isso o surpreendente,
Era tão óbvio, tão evidente.
Tava na cara, tava nos modos,
Tava na forma e era o bom senso.
Então era isso, eu ia pensando,
A mídia gritava: mentira, mentira.
Mas eu não ligava e prosseguia
Tranqüilo e fodido
Eu ia dizendo:

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.

Decifra o enigma que eu te proponho,
O x do problema, a minha equação.
A linha de fuga, a minha miragem,
O meu oriente e o grandes sertões.
Decifre o enigma, ando sozinho,
Eu tô mais distante do que mil japões.
Alô MAL VAL
Eu continuo tanquilo e sereno seguindo a canção:

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.

Então era essa a melodia
Que te pertuba os ouvidos moucos?
Último gesto, a saideira,
O canto-do-cisne, a minha canção.
Então era essa a melodia
Que te pertuba a noite de sono?
Meu semelhante, meu companheiro,
Meu cumpadi, meu irmão.

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlo tem perna-de-pau.

E apesar de tudo é tão comovente.
A verdade explode na cara da gente.
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir


Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
É que o Mário Covas já morreu
Ana Maria Braga tá morrendo
e eu também um dia vou morrer
De quê?

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Mario Covas, Câncer no cú
Ana Maria Braga, Câncer no cú
Rogério Skylab, Câncer no cú
Câncer no cú
Câncer no cú
Câncer no cú ô

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Qual a semelhança entre eu, Ana Maria Braga e Mario Covas?
Qual a semelhança entre eu, Ana Maria Braga e Mario Covas?

Perdemos a vontade de cagar
Perdemos a vontade de cagar
Perdemos a vontade de cagar
E aquela bolsinha de plástico, por quê?

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Mario Covas, Câncer no cú
Ana Maria Braga, Câncer no cú
Rogério Skylab, Câncer no cú
Câncer no cú
Câncer no cú
Câncer no cú ô

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
É que o Mário Covas já morreu
Ana Maria Braga tá chorando
e eu tô com vontade de cantar
O quê?

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Mario Covas, Câncer no cú
Ana Maria Braga, Câncer no cú
Rogério Skylab, Câncer no cú
Câncer no cú
Câncer no cú
Câncer no cú ô

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú


Páginas de um livro que nunca foi lido
Num banco da praça
Nomes de guerra, corpo na cama
Dólar falso
O quarto dela não tem janela
Flores de plástico
É tudo junto e misturado
Casaco de visom
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)

Flor de cacto, gilete azul
Arco-íris
Cachorrinho de pelúcia
Oncinha pintada, coelhinho peludo
Uma lança no escuro
O olho do cu no meio do mundo
Quem serei eu? Quem será ela?
Razão e ficção
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)

Já ia me esquecendo
Os adornos e os gestos
Com que se reveste
O seu mistério, as suas plumas, as suas pérolas
Todos os seus versos
A flor do laço, as quimeras
Anel de diamante, rubi encravado
Pulseira de ouro
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)



Por isso tá tudo ruim,
A infidelidade, oh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão,
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
No início eu tinha pressão alta.
Urubu, meu companheiro,
Eu compus um blue cheio de dor pra gente rir.
Então olho pra vitrola,
Depois olho pro relógio,
Depois olho pro espelho,
Então eu fico pensando:
Quanto pior, melhor.
Quanto pior, melhor.
Abri a geladeira do IML,
Meu bem, eu te conheci na CTI.
Ela tinha 8 anos,
O seu nome era Alice,
Levei-a pro meu quarto,
Ofereci chocolate.
Yoga é o caralho !!!
Mestre de Rose é o caralho !!!!
E Getúlio respondeu: a lei, a lei, lei
Quanto pior melhor,
Quanto pior melhor.
Por isso tá tudo ruim,
A infidelidade, óh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão.
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

Por isso tá tudo ruim,
A infidelidade, oh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão,
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
No início eu tinha pressão alta.
Urubu, meu companheiro,
Eu compus um blue cheio de dor pra gente rir.
Então olho pra vitrola,
Depois olho pro relógio,
Depois olho pro espelho,
Então eu fico pensando:
Quanto pior, melhor.
Quanto pior, melhor.
Abri a geladeira do IML,
Meu bem, eu te conheci na CTI.
Ela tinha 8 anos,
O seu nome era Alice,
Levei-a pro meu quarto,
Ofereci chocolate.
Yoga é o caralho !!!
Mestre de Rose é o caralho !!!!
E Getúlio respondeu: a lei, a lei, lei
Quanto pior melhor,
Quanto pior melhor.
Por isso tá tudo ruim,
A infidelidade, óh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão.
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.

Por isso tá tudo ruim,
A infidelidade, oh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão,
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
No início eu tinha pressão alta.
Urubu, meu companheiro,
Eu compus um blue cheio de dor pra gente rir.
Então olho pra vitrola,
Depois olho pro relógio,
Depois olho pro espelho,
Então eu fico pensando:
Quanto pior, melhor.
Quanto pior, melhor.
Abri a geladeira do IML,
Meu bem, eu te conheci na CTI.
Ela tinha 8 anos,
O seu nome era Alice,
Levei-a pro meu quarto,
Ofereci chocolate.
Yoga é o caralho !!!
Mestre de Rose é o caralho !!!!
E Getúlio respondeu: a lei, a lei, lei
Quanto pior melhor,
Quanto pior melhor.
Por isso tá tudo ruim,
A infidelidade, óh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão.
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.



Aí meu, aí meu, tem cigarro aí?
Cigarro? Tem cigarro aí?
Gente boa, gente boa, tem cigarro aí?
Cigarro? Tem cigarro aí?

Aí véi, aí véi, tem cigarro aí?
Cigarro? Tem cigarro aí?
Terezinha tem cigarro aí?
Cigarro? Tem cigarro aí?

Tia, tia, tem cigarro aí?
Cigarro? Tem cigarro aí?
Fala, mestre tem cigarro aí?
Cigarro? Tem cigarro aí?

Fala, comandante tem cigarro aí?
Cigarro? Tem cigarro aí?
Bom dia tem cigarro aí?
Cigarro, tem cigarro aí?

Ei moço, você gosta de poesia? Não?
Tem cigarro aí?
Cigarro? Tem cigarro aí?

Você ouvinte é a nossa meta
Pensando em você é que procuramos fazer o melhor
Domingo é dia de esporte
O domingo é nosso
Tem cigarro aí?
Cigarro tem cigarro aí?

Oh pai tem cigarro aí?
Cigarro, tem cigarro aí?

Se você amanheceu sem disposição, dor de cabeça
Azia, mal estar
Tem cigarro aí? Cigarro, tem cigarro aí?

Nós já vamos lhe atender
Espere só mais um pouquinho
Anote o número do protocolo
Tem cigarro aí? Cigarro, tem cigarro aí?

Ah, que pena, eu não posso falar com você agora
Mas não fique chateada
Assim que eu puder, eu ligo de volta pra você
É só deixar nome e telefone
É só deixar cigarro
Tem cigarro aí?
Cigarro? Tem cigarro aí?

E Jesus chegou para Lázaro
E ordenou: Levanta-te
E Lázaro, dentro da sepultura
Abriu os zoi devagarzinho
Pensou em Barbacena e falou
Tem cigarro aí? Cigarro? Tem cigarro aí?

Tem cigarro aí, porra?
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

Você vai ao samba
Uma cabrocha: Só no sapatinho
Gostosa!
No final das contas vocês vão pro Motel
Transam a noite inteirinha
Trinta dias depois, ela volta grávida
E quer ter o filho
Conclusão: Você pagar pensão pro resto da sua vida
Ela te ama?
Não!
O quê que ela é então?
Puta, é puta!

Mas você insiste
Não entrega os pontos
Vai ao Shopping, quer comprar uma calça Lee
Uma vendedora vem ao seu encontro
E te trata pelo nome, como se vocês fossem íntimos
Gostosa!
E sensual, provocante
Você não enxerga mais nada
Compra calça, cueca, meia, sapato
Conclusão: Ela é uma vendedora?
Não!
O quê que ela é então?
Puta, é puta!

Cidade do Rio de Janeiro
Zona sul, garota de Ipanema
Gostosa!
Você quer morar lá
Tem money? Não
Então, não pode não
Conclusão: Essa cidade te ama?
Não!
O quê que ela é então?
Puta, é puta!

Calma, quê isso?
Você tá tão revoltado, disse a psicanalista diante do meu delírio
É que todas as coisas que eu via, criança, fábrica, escola
Todas elas pareciam putas
Trinta minutos depois, eu paguei a consulta
E voltei sozinho pra casa
Com aquela sensação
Puta, é puta!

O Sol já vai nascer
Acho que o mundo é bom
Só queria saber, menina
Menina, qual é a voz do cu?
Qual é a voz do cu, menina?
Qual é a voz do cu?

Sei que tá tudo bem
A gente é até feliz
Só queria saber, menina
Menina, qual é a voz do cu?
Qual é a voz do cu, menina?
Qual é a voz do cu?

Difícil perceber
Mas ela está aqui
Só queria saber, menina
Menina, qual é a voz do cu?
Qual é a voz do cu, menina?
Qual é a voz do cu?

Você é feia
É feia pra caralho
É feia pra caralho
É feia pra caralho

É pobre
Mora na rua
É perigosa
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

É perigosa
É paranóica
Porra-louca
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

Quer um conselho?
Entra no banheiro
Fecha bem a porta
Tampa o basculante
E liga o gás

É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

Está com AIDS
É paranóica
Porra-louca
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

Lívia, ô ô Lívia, Lívia, all my life
Se não tivesse atirado ainda estaria aqui
Livia’s gone, ô ô Livia’s gone
Eu fui pra Memphis, foi lá que a conheci
Na sala da tua casa, Lívia, aonde te prendi
Lívia, ô ô Lívia
Lívia tão fria, há mil milhas de mim
Naquele dia o mal me fez querer em vão o fim
Lívia, ô ô Lívia
O primeiro tiro a fez tanto sofrer
Mas o segundo tão certeiro fez Lívia partir
Lívia, ô ô Lívia
O carcereiro, não posso dormir
Tudo em minha volta ouço vozes, Lívia ri
Lívia, ô ô Lívia
Se a tua companheira é igual a minha
Tu podes abandoná-la ou trazê-la junto a ti
Lívia, ô ô, Lívia
Lívia, ô ô Lívia, Livia, all my life
Se não tivessem atirado ainda estaria aqui
Livia’s gone, ô ô, Livia’s gone

Certa noite em Campo Grande
Eu dei a maior trepada
Com uma linda cuiabana
Da bunda avantajada

A trepada foi tão grande
Que eu acho que desmaiei
No outro dia, cedinho
Só um bilhete encontrei

No bilhete, ela dizia
Que ia me encontrar
Pra nós dar outra trepada
Quando eu fosse em Cuiabá

Peguei meu fuscão vermelho
E saí desesperado
Passei em Jaraguari
Comi o cu de um viado

Comi outro em Bandeirantes
E sai na correria
Chegando em São Gabriel
Enrabei uma guria
Rio Verde e Coxim
Foi a maior putaria

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

O meu pinto endureceu
Quando eu passei em Sonora
Em Rondonópolis, dei uma
No rabo de uma senhora

Santa Elvira, não parei
Juscimeira e Pedro Cipa
Chegando em Jaciara
Dei o maior show de pica

Na serra de São Vicente
Já estava bem escuro
Chegando em Cuiabá
Meu cacete tava duro

Fui direto à casa dela
A mãe dela estava lá
A velhota não saía
E eu querendo trepar

E eu doido para comer
Aquela linda teteia
Nisso, a mulher foi dormir
E me surgiu uma ideia
Naquele tesão danado
Eu comi o cu da véia

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Eu sou um cara fudido
Só gosto do que é certo
Não como a mulher do próximo
Quando o próximo está perto
Longe do próximo eu como
E não tenho cerimônia
Não cago fora do tacho
E nem solto peido na fronha

Eu sou fudido
Sou cabra macho
Mulher comigo trepa em cima e trepa em baixo
Do jeito que ela quiser
Faço regaço

Não sou feio e nem bonito
Sou um cara diferente
Meu cipó tem 4 quinas
Só não como meus parentes
Mas os parentes dos outros
Comigo não facilita
Quem facilitar comigo
Não demora leva pica

Eu sou fudido
Sou cabra macho
Mulher comigo trepa em cima e trepa em baixo
Do jeito que ela quiser
Faço regaço

Nunca tive preconceito
Mulher pra mim é mulher
Se começar com frescura já sei o que ela quer
É água de morro abaixo
E o fogo nas alturas
Mulher quando quer dar não tem ninguém que segura

Eu sou fudido
Sou cabra macho
Mulher comigo trepa em cima e trepa em baixo
Do jeito que ela quiser
Faço regaço

Eu queria te comer na minha cama
Mas é outro vagabundo que tu ama
Mas ele é bicha

Ele anda dando o cu pra todo mundo
O miserável vive até de rabo fundo
De tanto dar

Você dá pra ele e ele dá pros outros
Será que é isso o que você quer?
Se envolvendo com esse bicha giletão
Que nem é homem e nem mulher

Esse fi de rapariga só te engana
Vira-lata igual a ele ninguém viu
Você tem que mandar esse traveco
Ir à puta que pariu

Deixe eu dar um pau nesse safado
Deixar ele desmaiado e mijar na cara dele
Querida dá pra mim sua bundona
Esquece essa bichona
Senão acabo com ele

Ela me ligou chamando
Pra eu ir na casa dela
Dizendo que estava afim de transar numa boa

Disse que tava curtindo
Uma tesão danada
E não queria trepar com outra pessoa

Cheguei, parti pra cima dela e fui tirando a roupa
E a filha da puta tava meio louca
Me amarrou na cama
Bagunçou comigo

Pulou em cima de mim
Mijou na minha cara
Arrancou meus pentelhos, torceu minha vara
Doeu até o imbigo

Até hoje eu não esqueci o que aquela infeliz me fez
Me obrigou transar com ela umas quatro ou cinco vezes

Nunca mais eu vou sair com aquela estupradora
Se até hoje eu não posso ver um cabo de vassoura

Hoje relembrando foda lembrei daquela que a gente deu
Foi uma gozada gostosa quase saiu bosta do cuzinho seu
Eu estava apaixonado ficava calado ao olhar pra você
E a todo momento eu só queria foder

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

Hoje só resta lembrança daquele corpinho lindo
Da sua bunda gostosa e do seu priquito liso
Cheirando sua calcinha eu dormia sem querer
Amor volta pra mim tô doidin pra te comer

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

A gente se amava tanto que quase arrancava o couro
Você era a minha vaca e eu era o seu touro
Hoje tô me acabando na solidão e de tristeza
Lembrando de você vou bater outra punheta

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

Sou comedor de xiranha
E não dou moleza não
Gosto de carne mijada
Como em qualquer posição

Meu pai era um buceteiro
Não saia dos puteiros
Ele contava pra mim
Por onde o velho passava
Um cabaço ele arrancava
Meu velho pai era assim

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

E foi assim que aprendi
A trepar com perfeição
A trepada que eu dou
É de avermelhar vinhão

Tem mulher quando me vê
Ela começa a se tremer
Não consegue nem falar
A roupa já tirando
E já vem se encostando
Só pra ver o pau entrar

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Hoje estou velho e fodido
Mas gosto de farrear
Meu filho tem 5 aninhos
E já começou trepar

Já umas trepadinha
Na galinha da vizinha
Ele só pensa em foder
Quando ele ficar rapaz
Vai ficar igual meu pai
Que trepou até morrer

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Sente meu pau que eu vou
Eu vou gozar
Eu sei que gozo sim
Porque gozar

Por você me faz
As putinhas que eu
Fico acunhar
Não tem gozo igual

Por isso é que te digo
Sempre que te vejo
Sente meu pau

Romântico é gozar
De ouvido assim
Falando em meu ouvido
Ai bote mais

Ai meu gordin'
Mas se eu achar alguém
Como você
Nunca, será igual

Alguém que sente bem
E bem igualzinho
Ai, o meu pau

(Senta no meu pau amor)

Quando tu tava na merda
Sem grana, sem roupa, fudida
Na cabeça só tinha piolho
E a boca cheia de ferida

O suvaco cheio de cabelo
O desodorante vencido
Os peitos no meio da barriga
O rabo cheio de mosquito
A precheca azeda e fedida
Realmente, tu estavas fudida

Enchi teu rabo de comida
Te dei banho, lavei tua precheca
Tirei teus cabelos do suvaco
Comprei roupa nova e te dei

Arrumei cama pra tu dormir
Te dei casa pra tu morar
E na hora que eu fui te comer
Tu não quisestes me dar
Falando que eu só quero me aproveitar

Agora tas gorda e bonita
Roupa nova, precheca limpinha
Parece que tem ouro no cu
Não me dá nem que a vaca tussa

Você é uma filha da puta
Vagabunda, mal agradecida
Quando mim ver com o pinto duro
Fica com a cara deslambida
Você não vale nada, cachorra bandida

Fiz uma grande proeza
Foi em um mês de fevereiro
Fui buscar uma putada
Lá perto de Marmeleiro

Num garimpo da pesada
Ali só tinha um puteiro
O dono tinha morrido
Pelas mãos de um pistoleiro
As putas tavam sofrendo
Sem comida e sem dinheiro

Quando eu cheguei no puteiro
Já tava raiando o dia
As putas me avistaram
Foi tão grande a alegria

Umas arrumavam as malas
Outra um cigarro pedia
Outras queriam trepar
Mas na hora eu não podia
E na hora da saída uma disse que não ia

Ela se agarrou com um cara
Sujeito mal-encarado
E disse "daqui não saio sem o meu enrabichado"
Os dois caíram no mato
Parti de passo apressado
Encontrei o cara e a puta no meio do descampado
Amarrei ela e trouxe
Deixei o cara amarrado

Quando eu cheguei no puteiro
O cara já tava lá
Achei aquilo esquisito
Dele se desamarrar
Mesmo assim não liguei
Mandei as putas embarcar
O cara chegou em mim
Falou pra eu lhe levar
Que estava desmoralizado, ali não podia ficar

Eram trinta e cinco putas
Com o cara trinta e seis
Quando entreguei a putada
Alguma coisa cismei
Faltava o cara e a puta
Nisso eu me assustei
Só trinta e quatro putas, o que aconteceu não sei
Dizem que era um fantasma de um garimpeiro gay

Tô indo agora pra casa da minha puta
Podem falar, podem pensar o que quiser
Ela faz tudo que eu quero e o que eu gosto
Sempre é melhor do que a primeira mulher

Chegando lá eu dou dinheiro para ela
Ela me dá bolacha com bolo e café
Descanso um pouco em cima da sua cama
Ela me abraça e me faz um cafuné

Minha puta
Como tu és carinhosa
És bonita e és gostosa
Nunca quero te perder

Minha puta
Tira logo esta roupa
Veja só a minha trouxa
Ai tá doidinha pra foder

(Oh minha puta, eu te amo demais)

Depois da foda dou-lhe um beijo e um abraço
Saio escondido que é para ninguém me ver
Chego em casa encontro a mulher e filhos
Estão com fome pois não tem o que comer

A mulher reclama diz que sou um vagabundo
Fico calado pois não sei o que dizer
Vou outra vez lá pra casa da minha puta
Fico tranquilo pois lá tem o que eu comer

Minha puta
Como tu és carinhosa
És bonita e és gostosa
Nunca quero te perder

Minha puta
Tira logo esta roupa
Ai veja só a minha trouxa ai
Tu tá doidinha pra foder

Mas minha puta
Como você é legal
Só em olhar pra você
Ai já levanta o meu pau

(Ai minha puta, como eu te amo, ai, ai)

Recordo com saudade
O bundão da Mercedita
Foi a bunda mais bonita
Que eu vi no Paraguai

Ela passava na rua
Os homens ficavam olhando
E os pintos levantando
E não baixavam nunca mais

E lá vai punheta pra todo lado
Todo mundo tinha calos nas mãos
Tinha até velho que desmaiava
E ficava estrebuchando no chão

Ela via tudo e não ligava
Mas rebolava aquele bundão
Até o padre pra se vingar
Comia a mulher do sacristão
O padre véi safado
Mas o tempo foi passando
Mercedita ficou velha
Os peitos dela virou peia
E a bunda encolheu

E a pobre Mercedita
Que era muito orgulhosa
Sua bunda tão gostosa
Só a terra que comeu

E assim acabou a Mercedita
Os peitos grandes e a bunda bonita
A bunda dela ninguém comeu
Por isso pobre ela morreu

E ainda se vê alguém nas madrugadas
No cemitério, na cova dela
E vai batendo uma punheta
Em homenagem

A bunda dela

O meu nome é Edílson
Sou forte como um jumento
Minha pica tá crescendo
Só por causa de você
Meu bem eu quero fuder
E você não me quer não
Quero passar minha mão
Nessa bunda tão gostosa
Que um dia saiu bosta e sujou meu cunhão
Que um dia saiu bosta e sujou meu cunhão

Menina o teu sorriso parece uma buceta
Quando vejo corro logo pra bater uma punheta
Minha pica tá batendo
Aqui dentro do calção
Parecendo um coração
Quando está de pressão alta
Vejam só a minha gala se arrastando pelo chão
Vejam só a minha gala já caindo pelo chão

Ontem a noite eu dormindo
Tive um sonho com você
Era a doida me chupando
E eu morrendo de prazer
Se enroscava em minha pica
Eu gritava Ai amor!
Eu cutucava sua bunda
Tu gritava Ai que dor!

Dava gota e eu gozava
Outra vez como isso é bom
Data gota e mais gozava
Outra vez como isso é bom

Eu me lembro aquele tempo
Quando a gente se amava
Você dizia que dava sua bunda só pra mim
Minha pica era só tua
Teu piriquito era só meu
Eu chupava o teu peito
E tu cheirava os culhão meu
Hoje só resta saudades das coisas que a gente fez
Hoje só resta saudades das coisas que a gente fez

Meu bem
Esse meu diário foi lembrar nosso passado
Quando eu tiver do teu lado não sei como vou ficar
Se corro, se fico quieto, se choro ou se dou risada
Ou se convido você para dar outra trepada
Minha pica tem saudade da minha ex-namorada
Minha pica tem saudade da minha ex-namorada

Me despeço de você com uma dor no coração
Não quero mais competir com seu novo Ricardão
Veja só minha piquinha caidinha de emoção
O corpinho dela tem o cheiro do seu grande bucetão
Reviveram belos dias se enrolando pelo chão
Reviveram belos dias se enrolando pelo chão

Moro em Campina Grande
Cidade paraibana
Quem quiser meu endereço
Veja aqui na minha pomba
Tá escrito aonde eu moro
E faço um show tão bacana
Que mulher, moça e menina não vão ficar com vergonha
Alegria e respeito não faltará para as damas
Alegria e respeito não faltará para as damas
Alegria e respeito não faltará para as damas
Alegria e respeito não faltará para as damas

Quando a gente ama
Qualquer coisa serve
Para relembrar
A calcinha velha da mulher amada
Tem muito valor
Aquele cheirinho do periquito dela
Que ficou no quarto
Sobre a penteadeira, um lençol galado
Estas são lembranças de um grande amor

E hoje não tenho mais
Aquela buceta
O meu consolo é bater uma punheta
E depois enxugo no meu paletó
Eu guardo no meu armário
E bem escondido
Aquele fio de pentelho comprido
Que nós teve lutando em nosso suor

Volta amor
Sobrou pra mim o cheirinho do teu periquito no meu quarto
Aquele lençol galado
E um pentelho comprido

Quando a gente ama
E esse alguém não está
Para dar uma trepada
Uma coisa tola
É um bom motivo
Pra gente chorar

Apagam-se as luzes
Ao chegar a hora de ir para a cama
Quando deito nela
O meu pau levanta
E começo logo a pensar em ti

E hoje não tenho mais
Aquela buceta
O meu consolo é bater uma punheta
E depois enxugo no meu paletó
Eu guardo no meu armário
E bem escondido
Aquele fio de pentelho comprido
Que nós teve lutando em nosso suor
Volta amor
Volta


Mas se você é corno
F' de puta ou viado
Vam dançar um forró, oi
Na casa do caralho

Na casa do caralho!
Na casa do caralho

Ladrão e maconheiro
Também tu que é tarado
Mulher, menina, moça
Cabra, sábido e otário

Se tu é preguiçoso
Também tá desempregado
Tem vaga pra vocês oh
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(Oh casa miseravi menino)

Cachaça importada
Feita na casa do diabo
Tu bebe fica doido
Ou então abestalhado

Tira gosto de pica
Buceta ou cú rapado
Você come na hora
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(Bota um cú pra mim ae minina, eu quero um cú!)

Concurso do priquito
Que for mais arreganhado
Um cuzão mais gostoso
Sem ser muito acolosado

O peito mais bonito
Que ninguém tenha chupado
Concorre que tu ganha
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(Acunha!)

Campina Grande em peso
Também tá do nosso lado
Tem muita gente boa
Tem também cabra safado

Agora vou embora
Que eu já tô ficando magro
De tanto fazer festa
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(É, vá se lascar!)

Lá na rua onde eu moro
Tem uma moça tarada
Toda vez que ela me vê
Me leva pra sua casa

Começa me alisando
Vai tirando minha roupa
Quando eu penso que não
Minha trouxa já tá dura
E dentro da sua boca

Como você é gulosa mulher

Começamos a gemer
É aquele mela-mela
É capinga de buceta
E cu fedendo a merda

Mesmo assim eu chupo ela
Da cabeça ao mocotó
Ela fica me mordendo
E falando em meu ouvido
Vai torar o meu cipó

Ai, e como eu vou gozar, gostosa?

Dou a primeira gozada
A segunda
E a terceira
E fico já desmaiando
Pois dá uma tremedeira

Quero vestir minha roupa
Mas a moça me segura
Dizendo pra eu voltar
Pois eu vou ter que arrancar
Uma prega da sua bunda

E como tu vai cagar, danada?

Eu já tô todo esgotado
Mas eu vou tentar de novo
Mas tenha pena de mim
E do pobre do meu ovo
Já não consigo gozar
Pois já não tenho mais gala
Meu cacete só sai vento
Pois eu tento, tento, tento
E ele só saindo água

Ai amor, tá saindo fumaça na minha pimba
Entupa com sua língua, vá

Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei

Namoro uma moça
Rica e bonita
Mas tem um defeito
Não gosta de banho
Só veste mulambo
Fede pra cacete

O priquito ensebado
Suvaco suado
Que mulher imunda
Vai escovar os dentes
Vai lavar a tristeza
E também sua bunda

Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei

Se você é sebosa
Só fede a bosta
Siga meu conselho

Vá tomar um banho
Coloque perfume
No seu corpo inteiro
Vista roupa curtinha
E vá pra pracinha
Dar uma paquerada
E acabe com a tristeza (acabe com a tristeza)
Dando uma trepada

Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Em primeiro de outubro
As mocinhas viverão
Uma grande emoção

Pois será o meu cacete
O deputado do povo
Agora desta eleição

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

(Oh meu pau subindo menina)
(Vai meu pau de cabeça erguida)

Se você ainda é moça
Tem medo de levar troxa
Dou a minha opinião

Deixa de ser tão bobinha
Venha pega a minha pimba
E coloca no seu cuzão

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

Pra deputado estadual

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Em primeiro de outubro
As mocinhas viverão
Uma grande emoção

Pois será o meu cacete
O deputado do povo
Agora desta eleição

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

(Oh meu pau subindo menina)
(Vai meu pau de cabeça erguida)

Se você ainda é moça
Tem medo de levar troxa
Dou a minha opinião

Deixa de ser tão bobinha
Venha pega a minha pimba
E coloca no seu cuzão

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

Pra deputado estadual

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Em primeiro de outubro
As mocinhas viverão
Uma grande emoção

Pois será o meu cacete
O deputado do povo
Agora desta eleição

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

(Oh meu pau subindo menina)
(Vai meu pau de cabeça erguida)

Se você ainda é moça
Tem medo de levar troxa
Dou a minha opinião

Deixa de ser tão bobinha
Venha pega a minha pimba
E coloca no seu cuzão

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

Pra deputado estadual

Se você quer fuder
Use camisinha
Pode ser da cara
Ou da baratinha
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão

Use camisinha, Cavalo do Pau, entra dura e sai legal!

Se você quer fuder
Use camisinha
Pode ser da cara
Ou da baratinha
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão

Use camisinha, Cavalo do Pau, entra dura e sai legal!

Muito prazer em te ver
Rapariga metida
Muito mais feia, acabada
Tu és uma bandida

Eu ainda lembro do jeito
Que a gente trepava
É muito melhor uma cachorra
Ou então uma vaca

Puta
Safada
Quenga
Flagelada
Que fazia de tudo

Trocou meu cacete
Gordinho
Fofinho
Lindinho

Me traiu com um burro
Um burro
Aquele jumento até hoje
Trepa com você
Aquele maldito jumento até hoje
Quer você

Eu sei que o safado da história também
Fui eu
E este medo terrível de arruinar essa buceta
Agora é meu

Sei que eu devia aceitá-la de volta
Mas não consigo
A sua buceta está
Igual a boca de um sino
Tão grande
Tão larga
E só resta nela um buraco
Seria difícil gozar
Com um simples caralho

Puta
Safada
Quenga
Flagelada
Que fazia de tudo

Trocou meu cacete
Gordinho
Fofinho
Lindinho

Me traiu com um burro
Um burro
Aquele jumento até hoje
Trepa com você
Aquele maldito jumento até hoje
Quer você

Eu sei que o safado da história também
Fui eu
E este medo terrível de arruinar essa buceta arrombada
Agora é meu

Meu vizinho cascou fora
Levou a mulher em bora
Eu fiquei na solidão, a vizinha era
Tarada, nós dava tanta trepada de estremecer o chão
Quando o marido saia era a maior putaria de avermelhar culhão
A danada não parava, quando o pau escorregava ela ajeitava com a mão
O vizinho desconfiado se mandou com a coitadinha
O vizinho que se foda, chorei por minha vizinha pois vizinha trepadeira difícil de se encontrar, vizinho filha da puta se encontra em qualquer lugar

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha

Meu vizinho cascou fora
Levou a mulher em bora
Eu fiquei na solidão, a vizinha era
Tarada, nós dava tanta trepada de estremecer o chão
Quando o marido saia era a maior putaria de avermelhar culhão
A danada não parava, quando o pau escorregava ela ajeitava com a mão
O vizinho desconfiado se mandou com a coitadinha
O vizinho que se foda, chorei por minha vizinha pois vizinha trepadeira difícil de se encontrar, vizinho filha da puta se encontra em qualquer lugar

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha



Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu
Se fosse fácill se olhar
Quem diria eu?
Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu!

Eu chupo meu pau
Eu chupo seu pau?
Não, eu chupo meu pau
O pau é seu?
Não, o pau é meu
Se fosse fácil chupar o próprio pau
Cada um chupava o seu
Eu chupo o meu pau
Eu chupo o seu pau?
Não, eu chupo o meu pau
O pau é seu?
Não, o pau é meu!

Eu me mato
Eu te mato?
Não, eu me mato
A morte é sua?
Não, a morte é minha
Se fosse fácil se matar
Todo mundo morria
Eu me mato
Eu te mato?
Não, eu me mato
A morte é sua?
Não, a morte é minha!

Eu chupo meu pau
Eu chupo seu pau?
Não, eu chupo meu pau
O pau é seu?
Não, o pau é meu
Se fosse fácil chupar o próprio pau
Cada um chupava o seu
Eu chupo o meu pau
Eu chupo o seu pau?
Não, eu chupo o meu pau
O pau é seu?
Não, o pau é meu!

Eu me drogo
Eu te drogo?
Não, eu me drogo
A droga é sua?
Não, a droga é minha
Se fosse fácil se drogar
Quem não se drogaria?
Eu me drogo
Eu te drogo?
Não, eu me drogo
A droga é sua?
Não, a droga é minha!

Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu
Se fosse fácill se olhar
Quem diria eu?
Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu!
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

Meu Deus, quanta empadinha!
Elas me dão tanta alegria
Mas a empadinha de camarão
É a rainha
Desmanchando na boca
Penetrando macia
A empadinha de camarão
Me lembra tanto uma bucetinha
Quando eu penso nos teus olhos
Vejo só escuridão
Nada fica, tudo passa
No fundo falso dessa canção
Meu Deus, quanta empadinha
Quando o dia vira noite
E o sol foi pro além
Quando tudo é muito pouco
E o que era eu
Agora é breu

Dedo, língua, cu e boceta
Dedo, boceta, língua e cu
Dedo na língua, língua no dedo
Cu na boceta, boceta no cu
Dedo na boceta, língua no cu
Língua na boceta, dedo no cu
Dedo, língua, cu, boceta também
Boceta vezes dedos, noves fora cu
Língua, língua, língua, dedo no cu
Dedo na boceta, língua no cu
Dedo, língua, cu e boceta
Dedo, boceta, língua e cu



Uma carrocinha de cachorro quente
Espia só o vendedor
Olha prum lado, olha pro outro
Disfarça, não vem ninguém
A lá
Ele tá enfiando a mão dentro da calça
Aquela mão que segura o cachorro-quente
A lá
Ele tá coçando o cu com a mão
Moça, ô moça, num compra cachorro-quente não!

Nome: Clarice
Altura: 1, 80m
Esguia, magérrima, olhos de esfinge, pés pequenininhos
Mas tem uma trolha!

O elefante pergunta pra vaquinha
Tomou?
No cu?
A colombina pergunta pro pierrot
Tomou?
No cu?
A enfermeira pergunta pro defunto
Tomou?
No cu?
E todo mundo começa a perguntar
Tomou?
No cu?!

Calma
Cê deve ter tomado alguma coisa
Relaxa
Respira fundo
Isso
Agora me fala
Qual seu nome?
Buceta!
De onde você vem?
Buceta!
O nome da tua mãe?
Buceta!
O que que você quer
Buceta!

Desculpa
Esse meu jeito
Meio desesperado
De dizer as coisas
Mas o problema
É que nesse momento
Nesse exato momento
Um marimbondo
Tá dentro da minha calça
E tá picando
A minha bunda!

Eu bem que fiz tudo
Pra ser o que mamãe queria
Mas o tempo foi passando
O tempo foi passando
E tudo foi ficando
Meio escalafobético
"Ele era tão quietinho"
Um idiota comentou
E tudo seria patético
Se não fosse
Pateta!
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

A buceta Bradesco
Se chama Bia
Em caso de fome
Será que atenderia?

É aberta por fora
E fechada por dentro
Um mistério profundo
Um sonho, um pesadelo

Nos abismos do céu
Num pedaço de mar
Nos barracos da cidade

Dentro do coração
No interior do sertão
Nas senzalas, no senado

A buceta Bradesco
Faz pompoarismo
Clã de sereias
Todas famintas

Quem escuta seu canto
Não fica ileso
A sua voz soa a todo momento

Os buracos, nos vãos
No brilho dos salões
Nos atalhos, nas esquinas

Os desvãos da canção
No outro lado do rio
Nas ruínas, nas favelas

A buceta Bradesco
É um buraco negro
Tem gosma, tem sangue
Tem cheiro, tem pelo

O seu coração é uma cloaca
Um buraco no meio
E o vazio dentro

Na avenida Brasil
Ou debaixo do chão
Nas vitrines
Nas estrelas

Nas celas das prisões
Diante da tevê
Internet, Netflix

A buceta Bradesco
Parece cinema
Às vezes exílio
Às vezes non sense

Ela tem uma coisa
Que não transparece
Um sorriso nos lábios
Um riso nos dentes

Alô, comunidade dos Macacos
Rocinha, Vidigal
Alô, Turano, Querosene, Alemão
Bicho tá pegando

Dois corpos não ocupam
O mesmo lugar no espaço
O corpo do cadáver
Em putrefação

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, milícia
Ninguém desconfia
Podia ser seu filho
Podia ser meu pai

O corpo dos átomos
O corpo das moléculas
O corpo do aleijado
O corpo em combustão

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, polícia
Nêgo Dito
Kátia Flávia
Clara Crocodilo

O corpo da poesia
O corpo da canção
O corpo da matéria
O corpo em convulsão

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, parceiro
Aqui no Rio são quatro horas da manhã
Ninguém mais dorme nessa porra
Tá todo mundo aceso

O corpo cavernoso
Corpo sem cabeça
Corpo esburacado
O corpo do indigente

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô?
Quem tá falando?
Eu num tô entendendo nada
Que que 'cê disse?

O corpo operado
O corpo sem órgãos
O corpo com prótese
O corpo violado

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, alô, torcida do Flamengo
Tá todo mundo fodido
É o silêncio do Maracanã lotado

O corpo vazio
O corpo do desejo
O corpo dissecado
O corpo em êxtase

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, Mangueira
Estação primeira
A linha caiu
Ninguém chama, ninguém responde

O corpo de uma pedra
O corpo da escrita
O corpo que resiste
O corpo traduzível

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô?
Quem tá falando?

Alô, alô, torcida do Flamengo
Tá todo mundo fodido

Dois corpos não ocupam
O mesmo lugar no espaço
O corpo do cadáver
Em putrefação

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Não !!!! Roubaram meu pau !!!!!
Capado !! Canalha !!!
Não !!!! Roubaram meu pau !!!!!
Destroço !!!! Estrago !!!!!
Não !!!! Roubaram meu pau !!!!!!
Castrado !!!! Cadáver !!!! Catástrofe !!!!
O pesadelo só começou.
Cadê meu pau?
Cadê meu pau?


Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro

Não deixa não, o samba morrer
O samba chegou, o samba é você
Não deixa não, o samba morrer
O samba chegou, o samba é você

O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Fátima Bernardes fugiu de casa
Fátima Bernardes mandou um beijo
Fátima Bernardes foi baleada
Fátima Bernardes chupando dedo

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Fátima Bernardes pra presidente
Fátima Bernardes em carne e osso
Fátima Bernardes tem corrimento
Fátima Bernardes, William Bonner

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Fátima Bernardes investe tudo
Fátima Bernardes com arroz 'la grega'
Fátima Bernardes é vagabunda
Fátima Bernardes tem caderneta

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Fátima Bernardes cheirando cola
Fátima Bernardes com a pica dura
Fátima Bernardes experiência
Fátima Bernardes também é cultura

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Aqui tem joão-de-barro
Pintassilgo, pintarroxo
Pica-pau e colibri
Aqui tem canário-belga
Araponga, assum-preto
Curió e bem-te-vi
Aqui tem tanta andorinha
Cambaxirra, quero-quero
Rouxinol e juriti
Que servem de tiro ao alvo
Para espantar o tédio
E o vazio do existir

Matador de passarinho
Matador de passarinho
Matador de passarinho
Matador de passarinho

Tico-tico, quando voas
Tico-tico, tu pareces
Um teco-teco no ar
Tico-tico, quando cantas
Me lembro da minha infância
Feriado em Paquetá
Tico-tico, tão arisco
Tico-tico, tu beliscas
Uns grãozinhos de fubá
Tico-tico, me perdoa
Mas me vem uma vontade
Não posso me segurar

Matador de passarinho
Matador de passarinho
Matador de passarinho
Matador de passarinho

Beija-flor, de flor em flor
Beija-flor, tu és o rei
Beija-flor, te quero bem
Beija-flor, se tu soubesses
Beija-flor, ah! Se eu pudesse
Beijaria flor também
Beija-flor, tu vais levando
Numa nuvem cor-de-rosa
Grãos de pólen para quem?
Beija-flor, tu és tão lindo
Mas chegou a tua hora
Não beijarás mais ninguém

Matador de passarinho
Matador de passarinho
Matador de passarinho
Matador de passarinho

Dedo no cu é o seu nome, mora no canavial
Gritaria é um assombro, tem a voz dos carnavais
Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria

Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria

Dedo no cu é o seu nome, canta no canavial
Gritaria é um assombro, tem a voz dos carnavais
Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria

Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria



Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
E apesar de tudo é tão comovente,
A verdade explode na cara da gente,
A verdade é crua, a verdade é nua,
A verdade torce e a verdade estupra.
A verdade é puta, a verdade é puta,
A verdade trai e nem se incomoda.
A verdade grita em poucas palavras,
A verdade arde, a verdade arde:

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.

Então era isso o surpreendente,
Era tão óbvio, tão evidente.
Tava na cara, tava nos modos,
Tava na forma e era o bom senso.
Então era isso, eu ia pensando,
A mídia gritava: mentira, mentira.
Mas eu não ligava e prosseguia
Tranqüilo e fodido
Eu ia dizendo:

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.

Decifra o enigma que eu te proponho,
O x do problema, a minha equação.
A linha de fuga, a minha miragem,
O meu oriente e o grandes sertões.
Decifre o enigma, ando sozinho,
Eu tô mais distante do que mil japões.
Alô MAL VAL
Eu continuo tanquilo e sereno seguindo a canção:

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.

Então era essa a melodia
Que te pertuba os ouvidos moucos?
Último gesto, a saideira,
O canto-do-cisne, a minha canção.
Então era essa a melodia
Que te pertuba a noite de sono?
Meu semelhante, meu companheiro,
Meu cumpadi, meu irmão.

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlo tem perna-de-pau.

E apesar de tudo é tão comovente.
A verdade explode na cara da gente.
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir


Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
É que o Mário Covas já morreu
Ana Maria Braga tá morrendo
e eu também um dia vou morrer
De quê?

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Mario Covas, Câncer no cú
Ana Maria Braga, Câncer no cú
Rogério Skylab, Câncer no cú
Câncer no cú
Câncer no cú
Câncer no cú ô

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Qual a semelhança entre eu, Ana Maria Braga e Mario Covas?
Qual a semelhança entre eu, Ana Maria Braga e Mario Covas?

Perdemos a vontade de cagar
Perdemos a vontade de cagar
Perdemos a vontade de cagar
E aquela bolsinha de plástico, por quê?

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Mario Covas, Câncer no cú
Ana Maria Braga, Câncer no cú
Rogério Skylab, Câncer no cú
Câncer no cú
Câncer no cú
Câncer no cú ô

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
É que o Mário Covas já morreu
Ana Maria Braga tá chorando
e eu tô com vontade de cantar
O quê?

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Mario Covas, Câncer no cú
Ana Maria Braga, Câncer no cú
Rogério Skylab, Câncer no cú
Câncer no cú
Câncer no cú
Câncer no cú ô

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú


Páginas de um livro que nunca foi lido
Num banco da praça
Nomes de guerra, corpo na cama
Dólar falso
O quarto dela não tem janela
Flores de plástico
É tudo junto e misturado
Casaco de visom
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)

Flor de cacto, gilete azul
Arco-íris
Cachorrinho de pelúcia
Oncinha pintada, coelhinho peludo
Uma lança no escuro
O olho do cu no meio do mundo
Quem serei eu? Quem será ela?
Razão e ficção
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)

Já ia me esquecendo
Os adornos e os gestos
Com que se reveste
O seu mistério, as suas plumas, as suas pérolas
Todos os seus versos
A flor do laço, as quimeras
Anel de diamante, rubi encravado
Pulseira de ouro
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)



Por isso tá tudo ruim,
A infidelidade, oh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão,
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
No início eu tinha pressão alta.
Urubu, meu companheiro,
Eu compus um blue cheio de dor pra gente rir.
Então olho pra vitrola,
Depois olho pro relógio,
Depois olho pro espelho,
Então eu fico pensando:
Quanto pior, melhor.
Quanto pior, melhor.
Abri a geladeira do IML,
Meu bem, eu te conheci na CTI.
Ela tinha 8 anos,
O seu nome era Alice,
Levei-a pro meu quarto,
Ofereci chocolate.
Yoga é o caralho !!!
Mestre de Rose é o caralho !!!!
E Getúlio respondeu: a lei, a lei, lei
Quanto pior melhor,
Quanto pior melhor.
Por isso tá tudo ruim,
A infidelidade, óh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão.
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

Por isso tá tudo ruim,
A infidelidade, oh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão,
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
No início eu tinha pressão alta.
Urubu, meu companheiro,
Eu compus um blue cheio de dor pra gente rir.
Então olho pra vitrola,
Depois olho pro relógio,
Depois olho pro espelho,
Então eu fico pensando:
Quanto pior, melhor.
Quanto pior, melhor.
Abri a geladeira do IML,
Meu bem, eu te conheci na CTI.
Ela tinha 8 anos,
O seu nome era Alice,
Levei-a pro meu quarto,
Ofereci chocolate.
Yoga é o caralho !!!
Mestre de Rose é o caralho !!!!
E Getúlio respondeu: a lei, a lei, lei
Quanto pior melhor,
Quanto pior melhor.
Por isso tá tudo ruim,
A infidelidade, óh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão.
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.

Por isso tá tudo ruim,
A infidelidade, oh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão,
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
No início eu tinha pressão alta.
Urubu, meu companheiro,
Eu compus um blue cheio de dor pra gente rir.
Então olho pra vitrola,
Depois olho pro relógio,
Depois olho pro espelho,
Então eu fico pensando:
Quanto pior, melhor.
Quanto pior, melhor.
Abri a geladeira do IML,
Meu bem, eu te conheci na CTI.
Ela tinha 8 anos,
O seu nome era Alice,
Levei-a pro meu quarto,
Ofereci chocolate.
Yoga é o caralho !!!
Mestre de Rose é o caralho !!!!
E Getúlio respondeu: a lei, a lei, lei
Quanto pior melhor,
Quanto pior melhor.
Por isso tá tudo ruim,
A infidelidade, óh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão.
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.



Aí meu, aí meu, tem cigarro aí?
Cigarro? Tem cigarro aí?
Gente boa, gente boa, tem cigarro aí?
Cigarro? Tem cigarro aí?

Aí véi, aí véi, tem cigarro aí?
Cigarro? Tem cigarro aí?
Terezinha tem cigarro aí?
Cigarro? Tem cigarro aí?

Tia, tia, tem cigarro aí?
Cigarro? Tem cigarro aí?
Fala, mestre tem cigarro aí?
Cigarro? Tem cigarro aí?

Fala, comandante tem cigarro aí?
Cigarro? Tem cigarro aí?
Bom dia tem cigarro aí?
Cigarro, tem cigarro aí?

Ei moço, você gosta de poesia? Não?
Tem cigarro aí?
Cigarro? Tem cigarro aí?

Você ouvinte é a nossa meta
Pensando em você é que procuramos fazer o melhor
Domingo é dia de esporte
O domingo é nosso
Tem cigarro aí?
Cigarro tem cigarro aí?

Oh pai tem cigarro aí?
Cigarro, tem cigarro aí?

Se você amanheceu sem disposição, dor de cabeça
Azia, mal estar
Tem cigarro aí? Cigarro, tem cigarro aí?

Nós já vamos lhe atender
Espere só mais um pouquinho
Anote o número do protocolo
Tem cigarro aí? Cigarro, tem cigarro aí?

Ah, que pena, eu não posso falar com você agora
Mas não fique chateada
Assim que eu puder, eu ligo de volta pra você
É só deixar nome e telefone
É só deixar cigarro
Tem cigarro aí?
Cigarro? Tem cigarro aí?

E Jesus chegou para Lázaro
E ordenou: Levanta-te
E Lázaro, dentro da sepultura
Abriu os zoi devagarzinho
Pensou em Barbacena e falou
Tem cigarro aí? Cigarro? Tem cigarro aí?

Tem cigarro aí, porra?
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

Você vai ao samba
Uma cabrocha: Só no sapatinho
Gostosa!
No final das contas vocês vão pro Motel
Transam a noite inteirinha
Trinta dias depois, ela volta grávida
E quer ter o filho
Conclusão: Você pagar pensão pro resto da sua vida
Ela te ama?
Não!
O quê que ela é então?
Puta, é puta!

Mas você insiste
Não entrega os pontos
Vai ao Shopping, quer comprar uma calça Lee
Uma vendedora vem ao seu encontro
E te trata pelo nome, como se vocês fossem íntimos
Gostosa!
E sensual, provocante
Você não enxerga mais nada
Compra calça, cueca, meia, sapato
Conclusão: Ela é uma vendedora?
Não!
O quê que ela é então?
Puta, é puta!

Cidade do Rio de Janeiro
Zona sul, garota de Ipanema
Gostosa!
Você quer morar lá
Tem money? Não
Então, não pode não
Conclusão: Essa cidade te ama?
Não!
O quê que ela é então?
Puta, é puta!

Calma, quê isso?
Você tá tão revoltado, disse a psicanalista diante do meu delírio
É que todas as coisas que eu via, criança, fábrica, escola
Todas elas pareciam putas
Trinta minutos depois, eu paguei a consulta
E voltei sozinho pra casa
Com aquela sensação
Puta, é puta!

O Sol já vai nascer
Acho que o mundo é bom
Só queria saber, menina
Menina, qual é a voz do cu?
Qual é a voz do cu, menina?
Qual é a voz do cu?

Sei que tá tudo bem
A gente é até feliz
Só queria saber, menina
Menina, qual é a voz do cu?
Qual é a voz do cu, menina?
Qual é a voz do cu?

Difícil perceber
Mas ela está aqui
Só queria saber, menina
Menina, qual é a voz do cu?
Qual é a voz do cu, menina?
Qual é a voz do cu?

Você é feia
É feia pra caralho
É feia pra caralho
É feia pra caralho

É pobre
Mora na rua
É perigosa
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

É perigosa
É paranóica
Porra-louca
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

Quer um conselho?
Entra no banheiro
Fecha bem a porta
Tampa o basculante
E liga o gás

É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

Está com AIDS
É paranóica
Porra-louca
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

Lívia, ô ô Lívia, Lívia, all my life
Se não tivesse atirado ainda estaria aqui
Livia’s gone, ô ô Livia’s gone
Eu fui pra Memphis, foi lá que a conheci
Na sala da tua casa, Lívia, aonde te prendi
Lívia, ô ô Lívia
Lívia tão fria, há mil milhas de mim
Naquele dia o mal me fez querer em vão o fim
Lívia, ô ô Lívia
O primeiro tiro a fez tanto sofrer
Mas o segundo tão certeiro fez Lívia partir
Lívia, ô ô Lívia
O carcereiro, não posso dormir
Tudo em minha volta ouço vozes, Lívia ri
Lívia, ô ô Lívia
Se a tua companheira é igual a minha
Tu podes abandoná-la ou trazê-la junto a ti
Lívia, ô ô, Lívia
Lívia, ô ô Lívia, Livia, all my life
Se não tivessem atirado ainda estaria aqui
Livia’s gone, ô ô, Livia’s gone

Certa noite em Campo Grande
Eu dei a maior trepada
Com uma linda cuiabana
Da bunda avantajada

A trepada foi tão grande
Que eu acho que desmaiei
No outro dia, cedinho
Só um bilhete encontrei

No bilhete, ela dizia
Que ia me encontrar
Pra nós dar outra trepada
Quando eu fosse em Cuiabá

Peguei meu fuscão vermelho
E saí desesperado
Passei em Jaraguari
Comi o cu de um viado

Comi outro em Bandeirantes
E sai na correria
Chegando em São Gabriel
Enrabei uma guria
Rio Verde e Coxim
Foi a maior putaria

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

O meu pinto endureceu
Quando eu passei em Sonora
Em Rondonópolis, dei uma
No rabo de uma senhora

Santa Elvira, não parei
Juscimeira e Pedro Cipa
Chegando em Jaciara
Dei o maior show de pica

Na serra de São Vicente
Já estava bem escuro
Chegando em Cuiabá
Meu cacete tava duro

Fui direto à casa dela
A mãe dela estava lá
A velhota não saía
E eu querendo trepar

E eu doido para comer
Aquela linda teteia
Nisso, a mulher foi dormir
E me surgiu uma ideia
Naquele tesão danado
Eu comi o cu da véia

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Meu pinto é uma alavanca
Meu saco é uma marreta
Vou até no fim do mundo
Por causa de uma boceta

Eu sou um cara fudido
Só gosto do que é certo
Não como a mulher do próximo
Quando o próximo está perto
Longe do próximo eu como
E não tenho cerimônia
Não cago fora do tacho
E nem solto peido na fronha

Eu sou fudido
Sou cabra macho
Mulher comigo trepa em cima e trepa em baixo
Do jeito que ela quiser
Faço regaço

Não sou feio e nem bonito
Sou um cara diferente
Meu cipó tem 4 quinas
Só não como meus parentes
Mas os parentes dos outros
Comigo não facilita
Quem facilitar comigo
Não demora leva pica

Eu sou fudido
Sou cabra macho
Mulher comigo trepa em cima e trepa em baixo
Do jeito que ela quiser
Faço regaço

Nunca tive preconceito
Mulher pra mim é mulher
Se começar com frescura já sei o que ela quer
É água de morro abaixo
E o fogo nas alturas
Mulher quando quer dar não tem ninguém que segura

Eu sou fudido
Sou cabra macho
Mulher comigo trepa em cima e trepa em baixo
Do jeito que ela quiser
Faço regaço

Eu queria te comer na minha cama
Mas é outro vagabundo que tu ama
Mas ele é bicha

Ele anda dando o cu pra todo mundo
O miserável vive até de rabo fundo
De tanto dar

Você dá pra ele e ele dá pros outros
Será que é isso o que você quer?
Se envolvendo com esse bicha giletão
Que nem é homem e nem mulher

Esse fi de rapariga só te engana
Vira-lata igual a ele ninguém viu
Você tem que mandar esse traveco
Ir à puta que pariu

Deixe eu dar um pau nesse safado
Deixar ele desmaiado e mijar na cara dele
Querida dá pra mim sua bundona
Esquece essa bichona
Senão acabo com ele

Ela me ligou chamando
Pra eu ir na casa dela
Dizendo que estava afim de transar numa boa

Disse que tava curtindo
Uma tesão danada
E não queria trepar com outra pessoa

Cheguei, parti pra cima dela e fui tirando a roupa
E a filha da puta tava meio louca
Me amarrou na cama
Bagunçou comigo

Pulou em cima de mim
Mijou na minha cara
Arrancou meus pentelhos, torceu minha vara
Doeu até o imbigo

Até hoje eu não esqueci o que aquela infeliz me fez
Me obrigou transar com ela umas quatro ou cinco vezes

Nunca mais eu vou sair com aquela estupradora
Se até hoje eu não posso ver um cabo de vassoura

Hoje relembrando foda lembrei daquela que a gente deu
Foi uma gozada gostosa quase saiu bosta do cuzinho seu
Eu estava apaixonado ficava calado ao olhar pra você
E a todo momento eu só queria foder

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

Hoje só resta lembrança daquele corpinho lindo
Da sua bunda gostosa e do seu priquito liso
Cheirando sua calcinha eu dormia sem querer
Amor volta pra mim tô doidin pra te comer

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

A gente se amava tanto que quase arrancava o couro
Você era a minha vaca e eu era o seu touro
Hoje tô me acabando na solidão e de tristeza
Lembrando de você vou bater outra punheta

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

Eu chupava seu peitin com o dedo na buceta
Você pegando minha pimba batia punheta
Você ficava quase louca
Quando eu botava o pau na sua boca

Sou comedor de xiranha
E não dou moleza não
Gosto de carne mijada
Como em qualquer posição

Meu pai era um buceteiro
Não saia dos puteiros
Ele contava pra mim
Por onde o velho passava
Um cabaço ele arrancava
Meu velho pai era assim

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

E foi assim que aprendi
A trepar com perfeição
A trepada que eu dou
É de avermelhar vinhão

Tem mulher quando me vê
Ela começa a se tremer
Não consegue nem falar
A roupa já tirando
E já vem se encostando
Só pra ver o pau entrar

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Hoje estou velho e fodido
Mas gosto de farrear
Meu filho tem 5 aninhos
E já começou trepar

Já umas trepadinha
Na galinha da vizinha
Ele só pensa em foder
Quando ele ficar rapaz
Vai ficar igual meu pai
Que trepou até morrer

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Boate, zona e puteiro
Redivos e cabarés
O que meu pai mais gostava
Era de cu de mulher

Sente meu pau que eu vou
Eu vou gozar
Eu sei que gozo sim
Porque gozar

Por você me faz
As putinhas que eu
Fico acunhar
Não tem gozo igual

Por isso é que te digo
Sempre que te vejo
Sente meu pau

Romântico é gozar
De ouvido assim
Falando em meu ouvido
Ai bote mais

Ai meu gordin'
Mas se eu achar alguém
Como você
Nunca, será igual

Alguém que sente bem
E bem igualzinho
Ai, o meu pau

(Senta no meu pau amor)

Quando tu tava na merda
Sem grana, sem roupa, fudida
Na cabeça só tinha piolho
E a boca cheia de ferida

O suvaco cheio de cabelo
O desodorante vencido
Os peitos no meio da barriga
O rabo cheio de mosquito
A precheca azeda e fedida
Realmente, tu estavas fudida

Enchi teu rabo de comida
Te dei banho, lavei tua precheca
Tirei teus cabelos do suvaco
Comprei roupa nova e te dei

Arrumei cama pra tu dormir
Te dei casa pra tu morar
E na hora que eu fui te comer
Tu não quisestes me dar
Falando que eu só quero me aproveitar

Agora tas gorda e bonita
Roupa nova, precheca limpinha
Parece que tem ouro no cu
Não me dá nem que a vaca tussa

Você é uma filha da puta
Vagabunda, mal agradecida
Quando mim ver com o pinto duro
Fica com a cara deslambida
Você não vale nada, cachorra bandida

Fiz uma grande proeza
Foi em um mês de fevereiro
Fui buscar uma putada
Lá perto de Marmeleiro

Num garimpo da pesada
Ali só tinha um puteiro
O dono tinha morrido
Pelas mãos de um pistoleiro
As putas tavam sofrendo
Sem comida e sem dinheiro

Quando eu cheguei no puteiro
Já tava raiando o dia
As putas me avistaram
Foi tão grande a alegria

Umas arrumavam as malas
Outra um cigarro pedia
Outras queriam trepar
Mas na hora eu não podia
E na hora da saída uma disse que não ia

Ela se agarrou com um cara
Sujeito mal-encarado
E disse "daqui não saio sem o meu enrabichado"
Os dois caíram no mato
Parti de passo apressado
Encontrei o cara e a puta no meio do descampado
Amarrei ela e trouxe
Deixei o cara amarrado

Quando eu cheguei no puteiro
O cara já tava lá
Achei aquilo esquisito
Dele se desamarrar
Mesmo assim não liguei
Mandei as putas embarcar
O cara chegou em mim
Falou pra eu lhe levar
Que estava desmoralizado, ali não podia ficar

Eram trinta e cinco putas
Com o cara trinta e seis
Quando entreguei a putada
Alguma coisa cismei
Faltava o cara e a puta
Nisso eu me assustei
Só trinta e quatro putas, o que aconteceu não sei
Dizem que era um fantasma de um garimpeiro gay

Tô indo agora pra casa da minha puta
Podem falar, podem pensar o que quiser
Ela faz tudo que eu quero e o que eu gosto
Sempre é melhor do que a primeira mulher

Chegando lá eu dou dinheiro para ela
Ela me dá bolacha com bolo e café
Descanso um pouco em cima da sua cama
Ela me abraça e me faz um cafuné

Minha puta
Como tu és carinhosa
És bonita e és gostosa
Nunca quero te perder

Minha puta
Tira logo esta roupa
Veja só a minha trouxa
Ai tá doidinha pra foder

(Oh minha puta, eu te amo demais)

Depois da foda dou-lhe um beijo e um abraço
Saio escondido que é para ninguém me ver
Chego em casa encontro a mulher e filhos
Estão com fome pois não tem o que comer

A mulher reclama diz que sou um vagabundo
Fico calado pois não sei o que dizer
Vou outra vez lá pra casa da minha puta
Fico tranquilo pois lá tem o que eu comer

Minha puta
Como tu és carinhosa
És bonita e és gostosa
Nunca quero te perder

Minha puta
Tira logo esta roupa
Ai veja só a minha trouxa ai
Tu tá doidinha pra foder

Mas minha puta
Como você é legal
Só em olhar pra você
Ai já levanta o meu pau

(Ai minha puta, como eu te amo, ai, ai)

Recordo com saudade
O bundão da Mercedita
Foi a bunda mais bonita
Que eu vi no Paraguai

Ela passava na rua
Os homens ficavam olhando
E os pintos levantando
E não baixavam nunca mais

E lá vai punheta pra todo lado
Todo mundo tinha calos nas mãos
Tinha até velho que desmaiava
E ficava estrebuchando no chão

Ela via tudo e não ligava
Mas rebolava aquele bundão
Até o padre pra se vingar
Comia a mulher do sacristão
O padre véi safado
Mas o tempo foi passando
Mercedita ficou velha
Os peitos dela virou peia
E a bunda encolheu

E a pobre Mercedita
Que era muito orgulhosa
Sua bunda tão gostosa
Só a terra que comeu

E assim acabou a Mercedita
Os peitos grandes e a bunda bonita
A bunda dela ninguém comeu
Por isso pobre ela morreu

E ainda se vê alguém nas madrugadas
No cemitério, na cova dela
E vai batendo uma punheta
Em homenagem

A bunda dela

O meu nome é Edílson
Sou forte como um jumento
Minha pica tá crescendo
Só por causa de você
Meu bem eu quero fuder
E você não me quer não
Quero passar minha mão
Nessa bunda tão gostosa
Que um dia saiu bosta e sujou meu cunhão
Que um dia saiu bosta e sujou meu cunhão

Menina o teu sorriso parece uma buceta
Quando vejo corro logo pra bater uma punheta
Minha pica tá batendo
Aqui dentro do calção
Parecendo um coração
Quando está de pressão alta
Vejam só a minha gala se arrastando pelo chão
Vejam só a minha gala já caindo pelo chão

Ontem a noite eu dormindo
Tive um sonho com você
Era a doida me chupando
E eu morrendo de prazer
Se enroscava em minha pica
Eu gritava Ai amor!
Eu cutucava sua bunda
Tu gritava Ai que dor!

Dava gota e eu gozava
Outra vez como isso é bom
Data gota e mais gozava
Outra vez como isso é bom

Eu me lembro aquele tempo
Quando a gente se amava
Você dizia que dava sua bunda só pra mim
Minha pica era só tua
Teu piriquito era só meu
Eu chupava o teu peito
E tu cheirava os culhão meu
Hoje só resta saudades das coisas que a gente fez
Hoje só resta saudades das coisas que a gente fez

Meu bem
Esse meu diário foi lembrar nosso passado
Quando eu tiver do teu lado não sei como vou ficar
Se corro, se fico quieto, se choro ou se dou risada
Ou se convido você para dar outra trepada
Minha pica tem saudade da minha ex-namorada
Minha pica tem saudade da minha ex-namorada

Me despeço de você com uma dor no coração
Não quero mais competir com seu novo Ricardão
Veja só minha piquinha caidinha de emoção
O corpinho dela tem o cheiro do seu grande bucetão
Reviveram belos dias se enrolando pelo chão
Reviveram belos dias se enrolando pelo chão

Moro em Campina Grande
Cidade paraibana
Quem quiser meu endereço
Veja aqui na minha pomba
Tá escrito aonde eu moro
E faço um show tão bacana
Que mulher, moça e menina não vão ficar com vergonha
Alegria e respeito não faltará para as damas
Alegria e respeito não faltará para as damas
Alegria e respeito não faltará para as damas
Alegria e respeito não faltará para as damas

Quando a gente ama
Qualquer coisa serve
Para relembrar
A calcinha velha da mulher amada
Tem muito valor
Aquele cheirinho do periquito dela
Que ficou no quarto
Sobre a penteadeira, um lençol galado
Estas são lembranças de um grande amor

E hoje não tenho mais
Aquela buceta
O meu consolo é bater uma punheta
E depois enxugo no meu paletó
Eu guardo no meu armário
E bem escondido
Aquele fio de pentelho comprido
Que nós teve lutando em nosso suor

Volta amor
Sobrou pra mim o cheirinho do teu periquito no meu quarto
Aquele lençol galado
E um pentelho comprido

Quando a gente ama
E esse alguém não está
Para dar uma trepada
Uma coisa tola
É um bom motivo
Pra gente chorar

Apagam-se as luzes
Ao chegar a hora de ir para a cama
Quando deito nela
O meu pau levanta
E começo logo a pensar em ti

E hoje não tenho mais
Aquela buceta
O meu consolo é bater uma punheta
E depois enxugo no meu paletó
Eu guardo no meu armário
E bem escondido
Aquele fio de pentelho comprido
Que nós teve lutando em nosso suor
Volta amor
Volta


Mas se você é corno
F' de puta ou viado
Vam dançar um forró, oi
Na casa do caralho

Na casa do caralho!
Na casa do caralho

Ladrão e maconheiro
Também tu que é tarado
Mulher, menina, moça
Cabra, sábido e otário

Se tu é preguiçoso
Também tá desempregado
Tem vaga pra vocês oh
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(Oh casa miseravi menino)

Cachaça importada
Feita na casa do diabo
Tu bebe fica doido
Ou então abestalhado

Tira gosto de pica
Buceta ou cú rapado
Você come na hora
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(Bota um cú pra mim ae minina, eu quero um cú!)

Concurso do priquito
Que for mais arreganhado
Um cuzão mais gostoso
Sem ser muito acolosado

O peito mais bonito
Que ninguém tenha chupado
Concorre que tu ganha
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(Acunha!)

Campina Grande em peso
Também tá do nosso lado
Tem muita gente boa
Tem também cabra safado

Agora vou embora
Que eu já tô ficando magro
De tanto fazer festa
Na casa do caralho

Na casa do caralho!
Na casa do caralho

(É, vá se lascar!)

Lá na rua onde eu moro
Tem uma moça tarada
Toda vez que ela me vê
Me leva pra sua casa

Começa me alisando
Vai tirando minha roupa
Quando eu penso que não
Minha trouxa já tá dura
E dentro da sua boca

Como você é gulosa mulher

Começamos a gemer
É aquele mela-mela
É capinga de buceta
E cu fedendo a merda

Mesmo assim eu chupo ela
Da cabeça ao mocotó
Ela fica me mordendo
E falando em meu ouvido
Vai torar o meu cipó

Ai, e como eu vou gozar, gostosa?

Dou a primeira gozada
A segunda
E a terceira
E fico já desmaiando
Pois dá uma tremedeira

Quero vestir minha roupa
Mas a moça me segura
Dizendo pra eu voltar
Pois eu vou ter que arrancar
Uma prega da sua bunda

E como tu vai cagar, danada?

Eu já tô todo esgotado
Mas eu vou tentar de novo
Mas tenha pena de mim
E do pobre do meu ovo
Já não consigo gozar
Pois já não tenho mais gala
Meu cacete só sai vento
Pois eu tento, tento, tento
E ele só saindo água

Ai amor, tá saindo fumaça na minha pimba
Entupa com sua língua, vá

Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei

Namoro uma moça
Rica e bonita
Mas tem um defeito
Não gosta de banho
Só veste mulambo
Fede pra cacete

O priquito ensebado
Suvaco suado
Que mulher imunda
Vai escovar os dentes
Vai lavar a tristeza
E também sua bunda

Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei

Se você é sebosa
Só fede a bosta
Siga meu conselho

Vá tomar um banho
Coloque perfume
No seu corpo inteiro
Vista roupa curtinha
E vá pra pracinha
Dar uma paquerada
E acabe com a tristeza (acabe com a tristeza)
Dando uma trepada

Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei
Feiticeira (feiticeira)
Feiticeira é esta mulher por quem me apaixonei

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Em primeiro de outubro
As mocinhas viverão
Uma grande emoção

Pois será o meu cacete
O deputado do povo
Agora desta eleição

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

(Oh meu pau subindo menina)
(Vai meu pau de cabeça erguida)

Se você ainda é moça
Tem medo de levar troxa
Dou a minha opinião

Deixa de ser tão bobinha
Venha pega a minha pimba
E coloca no seu cuzão

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

Pra deputado estadual

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Em primeiro de outubro
As mocinhas viverão
Uma grande emoção

Pois será o meu cacete
O deputado do povo
Agora desta eleição

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

(Oh meu pau subindo menina)
(Vai meu pau de cabeça erguida)

Se você ainda é moça
Tem medo de levar troxa
Dou a minha opinião

Deixa de ser tão bobinha
Venha pega a minha pimba
E coloca no seu cuzão

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

Pra deputado estadual

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Em primeiro de outubro
As mocinhas viverão
Uma grande emoção

Pois será o meu cacete
O deputado do povo
Agora desta eleição

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

(Oh meu pau subindo menina)
(Vai meu pau de cabeça erguida)

Se você ainda é moça
Tem medo de levar troxa
Dou a minha opinião

Deixa de ser tão bobinha
Venha pega a minha pimba
E coloca no seu cuzão

Meu cacete é amigo
É sincero e é humilde
Este nasceu pra vencer

Apoiado pelo ovo
Meu cacete é fofinho
Meu cacete é de fuder

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau

Pra deputado estadual
Votim em meu pau
Votim em meu pau
Votim em meu pau!

Pra deputado estadual

Se você quer fuder
Use camisinha
Pode ser da cara
Ou da baratinha
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão

Use camisinha, Cavalo do Pau, entra dura e sai legal!

Se você quer fuder
Use camisinha
Pode ser da cara
Ou da baratinha
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão
Usando camisinha
Você tem proteção
Protege a sua pica e também seu bucetão

Use camisinha, Cavalo do Pau, entra dura e sai legal!

Muito prazer em te ver
Rapariga metida
Muito mais feia, acabada
Tu és uma bandida

Eu ainda lembro do jeito
Que a gente trepava
É muito melhor uma cachorra
Ou então uma vaca

Puta
Safada
Quenga
Flagelada
Que fazia de tudo

Trocou meu cacete
Gordinho
Fofinho
Lindinho

Me traiu com um burro
Um burro
Aquele jumento até hoje
Trepa com você
Aquele maldito jumento até hoje
Quer você

Eu sei que o safado da história também
Fui eu
E este medo terrível de arruinar essa buceta
Agora é meu

Sei que eu devia aceitá-la de volta
Mas não consigo
A sua buceta está
Igual a boca de um sino
Tão grande
Tão larga
E só resta nela um buraco
Seria difícil gozar
Com um simples caralho

Puta
Safada
Quenga
Flagelada
Que fazia de tudo

Trocou meu cacete
Gordinho
Fofinho
Lindinho

Me traiu com um burro
Um burro
Aquele jumento até hoje
Trepa com você
Aquele maldito jumento até hoje
Quer você

Eu sei que o safado da história também
Fui eu
E este medo terrível de arruinar essa buceta arrombada
Agora é meu

Meu vizinho cascou fora
Levou a mulher em bora
Eu fiquei na solidão, a vizinha era
Tarada, nós dava tanta trepada de estremecer o chão
Quando o marido saia era a maior putaria de avermelhar culhão
A danada não parava, quando o pau escorregava ela ajeitava com a mão
O vizinho desconfiado se mandou com a coitadinha
O vizinho que se foda, chorei por minha vizinha pois vizinha trepadeira difícil de se encontrar, vizinho filha da puta se encontra em qualquer lugar

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha

Meu vizinho cascou fora
Levou a mulher em bora
Eu fiquei na solidão, a vizinha era
Tarada, nós dava tanta trepada de estremecer o chão
Quando o marido saia era a maior putaria de avermelhar culhão
A danada não parava, quando o pau escorregava ela ajeitava com a mão
O vizinho desconfiado se mandou com a coitadinha
O vizinho que se foda, chorei por minha vizinha pois vizinha trepadeira difícil de se encontrar, vizinho filha da puta se encontra em qualquer lugar

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha

O corno gosta de chifre, mulher gosta de machão
Velho gosta de biscate, biscate de sapatão
Macho que é macho não gosta de andar com frescurinha
E eu gosto que me enrosco na danada da vizinha



Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu
Se fosse fácill se olhar
Quem diria eu?
Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu!

Eu chupo meu pau
Eu chupo seu pau?
Não, eu chupo meu pau
O pau é seu?
Não, o pau é meu
Se fosse fácil chupar o próprio pau
Cada um chupava o seu
Eu chupo o meu pau
Eu chupo o seu pau?
Não, eu chupo o meu pau
O pau é seu?
Não, o pau é meu!

Eu me mato
Eu te mato?
Não, eu me mato
A morte é sua?
Não, a morte é minha
Se fosse fácil se matar
Todo mundo morria
Eu me mato
Eu te mato?
Não, eu me mato
A morte é sua?
Não, a morte é minha!

Eu chupo meu pau
Eu chupo seu pau?
Não, eu chupo meu pau
O pau é seu?
Não, o pau é meu
Se fosse fácil chupar o próprio pau
Cada um chupava o seu
Eu chupo o meu pau
Eu chupo o seu pau?
Não, eu chupo o meu pau
O pau é seu?
Não, o pau é meu!

Eu me drogo
Eu te drogo?
Não, eu me drogo
A droga é sua?
Não, a droga é minha
Se fosse fácil se drogar
Quem não se drogaria?
Eu me drogo
Eu te drogo?
Não, eu me drogo
A droga é sua?
Não, a droga é minha!

Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu
Se fosse fácill se olhar
Quem diria eu?
Eu me olho
Eu te olho?
Não, eu me olho
O olho é seu?
Não, o olho é meu!
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

Meu Deus, quanta empadinha!
Elas me dão tanta alegria
Mas a empadinha de camarão
É a rainha
Desmanchando na boca
Penetrando macia
A empadinha de camarão
Me lembra tanto uma bucetinha
Quando eu penso nos teus olhos
Vejo só escuridão
Nada fica, tudo passa
No fundo falso dessa canção
Meu Deus, quanta empadinha
Quando o dia vira noite
E o sol foi pro além
Quando tudo é muito pouco
E o que era eu
Agora é breu

Dedo, língua, cu e boceta
Dedo, boceta, língua e cu
Dedo na língua, língua no dedo
Cu na boceta, boceta no cu
Dedo na boceta, língua no cu
Língua na boceta, dedo no cu
Dedo, língua, cu, boceta também
Boceta vezes dedos, noves fora cu
Língua, língua, língua, dedo no cu
Dedo na boceta, língua no cu
Dedo, língua, cu e boceta
Dedo, boceta, língua e cu



Uma carrocinha de cachorro quente
Espia só o vendedor
Olha prum lado, olha pro outro
Disfarça, não vem ninguém
A lá
Ele tá enfiando a mão dentro da calça
Aquela mão que segura o cachorro-quente
A lá
Ele tá coçando o cu com a mão
Moça, ô moça, num compra cachorro-quente não!

Nome: Clarice
Altura: 1, 80m
Esguia, magérrima, olhos de esfinge, pés pequenininhos
Mas tem uma trolha!

O elefante pergunta pra vaquinha
Tomou?
No cu?
A colombina pergunta pro pierrot
Tomou?
No cu?
A enfermeira pergunta pro defunto
Tomou?
No cu?
E todo mundo começa a perguntar
Tomou?
No cu?!

Calma
Cê deve ter tomado alguma coisa
Relaxa
Respira fundo
Isso
Agora me fala
Qual seu nome?
Buceta!
De onde você vem?
Buceta!
O nome da tua mãe?
Buceta!
O que que você quer
Buceta!

Desculpa
Esse meu jeito
Meio desesperado
De dizer as coisas
Mas o problema
É que nesse momento
Nesse exato momento
Um marimbondo
Tá dentro da minha calça
E tá picando
A minha bunda!

Eu bem que fiz tudo
Pra ser o que mamãe queria
Mas o tempo foi passando
O tempo foi passando
E tudo foi ficando
Meio escalafobético
"Ele era tão quietinho"
Um idiota comentou
E tudo seria patético
Se não fosse
Pateta!
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

A buceta Bradesco
Se chama Bia
Em caso de fome
Será que atenderia?

É aberta por fora
E fechada por dentro
Um mistério profundo
Um sonho, um pesadelo

Nos abismos do céu
Num pedaço de mar
Nos barracos da cidade

Dentro do coração
No interior do sertão
Nas senzalas, no senado

A buceta Bradesco
Faz pompoarismo
Clã de sereias
Todas famintas

Quem escuta seu canto
Não fica ileso
A sua voz soa a todo momento

Os buracos, nos vãos
No brilho dos salões
Nos atalhos, nas esquinas

Os desvãos da canção
No outro lado do rio
Nas ruínas, nas favelas

A buceta Bradesco
É um buraco negro
Tem gosma, tem sangue
Tem cheiro, tem pelo

O seu coração é uma cloaca
Um buraco no meio
E o vazio dentro

Na avenida Brasil
Ou debaixo do chão
Nas vitrines
Nas estrelas

Nas celas das prisões
Diante da tevê
Internet, Netflix

A buceta Bradesco
Parece cinema
Às vezes exílio
Às vezes non sense

Ela tem uma coisa
Que não transparece
Um sorriso nos lábios
Um riso nos dentes

Alô, comunidade dos Macacos
Rocinha, Vidigal
Alô, Turano, Querosene, Alemão
Bicho tá pegando

Dois corpos não ocupam
O mesmo lugar no espaço
O corpo do cadáver
Em putrefação

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, milícia
Ninguém desconfia
Podia ser seu filho
Podia ser meu pai

O corpo dos átomos
O corpo das moléculas
O corpo do aleijado
O corpo em combustão

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, polícia
Nêgo Dito
Kátia Flávia
Clara Crocodilo

O corpo da poesia
O corpo da canção
O corpo da matéria
O corpo em convulsão

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, parceiro
Aqui no Rio são quatro horas da manhã
Ninguém mais dorme nessa porra
Tá todo mundo aceso

O corpo cavernoso
Corpo sem cabeça
Corpo esburacado
O corpo do indigente

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô?
Quem tá falando?
Eu num tô entendendo nada
Que que 'cê disse?

O corpo operado
O corpo sem órgãos
O corpo com prótese
O corpo violado

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, alô, torcida do Flamengo
Tá todo mundo fodido
É o silêncio do Maracanã lotado

O corpo vazio
O corpo do desejo
O corpo dissecado
O corpo em êxtase

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô, Mangueira
Estação primeira
A linha caiu
Ninguém chama, ninguém responde

O corpo de uma pedra
O corpo da escrita
O corpo que resiste
O corpo traduzível

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Alô?
Quem tá falando?

Alô, alô, torcida do Flamengo
Tá todo mundo fodido

Dois corpos não ocupam
O mesmo lugar no espaço
O corpo do cadáver
Em putrefação

O corpo real da Paolla
O corpo real do meu pau
O corpo real da Paolla
O corpo real do meu pau

Não !!!! Roubaram meu pau !!!!!
Capado !! Canalha !!!
Não !!!! Roubaram meu pau !!!!!
Destroço !!!! Estrago !!!!!
Não !!!! Roubaram meu pau !!!!!!
Castrado !!!! Cadáver !!!! Catástrofe !!!!
O pesadelo só começou.
Cadê meu pau?
Cadê meu pau?


Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro

Não deixa não, o samba morrer
O samba chegou, o samba é você
Não deixa não, o samba morrer
O samba chegou, o samba é você

O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro
O meu pau fica duro, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Doutor, me explica: Por que é que às vezes
Quando eu fico parado, sem fazer nada
O meu pau fica duro?
Não é bexiga cheia
Não é mulher pelada
É assim de repente, o meu pau fica duro

Fátima Bernardes fugiu de casa
Fátima Bernardes mandou um beijo
Fátima Bernardes foi baleada
Fátima Bernardes chupando dedo

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Fátima Bernardes pra presidente
Fátima Bernardes em carne e osso
Fátima Bernardes tem corrimento
Fátima Bernardes, William Bonner

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Fátima Bernardes investe tudo
Fátima Bernardes com arroz 'la grega'
Fátima Bernardes é vagabunda
Fátima Bernardes tem caderneta

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Fátima Bernardes cheirando cola
Fátima Bernardes com a pica dura
Fátima Bernardes experiência
Fátima Bernardes também é cultura

Glória Maria
Glória Maria
Glória Maria
Glória Maria

Aqui tem joão-de-barro
Pintassilgo, pintarroxo
Pica-pau e colibri
Aqui tem canário-belga
Araponga, assum-preto
Curió e bem-te-vi
Aqui tem tanta andorinha
Cambaxirra, quero-quero
Rouxinol e juriti
Que servem de tiro ao alvo
Para espantar o tédio
E o vazio do existir

Matador de passarinho
Matador de passarinho
Matador de passarinho
Matador de passarinho

Tico-tico, quando voas
Tico-tico, tu pareces
Um teco-teco no ar
Tico-tico, quando cantas
Me lembro da minha infância
Feriado em Paquetá
Tico-tico, tão arisco
Tico-tico, tu beliscas
Uns grãozinhos de fubá
Tico-tico, me perdoa
Mas me vem uma vontade
Não posso me segurar

Matador de passarinho
Matador de passarinho
Matador de passarinho
Matador de passarinho

Beija-flor, de flor em flor
Beija-flor, tu és o rei
Beija-flor, te quero bem
Beija-flor, se tu soubesses
Beija-flor, ah! Se eu pudesse
Beijaria flor também
Beija-flor, tu vais levando
Numa nuvem cor-de-rosa
Grãos de pólen para quem?
Beija-flor, tu és tão lindo
Mas chegou a tua hora
Não beijarás mais ninguém

Matador de passarinho
Matador de passarinho
Matador de passarinho
Matador de passarinho

Dedo no cu é o seu nome, mora no canavial
Gritaria é um assombro, tem a voz dos carnavais
Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria

Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria

Dedo no cu é o seu nome, canta no canavial
Gritaria é um assombro, tem a voz dos carnavais
Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria

Quando eles se encontram, fazem o povo suspirar
É uma dupla sertaneja, que acabou de chegar

Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria
Dedo no cu e gritaria



Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
E apesar de tudo é tão comovente,
A verdade explode na cara da gente,
A verdade é crua, a verdade é nua,
A verdade torce e a verdade estupra.
A verdade é puta, a verdade é puta,
A verdade trai e nem se incomoda.
A verdade grita em poucas palavras,
A verdade arde, a verdade arde:

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.

Então era isso o surpreendente,
Era tão óbvio, tão evidente.
Tava na cara, tava nos modos,
Tava na forma e era o bom senso.
Então era isso, eu ia pensando,
A mídia gritava: mentira, mentira.
Mas eu não ligava e prosseguia
Tranqüilo e fodido
Eu ia dizendo:

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.

Decifra o enigma que eu te proponho,
O x do problema, a minha equação.
A linha de fuga, a minha miragem,
O meu oriente e o grandes sertões.
Decifre o enigma, ando sozinho,
Eu tô mais distante do que mil japões.
Alô MAL VAL
Eu continuo tanquilo e sereno seguindo a canção:

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlos tem perna-de-pau.

Então era essa a melodia
Que te pertuba os ouvidos moucos?
Último gesto, a saideira,
O canto-do-cisne, a minha canção.
Então era essa a melodia
Que te pertuba a noite de sono?
Meu semelhante, meu companheiro,
Meu cumpadi, meu irmão.

Chico Xavier é viado, Roberto Carlos tem perna-de-pau.
Chico Xavier é viado, Roberto Carlo tem perna-de-pau.

E apesar de tudo é tão comovente.
A verdade explode na cara da gente.
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir


Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
É que o Mário Covas já morreu
Ana Maria Braga tá morrendo
e eu também um dia vou morrer
De quê?

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Mario Covas, Câncer no cú
Ana Maria Braga, Câncer no cú
Rogério Skylab, Câncer no cú
Câncer no cú
Câncer no cú
Câncer no cú ô

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Qual a semelhança entre eu, Ana Maria Braga e Mario Covas?
Qual a semelhança entre eu, Ana Maria Braga e Mario Covas?

Perdemos a vontade de cagar
Perdemos a vontade de cagar
Perdemos a vontade de cagar
E aquela bolsinha de plástico, por quê?

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Mario Covas, Câncer no cú
Ana Maria Braga, Câncer no cú
Rogério Skylab, Câncer no cú
Câncer no cú
Câncer no cú
Câncer no cú ô

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
Qual a diferença entre eu, Ana Maria Braga e Mario Covas?
É que o Mário Covas já morreu
Ana Maria Braga tá chorando
e eu tô com vontade de cantar
O quê?

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú

Mario Covas, Câncer no cú
Ana Maria Braga, Câncer no cú
Rogério Skylab, Câncer no cú
Câncer no cú
Câncer no cú
Câncer no cú ô

Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú
Câncer no cú, Câncer no cú


Páginas de um livro que nunca foi lido
Num banco da praça
Nomes de guerra, corpo na cama
Dólar falso
O quarto dela não tem janela
Flores de plástico
É tudo junto e misturado
Casaco de visom
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)

Flor de cacto, gilete azul
Arco-íris
Cachorrinho de pelúcia
Oncinha pintada, coelhinho peludo
Uma lança no escuro
O olho do cu no meio do mundo
Quem serei eu? Quem será ela?
Razão e ficção
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)

Já ia me esquecendo
Os adornos e os gestos
Com que se reveste
O seu mistério, as suas plumas, as suas pérolas
Todos os seus versos
A flor do laço, as quimeras
Anel de diamante, rubi encravado
Pulseira de ouro
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)
E bocetinha de cocô (oh, oh, oh)



Por isso tá tudo ruim,
A infidelidade, oh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão,
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
No início eu tinha pressão alta.
Urubu, meu companheiro,
Eu compus um blue cheio de dor pra gente rir.
Então olho pra vitrola,
Depois olho pro relógio,
Depois olho pro espelho,
Então eu fico pensando:
Quanto pior, melhor.
Quanto pior, melhor.
Abri a geladeira do IML,
Meu bem, eu te conheci na CTI.
Ela tinha 8 anos,
O seu nome era Alice,
Levei-a pro meu quarto,
Ofereci chocolate.
Yoga é o caralho !!!
Mestre de Rose é o caralho !!!!
E Getúlio respondeu: a lei, a lei, lei
Quanto pior melhor,
Quanto pior melhor.
Por isso tá tudo ruim,
A infidelidade, óh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão.
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

Por isso tá tudo ruim,
A infidelidade, oh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão,
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
No início eu tinha pressão alta.
Urubu, meu companheiro,
Eu compus um blue cheio de dor pra gente rir.
Então olho pra vitrola,
Depois olho pro relógio,
Depois olho pro espelho,
Então eu fico pensando:
Quanto pior, melhor.
Quanto pior, melhor.
Abri a geladeira do IML,
Meu bem, eu te conheci na CTI.
Ela tinha 8 anos,
O seu nome era Alice,
Levei-a pro meu quarto,
Ofereci chocolate.
Yoga é o caralho !!!
Mestre de Rose é o caralho !!!!
E Getúlio respondeu: a lei, a lei, lei
Quanto pior melhor,
Quanto pior melhor.
Por isso tá tudo ruim,
A infidelidade, óh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão.
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.

Por isso tá tudo ruim,
A infidelidade, oh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão,
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.
No início eu tinha pressão alta.
Urubu, meu companheiro,
Eu compus um blue cheio de dor pra gente rir.
Então olho pra vitrola,
Depois olho pro relógio,
Depois olho pro espelho,
Então eu fico pensando:
Quanto pior, melhor.
Quanto pior, melhor.
Abri a geladeira do IML,
Meu bem, eu te conheci na CTI.
Ela tinha 8 anos,
O seu nome era Alice,
Levei-a pro meu quarto,
Ofereci chocolate.
Yoga é o caralho !!!
Mestre de Rose é o caralho !!!!
E Getúlio respondeu: a lei, a lei, lei
Quanto pior melhor,
Quanto pior melhor.
Por isso tá tudo ruim,
A infidelidade, óh minha amiga,
Quisera tê-la no mar,
Eu não tenho money, eu não tenho amor,
Quando você vomita no meu tapete indiano,
Num céu de muito arranha-céus,
Parece que tudo carece de exatidão.
Você já foi à Bahia, nega? Não?
Então foda-se.
Quanto pior, melhor.
Quanto pior, melhor.



Aí meu, aí meu, tem cigarro aí?
Cigarro? Tem cigarro aí?
Gente boa, gente boa, tem cigarro aí?
Cigarro? Tem cigarro aí?

Aí véi, aí véi, tem cigarro aí?
Cigarro? Tem cigarro aí?
Terezinha tem cigarro aí?
Cigarro? Tem cigarro aí?

Tia, tia, tem cigarro aí?
Cigarro? Tem cigarro aí?
Fala, mestre tem cigarro aí?
Cigarro? Tem cigarro aí?

Fala, comandante tem cigarro aí?
Cigarro? Tem cigarro aí?
Bom dia tem cigarro aí?
Cigarro, tem cigarro aí?

Ei moço, você gosta de poesia? Não?
Tem cigarro aí?
Cigarro? Tem cigarro aí?

Você ouvinte é a nossa meta
Pensando em você é que procuramos fazer o melhor
Domingo é dia de esporte
O domingo é nosso
Tem cigarro aí?
Cigarro tem cigarro aí?

Oh pai tem cigarro aí?
Cigarro, tem cigarro aí?

Se você amanheceu sem disposição, dor de cabeça
Azia, mal estar
Tem cigarro aí? Cigarro, tem cigarro aí?

Nós já vamos lhe atender
Espere só mais um pouquinho
Anote o número do protocolo
Tem cigarro aí? Cigarro, tem cigarro aí?

Ah, que pena, eu não posso falar com você agora
Mas não fique chateada
Assim que eu puder, eu ligo de volta pra você
É só deixar nome e telefone
É só deixar cigarro
Tem cigarro aí?
Cigarro? Tem cigarro aí?

E Jesus chegou para Lázaro
E ordenou: Levanta-te
E Lázaro, dentro da sepultura
Abriu os zoi devagarzinho
Pensou em Barbacena e falou
Tem cigarro aí? Cigarro? Tem cigarro aí?

Tem cigarro aí, porra?
Adicionar à playlist
Tamanho
Cifra
Imprimir
Corrigir

Você vai ao samba
Uma cabrocha: Só no sapatinho
Gostosa!
No final das contas vocês vão pro Motel
Transam a noite inteirinha
Trinta dias depois, ela volta grávida
E quer ter o filho
Conclusão: Você pagar pensão pro resto da sua vida
Ela te ama?
Não!
O quê que ela é então?
Puta, é puta!

Mas você insiste
Não entrega os pontos
Vai ao Shopping, quer comprar uma calça Lee
Uma vendedora vem ao seu encontro
E te trata pelo nome, como se vocês fossem íntimos
Gostosa!
E sensual, provocante
Você não enxerga mais nada
Compra calça, cueca, meia, sapato
Conclusão: Ela é uma vendedora?
Não!
O quê que ela é então?
Puta, é puta!

Cidade do Rio de Janeiro
Zona sul, garota de Ipanema
Gostosa!
Você quer morar lá
Tem money? Não
Então, não pode não
Conclusão: Essa cidade te ama?
Não!
O quê que ela é então?
Puta, é puta!

Calma, quê isso?
Você tá tão revoltado, disse a psicanalista diante do meu delírio
É que todas as coisas que eu via, criança, fábrica, escola
Todas elas pareciam putas
Trinta minutos depois, eu paguei a consulta
E voltei sozinho pra casa
Com aquela sensação
Puta, é puta!

O Sol já vai nascer
Acho que o mundo é bom
Só queria saber, menina
Menina, qual é a voz do cu?
Qual é a voz do cu, menina?
Qual é a voz do cu?

Sei que tá tudo bem
A gente é até feliz
Só queria saber, menina
Menina, qual é a voz do cu?
Qual é a voz do cu, menina?
Qual é a voz do cu?

Difícil perceber
Mas ela está aqui
Só queria saber, menina
Menina, qual é a voz do cu?
Qual é a voz do cu, menina?
Qual é a voz do cu?

Você é feia
É feia pra caralho
É feia pra caralho
É feia pra caralho

É pobre
Mora na rua
É perigosa
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

É perigosa
É paranóica
Porra-louca
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

Quer um conselho?
Entra no banheiro
Fecha bem a porta
Tampa o basculante
E liga o gás

É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

Está com AIDS
É paranóica
Porra-louca
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho
É feia pra caralho

Lívia, ô ô Lívia, Lívia, all my life
Se não tivesse atirado ainda estaria aqui
Livia’s gone, ô ô Livia’s gone
Eu fui pra Memphis, foi lá que a conheci
Na sala da tua casa, Lívia, aonde te prendi
Lívia, ô ô Lívia
Lívia tão fria, há mil milhas de mim
Naquele dia o mal me fez querer em vão o fim
Lívia, ô ô Lívia
O primeiro tiro a fez tanto sofrer
Mas o segundo tão certeiro fez Lívia partir
Lívia, ô ô Lívia
O carcereiro, não posso dormir
Tudo em minha volta ouço vozes, Lívia ri
Lívia, ô ô Lívia
Se a tua companheira é igual a minha
Tu podes abandoná-la ou trazê-la junto a ti
Lívia, ô ô, Lívia
Lívia, ô ô Lívia, Livia, all my life
Se não tivessem atirado ainda estaria aqui
Livia’s gone, ô ô, Livia’s gone


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
