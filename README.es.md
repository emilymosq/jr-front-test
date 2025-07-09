# Verificador de Estados HTTP - Prueba para Desarrollador Frontend

[English Version](./README.md)

## ¡Bienvenido!

Hola y bienvenido al desafío de código HTTP Status Checker de Limbip. Esta prueba está diseñada para evaluar tus habilidades como desarrollador frontend junior utilizando React, TypeScript y Vite.

## Descripción del Proyecto

Esta aplicación es un simple Verificador de Códigos de Estado HTTP con una visualización de semáforo. El usuario puede ingresar un código de estado HTTP o un nombre de estado (como "ok" o "not found"), y la aplicación mostrará:

- Un semáforo que cambia de color según el estado (verde para éxito, rojo para errores)
- Información de estado con detalles sobre la categoría del código y su significado
- En dispositivos móviles, un botón de información que abre un modal con detalles del estado

## Tus Tareas

La aplicación tiene algunos errores y funcionalidades faltantes que necesitas corregir e implementar. Hemos incluido pruebas que te ayudarán a identificar algunos de los problemas.

### 1. Corregir los Errores Existentes

Hay varios errores en la aplicación que necesitan ser corregidos:

- **Fallos en las Pruebas**: Ejecuta `npm test` para ver las pruebas que fallan. Necesitas corregir el código para que estas pruebas pasen.
- **Diseño de Escritorio**: La aplicación actualmente está alineada a la izquierda en la vista de escritorio. Debería estar centrada en la pantalla.
- **Visualización del Modal**: En la vista móvil, al hacer clic en el botón de información, el modal debería mostrar la información de estado, pero actualmente no muestra el contenido correctamente.

### 2. Añadir Nueva Funcionalidad

Implementa las siguientes nuevas características:

- **Validación de URL y Verificación de Estado**:
  - Modifica el campo de texto para aceptar una URL
  - Si la entrada es una URL válida, realiza una petición a esa URL y extrae el código de estado de la respuesta
  - Actualiza el semáforo según la respuesta (verde si es accesible, rojo si ocurre un error)
  - En el modal/tarjeta de información, añade un botón para abrir la URL en una nueva pestaña si es accesible

- **Historial de Códigos de Estado con Visualización Gráfica**:
  - Implementa un hook personalizado de React (`useStatusHistory`) para registrar el historial de códigos de estado verificados
  - Integra una biblioteca de gráficos (como Chart.js o Recharts) para mostrar una representación visual del historial de códigos de estado
  - Añade un botón "Historial" que abre un modal mostrando el gráfico
  - El gráfico debe mostrar al menos los últimos 10 códigos de estado verificados, con diferentes colores para las distintas categorías de estado (2xx, 4xx, 5xx)

## Comenzando

```bash
# Instalar dependencias
npm install

# Ejecutar el servidor de desarrollo
npm run dev

# Ejecutar pruebas
npm test
```

## Instrucciones para la Entrega

Por favor, haz un fork de este repositorio y envíanos la URL de tu fork cuando hayas terminado. Si lo prefieres, también puedes enviar un archivo zip con tu solución.

**Nota**: El conocimiento de Git será valorado en nuestra evaluación, por lo que se recomienda usar un fork.

Si tienes alguna pregunta sobre la prueba, no dudes en contactarnos por correo electrónico.

## Lo que Valoramos

- **Buenas Prácticas de React, TypeScript y Vite**: Código limpio, estructura de componentes adecuada y uso efectivo de TypeScript
- **Pruebas**: Escribir y corregir pruebas, enfoque de desarrollo guiado por pruebas
- **Conocimiento de Git**: Mensajes de commit adecuados, estrategia de ramificación
- **Habilidades de Resolución de Problemas**: Cómo abordas y resuelves los errores e implementas nuevas características
- **Atención al Detalle**: Consideraciones de UI/UX, diseño responsivo
- **Comunicación**: Documentación clara, comentarios en el código

## Lista de Tareas

- [ ] Corregir la funcionalidad de la tecla Enter en el componente InputSection
- [ ] Añadir la clase CSS correcta al componente Title
- [ ] Corregir la prueba para el componente HttpStatusChecker
- [ ] Corregir el problema de visualización del contenido del modal
- [ ] Centrar la aplicación en la vista de escritorio
- [ ] Implementar la validación de URL y verificación de estado
- [ ] Añadir un botón para abrir URLs válidas en una nueva pestaña
- [ ] Crear un hook personalizado de React para el seguimiento del historial de estados
- [ ] Integrar una biblioteca de gráficos e implementar la visualización del historial
- [ ] Asegurar que todas las pruebas pasen

**Nota**: Si bien esperamos que completes todas las tareas, entendemos que algunas pueden ser desafiantes. Si te quedas atascado en una tarea en particular, puedes pasar a la siguiente y volver más tarde. Lo importante es que demuestres tu enfoque de resolución de problemas y habilidades de codificación. ¡Haz tu mejor esfuerzo!
