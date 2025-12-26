export interface GenerationState {
  isLoading: boolean;
  error: string | null;
  content: string | null;
}

export interface ApiKeyProps {
  apiKey: string;
  setApiKey: (key: string) => void;
}