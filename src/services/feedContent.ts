const BASE_URL = 'https://cross-platform.rp.devfactory.com';
const headers = {
  'Content-Type': 'application/json',
};

//Types
export type ForYouResponse = {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: {
    id: string;
    answer: string;
  }[];
  user: {
    name: string;
    avatar: string;
  };
  correct_options?: CorrectAnswerResponse;
};

export type CorrectAnswerResponse = {
  id: string;
  answer: string;
}[];

export async function getForYou(): Promise<ForYouResponse> {
  const response = await fetch(`${BASE_URL}/for_you`, {headers});
  const data = await response.json();
  return data;
}

export async function getCorrectAnswer(
  id: number,
): Promise<{correct_options: CorrectAnswerResponse}> {
  const response = await fetch(`${BASE_URL}/reveal?id=${id}`, {
    headers,
  });
  const data = await response.json();
  return data;
}
