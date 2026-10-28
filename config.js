// CONFIGURACIÓN EDITABLE: cambiá false por true cuando tengas las fotos nuevas.
const CONFIG = {
  nuestroEspacio: { enabled: false }
};
document.querySelectorAll('[data-feature="nuestroEspacio"]').forEach(seccion => {
  seccion.hidden = !CONFIG.nuestroEspacio.enabled;
});
