# 00 · Buenas Practicas

## Idioma e identificadores
- Mensajes al usuario y de commit: **español**.
- Columnas de DB: **español** (el schema es en español) → `snake_case`.
- Helpers, funciones y clases: **inglés**.
- `camelCase` variables/funciones · `PascalCase` clases/componentes ·
  `SCREAMING_SNAKE_CASE` constantes · `snake_case` solo columnas de DB.

## Schemas
-  Si agregas un sub-namespace nuevo bajo `shared/schemas/`, actualiza `shared/package.json#exports` o nada podrá importarlo.

## Convenciones de nomenclatura

| Convención | Formato | Dónde se usa en este proyecto |
| --- | --- | --- |
| `camelCase` | `nombreDeVariable` | Variables, funciones y propiedades en JavaScript/TypeScript (`req.validatedQuery`, `getById`). |
| `PascalCase` | `NombreDeClase` | Clases y componentes (`XController`, `AppError`, `NotFoundError`). |
| `snake_case` | `nombre_de_columna` | Columnas de la base de datos y campos que provienen directo de Prisma (`paciente_id`, `usuario_id`, `deleted_at`). |
| `kebab-case` | `nombre-de-archivo` | Nombres de archivo y rutas (`03-base-de-datos-y-prisma.md`). |
| `SCREAMING_SNAKE_CASE` | `NOMBRE_CONSTANTE` | Constantes y enums compartidos (`ACCIONES`, `ENTIDADES`, `PAGE_SIZE`, `MAX_PAGE_SIZE`). |

### Reglas específicas

- **JavaScript/TypeScript:** usa `camelCase` para variables, parámetros y funciones. Usa `PascalCase` únicamente para clases, controladores y tipos.
- **Base de datos:** las columnas y modelos de Prisma respetan `snake_case`, tal como están definidos en el esquema de MySQL. No los renombres a `camelCase` al leerlos; conviértelos explícitamente en la capa de formato (`formatX`) si el frontend necesita otro nombre.
- **Constantes y enums:** usa `SCREAMING_SNAKE_CASE` para valores fijos que no cambian en tiempo de ejecución, como los definidos en `shared/constants/users.js`.
- **Archivos y carpetas:** usa `kebab-case` para nombres de archivo Markdown y `camelCase` o `PascalCase` para archivos de código, según si exportan una función módulo o una clase.
