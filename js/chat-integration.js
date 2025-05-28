/**
 * N8N Chat Widget Integration
 * Integración del widget oficial de @n8n/chat para el portafolio
 */

// Configuración del chatbot n8n
const N8N_CHAT_CONFIG = {
    // IMPORTANTE: Cambiar esta URL por tu webhook real de n8n
    // Ejemplo: 'https://tu-n8n-instance.com/webhook/tu-id-unico/chat'
    webhookUrl: 'http://localhost:5678/webhook/5c77ea87-5a9a-42e6-9349-a5db46aafe26/chat',
    
    // Configuraciones adicionales del widget
    mode: 'window', // 'window' para ventana flotante, 'fullscreen' para pantalla completa
    loadPreviousSession: true,
    showWelcomeScreen: true,
    initialMessages: [
        'Hola! 👋 Soy el asistente virtual de este portafolio.',
        'Puedes preguntarme sobre experiencia, proyectos, habilidades o información de contacto.'
    ]
};

// Función para cargar el CSS del widget n8n
function loadN8nChatCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);
}

// Función para crear el contenedor del chat
function createChatContainer() {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'n8n-chat';
    chatContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        width: 400px;
        height: 600px;
        max-width: calc(100vw - 40px);
        max-height: calc(100vh - 40px);
    `;
    document.body.appendChild(chatContainer);
    return chatContainer;
}

// Función principal para inicializar el chat
async function initializeN8nChat() {
    try {
        // Cargar CSS del widget
        loadN8nChatCSS();
        
        // Crear contenedor
        const chatContainer = createChatContainer();
        
        // Importar y crear el widget de chat dinámicamente
        const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
        
        // Configurar y crear el chat
        await createChat({
            webhookUrl: N8N_CHAT_CONFIG.webhookUrl,
            target: '#n8n-chat',
            mode: N8N_CHAT_CONFIG.mode,
            loadPreviousSession: N8N_CHAT_CONFIG.loadPreviousSession,
            showWelcomeScreen: N8N_CHAT_CONFIG.showWelcomeScreen,
            initialMessages: N8N_CHAT_CONFIG.initialMessages,
            
            // Personalización del tema
            theme: {
                primary: '#1ABC9C',
                secondary: '#2C3E50',
                background: '#ffffff',
                text: '#2C3E50'
            },
            
            // Configuración de la interfaz
            chatInputPlaceholder: 'Escribe tu pregunta...',
            subtitle: 'Asistente Virtual',
            footer: '',
            
            // Configuraciones adicionales
            getLatestSession: true,
            defaultLanguage: 'es'
        });
        
        console.log('✅ Chat widget de n8n inicializado correctamente');
        
    } catch (error) {
        console.error('❌ Error al inicializar el chat widget de n8n:', error);
        
        // Fallback: mostrar mensaje de error al usuario
        showChatErrorFallback();
    }
}

// Función de fallback en caso de error
function showChatErrorFallback() {
    const errorContainer = document.createElement('div');
    errorContainer.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #e74c3c;
            color: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            max-width: 300px;
            z-index: 1000;
            font-family: 'Lato', sans-serif;
        ">
            <div style="font-weight: bold; margin-bottom: 5px;">
                ⚠️ Chat no disponible
            </div>
            <div style="font-size: 14px;">
                El chatbot no está disponible en este momento. 
                Por favor, usa el formulario de contacto.
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="
                        background: none;
                        border: none;
                        color: white;
                        cursor: pointer;
                        float: right;
                        margin-top: 10px;
                        font-size: 12px;
                        text-decoration: underline;
                    ">
                Cerrar
            </button>
        </div>
    `;
    document.body.appendChild(errorContainer);
    
    // Auto-cerrar después de 8 segundos
    setTimeout(() => {
        if (errorContainer.parentElement) {
            errorContainer.remove();
        }
    }, 8000);
}

// Función para actualizar la configuración del webhook
function updateWebhookUrl(newUrl) {
    N8N_CHAT_CONFIG.webhookUrl = newUrl;
    console.log('🔄 URL del webhook actualizada:', newUrl);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Pequeño delay para asegurar que todos los recursos estén cargados
    setTimeout(() => {
        initializeN8nChat();
    }, 1000);
});

// Exportar funciones para uso externo
window.N8nChatIntegration = {
    initializeN8nChat,
    updateWebhookUrl,
    config: N8N_CHAT_CONFIG
};

// Información para desarrolladores
console.log(`
🤖 N8N Chat Widget Integration
📝 Para configurar:
   1. Cambia N8N_CHAT_CONFIG.webhookUrl por tu URL real
   2. Personaliza los mensajes iniciales si es necesario
   3. Ajusta el tema según tu diseño

📚 Documentación: https://www.npmjs.com/package/@n8n/chat
`);
