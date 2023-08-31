export default async function fetchJson(...args: unknown[]) {
    // @ts-ignore
    const response = await fetch(...args);

    const data = await response.json();

    if (response.ok) {
        return data;
    }

    throw new Error(data.error);
}
  