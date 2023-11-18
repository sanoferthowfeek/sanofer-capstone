import redis from "redis";
import dotenv from "dotenv";
dotenv.config();

const redisclient = () => {
    return redis.createClient()
}

const client = redisclient();
client.on("error",(err) =>{
    console.log(err)
})

client.on("connect",() =>{
    console.log("connected to redis");
});

client.on("end",() =>{
    console.log("redis connection ended");
});

client.on("SIGQUIT",() =>{
    client.quit()
});

// module.exports = client;
export {client}