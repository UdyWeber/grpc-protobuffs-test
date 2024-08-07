"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const test_1 = require("./generated/services/test");
var GreeterClient = test_1.test.GreeterClient;
var HelloRequest = test_1.test.HelloRequest;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new GreeterClient("localhost:50052", grpc_js_1.credentials.createInsecure());
        client.waitForReady(20, (error) => {
            if (error) {
                console.error(error);
                process.exit(1);
            }
        });
        const req = new HelloRequest(["Jaw"]);
        client.SayHello(req, (err, value) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.info(value === null || value === void 0 ? void 0 : value.message);
        });
        client.SayHelloAgain(req, (err, value) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.info(value === null || value === void 0 ? void 0 : value.message);
        });
    });
}
main();
