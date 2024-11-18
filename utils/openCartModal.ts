export const openCartModal = async (): Promise<void> => {
  // Importar bootstrap de manera segura para TypeScript
  const bootstrap = await import('bootstrap');

  // Cerrar modales abiertos
  const modalElements: NodeListOf<Element> = document.querySelectorAll(".modal.show");
  modalElements.forEach((modal: Element) => {
    const modalInstance: any = bootstrap.Modal.getInstance(modal);
    if (modalInstance) {
      modalInstance.hide();
    }
  });

  // Cerrar offcanvas abiertos
  const offcanvasElements: NodeListOf<Element> = document.querySelectorAll(".offcanvas.show");
  offcanvasElements.forEach((offcanvas: Element) => {
    const offcanvasInstance: any = bootstrap.Offcanvas.getInstance(offcanvas);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  });

  // Abrir el modal del carrito
  const cartElement: HTMLElement | null = document.getElementById("shoppingCart");
  if (!cartElement) return;

  const myModal: any = new bootstrap.Modal(cartElement, {
    keyboard: false,
  });

  myModal.show();
  
  cartElement.addEventListener("hidden.bs.modal", () => {
    myModal.hide();
  });
};
