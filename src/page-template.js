const generateManager = projectManagerArr => {
    return `
        ${projectManagerArr
            .map(({ name, role, id, email, officeNumber, school, github }) => {
                return `
                <div class="col-3 m-2 shadow p-3 mb-5 bg-white rounded">
                    <div class="border bg-primary">
                        <h2>${name}</h2>
                        <h3>${role}</h3>
                    </div>
                    <div class="bg-light">
                        <p>ID: ${id}</p>
                        <p>Email: <a href="mailto: ${email}">${email}</a></p>
                        ${role === "Manager" ? `<p>Office Number: ${officeNumber}</p>` : ''}
                        ${role === "Engineer" ? `<p>Github: <a href="https://github.com/${github}">${github}</a></p>` : ''}
                        ${role === "Intern" ? `<p>School: ${school}</p>` : ''}
                    </div>
                </div>       
            `
            })}
    `
}

const generatePage = (team) => {

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

<body>

    <header class="col-lg- p-3 border bg-danger text-center mb-5">
        <h1 class="text-white">My Teams</h1>
    </header>

    <section class="container flex-row text-center">
        <div class="row justify-content-around">
            ${generateManager(team)}
        </div>
    </section>


</body>

</html>`
}
module.exports = generatePage;