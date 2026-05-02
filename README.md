# 🧮 Calculator App

> Una aplicación de calculadora moderna y responsiva construida con **React Native** y **Expo**, disponible en iOS, Android y Web.

---

## ✨ Características

- 🎨 **Interfaz elegante** con tema claro y oscuro automático
- 📱 **Totalmente responsiva** - funciona perfectamente en móviles y web
- ⚡ **Rendimiento optimizado** con animaciones suaves
- 🎯 **Navegación intuitiva** con pestañas inferiores
- 🌙 **Soporte para modo oscuro** nativo del sistema
- ♿ **Accesibilidad mejorada** con haptic feedback
- 🔤 **Tipado completo** con TypeScript
- 📐 **Diseño multiplataforma** - iOS, Android y Web

---

## 🛠️ Tecnologías Utilizadas

### Framework & Base
- **React Native** `0.81.5` - Framework para desarrollo multiplataforma
- **Expo** `~54.0.33` - Plataforma de desarrollo para React Native
- **React** `19.1.0` - Biblioteca UI
- **TypeScript** `~5.9.2` - Lenguaje con tipado estático

### Navegación
- **Expo Router** `~6.0.23` - Enrutamiento basado en archivos
- **React Navigation** `^7.1.8` - Navegación multiplataforma
- **Bottom Tabs Navigation** `^7.4.0` - Navegación con pestañas inferiores

### UI & Animaciones
- **React Native Reanimated** `~4.1.1` - Animaciones de alto rendimiento
- **React Native Gesture Handler** `~2.28.0` - Manejo de gestos
- **Expo Image** `~3.0.11` - Carga y caché de imágenes optimizado
- **Vector Icons** `^15.0.3` - Iconos vectoriales SF Symbols

### Integración & Utilidades
- **Expo Constants** `~18.0.13` - Constantes del sistema
- **Expo Font** `~14.0.11` - Carga de fuentes personalizadas
- **Expo Haptics** `~15.0.8` - Retroalimentación háptica
- **Expo Linking** `~8.0.11` - Manejo de URLs profundas
- **Expo Safe Area Context** `~5.6.0` - Área segura del dispositivo
- **Expo Screens** `~4.16.0` - Optimización de pantallas
- **Expo Status Bar** `~3.0.9` - Barra de estado

### Desarrollo
- **ESLint** `^9.25.0` - Linting de código
- **ESLint Config Expo** `~10.0.0` - Configuración recomendada para Expo

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** `14.0` o superior
- **npm** `6.0` o **bun** (gestor de paquetes)
- **Expo CLI** (se instala con las dependencias)

---

## 🚀 Instalación

### 1. Clonar o descargar el repositorio

```bash
git clone <url-del-repositorio>
cd 04-calculator-app-dsk
```

### 2. Instalar dependencias

**Con npm:**
```bash
npm install
```

**Con bun:**
```bash
bun install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm start
# o
bun start
```

---

## 📱 Ejecutar la Aplicación

### Android

```bash
npm run android
```

Requiere Android Studio y un emulador configurado.

### iOS

```bash
npm run ios
```

Requiere Xcode instalado (solo macOS).

### Web

```bash
npm run web
```

Se abrirá automáticamente en tu navegador predeterminado.

### Expo Go (Desarrollo rápido)

```bash
npm start
```

Escanea el código QR con la aplicación [Expo Go](https://expo.dev/go) en tu dispositivo móvil.

---

## 🏗️ Estructura del Proyecto

```
04-calculator-app-dsk/
├── app/                          # Directorio de enrutamiento (Expo Router)
│   ├── _layout.tsx              # Layout principal
│   ├── modal.tsx                # Pantalla modal
│   └── (tabs)/                  # Navegación con pestañas
│       ├── _layout.tsx
│       ├── index.tsx            # Pantalla principal
│       └── explore.tsx          # Pantalla de exploración
│
├── components/                   # Componentes reutilizables
│   ├── themed-text.tsx          # Texto con tema
│   ├── themed-view.tsx          # Vista con tema
│   ├── parallax-scroll-view.tsx # Scroll con efecto parallax
│   ├── hello-wave.tsx           # Componente de saludo
│   ├── haptic-tab.tsx           # Tab con feedback háptico
│   ├── external-link.tsx        # Enlace externo
│   └── ui/                      # Componentes UI
│       ├── collapsible.tsx
│       ├── icon-symbol.tsx
│       └── icon-symbol.ios.tsx
│
├── constants/                    # Constantes de la aplicación
│   └── theme.ts                 # Configuración de temas
│
├── hooks/                        # Hooks personalizados
│   ├── use-color-scheme.ts      # Hook para esquema de color
│   ├── use-color-scheme.web.ts  # Versión web del hook
│   └── use-theme-color.ts       # Hook para colores del tema
│
├── assets/                       # Recursos estáticos
│   └── images/                  # Imágenes
│
├── app.json                     # Configuración de Expo
├── package.json                 # Dependencias del proyecto
├── tsconfig.json                # Configuración de TypeScript
├── eslint.config.js             # Configuración de ESLint
└── README.md                    # Este archivo
```

---

## 💻 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en Web
npm run web

# Linting del código
npm run lint

# Resetear el proyecto (crea un directorio app limpio)
npm run reset-project
```

---

## 🎨 Tema y Personalización

### Cambiar Tema

Los temas claro y oscuro se definen en [`constants/theme.ts`](constants/theme.ts). La aplicación detecta automáticamente la preferencia del sistema y permite cambiar entre modos.

### Colores Personalizados

Modifica los valores en `constants/theme.ts` para personalizar:
- Colores primarios y secundarios
- Colores de fondo
- Colores de texto
- Colores de bordes

---

## 🔍 Linting

Para verificar la calidad del código:

```bash
npm run lint
```

---

## 📚 Aprender Más

### Recursos Oficiales
- [📖 Documentación de Expo](https://docs.expo.dev/)
- [🎓 Tutorial de Expo](https://docs.expo.dev/tutorial/introduction/)
- [⚛️ React Native Docs](https://reactnative.dev/)
- [🧭 Expo Router Guide](https://docs.expo.dev/router/introduction/)

### Comunidad
- [💬 Discord de Expo](https://chat.expo.dev)
- [🐙 GitHub de Expo](https://github.com/expo/expo)
- [🌐 Comunidad de React Native](https://reactnative.dev/help)

---

## 🔧 Troubleshooting

### El app no se carga
```bash
# Limpiar caché
npm start --clear
```

### Problemas con dependencias
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Error en iOS
```bash
# Limpiar build
cd ios && rm -rf Pods Podfile.lock && cd ..
npm run ios
```

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👤 Autor

Desarrollado por **DSK** 

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Soporte

Si encuentras problemas o tienes preguntas:
- 📧 Abre un issue en GitHub
- 💬 Únete a la comunidad de Expo en Discord
- 📚 Consulta la documentación oficial

---

**Hecho con ❤️ usando React Native y Expo**
