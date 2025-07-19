import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

const handleApiResponse = async (apiCall) => {
  try {
    const res = await apiCall();
    return res.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return err.response.data;
    }
    throw err;
  }
};

export const joinWaitlist = async (userName, email, source) => {
  return handleApiResponse(() =>
    api.post('/waitlist-user', { userName, email, source })
  );
};

export const joinWithReferral = async (userName, email, source, referralId) => {
  return handleApiResponse(() =>
    api.post('/waitlist-user', { userName, email, source, referralId })
  );
};

export const getReferralInfo = async (referralId) => {
  return handleApiResponse(() =>
    api.get(`/waitlist-user/${referralId}`)
  );
};
