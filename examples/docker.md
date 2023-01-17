# Docker 🐳

Docker es una plataforma de contenedores de software. Los contenedores son una forma de empaquetar y distribuir aplicaciones de manera que puedan ser ejecutadas en cualquier entorno de manera consistente, independientemente de las dependencias o configuraciones del sistema. Docker permite crear, desplegar y ejecutar contenedores de manera fácil y eficiente.

## Crear e iniciar un contenedor

```bash
docker run --name my_container -d -p 8080:80 -v my_volume:/var/www/html nginx
```

- `--name` Asignar un nombre al contenedor
- `-d` Ejecute el contenedor en segundo plano e imprima el ID del contenedor
- `-e` Establecer variables de entorno
- `-p` Publicar los puertos de un contenedor en el host.
- `-v` Enlazar montar un volumen-d

## Listar contenedores

```bash
docker ps
```

## Listar todos los contenedores

```bash
docker ps -a
```

## Iniciar un contenedor

```bash
docker start my_container
```

## Detener un contenedor

```bash
docker stop my_container
```

## Eliminar un contenedor

```bash
docker rm my_container
```

## Eliminar todos los contenedores

```bash
docker rm $(docker ps -a -q)
```

## Eliminar todas las imágenes

```bash
docker rmi $(docker images -q)
```

## Crear una imagen

```bash
docker build -t my_image .
```

## Listar imágenes

```bash
docker images
```

## Eliminar una imagen

```bash
docker rmi my_image
```

## Crear un volumen

```bash
docker volume create my_volume
```

## Listar volúmenes

```bash
docker volume ls
```

## Eliminar un volumen

```bash
docker volume rm my_volume
```

## Crear una red

```bash
docker network create my_network
```

## Listar redes

```bash
docker network ls
```

## Eliminar una red

```bash
docker network rm my_network
```

## Conectar un contenedor a una red

```bash
docker network connect my_network my_container
```

## Desconectar un contenedor de una red

```bash
docker network disconnect my_network my_container
```

## Conectar un contenedor a una red

```bash
docker network connect my_network my_container
```

## Desconectar un contenedor de una red

```bash
docker network disconnect my_network my_container
```

## Crear un contenedor con una red

```bash
docker run --name my_container -d --network my_network nginx
```

## Crear un contenedor con un volumen

```bash
docker run --name my_container -d -v my_volume:/var/www/html nginx
```
