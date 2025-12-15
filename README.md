# 🔗 SnapLink - Acortador de URLs Full Stack

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**SnapLink** es una aplicación web moderna diseñada para acortar enlaces largos de forma instantánea y generar códigos QR dinámicos para compartir fácilmente. Construida con una arquitectura Full Stack robusta, enfocada en la seguridad, la escalabilidad y una experiencia de usuario fluida.

🔗 **Demo en vivo:** [PEGA AQUÍ EL LINK DE VERCEL]

---

## 🚀 Características Principales

* **Acortamiento en Tiempo Real:** Convierte URLs largas en enlaces cortos y manejables al instante.
* **Generación de QR:** Crea automáticamente un código QR descargable para cada enlace.
* **Interfaz Reactiva:** UI moderna construida con **Angular 17+ (Signals)**, con feedback visual de carga y notificaciones.
* **Portapapeles:** Copiado rápido con un solo clic e indicadores visuales.
* **Seguridad Avanzada:**
    * **Rate Limiting:** Protección contra fuerza bruta y spam de peticiones.
    * **Validación de Datos:** Uso de DTOs y Pipes para asegurar la integridad de la información.
    * **Helmet & CORS:** Configuración de cabeceras seguras para el despliegue en la nube.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
* **Framework:** Angular 17+ (Standalone Components).
* **Estilos:** Tailwind CSS (Diseño Responsivo).
* **Lenguaje:** TypeScript.
* **Hosting:** Vercel.

### Backend
* **Framework:** NestJS (Node.js).
* **Base de Datos:** MongoDB (Mongoose / MongoDB Atlas).
* **Seguridad:** Helmet, Throttler (Rate Limiting), Class-validator.
* **Hosting:** Render.

---

## 📦 Instalación y Ejecución Local

Si deseas correr este proyecto en tu máquina local, sigue estos pasos:

### Prerrequisitos
* Node.js (v18 o superior)
* MongoDB (Local o Atlas URI)

### 1. Clonar el repositorio
```bash
git clone [https://github.com/MateoCatalogna/SnapLink.git](https://github.com/MateoCatalogna/SnapLink.git)
cd SnapLink
