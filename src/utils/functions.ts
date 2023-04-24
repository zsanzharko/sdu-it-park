export async function fetchData(link: string) {
  try {
    const res = await fetch(link);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error();
  }
}
