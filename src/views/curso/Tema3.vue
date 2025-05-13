<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Análisis de la situación legal y política'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/37.png", data-aos="zoom-in")        
         
      .col-lg-8
        p(data-aos="fade-down") El análisis de normativas, códigos, instituciones, tanto públicas como privadas y corrientes ideológicas, resulta fundamental para comprender la manera en que el entorno político y legal influye en el comportamiento de las organizaciones. Este impacto se ha intensificado con el tiempo, afectando directamente su operación y toma de decisiones.

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/1.svg")
            .col-lg
              p.mb-0 Entre los principales factores que inciden en este ámbito, se encuentran la política fiscal, monetaria y de seguridad social, además de la legislación en áreas como la tributaria, comercial, laboral y penal.

    .row  
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") También influyen las normativas sobre relaciones internacionales, protección ambiental, regulación y privatización, así como las leyes en distintos niveles de gobierno (federal, estatal y municipal) y la estructura del poder.           
        .bg-color-2.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 En los últimos años, ha cobrado relevancia el diseño institucional y normativo para garantizar el adecuado funcionamiento de los mercados y las políticas públicas. 

        p(data-aos="fade-down") Las políticas implementadas por los gobiernos modernos, tienen un impacto significativo, tanto en la sociedad como en las empresas. Algunas de las más relevantes son:            
      .col-lg-4 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/38.png", data-aos="zoom-in")  

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/39.png", alt="")    
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Política fiscal y monetaria")
            p Se refiere a la gestión del gasto público, la cantidad de dinero en circulación y las leyes tributarias que regulan la economía. 
          .div(titulo="Legislación social y normativa ambiental")
            p Abarca regulaciones enfocadas en la protección del medio ambiente, como las leyes contra la contaminación, así como normativas para la inclusión social y étnica. Un área aún en desarrollo es la regulación del comercio electrónico, especialmente en aspectos relacionados con la privacidad y la seguridad del consumidor.
          .div(titulo="Relación entre el gobierno y los sectores productivos")
            p Incluye medidas como subsidios agrícolas, programas de infraestructura, impuestos al comercio exterior y políticas energéticas. Además, la tendencia hacia la desregulación o la centralización de actividades gubernamentales es un aspecto que preocupa a los administradores, quienes deben adaptarse a estos cambios. Cabe destacar que, aunque las políticas de relación con los sectores productivos no imponen obligaciones directas a las empresas, sí proporcionan un marco de referencia útil para su gestión. Asimismo, en muchos países, el gobierno es el mayor comprador de bienes y servicios, lo que refuerza su impacto en el sector económico.
          .div(titulo="Normativas de defensa económica")
            p Son regulaciones orientadas a proteger la competencia y los derechos del consumidor, asegurando condiciones justas en el mercado.                                              

    p(data-aos="fade-down") A nivel regional y municipal, también existen disposiciones que inciden en la planeación estratégica de las organizaciones, aspectos como los impuestos locales, las leyes sobre transporte, el uso del espacio público y las regulaciones de saneamiento pueden influir en mayor o menor medida en la forma en que operan las empresas y en las decisiones que toman para su desarrollo.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/40.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Entorno político y legal
            p.mb-4(data-aos="fade-right") El análisis del entorno político y legal es una dimensión clave en la planeación estratégica de las organizaciones, puesto que define las reglas del juego bajo las cuales deben operar y adaptarse en contextos dinámicos. En el PDF Entorno político y legal, se examinan factores como la corrupción, la violencia, las políticas gubernamentales y los marcos regulatorios que impactan directamente en la estabilidad y proyección de las empresas. Este material ofrece una visión integral sobre cómo estos elementos influyen en la toma de decisiones, e invita a reflexionar sobre la necesidad de diseñar estrategias que respondan de manera efectiva, a los desafíos legales y políticos del entorno.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Entorno político y legal

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=274320119002" target="_blank" rel="noopener noreferrer") Fernández Alles, M. T. (2011). El análisis del entorno político y legal en el marco de la planificación estratégica en el sector turístico y hotelero. Cuadernos de Gestión, 11(2), 37-52. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/384356284_La_territorializacion_como_propuesta_de_analisis_de_politicas_publicas" target="_blank" rel="noopener noreferrer") Murillo, E. & Bernal-Olarte, A. F. (2024). La territorialización como propuesta de análisis de políticas públicas. Revista de la Universidad de Zulia 15(44), 386-409. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/p-PaHuRN_gw?si=2QAinZjl7KcEWcDk" target="_blank" rel="noopener noreferrer") Confidencial. (2018). Crisis política afecta a las empresas de microfinanzas.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
