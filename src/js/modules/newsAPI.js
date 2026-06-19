import axios from 'axios';

export const fetchArticles = async (query, page) => {
  const BASE_URL = 'https://newsapi.org';
  const END_POINT = '/v2/everything';
  const url = BASE_URL + END_POINT;

  const params = {
    q: query,
    apiKey: 'c8747511a2c34730a83caaff4f3693e7',
    pageSize: 10,
    page: page,
  };

  const res = await axios.get(url, { params });
  return res.data;
};
