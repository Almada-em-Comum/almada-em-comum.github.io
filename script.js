class Candidate {
  #name;
  #age;
  #institution;
  #party;
  #profession;
  #bio;
  #landscapePhotoPath;
  #portraitPhotoPath;

  constructor(name, age, institution, party, profession, bio,
              portraitPhotoPath, landscapePhotoPath) {
    this.#name = name;
    this.#age = age;
    this.#institution = institution;
    this.#party = party;
    this.#profession = profession;
    this.#bio = bio
    this.#portraitPhotoPath = portraitPhotoPath;
    this.#landscapePhotoPath = landscapePhotoPath;
  }

  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }

  get institution() {
    return this.#institution;
  }

  get party() {
    return this.#party;
  }

  get profession() {
    return this.#profession;
  }

  get bio() {
    return this.#bio;
  }

  get landscapePhotoPath() {
    return this.#landscapePhotoPath;
  }

  get portraitPhotoPath() {
    return this.#portraitPhotoPath;
  }
}

const bioSLAlves = `Sou filho da cidade de Almada; nascido, criado, educado em
Almada, e nunca daqui sai, como a maior parte dos jovens da minha geração.
Continuo a viver e a trabalhar em Almada, no centro, casa comprada, pratico
voluntariado e desporto nas instituições Almadenses, padrinho de uma das
marchas populares. Além de professor, sou cantor e ator profissional.

Nos últimos anos tenho visto Almada a perder o seu potencial, o poder a ser
monopolizado, sendo que, perante também o avanço da direita e da extrema-
direita no panorama nacional, é necessário agir, posicionarmo-nos e fazer algo
pela Democracia. É preciso defender a educação como base para que a Democracia
não se escape por entre os dedos, esse é um dos alicerces mais essenciais para
conter o avanço dos totalitarismos.`;

const bioSCunha = `Socióloga, doutoranda em Estudos de Género na Faculdade de
Ciências Sociais e Humanas – UNL, é investigadora no Observatório do Racismo e
Xenofobia da Faculdade de Direito da Universidade Nova de Lisboa.

Filha de emigrantes, nasceu em França e regressou a Portugal com 7 anos. Cresceu e
estudou no concelho de Almada onde continua a residir. Passou pela escola
primária de Vale de Figueira na Sobreda da Caparica, agora Escola Básica
Miquelina Pombo e pela escola Básica Elias Garcia. Estreou a escola Daniel
Sampaio e fez o secundário na Emídio Navarro.

Feminista convicta, é sócia fundadora da FEM - Feministas em Movimento,
associação com sede no concelho de Almada e membro do conselho consultivo da
Associação de proteção à infância Meninos do Mundo. Foi professora de Análise
Qualitativa de Dados no Instituto Superior de Economia e Gestão – IUL entre
2013 e 2016. Filiada no Bloco de Esquerda desde a sua fundação, é membro da
Coordenadora Distrital de Setúbal e da Comissão de Direitos do partido. Foi
deputada à Assembleia da República entre 2015 e 2021.`;

const bioJOliveira = `Nasceu no Brasil e vive em Almada desde 2001. Com um
longo percurso no associativismo cultural local, foi lá que começou a sua
formação artística. Foi também através do movimento teatral e associativo em
Almada que iniciou a sua participação cívica e política local, defendendo o
associativismo como essencial ao desenvolvimento cultural e democrático do
concelho.

Como ator, trabalhou, em Almada, com o Teatro Extremo, Ninho de Víboras, O
Grito, entre outras; trabalhou ainda com os Artistas Unidos. Contribuiu para o
livro Cidade do Teatro com o estudo do público da 17ª e 18ª edições da Mostra
de Teatro de Almada, festival no qual participou e colaborou na sua realização
ao longo de vários anos. Nos anos mais recentes, foi professor em Setúbal.

É membro da Coordenadora Concelhia do Bloco de Esquerda de Almada,
desempenhando também funções de vereador em substituição na Câmara Municipal.`;

