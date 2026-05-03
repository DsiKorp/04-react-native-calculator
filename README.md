# 🧮 Calculator App

> Una aplicación de calculadora moderna y responsiva construida con **React Native** y **Expo**, disponible en iOS, Android y Web.

**Características principales:** Operaciones matemáticas básicas (+, -, ×, ÷), interfaz intuitiva, gestión de decimales, cambio de signo, eliminación de dígitos y reseteo.

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
- ➕ **Operaciones matemáticas completas** - suma, resta, multiplicación y división
- 🔢 **Soporte para decimales** y cambio de signo
- ⌫ **Control preciso** - eliminar dígitos y resetear operaciones

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
│   └── index.tsx                # Pantalla principal de la calculadora
│
├── components/                   # Componentes reutilizables
│   ├── CalculatorButton.tsx     # Botón de la calculadora (números y operadores)
│   └── ThemeText.tsx            # Componente de texto con tema automático
│
├── constants/                    # Constantes de la aplicación
│   └── Colors.ts                # Configuración de colores y temas
│
├── hooks/                        # Hooks personalizados
│   └── useCalculator.tsx        # Hook principal de la lógica de calculadora
│
├── styles/                       # Estilos globales
│   └── global-styles.ts         # Estilos reutilizables
│
├── assets/                       # Recursos estáticos
│   ├── fonts/                   # Fuentes personalizadas
│   └── images/                  # Imágenes
│
├── app.json                     # Configuración de Expo
├── package.json                 # Dependencias del proyecto
├── tsconfig.json                # Configuración de TypeScript
├── eslint.config.js             # Configuración de ESLint
└── README.md                    # Este archivo
```

---

## 🏗️ Arquitectura de la Calculadora

### Flujo de Datos

```
┌─────────────────────────────────────────┐
│      useCalculator Hook                 │
│  (Lógica y Estado de la Calculadora)    │
└────────────┬────────────────────────────┘
             │
             ├─ Mantiene el estado: number, formula, prevNumber
             ├─ Maneja operaciones: +, -, ×, ÷
             ├─ Realiza cálculos sub-operaciones
             └─ Retorna funciones de acción
                 │
                 ├─ addOperation()
                 ├─ subtractOperation()
                 ├─ multiplyOperation()
                 ├─ divideOperation()
                 ├─ calculateResult()
                 ├─ deleteLast()
                 ├─ toggleSign()
                 └─ clean()
                     │
                     ↓
         ┌──────────────────────────┐
         │  Componentes UI          │
         ├──────────────────────────┤
         │ • CalculatorButton       │
         │ • ThemeText              │
         │ • Pantalla de resultado  │
         └──────────────────────────┘
```

### Estados Principales

| Estado | Descripción | Ejemplo |
|--------|-----------|---------|
| `number` | Número actual siendo ingresado | `"42"` |
| `formula` | Fórmula completa con operador | `"15 + 25"` |
| `prevNumber` | Resultado de la sub-operación | `"40"` |
| `lastOperation` | Última operación realizada | `"+"` |

---

## 🧮 Lógica de Operaciones

El hook `useCalculator` implementa una máquina de estados que:

1. **Captura números**: Acumula dígitos en el estado `number`
2. **Registra operador**: Guarda la operación en `lastOperation`
3. **Calcula sub-resultado**: Muestra resultado parcial en `prevNumber`
4. **Resultado final**: Ejecuta `calculateResult()` para obtener el resultado

```typescript
// Ejemplo: 15 + 25 =
number: "15"                    // Usuario escribe 15
addOperation()                  // Usuario presiona +
number: "25"                    // Usuario escribe 25
formula: "15 + 25"             // Se actualiza la fórmula
calculateResult()              // Usuario presiona =
number: "40"                   // Resultado mostrado
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

## 💡 Ejemplo de Uso

### Hook `useCalculator`

El corazón de la aplicación es el hook personalizado `useCalculator` que maneja toda la lógica de cálculo:

```typescript
import { useCalculator } from '@/hooks/useCalculator';

export default function CalculatorScreen() {
  const {
    formula,           // La fórmula completa: "15 + 25"
    number,            // Número actual: "40"
    prevNumber,        // Resultado anterior: "40"
    clean,             // Limpia todo
    toggleSign,        // Cambia el signo (+/-)
    deleteLast,        // Elimina el último dígito
    addOperation,      // Suma
    subtractOperation, // Resta
    multiplyOperation, // Multiplicación
    divideOperation,   // División
    decimalOperation,  // Agrega decimal
    calculateResult    // Calcula el resultado
  } = useCalculator();

  return (
    <View style={styles.container}>
      <Text style={styles.formula}>{formula}</Text>
      <Text style={styles.result}>{number}</Text>
    </View>
  );
}
```

### Operaciones Disponibles

```typescript
// Operaciones aritméticas básicas
clean();              // Resetea la calculadora a "0"
addOperation();       // Suma
subtractOperation();  // Resta
multiplyOperation();  // Multiplicación
divideOperation();    // División
calculateResult();    // Calcula el resultado final

// Operaciones especiales
toggleSign();         // Cambia 5 a -5 o viceversa
deleteLast();         // Elimina el último dígito
decimalOperation();   // Agrega un punto decimal
```

### Componentes Principales

#### **CalculatorButton**
Botón reutilizable para los números y operadores:

```typescript
<CalculatorButton
  label="7"
  onPress={() => pressNumber('7')}
  type="number"
/>

<CalculatorButton
  label="+"
  onPress={addOperation}
  type="operation"
/>

<CalculatorButton
  label="="
  onPress={calculateResult}
  type="equals"
/>
```

#### **ThemeText**
Componente de texto que se adapta automáticamente al tema:

```typescript
<ThemeText style={styles.result} type="title">
  {number}
</ThemeText>
```

### Ejemplo de Cálculo Completo

```
1. Usuario presiona: 5 + 3 = 
2. Formula se actualiza: "5 + 3"
3. Resultado mostrado: "8"
4. prevNumber guarda el resultado para la siguiente operación
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
