import axios from "axios";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const API_KEY = process.env.PANEL_API_KEY;

    const formResponse = {};

    const { name, email, company, service, message } = req.body;

    return new Promise((resolve, reject) => {
      axios({
        url: `${process.env.API_SERVER}/create-form-submission`,
        method: "POST",
        data: JSON.stringify({
          name: name.replace(/(<([^>]+)>)/gi, ""),
          email: email.replace(/(<([^>]+)>)/gi, ""),
          company: company.replace(/(<([^>]+)>)/gi, ""),
          service: service.replace(/(<([^>]+)>)/gi, ""),
          message: message.replace(/(<([^>]+)>)/gi, ""),
        }),
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      })
        .then((result) => {
          formResponse.message = result.data.message;
          res.status(200).json(formResponse);
        })
        .catch((err) => {
          formResponse.message = result.data.message;
          res.status(500).json(formResponse);
        });
    });
  }
}