const bioGFernandes = `Nasci em Divinópolis, Minas Gerais. Vivo em Portugal há
17 anos. Sou formada em Direito pela Universidade Autónoma de Lisboa e também
em Estudos Artísticos, Variante de Artes e Culturas Comparadas pela
Universidade de Letras da Universidade de Lisboa.

Caros concidadãos e concidadãs, é com esperança que apresento a minha
candidatura à Assembleia Municipal de Almada. Em contraposição ao discurso
populista e anti-imigração de grupos nacionalistas, que se alimentam do medo e
da desinformação para espalhar as suas ideias, proponho uma visão de união e
progresso para o nosso futuro coletivo.

Apresento-me com o desejo de tornar visíveis as pessoas que permanecem
invisíveis em Almada, não apenas nas estatísticas, mas na realidade quotidiana
que as afeta. Candidato-me com a determinação de estender as mãos, arregaçar
as mangas e trabalhar em prol do bem comum, especialmente num momento em que o
mundo exigirá de todos nós, que acreditamos na liberdade, o nosso compromisso.

Nunca imaginei que a humanidade seria novamente arrastada pela intolerância e
pelo medo — esse sentimento avassalador que leva as pessoas a cometerem
barbaridades. Os discursos populistas buscam dividir as pessoas, criando uma
barreira entre o “nós” e o “eles”, desmantelando os sentimentos nobres que
todos carregamos em nosso interior. Isso é, além de perigoso, uma armadilha
daqueles e daquelas que buscam o poder. E essa dinâmica acontece,
principalmente, numa escala local, pois é nas interações pessoais e no dia-a-
dia das pessoas que a extrema-direita consegue conquistar espaço.

Almada, composta por diferentes grupos étnicos e culturais, precisará
de pessoas comprometidas com a proteção e valorização dos direitos
fundamentais e humanos — confesso-vos que nunca imaginei escrever que os
direitos humanos precisam ser valorizados, mas os grupos xenófobos,
homofóbicos e nacionalistas conseguiram deturpar também o que são os direitos
humanos, colocando em risco direitos adquiridos que servem a todos nós.

A Assembleia Municipal de Almada precisará de pessoas empenhadas na denúncia e
proteção desses direitos, bem como pessoas empenhadas no bem-estar social, na
proteção do meio ambiente e dos animais deste município. Gostaria de fazer
parte disso. Não vos posso esconder as minhas motivações para esta candidatura
que, sem ilusões ou romantismo sobre a realidade que enfrentamos, é, acima de
tudo, feita em defesa da natureza, da liberdade, da igualdade e dos direitos
humanos. Serei mais uma voz, mais um voto, mais uma mente dedicada à luta pela
dignidade humana — onde quer que seja necessária.`;

const bioFDalva = `Licenciado em Ciência Política e Relações Internacionais e
Pós Graduado em Defesa e Segurança. Vive no concelho de almada há 24 anos e é
um defensor nato das minorias e preocupado com integração total dos mesmos na
sociedade. Autarca desde 2017 na Assembleia da União das Freguesias da
Caparica e Trafaria.`;

const bioMFreitas = `Nasci, cresci e vivi sempre em Almada, na Cova da Piedade. É
na margem certa que estudo, frequentando o Mestrado em Genética Molecular e
Biomedicina na NOVA FCT, onde também tenho a minha atividade associativa
abraçada à ecologia e à comunidade no Núcleo de Ambiente e Sustentabilidade, do
qual fui dirigente no último ano. Tenho contribuído para as movimentações da
plataforma Casa Para Viver no distrito de Setúbal como forma de luta contra a
crise da habitação. Também tenho um passado ligado ao desporto local como exímio
aquecedor de bancos no quase centenário Clube Recreativo Piedense.

Acredito que a ação política é feita no terreno e junto da comunidade, cara a
cara, sendo membro do atual Grupo de Coordenação Local do LIVRE Almada. É com
esta bagagem de experiência e presença no terreno, aliada a novas ideias, que
assumo este compromisso de construir uma Almada, Cova da Piedade, Pragal e
Cacilhas mais participada, viva e verde.`;

