import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateQueryString(params: Record<string, string>) {
  const isEmpty = Object.values(params).every((value) => value === '');

  if (isEmpty) {
    return '';
  }

  const queryString = Object.entries(params)
    .filter(([, value]) => value !== '')
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          value as unknown as string,
        )}`,
    )
    .join('&');

  return `?${queryString}`;
}

export function debounce<T extends (...args: string[]) => void>(
  func: T,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export const colorMap: Record<string, { main: string; light: string }> = {
  blue: { main: '#3b82f6', light: '#eff6ff' },
  red: { main: '#ef4444', light: '#fef2f2' },
  green: { main: '#22c55e', light: '#f0fdf4' },
  yellow: { main: '#eab308', light: '#fefce8' },
  purple: { main: '#a855f7', light: '#faf5ff' },
  pink: { main: '#ec4899', light: '#fdf2f8' },
  indigo: { main: '#6366f1', light: '#eef2ff' },
  orange: { main: '#f97316', light: '#fff7ed' },
  teal: { main: '#14b8a6', light: '#f0fdfa' },
  cyan: { main: '#06b6d4', light: '#ecfeff' },
};
