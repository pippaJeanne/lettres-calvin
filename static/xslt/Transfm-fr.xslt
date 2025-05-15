<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:tei="http://www.tei-c.org/ns/1.0" version="1.0">
    
    <xsl:output method="html"/>

<xsl:variable name="map">
<xsl:text>/fr/carte</xsl:text>
</xsl:variable> 
<xsl:variable name="persIndex">
<xsl:text>/fr/index_noms</xsl:text>
</xsl:variable> 

<xsl:template match="tei:TEI">
<xsl:apply-templates select="tei:text"/>
<hr width="40%" style="margin-top:1rem;margin-bottom:1rem;margin-left:30% ;border-top:1px solid #4d596b;"/>
<text><h2>Bibliographie</h2>
  </text>
<xsl:apply-templates select="tei:teiHeader"/>
</xsl:template>

<xsl:template match="tei:text">
   <xsl:apply-templates/>
   <hr width="40%" style="margin-top:1rem;margin-bottom:1rem;margin-left:30% ;border-top:1px solid #4d596b;"/>
  <div>
  <h2>Notes</h2>
  <xsl:for-each select=".//tei:note[@place]">
   <div style="display:flex;flex-direction:row;">
    <span style="font-size:.9rem;">
    <a class="sup" style="text-decoration:none;"> 
    <xsl:attribute name="href">
    #<xsl:value-of select="./@n"/>FR</xsl:attribute>
    <xsl:attribute name="name">
    <xsl:value-of select="./@n"/>fr</xsl:attribute>
    <xsl:value-of select="./@n"/>
    </a> 
    </span>
    <span>
    <xsl:apply-templates/>
    </span>
   </div>
   </xsl:for-each>
  </div>

</xsl:template>

<xsl:template match="tei:teiHeader">
<xsl:apply-templates/>
</xsl:template>

<xsl:template match="tei:titleStmt">
  <span style="display:none;">
  <xsl:value-of select="./tei:title"/>
  </span>
  <xsl:for-each select="./tei:editor">
  <p> 
  <span style="font-weight:bold;">
  <xsl:value-of select="./@role"/> : </span>
  <span><xsl:value-of select="."/></span>
  </p>
  </xsl:for-each>
</xsl:template> 

<xsl:template match="tei:publicationStmt">
</xsl:template> 


  <xsl:template match="tei:bibl">

    <p style="font-style:italic;">
    <xsl:apply-templates/>
    </p>

  </xsl:template>

   <xsl:template match="tei:notesStmt">

    <p style="font-style:italic;">
    <xsl:value-of select="."/>

    </p>

  </xsl:template>

  <xsl:template match="tei:body/tei:opener/tei:note">
    <h6>
     <xsl:apply-templates/>
    </h6>
  </xsl:template>

  <xsl:template match="tei:hi[@rend='bold']">
    <h5 style="font-weight:bold; margin-bottom:.1rem;">
      <xsl:apply-templates/>
    </h5>
  </xsl:template>
   <xsl:template match="tei:hi[@xml:id='editorNote']">
    <h5 style="font-weight:bold;margin-top:.1rem;color:green;">
      <xsl:apply-templates/>
    </h5>
  </xsl:template>
  
  <xsl:template match="tei:body//tei:p">
    <p>
      <xsl:apply-templates/>
    </p>
  </xsl:template>

  <xsl:template match="tei:body//tei:p/text()">
    <span>
      <xsl:value-of select="."/>
    </span>
  </xsl:template>

   <xsl:template match="tei:choice/tei:reg">
    <span>
    <xsl:value-of select="."/>
    </span>
  </xsl:template>

   <xsl:template match="tei:choice/tei:orig">
  </xsl:template>

  <xsl:template match="tei:choice/tei:corr">
    <span>
    <xsl:value-of select="."/>
    </span>
  </xsl:template>

   <xsl:template match="tei:choice/tei:sic">
  </xsl:template>

   <xsl:template match="tei:add">
    <span>
    <xsl:value-of select="."/>
    </span>
  </xsl:template>

  <xsl:template match="tei:note//tei:add[@type='editorial']">
    <span style="color: #27753c !important;">
    <xsl:apply-templates/>
    </span>
  </xsl:template>

  <xsl:template match="tei:note[@type='editorial']/tei:p">
    <p style="color: #27753c !important;">
    <xsl:apply-templates/>
    </p>
  </xsl:template>

  <xsl:template match="tei:note[@type='tradLat']/tei:p">
    <p style="color: #27753c !important;">
    <xsl:apply-templates/>
    </p>
  </xsl:template>

  <xsl:template match="tei:hi[@xml:lang='trad']">
    <span style="color: #27753c !important;">
    <xsl:apply-templates/>
    </span>
  </xsl:template>


  <xsl:template match="tei:p/tei:hi[@rend='italic']">
    <span style="font-style:italic;">
    <xsl:apply-templates/>
    </span>
  </xsl:template>

  <xsl:template match="tei:address">
    <h2>
    <xsl:apply-templates/>
    </h2>
  </xsl:template>

  <xsl:template match="tei:dateline[@xml:id='opener']">
    <h6 class="toRight">
    <xsl:apply-templates/>
    </h6>
  </xsl:template>

  <xsl:template match="tei:dateline/text()">
  <span>
    <xsl:value-of select="."/>
    </span>
  </xsl:template>

  <xsl:template match="tei:dateline/tei:date/text()">
  <span>
    <xsl:value-of select="."/>
    </span>
  </xsl:template>

  <xsl:template match="tei:salute">
    <p>
    <xsl:apply-templates/>
    </p>
  </xsl:template>

  <xsl:template match="tei:signed">
    <p class="toRight">
    <xsl:apply-templates/>
    </p>
  </xsl:template>

  <xsl:template match="tei:signed/text()">
    <span><strong>
    <xsl:value-of select="."/>
    </strong>
    </span>
  </xsl:template>

