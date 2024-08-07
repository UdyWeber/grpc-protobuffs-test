import {credentials} from "@grpc/grpc-js";
import {GreeterClient} from "./generated/test_grpc_pb";
import {HelloRequest} from "./generated/test_pb";

async function main() {
    const client = new GreeterClient("[::1]:50052", credentials.createInsecure());

    const req = new HelloRequest();
    req.setName("Jaw")

    client.sayHello(req, (err, value) => {
        if (err) {
            console.error(err);
            process.exit(1)
        }

        console.info(value.getMessage())
    })

    client.sayHelloAgain(req, (err, value) => {
        if (err) {
            console.error(err);
            process.exit(1)
        }

        console.info(value.getMessage())
    })
}

main()
