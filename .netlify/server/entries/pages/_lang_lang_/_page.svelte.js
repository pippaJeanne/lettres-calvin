import { c as create_ssr_component, s as subscribe, e as escape, a as each } from "../../../chunks/ssr.js";
/* empty css                    */
import { p as page } from "../../../chunks/stores.js";
import { f as fr_es } from "../../../chunks/fr_es.js";
import { t as transc } from "../../../chunks/transcriptions.js";
const events = [
  {
    media: {
      url: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f3.jpeg",
      thumbnail: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f3.jpeg"
    },
    start_date: {
      year: "1538",
      month: "01",
      day: "31"
    },
    display_date: "31 janvier 1538",
    text: {
      headline: "<a href='/fr/lettres/1538_01_LouisduTillet'>Louis du Tillet</a>",
      text: "Réponse de Jean Calvin à Louis du Tillet après avoir reçu la lettre où Louis du Tillet lui informaient de sa décision de retourner à la foi catholique."
    },
    background: {
      url: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f3.jpeg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f18.jpeg",
      thumbnail: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f18.jpeg"
    },
    start_date: {
      year: "1538",
      month: "07",
      day: "10"
    },
    display_date: "10 juillet 1538",
    text: {
      headline: "<a href='/fr/lettres/1538_07_10_LuoisDuTillets'>Louis du Tillet</a>",
      text: "Lettre de Calvin à Louis du Tillet où Calvin parle de son exil de Genève et déplacement à Strasbourg."
    },
    background: {
      url: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f18.jpeg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fcorrespondance_ecclesiastiqueead%252Fms_fr_401%252Fms_fr_00401_f017_01.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fcorrespondance_ecclesiastiqueead%252Fms_fr_401%252Fms_fr_00401_f017_01.jpg"
    },
    start_date: {
      year: "1541",
      month: "02",
      day: "19"
    },
    display_date: " 19 février 1541",
    text: {
      headline: "<a href='/fr/lettres/1541_02_19_SeigneursGeneve'>Seigneurs de Genève</a>",
      text: "Dans le contexte du colloque de Ratisbonne, qui fut un important débat théologique entre les catholiques et les protestants, Jean Calvin, après avoir été appelé par Guillaume Farel à retourner à Genève, explique les raisons de son arrivée tardive et réaffirme son engagement avec l’église."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fcorrespondance_ecclesiastiqueead%252Fms_fr_401%252Fms_fr_00401_f017_01.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_145%252Fms_fr_00145_f157r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_145%252Fms_fr_00145_f157r.jpg"
    },
    start_date: {
      year: "1541",
      month: "09",
      day: "29"
    },
    display_date: " 29 septembre 1541",
    text: {
      headline: "<a href='/fr/lettres/1541_09_29_SeigneursNeuchatel'>Seigneurs de Neuchâtel</a>",
      text: "Lettre de la part des ministres de Genève, y compris Calvin, adressée à ceux de Neuchâtel afin de les persuader de ne pas déposer Guillaume Farel après avoir censuré publiquement une dame de qualité. Cette lettre a été portée par Pierre Viret et contient des instructions de Calvin pour son intervention devant la seigneurie de Neuchâtel."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_145%252Fms_fr_00145_f157r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_196%252Fms_fr_00196_f079r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_196%252Fms_fr_00196_f079r.jpg"
    },
    start_date: {
      year: "1541",
      month: "10",
      day: "01"
    },
    display_date: "[octobre 1541]",
    text: {
      headline: "<a href='/fr/lettres/1541_10_DuchesseFerrare'>Duchesse de Ferrare</a>",
      text: "Calvin instruit des erreurs de la messe."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_196%252Fms_fr_00196_f079r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f369r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f369r.jpg"
    },
    start_date: {
      year: "1542",
      month: "05",
      day: "01"
    },
    display_date: "[mai 1542]",
    text: {
      headline: "<a href='/fr/lettres/1542_05_M_le_cureX'>Monsieur le curé</a>",
      text: "Défense de la doctrine de l'église réformée contre l'accusation d'être la cause de la peste à Genève. Instruction de recourir à Dieu seul pour la délivrance."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f369r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f003r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f003r.jpg"
    },
    start_date: {
      year: "1543",
      month: "10",
      day: "14"
    },
    display_date: "14 octobre (1543)",
    text: {
      headline: "<a href='/fr/lettres/1543_10_14_MadameDeFalais'>Madame de Fallais</a>",
      text: "Encouragement de Calvin à Madame de Fallais qui partageait les sentiments de son époux quant à la religion réformée."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f003r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f001r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f001r.jpg"
    },
    start_date: {
      year: "1543",
      month: "10",
      day: "14"
    },
    display_date: "[14 octobre 1543]",
    text: {
      headline: "<a href='/fr/lettres/1543_10_14_MonsieurFalais'>Monsieur de Fallais</a>",
      text: "Calvin donne son conseil à Monsieur de Fallais qui délibérait de quitter les Pays-Bas."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f001r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF=%2Fhome%2Fhttpd%2Fbge%2Fdiffusion%2Fprod%2Fapp%2Fwebroot%2Fdata%2Ffiles%2Fbge.diffusion%2Fimages%2Fms_fr_00001_00198ead%2Fms_fr_194%2Fms_fr_0194_f005r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF=%2Fhome%2Fhttpd%2Fbge%2Fdiffusion%2Fprod%2Fapp%2Fwebroot%2Fdata%2Ffiles%2Fbge.diffusion%2Fimages%2Fms_fr_00001_00198ead%2Fms_fr_194%2Fms_fr_0194_f005r.jpg"
    },
    start_date: {
      year: "1543",
      month: "12",
      day: "01"
    },
    display_date: "[fin 1543]",
    text: {
      headline: "<a href='/fr/lettres/1543_fin_MFalais'>Monsieur de Fallais</a>",
      text: "Lettre de Calvin à Monsieur de Fallais où Calvin encourage à nouveau ce dernier à quitter son pays en raison de ses croyances religieuses."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF=%2Fhome%2Fhttpd%2Fbge%2Fdiffusion%2Fprod%2Fapp%2Fwebroot%2Fdata%2Ffiles%2Fbge.diffusion%2Fimages%2Fms_fr_00001_00198ead%2Fms_fr_194%2Fms_fr_0194_f005r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f009r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f009r.jpg"
    },
    start_date: {
      year: "1544",
      month: "06",
      day: "24"
    },
    display_date: "24 juin (1544)",
    text: {
      headline: "<a href='/fr/lettres/1544_06_24_MmeDeFalais'>Madame de Fallais</a>",
      text: "Encouragement à Madame de Fallais dans sa nouvelle vie en liberté de conscience et de culte, après avoir suivi son mari à Cologne et à Strasbourg."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f009r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f006r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f006r.jpg"
    },
    start_date: {
      year: "1546",
      month: "01",
      day: "20"
    },
    display_date: "[20 ** 1546]",
    text: {
      headline: "<a href='/fr/lettres/1546_01_20_MadameDEBude'>Madame de Budé</a>",
      text: "Calvin conseille Madame de Budé de se retirer à Genève."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f006r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f357r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f357r.jpg"
    },
    start_date: {
      year: "1548",
      month: "06",
      day: "13"
    },
    display_date: "13 juin [1548]",
    text: {
      headline: "<a href='/fr/lettres/1548_06_NouveauConverti'>Nouveau converti</a>",
      text: "Réponse à une question sur la messe et encouragement dans la foi."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f357r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_145%252Fms_fr_00145_f046r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_145%252Fms_fr_00145_f046r.jpg"
    },
    start_date: {
      year: "1552",
      month: "10",
      day: "06"
    },
    display_date: "[6 octobre 1552]",
    text: {
      headline: "<a href='/fr/lettres/1552_10_06_SeigeursDeGeneve'>Seigneurs de Genève</a>",
      text: "Réponse de Calvin aux accusations de Jean Trolliet concernant sa doctrine."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_145%252Fms_fr_00145_f046r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f342r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f342r.jpg"
    },
    start_date: {
      year: "1552",
      month: "01",
      day: "01"
    },
    display_date: "[1552]",
    text: {
      headline: "<a href='/fr/lettres/1552_Monsieur-deFalais'>Monsieur de Fallais</a>",
      text: "Dernière lettre de Calvin à M. de Fallais. Rupture de Calvin avec M. de Fallais quand ce dernier prit ouvertement le parti de Jérôme Bolsec contre Calvin."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f342r.jpg",
      color: "#5e5e52"
    }
  },
  {
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f035r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f035r.jpg"
    },
    start_date: {
      year: "1553",
      month: "03",
      day: "12"
    },
    display_date: "12 de mars 1553",
    text: {
      headline: "<a href='/fr/lettres/1553_03_12_RoiDAngleterre'>roi d'Angleterre</a>",
      text: "Intercession de Calvin auprès du roi d'Angleterre en faveur d'un gentilhomme persécuté pour la religion."
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f035r.jpg",
      color: "#5e5e52"
    }
  }
];
const era = {
  start_date: {
    "12": 1,
    "1553": 1538,
    "03": 1
  },
  end_date: {
    "12": 1,
    "1553": 1554,
    "03": 1
  },
  text: "<h2>Lettres par ordre chronologique</h2>"
};
const events_es = [
  {
    start_date: {
      year: "1538",
      month: "01",
      day: "31"
    },
    display_date: "31 de enero de 1538",
    text: {
      headline: "<a href='/es/cartas/1538_01_LuisdeTillet'>Louis de Tillet</a>",
      text: "Respuesta de Juan Calvino a Louis de Tillet después de haber recibido la carta donde Louis de Tillet le informaba de su decisión de regresar a la fe católica."
    },
    media: {
      url: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f3.jpeg",
      thumbnail: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f3.jpeg"
    },
    background: {
      url: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f3.jpeg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1538",
      month: "07",
      day: "10"
    },
    display_date: "10 de julio de 1538",
    text: {
      headline: "<a href='/es/cartas/1538_07_10_LouisTillet'>Louis de Tillet</a>",
      text: "Carta de Calvino a Louis de Tillet en la que Calvino habla de su exilio de Ginebra y de su traslado a Estrasburgo."
    },
    media: {
      url: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f18.jpeg",
      thumbnail: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f18.jpeg"
    },
    background: {
      url: "https://gallica.bnf.fr/ark:/12148/btv1b90076313/f18.jpeg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1541",
      month: "02",
      day: "19"
    },
    display_date: " 19 de febrero de 1541",
    text: {
      headline: "<a href='/es/cartas/1541_02_19_senoresGinebra'>Señores de Ginebra</a>",
      text: "En el contexto del Coloquio de Ratisbona, el cual fue un importante debate teológico entre los católicos y los protestantes, Juan Calvino, luego de que Guillaume Farel solicitara su regreso a Ginebra, explica las razones de su llegada tardía y reafirma su compromiso con la iglesia."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fcorrespondance_ecclesiastiqueead%252Fms_fr_401%252Fms_fr_00401_f017_01.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fcorrespondance_ecclesiastiqueead%252Fms_fr_401%252Fms_fr_00401_f017_01.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fcorrespondance_ecclesiastiqueead%252Fms_fr_401%252Fms_fr_00401_f017_01.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1538",
      month: "09",
      day: "29"
    },
    display_date: " 29 de septiembre de 1541",
    text: {
      headline: "<a href='/es/cartas/1541_09_29_senoresNeuchatel'>A los señores de Neuchâtel</a>",
      text: "Carta de los ministros de Ginebra, entre los que se incluye Calvino, dirigida a los de Neuchâtel para persuadirles de no deponer a Guillaume Farel luego de haber censurado públicamente una dama de sociedad. Esta carta fue enviada con Pierre Viret y contiene instrucciones de Calvino para su intervención delante del Consistorio de Neuchâtel."
    }
  },
  {
    start_date: {
      year: "1541",
      month: "10",
      day: "01"
    },
    display_date: "[octubre 1541]",
    text: {
      headline: "<a href='/es/cartas/1541_10_duquesaFerrara'>A la duquesa de Ferrara</a>",
      text: "Calvino instruye acerca de los errores de la misa."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_196%252Fms_fr_00196_f079r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_196%252Fms_fr_00196_f079r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_196%252Fms_fr_00196_f079r.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1542",
      month: "05",
      day: "01"
    },
    display_date: "[mayo de 1542]",
    text: {
      headline: "<a href='/es/cartas/1542_05_Al_senor_cura'>Párroco anónimo</a>",
      text: "Defensa de la doctrina de la iglesia reformada contra la acusación de ser la causa de la peste en Ginebra. Instrucción de recurrir solo a Dios por liberación."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f369r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f369r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f369r.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1543",
      month: "10",
      day: "14"
    },
    display_date: "[14 de octubre de 1543]",
    text: {
      headline: "<a href='/es/cartas/1543_10_14_SenorFalais'>Señor de Fallais</a>",
      text: "Calvino le da su consejo al señor de Fallais quien consideraba dejar los Países Bajos."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f001r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f001r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f001r.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1543",
      month: "10",
      day: "14"
    },
    display_date: "14 de octubre de (1543)",
    text: {
      headline: "<a href='/es/cartas/1543_10_14_SenoraFalais'>Señora de Fallais</a>",
      text: "Calvino da aliento a la Señora de Fallais quien compartía los sentimientos de su esposo con respecto a la religión reformada."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f001r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f001r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f001r.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1543",
      month: "12",
      day: "01"
    },
    display_date: "[finales de 1543]",
    text: {
      headline: "<a href='/es/cartas/1543_finales_SenorDeFalais'>Señor de Fallais</a>",
      text: "Carta de Calvino al señor de Fallais en la que Calvino nuevamente anima este último a abandonar su país debido a sus creencias religiosas."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF=%2Fhome%2Fhttpd%2Fbge%2Fdiffusion%2Fprod%2Fapp%2Fwebroot%2Fdata%2Ffiles%2Fbge.diffusion%2Fimages%2Fms_fr_00001_00198ead%2Fms_fr_194%2Fms_fr_0194_f005r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF=%2Fhome%2Fhttpd%2Fbge%2Fdiffusion%2Fprod%2Fapp%2Fwebroot%2Fdata%2Ffiles%2Fbge.diffusion%2Fimages%2Fms_fr_00001_00198ead%2Fms_fr_194%2Fms_fr_0194_f005r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF=%2Fhome%2Fhttpd%2Fbge%2Fdiffusion%2Fprod%2Fapp%2Fwebroot%2Fdata%2Ffiles%2Fbge.diffusion%2Fimages%2Fms_fr_00001_00198ead%2Fms_fr_194%2Fms_fr_0194_f005r.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1544",
      month: "06",
      day: "24"
    },
    display_date: "24 de junio de 1544",
    text: {
      headline: "<a href='/es/cartas/1544_06_24_SraDeFalais'>Señora de Fallais</a>",
      text: "Ánimo a la señora de Fallais en su nueva vida de libertad de conciencia y de culto luego de haber seguido a su marido a Colonia y a Estrasburgo."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f009r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f009r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_194%252Fms_fr_0194_f009r.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1546",
      month: "01",
      day: "20"
    },
    display_date: "[20 ** 1546]",
    text: {
      headline: "<a href='/es/cartas/1546_01_20_SraDeBude'>Señora de Budé</a>",
      text: "Calvino aconseja a la señora de Budé retirarse a Ginebra."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f006r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f006r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f006r.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1548",
      month: "06",
      day: "13"
    },
    display_date: "13 de junio de [1548]",
    text: {
      headline: "<a href='/es/cartas/1548_06_NuevoCreyente'>Nuevo creyente</a>",
      text: "Respuesta a una pregunta acerca de la misa y aliento en la fe."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f357r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f357r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f357r.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1552",
      month: "10",
      day: "06"
    },
    display_date: "[6 de octubre de 1552]",
    text: {
      headline: "<a href='/es/cartas/1552_10_06_SenoresDeGinebra'>Señores de Ginebra</a>",
      text: "Respuesta de Calvino a las acusaciones de Jean Trolliet concerniendo su doctrina."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_145%252Fms_fr_00145_f046r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_145%252Fms_fr_00145_f046r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_fr_00001_00198ead%252Fms_fr_145%252Fms_fr_00145_f046r.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1552",
      month: "01",
      day: "01"
    },
    display_date: "[1552]",
    text: {
      headline: "<a href='/es/cartas/1552_SrDeFalais'>Señor de Fallais</a>",
      text: "Última carta de Calvino al señor de Fallais. Ruptura de Calvino con el señor de Fallais cuando este último tomó abiertamente el partido de Jérôme Bolsec contra Calvino."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f342r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f342r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107a_volume_2%252Fms_lat_107a_02_f342r.jpg",
      color: "#5e5e52"
    }
  },
  {
    start_date: {
      year: "1553",
      month: "03",
      day: "12"
    },
    display_date: "12 de marzo de 1553",
    text: {
      headline: "<a href='/es/cartas/1553_03_12_ReyInglaterra'>Rey de Inglaterra</a>",
      text: "Intercesión de Calvino ante el rey de Inglaterra a favor de un gentilhombre perseguido a causa de la religión."
    },
    media: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f035r.jpg",
      thumbnail: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f035r.jpg"
    },
    background: {
      url: "https://archives.bge-geneve.ch/archive/fullSizeImage?file=https%3A%2F%2Farchives.bge-geneve.ch%2Fcgi-bin%2Fiipsrv.fcgi%3FPY%3D1%26CVT%3DJPG%26FIF%3D%252Fhome%252Fhttpd%252Fbge%252Fdiffusion%252Fprod%252Fapp%252Fwebroot%252Fdata%252Ffiles%252Fbge.diffusion%252Fimages%252Fms_lat_1_376ead%252Fms_lat_107%252Fms_lat_107_f035r.jpg",
      color: "#5e5e52"
    }
  }
];
const era_es = {
  start_date: {
    "12": 1,
    "1553": 1538,
    "03": 1
  },
  end_date: {
    "12": 1,
    "1553": 1554,
    "03": 1
  },
  text: "<h2>Cartas en orden cronológico</h2>"
};
const css = {
  code: ".index.svelte-8ca0ga.svelte-8ca0ga{display:flex}.mainIndex.svelte-8ca0ga.svelte-8ca0ga{margin:2rem 15rem}ul.svelte-8ca0ga.svelte-8ca0ga{list-style:none;padding:0}li.svelte-8ca0ga.svelte-8ca0ga{list-style:none;margin:.5rem .5rem .5rem 1rem }a.svelte-8ca0ga.svelte-8ca0ga{text-decoration:none}.tagplugin.svelte-8ca0ga.svelte-8ca0ga{display:inline-block;margin:.4rem .8rem;border-radius:4px}.cats.svelte-8ca0ga li.svelte-8ca0ga{text-align:justify}article.svelte-8ca0ga.svelte-8ca0ga{display:block}.taglist.svelte-8ca0ga.svelte-8ca0ga{margin:.5rem;padding:.3rem}.nuage.svelte-8ca0ga.svelte-8ca0ga{padding:2rem 6rem;width:100%;border-left:solid #eeee 1px;text-align:center}@media screen and (max-width:800px){.index.svelte-8ca0ga.svelte-8ca0ga{flex-direction:column}.nuage.svelte-8ca0ga.svelte-8ca0ga{padding:2rem 1rem}.nuage.svelte-8ca0ga.svelte-8ca0ga{border-top:solid #eeee 1px;border-bottom:none }.mainIndex.svelte-8ca0ga.svelte-8ca0ga{margin:1rem 2rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const slugslist = Object.keys(transc);
  const lang = $page.params.lang;
  const t = fr_es[lang] || fr_es.fr;
  const letters = data.lettres;
  const cartas = data.lettres["cartas"];
  let { slugs = [] } = $$props;
  Object.keys(letters).map((key) => {
    if (key !== "cartas") {
      slugs.push(key);
    }
  });
  let transcs = {};
  slugslist.map((slug) => {
    slugs.map((slugOk) => {
      if (slugslist.indexOf(slugOk) !== -1) {
        if (slug === slugOk) {
          transcs[slug] = letters[slug];
        }
      }
    });
  });
  let tags = [];
  for (let slug of slugs) {
    tags.push(letters[slug].tags);
  }
  let tagslist = [];
  for (let tag of tags) {
    for (let t2 of tag) {
      if (tagslist.indexOf(t2) === -1) {
        tagslist.push(t2);
      }
    }
  }
  let cats = [];
  for (let slug of slugs) {
    cats.push(letters[slug].categories);
  }
  let catslist = [];
  for (let cat of cats) {
    for (let c of cat) {
      if (catslist.indexOf(c) === -1) {
        catslist.push(c);
      }
    }
  }
  let tags_es = {};
  cartas.map((d) => {
    slugs.map((s) => {
      let obj = {};
      if (d.source === letters[s].id) {
        letters[s].tags.map((w, index) => {
          let slug = w.toLowerCase().replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a");
          d.tags.map((tag, i) => {
            if (letters[s].tags.length === d.tags.length && i === index) {
              obj = { slug, tag };
              tags_es[slug] = obj;
            }
          });
        });
      }
    });
  });
  let cats_es = [];
  cartas.map((d) => {
    let obj;
    slugs.map((s) => {
      if (d.source === letters[s].id) {
        letters[s].categories.map((c, index) => {
          let slug = c.toLowerCase().replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a");
          d.categories.map((cat, i) => {
            if (letters[s].categories.length === d.categories.length && i === index) {
              obj = { slug, cat };
            }
          });
          if (cats_es.indexOf(obj) === -1) {
            cats_es.push(obj);
          }
        });
      }
    });
  });
  const tagsL = [];
  const catsL = [];
  if (lang === "fr") {
    for (let tag of tagslist) {
      let n = 0;
      let tagobj = {};
      for (let slug of slugs) {
        if (letters[slug].tags.indexOf(tag) !== -1) {
          let slug2 = tag.toLowerCase().replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a");
          n += 1;
          tagobj = { name: tag, slug: slug2, n };
        }
      }
      tagsL.push(tagobj);
    }
    for (let cat of catslist) {
      let n = 0;
      let catobj = {};
      for (let slug of slugs) {
        if (letters[slug].categories.indexOf(cat) !== -1) {
          n += 1;
          catobj = { name: cat, n };
        }
      }
      catsL.push(catobj);
    }
  }
  if (lang === "es") {
    Object.keys(tags_es).map((tag) => {
      let n = 0;
      let tagobj = {};
      for (let c of cartas) {
        if (c.tags.indexOf(tags_es[tag].tag) !== -1) {
          n += 1;
          tagobj = {
            name: tags_es[tag].tag,
            slug: tags_es[tag].slug,
            n
          };
        }
      }
      if (!tagsL.includes(tagobj)) {
        tagsL.push(tagobj);
      }
    });
    for (let cat of cats_es) {
      let n = 0;
      let catobj = {};
      cartas.map((slug) => {
        if (slug.categories.indexOf(cat.cat) !== -1) {
          n += 1;
          catobj = { name: cat.cat, slug: cat.slug, n };
        }
      });
      catsL.push(catobj);
    }
  }
  function tline_data() {
    if (lang === "fr") {
      const timeline = { events, era };
      return timeline;
    } else if (lang === "es") {
      const timeline = { events: events_es, era: era_es };
      return timeline;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.letters === void 0 && $$bindings.letters && letters !== void 0) $$bindings.letters(letters);
  if ($$props.cartas === void 0 && $$bindings.cartas && cartas !== void 0) $$bindings.cartas(cartas);
  if ($$props.slugs === void 0 && $$bindings.slugs && slugs !== void 0) $$bindings.slugs(slugs);
  if ($$props.tagsL === void 0 && $$bindings.tagsL && tagsL !== void 0) $$bindings.tagsL(tagsL);
  if ($$props.catsL === void 0 && $$bindings.catsL && catsL !== void 0) $$bindings.catsL(catsL);
  if ($$props.tline_data === void 0 && $$bindings.tline_data && tline_data !== void 0) $$bindings.tline_data(tline_data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-d1jqqe_START -->${$$result.title = `<title>${escape(t.home)}</title>`, ""}<!-- HEAD_svelte-d1jqqe_END -->`, ""}  <div id="timeline-embed" style="width: 100%; height: 65vh;z-index:3"></div> <article style="margin-top: 0 !important;" class="svelte-8ca0ga"><div style="text-align:center"><p>${escape(t.txt_ppt)}</p> <p style="color:green;">${escape(t.txt_temp)}</p> <p style="text-align:center!important"><a href="${"/" + escape(lang, true) + "/a_propos"}" class="svelte-8ca0ga">${escape(t.savoirplus)}</a></p></div> <hr style="margin: 1rem 15rem;">  <div class="mainIndex svelte-8ca0ga"><ul class="svelte-8ca0ga"><h3>${escape(t.ppt_index)}</h3> <li class="svelte-8ca0ga"><a href="${"/" + escape(lang, true) + "/index_noms"}" class="svelte-8ca0ga">${escape(t.names)}</a></li> <li class="svelte-8ca0ga"><a href="${"/" + escape(lang, true) + "/carte"}" class="svelte-8ca0ga">${escape(t.places)}</a></li></ul></div> <div class="index svelte-8ca0ga"><div class="nuage svelte-8ca0ga"><h2>${escape(t.tag_cloud)}</h2> <ul class="taglist svelte-8ca0ga">${each(tagsL, (tag) => {
    return `<li class="tagplugin svelte-8ca0ga"><a class="tag svelte-8ca0ga" href="${"./" + escape(lang, true) + "/tags/" + escape(tag.slug, true)}">${escape(tag.name)}</a> </li>`;
  })}</ul></div> <div class="nuage svelte-8ca0ga"><h2>${escape(t.categories)}</h2> <ul class="cats svelte-8ca0ga"><p>${escape(t.cat_nature)} :</p> <li class="svelte-8ca0ga"><a class="categ svelte-8ca0ga" href="${"./" + escape(lang, true) + "/categories/copie"}">${escape(t.copy)}</a></li> <li class="svelte-8ca0ga"><a class="categ svelte-8ca0ga" href="${"./" + escape(lang, true) + "/categories/orig-autographe"}">${escape(t.orig_autograph)}</a></li> <li class="svelte-8ca0ga"><a class="categ svelte-8ca0ga" href="${"./" + escape(lang, true) + "/categories/minute-originale"}">${escape(t.minute_orig)}</a></li> <li class="svelte-8ca0ga"><a class="categ svelte-8ca0ga" href="${"./" + escape(lang, true) + "/categories/minute-autographe"}">${escape(t.minute_autog)}</a></li> <li class="svelte-8ca0ga"><a class="categ svelte-8ca0ga" href="${"./" + escape(lang, true) + "/categories/original"}">${escape(t.orig)}</a></li></ul> <ul class="cats svelte-8ca0ga"><p>${escape(t.cat_recipient)} :</p> <li class="svelte-8ca0ga"><a class="categ svelte-8ca0ga" href="${"./" + escape(lang, true) + "/categories/individu"}">${escape(t.individual)}</a></li> <li class="svelte-8ca0ga"><a class="categ svelte-8ca0ga" href="${"./" + escape(lang, true) + "/categories/collectivite"}">${escape(t.group)}</a></li></ul> <ul class="cats svelte-8ca0ga"><p>${escape(t.cat_signature)} :</p> <li class="svelte-8ca0ga"><a class="categ svelte-8ca0ga" href="${"./" + escape(lang, true) + "/categories/signee-par-plusieurs"}">${escape(t.signed_many)}</a></li> <li class="svelte-8ca0ga"><a class="categ svelte-8ca0ga" href="${"./" + escape(lang, true) + "/categories/sous-pseudonyme"}">${escape(t.pseudonym)}</a></li> <li class="svelte-8ca0ga"><a class="categ svelte-8ca0ga" href="${"./" + escape(lang, true) + "/categories/sans-signature"}">${escape(t.no_signature)}</a></li></ul></div></div> ${lang === "fr" ? `<div class="nuage svelte-8ca0ga"><h2 data-svelte-h="svelte-1blbd61">Sélection de transcriptions de l&#39;écriture de Jean Calvin</h2> <ul class="taglist svelte-8ca0ga">${each(slugslist, (slug) => {
    return `<li class="tagplugin svelte-8ca0ga"><a class="tag svelte-8ca0ga" href="${"./transcription/" + escape(slug, true)}">${escape(transcs[slug].title)}</a> </li>`;
  })}</ul></div>` : ``} <p style="color:slategrey;">${escape(t.misajour)}</p> </article>`;
});
export {
  Page as default
};