<xsl:template match="tei:signed//tei:reg">
    <span><strong>
    <xsl:value-of select="."/>
    </strong>
    </span>
  </xsl:template>
  
<xsl:template match="tei:dateline/tei:placeName">
    <strong>
      <a style="color:inherit !important; text-decoration: underline;">
    <xsl:attribute name="href"><xsl:value-of select="$map"/>
    </xsl:attribute>
      <xsl:apply-templates/>
    </a>
    </strong>
  </xsl:template>

  <xsl:template match="tei:placeName">
    <strong>
      <a style="color:inherit !important; text-decoration: underline;">
    <xsl:attribute name="href"><xsl:value-of select="./@ref"/>
    </xsl:attribute>
      <xsl:apply-templates/>
    </a>
    </strong>
  </xsl:template>

<xsl:template match="tei:orgName">
    <strong>
      <a style="color:inherit !important; text-decoration: underline;">
    <xsl:attribute name="href"><xsl:value-of select="./@ref"/>
    </xsl:attribute>
      <xsl:apply-templates/>
    </a>
    </strong>
  </xsl:template>
  

  <xsl:template match="tei:persName">
   <xsl:choose>
  <xsl:when  test="@corresp">
    <strong>
    <a style="color:inherit !important; text-decoration: underline;">
    <xsl:attribute name="href"><xsl:copy-of select="$persIndex"/><xsl:value-of select="./@corresp"/>
    </xsl:attribute>
      <xsl:apply-templates/>
    </a>
    </strong>
    </xsl:when>
    <xsl:when test="@ref">
    <strong>
    <a style="color:inherit !important; text-decoration: underline;">
    <xsl:attribute name="href"><xsl:value-of select="./@ref"/>
    </xsl:attribute>
      <xsl:apply-templates/>
    </a>
    </strong>
    </xsl:when>
    <xsl:otherwise>
      <strong>
      <xsl:apply-templates/>
    </strong>
    </xsl:otherwise>
   </xsl:choose>
  </xsl:template>

<xsl:template match="tei:p//tei:title">
   <xsl:choose>
  <xsl:when  test="@ref">
    <em>
    <a style="color:inherit !important; text-decoration: underline;">
    <xsl:attribute name="href"><xsl:value-of select="./@ref"/>
    </xsl:attribute>
      <xsl:apply-templates/>
    </a>
    </em>
    </xsl:when>
    <xsl:otherwise>
      <em>
      <xsl:apply-templates/>
    </em>
    </xsl:otherwise>
   </xsl:choose>
  </xsl:template>

<xsl:template match="tei:p//tei:bibl">
  <xsl:apply-templates/>
</xsl:template>

  <xsl:template match="tei:hi[@rend='superscript']">
    <sup>
      <xsl:copy-of select="."/>
    </sup>
  </xsl:template>

  <xsl:template match="tei:note[@place]">
    <sup>
    <a class="sup" style="text-decoration:none;cursor:pointer;"> 
    <xsl:attribute name="title">
      <xsl:apply-templates/>
    </xsl:attribute>
    <xsl:attribute name="name">
    <xsl:value-of select="./@n"/>FR</xsl:attribute>
    <xsl:attribute name="href">#<xsl:value-of select="./@n"/>fr</xsl:attribute>
    <xsl:value-of select="./@n"/>
    </a> 
    </sup>
  </xsl:template>

  <xsl:template match="//tei:*[@rend='underline']">
  <span style="text-decoration: underline;"><xsl:apply-templates/></span>
  </xsl:template>

  <xsl:template match="tei:profileDesc">
  </xsl:template>
  <xsl:template match="tei:msDesc//tei:settlement">
  </xsl:template>
   <xsl:template match="tei:msDesc">
   <p style="font-style:italic;">
    <xsl:apply-templates/>
    </p>
  </xsl:template>
   <xsl:template match="tei:repository">
   <span style="font-style:italic;">
    <xsl:apply-templates/><xsl:text> : </xsl:text>
    </span>
  </xsl:template>
   <xsl:template match="tei:idno">
   <span style="font-style:italic;">
    <xsl:apply-templates/>
    </span>
  </xsl:template>

</xsl:stylesheet>