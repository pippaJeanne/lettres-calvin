const persons = [
  {
    name: "Curé anonyme",
    wikiurl: "",
    thumbnail: "",
    desc: "",
    letters: [
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      }
    ],
    id: "#cure"
  },
  {
    name: "Consistoire de Neuchâtel",
    wikiurl: "http://www.wikidata.org/entity/Q131694038",
    thumbnail: "",
    desc: "Conseil ecclésiastique du canton de Neuchâtel du XVIe au XVIIIe siècle",
    letters: [
      {
        slug: "1541_09_29_SeigneursNeuchatel",
        date: " 29 septembre 1541",
        headline: "Seigneurs de Neuchâtel"
      }
    ],
    id: "#conseil-neuchatel"
  },
  {
    name: "Louis du Tillet",
    wikiurl: "http://www.wikidata.org/entity/Q3263586",
    thumbnail: "",
    desc: "prêtre catholique français",
    letters: [
      {
        slug: "1538_01_LouisduTillet",
        date: "31 janvier 1538",
        headline: "Louis du Tillet"
      },
      {
        slug: "1538_07_10_LuoisDuTillets",
        date: "10 juillet 1538",
        headline: "Louis du Tillet"
      }
    ],
    id: "#louis-tilletz"
  },
  {
    name: "Wolfgang Fabricius Köpfel Capiton (1478 - 1541)",
    wikiurl: "http://www.wikidata.org/entity/Q1368362",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/WolfgangCapito.jpg",
    desc: "réformateur et théologien alsacien (1478-1541)",
    letters: [
      {
        slug: "1538_01_LouisduTillet",
        date: "31 janvier 1538",
        headline: "Louis du Tillet"
      },
      {
        slug: "1538_07_10_LuoisDuTillets",
        date: "10 juillet 1538",
        headline: "Louis du Tillet"
      },
      {
        slug: "1541_10_DuchesseFerrare",
        date: "[octobre 1541]",
        headline: "Duchesse de Ferrare"
      }
    ],
    id: "#capiton"
  },
  {
    name: "Martin Bucer (1491 - 1551)",
    wikiurl: "http://www.wikidata.org/entity/Q318622",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Martin%20Buzer%20%28Bucer%29.jpg",
    desc: "Réformateur protestant alsacien",
    letters: [
      {
        slug: "1538_01_LouisduTillet",
        date: "31 janvier 1538",
        headline: "Louis du Tillet"
      },
      {
        slug: "1538_07_10_LuoisDuTillets",
        date: "10 juillet 1538",
        headline: "Louis du Tillet"
      }
    ],
    id: "#bucer"
  },
  {
    name: "Jean du Tillet",
    wikiurl: "http://www.wikidata.org/entity/Q3175826",
    thumbnail: "",
    desc: "Évêque de Saint-Brieuc et Meaux",
    letters: [
      {
        slug: "1538_01_LouisduTillet",
        date: "31 janvier 1538",
        headline: "Louis du Tillet"
      },
      {
        slug: "1538_07_10_LuoisDuTillets",
        date: "10 juillet 1538",
        headline: "Louis du Tillet"
      }
    ],
    id: "#jehan"
  },
  {
    name: "Guillaume Farel (1489 - 1565)",
    wikiurl: "http://www.wikidata.org/entity/Q435456",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/William-Farel.jpg",
    desc: "réformateur d'origine dauphinoise en Suisse romande",
    letters: [
      {
        slug: "1538_01_LouisduTillet",
        date: "31 janvier 1538",
        headline: "Louis du Tillet"
      },
      {
        slug: "1541_09_29_SeigneursNeuchatel",
        date: " 29 septembre 1541",
        headline: "Seigneurs de Neuchâtel"
      }
    ],
    id: "#farel"
  },
  {
    name: "Renée de France (1510 - 1574)",
    wikiurl: "http://www.wikidata.org/entity/Q235841",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Renee%20de%20france.jpg",
    desc: "aristocrate française",
    letters: [
      {
        slug: "1541_10_DuchesseFerrare",
        date: "[octobre 1541]",
        headline: "Duchesse de Ferrare"
      }
    ],
    id: "#renee-de-france"
  },
  {
    name: "Sébastien Castellion (1515 - 1563)",
    wikiurl: "http://www.wikidata.org/entity/Q919119",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/SebastianCastellio.jpg",
    desc: "Humaniste, bibliste et théologien protestant français",
    letters: [
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      },
      {
        slug: "1552_Monsieur-deFalais",
        date: "[1552]",
        headline: "Monsieur de Fallais"
      }
    ],
    id: "#castalion"
  },
  {
    name: "Consistoire de Genève",
    wikiurl: "http://www.wikidata.org/entity/Q2994627",
    thumbnail: "",
    desc: "Conseil ecclésiastique suisse du XVIe, XVIIe et XVIIIe siècles",
    letters: [
      {
        slug: "1541_02_19_SeigneursGeneve",
        date: " 19 février 1541",
        headline: "Seigneurs de Genève"
      },
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      },
      {
        slug: "1552_10_06_SeigeursDeGeneve",
        date: "[6 octobre 1552]",
        headline: "Seigneurs de Genève"
      }
    ],
    id: "#conseil-geneve"
  },
  {
    name: "Pierre Viret (1511 - 1571)",
    wikiurl: "http://www.wikidata.org/entity/Q123337",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/PierreViret.jpg",
    desc: "Réformateur vaudois",
    letters: [
      {
        slug: "1541_02_19_SeigneursGeneve",
        date: " 19 février 1541",
        headline: "Seigneurs de Genève"
      },
      {
        slug: "1541_09_29_SeigneursNeuchatel",
        date: " 29 septembre 1541",
        headline: "Seigneurs de Neuchâtel"
      },
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      }
    ],
    id: "#pierre"
  },
  {
    name: "Anne de Parthenay",
    wikiurl: "http://www.wikidata.org/entity/Q99539414",
    thumbnail: "",
    desc: "aristocrate française et érudite qui a été associée à Calvin, dame de compagnie de la duchesse d'Este",
    letters: [
      {
        slug: "1541_10_DuchesseFerrare",
        date: "[octobre 1541]",
        headline: "Duchesse de Ferrare"
      }
    ],
    id: "#annePartenay"
  },
  {
    name: "Charles d'Espeville",
    wikiurl: "http://www.wikidata.org/entity/Q133821751",
    thumbnail: "",
    desc: "Pseudonyme adopté par Calvin durant sa retraite à Angoulême et son voyage en Italie (1534, 1536)",
    letters: [
      {
        slug: "1538_01_LouisduTillet",
        date: "31 janvier 1538",
        headline: "Louis du Tillet"
      },
      {
        slug: "1538_07_10_LuoisDuTillets",
        date: "10 juillet 1538",
        headline: "Louis du Tillet"
      },
      {
        slug: "1543_10_14_MadameDeFalais",
        date: "14 octobre (1543)",
        headline: "Madame de Fallais"
      },
      {
        slug: "1543_10_14_MonsieurFalais",
        date: "[14 octobre 1543]",
        headline: "Monsieur de Fallais"
      },
      {
        slug: "1543_fin_MFalais",
        date: "[fin 1543]",
        headline: "Monsieur de Fallais"
      },
      {
        slug: "1544_06_24_MmeDeFalais",
        date: "24 juin (1544)",
        headline: "Madame de Fallais"
      },
      {
        slug: "1546_01_20_MadameDEBude",
        date: "[20 ** 1546]",
        headline: "Madame de Budé"
      }
    ],
    id: "#espeville"
  },
  {
    name: "Marie ( - 0100)",
    wikiurl: "http://www.wikidata.org/entity/Q345",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Duccio%20The-Madonna-and-Child-128.jpg",
    desc: "mère de Jésus de Nazareth",
    letters: [
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      }
    ],
    id: "#vierge_marie"
  },
  {
    name: "Yolande de Brederode",
    wikiurl: "http://www.wikidata.org/entity/Q56000839",
    thumbnail: "",
    desc: "aristocrate de la maison des comtes de Hollande et épouse de Jacques de Bourgogne",
    letters: [
      {
        slug: "1543_10_14_MadameDeFalais",
        date: "14 octobre (1543)",
        headline: "Madame de Fallais"
      },
      {
        slug: "1544_06_24_MmeDeFalais",
        date: "24 juin (1544)",
        headline: "Madame de Fallais"
      },
      {
        slug: "1552_Monsieur-deFalais",
        date: "[1552]",
        headline: "Monsieur de Fallais"
      }
    ],
    id: "#jolande_brederode"
  },
  {
    name: "Jérémie ( - )",
    wikiurl: "http://www.wikidata.org/entity/Q158825",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Michelangelo%20Buonarroti%20027%20detalle.jpg",
    desc: "prophète du Tanakh dans l'hébraïque ou de l'Ancien Testament pour les chrétiens",
    letters: [
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      }
    ],
    id: "#jeremie"
  },
  {
    name: "Pierre (0000 - 0065)",
    wikiurl: "http://www.wikidata.org/entity/Q33923",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Pope-peter%20pprubens.jpg",
    desc: "apôtre du Christ et premier pape de l'Église catholique",
    letters: [
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      }
    ],
    id: "#pierre"
  },
  {
    name: "Lactance (0240 - 0320)",
    wikiurl: "http://www.wikidata.org/entity/Q209102",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Lactantius.jpg",
    desc: "rhéteur et apologète chrétien",
    letters: [
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      }
    ],
    id: "#lactance"
  },
  {
    name: "Édouard VI d'Angleterre (1537 - 1553)",
    wikiurl: "http://www.wikidata.org/entity/Q83229",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Edward%20VI%20of%20England%20c.%201546.jpg",
    desc: "roi d'Angleterre de 1547 à 1553",
    letters: [
      {
        slug: "1553_03_12_RoiDAngleterre",
        date: "12 de mars 1553",
        headline: "roi d'Angleterre"
      }
    ],
    id: "#edouard-VI"
  },
  {
    name: "Antoine de Bourbon (1518 - 1562)",
    wikiurl: "http://www.wikidata.org/entity/Q310334",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Unknown%20-%20Portrait%20of%20Anthony%20of%20Bourbon%20%281518%E2%80%931562%29%2C%20King%20of%20Navarre%20-%20MNK%20XII-294%20-%20National%20Museum%20Krak%C3%B3w.jpg",
    desc: "roi consort de Navarre",
    letters: [
      {
        slug: "1553_03_12_RoiDAngleterre",
        date: "12 de mars 1553",
        headline: "roi d'Angleterre"
      }
    ],
    id: "#vendome"
  },
  {
    name: "Philippe Mélanchthon (1497 - 1560)",
    wikiurl: "http://www.wikidata.org/entity/Q76325",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/PhilippMelanchthon.jpg",
    desc: "Humaniste, philosophe et réformateur protestant allemand",
    letters: [
      {
        slug: "1552_10_06_SeigeursDeGeneve",
        date: "[6 octobre 1552]",
        headline: "Seigneurs de Genève"
      }
    ],
    id: "#melanchthon"
  },
  {
    name: "Augustin d’Hippone (0354 - 0430)",
    wikiurl: "http://www.wikidata.org/entity/Q8018",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Augustine%20Lateran.jpg",
    desc: "théologien, philosophe chrétien et évêque d’Afrique du Nord, saint et docteur de l’Église catholique",
    letters: [
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      }
    ],
    id: "#saint_augustin"
  },
  {
    name: "Paul de Tarse (0005 - 0066)",
    wikiurl: "http://www.wikidata.org/entity/Q9200",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Giovanni%20Francesco%20Barbieri%20-%20Saint%20Paul.jpg",
    desc: "apôtre et missionnaire des premiers chrétiens (vers 5 après J.-C. – vers 64/65)",
    letters: [
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      }
    ],
    id: "#paul"
  },
  {
    name: "Jacques de Bourgogne",
    wikiurl: "http://www.wikidata.org/entity/Q6120956",
    thumbnail: "",
    desc: "seigneur de Fallais et de Bréda en Brabant, noble flamand et correspondant de Calvin qui a initialement soutenu le réformateur",
    letters: [
      {
        slug: "1543_10_14_MonsieurFalais",
        date: "[14 octobre 1543]",
        headline: "Monsieur de Fallais"
      },
      {
        slug: "1543_fin_MFalais",
        date: "[fin 1543]",
        headline: "Monsieur de Fallais"
      },
      {
        slug: "1552_Monsieur-deFalais",
        date: "[1552]",
        headline: "Monsieur de Fallais"
      }
    ],
    id: "#jacques-bourgogne"
  },
  {
    name: "Roberte Le Lyeur",
    wikiurl: "http://www.wikidata.org/entity/Q108743308",
    thumbnail: "",
    desc: "épouse de Guillaume Budé",
    letters: [
      {
        slug: "1546_01_20_MadameDEBude",
        date: "[20 ** 1546]",
        headline: "Madame de Budé"
      }
    ],
    id: "#madame-bude"
  },
  {
    name: "Marie ( - 0048)",
    wikiurl: "http://www.wikidata.org/entity/Q345",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Duccio%20The-Madonna-and-Child-128.jpg",
    desc: "mère de Jésus de Nazareth",
    letters: [
      {
        slug: "1542_05_M_le_cureX",
        date: "[mai 1542]",
        headline: "Monsieur le curé"
      }
    ],
    id: "#vierge_marie"
  }
];
const persons_es = [
  {
    name: "Párroco anónimo",
    wikiurl: "",
    thumbnail: "",
    desc: "",
    letters: [
      {
        slug: "1542_05_Al_senor_cura",
        date: "[mayo de 1542]",
        headline: "Párroco anónimo"
      }
    ],
    id: "#cure"
  },
  {
    name: "Consistorio de Neuchâtel",
    wikiurl: "http://www.wikidata.org/entity/Q131694038",
    thumbnail: "",
    desc: "Consejo eclesiástico de Neuchâtel del siglo XVI al XVIII",
    letters: [
      {
        slug: "1541_09_29_senoresNeuchatel",
        date: " 29 de septiembre de 1541",
        headline: "A los señores de Neuchâtel"
      }
    ],
    id: "#conseil-neuchatel"
  },
  {
    name: "Louis de Tillet",
    wikiurl: "http://www.wikidata.org/entity/Q3263586",
    thumbnail: "",
    desc: "Sacerdote católico francés",
    letters: [
      {
        slug: "1538_01_LuisdeTillet",
        date: "31 de enero de 1538",
        headline: "Louis de Tillet"
      },
      {
        slug: "1538_07_10_LouisTillet",
        date: "10 de julio de 1538",
        headline: "Louis de Tillet"
      }
    ],
    id: "#louis-tilletz"
  },
  {
    name: "Wolfgang Capito (1478 - 1541)",
    wikiurl: "http://www.wikidata.org/entity/Q1368362",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/WolfgangCapito.jpg",
    desc: "reformador y teólogo alemán",
    letters: [
      {
        slug: "1538_01_LuisdeTillet",
        date: "31 de enero de 1538",
        headline: "Louis de Tillet"
      },
      {
        slug: "1538_07_10_LouisTillet",
        date: "10 de julio de 1538",
        headline: "Louis de Tillet"
      },
      {
        slug: "1541_10_duquesaFerrara",
        date: "[octubre 1541]",
        headline: "A la duquesa de Ferrara"
      }
    ],
    id: "#capiton"
  },
  {
    name: "Consistorio de Ginebra",
    wikiurl: "http://www.wikidata.org/entity/Q2994627",
    thumbnail: "",
    desc: "Consejo eclesiástico suizo vigente del siglo XVI al XVIII",
    letters: [
      {
        slug: "1541_02_19_senoresGinebra",
        date: " 19 de febrero de 1541",
        headline: "Señores de Ginebra"
      },
      {
        slug: "1542_05_Al_senor_cura",
        date: "[mayo de 1542]",
        headline: "Párroco anónimo"
      },
      {
        slug: "1552_10_06_SenoresDeGinebra",
        date: "[6 de octubre de 1552]",
        headline: "Señores de Ginebra"
      }
    ],
    id: "#conseil-geneve"
  },
  {
    name: "Renata de Francia (1510 - 1574)",
    wikiurl: "http://www.wikidata.org/entity/Q235841",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Renee%20de%20france.jpg",
    desc: "Aristócrata francesa",
    letters: [
      {
        slug: "1541_10_duquesaFerrara",
        date: "[octubre 1541]",
        headline: "A la duquesa de Ferrara"
      }
    ],
    id: "#renee-de-france"
  },
  {
    name: "Jeremías ( - )",
    wikiurl: "http://www.wikidata.org/entity/Q158825",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Michelangelo%20Buonarroti%20027%20detalle.jpg",
    desc: "personaje bíblico; profeta",
    letters: [
      {
        slug: "1542_05_Al_senor_cura",
        date: "[mayo de 1542]",
        headline: "Párroco anónimo"
      }
    ],
    id: "#jeremie"
  },
  {
    name: "Pierre Viret (1511 - 1571)",
    wikiurl: "http://www.wikidata.org/entity/Q123337",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/PierreViret.jpg",
    desc: "Teólogo suizo",
    letters: [
      {
        slug: "1541_02_19_senoresGinebra",
        date: " 19 de febrero de 1541",
        headline: "Señores de Ginebra"
      },
      {
        slug: "1541_09_29_senoresNeuchatel",
        date: " 29 de septiembre de 1541",
        headline: "A los señores de Neuchâtel"
      }
    ],
    id: "#viret"
  },
  {
    name: "Guillaume Farel (1489 - 1565)",
    wikiurl: "http://www.wikidata.org/entity/Q435456",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/William-Farel.jpg",
    desc: "teólogo y reformador francés en la Suiza francesa, defensor del calvinismo",
    letters: [
      {
        slug: "1538_01_LuisdeTillet",
        date: "31 de enero de 1538",
        headline: "Louis de Tillet"
      },
      {
        slug: "1541_09_29_senoresNeuchatel",
        date: " 29 de septiembre de 1541",
        headline: "A los señores de Neuchâtel"
      }
    ],
    id: "#farel"
  },
  {
    name: "Martín Bucero (1491 - 1551)",
    wikiurl: "http://www.wikidata.org/entity/Q318622",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Martin%20Buzer%20%28Bucer%29.jpg",
    desc: "Teólogo y reformador alemán",
    letters: [
      {
        slug: "1538_01_LuisdeTillet",
        date: "31 de enero de 1538",
        headline: "Louis de Tillet"
      },
      {
        slug: "1538_07_10_LouisTillet",
        date: "10 de julio de 1538",
        headline: "Louis de Tillet"
      }
    ],
    id: "#bucero"
  },
  {
    name: "Sebastián Castellion (1515 - 1563)",
    wikiurl: "http://www.wikidata.org/entity/Q919119",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/SebastianCastellio.jpg",
    desc: "Teólogo y humanista reformado francés",
    letters: [
      {
        slug: "1542_05_Al_senor_cura",
        date: "[mayo de 1542]",
        headline: "Párroco anónimo"
      },
      {
        slug: "1552_SrDeFalais",
        date: "[1552]",
        headline: "Señor de Fallais"
      }
    ],
    id: "#castalion"
  },
  {
    name: "Jean de Tillet",
    wikiurl: "http://www.wikidata.org/entity/Q3175826",
    thumbnail: "",
    desc: "Obispo católico francés",
    letters: [
      {
        slug: "1538_01_LuisdeTillet",
        date: "31 de enero de 1538",
        headline: "Louis de Tillet"
      },
      {
        slug: "1538_07_10_LouisTillet",
        date: "10 de julio de 1538",
        headline: "Louis de Tillet"
      }
    ],
    id: "#jehan"
  },
  {
    name: "Anne de Parthenay",
    wikiurl: "http://www.wikidata.org/entity/Q99539414",
    thumbnail: "",
    desc: "Aristócrata francesa y erudita que ha sido asociada a Calvino, dama de compañía de la duquesa de Este",
    letters: [
      {
        slug: "1541_10_duquesaFerrara",
        date: "[octubre 1541]",
        headline: "A la duquesa de Ferrara"
      }
    ],
    id: "#annePartenay"
  },
  {
    name: "Charles d'Espeville",
    wikiurl: "http://www.wikidata.org/entity/Q133821751",
    thumbnail: "",
    desc: "Seudónimo adoptado por Calvino durante su retiro en Angulema y su viaje a Italia (1534, 1536)",
    letters: [
      {
        slug: "1538_01_LuisdeTillet",
        date: "31 de enero de 1538",
        headline: "Louis de Tillet"
      },
      {
        slug: "1538_07_10_LouisTillet",
        date: "10 de julio de 1538",
        headline: "Louis de Tillet"
      },
      {
        slug: "1543_10_14_SenorFalais",
        date: "[14 de octubre de 1543]",
        headline: "Señor de Fallais"
      },
      {
        slug: "1543_10_14_SenoraFalais",
        date: "14 de octubre de (1543)",
        headline: "Señora de Fallais"
      },
      {
        slug: "1543_finales_SenorDeFalais",
        date: "[finales de 1543]",
        headline: "Señor de Fallais"
      },
      {
        slug: "1544_06_24_SraDeFalais",
        date: "24 de junio de 1544",
        headline: "Señora de Fallais"
      },
      {
        slug: "1546_01_20_SraDeBude",
        date: "[20 ** 1546]",
        headline: "Señora de Budé"
      }
    ],
    id: "#espeville"
  },
  {
    name: "Jacques de Bourgogne",
    wikiurl: "http://www.wikidata.org/entity/Q6120956",
    thumbnail: "",
    desc: "Noble flamenco y corresponsal de Calvino quien le apoyó inicialmente",
    letters: [
      {
        slug: "1543_10_14_SenorFalais",
        date: "[14 de octubre de 1543]",
        headline: "Señor de Fallais"
      },
      {
        slug: "1543_finales_SenorDeFalais",
        date: "[finales de 1543]",
        headline: "Señor de Fallais"
      },
      {
        slug: "1552_SrDeFalais",
        date: "[1552]",
        headline: "Señor de Fallais"
      }
    ],
    id: "#jacques-bourgogne"
  },
  {
    name: "Yolande de Brederode",
    wikiurl: "http://www.wikidata.org/entity/Q56000839",
    thumbnail: "",
    desc: "Aristócrata de la casa de los condes de Holanda y esposa de Jacques de Bourgogne",
    letters: [
      {
        slug: "1544_06_24_SraDeFalais",
        date: "24 de junio de 1544",
        headline: "Señora de Fallais"
      },
      {
        slug: "1552_SrDeFalais",
        date: "[1552]",
        headline: "Señor de Fallais"
      }
    ],
    id: "#jolande_brederode"
  },
  {
    name: "Virgen María ( - 0048)",
    wikiurl: "http://www.wikidata.org/entity/Q345",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Duccio%20The-Madonna-and-Child-128.jpg",
    desc: "madre de Jesús de Nazaret",
    letters: [
      {
        slug: "1542_05_Al_senor_cura",
        date: "[mayo de 1542]",
        headline: "Párroco anónimo"
      }
    ],
    id: "#vierge_marie"
  },
  {
    name: "Pedro (0000 - 0065)",
    wikiurl: "http://www.wikidata.org/entity/Q33923",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Pope-peter%20pprubens.jpg",
    desc: "apóstol de Jesús y primer papa según la tradición católica",
    letters: [
      {
        slug: "1542_05_Al_senor_cura",
        date: "[mayo de 1542]",
        headline: "Párroco anónimo"
      }
    ],
    id: "#pierre"
  },
  {
    name: "Eduardo VI de Inglaterra (1537 - 1553)",
    wikiurl: "http://www.wikidata.org/entity/Q83229",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Edward%20VI%20of%20England%20c.%201546.jpg",
    desc: "Rey de Inglaterra (1547–1553)",
    letters: [
      {
        slug: "1553_03_12_ReyInglaterra",
        date: "12 de marzo de 1553",
        headline: "Rey de Inglaterra"
      }
    ],
    id: "#edouard-VI"
  },
  {
    name: "Antonio de Borbón (1518 - 1562)",
    wikiurl: "http://www.wikidata.org/entity/Q310334",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Unknown%20-%20Portrait%20of%20Anthony%20of%20Bourbon%20%281518%E2%80%931562%29%2C%20King%20of%20Navarre%20-%20MNK%20XII-294%20-%20National%20Museum%20Krak%C3%B3w.jpg",
    desc: "Rey de Navarra (1555-1562)",
    letters: [
      {
        slug: "1553_03_12_ReyInglaterra",
        date: "12 de marzo de 1553",
        headline: "Rey de Inglaterra"
      }
    ],
    id: "#vendome"
  },
  {
    name: "Virgen María ( - 0100)",
    wikiurl: "http://www.wikidata.org/entity/Q345",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Duccio%20The-Madonna-and-Child-128.jpg",
    desc: "madre de Jesús de Nazaret",
    letters: [
      {
        slug: "1542_05_Al_senor_cura",
        date: "[mayo de 1542]",
        headline: "Párroco anónimo"
      }
    ],
    id: "#vierge_marie"
  },
  {
    name: "Felipe Melanchthon (1497 - 1560)",
    wikiurl: "http://www.wikidata.org/entity/Q76325",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/PhilippMelanchthon.jpg",
    desc: "Humanista, filósofo y reformador protestante alemán",
    letters: [
      {
        slug: "1552_10_06_SenoresDeGinebra",
        date: "[6 de octubre de 1552]",
        headline: "Señores de Ginebra"
      }
    ],
    id: "#melanchthon"
  },
  {
    name: "Lactancio (0240 - 0320)",
    wikiurl: "http://www.wikidata.org/entity/Q209102",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Lactantius.jpg",
    desc: "escritor latino y apologista cristiano",
    letters: [
      {
        slug: "1542_05_Al_senor_cura",
        date: "[mayo de 1542]",
        headline: "Párroco anónimo"
      }
    ],
    id: "#lactance"
  },
  {
    name: "Pablo de Tarso (0005 - 0066)",
    wikiurl: "http://www.wikidata.org/entity/Q9200",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Giovanni%20Francesco%20Barbieri%20-%20Saint%20Paul.jpg",
    desc: "apóstol cristiano de origen judío",
    letters: [
      {
        slug: "1542_05_Al_senor_cura",
        date: "[mayo de 1542]",
        headline: "Párroco anónimo"
      }
    ],
    id: "#paul"
  },
  {
    name: "Roberte Le Lyeur",
    wikiurl: "http://www.wikidata.org/entity/Q108743308",
    thumbnail: "",
    desc: "esposa de Guillaume Budé",
    letters: [
      {
        slug: "1546_01_20_SraDeBude",
        date: "[20 ** 1546]",
        headline: "Señora de Budé"
      }
    ],
    id: "#madame-bude"
  },
  {
    name: "Agustín de Hipona (0354 - 0430)",
    wikiurl: "http://www.wikidata.org/entity/Q8018",
    thumbnail: "http://commons.wikimedia.org/wiki/Special:FilePath/Augustine%20Lateran.jpg",
    desc: "filósofo, teólogo y obispo romano",
    letters: [
      {
        slug: "1542_05_Al_senor_cura",
        date: "[mayo de 1542]",
        headline: "Párroco anónimo"
      }
    ],
    id: "#saint_augustin"
  }
];
export {
  persons as a,
  persons_es as p
};
