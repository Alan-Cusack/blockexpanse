/** Fetch images that are already accessible in-browser (blob:, data:, same-origin). */
const fetchLocalImage = async (url: string, init?: RequestInit) => {
  try {
    if (
      url.startsWith('blob:') ||
      url.startsWith('data:') ||
      url.startsWith(window.location.origin)
    ) {
      const res = await fetch(url, init);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res;
    }
    return null;
  } catch (error) {
    console.warn('Error fetching image:', error);
    return null;
  }
};

const fetchable = (url: string) =>
  url.startsWith('http:') ||
  url.startsWith('https:') ||
  url.startsWith('data:');

export const FetchUtils = {
  fetchLocalImage,
  fetchable,
};
