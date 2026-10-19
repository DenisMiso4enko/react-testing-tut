import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';
import { expect, describe, it, vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('User profile', () => {
  // Подменяем fetch перед тестом
  beforeEach(() => {
    // vi.fn() создаёт mock-функцию Vitest. Теперь тест может задать её поведение и проверить вызовы, не обращаясь к реальному API.
    globalThis.fetch = vi.fn();
  });

  // Очищаем mocks после теста
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and display user data', async () => {
    // Задаём ответ для следующего вызова
    globalThis.fetch.mockResolvedValueOnce({
      json: async () => ({
        id: '4',
        name: 'Patricia Lebsack',
        email: 'Julianne.OConner@kory.org',
      }),
    });
    render(<UserProfile userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Ждём обновления после асинхронного ответа
    await waitFor(() => {
      expect(screen.getByText(/Patricia/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Julianne\.OConner@kory\.org/i),
      ).toBeInTheDocument();
    });
  });
});
