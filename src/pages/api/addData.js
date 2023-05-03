
export default async function addData() {
    const fs = require('fs');
    console.log("add")
    const newResult = {
        componentes: "Robbie Doe",
        rendimiento: "Lagos",
        veredicto: 20
    };
    fs.writeFileSync('../utils/performance.json', JSON.stringify(newResult));


}