import { io, Socket } from 'socket.io-client';
import type { TechRequest } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

class ApiService {
  private socket: Socket | null = null;

  // Initialize WebSocket connection
  initSocket(): Socket {
    if (!this.socket) {
      this.socket = io(API_URL, {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
        transports: ['websocket', 'polling']
      });
      
      this.socket.on('connect', () => {
        console.log('✅ Connected to real-time server');
      });

      this.socket.on('disconnect', () => {
        console.log('❌ Disconnected from server');
      });

      this.socket.on('connect_error', (error: Error) => {
        console.error('Connection error:', error.message);
      });
    }
    return this.socket;
  }

  // Helper method for fetch requests
  private async fetchWithErrorHandling<T>(
    url: string,
    options?: RequestInit
  ): Promise<T> {
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          // If response is not JSON, use status text
        }
        throw new Error(errorMessage);
      }
      
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        console.error('API Error:', error.message);
        throw error;
      }
      throw new Error('An unknown error occurred');
    }
  }

  // On-Demand Requests
  async getOnDemandRequests(): Promise<TechRequest[]> {
    return this.fetchWithErrorHandling<TechRequest[]>(
      `${API_URL}/api/on-demand-requests`
    );
  }

  async createOnDemandRequest(data: {
    id: string;
    topic: string;
    field: string;
    initiator: string;
    type?: 'ONLINE' | 'OFFLINE';
  }): Promise<TechRequest> {
    return this.fetchWithErrorHandling<TechRequest>(
      `${API_URL}/api/on-demand-requests`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );
  }

  async submitClassApplication(data: {
    request_id: string;
    name: string;
    roll: string;
    github: string;
    message: string;
  }): Promise<{ id: number; message: string }> {
    return this.fetchWithErrorHandling<{ id: number; message: string }>(
      `${API_URL}/api/class-applications`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );
  }

  // Mentor Applications
  async submitMentorApplication(data: {
    role: 'student' | 'teacher';
    full_name: string;
    github: string;
    branch?: string;
    year?: string;
    room_number?: string;
    experience_years: number;
    teaching_count: number;
    project_url: string;
    motivation: string;
  }): Promise<{ id: number; message: string }> {
    return this.fetchWithErrorHandling<{ id: number; message: string }>(
      `${API_URL}/api/mentor-applications`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );
  }

  // Contact Form
  async submitContact(data: {
    name: string;
    email: string;
    subject?: string;
    message: string;
  }): Promise<{ id: number; message: string }> {
    return this.fetchWithErrorHandling<{ id: number; message: string }>(
      `${API_URL}/api/contact`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );
  }

  // Contributor Applications
  async submitContributorApplication(data: {
    full_name: string;
    github: string;
    engineering_path: string;
    motivation: string;
  }): Promise<{ id: number; message: string }> {
    return this.fetchWithErrorHandling<{ id: number; message: string }>(
      `${API_URL}/api/contributor-applications`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );
  }

  // WebSocket event listeners
  onNewRequest(callback: (request: TechRequest) => void): void {
    if (!this.socket) this.initSocket();
    this.socket?.on('new_request', callback);
  }

  onRequestUpdated(callback: (request: TechRequest) => void): void {
    if (!this.socket) this.initSocket();
    this.socket?.on('request_updated', callback);
  }

  // Remove event listeners
  offNewRequest(callback?: (request: TechRequest) => void): void {
    if (this.socket) {
      if (callback) {
        this.socket.off('new_request', callback);
      } else {
        this.socket.off('new_request');
      }
    }
  }

  offRequestUpdated(callback?: (request: TechRequest) => void): void {
    if (this.socket) {
      if (callback) {
        this.socket.off('request_updated', callback);
      } else {
        this.socket.off('request_updated');
      }
    }
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  // Check if socket is connected
  isConnected(): boolean {
    return this.socket?.connected || false;
  }
}

export const apiService = new ApiService();
