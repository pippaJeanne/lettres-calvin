<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:tei="http://www.tei-c.org/ns/1.0" version="2.0">
  
  <xsl:output method="html"/>
  
  <xsl:variable name="map">
    <xsl:text>/fr/carte</xsl:text>
  </xsl:variable> 
  <xsl:variable name="persIndex">
    <xsl:text>/fr/index_noms</xsl:text>
  </xsl:variable>
  
  <xsl:template match="tei:TEI">
    <xsl:apply-templates select="tei:teiHeader"/>
    <xsl:apply-templates select="tei:text"/>
  </xsl:template>
  
  <xsl:template match="tei:text">
    <xsl:apply-templates/>
    
  </xsl:template>
  
  <xsl:template match="tei:teiHeader">
    <xsl:apply-templates/>
  </xsl:template>
  
  <xsl:template match="tei:titleStmt">
  </xsl:template> 
  
  <xsl:template match="tei:publicationStmt">
  </xsl:template> 
  
  
  <xsl:template match="tei:bibl">
  </xsl:template>
  
  <xsl:template match="tei:notesStmt">
  </xsl:template>
  
  <xsl:template match="tei:note/tei:p">
    <span>
      <xsl:apply-templates/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:body//tei:note">
    <span class="footnote">
          <xsl:attribute name="data-note"><xsl:value-of select="./@n"/></xsl:attribute>
          <xsl:attribute name="id">note-<xsl:value-of select="./@n"/></xsl:attribute>
      <xsl:choose>
        <xsl:when test="@type='editorial'">
          <xsl:apply-templates select="tei:note[@type='editorial']/tei:p"/>
        </xsl:when>
        <xsl:when test="@type='tradLat'">
          <xsl:apply-templates select="tei:note[@type='tradLat']/tei:p"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:apply-templates select="tei:note/tei:p"/>
        </xsl:otherwise>
      </xsl:choose>
      <xsl:apply-templates/>
    </span>
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
  
  <xsl:template match="tei:hi[@xml:id='editorNote']/tei:hi">
    <span><xsl:apply-templates/></span>
    <br/>
  </xsl:template>
  
  <xsl:template match="tei:body//tei:p[not(ancestor::tei:note)]">
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
  <xsl:template match="tei:del">
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
    <span style="color: #27753c !important;">
      <xsl:apply-templates/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:note[@type='tradLat']/tei:p">
    <span style="color: #27753c !important;">
      <xsl:apply-templates/>
    </span>
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
    <span style="font-weight:bold; font-size:1.1em;">
    <xsl:apply-templates/>  
    </span>
  </xsl:template>
  
  <xsl:template match="tei:address//tei:note">
    <xsl:apply-templates/>
  </xsl:template>
  
  <xsl:template match="tei:address//tei:note/tei:p">
    <p style="font-size:11pt;"><em>
      <xsl:apply-templates/>
      </em>
    </p>
  </xsl:template>
  
  <xsl:template match="tei:dateline[@xml:id='opener']">
    <h6 class="toRight">
      <xsl:apply-templates/>
    </h6>
  </xsl:template>
  
  <xsl:template match="tei:closer">
    <p>
      <xsl:apply-templates/>
    </p>
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
  
  
  <xsl:template match="//tei:*[@rend='underline']">
    <span style="text-decoration: underline;"><xsl:apply-templates/></span>
  </xsl:template>
  
  <xsl:template match="tei:ref">
    <span>
      <a style="text-decoration: underline; color:green !important;">
        <xsl:attribute name="href">
          <xsl:value-of select="./@target"/>      
        </xsl:attribute>
        <xsl:apply-templates/>
      </a>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:profileDesc">
  </xsl:template>
  <xsl:template match="tei:msDesc//tei:settlement">
  </xsl:template>
  <xsl:template match="tei:msDesc">
  </xsl:template>
  <xsl:template match="tei:repository">
  </xsl:template>
  <xsl:template match="tei:idno">
  </xsl:template>
  
  <xsl:template match="tei:hi[@xml:id='editorNote']//tei:title">
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
  
  <xsl:template match="tei:hi[@xml:id='editorNote']//tei:bibl">
    <xsl:apply-templates/>
  </xsl:template>
  
</xsl:stylesheet>