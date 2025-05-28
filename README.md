# 🚀 Portafolio Web con Chatbot N8N

MVP de página de portafolio personal integrando el template "Freelancer" de Start Bootstrap con widget de chatbot de n8n.

## 🎯 Características

- ✅ Template responsive "Freelancer" de Start Bootstrap
- ✅ Widget oficial de chatbot @n8n/chat integrado
- ✅ Personalización de contenido (nombre, proyectos, skills)
- ✅ Configuración lista para webhook de n8n
- ✅ Preparado para deploy en Zeabur

## 🛠️ Stack Tecnológico

- **Frontend**: HTML + CSS + JavaScript (Bootstrap 5)
- **Chatbot**: [@n8n/chat](https://www.npmjs.com/package/@n8n/chat) widget oficial
- **Hosting**: Zeabur (ready)
- **Control de versiones**: GitHub

## 🚀 Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/CV_ChatBot.git
cd CV_ChatBot
```

### 2. Configurar el chatbot N8N

Edita el archivo `js/chat-integration.js` y cambia la URL del webhook:

```javascript
const N8N_CHAT_CONFIG = {
    // CAMBIAR por tu URL real de n8n
    webhookUrl: 'TU_URL_DE_N8N_WEBHOOK_AQUI',
    // ... resto de configuración
};
```

### 3. Personalizar contenido

- **Nombre y título**: Edita las variables en `index.html`
- **Proyectos**: Reemplaza las imágenes en `assets/img/portfolio/`
- **Avatar**: Reemplaza `assets/img/avataaars.svg`
- **Información personal**: Modifica secciones About y Contact

### 4. Probar localmente

```bash
# Opción 1: Servidor simple con Python
python -m http.server 8000

# Opción 2: Usando Live Server en VS Code
# Instala la extensión Live Server y haz clic derecho -> "Open with Live Server"
```

Visita: `http://localhost:8000`

## 🤖 Configuración del Chatbot N8N

### Paso 1: Crear workflow en N8N

1. Abre tu instancia de N8N
2. Crea un nuevo workflow
3. Agrega un nodo "Webhook" como trigger
4. Configura el webhook para recibir mensajes del chat
5. Agrega lógica de respuesta (puede incluir IA, bases de datos, etc.)
6. Copia la URL del webhook

### Paso 2: Configurar el widget

El widget oficial de @n8n/chat se carga automáticamente desde CDN. Solo necesitas:

1. Cambiar `webhookUrl` en `js/chat-integration.js`
2. Personalizar mensajes iniciales si lo deseas
3. Ajustar el tema según tu diseño

### Ejemplo de configuración:
```javascript
const N8N_CHAT_CONFIG = {
    webhookUrl: 'https://tu-n8n.com/webhook/tu-id/chat',
    initialMessages: [
        'Hola! 👋 Soy el asistente virtual de este portafolio.',
        'Puedes preguntarme sobre experiencia, proyectos o contacto.'
    ]
};
```

## 🌐 Deploy en Zeabur

### Opción 1: Deploy directo desde GitHub

1. Conecta tu repositorio a Zeabur
2. Selecciona "Static Site" como tipo de proyecto
3. Deploy automático en cada push

### Opción 2: Deploy manual

1. Comprime todos los archivos (excepto `.git/`)
2. Sube el archivo a Zeabur
3. Configura como sitio estático

## 📁 Estructura del Proyecto

```
CV_ChatBot/
├── index.html                 # Página principal
├── README.md                  # Este archivo
├── .gitignore                # Archivos a ignorar
├── assets/                   # Recursos estáticos
│   ├── favicon.ico
│   └── img/
│       ├── avataaars.svg     # Avatar principal
│       └── portfolio/        # Imágenes de proyectos
├── css/
│   └── styles.css           # Estilos del template
└── js/
    ├── scripts.js           # Scripts del template
    └── chat-integration.js  # Integración del chatbot N8N
```

## ✨ Personalización

### Cambiar información personal
Edita las siguientes secciones en `index.html`:

- **Masthead**: Nombre y título profesional
- **About**: Descripción personal y skills
- **Portfolio**: Proyectos y trabajos
- **Contact**: Información de contacto

### Personalizar el chatbot
En `js/chat-integration.js`:

- `webhookUrl`: URL de tu webhook N8N
- `initialMessages`: Mensajes de bienvenida
- `theme`: Colores del widget
- `chatInputPlaceholder`: Texto del input

### Cambiar colores
Los colores principales están en `css/styles.css`:

- **Primary**: `#1ABC9C` (verde)
- **Secondary**: `#2C3E50` (azul oscuro)

## 📋 Checklist de Deploy

- [ ] ✅ Personalizar contenido del portafolio
- [ ] ✅ Configurar webhook URL de N8N
- [ ] ✅ Probar chatbot localmente
- [ ] ✅ Subir código a GitHub
- [ ] ✅ Configurar deploy en Zeabur
- [ ] ✅ Verificar funcionamiento en producción
- [ ] ✅ Probar responsiveness en móviles

## 🔗 Links Útiles

- [Template Freelancer](https://startbootstrap.com/theme/freelancer/)
- [Documentación @n8n/chat](https://www.npmjs.com/package/@n8n/chat)
- [Documentación N8N](https://docs.n8n.io/)
- [Zeabur Docs](https://zeabur.com/docs)

## 📞 Soporte

Si tienes problemas:

1. Revisa la consola del navegador para errores
2. Verifica que la URL del webhook N8N sea correcta
3. Asegúrate de que el workflow de N8N esté activo
4. Comprueba la configuración de CORS en N8N si es necesario

## 📄 Licencia

Este proyecto utiliza el template Freelancer de Start Bootstrap (MIT License).

---

**⚡ ¡Listo para impresionar con tu portafolio interactivo!**