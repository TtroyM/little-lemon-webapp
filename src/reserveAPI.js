export const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0];
  try {
    const times = await fetchAPI(today);
    return times;
  } catch (error) {
    console.error('Error fetching times:', error);
    return [];
  }
};

export const updateTimes = async (selectedDate) => {
  try {
    const times = await fetchAPI(selectedDate);
    return times;
  } catch (error) {
    console.error('Error updateing times:', error);
    return [];
  }
};