async function index(req, res) {
  const description =
    "Watson Airlines es una de las aerolíneas más grandes de Estados Unidos. Con más de 30 años de historia, conectamos a las personas con oportunidades mientras ampliamos la comprensión de nuestro planeta y las personas que lo habitan. Ofrecemos nuestro valor y hospitalidad únicos en más de 50 aeropuertos en más de 15 países. Además, somos miembros de la Asociación Internacional de Transporte Aéreo (IATA) , una asociación comercial que representa a más de 300 aerolíneas, equivalente a cerca del 83% del tráfico aéreo total. Esto nos permite operar de manera segura, segura, eficiente y económica bajo reglas claramente definidas. Somos pioneros en el uso de la tecnología y defendemos activamente su uso para mejorar la experiencia de nuestros clientes.";
  res.json(description);
}

module.exports = {
  index,
};
