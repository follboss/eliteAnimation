const htmlEmail = ({...mailOptions}) => {
    return `
            <h3>Prise de contact</h3>
            <p>Nom : ${mailOptions.name}</p>
            <p>Email : ${mailOptions.email}</p>
            <p>Message : ${mailOptions.message}</p>
        `
};

module.exports= {
    htmlEmail
};
