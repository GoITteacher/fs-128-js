import axios from 'axios';

export const fetchArticles = async (query, page) => {
  const baseUrl = 'https://newsapi.org/v2';
  const endPoint = '/everything';
  const url = baseUrl + endPoint;

  const params = {
    page: page,
    q: query,
    apiKey: 'c8747511a2c34730a83caaff4f3693e7',
    pageSize: 8,
  };

  const res = await axios.get(url, { params });
  return res.data;
};