const bioTLiberato = `O meu caminho tem seguido as correntes do Tejo, da vila
ribatejana, às praias de Oeiras e, de há 4 anos para cá, na margem sul. Sou
licenciada em Ciência Política e Relações Internacionais pela NOVA FCSH e fui
membro do Núcleo de Estudos de Ciência Política e Relações Internacionais, que
tinha um importante papel na dinamização de eventos para a comunidade estudantil.
Neste momento, sou mestranda em Gestão na NOVA SBE, estando a terminar a minha
tese académica.

Na minha vida profissional, tenho recentemente estado ligada a projetos de apoio
ao setor empresarial, nas áreas de inovação, empreendedorismo e
internacionalização.

Nestas Eleições Autárquicas, a minha participação cívico-política assume um novo
compromisso com o território que me acolheu há 4 anos, para ajudar a construir o
destino de freguesias mais solidárias, saudáveis, verdes e ecológicas.`;

const bioJPinto = `Exerço funções de Gestor de Produto na MEO e centra a minha
atividade política na área autárquica e laboral. Sou coordenador da Comissão
de Trabalhadores da MEO e dirigente local do Bloco de Esquerda.

Oito anos de compromisso com a freguesia! Ao longo de dois mandatos na
Assembleia de Freguesia da Charneca de Caparica e Sobreda, desde 2017, mantive-
me firme no compromisso com quem confiou no Bloco de Esquerda.

Nunca me desresponsabilizei. Não fui oposição por oposição. Votei sempre em
consciência. Ao longo dos anos, analisei e tomei posição sobre todos os
orçamentos e planos de atividades apresentados pela Junta, sempre com sentido
de responsabilidade. Apoiei o que era positivo para a freguesia, viesse de que
força política viesse; combati o que achei insuficiente ou errado; e
apresentei propostas alternativas sempre que possível para melhorar a vida na
freguesia.

Nestes anos, tentei contribuir para decisões mais justas, alertar para
problemas ignorados, defender causas sociais, ambientais e culturais. Acredito
que ajudei a dar voz a quem mais precisa de ser ouvido. Sei que fiz coisas
boas pela União de Freguesias — talvez pequenas aos olhos de alguns, mas com
impacto real na vida de quem cá vive.

Lamento que o sentido de urgência da Junta, tantas vezes chamado à atenção,
tenha ficado aquém das necessidades da população. Mas nunca me resignei.
Estive presente, atento, disponível. Fiscalizei, questionei, propus. Defendi
causas sociais, ambientais e culturais, e alertei para a falta de urgência da
Junta em áreas críticas.

Nunca deixei de acreditar que a política local deve ser feita com
transparência e proximidade. É por todos os que acreditam que a política local
deve ser feita com seriedade - e que os políticos não são todos iguais - que
continuo disponível para dar o meu melhor.

A 12 de outubro, voltamos a ter uma escolha importante. Mais do que listas,
escolhemos que democracia queremos construir: distante ou participativa,
fechada ou aberta à população. Com a coligação Almada em Comum (Bloco de
Esquerda + LIVRE), estamos prontos para continuar a dar voz a quem cá vive.
Porque sim - a política local conta. E, faz mesmo a diferença!`;

const bioJSales = `Trabalha como técnica superior coordenadora de projectos
sociais, nacionais e europeus, é coordenadora do Centro de Cultura e
Intervenção Feminista da cidade de Lisboa e ativista e dirigente associativa
dos direitos das mulheres. Pós-graduada em Estudos sobre as Mulheres, as
Mulheres na Sociedade e na Cultura pela FCSH-UNL, tem o Curso de
Especialização em Igualdade de Género pelo ISCSPUL. Participou como
representante portuguesa em encontros internacionais de mulheres realizados em
países como Cabo-Verde, França, Egipto e Jordânia. Dirigente local do Bloco de
Esquerda e autarca de longa data, sendo eleita na Assembleia de Freguesia da
Costa da Caparica desde 2017.`

