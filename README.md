# Mindcare
Este es un sistema que ofrece 4 cosas importantes relacionadas con eñ bienestar emocional, primero podras consultar informacion d elos temas sobre la salud mental, podras hacer test de retroalimentacion para poder tener un resultado, podras hacer citas con los psicologos ya sea de manera online o presencial y podras ener un chat para poder compartir tus experiencias con las demas personas 
## Instalación de frontend

Se debe copiar el link del repositorio <https://github.com/Kevinmcs7/frontend_mindcare_movil.git> y pegarlo en su terminal con la ruta donde se quiera guardar para ejecutar el comando git clone. Por ejemplo yo lo hago en la carpeta C, usted lo puede hacer donde prefiera.

``` sh
C:\> git clone https://github.com/Kevinmcs7/frontend_mindcare_movil.git
```


Luego, se debe navegar hasta la carpeta donde esta el proyecto para instalar las dependencias que el proyecto utiliza para funcionar con el comando:

``` sh
npm install
```


## Ejecución

Por ultimo, para ejecutar el proyecto y ver su contenido y funcionamiento se utiliza el comando:

``` sh
cd MINDCARE
```

``` sh
npm start
```

## Instalación del backend

Se deben realizar los mismos pasos de instalación del frontend, para desplegarlo sin problemas

Pero como paso extra, si es necesario, dentro de esta constante que se encuentra en CitasScreens2.js se debe cambiar la URL que aparece en el fetch por la url que se usa cuando se ejecuta su frontend, si es la misma que ya se encuentra, no realice la modificación. (es decir cambiar la ip)

```sh
abres un cmd
```

```sh
pones ipconfig
```

```sh
y copias la ip de tu maquina
```

luego haces estos pasos 

```js
    const response = await fetch("http://10.180.30.113:3000/api/Registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
```
tambien en la parte de CitaRegistrada.js igual cambiar la url que aparece en el fetch por la ip que tiene en ese momento
```js
    const getCitas = async () => {
    try {
      const response = await fetch("http://10.180.30.113:3000/api/Dashboard");
      if (!response.ok) {
        throw new Error("Error al obtener las citas");
      }
      const data = await response.json();
      setCitas(data); // Almacena las citas en el estado
    } catch (error) {
      console.error("Error al obtener las citas:", error);
    }
  };
```

Para su ejecución es tambien con el comando:

``` sh
cd MINDCARE
```

```sh
npm start
```

Nota: se tiene que tener el backend y el frontend corriendo al mismo tiempo paras que funcione.
