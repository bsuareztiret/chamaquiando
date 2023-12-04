const SectionBio = () => {
  const defaultPROPS = {
    title: "Lorem, ipsum dolor.",
    blocOne: "Chama fue uno de los primeros músicos cubanos en instalarse en Bélgica. Chama está rodeado de algunos de los mejores músicos del panorama latinoamericano, y está considerado como uno de los mejores en el mundo de la salsa. Chama es un cantautor que ha dado miles de conciertos con artistas de todo el mundo, entre ellos: Khadja Nin, Francis Goya, Two Men Sounds, y muchos otros. ¿Quieres organizar una fiesta, un cumpleaños o una boda? En un ambiente de Salsa, Brasileño, Merengue, Bachata, Reggaetoon, Música Caribeña. Pida un presupuesto a la carta: Trío, Cuarteto o Banda.",
    blocTwo: "Chama est un des premiers musiciens Cubains à s'installer en Belgique. Chama est entouré par les meilleurs musiciens de la scène Latino  Américaine, et est considéré comme une valeur sûre de la Salsa. Chama est auteur-compositeur-interprète et a donné des milliers de concerts accompagné d'artistes de tous les coins du monde tels que: Khadja Nin, Francis Goya, Two Men Sounds, et bien d'autres. Si vous souhaitez organiser une fête, un anniversaire, un mariage ? Dans une ambiance Salsa, Brésilien, Merengue, Bachata, Reggaetoon, Caribbean Music. Demandez un devis à la Carte: Trio, Quartet, ou Band.",
    blocThree: "Chama was een van de eerste Cubaanse muzikanten die zich in België vestigde. Chama wordt omringd door enkele van de beste muzikanten uit de Latijns-Amerikaanse scene en wordt beschouwd als een van de beste in de wereld van de Salsa. Chama is een singer-songwriter die duizenden concerten heeft gegeven met artiesten van over de hele wereld, waaronder: Khadja Nin, Francis Goya, Two Men Sounds en vele anderen. Wil je een feest, een verjaardag of een bruiloft organiseren? In een Salsa, Braziliaanse, Merengue, Bachata, Reggaetoon, Caribische muzieksfeer. Vraag een offerte à la carte: Trio, Kwartet of Band.",
    blocFour: "Chama was one of the first Cuban musicians to settle in Belgium. Chama is surrounded by some of the best musicians on the Latin American scene, and is considered to be one of the best in the world of Salsa. Chama is a singer-songwriter who has performed thousands of concerts with artists from all over the world, including: Khadja Nin, Francis Goya, Two Men Sounds, and many others. If you want to organise a party, a birthday or a wedding? In a Salsa, Brazilian, Merengue, Bachata, Reggaetoon, Caribbean Music atmosphere. Ask for an à la carte quote: Trio, Quartet or Band.",
  }
  return (
    <div className="grid-bio">
      <div className="container grid-item">
        {/* <h2 className="breathe-spacing">{"Biographie"}</h2> */}
        <div className="split-v2">
          <div className="agenda-box">
            <div className="agenda-box-top">
              <h3 className="agenda-box-title">Español</h3>
            </div>
            <div>{defaultPROPS.blocOne}</div>
          </div>
          <div className="agenda-box">
            <div className="agenda-box-top">
              <h3 className="agenda-box-title">Français</h3>
            </div>
            <div>{defaultPROPS.blocTwo}</div>
          </div>
        </div>
        <div className="split-v2">
          <div className="agenda-box">
            <div className="agenda-box-top">
              <h3 className="agenda-box-title">Neederlands</h3>
            </div>
            <div className="">{defaultPROPS.blocThree}</div>
          </div>
          <div className="agenda-box">
            <div className="agenda-box-top">
              <h3 className="agenda-box-title">English</h3>
            </div>
            <div>{defaultPROPS.blocFour}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionBio