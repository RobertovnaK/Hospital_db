const express = require ("express")
const app = express()
const port = 3000

const patients = [
        {
            Id: 1,
            FullName: "Vlasov Ivan Semenovich",
            ContactDetails: "+73956289563",
            InsurancePolicy: "4629547569041236"
            DateOfBirth: "14.02.1999"
        },
    
        {
            Id: 2,
            FullName: "Voloshina Ekaterina Denisovna",
            ContactDetails: "+73926489469",
            InsurancePolicy: "2456785643653468"
            DateOfBirth: "10.10.2010"
        },

        {
            Id: 2,
            FullName: "Sergeev Kirill Kirillovich",
            ContactDetails: "+78635647865",
            InsurancePolicy: "9765434543456761"
            DateOfBirth: "09.03.1997"
        },

]

app.get( '/', (req,res) => {
    res.set({
        "content-type": "application/json",
    })
    res.json (JSON.stringify(clients))
 })
 
 app.listen(port, () => {
    console.log(`Мы начали прослушивать ${port} порт.`)
 })
