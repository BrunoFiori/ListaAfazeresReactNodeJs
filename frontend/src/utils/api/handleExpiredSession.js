const handleExpiredSession = () => {
  console.error("A sessão expirou!");
  window.location.href = "/sessaoexpirou";
};

export default handleExpiredSession;
