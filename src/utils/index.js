export const formatName = (nameWithDash) => nameWithDash.replace("-", " ");

export const mapResults = ({ results }) =>
  results.map(({ url, name }) => ({
    url,
    name,
    id: parseInt(url.match(/\/(\d+)\//)[1]),
  }));
