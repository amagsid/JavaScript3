async function fetchData(URL) {
  try {
    const res = await fetch(URL);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error(`no response from the server`);
    }
  } catch (err) {
    catchShowError(`Something went wrong: ${err.message}`);
  }
}
