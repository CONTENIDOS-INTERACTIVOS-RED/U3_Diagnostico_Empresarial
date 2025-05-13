<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Análisis del entorno competitivo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5       
      .col-lg-8
        p(data-aos="fade-down") El diagnóstico externo es un paso necesario en la planificación estratégica; este análisis permite identificar y conocer el estado actual del entorno en el que opera una empresa o institución y, para ello, se aplican herramientas como matriz PESTEL o las Cinco Fuerzas de Porter.

        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/5.svg")
            .col-lg
              p.mb-0 Con base en este diagnóstico, se diseñan propuestas de soluciones que permitan aprovechar oportunidades y mitigar riesgos. Estas soluciones pueden incluir estrategias de diversificación, innovación, alianzas estratégicas o mejoras en la eficiencia operativa. 

        p(data-aos="fade-down") En la presente unidad, se abordarán los elementos que hacen parte de este diagnóstico, de manera que se conocerá cómo, a partir de dicha investigación, las empresas pueden establecer sus planes y definir sus estrategias de manera segura.

        p(data-aos="fade-down") La unidad se encuentra estructurada en cuatro ejes temáticos, 
              
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/6.png", data-aos="zoom-in")  

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/7.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Análisis del entorno competitivo
            p.mb-4(data-aos="fade-right") El análisis del entorno competitivo es un componente esencial del diagnóstico estratégico, dado que permite a las organizaciones comprender las dinámicas externas que influyen en su funcionamiento y sostenibilidad. En el PDF Análisis del entorno competitivo, se exploran los factores macro y microambientales que inciden en la toma de decisiones empresariales, así como las herramientas conceptuales que facilitan la identificación de amenazas y oportunidades.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Análisis del entorno competitivo

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Análisis del macroentorno

    .row 
      .col-lg-8.mb-3.mb-lg-0  
        .bg-color-2.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 El entorno contextual o macroentorno de una organización, es el conjunto de condiciones externas con las que interactúa constantemente; actúa como sistema abierto, cualquier cambio en sus elementos (económico, político, sociocultural, ambiental, tecnológico y legal), puede afectar su funcionamiento. Sin embargo, estos cambios no impactan solo a una empresa, sino a muchas, aunque con diferente intensidad.
        p(data-aos="fade-down") Es importante entender cómo las transformaciones del entorno influyen en los negocios y cómo están evolucionando; tener este conocimiento ayuda a las empresas a diseñar estrategias y a lograr adaptarse.  
        p(data-aos="fade-down") Aunque hay mucha información disponible, suele ser dispersa o imprecisa, por lo que es necesario recopilarla y analizarla para detectar tendencias y anticipar el futuro del mercado. Dado que las empresas no pueden controlar el entorno, deben desarrollar la capacidad de adaptarse y responder eficazmente a los cambios.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/9.png", data-aos="zoom-in")   
    h3(data-aos="fade-down") Las cuatro fuerzas disruptivas
    p(data-aos="fade-down") Al realizar un diagnóstico estratégico externo, es fundamental considerar la influencia de cuatro fuerzas disruptivas que están transformando de manera significativa, el panorama global.

    .bg-full-width.bg-color-info(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-acento-contenido
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/8.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="71%" y="32%" numero="+")
                  h5 01. La era de la urbanización.
                  p El crecimiento de la población y la urbanización, han sido tendencias constantes en las últimas tres décadas, con un aumento anual de aproximadamente 65 millones de personas, lo que equivale a la aparición de varias ciudades del tamaño de Chicago, cada año. Este fenómeno ha llevado a un incremento en la urbanización y la creación de nuevos mercados.
                .bg-color-white.box-shadow.p-3(x="97%" y="32%" numero="+")
                  h5 02. Los cambios tecnológicos.
                  p El avance tecnológico ha transformado rápidamente la manera en que se desarrollan los productos, servicios y soluciones, reduciendo su ciclo de vida y generando una evolución significativa en la capacidad de procesamiento y conectividad. Además, ha impulsado una revolución en el manejo de los datos y en la forma en que se estructuran los modelos de negocio.
                .bg-color-white.box-shadow.p-3(x="71%" y="76%" numero="+")
                  h5 03. Un mundo de edad, cada vez más avanzada.
                  p La población mundial está envejeciendo debido a una reducción en los índices de fertilidad y una mayor esperanza de vida, lo que está modificando la estructura demográfica global.
                .bg-color-white.box-shadow.p-3(x="97%" y="76%" numero="+")
                  h5 04. Intenso flujo de comercio, personas y datos
                  p El comercio, la movilidad de las personas, el flujo financiero y el intercambio de información, han crecido a niveles sin precedentes, fortaleciendo la interconexión global y facilitando un entorno dinámico de transacciones y relaciones comerciales.                                                         
    .bg-full-width.bg-color-1.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/1.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") La dinámica del entorno no se limita únicamente a estas cuatro fuerzas que generan disrupción, aunque sí representan los factores con mayor influencia sobre los demás, sin embargo, resulta fundamental analizar el ecosistema en su totalidad para comprender cómo afecta a la organización. Lo verdaderamente importante es que esta se adapte de manera efectiva, desarrollando estrategias que le permitan enfrentar los retos que surgen, e identificar y aprovechar las oportunidades que el contexto le brinda.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Análisis del microentorno (microambiente)

    .row 
      .col-lg-8.mb-3.mb-lg-0  
        .bg-color-3.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Las organizaciones, también deben comprender el entorno industrial o específico en el que operan, porque este influye de manera más directa en sus actividades diarias. Dicho entorno está conformado por diversos actores, como competidores, proveedores, clientes, productos sustitutos o complementarios, así como la intensidad de la competencia, dentro de una misma industria.
        p(data-aos="fade-down") El sector o industria se define como el conjunto de empresas que ofrecen bienes o servicios similares o que pueden sustituirse entre sí. No obstante, delimitar con precisión los sectores, se ha vuelto más complejo, debido a que muchas compañías han diversificado sus actividades y, además de competir entre sí, enfrentan la competencia de otras industrias, incluido el sector financiero.

        p(data-aos="fade-down") Según Porter (1987), la competitividad dentro de un sector, está determinada por cinco fuerzas principales:
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/10.png", data-aos="zoom-in")                          

    .titulo-figura(data-aos="fade-right")
      h5 Figura 1. 
      span Las cinco fuerzas de Porter
    .bg-color-5.p-4.mb-1(data-aos="fade-left")
      figure
        img.img-a.img-t(src="@/assets/curso/temas/11.svg", data-aos="zoom-in") 
    figcaption.mb-5 Nota: tomado y adaptado de Bernal Torres & Sierra Arango (2017)

    p(data-aos="fade-down") Analicemos cada una de ellas:

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/12.png", alt="")    
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Amenaza de nuevos competidores")
            p La llegada de empresas al mercado puede generar cambios significativos, porque los nuevos participantes buscan posicionarse ofreciendo precios más bajos, innovación o mejoras en la calidad. La facilidad con la que pueden ingresar al sector depende de barreras como economías de escala, regulaciones gubernamentales y acceso a canales de distribución.
          .div(titulo="Rivalidad entre competidores existentes")
            p El grado de competencia dentro de una industria varía, según la cantidad de empresas y su capacidad para diferenciarse. Si existen muchos competidores y los productos son similares, la rivalidad suele ser intensa, lo que puede derivar en guerras de precios, mejoras constantes en la calidad y estrategias de fidelización, para retener clientes.
          .div(titulo="Poder de negociación de los proveedores")
            p Los proveedores pueden influir en la rentabilidad de una empresa al modificar los costos de insumos o limitar su disponibilidad. Su nivel de poder depende de factores como la cantidad de proveedores en el mercado, la existencia de insumos sustitutos y la dependencia de las empresas hacia ciertos materiales o servicios.                                         

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8.mb-3.mb-lg-0  
        AcordionA(tipo="b")
          .div(titulo="Amenaza de productos sustitutos")
            p Los productos sustitutos representan una opción alternativa para los consumidores, lo que puede reducir la demanda de los bienes o servicios de una empresa. Cuanto más atractivo sea el sustituto en términos de precio, calidad o conveniencia, mayor será el impacto en la industria.
          .div(titulo="Poder de negociación de los compradores")
            p Los clientes tienen la capacidad de influir en el mercado al exigir precios más bajos, mayor calidad o mejores servicios. Su poder depende de la cantidad de opciones disponibles, la facilidad para cambiar de proveedor y la sensibilidad del consumidor a los cambios en los productos o precios.
          .div(titulo="Análisis del ambiente competitivo")
            p Además del estudio del entorno general y del sector, es fundamental analizar a los competidores directos. Este análisis, conocido como inteligencia competitiva, proporciona información valiosa sobre sus estrategias, objetivos, capacidades y recursos. Con esta información, las organizaciones pueden tomar decisiones más acertadas para mejorar su posición en el mercado y desarrollar ventajas competitivas.                                      
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/13.png", alt="") 


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=29062051021" target="_blank" rel="noopener noreferrer") Bravo Rojas, L. M., Valenzuela Muñoz, A., Ramos Vera, P. M. & Tejada Arana, A. A. (2019). Perspectiva teórica del diagnóstico organizacional. Revista Venezolana de Gerencia, 24(88), 1316-1328. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/993/99357718032/html/" target="_blank" rel="noopener noreferrer") González, J., Salazar, F., Ortiz, R. & Verdugo, D. (2019). Gerencia estratégica: herramienta para la toma de decisiones en las organizaciones. Telos, 21(1), 242-267. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://gc.scalahed.com/recursos/files/r161r/w24802w/Bernal_C.Sierra_H_2008_El_Proceso_Administrativo_para_las_organizaciones_del_siglo_XXI_CAP3.pdf" target="_blank" rel="noopener noreferrer") Bernal, C & Sierra H. (2008) Proceso administrativo para las organizaciones del siglo XXI. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/6qEWc8Z5x2E?si=eniB47naW3PhfGdS" target="_blank" rel="noopener noreferrer") Luis SILVA DOMINGO. (2022). Fundamentos de Análisis externo de una organización.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
