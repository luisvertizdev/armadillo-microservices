# Armadillo Microservices

Repositorio de **arquitectura de microservicios** para el proyecto **Armadillo**, orientado a una **aplicación móvil Android** y un **backend distribuido** basado en **Node.js**, **Docker**, **Docker Compose** y preparado para **Kubernetes**.

Este proyecto ha sido diseñado como parte de un curso/proyecto de **Sistemas Distribuidos**, aplicando principios reales de escalabilidad, tolerancia a fallos, seguridad y desacoplamiento.

---

## Descripción general

**Armadillo Microservices** implementa una arquitectura basada en **microservicios independientes**, cada uno con una responsabilidad clara, comunicados a través de un **API Gateway**, y desplegados en contenedores Docker.

La arquitectura está pensada para ser consumida por una **app Android (Jetpack Compose)** y otros clientes, aplicando conceptos modernos como:

* Separación de responsabilidades
* Escalamiento horizontal
* Alta disponibilidad
* Seguridad con JWT / OAuth2
* Observabilidad y resiliencia

---

## Microservicios incluidos

El sistema está compuesto por los siguientes servicios:

| Servicio                | Descripción                                                                      |
| ----------------------- | -------------------------------------------------------------------------------- |
| **gateway-service**     | API Gateway que centraliza el acceso a los microservicios y valida autenticación |
| **checkpoints-service** | Gestión de checkpoints (puntos de control)                                       |
| **implements-service**  | Gestión de implementos/equipamiento                                              |
| **incidents-service**   | Gestión de incidentes                                                            |
| **opts-service**        | Gestión de rutas y paradas (route stops)                                         |
| **workers-service**     | Gestión de trabajadores                                                          |

Cada servicio:

* Es **independiente**
* Tiene su propio contenedor Docker
* Puede escalarse de forma individual

---

## Arquitectura del sistema

```text
[ Android App ]
       |
       v
[ API Gateway ]  ---> Autenticación / JWT / OIDC
       |
       +--> checkpoints-service
       +--> implements-service
       +--> incidents-service
       +--> opts-service
       +--> workers-service
```

### Rol del API Gateway

* Punto único de entrada (Single Entry Point)
* Validación de JWT
* Enrutamiento a microservicios
* Posible rate limiting y logging

---

## Tecnologías utilizadas

| Capa                  | Tecnología                    |
| --------------------- | ----------------------------- |
| Lenguaje backend      | Node.js (Express)             |
| Contenerización       | Docker                        |
| Orquestación local    | Docker Compose                |
| Orquestación avanzada | Kubernetes (Docker Desktop)   |
| Seguridad             | JWT / OAuth2 / OpenID Connect |
| Cliente móvil         | Android (Jetpack Compose)     |
| Comunicación          | HTTP / REST                   |

---

## Estructura del proyecto

```text
armadillo-microservices/
├── gateway/
│   ├── Dockerfile
│   ├── index.js
│   └── routes/
│
├── checkpoints-service/
│   ├── Dockerfile
│   ├── app.js
│   └── routes/
│
├── implements-service/
├── incidents-service/
├── opts-service/
├── workers-service/
│
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## Ejecución con Docker Compose

### Requisitos

* Docker
* Docker Compose
* Node.js (solo para desarrollo local)

### 2️⃣ Clonar el reposi
