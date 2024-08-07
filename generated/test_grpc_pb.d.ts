// package: test
// file: test.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as test_pb from "./test_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    sayHelloAgain: IGreeterService_ISayHelloAgain;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<test_pb.HelloRequest, test_pb.HelloReply> {
    path: "/test.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<test_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<test_pb.HelloRequest>;
    responseSerialize: grpc.serialize<test_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<test_pb.HelloReply>;
}
interface IGreeterService_ISayHelloAgain extends grpc.MethodDefinition<test_pb.HelloRequest, test_pb.HelloReply> {
    path: "/test.Greeter/SayHelloAgain";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<test_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<test_pb.HelloRequest>;
    responseSerialize: grpc.serialize<test_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<test_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<test_pb.HelloRequest, test_pb.HelloReply>;
    sayHelloAgain: grpc.handleUnaryCall<test_pb.HelloRequest, test_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: test_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: test_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: test_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAgain(request: test_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAgain(request: test_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloAgain(request: test_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: test_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: test_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: test_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAgain(request: test_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAgain(request: test_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloAgain(request: test_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
