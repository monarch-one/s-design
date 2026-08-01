# s.design

Curriculum vitae editorial de **Vanesa Maria Salcedo**: tipografía de alto nivel, identidad, bilingüe ES/EN.

## Stack

- HTML / CSS / JS puro
- Sin frameworks, sin build

## URL pública

**https://s.design**

(sin nombre en la dirección; dominio corto)

Mientras el dominio no esté apuntado:

```bash
cd ~/s-design
python3 -m http.server 5174
# → http://localhost:5174
```

## Personalizar

Editá `CONTENT` e `I18N` en:

```
js/app.js
```

| Campo | Qué es |
|--------|--------|
| `name` / `nameLines` | Nombre (hero en 2 líneas) |
| `emailParts` | Email ofuscado base64 (`u` + `d`) |
| `instagram` | Handle sin @ (vacío = oculto) |
| `roles` | Frases del typewriter |
| `experience` | Trayectoria ES + EN |
| `education` | Formación ES + EN |
| `skills` | Grupos de skills |
| `work` | Selección portfolio (título/desc bilingüe, `href` opcional) |

Email ofuscado — regenerar:

```bash
python3 -c 'import base64; print(base64.b64encode(b"local").decode()); print(base64.b64encode(b"dominio.com").decode())'
```

## Diseño

- Papel warm (`#f4f0ea`) + tinta
- Acento terracota editorial
- Display: Cormorant Garamond · texto: Inter · labels: IBM Plex Mono
- Specimen tipográfico en about
- Typewriter en el rol
- Timeline limpia, grilla de work
- Toggle ES/EN persistente (`sd-lang`)
- `prefers-reduced-motion` respetado

## Deploy (GitHub Pages + dominio s.design)

```bash
cd ~/s-design
git init
git add .
git commit -m "feat: typographic CV for s.design"
# crea repo público monarh-one/s-design (o el que elijas)
# git remote add origin git@github.com:monarch-one/s-design.git
# git push -u origin main
```

1. Repo → **Settings → Pages → Deploy from branch `main` / root**
2. **Custom domain:** `s.design` (el archivo `CNAME` ya está)
3. DNS del dominio (en el registrar):

| Type | Name | Value |
|------|------|--------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `monarch-one.github.io` |

(ajustá el CNAME al user/org del repo)

4. En Pages: marcar **Enforce HTTPS** cuando el cert esté listo.
