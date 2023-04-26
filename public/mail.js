function sendMail(){
    var params = {
        name: documentById("name").value,
        email: documentById("email").value,
        subject: documentById("subject").value,
        message: documentById("message").value,
    };

const serviceID = "service_h8ectql" ;
const templateID = "template_ppiwm3z";

emailjs.send(serviceID, templateID, params)
    .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent successfully");
        })
        .catch((err) => console.log(err));
}