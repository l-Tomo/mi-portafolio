export const useContact = () => {
  const whatsapp = `https://wa.me/573117581397?text=Cordial Saludo Tomás, Vengo de tu página me llamaste la atención y quiero trabajar contigo.`;
  
  const mensajeEmail = "Cordial Saludo Tomás,%0D%0A%0D%0AVengo de tu página, me llamaste la atención y quiero trabajar contigo.";
  const email = `mailto:tomas.alzatecardona13@gmail.com?subject=Interesado en trabajar contigo&body=${mensajeEmail}`;

  return {
    linkedin: 'https://www.linkedin.com/in/tomas-alzate-a199ba346/',
    whatsapp,
    email,
    resume: '/Files/HojaDeVida.pdf',
  };
};
