// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var test_pb = require('./test_pb.js');

function serialize_test_HelloReply(arg) {
  if (!(arg instanceof test_pb.HelloReply)) {
    throw new Error('Expected argument of type test.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_HelloReply(buffer_arg) {
  return test_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_HelloRequest(arg) {
  if (!(arg instanceof test_pb.HelloRequest)) {
    throw new Error('Expected argument of type test.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_HelloRequest(buffer_arg) {
  return test_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/test.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: test_pb.HelloRequest,
    responseType: test_pb.HelloReply,
    requestSerialize: serialize_test_HelloRequest,
    requestDeserialize: deserialize_test_HelloRequest,
    responseSerialize: serialize_test_HelloReply,
    responseDeserialize: deserialize_test_HelloReply,
  },
  // Sends another greeting
sayHelloAgain: {
    path: '/test.Greeter/SayHelloAgain',
    requestStream: false,
    responseStream: false,
    requestType: test_pb.HelloRequest,
    responseType: test_pb.HelloReply,
    requestSerialize: serialize_test_HelloRequest,
    requestDeserialize: deserialize_test_HelloRequest,
    responseSerialize: serialize_test_HelloReply,
    responseDeserialize: deserialize_test_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
