import { AxiosError, AxiosResponse } from "axios";
import { setupAxios as axios } from "../setup";
import { contactFormUrl } from "../url";

export interface ContactDataType {
  name: string,
  email: string,
  subject: string,
  body: string,
  token: string,
}

export async function ContactSendApi(data: ContactDataType) {
  return await axios({
    method: "POST",
    url: contactFormUrl,
    data,
  })
    .then((response: AxiosResponse<ContactDataType>) => {
      return response.data;
    })
    .catch((error: AxiosError<AxiosResponse>) => {
      return error.response?.data;
    });
}