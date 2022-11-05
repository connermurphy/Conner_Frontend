import axios from "axios";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const API_KEY = process.env.PANEL_API_KEY;

    const { name, email, company, service, message } = req.body;

    const response = new Promise((resolve, reject) => {
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
        .then(result => {          
          resolve(result);
        })
        .catch(err => {          
          reject(err);
        });
    });

    return response.then(_ => {      
        return res.status(200).json({ 'message': 'Success' });
    }).catch(err => {      
        return res.status(500).json({ 'message': 'Failed' });
    })
  }
}
