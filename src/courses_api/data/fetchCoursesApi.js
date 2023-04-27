import { getConfig } from "@edx/frontend-platform";
import getAuthenticatedHttpClient from "@edx/frontend-platform/auth";


const fetchCoursesApi = async () => {
  const httpClient = getAuthenticatedHttpClient();
  const response = await httpClient.get(`${getConfig().LMS_BASE_URL}/api/courses-list/`);
  const data = await response.json();
  return data;
}

export default fetchCoursesApi;
