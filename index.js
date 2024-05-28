const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const { connection } = require('./confige/confige')
const { userRoutes } = require("./routes/index")
const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use("/", userRoutes)

app.use("/", (req, res)=>{
    res.status(200).json({
        message: "Hello World"
    })
})
// ======================Start the server======================================>
app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log('Database connected successfully');
    } catch (error) {
        console.error(`Error connecting to the database: ${error.message}`);
        process.exit(1);
    }
    console.log(`Server is running on ${process.env.PORT}`);
});

