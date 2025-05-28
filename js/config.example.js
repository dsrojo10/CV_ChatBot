/**
 * Archivo de configuración para el chatbot N8N
 * Copia este archivo y renómbralo a 'config.js' para personalizar tu configuración
 */

// 🚨 IMPORTANTE: Cambia estos valores por los tuyos reales

// Configuración principal del webhook N8N
const N8N_WEBHOOK_CONFIG = {
    // 1. URL de tu webhook de N8N (OBLIGATORIO)
    // Ejemplo: 'https://tu-n8n-instance.com/webhook/tu-id-unico/chat'
    webhookUrl: 'http://localhost:5678/webhook/5c77ea87-5a9a-42e6-9349-a5db46aafe26/chat',
    
    // 2. Configuración del widget
    mode: 'window', // 'window' = ventana flotante, 'fullscreen' = pantalla completa
    
    // 3. Mensajes de bienvenida del chatbot
    initialMessages: [
        'Hola! 👋 Soy el asistente virtual de este portafolio.',
        'Puedes preguntarme sobre experiencia, proyectos, habilidades o información de contacto.',
        '¿En qué puedo ayudarte hoy?'
    ],
    
    // 4. Personalización del tema
    theme: {
        primary: '#1ABC9C',    // Color principal (verde del template)
        secondary: '#2C3E50',  // Color secundario (azul oscuro)
        background: '#ffffff', // Fondo del chat
        text: '#2C3E50'       // Color del texto
    },
    
    // 5. Textos de la interfaz
    ui: {
        chatInputPlaceholder: 'Escribe tu pregunta...',
        subtitle: 'Asistente Virtual del Portafolio',
        footer: '',
        welcomeScreenTitle: '¡Hola! 👋',
        welcomeScreenSubtitle: 'Soy tu asistente virtual'
    },
    
    // 6. Configuraciones adicionales
    options: {
        loadPreviousSession: true,
        showWelcomeScreen: true,
        defaultLanguage: 'es',
        getLatestSession: true,
        allowFileUploads: false,
        showTimestamps: true
    }
};

// 📝 INSTRUCCIONES DE USO:
// 
// 1. Crea tu workflow en N8N:
//    - Agrega un nodo "Webhook" como trigger
//    - Configura el webhook para recibir requests POST
//    - Agrega nodos para procesar y responder mensajes
//    - Activa el workflow y copia la URL del webhook
//
// 2. Actualiza la configuración:
//    - Cambia 'webhookUrl' por tu URL real
//    - Personaliza los mensajes iniciales
//    - Ajusta los colores según tu preferencia
//
// 3. Opcional - Variables de entorno:
//    - Si usas diferentes entornos (dev/prod), puedes usar:
//      webhookUrl: process.env.N8N_WEBHOOK_URL || 'tu-url-por-defecto'

// Exportar configuración para uso en chat-integration.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = N8N_WEBHOOK_CONFIG;
} else {
    window.N8N_WEBHOOK_CONFIG = N8N_WEBHOOK_CONFIG;
}

// 🔍 DEBUGGING:
// Si el chatbot no funciona, revisa:
// 1. Consola del navegador (F12) para errores
// 2. Que el workflow de N8N esté activo
// 3. Que la URL del webhook sea correcta
// 4. Configuración de CORS en N8N si es necesario

// 📚 RECURSOS ÚTILES:
// - Documentación N8N: https://docs.n8n.io/
// - Widget @n8n/chat: https://www.npmjs.com/package/@n8n/chat
// - Template Freelancer: https://startbootstrap.com/theme/freelancer/
