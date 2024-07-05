import Papa from 'papaparse';

const loadCSV = async (filePath) => {
  const response = await fetch(filePath);
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder('utf-8');
  const csv = decoder.decode(result.value);
  return new Promise((resolve) => {
    Papa.parse(csv, {
      header: false,
      complete: (results) => {
        resolve(results.data);
      },
    });
  });
};

export default loadCSV;
