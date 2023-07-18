export function scrollToElement(point) {
    // Obtiene el elemento de destino por su ID
    const element = document.getElementById(point);
    // Hace scroll suavemente hasta el elemento de destino
    element.scrollIntoView({ behavior: "smooth" });
  }