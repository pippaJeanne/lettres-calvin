import fs from "node:fs";
import path from "path";
import { j as json } from "../../../chunks/index.js";
import * as jsdom from "jsdom";
const { JSDOM } = jsdom;
const GET = () => {
  function getFiles(dir, files = []) {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
      const name = `${dir}/${file}`;
      if (fs.statSync(name).isDirectory()) {
        getFiles(name, files);
      } else {
        files.push(name);
      }
    }
    return files;
  }
  const pathdirfr = path.resolve("src/lib/xml");
  const pathdires = path.resolve("src/lib/xmles");
  let xmlfr = getFiles(pathdirfr);
  let xmles = getFiles(pathdires);
  let lettersData = [];
  for (let file of xmlfr) {
    if (file.includes(".xml")) {
      let d = fs.readFileSync(file, "utf-8");
      let slug = file.replace(`${pathdirfr}/`, "").replace(".xml", "");
      let parser = new JSDOM(d).window.document;
      let srcMss = parser.querySelector("msDesc")?.getElementsByTagName("facsimile")[0].getElementsByTagName("graphic");
      let tilesrcMs = [];
      if (srcMss !== void 0) {
        for (let srcMs of srcMss) {
          let src = srcMs.getAttribute("url");
          tilesrcMs.push(src);
        }
      }
      let srcBs = parser.querySelector("bibl")?.getElementsByTagName("facsimile")[0].getElementsByTagName("graphic");
      let tilesrcB = [];
      if (srcBs !== void 0) {
        for (let srcB of srcBs) {
          let src = srcB.getAttribute("url");
          tilesrcB.push(src);
        }
      }
      let signatures = parser.getElementsByTagName("signed");
      let signed = [];
      if (signatures !== void 0) {
        for (let sign of signatures) {
          let diff = sign.textContent;
          let s = sign.getElementsByTagName("persName")[0]?.textContent;
          if (s !== void 0) {
            signed.push(s);
          } else if (diff !== void 0) {
            signed.push(diff);
          }
        }
      }
      let listItems = parser.querySelector("list[xml:id='tags']")?.getElementsByTagName("term");
      let tags = [];
      if (listItems !== void 0) {
        for (let term of listItems) {
          let tag = term.textContent;
          tags.push(tag);
        }
      }
      let text = "";
      let bodyarr = parser.querySelectorAll("*");
      for (let el of bodyarr) {
        text += `${el.textContent} `;
      }
      let persarr = parser.querySelectorAll("persName");
      for (let pers of persarr) {
        pers.getAttribute("key");
        pers.getAttribute("ref");
      }
      lettersData[slug] = {
        id: parser.getElementsByTagName("TEI")[0]?.getAttribute("xml:id"),
        url: file.replace(`${pathdirfr}/`, ""),
        lang: parser.getElementsByTagName("TEI")[0]?.getAttribute("xml:lang"),
        title: parser.querySelectorAll("title")[0]?.textContent,
        desc: parser.querySelector("desc")?.textContent,
        date: parser.querySelectorAll("correspAction")[0]?.getElementsByTagName("date")[0]?.getAttribute("when"),
        person: parser.querySelector("correspAction[type='received']")?.getElementsByTagName("name")[0].textContent,
        destType: parser.querySelector("correspAction[type='received']")?.getElementsByTagName("name")[0]?.getAttribute("type"),
        place: parser.querySelector("correspAction[type='sent']")?.getElementsByTagName("settlement")[0].textContent,
        nature: parser.querySelector("label[type='nature']")?.textContent,
        editor: parser.querySelector("titleStmt")?.getElementsByTagName("editor")[0].textContent,
        bibliothequeMs: parser.querySelector("repository")?.textContent,
        bibliotheque: parser.querySelector("bibl")?.getElementsByTagName("title")[0].textContent,
        srcMs: tilesrcMs,
        srcB: tilesrcB,
        coteMs: parser.querySelector("idno")?.textContent,
        foliosB: parser.querySelector("facsimile[corresp]")?.getAttribute("corresp"),
        tags,
        text
      };
      let categories;
      if (signed.length > 1) {
        let pseudonym = "SIGNÉE PAR PLUSIEURS";
        categories = [lettersData[slug].destType?.toUpperCase(), lettersData[slug].nature?.toUpperCase(), pseudonym];
      } else if (signed.length === 1) {
        if (!signed[0]?.toLowerCase().includes("calvin") && signed[0] !== "") {
          let pseudonym = "SOUS PSEUDONYME";
          categories = [lettersData[slug].destType?.toUpperCase(), lettersData[slug].nature?.toUpperCase(), pseudonym];
        } else if (signed[0] === "") {
          let pseudonym = "SANS SIGNATURE";
          categories = [lettersData[slug].destType?.toUpperCase(), lettersData[slug].nature?.toUpperCase(), pseudonym];
        } else {
          categories = [lettersData[slug].destType?.toUpperCase(), lettersData[slug].nature?.toUpperCase()];
        }
      }
      lettersData[slug].categories = categories;
    }
  }
  let lettersDataEs = [];
  for (let file of xmles) {
    if (file.includes(".xml")) {
      let d = fs.readFileSync(file, "utf-8");
      let slugEs = file.replace(`${pathdires}/`, "").replace(".xml", "");
      let parser = new JSDOM(d).window.document;
      let signaturesEs = parser.getElementsByTagName("signed");
      let signedEs = [];
      if (signaturesEs !== void 0) {
        for (let sign of signaturesEs) {
          let diff = sign.textContent;
          let s = sign.getElementsByTagName("persName")[0]?.textContent;
          if (s !== void 0) {
            signedEs.push(s);
          } else if (diff !== void 0) {
            signedEs.push(diff);
          }
        }
      }
      let listItemsEs = parser.querySelector("list[xml:id='tags']")?.getElementsByTagName("term");
      let tagsEs = [];
      if (listItemsEs !== void 0) {
        for (let term of listItemsEs) {
          let tag = term.textContent;
          tagsEs.push(tag);
        }
      }
      let textEs = "";
      let bodyarrEs = parser.querySelectorAll("*");
      for (let el of bodyarrEs) {
        textEs += `${el.textContent} `;
      }
      let persarrEs = parser.querySelectorAll("persName");
      for (let pers of persarrEs) {
        pers.getAttribute("key");
        pers.getAttribute("ref");
      }
      let carta = {
        slug: slugEs,
        url: file.replace(`${pathdires}/`, ""),
        lang: parser.getElementsByTagName("TEI")[0]?.getAttribute("xml:lang"),
        title: parser.querySelectorAll("title")[0]?.textContent,
        desc: parser.querySelector("desc")?.textContent,
        date: parser.querySelectorAll("correspAction")[0]?.getElementsByTagName("date")[0]?.getAttribute("when"),
        person: parser.querySelector("correspAction[type='received']")?.getElementsByTagName("name")[0].textContent,
        destType: parser.querySelector("correspAction[type='received']")?.getElementsByTagName("name")[0]?.getAttribute("type"),
        place: parser.querySelector("correspAction[type='sent']")?.getElementsByTagName("settlement")[0].textContent,
        nature: parser.querySelector("label[type='nature']")?.textContent,
        editor: parser.querySelector("titleStmt")?.getElementsByTagName("editor")[0].textContent,
        source: parser.querySelector("sourceDesc")?.getAttribute("corresp"),
        //bibliothequeMs: parser.querySelector("repository")?.textContent,
        //bibliotheque: parser.querySelector('bibl')?.getElementsByTagName('title')[0].textContent,
        //srcMs : tilesrcMs,
        //srcB : tilesrcB,
        //coteMs : parser.querySelector('idno')?.textContent,
        //foliosB : parser.querySelector('facsimile[corresp]')?.getAttribute('corresp'),
        tags: tagsEs,
        text: textEs
      };
      let categories;
      if (signedEs.length > 1) {
        let pseudonym = "FIRMADA POR VARIOS";
        categories = [carta.destType?.toUpperCase(), carta.nature?.toUpperCase(), pseudonym];
      } else if (signedEs.length === 1) {
        if (!signedEs[0]?.toLowerCase().includes("calvin") && signedEs[0] !== "") {
          let pseudonym = "BAJO PSEUDÓNIMO";
          categories = [carta.destType?.toUpperCase(), carta.nature?.toUpperCase(), pseudonym];
        } else if (signedEs[0] === "") {
          let pseudonym = "SIN FIRMA";
          categories = [carta.destType?.toUpperCase(), carta.nature?.toUpperCase(), pseudonym];
        } else {
          categories = [carta.destType?.toUpperCase(), carta.nature?.toUpperCase()];
        }
      }
      carta.categories = categories;
      lettersDataEs.push(carta);
    }
  }
  const data = { lettersDataEs, lettersData };
  const chronologique = Object.keys(data.lettersData).map((d) => data.lettersData[d]);
  chronologique.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  const dataLetters = {};
  for (let letter of chronologique) {
    Object.keys(data.lettersData).map((d) => {
      if (data.lettersData[d] === letter) {
        dataLetters[d] = letter;
      }
    });
  }
  const cartas = data.lettersDataEs;
  dataLetters["cartas"] = cartas;
  return json(dataLetters);
};
export {
  GET
};
