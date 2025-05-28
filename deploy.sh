#!/bin/bash

# 🚀 Script de Deploy para Zeabur
# Automatiza el proceso de commit y push para deploy automático

echo "🚀 Iniciando proceso de deploy a Zeabur..."

# Verificar que estamos en el directorio correcto
if [ ! -f "index.html" ]; then
    echo "❌ Error: No se encuentra index.html. Ejecuta desde el directorio raíz del proyecto."
    exit 1
fi

# Verificar estado de git
echo "📋 Verificando estado del repositorio..."
git status

# Agregar todos los cambios
echo "📦 Agregando archivos al staging..."
git add .

# Verificar si hay cambios para commitear
if git diff --staged --quiet; then
    echo "ℹ️  No hay cambios para commitear."
    echo "🚀 Pushing commits existentes..."
    git push origin main
else
    # Solicitar mensaje de commit
    echo "💬 Ingresa el mensaje de commit (o presiona Enter para usar mensaje por defecto):"
    read commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="🚀 Deploy update: $(date +'%Y-%m-%d %H:%M:%S')"
    fi
    
    # Hacer commit
    echo "📝 Haciendo commit: $commit_message"
    git commit -m "$commit_message"
    
    # Push a main
    echo "⬆️  Subiendo cambios a GitHub..."
    git push origin main
fi

# Verificar si el push fue exitoso
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Deploy iniciado exitosamente!"
    echo ""
    echo "🔗 Enlaces importantes:"
    echo "   GitHub: https://github.com/dsrojo10/CV_ChatBot"
    echo "   Zeabur Dashboard: https://dashboard.zeabur.com"
    echo ""
    echo "📋 Próximos pasos:"
    echo "   1. Ve a Zeabur para monitorear el deploy"
    echo "   2. Una vez completado, prueba tu sitio"
    echo "   3. Configura el webhook N8N con la URL de producción"
    echo ""
    echo "⏱️  El deploy suele tomar 2-3 minutos en completarse."
else
    echo "❌ Error en el push. Revisa la configuración de git y tu conexión."
    exit 1
fi
