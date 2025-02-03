# Proyecto de Billetera en Next.js con Smart Contract en Solidity

## Descripción
Este proyecto es una aplicación web desarrollada con Next.js y TailwindCSS que integra un contrato inteligente desplegado en la red de pruebas Fuji de Avalanche. Permite a los usuarios conectarse a su billetera y visualizar información relevante.

## Tecnologías utilizadas
- **Next.js**: Framework de React para el desarrollo del frontend.
- **Solidity**: Lenguaje de programación utilizado para desarrollar el contrato inteligente.
- **Ethers.js**: Librería para interactuar con la blockchain.
- **Framer Motion**: Animaciones en la interfaz de usuario.
- **TailwindCSS**: Framework de estilos para mejorar la apariencia de la aplicación.

## Getting Started

Este es un proyecto [Next.js](https://nextjs.org/) inicializado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Instalación y ejecución en desarrollo

1. Clonar el repositorio:
   ```bash
   git clone <repositorio-url>
   cd <nombre-del-proyecto>
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del proyecto

### 1. Frontend
- **`page.tsx`**: Página principal que utiliza Framer Motion para animaciones y renderiza el componente `PrivateInfo`.
- **`navbar.tsx`**: Barra de navegación con opciones como "Home", "About", "Contract" y "Connect Wallet". Implementa la conexión con MetaMask usando `ethers.js`.
- **`card.tsx`**: Componente de tarjeta con efectos visuales de rendimiento y estado.
- **`tailwind.config.js`**: Configuración de TailwindCSS.

### 2. Contrato Inteligente
- **`PrivateInfoStorage.sol`**: Contrato en Solidity desplegado en la red Fuji, que almacena y gestiona información privada de los usuarios.
- **`contract.ts`**: Archivo de conexión e interacción con el contrato inteligente desde el frontend.

## Uso de la aplicación
- Conectar la billetera MetaMask desde la barra de navegación.
- Acceder a la página del contrato para ver información privada almacenada.

## Información de despliegue
- Enlace de la aplicación: [Web3 App](https://web3-qk3ri4cfp-camilaquimbayas-projects.vercel.app/)
- El contrato inteligente está desplegado actualmente en la dirección: `0x74d020bE53e94C785c45Ed53B66cf317A4b0D595`
- Dirección de la billetera del desarrollador: `0x84aF5aF40dBB25580547d8369F6710aE6620FBC9`
- Red de despliegue: Fuji (Avalanche Testnet)

### Comando para desplegar el contrato
```bash
npx hardhat run scripts/deploy.js --network fuji
```

## Mejoras futuras
- Implementar la funcionalidad de escritura en el contrato.
- Agregar autenticación con wallets descentralizadas.
- Mejorar la interfaz y experiencia de usuario.

## Licencia
Este proyecto se encuentra bajo la licencia MIT.

