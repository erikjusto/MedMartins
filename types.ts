import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface AreaItem {
  title: string;
  description: string;
}

export enum LocationType {
  REMOTE = 'REMOTE',
  PRESENTIAL = 'PRESENTIAL'
}

export interface QuesitoSuggestion {
  question: string;
  reasoning: string;
}

export interface AiResponse {
  analysis: string;
  suggestedQuestions: QuesitoSuggestion[];
}