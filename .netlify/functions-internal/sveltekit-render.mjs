import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","CalvinErrpgok.png","Logo_BGE.png","Logo_Gallica_2014.png","Logo_Universite_de_Franche-Comte.png","Portrait_de_Calvin.jpg","UdeMlogo.png","favicon.png","functionsLetters.js","logo.png","logoBiblGeneve.svg","pics_protocole/abbrev_frere.png","pics_protocole/abbrev_leur.png","pics_protocole/abbrev_nostre.png","pics_protocole/abbrev_que.png","pics_protocole/esperluette.png","pics_protocole/noz.png","pics_protocole/par.png","pics_protocole/plz.png","pics_protocole/texteBarre.png","search-svgrepo-com.svg","xml/.DS_Store","xml/1538_01_LouisduTillet.xml","xml/1538_07_10_LuoisDuTillets.xml","xml/1541_02_19_SeigneursGeneve.xml","xml/1541_09_29_SeigneursNeuchatel.xml","xml/1541_10_DuchesseFerrare.xml","xml/1542_05_M_le_cureX.xml","xml/1543_10_14_MadameDeFalais.xml","xml/1543_10_14_MonsieurFalais.xml","xml/1543_fin_MFalais.xml","xml/1544_06_24_MmeDeFalais.xml","xml/1546_01_20_MadameDEBude.xml","xml/1548_06_NouveauConverti.xml","xml/1552_10_06_SeigeursDeGeneve.xml","xml/1552_Monsieur-deFalais.xml","xml/1553_03_12_RoiDAngleterre.xml","xmles/.DS_Store","xmles/1538_01_LuisdeTillet.xml","xmles/1538_07_10_LouisTillet.xml","xmles/1541_02_19_senoresGinebra.xml","xmles/1541_09_29_senoresNeuchatel.xml","xmles/1541_10_duquesaFerrara.xml","xmles/1542_05_Al_senor_cura.xml","xmles/1543_10_14_SenorFalais.xml","xmles/1543_10_14_SenoraFalais.xml","xmles/1543_finales_SenorDeFalais.xml","xmles/1544_06_24_SraDeFalais.xml","xmles/1546_01_20_SraDeBude.xml","xmles/1548_06_NuevoCreyente.xml","xmles/1552_10_06_SenoresDeGinebra.xml","xmles/1552_SrDeFalais.xml","xmles/1553_03_12_ReyInglaterra.xml","xslt/.DS_Store","xslt/Transfm-Fr-voir-changements.xslt","xslt/Transfm-diplomatique.xslt","xslt/Transfm-es.xslt","xslt/Transfm-fr.xslt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".js":"text/javascript",".svg":"image/svg+xml",".xml":"text/xml",".xslt":"application/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CfvBQoFT.js","app":"_app/immutable/entry/app.jsqRLmhx.js","imports":["_app/immutable/entry/start.CfvBQoFT.js","_app/immutable/chunks/entry.Cm7sQLjm.js","_app/immutable/chunks/scheduler.BMgH8iAm.js","_app/immutable/entry/app.jsqRLmhx.js","_app/immutable/chunks/4.jKjWACjA.js","_app/immutable/chunks/scheduler.BMgH8iAm.js","_app/immutable/chunks/index.C47Sg0fV.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/_server.js'))
			},
			{
				id: "/api/xml/[filename]",
				pattern: /^\/api\/xml\/([^/]+?)\/?$/,
				params: [{"name":"filename","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/xml/_filename_/_server.js'))
			},
			{
				id: "/transcription/[id]",
				pattern: /^\/transcription\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/[lang=lang]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/cartas/[id]",
				pattern: /^\/([^/]+?)\/cartas\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/categories/[category]",
				pattern: /^\/([^/]+?)\/categories\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false},{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/index_noms",
				pattern: /^\/([^/]+?)\/index_noms\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/lettres/[id]",
				pattern: /^\/([^/]+?)\/lettres\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/search",
				pattern: /^\/([^/]+?)\/search\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/_lang_lang_/search/_server.js'))
			},
			{
				id: "/[lang=lang]/tags/[tag]",
				pattern: /^\/([^/]+?)\/tags\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false},{"name":"tag","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[lang=lang]/[slug]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: lang } = await import ('../server/entries/matchers/lang.js')
			return { lang };
		},
		server_assets: {}
	}
}
})());
