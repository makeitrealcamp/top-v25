import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    timestamp: () => `,"time":"${new Date().toISOString()}"`,
    options: {
      colorize: true,
    },
  }
})

export default logger;
