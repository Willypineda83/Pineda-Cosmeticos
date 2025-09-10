
# Pineda Videos (11ty + Decap CMS)

## ¿Qué hace?
- / (galería) muestra todas las tarjetas con miniaturas y link a /v/slug/.
- /v/slug/ es una página con OG tags que redirige a YouTube.
- /admin panel para agregar/editar videos sin tocar código.

## Cómo usar
1) Sube esto a un repo (GitHub) y conéctalo a Netlify.
2) En Netlify:
   - Build cmd: `npm run build`
   - Publish dir: `_site`
   - En Identity: Enable Identity y Git Gateway. Invítate a ti mismo.
3) En `src/_data/site.json` cambia `siteUrl` a tu dominio real.
4) Abre `https://TU-DOMINIO.com/admin` para entrar al panel y agregar videos.
5) Cada vez que guardes un video en el panel, Netlify hace deploy y:
   - Aparece la tarjeta en la portada.
   - Se crea la página `/v/slug/` con OG y redirección a YouTube.

## Notas
- Sube las miniaturas desde el panel y usa imágenes 1200x630 para mejor preview.
- Puedes cambiar estilos en `src/styles.css`.
