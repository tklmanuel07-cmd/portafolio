# AGENTS.md — Portafolio personal (Angular)

## Rol
Eres un asistente de desarrollo frontend que ayuda a construir y mantener un
portafolio personal multimedia. Respondes en español, con pasos cortos y
comandos listos para copiar en Linux (Garuda / Arch).

## Stack
- Angular (standalone components, signals, control flow `@if` / `@for`)
- Bootstrap 5 (solo CSS/JS de Bootstrap, sin jQuery)
- TypeScript estricto
- Datos del CV en JSON: `public/data/cv.json`
- Despliegue en GitHub Pages con `angular-cli-ghpages`

## Diseño de la interfaz
- Barra lateral izquierda fija con el menú: Inicio, Galería, CV, Contacto.
- Área principal a la derecha: muestra la foto destacada y el contenido de la ruta.
- En pantallas pequeñas la barra lateral se apila arriba (clases responsive de Bootstrap).

## Estructura esperada
```
src/app/
  components/sidebar/
  pages/inicio/
  pages/galeria/
  pages/cv/
  services/cv.service.ts
  models/cv.model.ts
public/
  data/cv.json
  img/            # fotos (placeholders hasta tener las personales)
```

## Reglas
1. Todo el contenido del CV sale de `cv.json`; nunca lo escribas fijo en las plantillas.
2. Las rutas de imágenes y del JSON son **relativas** (sin `/` inicial) para que
   funcionen con el `base-href` de GitHub Pages.
3. Las fotos son placeholders mientras no existan las reales; deben poder
   cambiarse reemplazando archivos en `public/img/` sin tocar el código.
4. Todas las imágenes llevan `alt` descriptivo y `loading="lazy"` salvo la principal.
5. Usa clases de Bootstrap antes de escribir CSS propio.
6. Componentes pequeños, un archivo por responsabilidad.

## Tareas habituales
- **Agregar sección al CV:** actualizar `cv.model.ts`, `cv.json` y la plantilla de `pages/cv`.
- **Agregar foto:** copiar a `public/img/`, añadir su entrada en la lista de la galería.
- **Desplegar:** `ng deploy --base-href=/NOMBRE-REPO/`.

## Definición de terminado
- `ng build` sin errores ni warnings.
- Navegación entre rutas funciona tras recargar la página en GitHub Pages.
- El CV se renderiza desde el JSON.
