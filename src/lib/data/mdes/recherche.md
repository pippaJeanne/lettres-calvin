---
title: Investigación
author: Yanet Hernández Pedraza
date: 17 de septiembre de 2026
---

## 1. El proyecto en pocas palabras

*Cartas de Calvino* presenta una edición crítica digital bilingüe de la correspondencia en francés del reformador Juan Calvino durante el período de 1538 a 1554. Su objetivo es ofrecer una infraestructura de investigación dinámica, accesible y aprovechable tanto para un público francófono como hispanohablante.

La edición se centra en las cartas escritas por Calvino en francés. Ofrece funcionalidades para la exploración transversal y dinámica de la correspondencia, así como para la comparación de varios estados del texto de las cartas: la fuente primaria, manuscrita o impresa; el texto de la edición de Jules Bonnet de 1854<sup><a name="n1" href="#note1">1</a></sup>; una versión modernizada; y una traducción al español. La edición también permite estudiar y comparar la transcripción diplomática de una selección de manuscritos autógrafos con el texto de la edición Bonnet, que representa, en la mayoría de los casos, el estado editorial siguiente en la historia editorial de la carta. Actualmente, la edición —aún en curso— da acceso a 27 de las 120 cartas que componen el corpus establecido.

La edición toma la edición Bonnet de 1854 como texto de referencia y moviliza también las fuentes primarias, 113 de las cuales son manuscritas. La mayoría de las fuentes primarias manuscritas —97 de 113— se conservan en la Biblioteca de Ginebra. (Véase el cuaderno de datos (*notebook*) [Recensement du corpus de sources primaires de la correspondance de Calvin](https://observablehq.com/d/2ce3cbfd1708139d) para un inventario más detallado de las fuentes primarias que componen el corpus.)

## 2. Corpus, alcance y fuentes

El corpus establecido está compuesto por 120 cartas escritas por Calvino en francés entre 1538 y 1554. Por el momento, la edición se concentra en las cartas enviadas por Calvino, ya que se han conservado pocas de las cartas recibidas por el reformador.

Los testigos utilizados en la edición digital son, por tanto, el primer volumen de la edición de Jules Bonnet de 1854, que sirve de edición de referencia, y los manuscritos autógrafos, las minutas, las copias antiguas y las ediciones impresas antiguas que funcionan como fuentes primarias. Los manuscritos conservados en la Biblioteca de Ginebra están disponibles mediante enlaces ARK (*Archive Resource Key*). La edición Bonnet y los manuscritos conservados en Gallica, la plataforma digital de la Biblioteca nacional de Francia (BnF), están disponibles, a su vez, mediante el protocolo IIIF (*International Image Interoperability Framework*). Los enlaces ARK e IIIF permiten cargar y mostrar estos facsímiles en la interfaz de la edición, directamente desde la institución que los conserva y en alta calidad. Las demás fuentes primarias y las ediciones impresas antiguas, que constituyen aproximadamente el 15 % del total de las fuentes primarias disponibles, se alojan en el servidor del proyecto como imágenes de alta calidad (`JPG` o `PNG`).

El criterio adoptado para establecer el corpus es la disponibilidad digital de la fuente primaria de la carta. Por ello, 120 de las 124 cartas incluidas en la edición Bonnet, que sirve de edición de referencia, componen el corpus de esta edición digital. Las fuentes primarias de las cuatro cartas siguientes siguen sin localizarse:

- Carta a los Señores de Ginebra de [mayo de 1550]
- Carta a Christophe y Thomas Zollicoffre del 28 de marzo de 1553
- Carta a los fieles de las Islas del 12 de octubre de 1553
- Carta a los Señores de Berna del 4 de octubre de 1554

Por consiguiente, estas cuatro cartas han sido excluidas de la edición digital. Aunque solo cuatro cartas han sido excluidas del corpus debido a la falta de disponibilidad de su fuente primaria, se han reconstruido algunos metadatos de las cartas, en particular ciertas fechas —cuando no se indican explícitamente— y los lugares de destino de las cartas. Esta información se infiere, por lo general, a partir del contexto de la carta, del contexto más amplio de la red de correspondencia y de fuentes históricas externas, incluidas las cartas latinas de Calvino —información a menudo procedente de la edición Bonnet. Cuando el grado de certeza de una información es medio o bajo, esta se indica entre paréntesis —en particular, cuando procede de la edición Bonnet— o entre corchetes, y la inferencia se explica en la anotación correspondiente.

## 3. Principios editoriales y estados del texto

Cada carta se presenta en un aparato crítico que ofrece cuatro modalidades de consulta y estados del texto:

- **Fuente primaria**: facsímiles del manuscrito, de la minuta, de la copia manuscrita o de la edición impresa antigua, acompañados de la información de catálogo de la institución de conservación.
- **Edición Bonnet**: facsímiles y transcripción digital de la edición Bonnet de 1854, cuyo estado lingüístico y organización textual se conservan, salvo la paginación.
- **Versión modernizada y anotada**: modernización principalmente ortográfica y léxica, ya que se conserva la sintaxis para mantener el tono y el estilo del autor y de su época, anotaciones contextuales y textuales, y distinción entre las anotaciones de Bonnet y las nuevas (en verde); una versión comparativa muestra las modificaciones realizadas en el texto de la edición Bonnet.
- **Traducción al español**: traducción de la versión modernizada, alineada aproximadamente por párrafos mediante un desplazamiento o navegación sincronizada.

Una segunda interfaz comparativa, dedicada a una selección de cartas, está disponible en la interfaz francesa y también es accesible desde la interfaz española:

- **Transcripción diplomática del manuscrito autógrafo**: disponible para una selección de manuscritos autógrafos, representativa de la variedad de los manuscritos y utilizada como apoyo para algunas anotaciones textuales; esta transcripción diplomática y su comparación con el texto de la edición Bonnet permiten estudiar las prácticas paleográficas, de transcripción, de regularización y de desarrollo de abreviaturas. ([Véase el protocolo de transcripción](/fr/recherche#protocole_transcription))

### Protocolo editorial y modelo de codificación

La edición digital se basa en un modelo de codificación TEI (*Text Encoding Initiative*) adaptado a la correspondencia, desarrollado por el _TEI Correspondence SIG (Special Interest Group on Correspondence)_<sup><a name="n2" href="#note2">2</a></sup>.

#### Estructura básica de las cartas
- La apertura (`<opener>`) contiene:
	- La dirección de la persona destinataria (`<address>`, que también contiene `<addrLine>`)
	- La fecha y el lugar (`<dateline>`)
	- El saludo inicial (`<salute>`)
- El cuerpo de la carta se estructura en párrafos.
- La parte final (`<closer>`) contiene:
	- La fecha y el lugar (`<dateline>`)
	- La fórmula de despedida (`<salute>`)
	- La firma (`<signed>`)

#### Metadatos de la carta
- La información relativa al archivo, como el título y el nombre de la persona responsable de la edición, figura en el elemento `<titleStmt>`.
- La información relativa a la publicación figura en el elemento `<publicationStmt>`.
- La descripción de las fuentes, dentro del elemento `<sourceDesc>`, también incluye los elementos siguientes:
	- `<msDesc>` para la información principal sobre las fuentes primarias, mayoritariamente manuscritas
	- `<facsimile>` para dar acceso a los facsímiles de la edición Bonnet y de las fuentes primarias
- La información que describe la correspondencia como acontecimiento se codifica mediante los elementos `<profileDesc>`, `<correspDesc>`, `<correspAction>` y `<correspContext>`. El elemento `<desc>` se utiliza para proporcionar un resumen de presentación de la carta y el elemento `<term>`, como elemento hijo de `<list>`, se utiliza para las palabras clave temáticas de la carta.

#### Modernización y anotaciones
- La modernización del francés del siglo XVI, tanto para ofrecer una versión más accesible a un público contemporáneo como para conservar de forma visible la evolución del texto de una edición a otra, se codifica mediante la etiqueta `<choice>` y sus elementos hijos `<orig>` y `<reg>` —o `<sic>` y `<corr>` para corregir los errores detectados en el texto—.
- Las etiquetas `<persName>`, `<placeName>`, `<orgName>` y `<title>` —`<bibl>` para referencias más completas y estructuradas— también se utilizan para codificar entidades nombradas, vinculadas a la base de conocimientos Wikidata —o, en el caso de los títulos de obras mencionadas, a la fuente consultable en línea cuando existe—; las entidades nombradas de las personas destinatarias y de los lugares de envío y destino de las cartas también se vinculan a sus índices respectivos, el índice de personas o el de lugares.
	- *El lugar de destino de la carta, que rara vez se indica explícitamente en la carta, se infiere por lo general del contexto de la carta y de fuentes externas a la correspondencia. No obstante, hay casos en los que el lugar de destino es implícito y evidente por la propia denominación de la persona o personas destinatarias; por ejemplo, a la iglesia de Ginebra, a los señores de Neuchâtel o a los fieles de Lyon. La información sobre el lugar de destino se sitúa en `<correspAction type="received">` con `<settlement>` y también, junto con la información de apertura, dentro de la etiqueta `<dateline>` con `<placeName>`.*
- Las citas de pasajes en latín presentes en el texto se codifican mediante una etiqueta `<hi xml:lang="lat" rend="italic">pasaje o cita en latín</hi>`, seguida de una anotación que contiene la traducción: `<note n="#" type="tradLat" place="bottom"><p>Traducción del pasaje en latín</p></note>`.
- Las anotaciones de esta edición digital se distinguen de las anotaciones de Bonnet mediante el valor *'editorial'* del atributo `@type` del elemento `<note>`, así como por la indicación explícita *[Nota editorial]* al final de la nota. Las notas editoriales también se muestran en verde.
	- Si se cita una carta dentro de una nota, la carta citada se codifica mediante los elementos de la estructura básica de una carta: `<opener>`, `<p>` y `<closer>`, dentro del elemento `<note>` correspondiente.
	- Si se edita una anotación de Bonnet, la adición o la supresión se realiza mediante los elementos `<add type='editorial'>` o `<del>`, respectivamente.
	- Si una nota contiene citas en latín, los pasajes latinos citados y sus traducciones se codifican de la siguiente manera:

```xml
<hi xml:lang="latinq" rend="italic">pasaje o cita en latín</hi>
<hi xml:lang="trad">[traducción]</hi>
```

El protocolo editorial de la traducción al español es similar, salvo por el uso de las etiquetas `<choice>` y de los elementos hijos de la etiqueta `<sourceDesc>`, puesto que la traducción al español no incluye modernización y toma como fuente la versión modernizada establecida de la carta en francés. La correspondencia entre la carta en francés y su traducción al español —utilizada también para la correspondencia francés-español de la interfaz de la edición— se establece mediante el atributo `@xml:id` del elemento `<TEI>` del archivo XML-TEI en francés y el atributo `@corresp` del elemento `<sourceDesc>` del archivo XML-TEI de la traducción española.

	En el archivo XML-TEI en francés:
```xml
<TEI xmlns='http://www.tei-c.org/ns/1.0' xml:lang="fr" xml:id="Destinatario_año_mes">
```
	En el archivo XML-TEI en español:
```xml
<sourceDesc corresp="Destinatario_año_mes"> …
</sourceDesc>
```

Consulte los modelos de codificación [en francés](https://github.com/pippaJeanne/ProcessDocs/blob/main/templateEncodage.xml) y [en español](https://github.com/pippaJeanne/ProcessDocs/blob/main/templateXMLes.xml) para más detalles.

## 4. Protocolo de trabajo
<fig>
<img style="width:100%;" src="/Diagrama_flujo_editorial.png"/>
<figcaption style="text-align:center; font-weight:bold;">Diagrama del flujo de trabajo editorial</figcaption>
</fig>

## 5. Datos, tecnologías y semiautomatización

- **Datos estructurados**: XML-TEI, identificadores estables, metadatos y relaciones entre cartas, personas, lugares y fuentes.
- **Procesos semiautomatizados**: codificación estructural básica y reconocimiento de entidades nombradas, modernización —adición de etiquetas `<choice>`—, extracción de palabras clave temáticas (opcional), consultas SPARQL mediante el punto de acceso SPARQL de Wikidata, generación de índices, publicación de varias vistas a partir de los mismos datos y ayuda para detectar incoherencias.
- **Supervisión humana**: verificación filológica, validación de metadatos, revisión de la modernización y de la traducción, y documentación de las decisiones.

## 6. Control de calidad, incertidumbre y transparencia

Los procesos semiautomatizados imponen ciertas normalizaciones y permiten así identificar errores con mayor facilidad. Asimismo, algunos controles de la interfaz permiten detectar errores de codificación, alineación, enlaces y metadatos para corregirlos. Por ejemplo, si no se muestra la traducción al español, sino la versión modernizada utilizada como alternativa por defecto o la traducción de otra carta, esto indica un error de alineación en la codificación. La automatización contribuye así a la producción y al control de la edición, pero no sustituye ni la interpretación ni la responsabilidad editorial.

En cuanto a la información incierta de fecha, lugar u identidad, esta se indica de manera transparente mediante paréntesis —heredados de Bonnet— y corchetes. Las anotaciones documentan y explican la justificación de una hipótesis y, cuando es posible, proporcionan la fuente de la información. En las visualizaciones, en particular en la visualización cartográfica, los códigos de color también señalan la información incierta y la leyenda explica sus detalles.

Además, las intervenciones editoriales relativas a la modernización, así como las adiciones y supresiones, permanecen visibles en la versión comparativa. Las adiciones y las palabras o frases breves modernizadas se subrayan en verde. El texto original de la edición Bonnet que ha sido modernizado, así como el texto suprimido o corregido, aparece tachado en rojo.

## 7. Usos científicos y límites

Esta edición permite así el estudio de las prácticas editoriales y de transmisión textual, así como el análisis de la lengua, la traducción y la red de correspondencia de Calvino, en particular mediante la navegación transversal por lugares, personas, categorías y temas.

Sin embargo, las visualizaciones y los índices proponen recorridos e hipótesis sobre el corpus que no constituyen pruebas históricas autónomas. Los resultados de los análisis siempre deben ponerse en relación con las cartas, los metadatos y las fuentes.

## 8. Documentación, datos y créditos

Puede consultar la documentación y los datos en los repositorios de GitHub del proyecto: [Process Docs](https://github.com/pippaJeanne/ProcessDocs), para la cadena editorial de procesamiento, y [Lettres de Calvin](https://github.com/pippaJeanne/lettres-calvin), para la publicación y la gestión de la interfaz.

Esta es una lista más detallada de los datos:

- Protocolo editorial y de codificación detallado [en francés](https://github.com/pippaJeanne/ProcessDocs/blob/main/templateEncodage.xml) y [en español](https://github.com/pippaJeanne/ProcessDocs/blob/main/templateXMLes.xml).
- [Esquema XML-TEI personalizado](https://github.com/pippaJeanne/ProcessDocs/tree/main/odd).
- Documentación y condiciones de reutilización: consulte, en particular, los archivos README de cada repositorio; algunas instrucciones más detalladas se encuentran en los respectivos archivos de código o de instrucciones. Los datos y la edición son de acceso abierto. Se agradecen las contribuciones. Los datos y el código pueden reutilizarse con atribución.
- Todos los datos se pueden descargar y cada versión estable está archivada en Zenodo.

### Citas recomendadas:

- ***Cartas de Calvino*:** Calvino, Juan. _Cartas de Calvino_. Editado por Yanet Hernández Pedraza. Universidad de Montreal, 2025. Edición digital. [https://lettres-calvin.netlify.app/es](https://lettres-calvin.netlify.app/es).
- **Repositorios de GitHub:**
	- Hernández Pedraza, Y. (2026). *Lettres de Calvin* (versión v1.4) [software].
	- Hernández Pedraza, Y. (2026). *Process Docs* (versión v1.0.4) [conjunto de datos].
- **Versiones archivadas en Zenodo:**
	- Hernández Pedraza, Yanet. _Lettres de Calvin_. V. 1.4. Zenodo, archivado el 18 de septiembre de 2026. [https://doi.org/10.5281/zenodo.22822414](https://doi.org/10.5281/zenodo.22822414).
	- Hernández Pedraza, Yanet. « Process Docs ». Proceso editorial. V. 1.0.4. Zenodo, 18 de septiembre de 2026. [https://doi.org/10.5281/zenodo.22826915](https://doi.org/10.5281/zenodo.22826915).

### Créditos

Este proyecto forma parte de la investigación doctoral de Yanet Hernández Pedraza, realizada en la Universidad de Montreal.

**Autora del proyecto:** Yanet Hernández Pedraza  
**Codirectores de investigación:** Michael E. Sinatra (Universidad de Montreal) y Dario Brancato (Universidad Concordia)  
**Institución académica:** Universidad de Montreal  
**Financiación:** *Groupe de recherche sur les éditions critiques en contexte numérique (GREN)*, *Fonds de recherche du Québec* y *Études supérieures et postdoctorales (ESP)* de la Universidad de Montreal.

----

### Notas

<p><sup><a name="note1" href="#n1">1</a></sup>Calvin, <em>Lettres de Jean Calvin : lettres françaises.</em></p>
<p><sup><a name="note2" href="#n2">2</a></sup>Véase Stadler et al., « Towards a Model for Encoding Correspondence in the TEI ».</p>

### Referencias

<p style="text-indent: -1em;">Calvin, Jean. <em>Lettres de Jean Calvin : lettres françaises. T. 1 / recueillies pour la première fois et publ. d’après les ms. originaux par Jules Bonnet</em>. Editado por Jules Bonnet. 1 vol. <em>Lettres de Jean Calvin</em>. Librarie de Ch. Meyrueis et compagnie, 1854. <a href="https://gallica.bnf.fr/ark:/12148/bpt6k209248w">https://gallica.bnf.fr/ark:/12148/bpt6k209248w</a>.</p>

<p style="text-indent: -1em;">Stadler, Peter, Marcel Illetschko, et Sabine Seifert. « Towards a Model for Encoding Correspondence in the TEI: Developing and Implementing &lt;correspDesc&gt; ». <em>Journal of the Text Encoding Initiative</em>, n° 9 (septiembre 2016): Issue 9. <a href="https://doi.org/10.4000/jtei.1433">https://doi.org/10.4000/jtei.1433</a>.</p>