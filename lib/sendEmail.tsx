import axios from 'axios';

const sendEmail = async (name: string ,email: string, company: string, phone: string, help: string, msg: string) => {
  return axios({
    method: 'post',
    url: '/api/send-mail',
    data: JSON.stringify({
        name, email, company, phone, help, msg,
    }),
    headers: {
        "Content-Type": "application/json",
    },
  });
};

export default sendEmail;