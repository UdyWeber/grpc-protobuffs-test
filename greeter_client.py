import grpc

from codegen_impl.test_pb2 import HelloRequest
from codegen_impl.test_pb2_grpc import GreeterStub


def run():
    connection = grpc.insecure_channel('[::1]:50052')

    with connection as channel:
        stub = GreeterStub(channel)
        response = stub.SayHello(HelloRequest(name="Jolestest"))
        print(f"Server responded with: {response.message}")
        response = stub.SayHelloAgain(HelloRequest(name='Jolestest'))
        print(f"Server responded with: {response.message}")


if __name__ == '__main__':
    run()