const candidateSLAlves = new Candidate(
  "Sérgio Lourosa Alves",
  39,
  "Câmara Municipal de Almada",
  "LIVRE",
  "Professor, Músico",
  bioSLAlves,
  "candidate-s-alves-3-4-clean.jpg",
  "candidate-s-alves-16-9-clean.jpg"
)

const candidateSCunha = new Candidate(
  "Sandra Cunha",
  52,
  "Câmara Municipal de Almada",
  "Bloco de Esquerda",
  "Socióloga",
  bioSCunha,
  "candidate-s-cunha-3-4-clean.png",
  "candidate-s-cunha-16-9-clean.png"
)

const candidateGFernandes = new Candidate(
  "Geizy Fernandes",
  41,
  "Assembleia Municipal de Almada",
  "LIVRE",
  "Assessora de Comunicação e Direitos Humanos",
  bioGFernandes,
  "candidate-g-fernandes-3-4-clean.jpg",
  "candidate-g-fernandes-16-9-clean.jpg"
)

const candidateJOliveira = new Candidate(
  "Jefferson Oliveira",
  34,
  "Assembleia Municipal de Almada",
  "Bloco de Esquerda",
  "Professor, Ator",
  bioJOliveira,
  "candidate-j-oliveira-3-4-clean.jpg",
  "candidate-j-oliveira-16-9-clean.jpg"
)

const candidateFDalva = new Candidate(
  "Fausto D'Alva",
  56,
  "Assembleia de Freguesia da UF de Caparica e Trafaria",
  "Bloco de Esquerda",
  "Politólogo",
  bioFDalva,
  "candidate-f-dalva-3-4-clean.jpg",
  "candidate-f-dalva-16-9-clean.jpg"
)

const candidateMFreitas = new Candidate(
  "Martim de Freitas",
  22,
  "Assembleia da de Freguesia UF de Almada, Cova da Piedade, Pragal e Cacilhas",
  "LIVRE",
  "Estudante",
  bioMFreitas,
  "candidate-m-freitas-3-4-clean.jpg",
  "candidate-m-freitas-16-9-clean.jpg"
)

const candidateTLiberato = new Candidate(
  "Tânia Liberato",
  25,
  "Assembleia de Freguesia da UF de Laranjeiro e Feijó",
  "LIVRE",
  "Estudante",
  bioTLiberato,
  "candidate-t-liberato-3-4-clean.jpg",
  "candidate-t-liberato-16-9-clean.jpg"
)

const candidateJPinto = new Candidate(
  "Jorge Pinto",
  53,
  "Assembleia de Freguesia da UF de Charneca da Caparica e Sobreda",
  "Bloco de Esquerda",
  "Gestor de Produto, Coordenador da Comissão de Trabalhadores da Altice",
  bioJPinto,
  "candidate-j-pinto-3-4-clean.jpg",
  "candidate-j-pinto-16-9-clean.jpg"
)

const candidateJSales = new Candidate(
  "Joana Sales",
  44,
  "Assembleia de Freguesia de Costa da Caparica",
  "Bloco de Esquerda",
  "Coordenadora de projetos sociais, Dirigente associativa feminista",
  bioJSales,
  "candidate-j-sales-3-4-clean.jpg",
  "candidate-j-sales-16-9-clean.jpg"
)

const candidateLCGomes = new Candidate(
  "Luísa Costa Gomes",
  71,
  "Mandatária Política",
  "Sem Partido",
  "Escritora, Dramaturga",
  "",
  "candidate-lc-gomes-3-4-clean.jpg",
  "candidate-lc-gomes-3-4-clean.jpg"
)

