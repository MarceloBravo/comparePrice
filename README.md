# comparePrice
Comparador de precios desarrollada en Angular y Nodejs  

## Pasos para correr la aplicación  
### Configurando el Backend  
1. Clonar el proyecto:  
    ```
    git clone https://github.com/MarceloBravo/comparePrice.git    
    ```
2. Ingresar a la carpeta backend del proyecto:  
    ```
    cd comparePrice/backend  
    ```
3. instalar dependencias:  
    ```
    npm install  
    ```
4. Levantar el backend desde simbolo de sistema, posicionandose en el directorio backend y corriendo el comando:
    ```
    node index
    ```
  
### Configurando en Frontend
5. Desde una consola de simbolo de sistemas, acceder al directorio frontend del proyecto:
    ```
    cd frontend  
    ```
6. Instalar dependencias con npm:  
    ```
    npm install  
    ```
7. Editar el archivo ***frontend/src/app/services/constantes.service.ts*** y actualizar la variable endPoint con la ruta o host y puerto en el cual se ha levantado el API en el paso 4:    
      
     export class ConstantesService {  
       public endPoint: string = 'http://192.168.xx.xxx:3001'    

      constructor() { }  
     }      
8. Desde simbolo de sistemas y posicionado en el directorio frontend, correr la aplicación:   
    ```
    ng serve -o
    ```

Obs.: Para realizar webscrapping, se utilizan los serviciós del API **serpapi**, el cual otorga 100 consultas por mes, en caso de que la aplicación no debuelva resultados puede deberse a que ya se ha alcanzado la cuota máxima de consultas, frente a ello hay que esperar hasta el 1° del mes siguiente.
