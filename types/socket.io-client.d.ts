// Temporary type definitions for socket.io-client
// This will be replaced when you run: npm install

declare module 'socket.io-client' {
  export interface SocketOptions {
    reconnection?: boolean;
    reconnectionDelay?: number;
    reconnectionAttempts?: number;
    transports?: string[];
  }

  export interface Socket {
    connected: boolean;
    on(event: string, callback: (...args: any[]) => void): void;
    off(event: string, callback?: (...args: any[]) => void): void;
    emit(event: string, ...args: any[]): void;
    disconnect(): void;
  }

  export function io(url: string, options?: SocketOptions): Socket;
}
