// eslint-disable-next-line
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import '../css/style_home.css';
import { motion } from 'framer-motion';
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";

// Imagens utilizadas no carrossel.
import carrossel_1 from '../imagens/carrossel_1.jpg';
import carrossel_2 from '../imagens/carrossel_2.jpg';
import carrossel_3 from '../imagens/carrossel_3.jpg';
import carrossel_4 from '../imagens/carrossel_4.jpg';
import carrossel_5 from '../imagens/carrossel_5.jpg';
import carrossel_6 from '../imagens/carrossel_6.jpg';
import carrossel_7 from '../imagens/carrossel_7.jpg';
import carrossel_8 from '../imagens/carrossel_8.jpg';
import icon_chevron from '../imagens/right_chevron_icon.png';


const imagens = [carrossel_1, carrossel_2, carrossel_3, carrossel_4, carrossel_5, carrossel_6, carrossel_7, carrossel_8];
const icon = [icon_chevron];

function AppHome() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  
  // Hook utilizado para que o carrossel tenha uma largura definida.
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  
  // Funções utilizadas para funcionalidade dos botões do carrossel.
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (

    <main className='home'>
      {/* Cabeçalho */}
      <>
        <NavBar />
      </>
       
      {/* Carrossel */}
      <div>
        <motion.div ref={carousel} className='carousel' whileTop={{ cursor: "grabbing" }}>
          <motion.div
            className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -width }}>
            {imagens.map(imagem => (
              <motion.div className='item' key={imagem}>
                <img src={imagem} alt="Imóvel" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className='buttons'>
          <button className='button-home' onClick={handleLeftClick}><img src={icon} alt="Scroll Left" /></button>
          <button className='button-home' onClick={handleRightClick}><img src={icon} alt="Scroll Rigth" /></button>
        </div>
      </div>
      <hr />
  
      {/* Apresentação da empresa */}
      <div className='quem-somos'>
        <h2 className='text-home-h2'>QUEM SOMOS</h2>
        <h4 className='text-home-h4'>HISTÓRIA</h4>
        <p className='text-home-p'>A Azul Imobiliária iniciou suas atividades em 2011 visando construir a sua história no mercado imobiliário do Rio de Janeiro de forma sólida, confiável e duradoura. Trata-se de imobiliária atuante no mercado, com um histórico íntegro e de ótimas negociações. Ética profissional e transparência são imprescindíveis no mercado imobiliário. A busca pela excelência é à maneira de crescimento neste mercado, sendo assim, a AZUL IMOBILIÁRIA oferece para o seus clientes um atendimento personalizado, o que resulta em segurança a todos os negócios realizados, satisfazendo aos nossos clientes. A atuação com dinamismo e profissionalismo na prestação de serviços, faz da AZUL IMOBILIÁRIA uma das empresas mais eficientes no mercado imobiliário nacional. Fale Conosco e faça parte desta família você também! AZUL IMOBILIÁRIA Rua Barão de São Januario, 164 - loja Vasco da Gama - Rio de Janeiro - CEP: 18981-998 (211) 42088-36164 - (211) 0960065-26068 contato@azulimobiliaria.com.br</p>
        <h4 className='text-home-h4'>MISSÃO</h4>
        <p className='text-home-p'>Agir com eficácia revelando a solução que nosso cliente precisa para proceder seu negócio imobiliário com segurança e rentabilidade.</p>
        <h4 className='text-home-h4'>NOSSA VISÃO</h4>
        <p className='text-home-p'>Caminhar com os aparatos tecnológicos, sempre de mãos dadas com a ética corporativa, visando levar os serviços imobiliários ao nosso cliente com a devida excelência.</p>
       
        <h4 className='text-home-h4'>NOSSOS VALORES</h4>
        <p className='text-home-p'>Viver a transparência negocial na prática. Executar todo e qualquer serviço pautado na segurança. Qualificação de nossa equipe e estrutura buscando sempre a inovação. Fidelidade às partes envolvidas, utilizando-se da imparcialidade para gerir o negócio. Atender respeitosamente a todos que nos buscam, independente de seus crédulos, raça, condição econômica ou sexualidade.</p>
        <hr />
      </div>

      {/* Cards com imóveis disponíveis */}
      <div id="App" className="App">

        <h1 className='text-home-h1'>AZUL IMOBILIÁRIA</h1>
        <h2 className='slogan'>AZUL, A COR DA SUA NOVA CASA!</h2>

        <div class="row">
          <div class="card green">
            <h1>R$5.000,00/mês</h1>
            <h3>Av das Américas, Barra da Tijuca. RJ</h3>
            <h4>4 Quartos | 3 Banheiros | 2 Garagens</h4>
            <h4>Falar com Dalton: (211) 296489-13310</h4>
            <br></br>

            <img class="imagem-card" src="https://images.adsttc.com/media/images/5f90/e509/63c0/1779/0100/010e/slideshow/3.jpg?1603331288" alt="money" />
          </div>

          <div class="card green">
            <h1>R$11.000,00/mês</h1>
            <h3>Estrada do Rio Grande, Taquara. RJ</h3>
            <h4>6 Suites | 6 Banheiros | 2 Garagens</h4>
            <h4>Falar com Jordan: (211) 967650-12561</h4>
            <br></br>

            <img class="imagem-card" src="https://imgbr.imovelwebcdn.com/avisos/resize/2/29/73/83/82/19/1200x1200/3617589257.jpg" alt="money" />
          </div>

          <div class="card green">
            <h1>R$660,00/mês</h1>
            <h3>Almirante Ary Parreiras, RJ</h3>
            <h4>1 Quarto | 1 Banheiro | 1 Garagem</h4>
            <h4>Falar com Lara: (21) 98356-6482</h4>
            <br></br>

            <img class="imagem-card" src="https://system.soprojetos.com.br/files/996/medium/modelo_de_casa__versao_do_cod_99-cod_136-foto-1.jpg?1491503841" alt="money_1" />
          </div>

          <div class="card green">

            <h1>R$1.610,00/mês</h1>
            <h3>Avenida Atlântica, RJ</h3>
            <h4>3 Quartos | 2 Banheiros | 1 Garagem</h4>
            <h4>Falar com Yasmin: (21) 97205-4101</h4>
            
            <br></br>

            <img class="imagem-card" src="https://system.soprojetos.com.br/files/1491/medium/PAD-COD43-FOTO-1-WEB.jpg?1659015535" alt="money" />
            
          </div>

          <div class="card green">
            <h1>R$1.750,00/mês</h1>
            <h3>Rua Porto Amazonas, RJ</h3>
            <h4>3 Salas | 2 Banheiros | 2 Garagens</h4>
            <h4>Falar com Brian: (21) 99255-0986</h4>

           <br></br>

            <img class="imagem-card" src="https://system.soprojetos.com.br/files/615/medium/casa_popular_cod100_2quartos.jpg?1491510183" alt="money" />
          </div>

          <div class="card green">

            <h1>R$1.200,00/mês</h1>
            <h3>Rua Fernando Jr, RJ</h3>
            <h4>2 Salas | 2 Banheiros | 0 Garagem</h4>
            <h4>Falar com Gabrielly: (21) 99483-5925</h4>

            <br></br>
            <img class="imagem-card" src="https://system.soprojetos.com.br/files/597/medium/primeira_obra_da_madrugada.jpg?1491504043" alt="money" />
          
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <>
        <Footer />
      </>
    </main>


  );
}

export default AppHome;
