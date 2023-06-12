# react-clean-architecture

## Estructura de directorios

```bash
─src
    ├───assets
    ├───guards
    ├───interceptors
    ├───models
    ├───pages
    │   ├───login
    │   │   ├───adapter
    │   │   ├───components
    │   │   └───services
    │   └───private
    │       └───dashboard
    │           ├───adapter
    │           ├───components
    │           ├───models
    │           └───services
    ├───services
    └───utilities
```

### assets
Este directorio contiene imágenes, iconos, fuentes u otros recursos estáticos que no cambian durante la ejecución de la aplicación.

### guards
Aquí se encuentran los guardias de rutas, que se encargan de validar si un usuario tiene permisos para acceder a una ruta específica.

### interceptors
En este directorio se localizan los interceptores de peticiones, los cuales añaden información adicional a las solicitudes HTTP. Por ejemplo, se puede agregar un token de autenticación a todas las peticiones salientes y manejar las respuestas antes de que lleguen a su destino.

### models
Este directorio contiene los modelos de datos utilizados en la aplicación. Los modelos definen la estructura de los datos y pueden ser utilizados para tipar y validar los datos recibidos desde el backend.

### pages
Dentro de este directorio se encuentran las páginas de la aplicación, cada una en su propio directorio. Cada página puede contener los siguientes subdirectorios:
  #### adapter
  Los adaptadores de datos se encargan de convertir los datos recibidos desde el backend en modelos de datos utilizados en la aplicación, y viceversa.

  #### components
  Aquí se encuentran los componentes específicos de la página. Estos componentes se utilizan para mostrar información en la interfaz de usuario. Si un componente es reutilizable en varias páginas, debe moverse al directorio components en la raíz del proyecto.

  #### services
  Los servicios de la página se encargan de realizar peticiones al backend y de manejar la lógica de negocio relacionada con esa página en particular.

### services
En este directorio se ubican los servicios que pueden ser reutilizados en diferentes partes de la aplicación. Por ejemplo, un servicio de autenticación que se encargue de realizar peticiones HTTP relacionadas con el inicio de sesión y el registro de usuarios.

### utilities
Los archivos de utilidades se encuentran en este directorio. Estos archivos contienen funciones y utilidades reutilizables en diferentes partes de la aplicación. Por ejemplo, funciones para formatear fechas, validar campos o realizar transformaciones de datos.

## Librerías utilizadas
