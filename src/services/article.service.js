const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;


export const getArticleSummary = async (articleUrl) => {
  const headers = new Headers();
  headers.append("X-RapidAPI-Key", rapidApiKey);
  headers.append(
    "X-RapidAPI-Host",
    "article-extractor-and-summarizer.p.rapidapi.com"
  );

  const endpoint = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(
    articleUrl
  )}&length=2`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
  } catch (error) {
       throw error;
  }
};
