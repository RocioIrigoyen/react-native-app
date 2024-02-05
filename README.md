# E-Commerce App - "Manga Town" - React Native

Una aplicación de venta de manga (comic japonés) desarrollada con React Native.

## Funcionalidades Principales

### Perfil de usuario

- **Registro de usuarios:** Solo los usuarios autenticados pueden ingresar a la aplicación y realizar compras.
- **Información del usuario:** Le permite al usuario subir una foto de perfil (ya sea sacando una foto o eligiéndola en la galería) y agregar una dirección de envío mediante geolocalización. 

<img src="https://iili.io/J04mDSs.jpg" width="300" >
<img src="https://iili.io/J04mtln.jpg" width="300" >
<img src="https://iili.io/J04mZKX.jpg" width="300" >



### Autenticación con Firebase

- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.

### Pantalla de Categorías

- Muestra una selección de categorías en tarjetas. Los comics se dividen por género. 
- Al hacer clic en uno de los géneros, se navega a la pantalla con los comics correspondientes.

<img src="https://iili.io/J04mLPt.jpg" width="300" >


### Pantalla de Productos

- Lista todos los comics en tarjetas con nombre y foto.
- Incluye un buscador para filtrar productos por nombre.
- Al hacer clic en un producto, se navega a la pantalla de detalles del producto.

<img src="https://iili.io/J04msVI.jpg" width="300" >


### Pantalla de Detalles del Producto

- Proporciona una descripción de la trama del comic.
- Muestra el precio.
- Permite agregar el producto al carrito.
- Muestra un toast para notificar al usuario que se agregó el producto al carrito. 

<img src="https://iili.io/J04mioN.jpg" width="300" >

### Carrito de compras

- Al agregar un producto, este aparece en la pantalla del carrito.
- A su vez, aparece la opción de vaciar el carrito, confirmar la compra y el total a pagar.
- Cada elemento del carrito puede ser eliminado individualmente.
- Al realizar la compra, el carrito se vacía y aparece un toast para notificar al usuario.

<img src="https://iili.io/J04m6tp.jpg" width="300" >
<img src="https://iili.io/J04m4NR.jpg" width="300" >


### Navegación Inferior

```javascript
   const Navigator = () => {
  return (
    
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
      >
        <Tab.Screen 
          name="ShopStack" 
          component={ShopStack} 
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon="home" tab="Tienda" focused={focused}/>
          }}
        />
        <Tab.Screen 
          name="CartStack" 
          component={CartStack}
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon="shoppingcart" tab="Carrito" focused={focused}/>
          }}
        />
        <Tab.Screen 
          name="OrdersStack" 
          component={OrdersStack}
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon="bars" tab="Pedidos" focused={focused}/>
          }}
        />
        <Tab.Screen 
          name="MyProfileStack" 
          component={MyProfileStack}
          options={{
            tabBarIcon: ({focused}) => <TabIcon icon="user" tab="Perfil" focused={focused}/>
          }}
        />
      </Tab.Navigator>
  )
}
```

- **Pestaña 1 - Tienda:** Categorías y productos (stack principal).
- **Pestaña 2 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.
- **Pestaña 3 - Pedidos:** Historial de órdenes realizadas.
- **Pestaña 4 - Perfil:** Información del usuario, ubicación y carga de imagen de perfil.


## Tecnologías Utilizadas

- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Buttom tap:** Gestiona la navegación entre pestañas.
- **Expo-Location:** Permite acceder y gestionar la ubicación del usuario.
- **Expo-Picker-Image:** Facilita la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.
- **React Native Toast Message:** Agrega mensajes toast para notificar al usuario. 
- **YUP:** Permite hacer validaciones al registrarse/iniciar sesión.
- **Expo-SQLite:** Permite la persistencia de datos. 

## Instalación

1. Clona el repositorio: `git clone https://github.com/RocioIrigoyen/react-native-app.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`


## Información de contacto

Rocío Irigoyen - [Linkedin](https://www.linkedin.com/in/rocio-irigoyen/) - rocioirigoyen94@gmail.com

---
 