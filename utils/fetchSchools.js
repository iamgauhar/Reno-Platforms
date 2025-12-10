
export async function fetchSchools() {
  try {
    const res = await fetch('/api/schools', { method: 'GET' });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to fetch schools: ${res.status} ${text}`);
    }
    const schools = await res.json();
    return schools;
  } catch (err) {
    console.error('fetchSchoolsClient error:', err);
    throw err;
  }
}