const candidatesMap = {
  "s-alves": candidateSLAlves,
  "s-cunha": candidateSCunha,
  "g-fernandes": candidateGFernandes,
  "j-oliveira": candidateJOliveira,
  "f-dalva": candidateFDalva,
  "m-freitas": candidateMFreitas,
  "t-liberato": candidateTLiberato,
  "j-pinto": candidateJPinto,
  "j-sales": candidateJSales,
  "lc-gomes": candidateLCGomes
}

const candidateBtns = document.querySelectorAll(
  "#candidates-dropdown a.dropdown-item")

function changeCandidate(event) {
  const selectedCandidate = candidatesMap[event.target.dataset.candidate]

  const candidateBioEl = document.getElementById("candidate-bio")
  candidateBioEl.innerHTML = ""
  const paragraphList = selectedCandidate.bio.split("\n\n")
  for (let paragraph of paragraphList) {
    const trimmedParagraph = paragraph.replaceAll("\n", " ")
    const pNode = document.createElement("p")
    pNode.innerText = trimmedParagraph
    candidateBioEl.appendChild(pNode)
  }

  const candidateProfessionAgeEl = document
        .getElementById("candidate-profession-age")
  candidateProfessionAgeEl.innerText = selectedCandidate.profession + ", " +
    selectedCandidate.age + " anos"

  const candidateDropdownBtnEl = document.querySelector(
    "#candidate-selection-dropdown > button.dropdown-toggle")
  candidateDropdownBtnEl.innerText = selectedCandidate.name

  const candidateInstitution = document
        .getElementById("candidate-party-institution")
  switch (event.target.dataset.candidate) {
    case "s-cunha":
    case "g-fernandes":
    case "t-liberato":
    case "j-sales":
      candidateInstitution.innerText = "Candidata à " +
        selectedCandidate.institution
      break
    case "lc-gomes":
      candidateInstitution.innerText = selectedCandidate.institution
      break
    default:
      candidateInstitution.innerText = "Candidato à " +
        selectedCandidate.institution
  }

  updateCandidatePictureElement(selectedCandidate)
}

function reflowNarrowScreen() {
  const pageTitleEl = document.getElementsByClassName("page-title")[0]
  const contentBoardEl = document.getElementById("content-board")
  const headerLogosEl = document.getElementsByClassName("logos")[0]
  const candidatePhotoEl = document
        .getElementById("candidate-picture")
  const dropdownHeaders = document.getElementsByClassName("dropdown-header")
  const bannerEl = document.getElementById("banner")

  let elementsToReflow = [
    pageTitleEl,
    contentBoardEl,
    headerLogosEl,
    candidatePhotoEl
  ]
  for (let header of dropdownHeaders) {
    elementsToReflow.push(header)
  }

  if (window.innerWidth <= 576) {
    for (let element of elementsToReflow) {
      element.classList.add("narrow-screen")
    }
    bannerEl.src = "assets/banner-clean-portrait.jpg"
  } else {
    for (let element of elementsToReflow) {
      element.classList.remove("narrow-screen")
    }
    bannerEl.src = "assets/banner-clean-wide.jpg"
  }
}

function updateCandidatePictureElement(candidate) {
  const candidateImgEl = document.getElementById("candidate-picture")

  candidateImgEl.alt = "Fotografia do candidato " + candidate.name

  if (window.innerWidth <= 576) {
    candidateImgEl.src = "assets/" + candidate.portraitPhotoPath
  } else {
    candidateImgEl.src = "assets/" + candidate.landscapePhotoPath
  }
}

function main() {
  for (let btn of candidateBtns) {
    btn.addEventListener("click", changeCandidate)
  }

  reflowNarrowScreen()
  window.addEventListener("resize", reflowNarrowScreen)

  updateCandidatePictureElement(candidateSLAlves)
}

main()
