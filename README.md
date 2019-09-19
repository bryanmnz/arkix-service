# arkix-service

## Instalacion
 
npm install

##Acciones

- '/user' [GET] |  Obtiene todos los usuario  
- '/user/{{id}}' [GET] |  Obtiene usuario por id  
- '/user/{{id}}' [PUT] | Actualiza un usuario
Ejemplo:
    {  
        "role": "USER_ROLE",   
        "state": false,  
        "google": false,  
        "name": "Bryan Update",  
        "email": "prueba@hotmail.com",  
        "password": "Hola mundo"  
    }
- '/user' [POST] | Crea un usuario
Ejemplo:
    {  
        "role": "USER_ROLE",   
        "state": false,  
        "google": false,  
        "name": "Bryan Update",  
        "email": "prueba@hotmail.com",  
        "password": "Hola mundo"  
    }
- '/user/{{id}}' [DELETE] | Elimina un usuario